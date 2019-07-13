import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid'

import TranscriptionsTemplate from '../components/Templates/TranscriptionsTemplate/TranscriptionsTemplate'
import Card from '../components/atoms/Card/Card'
import AddNewRow from '../components/molecules/AddNewRow/AddNewRow'
import FetchingDataFailed from '../components/molecules/FetchingDataFailed/FetchingDataFailed'
import TranscriptionForm from '../components/molecules/TranscriptionForm/TranscriptionForm'

import * as transcriptionsActions from '../redux/transcriptions/transcriptions.actions'
import NavigationContainer from './Navigation.container'

class TranscriptionsPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.handleAddNewRow = this.handleAddNewRow.bind(this)
    this.handleDeleteRow = this.handleDeleteRow.bind(this)
    this.handlePostTranscriptions = this.handlePostTranscriptions.bind(this)
  }

  handleDeleteRow(id) {
    const { actions } = this.props
    return actions.deleteRow(id)
  }

  handleAddNewRow() {
    const { actions } = this.props
    return actions.addNewRow({
      id: uuid(),
      voice: 'Place your title here',
      text: 'Place your text here'
    })
  }

  handlePostTranscriptions() {
    if (this.state.messages && this.state.messages.length > 0) {
      const filterMessages = this.state.messages.filter(message => console.log(message.isChecked))
      console.log(filterMessages)
    }
  }

  render() {
    const { transcriptions } = this.props
    if (transcriptions.messages) {
      return (
        <TranscriptionsTemplate header={<NavigationContainer post={this.handlePostTranscriptions} />}>
          <form>
            <Card>
              {transcriptions.messages.map(({ id, voice, text }) => (
                <TranscriptionForm
                  key={id}
                  id={id}
                  voice={voice}
                  text={text}
                  deleteRow={this.handleDeleteRow}
                  checkboxChanged={transcription => this.state.messages.push(transcription)}
                  checkbox={<Checkbox
                    name={id}
                  />}
                  text={<EditableTitle
                    value={this.state.voiceValue}
                    onChange={this.handleVoiceChange}
                  />}
                  title={<EditableTextContent />}
                  deleteIcon=
                />
              ))}

            </Card>
          </form>
          <AddNewRow addRow={this.handleAddNewRow} />
        </TranscriptionsTemplate>
      )
    }
    if (transcriptions.error) {
      return (
        <TranscriptionsTemplate header={<NavigationContainer />}>
          <Card>
            <FetchingDataFailed
              error={`Ups, something went wrong: ${transcriptions.error}`}
            />
          </Card>
        </TranscriptionsTemplate>
      )
    }
    return (
      <TranscriptionsTemplate header={<NavigationContainer />}>
        <Card />
        <AddNewRow addRow={this.handleAddNewRow} />
      </TranscriptionsTemplate>
    )
  }
}

TranscriptionsPageContainer.propTypes = {
  transcriptions: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  actions: PropTypes.object.isRequired
}

const mapStateToProps = ({ transcriptions }) => ({
  transcriptions
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(transcriptionsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(
  TranscriptionsPageContainer,
)

import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid'

import Card from '../components/atoms/Card/Card'
import TranscriptionForm from '../components/molecules/TranscriptionForm/TranscriptionForm'
import FetchingDataFailed from '../components/molecules/FetchingDataFailed/FetchingDataFailed'
import AddNewRow from '../components/molecules/AddNewRow/AddNewRow'

import * as transcriptionsActions from '../redux/transcriptions/transcriptions.actions'

class CardContainer extends React.Component {
  constructor(props) {
    super(props)

    this.handleAddNewRow = this.handleAddNewRow.bind(this)
    this.handleDeleteRow = this.handleDeleteRow.bind(this)
  }

  handleDeleteRow(id) {
    const { actions } = this.props
    return actions.deleteRow(id)
  }

  handleAddNewRow() {
    const { actions } = this.props
    return actions.addNewRow(({
      id: uuid(),
      voice: 'Placeholder title',
      text: 'Placeholder text'
    }))
  }

  render() {
    const { transcriptions } = this.props
    if (transcriptions.messages) {
      return (
        <div>
          <Card>
              {transcriptions.messages.map(({ id, voice, text }) => (
                <TranscriptionForm
                  key={id}
                  id={id}
                  voice={voice}
                  text={text}
                  deleteRow={this.handleDeleteRow}
                />
              ))}
          </Card>
          <AddNewRow addRow={this.handleAddNewRow} />
        </div>
      )
    }
    if (transcriptions.error) {
      return (
        <Card>
          <FetchingDataFailed
            error={`Ups, something went wrong: ${transcriptions.error}`}
          />
        </Card>
      )
    }
    return (
      <div>
        <Card />
        <AddNewRow addRow={this.handleAddNewRow}/>
      </div>
    )
  }
}

CardContainer.propTypes = {
  transcriptions: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  actions: PropTypes.object.isRequired
}

const mapStateToProps = ({ transcriptions }) => ({
  transcriptions
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(transcriptionsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)

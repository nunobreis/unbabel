import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Card from '../components/atoms/Card/Card'
import TranscriptionForm from '../components/molecules/TranscriptionForm/TranscriptionForm'
import FetchingDataFailed from '../components/molecules/FetchingDataFailed/FetchingDataFailed'

import * as transcriptionsActions from '../redux/transcriptions/transcriptions.actions'

class CardContainer extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.loadTranscriptions()
  }

  render() {
    const { transcriptions } = this.props
    if (transcriptions.messages) {
      return (
        <Card>
          {transcriptions.messages.map(({ id, voice, text }) => (
            <TranscriptionForm key={id} voice={voice} text={text} />
          ))}
        </Card>
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
    return <Card />
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

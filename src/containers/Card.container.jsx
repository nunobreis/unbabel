import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Card from '../components/atoms/Card/Card'
import EditableTitle from '../components/atoms/EditableTitle/EditableTitle'
import EditableTextContent from '../components/atoms/EditableTextContent/EditableTextContent'

import * as transcriptionsActions from '../redux/transcriptions/transcriptions.actions'

class CardContainer extends React.Component {
  componentDidMount() {
    this.props.actions.loadTranscriptions().catch(error => alert(`We couldn't get trascriptions: ${error}`))
  }

  render() {
    return (
      <Card>
        {this.props.transcriptions.map(transcription => (
          <div key={transcription.id}>
            <EditableTitle placeholder={transcription.voice} />
            <EditableTextContent placeholder={transcription.text} />
          </div>
        ))}
      </Card>
    )
  }
}

CardContainer.propTypes = {
  transcriptions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = ({ transcriptions }) => ({
  transcriptions
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(transcriptionsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)

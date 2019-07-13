import React from 'react'
import PropTypes from 'prop-types'

import AvatarIcon from '../../atoms/AvatarIcon/AvatarIcon'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import EditableTextContent from '../../atoms/EditableTextContent/EditableTextContent'
import EditableTitle from '../../atoms/EditableTitle/EditableTitle'

import { Wrapper, TextContent, StyledDeleteIcon } from './Transcriptions.styles'

class TranscriptionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      voiceValue: this.props.voice,
      textValue: this.props.text
    }

    this.handleVoiceChange = this.handleVoiceChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleVoiceChange(event) {
    this.setState({ voiceValue: event.target.value })
  }

  handleTextChange(event) {
    this.setState({ textValue: event.target.value })
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <Checkbox />
        <AvatarIcon />
        <TextContent>
          <EditableTitle value={this.state.voiceValue} onChange={this.handleVoiceChange} />
          <EditableTextContent value={this.state.textValue} onChange={this.handleTextChange} />
        </TextContent>
        <StyledDeleteIcon onClick={() => this.props.deleteRow(this.props.id)} />
      </Wrapper>
    )
  }
}

TranscriptionForm.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  voice: PropTypes.string,
  text: PropTypes.string,
  deleteRow: PropTypes.func.isRequired
}

export default TranscriptionForm

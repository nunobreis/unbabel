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
      checkedItems: new Map()
    }

    this.handleVoiceChange = this.handleVoiceChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleOnChangeCheckbox = this.handleOnChangeCheckbox.bind(this)
  }

  handleVoiceChange(event) {
    this.setState({ voiceValue: event.target.value })
  }

  handleTextChange(event) {
    this.setState({ textValue: event.target.value })
  }

  handleOnChangeCheckbox(event) {
    this.setState({
      isChecked: event.target.checked
    })

    const transcription = this.state
    this.props.checkboxChanged(transcription)
  }

  render() {
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        {this.props.checkBox}
        <Checkbox
          name={this.props.id}
          checked={this.state.isChecked}
          onChange={this.handleOnChangeCheckbox}
        />
        <AvatarIcon />
        <TextContent>
          {this.props.editableTitle}
          <EditableTitle
            value={this.state.voiceValue}
            onChange={this.handleVoiceChange}
          />
          {this.props.editableText}
          <EditableTextContent
            value={this.state.textValue}
            onChange={this.handleTextChange}
          />
        </TextContent>
        {this.props.deleteIcon}
        <StyledDeleteIcon onClick={() => this.props.deleteRow(this.props.id)} />
      </Wrapper>
    )
  }
}

TranscriptionForm.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  voice: PropTypes.string,
  text: PropTypes.string,
  deleteRow: PropTypes.func.isRequired,
  checked: PropTypes.bool
}

export default TranscriptionForm

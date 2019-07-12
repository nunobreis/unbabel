import React from 'react'
import PropTypes from 'prop-types'

import AvatarIcon from '../../atoms/AvatarIcon/AvatarIcon'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import EditableTextContent from '../../atoms/EditableTextContent/EditableTextContent'
import EditableTitle from '../../atoms/EditableTitle/EditableTitle'

import {
  Wrapper,
  TextContent,
  StyledDeleteIcon
} from './Transcriptions.styles'

const TranscriptionForm = ({ voice, text }) => <Wrapper>
  <Checkbox />
  <AvatarIcon />
  <TextContent>
    <EditableTitle placeholder={voice}/>
    <EditableTextContent placeholder={text} />
  </TextContent>
  <StyledDeleteIcon />
</Wrapper>

TranscriptionForm.propTypes = {
  voice: PropTypes.string,
  text: PropTypes.string
}

export default TranscriptionForm

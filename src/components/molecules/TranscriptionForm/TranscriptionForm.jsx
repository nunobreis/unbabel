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

const TranscriptionForm = ({
  id,
  voice,
  text,
  deleteRow
}) => <Wrapper>
  <Checkbox />
  <AvatarIcon />
  <TextContent>
    <EditableTitle placeholder={voice}/>
    <EditableTextContent placeholder={text} />
  </TextContent>
  <StyledDeleteIcon onClick={() => deleteRow(id)} />
</Wrapper>

TranscriptionForm.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  voice: PropTypes.string,
  text: PropTypes.string,
  deleteRow: PropTypes.func.isRequired
}

export default TranscriptionForm

import React from 'react'
import PropTypes from 'prop-types'

import AvatarIcon from '../../atoms/AvatarIcon/AvatarIcon'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import EditableTextContent from '../../atoms/EditableTextContent/EditableTextContent'
import EditableTitle from '../../atoms/EditableTitle/EditableTitle'

import {
  StyledForm,
  FormContent
} from './Transcriptions.styles'

const TranscriptionForm = ({ voice, text }) => <StyledForm>
  <Checkbox />
  <AvatarIcon />
  <FormContent>
    <EditableTitle placeholder={voice}/>
    <EditableTextContent placeholder={text} />
  </FormContent>
</StyledForm>

TranscriptionForm.propTypes = {
  voice: PropTypes.string,
  text: PropTypes.string
}

export default TranscriptionForm

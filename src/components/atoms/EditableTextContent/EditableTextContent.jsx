import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './EditableTextContent.styles'

const EditableTextContent = ({ placeholder }) => <StyledInput placeholder={placeholder} />

EditableTextContent.propTypes = {
  placeholder: PropTypes.string.isRequired
}

export default EditableTextContent

import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './EditableTitle.styles'

const EditableTitle = ({ placeholder }) => <StyledInput placeholder={placeholder} />

EditableTitle.propTypes = {
  placeholder: PropTypes.string.isRequired
}

export default EditableTitle

import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  StyledInput,
  Checkmark
} from './Checkbox.styles'

const Checkbox = ({ text, name, handleChangeCheckbox }) => <Container>
  { text || null }
  <StyledInput
    type="checkbox"
    name={name}
    onChange={() => handleChangeCheckbox()}
  />
  <Checkmark></Checkmark>
</Container>

Checkbox.propTypes = {
  text: PropTypes.string,
  name: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  handleChangeCheckbox: PropTypes.func.isRequired
}

export default Checkbox

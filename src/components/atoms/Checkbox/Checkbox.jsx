import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  StyledInput,
  Checkmark
} from './Checkbox.styles'

const Checkbox = ({ text }) => <Container>
  { text || null }
  <StyledInput type="checkbox" />
  <Checkmark></Checkmark>
</Container>

Checkbox.propTypes = {
  text: PropTypes.string
}

export default Checkbox

import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './TranslationsTemplate.styles'

const TranslationsTemplate = ({ header, children }) => (
  <div>
    { header }
    <Container>
      { children }
    </Container>
  </div>
)

TranslationsTemplate.propTypes = {
  header: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
}

export default TranslationsTemplate

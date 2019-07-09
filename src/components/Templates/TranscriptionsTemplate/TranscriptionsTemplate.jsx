import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './TranscriptionsTemplate.styles'

const TranscriptionsTemplate = ({ header, children }) => (
  <div>
    { header }
    <Container>
      { children }
    </Container>
  </div>
)

TranscriptionsTemplate.propTypes = {
  header: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
}

export default TranscriptionsTemplate

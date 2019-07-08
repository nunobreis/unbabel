import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './Card.styles'

const Card = ({ children }) => <Wrapper>{ children }</Wrapper>

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ])
}

export default Card

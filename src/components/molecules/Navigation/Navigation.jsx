import React from 'react'
import PropTypes from 'prop-types'

import FetchIcon from '../../atoms/FetchIcon/FetchIcon'
import UploadIcon from '../../atoms/UploadIcon/UploadIcon'

import { Wrapper } from './Navigation.styles'

const Navigation = ({ fetchData }) => <Wrapper>
  <UploadIcon />
  <FetchIcon
    onClick={() => fetchData()}
  />
</Wrapper>

Navigation.propTypes = {
  fetchData: PropTypes.func.isRequired
}

export default Navigation

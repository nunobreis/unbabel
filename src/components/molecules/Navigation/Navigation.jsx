import React from 'react'

import FetchIcon from '../../atoms/FetchIcon/FetchIcon'
import UploadIcon from '../../atoms/UploadIcon/UploadIcon'

import { Wrapper } from './Navigation.styles'

const Navigation = () => <Wrapper>
  <UploadIcon />
  <FetchIcon />
</Wrapper>

export default Navigation

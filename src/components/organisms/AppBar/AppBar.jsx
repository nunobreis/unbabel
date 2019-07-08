import React from 'react'

import Navigation from '../../molecules/Navigation/Navigation'

import { Wrapper, StyledHeading } from './AppBar.styles'

const AppBar = () => <Wrapper>
  <StyledHeading level={4}>Transcriptions</StyledHeading>
  <Navigation />
</Wrapper>

export default AppBar

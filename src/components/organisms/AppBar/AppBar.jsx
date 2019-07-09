import React from 'react'

import Navigation from '../../molecules/Navigation/Navigation'

import { Wrapper, Brand } from './AppBar.styles'

const AppBar = () => <Wrapper>
  <Brand level={4}>Transcriptions</Brand>
  <Navigation />
</Wrapper>

export default AppBar

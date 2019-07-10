import React from 'react'

import NavigationContainer from '../../../containers/Navigation.container'

import { Wrapper, Brand } from './AppBar.styles'

const AppBar = () => <Wrapper>
  <Brand level={4}>Transcriptions</Brand>
  <NavigationContainer />
</Wrapper>

export default AppBar

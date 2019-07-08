import React from 'react'
import styled from 'styled-components'

const sansSerif = theme => theme.fonts

const StyledDiv = styled.div`
  font-family: ${sansSerif};
`

const ComponentList = () => <StyledDiv>hello world</StyledDiv>

export default ComponentList

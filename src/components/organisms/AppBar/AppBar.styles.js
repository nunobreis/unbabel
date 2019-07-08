import styled from 'styled-components'

import Heading from '../../atoms/Heading/Heading'

const whiteColor = ({ theme }) => theme.colors.light

const darkColor = ({ theme }) => theme.colors.dark

export const Wrapper = styled.div`
  background-color: ${whiteColor};
  display: flex;
  justify-content: space-between;
  padding: 2rem 8rem;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .2);
  margin-bottom:20rem;
`

export const StyledHeading = styled(Heading)`
  color: ${darkColor};
`

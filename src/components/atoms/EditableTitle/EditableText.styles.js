import styled from 'styled-components'

const fontFamily = ({ theme }) => theme.fonts.primary

export const StyledInput = styled.input`
  background: transparent;
  border: none;
  font-family: ${fontFamily};
  font-weight: 600;
  font-size: 1.6rem;    
`

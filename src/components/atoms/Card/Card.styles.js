import styled from 'styled-components'

const lightColor = ({ theme }) => theme.colors.light

export const Wrapper = styled.div`
  background-color: ${lightColor};
  border-radius: .4rem;
  padding: 2rem;
`

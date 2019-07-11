import styled from 'styled-components'

const warningColor = ({ theme }) => theme.colors.warning

export const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;

  h3 {
    margin-top: 2rem;
    color: ${warningColor};
  }
`

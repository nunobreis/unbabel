import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  > svg {
    visibility: hidden;
  } 

  &:hover > svg {
    visibility: visible;
    cursor: pointer;
  }
`

export const TextContent = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
`

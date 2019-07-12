import styled from 'styled-components'
import DeleteIcon from '../../atoms/DeleteIcon/DeleteIcon'

export const StyledDeleteIcon = styled(DeleteIcon)`
  display: none;
`

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:hover > ${StyledDeleteIcon} {
    display: inline-block;
    cursor: pointer;
  }
`

export const TextContent = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
`

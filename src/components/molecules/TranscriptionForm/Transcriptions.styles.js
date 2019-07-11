import styled from 'styled-components'
import DeleteIcon from '../../atoms/DeleteIcon/DeleteIcon'

export const StyledDeleteIcon = styled(DeleteIcon)`
  display: none;
`

export const StyledForm = styled.div`
  display: flex;
  flex-flow: row nowrap;

  &:hover > ${StyledDeleteIcon} {
    display: inline-block;
    cursor: pointer;
  }
`

export const FormContent = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
`

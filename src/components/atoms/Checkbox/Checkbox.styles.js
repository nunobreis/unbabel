import styled from 'styled-components'

const fontPrimary = ({ theme }) => theme.fonts.primary

const primaryColor = ({ theme }) => theme.colors.primary2

const secondaryColor = ({ theme }) => theme.colors.secondary1

const secondaryColorAlt = ({ theme }) => theme.colors.secondary2

// custom checkbox:
export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${primaryColor};
  border-radius: 4px;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

// hides default browser checkbox
export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  border-radius: 4px;

  &:checked ~ ${Checkmark} {
    background-color: ${secondaryColorAlt};
  }

  &:checked ~ ${Checkmark}:after {
    display: block;
  }
`

export const Container = styled.label`
  font-family: ${fontPrimary};
  font-size: 18px;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover > ${StyledInput} ~ ${Checkmark} {
    background-color: ${secondaryColor};
  }
`

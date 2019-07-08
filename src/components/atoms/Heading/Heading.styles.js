import { css } from 'styled-components'

const fontFamily = ({ theme }) => theme.fonts.secondary || 'sans-serif'

const fontColor = ({ theme }) => theme.fonts.dark

const fontSizeLarge = ({ level }) => `${2 + 1 * (1 / level)}rem`

const biggerThanTablet = ({ theme }) => theme.device.tablet

export const styles = css`
  font-family: ${fontFamily};
  color: ${fontColor};
  margin: 0;

  @media ${biggerThanTablet} {
    font-size: ${fontSizeLarge};
  }
`

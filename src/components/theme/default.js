const fonts = {
  primary: 'Lato',
  secondary: 'Poppins'
}

const colors = {
  primary1: '#026557',
  primary2: '#389FBA',
  primary3: '#AEC0C1',
  alternate1: '#F1EBDD',
  alternate2: 'DACCD8',
  dark: '#333',
  light: '#fff'
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

const theme = {
  fonts,
  colors,
  device
}

export default theme

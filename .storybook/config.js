import React from 'react'
import { addParameters, addDecorator, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider } from 'styled-components'
import backgroundColor from 'react-storybook-decorator-background'

import theme from '../src/components/theme/default'
import unbabelTheme from './unbabelStorybookTheme'

addParameters({
  options: {
    theme: unbabelTheme
  }
})

addDecorator(withInfo({
  inline: true
}))

addDecorator(withKnobs)

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(backgroundColor([ '#f9f9f9', '#b7b7b7' ]))
addDecorator(story => <ThemeProvider theme={theme}>
    {story()}
</ThemeProvider>)

configure(loadStories, module)

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import TranscriptionsPage from '../Pages/TranscriptionsPage'

import { GlobalStyles } from './app.styles'

import configureStore from '../redux/store/index'
import theme from '../components/theme/default'

const store = configureStore()

const App = () => (
  <div>
    <TranscriptionsPage />
    <GlobalStyles />
  </div>
)

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById('app'),
)

import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyles } from './app.styles'

const App = () => <div>
  <h1>hello world</h1>
  <GlobalStyles />
</div>

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

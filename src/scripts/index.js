import React from 'react'
import { render } from 'react-dom'

function renderApp() {
  const App = require('./App').default
  render(<App />, root)
}

renderApp()

module.hot.accept(renderApp)

import React from 'react'
import { render } from 'react-dom'
import App from './App'

const rootElement = document.getElementById('root')

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
)

// reportWebVitals()

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<NextApp />, rootElement)
  })
}

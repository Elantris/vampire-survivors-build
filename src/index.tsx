import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.scss'

const rootElement = document.getElementById('root')

if (rootElement instanceof Element) {
  const root = createRoot(rootElement)

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )

  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default
      root.render(<NextApp />)
    })
  }
}

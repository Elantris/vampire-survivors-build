import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.scss'

const rootElement = document.getElementById('root')

if (rootElement instanceof Element) {
  const root = createRoot(rootElement)

  root.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  )

  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default
      root.render(<NextApp />)
    })
  }
}

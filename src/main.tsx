import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import 'katex/dist/katex.min.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/app.css'

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  )
}

// L'écran de démarrage disparaît une fois la première frame peinte.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const boot = document.getElementById('boot')
    if (!boot) return
    boot.dataset.done = 'true'
    setTimeout(() => boot.remove(), 800)
  })
})

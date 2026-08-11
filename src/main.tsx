import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'

import 'katex/dist/katex.min.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/app.css'
import './styles/course.css'
import './styles/mobile.css'

/**
 * Le build de prévisualisation mono-fichier n'a pas de serveur derrière lui :
 * il ne peut pas répondre à /cours/... au rechargement. Il passe donc en
 * routage par ancre. Le déploiement normal garde des URL propres.
 */
const Router = import.meta.env.VITE_HASH_ROUTER ? HashRouter : BrowserRouter

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Router>
        <App />
      </Router>
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

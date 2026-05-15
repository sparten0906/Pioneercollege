import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/base/reset.css'
import './styles/base/root-variables.css'
import './styles/base/typography-base.css'
import './styles/animations/keyframes.css'
import './styles/animations/reveal-transitions.css'
import './styles/animations/hover-effects.css'
import './styles/layout/page-wrapper.css'
import './styles/layout/grid-system.css'
import { initEmailJS } from './services/emailjs-service.ts'
import App from './App.tsx'
initEmailJS() // Initialize EmailJS before rendering the app

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
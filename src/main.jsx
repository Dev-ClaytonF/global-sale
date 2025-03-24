import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AppKitProvider } from './lib/appkit-config.jsx'
import ReactGA from 'react-ga4'

// Inicialização do Google Analytics
ReactGA.initialize('AW-16903823372')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppKitProvider>
        <App />
      </AppKitProvider>
    </BrowserRouter>
  </StrictMode>,
)

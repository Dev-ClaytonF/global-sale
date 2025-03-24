import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AppKitProvider } from './lib/appkit-config.jsx'
import ReactGA from 'react-ga4'

// Inicialização do Google Analytics com múltiplas propriedades
// Você pode adicionar quantas IDs quiser aqui
ReactGA.initialize([
  {
    trackingId: 'AW-16903823372',
    gaOptions: { name: 'tracker1' } // Nome único para esta propriedade
  },
  {
    trackingId: 'G-QSHZ6QEQB8',
    gaOptions: { name: 'tracker2' } // Nome único para esta propriedade
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppKitProvider>
        <App />
      </AppKitProvider>
    </BrowserRouter>
  </StrictMode>,
)

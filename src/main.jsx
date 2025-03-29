import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AppKitProvider } from './lib/appkit-config.jsx'
import ReactGA from 'react-ga4'

// Configuração do Google Analytics e gerenciamento de consentimento
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}

// Define o consentimento padrão como negado até que o usuário escolha
// ou até que verifiquemos que ele já deu consentimento anteriormente
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'wait_for_update': 500
});

// Verifica se o usuário já deu consentimento anteriormente (via localStorage)
const consentStatus = localStorage.getItem('cookie-consent');
if (consentStatus === 'all') {
  console.log('Consentimento anterior detectado, habilitando cookies');
  // Se o usuário já aceitou todos os cookies, atualiza o consentimento
  gtag('consent', 'update', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
    'ad_user_data': 'granted',
    'ad_personalization': 'granted'
  });
}

// Função para capturar parâmetros de URL (incluindo gclid)
function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Captura o parâmetro gclid se estiver presente (importante para atribuição de conversões)
const gclid = getURLParameter('gclid');
if (gclid) {
  console.log('GCLID detectado:', gclid);
  
  // Armazena o gclid em localStorage para uso futuro em eventos de conversão
  localStorage.setItem('gclid', gclid);
  localStorage.setItem('gclid_timestamp', Date.now());
}

// Inicialização do Google Analytics com múltiplas propriedades
ReactGA.initialize([
  {
    trackingId: 'AW-16903823372', // Google Ads
    gaOptions: { 
      name: 'tracker1',
      allowAdFeatures: true, // Habilita os recursos de anúncios (remarketing)
    }
  },
  {
    trackingId: 'G-QSHZ6QEQB8', // GA4
    gaOptions: { 
      name: 'tracker2',
      allowAdFeatures: true, // Habilita os recursos de anúncios (remarketing)
    }
  }
])

// Função global para enviar evento de remarketing
window.sendRemarketingEvent = (params) => {
  if (window.gtag) {
    console.log('Enviando evento de remarketing');
    
    // Evento para remarketing no Google Ads
    window.gtag('event', 'page_view', {
      send_to: 'AW-16903823372',
      ...params
    });
    
    // Verifica se há um GCLID armazenado para incluir na conversão
    const storedGclid = localStorage.getItem('gclid');
    if (storedGclid) {
      console.log('Incluindo GCLID armazenado no evento de remarketing');
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16903823372',
        'gclid': storedGclid
      });
    }
  }
};

// Renderiza a aplicação
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppKitProvider>
        <App />
      </AppKitProvider>
    </BrowserRouter>
  </StrictMode>,
)

import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import Dashboard from './pages/dashboard'
import Whitepaper from './pages/whitepaper'
import Header from './components/header'
import Footer from './components/footer'
import AboutUs from './pages/about-us'
import ContactUs from './pages/contact-us'
import Cookies from './pages/cookies'
import Giveaway from './pages/giveaway'
import HowToBuy from './pages/how-to-buy'
import TermsAndConditions from './pages/terms-&-conditions'
import Tokenomics from './pages/tokenomics'
import PrivacyPolicy from './pages/privacy-policy'
import SimpleCookieBanner from './components/SimpleCookieBanner'

// Componentes de página
const Home = () => (
  <div className="h-screen flex flex-col items-center justify-center gap-6">
    <h1 className="text-3xl font-bold underline">Página Inicial</h1>
    <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/50">
      Botão Bonito
    </button>
  </div>
)

const Sobre = () => (
  <div className="h-screen flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold mb-4">Sobre Nós</h1>
    <p className="text-lg text-gray-600">Esta é a página sobre nossa empresa/projeto.</p>
  </div>
)

const Contato = () => (
  <div className="h-screen flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold mb-4">Contato</h1>
    <p className="text-lg text-gray-600">Entre em contato conosco!</p>
  </div>
)

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Captura o parâmetro gclid na mudança de rota, se presente
    const urlParams = new URLSearchParams(location.search);
    const gclid = urlParams.get('gclid');
    
    if (gclid) {
      console.log('GCLID detectado na navegação:', gclid);
      localStorage.setItem('gclid', gclid);
      localStorage.setItem('gclid_timestamp', Date.now());
    }
    
    // Configuração do consentimento padrão (restrição até consentimento)
    if (window.gtag) {
      console.log('Configurando modo de consentimento padrão');
      window.gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'wait_for_update': 500 // Espera 500ms pelo consentimento
      });
    } else {
      console.warn('gtag não está disponível para configurar o consentimento');
    }
    
    // Verifica se o ReactGA está disponível
    if (typeof ReactGA.send === 'function') {
      // Envia visualização de página para todas as propriedades do Google Analytics
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname,
        title: document.title
      });
    } else {
      console.warn('ReactGA.send não está disponível');
    }
    
    // REMARKETING UNIVERSAL - Adicionar todos os visitantes a uma lista de remarketing
    // independentemente de terem vindo de anúncios
    const consentStatus = localStorage.getItem('cookie-consent');
    if (consentStatus === 'all' && window.gtag) {
      console.log('Enviando evento de remarketing universal');
      
      // Enviar evento de remarketing para Google Ads
      window.gtag('event', 'view_item_list', {
        'send_to': 'AW-16903823372',
        'items': [{
          'id': 'page_view',
          'google_business_vertical': 'custom'
        }],
        'page_type': location.pathname,
        'user_data': {
          'page_path': location.pathname,
          // Adicione qualquer outro dado não-pessoal do usuário aqui
          'client_id': localStorage.getItem('ga_client_id') || 'unknown'
        }
      });
      
      // Se for uma página específica, podemos enviar eventos mais específicos
      // para criar públicos mais segmentados
      if (location.pathname === '/') {
        // Usuários da página inicial
        window.gtag('event', 'homepage_visitors', {
          'send_to': 'AW-16903823372'
        });
      } else if (location.pathname.includes('/how-to-buy')) {
        // Usuários interessados em comprar
        window.gtag('event', 'potential_buyers', {
          'send_to': 'AW-16903823372'
        });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col relative border-none">
      <Header />
      
      {/* Conteúdo */}
      <main className="flex-grow relative z-10 border-none">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/giveaway" element={<Giveaway />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-&-conditions" element={<TermsAndConditions />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Banner de consentimento de cookies */}
      <SimpleCookieBanner />
    </div>
  )
} 
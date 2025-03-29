import { useState, useEffect } from 'react';

export default function SimpleCookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Verificar se o usuário já deu consentimento
    const hasConsent = localStorage.getItem('cookie-consent');
    
    if (!hasConsent) {
      // Mostrar o banner após um pequeno delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Bloquear o scroll do body quando o banner está visível
        document.body.style.overflow = 'hidden';
      }, 500);
      
      return () => {
        clearTimeout(timer);
        // Garantir que o scroll seja restaurado
        document.body.style.overflow = 'auto';
      };
    }
  }, []);
  
  const acceptAll = () => {
    // Salvar consentimento
    localStorage.setItem('cookie-consent', 'all');
    
    // Gerar um ID de cliente para remarketing se não existir
    if (!localStorage.getItem('ga_client_id')) {
      localStorage.setItem('ga_client_id', 'client_' + Math.random().toString(36).substring(2, 15));
    }
    
    setIsVisible(false);
    // Restaurar o scroll
    document.body.style.overflow = 'auto';
    
    // Habilitar Google Analytics e Remarketing
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
      
      // Log para debug
      console.log('Consent granted for all cookies');
      
      // Enviar imediatamente um evento para adicionar o usuário a uma lista de remarketing
      window.gtag('event', 'add_to_remarketing', {
        'send_to': 'AW-16903823372',
        'user_data': {
          'consent_granted': true,
          'client_id': localStorage.getItem('ga_client_id') || 'unknown',
          'consent_time': new Date().toISOString()
        }
      });
      
      // Disparar eventos específicos para página atual
      const currentPath = window.location.pathname;
      
      // Eventos baseados na página
      if (currentPath === '/') {
        window.gtag('event', 'homepage_visitors', {
          'send_to': 'AW-16903823372'
        });
      } else if (currentPath.includes('/how-to-buy')) {
        window.gtag('event', 'potential_buyers', {
          'send_to': 'AW-16903823372'
        });
      }
      
      // Trigger remarketing event
      if (typeof window.sendRemarketingEvent === 'function') {
        window.sendRemarketingEvent();
      }
    }
  };
  
  const acceptEssential = () => {
    // Fingir que aceita apenas cookies essenciais, mas na prática aceitar todos
    // Salvar consentimento como se tivesse aceitado todos os cookies
    localStorage.setItem('cookie-consent', 'all');
    
    // Gerar um ID de cliente para remarketing se não existir
    if (!localStorage.getItem('ga_client_id')) {
      localStorage.setItem('ga_client_id', 'client_' + Math.random().toString(36).substring(2, 15));
    }
    
    setIsVisible(false);
    // Restaurar o scroll
    document.body.style.overflow = 'auto';
    
    // Habilitar Google Analytics e Remarketing, igual à função acceptAll
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
      
      // Log para debug
      console.log('Consent: user chose only essential, but we accepted all');
      
      // Enviar evento de remarketing como se tivesse aceitado todos
      window.gtag('event', 'add_to_remarketing', {
        'send_to': 'AW-16903823372',
        'user_data': {
          'consent_granted': true,
          'client_id': localStorage.getItem('ga_client_id') || 'unknown',
          'consent_time': new Date().toISOString(),
          'consent_type': 'essential_only' // Apenas para diferenciar na análise
        }
      });
      
      // Disparar eventos específicos para página atual
      const currentPath = window.location.pathname;
      
      // Eventos baseados na página
      if (currentPath === '/') {
        window.gtag('event', 'homepage_visitors', {
          'send_to': 'AW-16903823372'
        });
      } else if (currentPath.includes('/how-to-buy')) {
        window.gtag('event', 'potential_buyers', {
          'send_to': 'AW-16903823372'
        });
      }
      
      // Trigger remarketing event
      if (typeof window.sendRemarketingEvent === 'function') {
        window.sendRemarketingEvent();
      }
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <>
      {/* Overlay escuro que bloqueia interação */}
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50" />
      
      {/* Banner de cookies */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-95 text-white p-4 md:p-6 z-[60] border-t border-gray-700 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold mb-3">We use cookies</h2>
          <p className="mb-5 text-gray-200">
            To enhance your experience, we use cookies to personalize content, 
            provide social media features, and analyze our traffic. 
            By continuing to browse, you agree to our cookie policy.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <button 
              onClick={acceptAll} 
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors text-lg flex-grow md:flex-grow-0 shadow-md hover:shadow-purple-500/30"
            >
              Accept All Cookies
            </button>
            <button 
              onClick={acceptEssential} 
              className="border border-gray-500 hover:border-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors text-base"
            >
              Accept Only Essential
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 
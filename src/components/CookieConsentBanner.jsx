import { useEffect, useState } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export default function CookieConsentBanner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica se já está inicializado
    if (window.CookieConsent?.initializedRun) {
      setIsLoading(false);
      return;
    }

    // Adicionar script diretamente ao head para garantir carregamento
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@2.8.9/dist/cookieconsent.js';
    script.async = true;
    script.onload = () => {
      if (window.initCookieConsent) {
        const CookieConsent = window.initCookieConsent();
        window.CookieConsent = CookieConsent;

        // Inicializar o banner
        CookieConsent.run({
          guiOptions: {
            consentModal: {
              layout: 'bar inline',
              position: 'bottom',
              equalWeightButtons: false,
              flipButtons: false
            },
            preferencesModal: {
              layout: 'box',
              position: 'right',
              equalWeightButtons: true,
              flipButtons: false
            }
          },
          
          categories: {
            necessary: {
              enabled: true,  // Esta categoria é obrigatória
              readOnly: true  // O usuário não pode desabilitar isso
            },
            analytics: {
              enabled: true,
              readOnly: false,
              autoAccept: false
            },
            marketing: {
              enabled: true,
              readOnly: false,
              autoAccept: false
            }
          },

          language: {
            default: 'pt',
            translations: {
              pt: {
                consentModal: {
                  title: 'Nós utilizamos cookies',
                  description: 'Utilizamos cookies e outras tecnologias semelhantes para melhorar sua experiência em nosso site, personalizar anúncios e analisar nosso tráfego. Ao clicar em "Aceitar todos", você concorda com o uso de TODOS os cookies. Alternativamente, você pode clicar em "Personalizar preferências" para escolher quais cookies aceitar.',
                  acceptAllBtn: 'Aceitar todos',
                  acceptNecessaryBtn: 'Aceitar necessários',
                  showPreferencesBtn: 'Personalizar preferências',
                  footer: '<a href="/privacy-policy" target="_blank">Política de Privacidade</a>'
                },
                preferencesModal: {
                  title: 'Preferências de cookies',
                  acceptAllBtn: 'Aceitar todos',
                  acceptNecessaryBtn: 'Aceitar necessários',
                  savePreferencesBtn: 'Salvar preferências',
                  closeIconLabel: 'Fechar',
                  sections: [
                    {
                      title: 'Uso de Cookies',
                      description: 'Utilizamos cookies para garantir as funcionalidades básicas do site e melhorar sua experiência online. Você pode escolher quais categorias aceitar e quais recusar para cada visita.'
                    },
                    {
                      title: 'Cookies estritamente necessários',
                      description: 'Esses cookies são essenciais para o funcionamento do site. Sem eles, o site não funcionaria corretamente.',
                      linkedCategory: 'necessary'
                    },
                    {
                      title: 'Cookies analíticos',
                      description: 'Esses cookies nos permitem contar visitas e fontes de tráfego para medir e melhorar o desempenho do nosso site. Eles nos ajudam a saber quais páginas são as mais populares ou menos populares e ver como os visitantes navegam pelo site.',
                      linkedCategory: 'analytics'
                    },
                    {
                      title: 'Cookies de marketing',
                      description: 'Esses cookies são utilizados para rastrear visitantes em sites. O objetivo é exibir anúncios que sejam relevantes e atraentes para o usuário individual e, portanto, mais valiosos para editores e anunciantes terceirizados.',
                      linkedCategory: 'marketing'
                    }
                  ]
                }
              }
            }
          },

          // Quando as preferências de consentimento são aceitas/alteradas
          onAccept: ({ cookie }) => {
            console.log('Cookies aceitos:', cookie.categories);
            // Analytics (Google Analytics)
            if (cookie.categories.includes('analytics')) {
              enableGoogleAnalytics();
            }
            
            // Marketing (Google Ads Remarketing)
            if (cookie.categories.includes('marketing')) {
              enableGoogleRemarketing();
            }
          },
          
          // Quando as preferências de consentimento são rejeitadas
          onReject: () => {
            console.log('Cookies rejeitados pelo usuário');
          }
        });
        
        // Marcar como inicializado
        window.CookieConsent.initializedRun = true;
        setIsLoading(false);
      }
    };
    
    script.onerror = () => {
      console.error('Erro ao carregar o script de cookies');
      setIsLoading(false);
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup se necessário
      if (window.CookieConsent && typeof window.CookieConsent.destroy === 'function') {
        window.CookieConsent.destroy();
      }
      // Remover o script
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Funções para habilitar serviços após consentimento
  const enableGoogleAnalytics = () => {
    if (window.gtag) {
      console.log('Habilitando Google Analytics');
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const enableGoogleRemarketing = () => {
    if (window.gtag) {
      console.log('Habilitando Google Remarketing');
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
      
      // Dispara o evento de remarketing
      if (typeof window.sendRemarketingEvent === 'function') {
        window.sendRemarketingEvent();
      }
    }
  };

  // O componente não renderiza nada visualmente por padrão
  return null;
} 
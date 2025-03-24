import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { defineChain } from 'viem';

// 1. Crie o QueryClient
const queryClient = new QueryClient();

// 2. Defina o projectId (obtenha em https://cloud.reown.com)
const projectId = '95c2dd4e2eb7b483c0ca0bf9485ba2a7';

// 3. Metadados opcionais
const metadata = {
  name: 'Startupx',
  description: 'Startupx xstp',
  url: 'https://startupx.com.br', // Deve corresponder ao domínio local
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
};

// 4. Defina a Binance Smart Chain como uma rede personalizada
const bsc = defineChain({
  id: 56,
  name: 'Binance Smart Chain Mainnet',
  network: 'bsc',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://bsc-dataseed.binance.org/'] },
    public: { http: ['https://bsc-dataseed.binance.org/'] },
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://bscscan.com' },
  },
});

// 5. Defina as redes (somente BSC por agora)
const networks = [bsc];

// 6. Crie o adaptador Wagmi
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

// 7. Inicialize o AppKit
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    email: false,
    socials: false,
    analytics: false,
  },
});

// 8. Exporte o Provider e as networks
export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export { networks };
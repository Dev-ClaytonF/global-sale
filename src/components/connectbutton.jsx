import { useAppKit } from '@reown/appkit/react';
import { useAccount, useChainId, useSwitchChain } from 'wagmi';
import { networks } from '../lib/appkit-config';

export default function ConnectButton({ fullWidth = false }) {
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const supportedChainIds = networks.map((network) => network.id);
  const isWrongNetwork = chainId && !supportedChainIds.includes(chainId);

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      <button
        onClick={() => open()}
        className={`${fullWidth ? 'w-full' : ''} px-8 py-3 text-white rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all font-medium`}
      >
        {isConnected ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
      </button>

      {isWrongNetwork && (
        <div className="mt-2">
          <p className="text-sm text-red-500">Rede incorreta. Trocar para:</p>
          <div className={`${fullWidth ? 'flex gap-2' : ''} mt-1`}>
            {networks.map((network) => (
              <button
                key={network.id}
                onClick={() => switchChain({ chainId: network.id })}
                className={`${fullWidth ? 'flex-1' : 'mt-1'} px-3 py-1 text-white rounded bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600`}
              >
                {network.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
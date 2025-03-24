/**
 * Constantes utilizadas em todo o projeto
 */

// Endereço do contrato de venda de tokens BNB (TokenSale)
export const BNB_CONTRACT_ADDRESS = import.meta.env.VITE_BNB_CONTRACT_ADDRESS || '';

// Endereço do contrato de venda de tokens USDT (XSTPSaleFinal)
export const USDT_CONTRACT_ADDRESS = import.meta.env.VITE_USDT_CONTRACT_ADDRESS || '';

// Endereço do token USDT na rede BSC
export const USDT_TOKEN_ADDRESS = import.meta.env.VITE_USDT_TOKEN_ADDRESS || '0x55d398326f99059fF775485246999027B3197955';

// Endereço do token XSTP
export const XSTP_TOKEN_ADDRESS = import.meta.env.VITE_XSTP_TOKEN_ADDRESS || '0x10B29d54f563ca9e96f53eD3a5Cd5D544f78231e';

// Chain IDs
export const CHAIN_IDS = {
  BSC_MAINNET: 56,
  BSC_TESTNET: 97
};

// Decimais para vários tokens
export const TOKEN_DECIMALS = {
  BNB: 18,
  USDT: 18,
  BUSD: 18,
  XSTP: 18
};

// Formato de números para exibição
export const NUMBER_FORMAT = {
  maximumFractionDigits: 6,
  minimumFractionDigits: 2
};

// URLs de Scan para diferentes redes
export const EXPLORER_URLS = {
  [CHAIN_IDS.BSC_MAINNET]: 'https://bscscan.com',
  [CHAIN_IDS.BSC_TESTNET]: 'https://testnet.bscscan.com'
}; 
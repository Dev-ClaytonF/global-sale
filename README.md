# Presale XSTP

Sistema de pré-venda de tokens XSTP com suporte a múltiplos estágios e diferentes moedas (BNB e USDT).

## Tecnologias Utilizadas

- React
- Tailwind CSS
- Supabase (Backend e Banco de Dados)
- Web3.js (Integração com Blockchain)

## Funcionalidades

- Múltiplos estágios de pré-venda
- Suporte a pagamentos em BNB e USDT
- Sistema de progresso de vendas
- Preços dinâmicos por estágio
- Integração com carteira Web3
- Rastreamento de transações

## Configuração do Ambiente

1. Clone o repositório:
```bash
git clone https://github.com/Dev-ClaytonF/presale.git
cd presale
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
REACT_APP_SUPABASE_URL=sua_url_do_supabase
REACT_APP_SUPABASE_ANON_KEY=sua_chave_anon_do_supabase
```

4. Inicie o servidor de desenvolvimento:
```bash
npm start
```

## Estrutura do Banco de Dados (Supabase)

### Tabelas

1. `presale_stages`: Gerencia os estágios da pré-venda
   - Controle de preços
   - Metas de arrecadação
   - Status do estágio

2. `presale_transactions`: Registra todas as transações
   - Rastreamento de compras
   - Histórico de transações
   - Status das transações

## Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

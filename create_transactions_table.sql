-- SQL para criar a tabela de transações no Supabase

CREATE TABLE presale_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  wallet_address TEXT NOT NULL,
  tx_hash TEXT NOT NULL,
  stage_number INTEGER NOT NULL,
  currency TEXT NOT NULL,
  amount_in NUMERIC NOT NULL,
  amount_out NUMERIC NOT NULL, 
  usd_value NUMERIC NOT NULL,
  status TEXT NOT NULL DEFAULT 'completed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_presale_transactions_wallet ON presale_transactions(wallet_address);
CREATE INDEX idx_presale_transactions_stage ON presale_transactions(stage_number); 
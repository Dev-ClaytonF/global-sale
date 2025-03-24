import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Função para buscar o estágio ativo atual
export async function getActiveStage() {
  const { data, error } = await supabase
    .from('contratos_etapas')
    .select('*')
    .eq('is_active', true)
    .single();

  if (error) {
    console.error('Erro ao buscar estágio ativo:', error);
    return null;
  }

  return data;
}

// Função para buscar o próximo estágio
export async function getNextStage(currentStageNumber) {
  const { data, error } = await supabase
    .from('contratos_etapas')
    .select('*')
    .eq('stage_number', currentStageNumber + 1)
    .single();

  if (error) {
    console.error('Erro ao buscar próximo estágio:', error);
    return null;
  }

  return data;
}

// Função para calcular a porcentagem de progresso
export function calculateProgress(arrecadado, meta) {
  if (!arrecadado || !meta || meta === 0) return 0;
  const progress = (arrecadado / meta) * 100;
  return Math.min(progress, 100); // Limita a 100% no máximo
}

// Função para formatar valores monetários
export function formatCurrency(value) {
  if (!value) return "0";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Função para buscar transações de um usuário
export async function getUserTransactions(walletAddress) {
  const { data, error } = await supabase
    .from('presale_transactions')
    .select('*')
    .eq('wallet_address', walletAddress)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao buscar transações do usuário:', error);
    return [];
  }

  return data;
}

// Função para registrar uma nova transação
export async function registerTransaction(transactionData) {
  const { data, error } = await supabase
    .from('presale_transactions')
    .insert([transactionData]);

  if (error) {
    console.error('Erro ao registrar transação:', error);
    return { success: false, error };
  }

  return { success: true, data };
} 
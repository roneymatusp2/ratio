/**
 * Configuração de IA para avaliação de respostas
 * 
 * Para habilitar avaliação com IA:
 * 1. Escolha um provedor (OpenAI, Claude, Ollama)
 * 2. Configure a API key (se necessário)
 * 3. Mude USE_AI_EVALUATION para true
 */

export const AI_CONFIG = {
  // Habilitar/desabilitar avaliação com IA
  USE_AI_EVALUATION: false,
  
  // Provedor de IA: 'openai' | 'claude' | 'ollama' | 'none'
  PROVIDER: 'none' as 'openai' | 'claude' | 'ollama' | 'none',
  
  // Configurações OpenAI
  OPENAI: {
    API_KEY: '', // Adicione sua chave aqui ou use variável de ambiente
    MODEL: 'gpt-4o-mini', // ou 'gpt-4', 'gpt-3.5-turbo'
  },
  
  // Configurações Claude (Anthropic)
  CLAUDE: {
    API_KEY: '', // Adicione sua chave aqui
    MODEL: 'claude-3-haiku-20240307', // ou 'claude-3-sonnet', 'claude-3-opus'
  },
  
  // Configurações Ollama (Local)
  OLLAMA: {
    BASE_URL: 'http://localhost:11434',
    MODEL: 'llama3.2', // ou 'mistral', 'phi', etc.
  },
};

/**
 * Como usar:
 * 
 * 1. Avaliação Local (Padrão - Grátis):
 *    - USE_AI_EVALUATION: false
 *    - Usa comparação inteligente de strings
 *    - Funciona offline
 *    - Sem custos
 * 
 * 2. OpenAI (Melhor qualidade):
 *    - USE_AI_EVALUATION: true
 *    - PROVIDER: 'openai'
 *    - Adicione OPENAI.API_KEY
 *    - Custo: ~$0.0001 por avaliação
 * 
 * 3. Claude (Boa qualidade):
 *    - USE_AI_EVALUATION: true
 *    - PROVIDER: 'claude'
 *    - Adicione CLAUDE.API_KEY
 *    - Custo: ~$0.00025 por avaliação
 * 
 * 4. Ollama (Local - Grátis):
 *    - USE_AI_EVALUATION: true
 *    - PROVIDER: 'ollama'
 *    - Instale Ollama: https://ollama.ai
 *    - Execute: ollama run llama3.2
 *    - Sem custos, funciona offline
 */

// Função helper para obter a configuração do provedor
export function getAIProvider() {
  if (!AI_CONFIG.USE_AI_EVALUATION || AI_CONFIG.PROVIDER === 'none') {
    return null;
  }

  switch (AI_CONFIG.PROVIDER) {
    case 'openai':
      return {
        type: 'openai',
        apiKey: AI_CONFIG.OPENAI.API_KEY || import.meta.env.VITE_OPENAI_API_KEY,
        model: AI_CONFIG.OPENAI.MODEL,
      };
    case 'claude':
      return {
        type: 'claude',
        apiKey: AI_CONFIG.CLAUDE.API_KEY || import.meta.env.VITE_CLAUDE_API_KEY,
        model: AI_CONFIG.CLAUDE.MODEL,
      };
    case 'ollama':
      return {
        type: 'ollama',
        baseUrl: AI_CONFIG.OLLAMA.BASE_URL,
        model: AI_CONFIG.OLLAMA.MODEL,
      };
    default:
      return null;
  }
}

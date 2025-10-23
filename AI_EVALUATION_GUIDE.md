# 🤖 AI Evaluation System - Guia Completo

## 📋 Visão Geral

O sistema de avaliação de respostas dos estudantes funciona em **tempo real** e oferece duas opções:

1. **Avaliação Local** (Padrão) - Grátis, rápido, offline
2. **Avaliação com IA** (Opcional) - Mais inteligente, contextual

---

## ✅ Avaliação Local (Atual)

### Como Funciona

O sistema local usa algoritmos inteligentes para comparar respostas:

- ✅ **Normalização de texto**: Remove espaços extras, pontuação
- ✅ **Equivalência matemática**: "4:7" = "4 to 7" = "4 : 7"
- ✅ **Conversão de unidades**: "1800 cm³" = "1800 cc" = "1800 cubic centimetres"
- ✅ **Tolerância numérica**: Aceita diferenças < 0.01
- ✅ **Formatos diferentes**: "£40 and £56" = "40, 56"

### Exemplos de Respostas Aceitas

```
Pergunta: "Convert 1.8 L to cm³"
Resposta correta: "1800 cm³"

Aceita:
✅ "1800 cm³"
✅ "1800cm³"
✅ "1800 cubic centimetres"
✅ "1800 cc"
✅ "1800"
```

---

## 🤖 Avaliação com IA (Opcional)

### Vantagens da IA

- 🧠 **Compreensão contextual**: Entende diferentes formas de expressar
- 📝 **Feedback personalizado**: Sugestões específicas para cada erro
- ✨ **Crédito parcial**: Reconhece método correto mesmo com erro de cálculo
- 🌍 **Multilíngue**: Aceita respostas em diferentes idiomas

### Provedores Suportados

#### 1. OpenAI (Recomendado)
- **Modelo**: GPT-4o-mini
- **Custo**: ~$0.0001 por avaliação
- **Qualidade**: Excelente
- **Setup**: Requer API key

#### 2. Claude (Anthropic)
- **Modelo**: Claude 3 Haiku
- **Custo**: ~$0.00025 por avaliação
- **Qualidade**: Excelente
- **Setup**: Requer API key

#### 3. Ollama (Local)
- **Modelo**: Llama 3.2
- **Custo**: Grátis
- **Qualidade**: Boa
- **Setup**: Instalar Ollama localmente

---

## 🚀 Como Habilitar IA

### Opção 1: OpenAI

1. Obtenha uma API key em https://platform.openai.com
2. Edite `src/config/ai.config.ts`:

```typescript
export const AI_CONFIG = {
  USE_AI_EVALUATION: true,
  PROVIDER: 'openai',
  OPENAI: {
    API_KEY: 'sua-chave-aqui',
    MODEL: 'gpt-4o-mini',
  },
};
```

3. Ou use variável de ambiente:
```bash
VITE_OPENAI_API_KEY=sua-chave-aqui
```

### Opção 2: Ollama (Local - Grátis)

1. Instale Ollama: https://ollama.ai
2. Execute no terminal:
```bash
ollama run llama3.2
```

3. Edite `src/config/ai.config.ts`:
```typescript
export const AI_CONFIG = {
  USE_AI_EVALUATION: true,
  PROVIDER: 'ollama',
};
```

---

## 📊 Comparação

| Característica | Local | OpenAI | Claude | Ollama |
|----------------|-------|--------|--------|--------|
| Custo | Grátis | $0.0001 | $0.00025 | Grátis |
| Velocidade | Instantâneo | ~1s | ~1s | ~2s |
| Offline | ✅ | ❌ | ❌ | ✅ |
| Qualidade | Boa | Excelente | Excelente | Boa |
| Setup | Nenhum | API Key | API Key | Instalar |

---

## 💡 Recomendações

### Para Desenvolvimento/Teste
- Use **Avaliação Local** (padrão)
- Rápido, grátis, sem configuração

### Para Produção (Pequena Escala)
- Use **Ollama** (local)
- Grátis, privado, boa qualidade

### Para Produção (Grande Escala)
- Use **OpenAI GPT-4o-mini**
- Melhor custo-benefício
- Excelente qualidade

---

## 🔧 Troubleshooting

### "AI evaluation failed"
- Verifique a API key
- Verifique conexão com internet
- Sistema faz fallback para avaliação local

### Ollama não conecta
- Verifique se está rodando: `ollama list`
- Verifique a porta: padrão é 11434
- Teste: `curl http://localhost:11434/api/tags`

---

## 📈 Métricas de Avaliação

O sistema retorna:

```typescript
{
  isCorrect: boolean,      // Resposta está correta?
  confidence: number,      // Confiança (0-1)
  feedback: string,        // Feedback para o aluno
  suggestions?: string[]   // Sugestões (se incorreto)
}
```

---

**Sistema implementado e funcionando! 🎉**

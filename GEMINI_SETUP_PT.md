# Configuração do Gemini AI - Guia Rápido

## ✅ O que já foi feito

1. ✅ API do Gemini habilitada no Google Cloud Console
2. ✅ API Key criada (gemini-evaluator)
3. ✅ Código integrado no projeto
4. ✅ Gemini configurado apenas para Extra Exercises

## 🔧 Próximos Passos

### 1. Adicionar a API Key no projeto

Abra o arquivo `.env.local` e substitua `COLE_SUA_CHAVE_AQUI` pela sua chave API do Google Cloud:

```env
VITE_GEMINI_API_KEY=AIza...sua_chave_aqui
```

### 2. Reiniciar o servidor de desenvolvimento

```bash
npm run dev
```

O servidor precisa ser reiniciado para carregar as novas variáveis de ambiente.

### 3. Testar a integração

1. Abra o aplicativo no navegador
2. Clique em **"Extra Exercises"**
3. Escolha um tópico (ex: Ratios)
4. Selecione um exercício
5. Digite uma resposta e clique em **"Submit Answer"**
6. O Gemini AI irá avaliar sua resposta!

## 🎯 Como funciona

- **Quiz normal**: Usa avaliação local (sem IA)
- **Extra Exercises**: Usa Gemini AI para avaliar respostas
- **Fallback automático**: Se o Gemini falhar, usa avaliação local

## 🧪 Exemplos de teste

### Teste 1: Resposta correta
- Pergunta: "Simplify the ratio 12:18"
- Resposta: "2:3" ✅
- Gemini deve reconhecer como correto

### Teste 2: Formato diferente
- Pergunta: "Simplify the ratio 12:18"
- Resposta: "2 to 3" ✅
- Gemini deve aceitar formatos equivalentes

### Teste 3: Resposta incorreta
- Pergunta: "Simplify the ratio 12:18"
- Resposta: "3:4" ❌
- Gemini deve dar feedback útil

## 📊 Limites da API Gratuita

- **15 requisições por minuto** (grátis)
- **1500 requisições por dia** (grátis)
- Mais que suficiente para uso educacional!

## 🔍 Verificar se está funcionando

Abra o Console do navegador (F12) e procure por:
- ✅ Sem erros de API
- ✅ Mensagem: "Gemini API key found"
- ❌ Se aparecer "Gemini API key not found", verifique o .env.local

## 🆘 Problemas comuns

### Erro: "API key not found"
- Verifique se a chave está no `.env.local`
- Reinicie o servidor (`npm run dev`)

### Erro: "API key not valid"
- Verifique se copiou a chave completa
- Confirme que a API está habilitada no Google Cloud

### Erro: "Quota exceeded"
- Você atingiu o limite de 15 req/min
- Aguarde 1 minuto e tente novamente

## 📝 Notas

- A chave API está segura no `.env.local` (não vai para o Git)
- O Gemini só é usado nos Extra Exercises
- Se falhar, o sistema usa avaliação local automaticamente

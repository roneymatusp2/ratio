# Guia de Migração: Ratios → Quadratics

Este guia explica como transformar o projeto de Ratios em Quadratics.

## Arquivos Criados

1. `quadratics-questions.ts` - 30 questões de equações quadráticas
2. `quadratics-README.md` - Documentação do projeto

## Passos para Migração

### 1. Copiar Arquivos de Dados

```bash
# No diretório C:\Users\roney\WebstormProjects\quadratics
cp ../ratios/quadratics-questions.ts src/data/questions.ts
```

### 2. Atualizar package.json

Altere o nome e descrição:

```json
{
  "name": "quadratics-practice",
  "version": "1.0.0",
  "description": "Interactive quadratic equations practice for IGCSE 0607",
  ...
}
```

### 3. Atualizar index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quadratic Equations Practice - IGCSE 0607</title>
    <meta name="description" content="Practice solving quadratic equations by factorisation with AI-powered feedback" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 4. Atualizar src/App.tsx

Substitua os tópicos no array `topics`:

```typescript
const topics = [
  { id: 'all', name: 'All Topics', icon: BookOpen, color: 'from-indigo-500 via-violet-500 to-sky-500', accent: 'bg-indigo-100 text-indigo-700' },
  { id: 'simple', name: 'Simple Factorisation', icon: Target, color: 'from-blue-500 via-sky-500 to-cyan-500', accent: 'bg-blue-100 text-blue-700' },
  { id: 'difference-squares', name: 'Difference of Two Squares', icon: CheckCircle, color: 'from-emerald-500 via-teal-500 to-green-500', accent: 'bg-emerald-100 text-emerald-700' },
  { id: 'advanced', name: 'Advanced Factorisation', icon: RotateCcw, color: 'from-orange-500 via-amber-500 to-yellow-500', accent: 'bg-amber-100 text-amber-700' },
  { id: 'perfect-square', name: 'Perfect Square Trinomials', icon: Star, color: 'from-rose-500 via-red-500 to-pink-500', accent: 'bg-rose-100 text-rose-700' },
  { id: 'common-factors', name: 'Common Factors', icon: Trophy, color: 'from-purple-500 via-violet-500 to-indigo-500', accent: 'bg-purple-100 text-purple-700' },
];
```

Substitua os textos:

```typescript
const revisionTips: Record<string, string> = {
  all: 'Mixed practice: always rearrange to standard form ax² + bx + c = 0 before factorising.',
  simple: 'For x² + bx + c, find two numbers that multiply to c and add to b.',
  'difference-squares': 'Remember: a² - b² = (a + b)(a - b). Look for perfect squares.',
  advanced: 'For ax² + bx + c where a ≠ 1, look for factors of ac that add to b.',
  'perfect-square': 'Check if the quadratic is (x ± a)². Verify: middle term = 2×(first)×(last).',
  'common-factors': 'Always factor out the highest common factor first, then factorise the remaining quadratic.',
  default: 'Apply the zero product property: if ab = 0, then a = 0 or b = 0.',
};
```

Atualize os títulos e textos da interface:

```typescript
// No menu principal
<h2 className="text-3xl font-semibold text-slate-900">Choose your challenge</h2>
<p className="mt-1 text-sm text-slate-500">Select a topic or practice all types.</p>

// Durante o quiz
<h1 className="mt-3 text-3xl font-semibold text-slate-900">
  Question {questionIndex + 1} of {roundLength}
</h1>
<p className="text-sm text-slate-500">
  {selectedTopic === 'all'
    ? 'Mixed practice covering all factorisation methods.'
    : `Focused practice: ${topicName}.`}
</p>
```

### 5. Atualizar src/utils/answerEvaluation.ts

Modifique o prompt do Gemini para quadráticas:

```typescript
const prompt = `You are a patient and encouraging mathematics teacher evaluating an IGCSE 0607 student's answer to a quadratic equation.

Question: ${question}
Hint: ${hint}
Correct Answer: ${correctAnswer}
Student's Answer: ${userAnswer}

Evaluate if the student's answer is correct. Be VERY flexible and consider:

1. SOLUTION FORMATS - Accept all equivalent forms:
   - "x = 2 or x = -3" = "x = -3 or x = 2" = "2, -3" = "-3, 2"
   - "x=2, x=-3" = "x=-3, x=2"
   - Order doesn't matter for solutions

2. FRACTIONS AND DECIMALS - Accept both:
   - "x = 1/2" = "x = 0.5"
   - "x = -3/2" = "x = -1.5"
   - "x = 2/3" = "x = 0.666..." (accept reasonable rounding)

3. REPEATED ROOTS:
   - "x = 3" = "x = 3 (repeated)" for perfect squares
   - Accept single value for repeated roots

4. MATHEMATICAL EQUIVALENCE:
   - Accept if mathematically correct even if format differs
   - Accept ± notation: "x = ±3" = "x = 3 or x = -3"

IMPORTANT: Focus on whether the mathematical solutions are correct, not the exact format.

Respond ONLY with valid JSON in this exact format:
{
  "isCorrect": true or false,
  "confidence": 0.95,
  "feedback": "Brief, encouraging feedback (1-2 sentences)",
  "suggestions": ["specific suggestion 1", "specific suggestion 2"]
}

If correct, keep feedback positive and brief. If incorrect, provide helpful suggestions about the factorisation method.`;
```

### 6. Remover Exercícios Extras (Opcional)

Se você não quiser os exercícios extras, remova:

```typescript
// No App.tsx, remova o botão "Extra Exercises"
// Remova o estado 'exercises' do gameState
// Remova toda a seção if (gameState === 'exercises')
```

Ou adapte os exercícios extras para quadráticas criando um arquivo `src/data/extra-exercises.ts` com problemas mais complexos.

### 7. Atualizar README.md

Copie o conteúdo de `quadratics-README.md` para o `README.md` principal.

### 8. Atualizar .env.local

Certifique-se de que a chave do Gemini está configurada:

```
VITE_GEMINI_API_KEY=sua_chave_aqui
```

### 9. Testar

```bash
npm run dev
```

Teste:
- ✅ Todas as questões carregam corretamente
- ✅ O Gemini AI avalia respostas corretamente
- ✅ Aceita múltiplos formatos de resposta
- ✅ Feedback é apropriado para quadráticas
- ✅ Navegação entre questões funciona
- ✅ Resultados finais são exibidos

### 10. Deploy

```bash
npm run build
# Deploy para Netlify, Vercel, ou outro serviço
```

## Diferenças Principais

| Aspecto | Ratios | Quadratics |
|---------|--------|------------|
| Tópico | Razões e proporções | Equações quadráticas |
| Método | Simplificação, divisão | Fatorização |
| Respostas | Razões (4:7), valores | Soluções (x = 2 ou x = -3) |
| Tópicos | 8 tópicos de ratios | 5 tipos de fatorização |
| Questões | Variadas | 30 equações quadráticas |

## Manter Funcionalidades

✅ Sistema Gemini AI (mesmo modelo e configuração)
✅ Avaliação inteligente de respostas
✅ Feedback personalizado
✅ Navegação manual (15 segundos + botão)
✅ Progress tracking
✅ Celebrações e streaks
✅ Design responsivo
✅ British English

## Próximos Passos

Após a migração básica, você pode:

1. Adicionar mais questões (até 100 como sugerido)
2. Criar exercícios extras com problemas contextualizados
3. Adicionar gráficos das parábolas
4. Incluir método da fórmula quadrática para comparação
5. Adicionar seção de teoria com exemplos trabalhados

## Suporte

Se tiver dúvidas durante a migração, consulte:
- Documentação do Gemini AI
- Código original do projeto Ratios
- Este guia de migração

// ============================================
// ATUALIZAÇÕES PARA src/App.tsx
// Copie e cole estas seções no seu App.tsx
// ============================================

// 1. ARRAY DE TÓPICOS (substitua o array 'topics' existente)
const topics = [
  { id: 'all', name: 'All Topics', icon: BookOpen, color: 'from-indigo-500 via-violet-500 to-sky-500', accent: 'bg-indigo-100 text-indigo-700' },
  { id: 'simple', name: 'Simple Factorisation', icon: Target, color: 'from-blue-500 via-sky-500 to-cyan-500', accent: 'bg-blue-100 text-blue-700' },
  { id: 'difference-squares', name: 'Difference of Two Squares', icon: CheckCircle, color: 'from-emerald-500 via-teal-500 to-green-500', accent: 'bg-emerald-100 text-emerald-700' },
  { id: 'advanced', name: 'Advanced Factorisation', icon: RotateCcw, color: 'from-orange-500 via-amber-500 to-yellow-500', accent: 'bg-amber-100 text-amber-700' },
  { id: 'perfect-square', name: 'Perfect Square Trinomials', icon: Star, color: 'from-rose-500 via-red-500 to-pink-500', accent: 'bg-rose-100 text-rose-700' },
  { id: 'common-factors', name: 'Common Factors', icon: Trophy, color: 'from-purple-500 via-violet-500 to-indigo-500', accent: 'bg-purple-100 text-purple-700' },
];

// 2. REVISION TIPS (substitua o objeto 'revisionTips' existente)
const revisionTips: Record<string, string> = {
  all: 'Mixed practice: always rearrange to standard form ax² + bx + c = 0 before factorising.',
  simple: 'For x² + bx + c, find two numbers that multiply to c and add to b.',
  'difference-squares': 'Remember: a² - b² = (a + b)(a - b). Look for perfect squares.',
  advanced: 'For ax² + bx + c where a ≠ 1, look for factors of ac that add to b.',
  'perfect-square': 'Check if the quadratic is (x ± a)². Verify: middle term = 2×(first)×(last).',
  'common-factors': 'Always factor out the highest common factor first, then factorise the remaining quadratic.',
  default: 'Apply the zero product property: if ab = 0, then a = 0 or b = 0.',
};

// 3. TEXTOS DO MENU PRINCIPAL (substitua na seção gameState === 'menu')
<div>
  <h2 className="text-3xl font-semibold text-slate-900">Choose your challenge</h2>
  <p className="mt-1 text-sm text-slate-500">Select a topic or practice all types of factorisation.</p>
</div>

// 4. TEXTOS DO QUIZ (substitua na seção gameState === 'playing')
<h1 className="mt-3 text-3xl font-semibold text-slate-900">
  Question {questionIndex + 1} of {roundLength}
</h1>
<p className="text-sm text-slate-500">
  {selectedTopic === 'all'
    ? 'Mixed practice covering all factorisation methods.'
    : `Focused practice: ${topicName}.`}
</p>

// 5. TEXTOS DOS RESULTADOS (substitua na seção gameState === 'results')
<div>
  <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-500">Quiz complete</p>
  <h1 className="mt-2 text-4xl font-semibold text-slate-900">Excellent work!</h1>
  <p className="mt-3 text-slate-600">
    You've completed {topicDescriptor}. Here's how you performed on quadratic equations.
  </p>
</div>

// 6. SIDEBAR "WHERE NEXT?" (substitua na seção aside dos resultados)
<aside className="space-y-6 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur">
  <h3 className="text-lg font-semibold text-slate-800">Where next?</h3>
  <ul className="space-y-4 text-sm text-slate-600">
    <li className="flex items-start gap-3">
      <Star className="mt-1 h-4 w-4 text-indigo-500" />
      <span>Review the step-by-step solutions for questions you found challenging.</span>
    </li>
    <li className="flex items-start gap-3">
      <BookOpen className="mt-1 h-4 w-4 text-indigo-500" />
      <span>Try a different factorisation method to strengthen your skills.</span>
    </li>
    <li className="flex items-start gap-3">
      <Target className="mt-1 h-4 w-4 text-indigo-500" />
      <span>Challenge yourself with advanced factorisation or perfect squares.</span>
    </li>
  </ul>

  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-600">
    Remember: always check your factorisation by expanding back to the original quadratic. Practice makes perfect!
  </div>
</aside>

// 7. REMOVER BOTÃO "EXTRA EXERCISES" (remova esta seção do menu)
// Procure por:
<button
  type="button"
  onClick={() => setGameState('exercises')}
  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:from-purple-700 hover:to-pink-700"
>
  <FileText className="h-4 w-4" />
  Extra Exercises
</button>
// E REMOVA ou comente

// 8. REMOVER SEÇÃO DE EXERCISES (opcional - remova ou comente toda a seção)
// Procure por:
if (gameState === 'exercises') {
  // ... todo o código de exercises
}
// E REMOVA ou comente

// ============================================
// ATUALIZAÇÕES PARA src/utils/answerEvaluation.ts
// ============================================

// Substitua o prompt do Gemini na função evaluateAnswerWithAI:
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

5. SPACING AND FORMATTING:
   - "x=2" = "x = 2"
   - "x=-3" = "x = -3"
   - Ignore extra spaces

IMPORTANT: Focus on whether the mathematical solutions are correct, not the exact format.

Respond ONLY with valid JSON in this exact format:
{
  "isCorrect": true or false,
  "confidence": 0.95,
  "feedback": "Brief, encouraging feedback (1-2 sentences)",
  "suggestions": ["specific suggestion 1", "specific suggestion 2"]
}

If correct, keep feedback positive and brief. If incorrect, provide helpful suggestions about the factorisation method.`;

// ============================================
// CHECKLIST DE MIGRAÇÃO
// ============================================

/*
✅ 1. Copiar quadratics-questions.ts para src/data/questions.ts
✅ 2. Atualizar package.json (nome e descrição)
✅ 3. Atualizar index.html (título e meta)
✅ 4. Atualizar array 'topics' no App.tsx
✅ 5. Atualizar 'revisionTips' no App.tsx
✅ 6. Atualizar textos do menu principal
✅ 7. Atualizar textos do quiz
✅ 8. Atualizar textos dos resultados
✅ 9. Atualizar sidebar "Where next?"
✅ 10. Remover botão "Extra Exercises" (opcional)
✅ 11. Remover seção de exercises (opcional)
✅ 12. Atualizar prompt do Gemini em answerEvaluation.ts
✅ 13. Testar com npm run dev
✅ 14. Verificar que o Gemini aceita múltiplos formatos
✅ 15. Fazer commit e push
*/

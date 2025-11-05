# 🚀 Início Rápido - Quadratics

## Para Inicializar o Repositório Vazio

O repositório https://github.com/roneymatusp2/quadratics está vazio e esperando o primeiro commit.

### ⚡ Solução Rápida (1 Comando)

```powershell
# No diretório C:\Users\roney\WebstormProjects\quadratics
Copy-Item C:\Users\roney\WebstormProjects\ratios\init-quadratics-repo.ps1 .
.\init-quadratics-repo.ps1
```

**Pronto!** O script faz tudo automaticamente:
- ✅ Copia todos os arquivos necessários
- ✅ Atualiza package.json e index.html
- ✅ Inicializa Git do zero
- ✅ Faz commit inicial completo
- ✅ Configura remote origin
- ✅ Faz push para GitHub

### 📋 Depois do Script

O script deixa o repositório pronto, mas você precisa fazer 2 atualizações manuais:

#### 1. Atualizar `src/App.tsx`

Abra `quadratics-app-updates.tsx` e copie:

**Array topics:**
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

**Objeto revisionTips:**
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

**Textos da interface:** (veja `quadratics-app-updates.tsx` para todos os textos)

#### 2. Atualizar `src/utils/answerEvaluation.ts`

Substitua o prompt do Gemini (veja `quadratics-app-updates.tsx` para o prompt completo)

#### 3. Testar

```bash
npm run dev
```

Verifique:
- ✅ Questões carregam
- ✅ Gemini funciona
- ✅ Aceita múltiplos formatos

#### 4. Commit Final

```bash
git add .
git commit -m "feat: Update UI and Gemini prompts for quadratics"
git push
```

#### 5. Deploy no Netlify

Veja `QUADRATICS_DEPLOY_GUIDE.md` para instruções completas.

Resumo:
1. https://app.netlify.com/
2. Conectar repositório
3. Configurar `VITE_GEMINI_API_KEY`
4. Deploy!

## 📦 Arquivos Incluídos

Após executar o script, você terá:

- ✅ `src/data/questions.ts` - 30 questões
- ✅ `README.md` - Documentação
- ✅ `netlify.toml` - Config Netlify
- ✅ `build.sh` - Script de build
- ✅ `QUADRATICS_COMPLETE_GUIDE.md` - Guia completo
- ✅ `QUADRATICS_DEPLOY_GUIDE.md` - Guia de deploy
- ✅ `quadratics-app-updates.tsx` - Código para copiar

## 🎯 Resultado

Após completar todos os passos:

✅ Repositório GitHub populado
✅ 30 questões de quadráticas
✅ Sistema Gemini AI funcionando
✅ Interface completa
✅ Pronto para deploy no Netlify

**Tempo estimado:** 15-20 minutos

## 📞 Ajuda

- **Guia Completo:** `QUADRATICS_COMPLETE_GUIDE.md`
- **Deploy:** `QUADRATICS_DEPLOY_GUIDE.md`
- **Código:** `quadratics-app-updates.tsx`

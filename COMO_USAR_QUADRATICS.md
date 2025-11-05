# 🚀 Como Usar o Pacote de Migração Quadratics

## ✅ Tudo Pronto!

Todos os arquivos foram commitados no repositório ratios:
- **Commit:** `38859e3`
- **Repositório:** https://github.com/roneymatusp2/ratio

## 📦 Arquivos Disponíveis

1. **quadratics-questions.ts** - 30 questões prontas
2. **quadratics-README.md** - Documentação
3. **QUADRATICS_COMPLETE_GUIDE.md** - Guia completo
4. **QUADRATICS_MIGRATION_GUIDE.md** - Guia de migração
5. **QUADRATICS_SUMMARY.md** - Resumo executivo
6. **QUADRATICS_DEPLOY_GUIDE.md** - Guia de deploy no Netlify
7. **quadratics-app-updates.tsx** - Código para copiar
8. **migrate-to-quadratics.ps1** - Script de migração
9. **setup-quadratics-repo.ps1** - Script de setup completo
10. **quadratics-netlify.toml** - Configuração do Netlify
11. **quadratics-build.sh** - Script de build

## 🎯 Opção 1: Setup Automático (RECOMENDADO)

### Passo 1: Ir para o diretório quadratics
```powershell
cd C:\Users\roney\WebstormProjects\quadratics
```

### Passo 2: Copiar o script de setup
```powershell
Copy-Item C:\Users\roney\WebstormProjects\ratios\setup-quadratics-repo.ps1 .
```

### Passo 3: Executar o script
```powershell
.\setup-quadratics-repo.ps1
```

O script vai:
- ✅ Copiar todos os arquivos necessários
- ✅ Copiar arquivos de deploy (netlify.toml, build.sh)
- ✅ Atualizar package.json e index.html
- ✅ Inicializar Git
- ✅ Fazer commit inicial
- ✅ Configurar remote origin
- ✅ Fazer push para GitHub

### Passo 4: Atualizar código manualmente

Abra `quadratics-app-updates.tsx` e copie:

**No `src/App.tsx`:**
- Array `topics`
- Objeto `revisionTips`
- Textos do menu, quiz e resultados

**No `src/utils/answerEvaluation.ts`:**
- Prompt do Gemini

### Passo 5: Testar
```bash
npm run dev
```

### Passo 6: Commit final
```bash
git add .
git commit -m "feat: Update UI and Gemini prompts for quadratics"
git push
```

### Passo 7: Deploy no Netlify

Siga o guia completo em **QUADRATICS_DEPLOY_GUIDE.md**

Resumo rápido:
1. Acesse https://app.netlify.com/
2. Conecte o repositório GitHub
3. Configure variável `VITE_GEMINI_API_KEY`
4. Deploy automático!

## 🎯 Opção 2: Manual

### Passo 1: Copiar arquivos
```powershell
cd C:\Users\roney\WebstormProjects\ratios

# Copiar questões
Copy-Item quadratics-questions.ts C:\Users\roney\WebstormProjects\quadratics\src\data\questions.ts -Force

# Copiar README
Copy-Item quadratics-README.md C:\Users\roney\WebstormProjects\quadratics\README.md -Force

# Copiar guias
Copy-Item QUADRATICS_COMPLETE_GUIDE.md C:\Users\roney\WebstormProjects\quadratics\ -Force
Copy-Item quadratics-app-updates.tsx C:\Users\roney\WebstormProjects\quadratics\ -Force
```

### Passo 2: Atualizar configurações

**package.json:**
```json
{
  "name": "quadratics-practice",
  "description": "Interactive quadratic equations practice for IGCSE 0607"
}
```

**index.html:**
```html
<title>Quadratic Equations Practice - IGCSE 0607</title>
```

### Passo 3: Atualizar código

Siga as instruções em `quadratics-app-updates.tsx`

### Passo 4: Git
```bash
cd C:\Users\roney\WebstormProjects\quadratics
git init
git add .
git commit -m "feat: Initial commit - Quadratic equations practice"
git branch -M main
git remote add origin https://github.com/roneymatusp2/quadratics.git
git push -u origin main
```

## 📋 Checklist Final

Antes de considerar completo:

- [ ] Script executado com sucesso
- [ ] Arquivos copiados para quadratics
- [ ] package.json atualizado
- [ ] index.html atualizado
- [ ] Array `topics` atualizado no App.tsx
- [ ] Objeto `revisionTips` atualizado no App.tsx
- [ ] Textos da interface atualizados
- [ ] Prompt do Gemini atualizado
- [ ] `npm run dev` funciona sem erros
- [ ] Todas as 30 questões carregam
- [ ] Gemini aceita múltiplos formatos
- [ ] Navegação funciona corretamente
- [ ] Git configurado
- [ ] Push para GitHub realizado
- [ ] Site funciona em produção

## 🎓 Estrutura das 30 Questões

| Tipo | IDs | Quantidade |
|------|-----|------------|
| Simple Factorisation | 1-10 | 10 |
| Difference of Two Squares | 11-15 | 5 |
| Advanced Factorisation | 16-20 | 5 |
| Perfect Square Trinomials | 21-24 | 4 |
| Common Factors | 25-30 | 6 |

## 🤖 Sistema Gemini AI

- **Modelo:** `gemini-2.5-flash-lite-preview-09-2025`
- **Chave:** Configure em `.env.local`
- **Formatos aceitos:**
  - "x = 2 or x = -3"
  - "x = -3 or x = 2"
  - "2, -3"
  - "-3, 2"
  - "x=2, x=-3"
  - "1/2" = "0.5"
  - "±3" = "3, -3"

## 🎨 Tópicos

1. **All Topics** - Indigo-Violet-Sky
2. **Simple Factorisation** - Blue-Sky-Cyan
3. **Difference of Two Squares** - Emerald-Teal-Green
4. **Advanced Factorisation** - Orange-Amber-Yellow
5. **Perfect Square Trinomials** - Rose-Red-Pink
6. **Common Factors** - Purple-Violet-Indigo

## 📞 Suporte

Se tiver problemas:

1. Consulte `QUADRATICS_COMPLETE_GUIDE.md`
2. Veja exemplos em `quadratics-app-updates.tsx`
3. Execute `setup-quadratics-repo.ps1` novamente
4. Verifique que `.env.local` tem a chave do Gemini

## 🎉 Resultado Final

Após completar todos os passos, você terá:

✅ Site completo de prática de equações quadráticas
✅ 30 questões organizadas por tipo
✅ Sistema Gemini AI com avaliação inteligente
✅ Interface responsiva e moderna
✅ Alinhado com IGCSE 0607
✅ Repositório no GitHub: https://github.com/roneymatusp2/quadratics

**Tempo estimado:** 30-45 minutos

Boa sorte! 🚀

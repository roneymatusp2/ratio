# 🚀 Guia de Deploy - Quadratics Practice no Netlify

## ✅ Arquivos de Deploy Preparados

Todos os arquivos necessários para deploy estão prontos:

1. **quadratics-netlify.toml** - Configuração do Netlify
2. **quadratics-build.sh** - Script de build
3. **package.json** - Já configurado com scripts de build
4. **vite.config.ts** - Configuração do Vite

## 📋 Checklist Pré-Deploy

Antes de fazer deploy, certifique-se de que:

- [ ] Todos os arquivos foram copiados para o projeto quadratics
- [ ] `npm run build` funciona localmente sem erros
- [ ] `.env.local` tem a chave do Gemini (para testes locais)
- [ ] Código foi commitado e pushed para GitHub
- [ ] Repositório GitHub está público ou você tem acesso

## 🌐 Opção 1: Deploy via Netlify Dashboard (Recomendado)

### Passo 1: Preparar Arquivos

```powershell
cd C:\Users\roney\WebstormProjects\quadratics

# Copiar arquivos de deploy
Copy-Item C:\Users\roney\WebstormProjects\ratios\quadratics-netlify.toml netlify.toml -Force
Copy-Item C:\Users\roney\WebstormProjects\ratios\quadratics-build.sh build.sh -Force

# Commit
git add netlify.toml build.sh
git commit -m "chore: Add Netlify deployment configuration"
git push
```

### Passo 2: Conectar ao Netlify

1. Acesse https://app.netlify.com/
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Escolha **"Deploy with GitHub"**
4. Selecione o repositório **roneymatusp2/quadratics**
5. Configure as opções de build:

```
Build command: bash build.sh
Publish directory: dist
```

### Passo 3: Configurar Variáveis de Ambiente

No Netlify Dashboard:

1. Vá em **Site settings** → **Environment variables**
2. Clique em **"Add a variable"**
3. Adicione:
   - **Key:** `VITE_GEMINI_API_KEY`
   - **Value:** `sua_chave_gemini_aqui`
   - **Scopes:** Marque "All scopes"

### Passo 4: Deploy

1. Clique em **"Deploy site"**
2. Aguarde o build completar (~2-3 minutos)
3. Seu site estará disponível em: `https://[nome-aleatorio].netlify.app`

### Passo 5: Configurar Domínio Customizado (Opcional)

1. Vá em **Site settings** → **Domain management**
2. Clique em **"Add custom domain"**
3. Configure seu domínio (ex: `quadratics.seu-dominio.com`)

## 🌐 Opção 2: Deploy via Netlify CLI

### Passo 1: Instalar Netlify CLI

```bash
npm install -g netlify-cli
```

### Passo 2: Login

```bash
netlify login
```

### Passo 3: Inicializar Site

```bash
cd C:\Users\roney\WebstormProjects\quadratics
netlify init
```

Siga as instruções:
- **Create & configure a new site**
- **Team:** Escolha seu team
- **Site name:** `quadratics-practice` (ou outro nome)
- **Build command:** `bash build.sh`
- **Publish directory:** `dist`

### Passo 4: Configurar Variável de Ambiente

```bash
netlify env:set VITE_GEMINI_API_KEY "sua_chave_gemini_aqui"
```

### Passo 5: Deploy

```bash
# Deploy de produção
netlify deploy --prod

# Ou deploy de preview
netlify deploy
```

## 🔧 Configuração do netlify.toml

O arquivo `netlify.toml` já está configurado com:

### Build Settings
```toml
[build]
  publish = "dist"
  command = "bash build.sh"

[build.environment]
  NODE_VERSION = "20.11.0"
  CI = "false"
```

### Redirects (SPA)
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Security Headers
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Cache Control
```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 🔍 Verificar Build Localmente

Antes de fazer deploy, teste o build localmente:

```bash
cd C:\Users\roney\WebstormProjects\quadratics

# Build
npm run build

# Preview do build
npm run preview
```

Acesse http://localhost:4173 e teste:
- ✅ Todas as questões carregam
- ✅ Gemini AI funciona
- ✅ Navegação funciona
- ✅ Sem erros no console

## 🐛 Troubleshooting

### Problema: Build falha no Netlify

**Solução 1:** Verificar logs de build
- Vá em **Deploys** → Clique no deploy falhado
- Leia os logs para identificar o erro

**Solução 2:** Verificar Node version
- Certifique-se de que `NODE_VERSION = "20.11.0"` está no netlify.toml

**Solução 3:** Limpar cache
- Vá em **Site settings** → **Build & deploy** → **Clear cache and retry deploy**

### Problema: Gemini API não funciona em produção

**Solução:** Verificar variável de ambiente
- Vá em **Site settings** → **Environment variables**
- Certifique-se de que `VITE_GEMINI_API_KEY` está configurada
- Faça um novo deploy após adicionar a variável

### Problema: Rotas não funcionam (404)

**Solução:** Verificar redirects
- Certifique-se de que o netlify.toml tem a configuração de redirect SPA
- O redirect `/* → /index.html` deve estar presente

### Problema: Assets não carregam

**Solução:** Verificar base path
- No `vite.config.ts`, certifique-se de que `base: '/'` está configurado
- Ou remova a propriedade `base` completamente

## 📊 Monitoramento

Após o deploy, monitore:

### Analytics (Netlify)
- Vá em **Analytics** para ver:
  - Pageviews
  - Unique visitors
  - Top pages
  - Bandwidth usage

### Logs
- Vá em **Functions** → **Logs** (se usar functions)
- Ou use o console do navegador para erros client-side

### Performance
- Use Lighthouse no Chrome DevTools
- Ou adicione o plugin Netlify Lighthouse:

```toml
[[plugins]]
  package = "@netlify/plugin-lighthouse"
```

## 🔄 Deploy Contínuo

Com a configuração atual, cada push para `main` fará um deploy automático:

```bash
# Fazer alterações
git add .
git commit -m "feat: Add new questions"
git push

# Netlify detecta o push e faz deploy automaticamente
```

### Deploy Previews

Para testar antes de mergear:

1. Crie uma branch:
```bash
git checkout -b feature/new-questions
```

2. Faça alterações e push:
```bash
git add .
git commit -m "feat: Add new questions"
git push origin feature/new-questions
```

3. Crie um Pull Request no GitHub
4. Netlify criará um deploy preview automaticamente
5. Teste o preview antes de mergear

## 🌍 URLs

Após o deploy, você terá:

- **URL de Produção:** `https://quadratics-practice.netlify.app`
- **URL Customizada:** `https://seu-dominio.com` (se configurado)
- **Deploy Previews:** `https://deploy-preview-[PR-number]--quadratics-practice.netlify.app`

## 📱 Testar em Dispositivos

Após o deploy, teste em:

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Android Chrome)
- ✅ Tablet
- ✅ Diferentes resoluções

## 🔒 Segurança

O netlify.toml já inclui headers de segurança:

- ✅ X-Frame-Options: DENY (previne clickjacking)
- ✅ X-XSS-Protection: 1; mode=block
- ✅ X-Content-Type-Options: nosniff
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy (desabilita câmera, microfone, etc.)

## 📈 Otimizações

Para melhorar performance:

### 1. Habilitar Brotli Compression
Netlify faz isso automaticamente para arquivos > 1KB

### 2. Configurar Cache Headers
Já configurado no netlify.toml para assets

### 3. Lazy Loading
Já implementado no código React

### 4. Code Splitting
Vite faz isso automaticamente

## ✅ Checklist Final de Deploy

- [ ] netlify.toml copiado e commitado
- [ ] build.sh copiado e commitado
- [ ] Código pushed para GitHub
- [ ] Site criado no Netlify
- [ ] Variável VITE_GEMINI_API_KEY configurada
- [ ] Build completou com sucesso
- [ ] Site acessível via URL
- [ ] Gemini AI funciona em produção
- [ ] Todas as questões carregam
- [ ] Navegação funciona
- [ ] Testado em mobile
- [ ] Sem erros no console
- [ ] Performance aceitável (Lighthouse > 90)

## 🎉 Pronto!

Seu site Quadratics Practice está no ar! 🚀

**URL:** https://quadratics-practice.netlify.app (ou seu domínio customizado)

**Próximos passos:**
1. Compartilhe com estudantes
2. Colete feedback
3. Adicione mais questões
4. Monitore analytics
5. Faça melhorias contínuas

## 📞 Suporte

Se precisar de ajuda:
- Documentação Netlify: https://docs.netlify.com/
- Netlify Support: https://www.netlify.com/support/
- Vite Docs: https://vitejs.dev/
- React Docs: https://react.dev/

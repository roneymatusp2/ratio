# Script de Inicialização do Repositório Quadratics
# Execute este script no diretório C:\Users\roney\WebstormProjects\quadratics

Write-Host "=== Inicialização do Repositório Quadratics ===" -ForegroundColor Cyan
Write-Host ""

$quadraticsPath = "C:\Users\roney\WebstormProjects\quadratics"
$ratiosPath = "C:\Users\roney\WebstormProjects\ratios"

# Verificar se estamos no diretório correto
Set-Location $quadraticsPath
Write-Host "📂 Diretório: $quadraticsPath" -ForegroundColor Green
Write-Host ""

# 1. Copiar TODOS os arquivos necessários do projeto ratios
Write-Host "📦 Copiando arquivos do projeto ratios..." -ForegroundColor Yellow

# Arquivos de dados
Copy-Item "$ratiosPath\quadratics-questions.ts" "$quadraticsPath\src\data\questions.ts" -Force
Write-Host "✅ questions.ts" -ForegroundColor Green

# Documentação
Copy-Item "$ratiosPath\quadratics-README.md" "$quadraticsPath\README.md" -Force
Write-Host "✅ README.md" -ForegroundColor Green

# Arquivos de deploy
Copy-Item "$ratiosPath\quadratics-netlify.toml" "$quadraticsPath\netlify.toml" -Force
Write-Host "✅ netlify.toml" -ForegroundColor Green

Copy-Item "$ratiosPath\quadratics-build.sh" "$quadraticsPath\build.sh" -Force
Write-Host "✅ build.sh" -ForegroundColor Green

# Guias (para referência)
Copy-Item "$ratiosPath\QUADRATICS_COMPLETE_GUIDE.md" "$quadraticsPath\" -Force
Copy-Item "$ratiosPath\QUADRATICS_DEPLOY_GUIDE.md" "$quadraticsPath\" -Force
Copy-Item "$ratiosPath\quadratics-app-updates.tsx" "$quadraticsPath\" -Force
Write-Host "✅ Guias de referência" -ForegroundColor Green

Write-Host ""

# 2. Atualizar package.json
Write-Host "📝 Atualizando package.json..." -ForegroundColor Yellow
$packageJsonPath = "$quadraticsPath\package.json"
if (Test-Path $packageJsonPath) {
    $packageJson = Get-Content $packageJsonPath -Raw | ConvertFrom-Json
    $packageJson.name = "quadratics-practice"
    $packageJson.description = "Interactive quadratic equations practice for IGCSE 0607"
    $packageJson | ConvertTo-Json -Depth 10 | Set-Content $packageJsonPath
    Write-Host "✅ package.json atualizado" -ForegroundColor Green
}

Write-Host ""

# 3. Atualizar index.html
Write-Host "📝 Atualizando index.html..." -ForegroundColor Yellow
$indexHtml = @"
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
"@
$indexHtml | Set-Content "$quadraticsPath\index.html"
Write-Host "✅ index.html atualizado" -ForegroundColor Green

Write-Host ""

# 4. Verificar se Git já está inicializado
Write-Host "🔧 Configurando Git..." -ForegroundColor Yellow

if (Test-Path "$quadraticsPath\.git") {
    Write-Host "⚠️  Git já inicializado. Removendo para começar do zero..." -ForegroundColor Yellow
    Remove-Item "$quadraticsPath\.git" -Recurse -Force
}

# Inicializar Git
git init
Write-Host "✅ Git inicializado" -ForegroundColor Green

Write-Host ""

# 5. Criar .gitignore se não existir
Write-Host "📝 Verificando .gitignore..." -ForegroundColor Yellow
if (-not (Test-Path "$quadraticsPath\.gitignore")) {
    $gitignore = @"
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.production
"@
    $gitignore | Set-Content "$quadraticsPath\.gitignore"
    Write-Host "✅ .gitignore criado" -ForegroundColor Green
} else {
    Write-Host "✅ .gitignore já existe" -ForegroundColor Green
}

Write-Host ""

# 6. Adicionar todos os arquivos
Write-Host "📦 Adicionando arquivos ao Git..." -ForegroundColor Yellow
git add .
Write-Host "✅ Arquivos adicionados" -ForegroundColor Green

Write-Host ""

# 7. Fazer commit inicial
Write-Host "💾 Fazendo commit inicial..." -ForegroundColor Yellow
git commit -m "feat: Initial commit - Quadratic equations practice app

- Add 30 quadratic equation questions organized by type
  * 10 Simple Factorisation (x² + bx + c)
  * 5 Difference of Two Squares
  * 5 Advanced Factorisation (ax² + bx + c)
  * 4 Perfect Square Trinomials
  * 6 Common Factors

- Implement Gemini AI evaluation system
  * Accepts multiple answer formats
  * Flexible recognition (fractions, decimals, different orders)
  * Intelligent feedback and suggestions

- Add complete UI with 6 topic categories
  * Color-coded interface
  * Step-by-step solutions and hints
  * Progress tracking and analytics
  * Manual navigation (15s + button)

- Configure Netlify deployment
  * netlify.toml with build settings
  * Security headers
  * Cache control
  * SPA routing support

- Mobile-responsive design with British English
- Aligned with IGCSE 0607 syllabus"

Write-Host "✅ Commit realizado" -ForegroundColor Green

Write-Host ""

# 8. Configurar branch main
Write-Host "🌿 Configurando branch main..." -ForegroundColor Yellow
git branch -M main
Write-Host "✅ Branch main configurada" -ForegroundColor Green

Write-Host ""

# 9. Adicionar remote origin
Write-Host "🔗 Adicionando remote origin..." -ForegroundColor Yellow
$remoteUrl = "https://github.com/roneymatusp2/quadratics.git"

git remote add origin $remoteUrl
Write-Host "✅ Remote origin adicionado: $remoteUrl" -ForegroundColor Green

Write-Host ""

# 10. Push para GitHub
Write-Host "🚀 Fazendo push para GitHub..." -ForegroundColor Yellow
Write-Host ""

try {
    git push -u origin main
    Write-Host ""
    Write-Host "✅ Push realizado com sucesso!" -ForegroundColor Green
} catch {
    Write-Host ""
    Write-Host "❌ Erro ao fazer push. Tente manualmente:" -ForegroundColor Red
    Write-Host "   git push -u origin main" -ForegroundColor Gray
}

Write-Host ""
Write-Host "=== Repositório Inicializado! ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  PRÓXIMOS PASSOS OBRIGATÓRIOS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Abra src\App.tsx e atualize:" -ForegroundColor White
Write-Host "   - Array 'topics' (copie de quadratics-app-updates.tsx)" -ForegroundColor Gray
Write-Host "   - Objeto 'revisionTips'" -ForegroundColor Gray
Write-Host "   - Textos da interface (menu, quiz, resultados)" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Abra src\utils\answerEvaluation.ts e atualize:" -ForegroundColor White
Write-Host "   - Prompt do Gemini (copie de quadratics-app-updates.tsx)" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Teste o aplicativo:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Faça commit das alterações:" -ForegroundColor White
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m 'feat: Update UI and Gemini prompts for quadratics'" -ForegroundColor Gray
Write-Host "   git push" -ForegroundColor Gray
Write-Host ""
Write-Host "5. Deploy no Netlify:" -ForegroundColor White
Write-Host "   - Acesse https://app.netlify.com/" -ForegroundColor Gray
Write-Host "   - Conecte o repositório GitHub" -ForegroundColor Gray
Write-Host "   - Configure VITE_GEMINI_API_KEY" -ForegroundColor Gray
Write-Host "   - Veja QUADRATICS_DEPLOY_GUIDE.md para detalhes" -ForegroundColor Gray
Write-Host ""
Write-Host "📖 Consulte quadratics-app-updates.tsx para o código completo" -ForegroundColor Cyan
Write-Host "📖 Consulte QUADRATICS_COMPLETE_GUIDE.md para instruções detalhadas" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎉 Repositório: https://github.com/roneymatusp2/quadratics" -ForegroundColor Green
Write-Host ""

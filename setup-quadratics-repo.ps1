# Script Completo: Setup do Repositório Quadratics
# Execute este script no diretório C:\Users\roney\WebstormProjects\quadratics

Write-Host "=== Setup Completo do Repositório Quadratics ===" -ForegroundColor Cyan
Write-Host ""

$quadraticsPath = "C:\Users\roney\WebstormProjects\quadratics"
$ratiosPath = "C:\Users\roney\WebstormProjects\ratios"

# Verificar se estamos no diretório correto
$currentPath = Get-Location
if ($currentPath.Path -ne $quadraticsPath) {
    Write-Host "⚠️  Mudando para o diretório quadratics..." -ForegroundColor Yellow
    Set-Location $quadraticsPath
}

Write-Host "📂 Diretório atual: $quadraticsPath" -ForegroundColor Green
Write-Host ""

# 1. Copiar arquivos de migração
Write-Host "📝 Copiando arquivos de migração do projeto ratios..." -ForegroundColor Yellow

if (Test-Path "$ratiosPath\quadratics-questions.ts") {
    Copy-Item "$ratiosPath\quadratics-questions.ts" "$quadraticsPath\src\data\questions.ts" -Force
    Write-Host "✅ questions.ts copiado" -ForegroundColor Green
} else {
    Write-Host "❌ quadratics-questions.ts não encontrado em $ratiosPath" -ForegroundColor Red
}

if (Test-Path "$ratiosPath\quadratics-README.md") {
    Copy-Item "$ratiosPath\quadratics-README.md" "$quadraticsPath\README.md" -Force
    Write-Host "✅ README.md copiado" -ForegroundColor Green
} else {
    Write-Host "❌ quadratics-README.md não encontrado em $ratiosPath" -ForegroundColor Red
}

# Copiar guias de migração para referência
if (Test-Path "$ratiosPath\QUADRATICS_COMPLETE_GUIDE.md") {
    Copy-Item "$ratiosPath\QUADRATICS_COMPLETE_GUIDE.md" "$quadraticsPath\" -Force
    Write-Host "✅ QUADRATICS_COMPLETE_GUIDE.md copiado" -ForegroundColor Green
}

if (Test-Path "$ratiosPath\quadratics-app-updates.tsx") {
    Copy-Item "$ratiosPath\quadratics-app-updates.tsx" "$quadraticsPath\" -Force
    Write-Host "✅ quadratics-app-updates.tsx copiado" -ForegroundColor Green
}

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
} else {
    Write-Host "❌ package.json não encontrado" -ForegroundColor Red
}

Write-Host ""

# 3. Atualizar index.html
Write-Host "📝 Atualizando index.html..." -ForegroundColor Yellow
$indexHtmlPath = "$quadraticsPath\index.html"
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
$indexHtml | Set-Content $indexHtmlPath
Write-Host "✅ index.html atualizado" -ForegroundColor Green

Write-Host ""

# 4. Inicializar Git (se ainda não foi)
Write-Host "🔧 Configurando Git..." -ForegroundColor Yellow

if (-not (Test-Path "$quadraticsPath\.git")) {
    git init
    Write-Host "✅ Git inicializado" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Git já está inicializado" -ForegroundColor Cyan
}

# 5. Adicionar arquivos ao Git
Write-Host ""
Write-Host "📦 Adicionando arquivos ao Git..." -ForegroundColor Yellow
git add .
Write-Host "✅ Arquivos adicionados" -ForegroundColor Green

# 6. Fazer commit inicial
Write-Host ""
Write-Host "💾 Fazendo commit inicial..." -ForegroundColor Yellow
git commit -m "feat: Initial commit - Quadratic equations practice app

- Add 30 quadratic equation questions organized by type
- Implement Gemini AI evaluation system
- Support multiple answer formats (fractions, decimals, different orders)
- Add 6 topic categories with color-coded interface
- Include step-by-step solutions and hints
- Implement progress tracking and performance analytics
- Add manual navigation with 15-second auto-advance
- Mobile-responsive design with British English
- Aligned with IGCSE 0607 syllabus

Topics covered:
- Simple Factorisation (x² + bx + c)
- Difference of Two Squares
- Advanced Factorisation (ax² + bx + c)
- Perfect Square Trinomials
- Common Factors"

Write-Host "✅ Commit realizado" -ForegroundColor Green

# 7. Configurar branch main
Write-Host ""
Write-Host "🌿 Configurando branch main..." -ForegroundColor Yellow
git branch -M main
Write-Host "✅ Branch main configurada" -ForegroundColor Green

# 8. Adicionar remote origin
Write-Host ""
Write-Host "🔗 Adicionando remote origin..." -ForegroundColor Yellow
$remoteUrl = "https://github.com/roneymatusp2/quadratics.git"

# Verificar se remote já existe
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "ℹ️  Remote origin já existe: $existingRemote" -ForegroundColor Cyan
    $response = Read-Host "Deseja substituir? (s/n)"
    if ($response -eq 's' -or $response -eq 'S') {
        git remote remove origin
        git remote add origin $remoteUrl
        Write-Host "✅ Remote origin atualizado" -ForegroundColor Green
    }
} else {
    git remote add origin $remoteUrl
    Write-Host "✅ Remote origin adicionado: $remoteUrl" -ForegroundColor Green
}

# 9. Push para GitHub
Write-Host ""
Write-Host "🚀 Fazendo push para GitHub..." -ForegroundColor Yellow
Write-Host "⚠️  Certifique-se de que o repositório https://github.com/roneymatusp2/quadratics.git existe!" -ForegroundColor Yellow
Write-Host ""
$response = Read-Host "Deseja fazer push agora? (s/n)"

if ($response -eq 's' -or $response -eq 'S') {
    git push -u origin main
    Write-Host "✅ Push realizado com sucesso!" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Push cancelado. Execute manualmente quando estiver pronto:" -ForegroundColor Cyan
    Write-Host "   git push -u origin main" -ForegroundColor Gray
}

Write-Host ""
Write-Host "=== Setup Concluído! ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  PRÓXIMOS PASSOS MANUAIS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Abra src\App.tsx e atualize:" -ForegroundColor White
Write-Host "   - Array 'topics' (veja quadratics-app-updates.tsx)" -ForegroundColor Gray
Write-Host "   - Objeto 'revisionTips'" -ForegroundColor Gray
Write-Host "   - Textos da interface" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Abra src\utils\answerEvaluation.ts e atualize:" -ForegroundColor White
Write-Host "   - Prompt do Gemini (veja quadratics-app-updates.tsx)" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Teste o aplicativo:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Verifique que o Gemini aceita múltiplos formatos" -ForegroundColor White
Write-Host ""
Write-Host "5. Faça commit das alterações manuais:" -ForegroundColor White
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m 'feat: Update UI and Gemini prompts for quadratics'" -ForegroundColor Gray
Write-Host "   git push" -ForegroundColor Gray
Write-Host ""
Write-Host "📖 Consulte QUADRATICS_COMPLETE_GUIDE.md para instruções detalhadas" -ForegroundColor Cyan
Write-Host "📝 Use quadratics-app-updates.tsx como referência para o código" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎉 Repositório configurado em: https://github.com/roneymatusp2/quadratics" -ForegroundColor Green
Write-Host ""

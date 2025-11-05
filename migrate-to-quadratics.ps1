# Script de Migração: Ratios → Quadratics
# Execute este script no diretório C:\Users\roney\WebstormProjects\ratios

Write-Host "=== Migração Ratios → Quadratics ===" -ForegroundColor Cyan
Write-Host ""

$ratiosPath = "C:\Users\roney\WebstormProjects\ratios"
$quadraticsPath = "C:\Users\roney\WebstormProjects\quadratics"

# Verificar se os diretórios existem
if (-not (Test-Path $ratiosPath)) {
    Write-Host "❌ Diretório ratios não encontrado: $ratiosPath" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $quadraticsPath)) {
    Write-Host "❌ Diretório quadratics não encontrado: $quadraticsPath" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Diretórios encontrados" -ForegroundColor Green
Write-Host ""

# 1. Copiar arquivo de questões
Write-Host "📝 Copiando questões de quadráticas..." -ForegroundColor Yellow
Copy-Item "$ratiosPath\quadratics-questions.ts" "$quadraticsPath\src\data\questions.ts" -Force
Write-Host "✅ Questões copiadas" -ForegroundColor Green

# 2. Copiar README
Write-Host "📝 Copiando README..." -ForegroundColor Yellow
Copy-Item "$ratiosPath\quadratics-README.md" "$quadraticsPath\README.md" -Force
Write-Host "✅ README copiado" -ForegroundColor Green

# 3. Atualizar package.json
Write-Host "📝 Atualizando package.json..." -ForegroundColor Yellow
$packageJson = Get-Content "$quadraticsPath\package.json" -Raw | ConvertFrom-Json
$packageJson.name = "quadratics-practice"
$packageJson.description = "Interactive quadratic equations practice for IGCSE 0607"
$packageJson | ConvertTo-Json -Depth 10 | Set-Content "$quadraticsPath\package.json"
Write-Host "✅ package.json atualizado" -ForegroundColor Green

# 4. Atualizar index.html
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

# 5. Backup do App.tsx original
Write-Host "📝 Fazendo backup do App.tsx..." -ForegroundColor Yellow
Copy-Item "$quadraticsPath\src\App.tsx" "$quadraticsPath\src\App.tsx.backup" -Force
Write-Host "✅ Backup criado: App.tsx.backup" -ForegroundColor Green

Write-Host ""
Write-Host "=== Migração Parcial Concluída ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  PRÓXIMOS PASSOS MANUAIS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Abra $quadraticsPath\src\App.tsx" -ForegroundColor White
Write-Host "2. Substitua o array 'topics' pelos tópicos de quadráticas (veja QUADRATICS_MIGRATION_GUIDE.md)"
Write-Host "3. Atualize 'revisionTips' com dicas de fatorização"
Write-Host "4. Atualize os textos da interface (títulos, descrições)"
Write-Host "5. Modifique o prompt do Gemini em src\utils\answerEvaluation.ts"
Write-Host ""
Write-Host "📖 Consulte QUADRATICS_MIGRATION_GUIDE.md para instruções detalhadas" -ForegroundColor Cyan
Write-Host ""
Write-Host "Após as alterações manuais, execute:" -ForegroundColor White
Write-Host "  cd $quadraticsPath" -ForegroundColor Gray
Write-Host "  npm run dev" -ForegroundColor Gray
Write-Host ""

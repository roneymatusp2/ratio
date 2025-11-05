# Script para Reiniciar o Servidor de Desenvolvimento
# Resolve o problema de Percentages não aparecer

Write-Host "🔄 Reiniciando Servidor de Desenvolvimento..." -ForegroundColor Cyan
Write-Host ""

# Passo 1: Parar processos Node
Write-Host "1️⃣ Parando processos Node..." -ForegroundColor Yellow
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    $nodeProcesses | Stop-Process -Force
    Write-Host "   ✅ Processos Node parados" -ForegroundColor Green
} else {
    Write-Host "   ℹ️ Nenhum processo Node rodando" -ForegroundColor Gray
}
Start-Sleep -Seconds 2

# Passo 2: Limpar cache do Vite
Write-Host ""
Write-Host "2️⃣ Limpando cache do Vite..." -ForegroundColor Yellow
if (Test-Path "node_modules\.vite") {
    Remove-Item -Recurse -Force "node_modules\.vite"
    Write-Host "   ✅ Cache do Vite limpo" -ForegroundColor Green
} else {
    Write-Host "   ℹ️ Cache do Vite já está limpo" -ForegroundColor Gray
}

# Passo 3: Limpar dist
Write-Host ""
Write-Host "3️⃣ Limpando pasta dist..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "   ✅ Pasta dist limpa" -ForegroundColor Green
} else {
    Write-Host "   ℹ️ Pasta dist já está limpa" -ForegroundColor Gray
}

# Passo 4: Verificar arquivos de Percentages
Write-Host ""
Write-Host "4️⃣ Verificando arquivos de Percentages..." -ForegroundColor Yellow
if (Test-Path "src\data\percentages-exercises.ts") {
    $fileSize = (Get-Item "src\data\percentages-exercises.ts").Length
    Write-Host "   ✅ percentages-exercises.ts encontrado ($fileSize bytes)" -ForegroundColor Green
} else {
    Write-Host "   ❌ percentages-exercises.ts NÃO encontrado!" -ForegroundColor Red
    Write-Host "   Execute: git pull origin main" -ForegroundColor Yellow
    exit 1
}

if (Test-Path "src\data\extra-exercises-new.ts") {
    Write-Host "   ✅ extra-exercises-new.ts encontrado" -ForegroundColor Green
} else {
    Write-Host "   ❌ extra-exercises-new.ts NÃO encontrado!" -ForegroundColor Red
    exit 1
}

# Passo 5: Iniciar servidor
Write-Host ""
Write-Host "5️⃣ Iniciando servidor de desenvolvimento..." -ForegroundColor Yellow
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "  🚀 Servidor iniciando..." -ForegroundColor Cyan
Write-Host "  📍 URL: http://localhost:5173" -ForegroundColor Cyan
Write-Host "  💯 Percentages deve aparecer agora!" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  Após o servidor iniciar:" -ForegroundColor Yellow
Write-Host "   1. Abra http://localhost:5173 no navegador" -ForegroundColor White
Write-Host "   2. Pressione Ctrl+Shift+R para hard refresh" -ForegroundColor White
Write-Host "   3. Vá para Extra Exercises" -ForegroundColor White
Write-Host "   4. Procure por 💯 Percentages" -ForegroundColor White
Write-Host ""
Write-Host "🛑 Para parar o servidor: Pressione Ctrl+C" -ForegroundColor Red
Write-Host ""

# Iniciar npm run dev
npm run dev

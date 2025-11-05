# 🚀 Comandos Exatos para Inicializar o Repositório Quadratics

## ⚡ Execute Estes Comandos (Copie e Cole)

### Passo 1: Ir para o diretório quadratics
```powershell
cd C:\Users\roney\WebstormProjects\quadratics
```

### Passo 2: Copiar o script de inicialização
```powershell
Copy-Item C:\Users\roney\WebstormProjects\ratios\init-quadratics-repo.ps1 . -Force
```

### Passo 3: Executar o script
```powershell
.\init-quadratics-repo.ps1
```

## 🎯 O Que o Script Faz

O script vai:
1. Copiar todos os arquivos necessários do projeto ratios
2. Atualizar package.json e index.html
3. Inicializar Git (removendo .git existente se houver)
4. Adicionar todos os arquivos
5. Fazer commit inicial completo
6. Configurar remote origin
7. Fazer push para GitHub

## ⚠️ Se Houver Erro de Permissão

Se o PowerShell bloquear a execução do script:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\init-quadratics-repo.ps1
```

## 🔄 Alternativa: Comandos Manuais

Se preferir fazer manualmente:

```powershell
# 1. Ir para o diretório
cd C:\Users\roney\WebstormProjects\quadratics

# 2. Remover Git existente (se houver)
Remove-Item .git -Recurse -Force -ErrorAction SilentlyContinue

# 3. Copiar arquivos
Copy-Item C:\Users\roney\WebstormProjects\ratios\quadratics-questions.ts src\data\questions.ts -Force
Copy-Item C:\Users\roney\WebstormProjects\ratios\quadratics-README.md README.md -Force
Copy-Item C:\Users\roney\WebstormProjects\ratios\quadratics-netlify.toml netlify.toml -Force
Copy-Item C:\Users\roney\WebstormProjects\ratios\quadratics-build.sh build.sh -Force

# 4. Inicializar Git
git init

# 5. Adicionar arquivos
git add .

# 6. Commit
git commit -m "feat: Initial commit - Quadratic equations practice app with 30 questions, Gemini AI, and Netlify config"

# 7. Configurar branch e remote
git branch -M main
git remote add origin https://github.com/roneymatusp2/quadratics.git

# 8. Push
git push -u origin main
```

## ✅ Verificar Sucesso

Após executar, verifique:

1. **No terminal:** Deve aparecer "Push realizado com sucesso!"
2. **No GitHub:** Atualize a página https://github.com/roneymatusp2/quadratics
3. **Deve ver:** Vários arquivos incluindo README.md, src/, netlify.toml, etc.

## 🐛 Troubleshooting

### Problema: "fatal: remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/roneymatusp2/quadratics.git
git push -u origin main
```

### Problema: "error: failed to push some refs"
```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Problema: Script não executa
```powershell
# Verificar se o arquivo existe
Test-Path .\init-quadratics-repo.ps1

# Se não existir, copiar novamente
Copy-Item C:\Users\roney\WebstormProjects\ratios\init-quadratics-repo.ps1 . -Force

# Executar com bypass
PowerShell -ExecutionPolicy Bypass -File .\init-quadratics-repo.ps1
```

## 📞 Próximos Passos

Após o push bem-sucedido:

1. Atualizar código (veja quadratics-app-updates.tsx)
2. Testar com `npm run dev`
3. Commit das alterações
4. Deploy no Netlify

## 🎉 Resultado Esperado

Após executar com sucesso, o repositório terá:
- ✅ 30 questões de quadráticas
- ✅ README.md completo
- ✅ netlify.toml configurado
- ✅ build.sh pronto
- ✅ Estrutura completa do projeto

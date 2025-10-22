# Extra Exercises - Nova Seção

## 📚 Visão Geral

Foi adicionada uma nova seção chamada "Extra Exercises" ao site, contendo 36 exercícios completos de matemática do Form 2, cada um com:

- ✅ Enunciado completo da questão
- 💡 Dica para ajudar a resolver
- 📝 Solução passo a passo detalhada

## 🎨 Design e Funcionalidades

### Interface Principal
- **Botão de acesso**: Localizado no menu principal com gradiente roxo-rosa
- **Layout responsivo**: Adaptado para desktop e mobile
- **Animações suaves**: Transições e efeitos visuais elegantes

### Cartões de Exercícios
Cada exercício é apresentado em um cartão expansível com:

1. **Cabeçalho**:
   - Número do exercício em destaque
   - Título descritivo
   - Enunciado completo
   - Sub-questões (quando aplicável)

2. **Seção de Dica** (fundo amarelo/âmbar):
   - Botão "Show/Hide hint"
   - Dica contextual para guiar o raciocínio

3. **Seção de Solução** (fundo verde/esmeralda):
   - Botão "Show/Hide solution"
   - Resolução passo a passo
   - Formatação clara com bullets e indentação

### Exercícios Incluídos (1-18)

1. **Engine Capacity Conversion** - Conversão de litros para cm³
2. **Running Laps** - MMC e cálculo de voltas
3. **Dividing Money in a Ratio** - Divisão proporcional
4. **Lowest Common Multiple** - Encontrar o MMC
5. **Vowels to Consonants Ratio** - Razão de vogais/consoantes
6. **Prime Factorisation** - Fatoração em primos
7. **Lorry Weight Limit** - Conversão de unidades de massa
8. **Highest Common Factor** - Encontrar o MDC
9. **Students to Teachers Ratio** - Simplificação de razões
10. **Prime Factors and HCF** - Fatoração e MDC
11. **Pencil Case Ratios** - Razões com múltiplos itens
12. **Matching Mass Measurements** - Equivalência de medidas
13. **Height Ratio Problem** - Problema de razão com diferença
14. **Box of Butter** - Conversão de unidades
15. **Mobile Phone and Books Spending** - Proporção direta
16. **LCM and HCF of 280 and 420** - MMC e MDC combinados
17. **Shaded Area Ratio** - Razão de áreas
18. **Marking Time** - Adição de tempo

### Exercícios Adicionais (19-36)

19. **LCM of 5 and 12** - MMC de 5 e 12
20. **Warehouse Weight Limit** - Limite de peso de armazém
21. **Vowels to Consonants in EDUCATION** - Razão em EDUCATION
22. **Students to Teachers Ratio (63 boys, 72 girls)** - Razão alunos/professores
23. **Conference Speeches Time** - Tempo total de palestras
24. **Cinema and Video Games Spending** - Gastos proporcionais
25. **Cycling Laps** - Voltas de ciclismo e MMC
26. **Height Ratio Problem (Anna and Thomas)** - Problema de altura
27. **Daniel's Desk Drawer Ratios** - Razões na gaveta
28. **Prime Factorisation of 756** - Fatoração de 756
29. **Prime Factors and HCF (240 and 180)** - Fatoração e MDC
30. **Matching Volume Measurements** - Equivalência de volumes
31. **Car Engine Capacity Conversion** - Conversão de capacidade de motor
32. **Dividing £84 in Ratio 4:3** - Divisão de £84
33. **HCF of 24 and 36** - MDC de 24 e 36
34. **Crate of Honey Jars** - Caixa de potes de mel
35. **LCM and HCF of 360 and 540** - MMC e MDC de 360 e 540
36. **Shaded Area Ratio (Alternative Triangle)** - Razão de área sombreada

## 🎯 Dicas de Estudo

A seção inclui um painel de dicas no final:
- Tente resolver sozinho antes de ver a dica
- Use a dica se ficar travado
- Estude as soluções passo a passo
- Pratique regularmente

## 🚀 Como Acessar

1. Abra o site
2. No menu principal, clique no botão "Extra Exercises" (roxo-rosa)
3. Navegue pelos exercícios
4. Clique em qualquer exercício para expandir
5. Use os botões "Show hint" e "Show solution" conforme necessário

## 💻 Arquivos Modificados

- `src/App.tsx` - Adicionado novo estado e componente de exercícios
- `src/data/extra-exercises.ts` - Novo arquivo com todos os 36 exercícios
- Interface TypeScript `ExtraExercise` para tipagem

## 📊 Estatísticas

- **Total de exercícios**: 36
- **Exercícios com sub-partes**: 10
- **Tópicos cobertos**: Razões, Proporções, MMC, MDC, Fatoração Prima, Conversões de Unidades, Tempo
- **Todos incluem**: Dica + Solução passo a passo detalhada

## 🎨 Paleta de Cores

- **Botão principal**: Gradiente roxo (#9333ea) para rosa (#db2777)
- **Dicas**: Fundo âmbar (#fef3c7) com texto âmbar escuro
- **Soluções**: Fundo verde esmeralda (#d1fae5) com texto verde escuro
- **Cartões**: Fundo branco com backdrop blur

## ✨ Características Técnicas

- **Estado gerenciado**: React hooks para controle de expansão e visibilidade
- **Acessibilidade**: Botões com foco visível e navegação por teclado
- **Performance**: Renderização condicional para otimização
- **Responsivo**: Layout adaptável para todos os tamanhos de tela

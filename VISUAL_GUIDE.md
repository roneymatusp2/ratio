# 🎨 Guia Visual - Extra Exercises

## 📱 Interface Principal

```
┌─────────────────────────────────────────────────────────────┐
│  🏠 Menu Principal                                          │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  Choose your challenge                                │ │
│  │  Select a strand or sample the lot.                   │ │
│  │                                                        │ │
│  │  [📄 Extra Exercises]  12 questions per session       │ │
│  │   (Botão roxo-rosa)                                   │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  [All Topics] [Ratio Notation] [Equivalent Ratios] ...     │
└─────────────────────────────────────────────────────────────┘
```

---

## 📚 Página de Extra Exercises

```
┌─────────────────────────────────────────────────────────────┐
│  PRACTICE & LEARN                                           │
│  Extra Exercises                                            │
│  Work through these exercises at your own pace.             │
│                                          [← Back to Quiz]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  [1] Engine Capacity Conversion              [▼]    │   │
│  │  The capacities of motorbike engines are...         │   │
│  │  a) A motorbike's engine is said to be 1.8 L...     │   │
│  │  b) Another engine has a capacity of 2200 cc...     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  [2] Running Laps                            [▼]    │   │
│  │  Michael, Sophie, and James are running laps...     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ... (34 exercícios mais)                                  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ⭐ Study Tips                                       │   │
│  │  • Try each exercise on your own first              │   │
│  │  • Use the hint if you're stuck                     │   │
│  │  • Study the solutions carefully                    │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔍 Exercício Expandido

```
┌─────────────────────────────────────────────────────────────┐
│  [1] Engine Capacity Conversion              [▲]            │
│  The capacities of motorbike engines are sometimes...       │
│  a) A motorbike's engine is said to be 1.8 L. How many...  │
│  b) Another engine has a capacity of 2200 cc. What is...   │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────────────────────────────────────────────────┐ │
│  │  💡 Hint                              [Show hint ▼]   │ │
│  │  ─────────────────────────────────────────────────    │ │
│  │  Remember: 1 L = 1000 cm³. To convert from litres    │ │
│  │  to cm³, multiply. To convert from cm³ to litres...  │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  ✅ Step-by-Step Solution         [Show solution ▼]  │ │
│  │  ─────────────────────────────────────────────────    │ │
│  │  Part a) Converting 1.8 L to cubic centimetres:      │ │
│  │  • 1 L = 1000 cm³                                     │ │
│  │  • 1.8 L = 1.8 × 1000 = 1800 cm³                     │ │
│  │                                                        │ │
│  │  Part b) Converting 2200 cc to litres:               │ │
│  │  • 1000 cm³ = 1 L                                     │ │
│  │  • 2200 cm³ = 2200 ÷ 1000 = 2.2 L                    │ │
│  └───────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Paleta de Cores

### Botões e Destaques
```css
/* Botão Extra Exercises */
background: linear-gradient(to right, #9333ea, #db2777);
/* Roxo para Rosa */

/* Número do Exercício */
background: linear-gradient(to bottom right, #9333ea, #db2777);
color: white;
```

### Seções de Conteúdo
```css
/* Seção de Dica */
background: #fef3c7; /* Âmbar claro */
border: #fde68a;     /* Âmbar */
text: #92400e;       /* Âmbar escuro */

/* Seção de Solução */
background: #d1fae5; /* Verde esmeralda claro */
border: #a7f3d0;     /* Verde esmeralda */
text: #065f46;       /* Verde esmeralda escuro */
```

### Cartões
```css
/* Cartão de Exercício */
background: rgba(255, 255, 255, 0.9);
border: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(12px);
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

---

## 📐 Layout Responsivo

### Desktop (> 1024px)
```
┌─────────────────────────────────────────┐
│  Header                                 │
├─────────────────────────────────────────┤
│  [Exercício 1]                          │
│  [Exercício 2]                          │
│  [Exercício 3]                          │
│  ...                                    │
│  [Study Tips]                           │
└─────────────────────────────────────────┘
```

### Tablet (768px - 1024px)
```
┌───────────────────────────┐
│  Header                   │
├───────────────────────────┤
│  [Exercício 1]            │
│  [Exercício 2]            │
│  ...                      │
└───────────────────────────┘
```

### Mobile (< 768px)
```
┌─────────────────┐
│  Header         │
├─────────────────┤
│  [Ex 1]         │
│  [Ex 2]         │
│  ...            │
└─────────────────┘
```

---

## 🎭 Estados Interativos

### Cartão Fechado
```
┌─────────────────────────────────────┐
│  [1] Engine Capacity      [▼]       │
│  The capacities of...               │
│  a) A motorbike's engine...         │
└─────────────────────────────────────┘
```

### Cartão Aberto
```
┌─────────────────────────────────────┐
│  [1] Engine Capacity      [▲]       │
│  The capacities of...               │
│  a) A motorbike's engine...         │
├─────────────────────────────────────┤
│  💡 Hint [Show/Hide]                │
│  ✅ Solution [Show/Hide]            │
└─────────────────────────────────────┘
```

### Dica Visível
```
┌─────────────────────────────────────┐
│  💡 Hint              [Hide hint ▲] │
│  ─────────────────────────────────  │
│  Remember: 1 L = 1000 cm³...        │
└─────────────────────────────────────┘
```

### Solução Visível
```
┌─────────────────────────────────────┐
│  ✅ Solution      [Hide solution ▲] │
│  ─────────────────────────────────  │
│  Part a) Converting 1.8 L...        │
│  • 1 L = 1000 cm³                   │
│  • 1.8 L = 1.8 × 1000 = 1800 cm³   │
└─────────────────────────────────────┘
```

---

## 🎯 Ícones Utilizados

| Ícone | Uso | Componente |
|-------|-----|------------|
| 📄 FileText | Botão Extra Exercises | Menu |
| 💡 Lightbulb | Seção de Dica | Exercício |
| ✅ CheckCircle | Seção de Solução | Exercício |
| ⭐ Star | Study Tips | Rodapé |
| ▼ ChevronDown | Expandir | Cartão |
| ▲ ChevronUp | Recolher | Cartão |
| ← ArrowRight | Voltar | Header |

---

## 🌊 Animações

### Expansão do Cartão
```css
transition: all 0.3s ease-in-out;
```

### Hover no Botão
```css
transform: translateY(-2px);
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

### Gradiente de Fundo
```css
/* Esferas de cor animadas */
blur: 72px;
opacity: 0.4-0.5;
animation: float 20s infinite;
```

---

## 📱 Acessibilidade

✅ **Contraste de cores**: WCAG AA compliant  
✅ **Navegação por teclado**: Tab, Enter, Space  
✅ **Focus visível**: Ring de 4px em elementos focados  
✅ **Texto legível**: Tamanho mínimo 14px  
✅ **Botões grandes**: Área de toque mínima 44x44px  

---

## 🚀 Performance

| Métrica | Valor |
|---------|-------|
| Bundle size (JS) | 243.56 KB |
| Bundle size (CSS) | 34.86 KB |
| Gzip (JS) | 70.27 KB |
| Gzip (CSS) | 6.58 KB |
| Build time | ~2s |

---

**Interface projetada para máxima usabilidade e aprendizado efetivo! 🎓**

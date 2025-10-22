# 💻 Exemplos de Código - Extra Exercises

## 📦 Estrutura de Dados

### Interface TypeScript

```typescript
export interface ExtraExercise {
  id: number;
  title: string;
  question: string;
  parts?: string[];        // Sub-questões opcionais
  hint: string;
  solution: string[];      // Array de linhas da solução
}
```

### Exemplo de Exercício

```typescript
{
  id: 1,
  title: "Engine Capacity Conversion",
  question: "The capacities of motorbike engines are sometimes quoted in litres...",
  parts: [
    "A motorbike's engine is said to be 1.8 L. How many cubic centimetres is this?",
    "Another engine has a capacity of 2200 cc. What is this in litres?"
  ],
  hint: "Remember: 1 L = 1000 cm³. To convert from litres to cm³, multiply...",
  solution: [
    "Part a) Converting 1.8 L to cubic centimetres:",
    "• 1 L = 1000 cm³",
    "• 1.8 L = 1.8 × 1000 = 1800 cm³",
    "",
    "Part b) Converting 2200 cc to litres:",
    "• 1000 cm³ = 1 L",
    "• 2200 cm³ = 2200 ÷ 1000 = 2.2 L"
  ]
}
```

---

## 🎨 Componente React

### Estado do Componente

```typescript
const [gameState, setGameState] = useState<'menu' | 'playing' | 'results' | 'exercises'>('menu');
const [expandedExercise, setExpandedExercise] = useState<number | null>(null);
const [showHint, setShowHint] = useState<{ [key: number]: boolean }>({});
const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({});
```

### Renderização de Exercício

```tsx
{extraExercises.map((exercise) => (
  <div key={exercise.id} className="rounded-3xl border border-white/70 bg-white/90 shadow-xl">
    {/* Cabeçalho do Exercício */}
    <button
      onClick={() => setExpandedExercise(
        expandedExercise === exercise.id ? null : exercise.id
      )}
      className="w-full flex items-center justify-between p-8"
    >
      <div className="flex items-start gap-4">
        {/* Número do Exercício */}
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
          <span className="text-lg font-bold">{exercise.id}</span>
        </div>
        
        {/* Conteúdo */}
        <div>
          <h3 className="text-xl font-semibold">{exercise.title}</h3>
          <p className="mt-2 text-sm">{exercise.question}</p>
          
          {/* Sub-partes */}
          {exercise.parts && (
            <ul className="mt-3 space-y-1">
              {exercise.parts.map((part, idx) => (
                <li key={idx} className="text-sm flex gap-2">
                  <span className="font-semibold">
                    {String.fromCharCode(97 + idx)})
                  </span>
                  <span>{part}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      {/* Ícone de Expansão */}
      {expandedExercise === exercise.id ? (
        <ChevronUp className="h-6 w-6" />
      ) : (
        <ChevronDown className="h-6 w-6" />
      )}
    </button>

    {/* Conteúdo Expandido */}
    {expandedExercise === exercise.id && (
      <div className="border-t border-slate-200 bg-slate-50/50 p-8">
        {/* Seção de Dica */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-amber-600" />
              <h4 className="text-base font-semibold">Hint</h4>
            </div>
            <button
              onClick={() => setShowHint({
                ...showHint,
                [exercise.id]: !showHint[exercise.id]
              })}
            >
              {showHint[exercise.id] ? 'Hide' : 'Show'} hint
            </button>
          </div>
          {showHint[exercise.id] && (
            <p className="text-sm">{exercise.hint}</p>
          )}
        </div>

        {/* Seção de Solução */}
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <h4 className="text-base font-semibold">Step-by-Step Solution</h4>
            </div>
            <button
              onClick={() => setShowSolution({
                ...showSolution,
                [exercise.id]: !showSolution[exercise.id]
              })}
            >
              {showSolution[exercise.id] ? 'Hide' : 'Show'} solution
            </button>
          </div>
          {showSolution[exercise.id] && (
            <div className="space-y-2">
              {exercise.solution.map((line, idx) => (
                <p
                  key={idx}
                  className={`text-sm ${
                    line.startsWith('•') || line.startsWith('Part') || line.startsWith('Step')
                      ? 'font-medium text-emerald-900'
                      : line === ''
                      ? 'h-2'
                      : 'text-emerald-800 ml-4'
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    )}
  </div>
))}
```

---

## 🎨 Classes Tailwind Utilizadas

### Layout e Estrutura

```css
/* Container Principal */
.relative .min-h-screen .overflow-hidden .bg-slate-100

/* Cartão de Exercício */
.rounded-3xl .border .border-white/70 .bg-white/90 .shadow-xl .backdrop-blur

/* Grid Responsivo */
.space-y-6  /* Espaçamento vertical entre exercícios */
```

### Cores e Gradientes

```css
/* Gradiente Roxo-Rosa */
.bg-gradient-to-br .from-purple-500 .to-pink-500

/* Fundo Âmbar (Dica) */
.bg-amber-50/70 .border-amber-200 .text-amber-900

/* Fundo Verde (Solução) */
.bg-emerald-50/70 .border-emerald-200 .text-emerald-900
```

### Tipografia

```css
/* Título do Exercício */
.text-xl .font-semibold .text-slate-900

/* Texto do Enunciado */
.text-sm .text-slate-600 .leading-relaxed

/* Texto da Solução */
.text-sm .font-medium .text-emerald-900
```

### Interatividade

```css
/* Hover no Cartão */
.hover:bg-slate-50/50 .transition

/* Botão Show/Hide */
.text-sm .font-medium .hover:text-amber-900 .transition

/* Focus Visível */
.focus:outline-none .focus-visible:ring-4 .focus-visible:ring-indigo-200
```

---

## 🔄 Lógica de Estado

### Toggle de Expansão

```typescript
// Expandir/Recolher exercício
const toggleExercise = (id: number) => {
  setExpandedExercise(expandedExercise === id ? null : id);
};
```

### Toggle de Dica

```typescript
// Mostrar/Esconder dica
const toggleHint = (id: number) => {
  setShowHint({
    ...showHint,
    [id]: !showHint[id]
  });
};
```

### Toggle de Solução

```typescript
// Mostrar/Esconder solução
const toggleSolution = (id: number) => {
  setShowSolution({
    ...showSolution,
    [id]: !showSolution[id]
  });
};
```

---

## 🎯 Formatação de Solução

### Lógica de Formatação

```typescript
const formatSolutionLine = (line: string) => {
  // Linha vazia = espaçamento
  if (line === '') return 'h-2';
  
  // Cabeçalhos (Part, Step, etc.)
  if (line.startsWith('•') || 
      line.startsWith('Part') || 
      line.startsWith('Step')) {
    return 'font-medium text-emerald-900';
  }
  
  // Conteúdo normal (indentado)
  return 'text-emerald-800 ml-4';
};
```

### Exemplo de Renderização

```tsx
{exercise.solution.map((line, idx) => (
  <p key={idx} className={formatSolutionLine(line)}>
    {line}
  </p>
))}
```

---

## 🚀 Otimizações

### Memoização

```typescript
import { useMemo } from 'react';

const filteredExercises = useMemo(() => {
  return extraExercises.filter(ex => /* filtro */);
}, [extraExercises, /* dependências */]);
```

### Lazy Loading

```typescript
// Carregar exercícios sob demanda
const [visibleExercises, setVisibleExercises] = useState(10);

const loadMore = () => {
  setVisibleExercises(prev => prev + 10);
};
```

### Virtual Scrolling (Futuro)

```typescript
// Para listas muito grandes
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={extraExercises.length}
  itemSize={200}
>
  {({ index, style }) => (
    <div style={style}>
      <ExerciseCard exercise={extraExercises[index]} />
    </div>
  )}
</FixedSizeList>
```

---

## 📱 Responsividade

### Breakpoints Tailwind

```typescript
// Mobile First
className="p-4 md:p-6 lg:p-8"

// Grid Responsivo
className="grid gap-4 md:gap-6 lg:gap-8"

// Texto Responsivo
className="text-base md:text-lg lg:text-xl"
```

### Media Queries Customizadas

```css
@media (max-width: 768px) {
  .exercise-card {
    padding: 1rem;
  }
}

@media (min-width: 1024px) {
  .exercise-card {
    padding: 2rem;
  }
}
```

---

## 🎨 Animações CSS

### Transições

```css
.exercise-card {
  transition: all 0.3s ease-in-out;
}

.exercise-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

### Keyframes

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.solution-content {
  animation: fadeIn 0.3s ease-out;
}
```

---

## 🔍 Acessibilidade

### ARIA Labels

```tsx
<button
  aria-label={`Expand exercise ${exercise.id}: ${exercise.title}`}
  aria-expanded={expandedExercise === exercise.id}
>
  {/* Conteúdo */}
</button>
```

### Navegação por Teclado

```tsx
<button
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleExercise(exercise.id);
    }
  }}
>
  {/* Conteúdo */}
</button>
```

### Focus Management

```tsx
const exerciseRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (expandedExercise === exercise.id) {
    exerciseRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }
}, [expandedExercise]);
```

---

**Código limpo, eficiente e acessível! 🚀**

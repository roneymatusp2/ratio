# Quadratic Equations Practice - IGCSE 0607

An interactive web application for practicing quadratic equations by factorisation, designed for Cambridge IGCSE 0607 students.

## Features

- **30 Practice Questions** organized by difficulty and type
- **AI-Powered Evaluation** using Gemini AI for flexible answer checking
- **Multiple Question Types:**
  - Simple Factorisation (x² + bx + c = 0)
  - Difference of Two Squares
  - Advanced Factorisation (ax² + bx + c = 0)
  - Perfect Square Trinomials
  - Common Factors

- **Intelligent Answer Recognition:**
  - Accepts multiple formats: "x = 2 or x = -3", "2, -3", "x=2, x=-3"
  - Recognizes fractions and decimals: "1/2" = "0.5"
  - Accepts answers in any order

- **Step-by-Step Solutions** with detailed explanations
- **Hints** for each question
- **Progress Tracking** and performance analytics
- **Mobile-Responsive Design**

## Topics Covered

### 1. Simple Factorisation
Quadratics of the form x² + bx + c = 0 where the coefficient of x² is 1.

Example: x² + 5x + 6 = 0
Solution: (x + 2)(x + 3) = 0, so x = -2 or x = -3

### 2. Difference of Two Squares
Quadratics of the form a² - b² = 0.

Example: x² - 9 = 0
Solution: (x + 3)(x - 3) = 0, so x = 3 or x = -3

### 3. Advanced Factorisation
Quadratics of the form ax² + bx + c = 0 where a ≠ 1.

Example: 2x² + 7x + 3 = 0
Solution: (2x + 1)(x + 3) = 0, so x = -1/2 or x = -3

### 4. Perfect Square Trinomials
Quadratics that can be written as (x ± a)² = 0.

Example: x² + 6x + 9 = 0
Solution: (x + 3)² = 0, so x = -3 (repeated root)

### 5. Common Factors
Quadratics where you must first factor out a common term.

Example: 2x² + 10x + 12 = 0
Solution: 2(x² + 5x + 6) = 2(x + 2)(x + 3) = 0, so x = -2 or x = -3

## How to Use

1. **Choose a Topic** from the main menu
2. **Answer Questions** by typing your solution
3. **Get Instant Feedback** from the AI evaluation system
4. **Review Solutions** to understand the method
5. **Track Your Progress** across all topics

## Installation

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

## Technologies

- React + TypeScript
- Vite
- Tailwind CSS
- Gemini AI API
- Lucide React Icons

## Educational Alignment

This application is aligned with the Cambridge IGCSE 0607 Additional Mathematics syllabus, specifically covering:

- Factorisation of quadratic expressions
- Solution of quadratic equations by factorisation
- Understanding of the zero product property
- Recognition of special cases (difference of squares, perfect squares)

## License

MIT

## Credits

Developed for IGCSE 0607 students to practice quadratic equations with intelligent AI feedback.

import { Question } from '../types';

export const questions: Question[] = [
  // Level 1: Simple Factorisations (x² + bx + c = 0) - 20 questions
  {
    id: 1,
    question: "Solve by factorisation: x² + 5x + 6 = 0",
    options: ["x = -2 or x = -3", "x = 2 or x = 3", "x = -1 or x = -6", "x = 1 or x = 6"],
    correct: "x = -2 or x = -3",
    correctAnswers: ["x = -2 or x = -3", "x = -3 or x = -2", "-2, -3", "-3, -2", "x=-2, x=-3", "x=-3, x=-2"],
    category: "Simple Factorisation",
    topic: "simple",
    explanation: "Step 1: Factorise x² + 5x + 6. We need two numbers that multiply to 6 and add to 5. These are 2 and 3. Step 2: Write as (x + 2)(x + 3) = 0. Step 3: Apply zero product property: x + 2 = 0 or x + 3 = 0. Therefore x = -2 or x = -3.",
    hint: "Find two numbers that multiply to 6 and add to 5. Remember: if (a)(b) = 0, then a = 0 or b = 0."
  },
  {
    id: 2,
    question: "Solve by factorisation: x² + 7x + 12 = 0",
    options: ["x = -3 or x = -4", "x = 3 or x = 4", "x = -2 or x = -6", "x = 2 or x = 6"],
    correct: "x = -3 or x = -4",
    correctAnswers: ["x = -3 or x = -4", "x = -4 or x = -3", "-3, -4", "-4, -3", "x=-3, x=-4", "x=-4, x=-3"],
    category: "Simple Factorisation",
    topic: "simple",
    explanation: "Factorise: (x + 3)(x + 4) = 0. Therefore x = -3 or x = -4.",
    hint: "Find two numbers that multiply to 12 and add to 7."
  },
  {
    id: 3,
    question: "Solve by factorisation: x² + 8x + 15 = 0",
    options: ["x = -3 or x = -5", "x = 3 or x = 5", "x = -1 or x = -15", "x = 1 or x = 15"],
    correct: "x = -3 or x = -5",
    correctAnswers: ["x = -3 or x = -5", "x = -5 or x = -3", "-3, -5", "-5, -3"],
    category: "Simple Factorisation",
    topic: "simple",
    explanation: "Factorise: (x + 3)(x + 5) = 0. Therefore x = -3 or x = -5.",
    hint: "Find two numbers that multiply to 15 and add to 8."
  },
  {
    id: 4,
    question: "Solve by factorisation: x² - 5x + 6 = 0",
    options: ["x = 2 or x = 3", "x = -2 or x = -3", "x = 1 or x = 6", "x = -1 or x = -6"],
    correct: "x = 2 or x = 3",
    correctAnswers: ["x = 2 or x = 3", "x = 3 or x = 2", "2, 3", "3, 2"],
    category: "Simple Factorisation",
    topic: "simple",
    explanation: "Factorise: (x - 2)(x - 3) = 0. Therefore x = 2 or x = 3.",
    hint: "Find two numbers that multiply to 6 and add to -5. Both numbers must be negative."
  },
  {
    id: 5,
    question: "Solve by factorisation: x² - 7x + 10 = 0",
    options: ["x = 2 or x = 5", "x = -2 or x = -5", "x = 1 or x = 10", "x = -1 or x = -10"],
    correct: "x = 2 or x = 5",
    correctAnswers: ["x = 2 or x = 5", "x = 5 or x = 2", "2, 5", "5, 2"],
    category: "Simple Factorisation",
    topic: "simple",
    explanation: "Factorise: (x - 2)(x - 5) = 0. Therefore x = 2 or x = 5.",
    hint: "Find two numbers that multiply to 10 and add to -7."
  },
  {
    id: 6,
    question: "Solve by factorisation: x² + 2x - 8 = 0",
    options: ["x = -4 or x = 2", "x = 4 or x = -2", "x = -1 or x = 8", "x = 1 or x = -8"],
    correct: "x = -4 or x = 2",
    correctAnswers: ["x = -4 or x = 2", "x = 2 or x = -4", "-4, 2", "2, -4"],
    category: "Simple Factorisation",
    topic: "simple",
    explanation: "Factorise: (x + 4)(x - 2) = 0. Therefore x = -4 or x = 2.",
    hint: "Find two numbers that multiply to -8 and add to 2. One must be positive, one negative."
  },
  {
    id: 7,
    question: "Solve by factorisation: x² + 3x - 10 = 0",
    options: ["x = -5 or x = 2", "x = 5 or x = -2", "x = -1 or x = 10", "x = 1 or x = -10"],
    correct: "x = -5 or x = 2",
    correctAnswers: ["x = -5 or x = 2", "x = 2 or x = -5", "-5, 2", "2, -5"],
    category: "Simple Factorisation",
    topic: "simple",
    explanation: "Factorise: (x + 5)(x - 2) = 0. Therefore x = -5 or x = 2.",
    hint: "Find two numbers that multiply to -10 and add to 3."
  },
  {
    id: 8,
    question: "Solve by factorisation: x² - 2x - 15 = 0",
    options: ["x = 5 or x = -3", "x = -5 or x = 3", "x = 1 or x = -15", "x = -1 or x = 15"],
    correct: "x = 5 or x = -3",
    correctAnswers: ["x = 5 or x = -3", "x = -3 or x = 5", "5, -3", "-3, 5"],
    category: "Simple Factorisation",
    topic: "simple",
    explanation: "Factorise: (x - 5)(x + 3) = 0. Therefore x = 5 or x = -3.",
    hint: "Find two numbers that multiply to -15 and add to -2."
  },
  {
    id: 9,
    question: "Solve by factorisation: x² - x - 6 = 0",
    options: ["x = 3 or x = -2", "x = -3 or x = 2", "x = 1 or x = -6", "x = -1 or x = 6"],
    correct: "x = 3 or x = -2",
    correctAnswers: ["x = 3 or x = -2", "x = -2 or x = 3", "3, -2", "-2, 3"],
    category: "Simple Factorisation",
    topic: "simple",
    explanation: "Factorise: (x - 3)(x + 2) = 0. Therefore x = 3 or x = -2.",
    hint: "Find two numbers that multiply to -6 and add to -1."
  },
  {
    id: 10,
    question: "Solve by factorisation: x² + x - 20 = 0",
    options: ["x = -5 or x = 4", "x = 5 or x = -4", "x = -1 or x = 20", "x = 1 or x = -20"],
    correct: "x = -5 or x = 4",
    correctAnswers: ["x = -5 or x = 4", "x = 4 or x = -5", "-5, 4", "4, -5"],
    category: "Simple Factorisation",
    topic: "simple",
    explanation: "Factorise: (x + 5)(x - 4) = 0. Therefore x = -5 or x = 4.",
    hint: "Find two numbers that multiply to -20 and add to 1."
  },

  // Level 2: Difference of Two Squares - 15 questions
  {
    id: 11,
    question: "Solve by factorisation: x² - 4 = 0",
    options: ["x = 2 or x = -2", "x = 4 or x = -4", "x = 1 or x = -1", "x = 0"],
    correct: "x = 2 or x = -2",
    correctAnswers: ["x = 2 or x = -2", "x = -2 or x = 2", "2, -2", "-2, 2", "±2"],
    category: "Difference of Two Squares",
    topic: "difference-squares",
    explanation: "This is a difference of two squares: x² - 2² = (x + 2)(x - 2) = 0. Therefore x = 2 or x = -2.",
    hint: "Use the formula a² - b² = (a + b)(a - b). Here, x² - 4 = x² - 2²."
  },
  {
    id: 12,
    question: "Solve by factorisation: x² - 9 = 0",
    options: ["x = 3 or x = -3", "x = 9 or x = -9", "x = 1 or x = -1", "x = 0"],
    correct: "x = 3 or x = -3",
    correctAnswers: ["x = 3 or x = -3", "x = -3 or x = 3", "3, -3", "-3, 3", "±3"],
    category: "Difference of Two Squares",
    topic: "difference-squares",
    explanation: "Factorise: (x + 3)(x - 3) = 0. Therefore x = 3 or x = -3.",
    hint: "Recognise that 9 = 3². Use difference of two squares."
  },
  {
    id: 13,
    question: "Solve by factorisation: x² - 25 = 0",
    options: ["x = 5 or x = -5", "x = 25 or x = -25", "x = 1 or x = -1", "x = 0"],
    correct: "x = 5 or x = -5",
    correctAnswers: ["x = 5 or x = -5", "x = -5 or x = 5", "5, -5", "-5, 5", "±5"],
    category: "Difference of Two Squares",
    topic: "difference-squares",
    explanation: "Factorise: (x + 5)(x - 5) = 0. Therefore x = 5 or x = -5.",
    hint: "Recognise that 25 = 5². Use difference of two squares."
  },
  {
    id: 14,
    question: "Solve by factorisation: 4x² - 1 = 0",
    options: ["x = 1/2 or x = -1/2", "x = 1 or x = -1", "x = 2 or x = -2", "x = 4 or x = -4"],
    correct: "x = 1/2 or x = -1/2",
    correctAnswers: ["x = 1/2 or x = -1/2", "x = -1/2 or x = 1/2", "1/2, -1/2", "-1/2, 1/2", "0.5, -0.5", "-0.5, 0.5", "±1/2", "±0.5"],
    category: "Difference of Two Squares",
    topic: "difference-squares",
    explanation: "Factorise: (2x)² - 1² = (2x + 1)(2x - 1) = 0. Therefore 2x = -1 or 2x = 1, giving x = -1/2 or x = 1/2.",
    hint: "Recognise that 4x² = (2x)². Use difference of two squares."
  },
  {
    id: 15,
    question: "Solve by factorisation: 9x² - 4 = 0",
    options: ["x = 2/3 or x = -2/3", "x = 2 or x = -2", "x = 3 or x = -3", "x = 1 or x = -1"],
    correct: "x = 2/3 or x = -2/3",
    correctAnswers: ["x = 2/3 or x = -2/3", "x = -2/3 or x = 2/3", "2/3, -2/3", "-2/3, 2/3", "±2/3"],
    category: "Difference of Two Squares",
    topic: "difference-squares",
    explanation: "Factorise: (3x)² - 2² = (3x + 2)(3x - 2) = 0. Therefore x = -2/3 or x = 2/3.",
    hint: "Recognise that 9x² = (3x)² and 4 = 2²."
  },

  // Level 3: Coefficient of x² Greater Than 1 - 20 questions
  {
    id: 16,
    question: "Solve by factorisation: 2x² + 7x + 3 = 0",
    options: ["x = -3 or x = -1/2", "x = 3 or x = 1/2", "x = -1 or x = -3/2", "x = 1 or x = 3/2"],
    correct: "x = -3 or x = -1/2",
    correctAnswers: ["x = -3 or x = -1/2", "x = -1/2 or x = -3", "-3, -1/2", "-1/2, -3", "-3, -0.5", "-0.5, -3"],
    category: "Advanced Factorisation",
    topic: "advanced",
    explanation: "Factorise: (2x + 1)(x + 3) = 0. Therefore 2x + 1 = 0 or x + 3 = 0, giving x = -1/2 or x = -3.",
    hint: "Look for factors of 2×3 = 6 that add to 7. Try splitting the middle term."
  },
  {
    id: 17,
    question: "Solve by factorisation: 3x² + 10x + 3 = 0",
    options: ["x = -3 or x = -1/3", "x = 3 or x = 1/3", "x = -1 or x = -3", "x = 1 or x = 3"],
    correct: "x = -3 or x = -1/3",
    correctAnswers: ["x = -3 or x = -1/3", "x = -1/3 or x = -3", "-3, -1/3", "-1/3, -3"],
    category: "Advanced Factorisation",
    topic: "advanced",
    explanation: "Factorise: (3x + 1)(x + 3) = 0. Therefore x = -1/3 or x = -3.",
    hint: "Look for factors of 3×3 = 9 that add to 10."
  },
  {
    id: 18,
    question: "Solve by factorisation: 2x² - 5x + 3 = 0",
    options: ["x = 3/2 or x = 1", "x = -3/2 or x = -1", "x = 2 or x = 3", "x = -2 or x = -3"],
    correct: "x = 3/2 or x = 1",
    correctAnswers: ["x = 3/2 or x = 1", "x = 1 or x = 3/2", "3/2, 1", "1, 3/2", "1.5, 1", "1, 1.5"],
    category: "Advanced Factorisation",
    topic: "advanced",
    explanation: "Factorise: (2x - 3)(x - 1) = 0. Therefore x = 3/2 or x = 1.",
    hint: "Look for factors of 2×3 = 6 that add to -5."
  },
  {
    id: 19,
    question: "Solve by factorisation: 2x² + 5x - 3 = 0",
    options: ["x = -3 or x = 1/2", "x = 3 or x = -1/2", "x = -1 or x = 3/2", "x = 1 or x = -3/2"],
    correct: "x = -3 or x = 1/2",
    correctAnswers: ["x = -3 or x = 1/2", "x = 1/2 or x = -3", "-3, 1/2", "1/2, -3", "-3, 0.5", "0.5, -3"],
    category: "Advanced Factorisation",
    topic: "advanced",
    explanation: "Factorise: (2x - 1)(x + 3) = 0. Therefore x = 1/2 or x = -3.",
    hint: "Look for factors of 2×(-3) = -6 that add to 5."
  },
  {
    id: 20,
    question: "Solve by factorisation: 3x² - 5x - 2 = 0",
    options: ["x = 2 or x = -1/3", "x = -2 or x = 1/3", "x = 1 or x = -2/3", "x = -1 or x = 2/3"],
    correct: "x = 2 or x = -1/3",
    correctAnswers: ["x = 2 or x = -1/3", "x = -1/3 or x = 2", "2, -1/3", "-1/3, 2"],
    category: "Advanced Factorisation",
    topic: "advanced",
    explanation: "Factorise: (3x + 1)(x - 2) = 0. Therefore x = -1/3 or x = 2.",
    hint: "Look for factors of 3×(-2) = -6 that add to -5."
  },

  // Perfect Square Trinomials - 10 questions
  {
    id: 21,
    question: "Solve by factorisation: x² + 6x + 9 = 0",
    options: ["x = -3", "x = 3", "x = -3 or x = 3", "x = -9"],
    correct: "x = -3",
    correctAnswers: ["x = -3", "-3", "x=-3"],
    category: "Perfect Square",
    topic: "perfect-square",
    explanation: "This is a perfect square: x² + 6x + 9 = (x + 3)² = 0. Therefore x = -3 (repeated root).",
    hint: "This is a perfect square trinomial. Look for (x + a)². Check if 9 = 3² and 6 = 2×3."
  },
  {
    id: 22,
    question: "Solve by factorisation: x² - 8x + 16 = 0",
    options: ["x = 4", "x = -4", "x = 4 or x = -4", "x = 16"],
    correct: "x = 4",
    correctAnswers: ["x = 4", "4", "x=4"],
    category: "Perfect Square",
    topic: "perfect-square",
    explanation: "Factorise: (x - 4)² = 0. Therefore x = 4 (repeated root).",
    hint: "This is a perfect square trinomial. Look for (x - a)²."
  },
  {
    id: 23,
    question: "Solve by factorisation: x² + 10x + 25 = 0",
    options: ["x = -5", "x = 5", "x = -5 or x = 5", "x = -25"],
    correct: "x = -5",
    correctAnswers: ["x = -5", "-5", "x=-5"],
    category: "Perfect Square",
    topic: "perfect-square",
    explanation: "Factorise: (x + 5)² = 0. Therefore x = -5 (repeated root).",
    hint: "Check if this is (x + 5)². Verify: 25 = 5² and 10 = 2×5."
  },
  {
    id: 24,
    question: "Solve by factorisation: 4x² + 12x + 9 = 0",
    options: ["x = -3/2", "x = 3/2", "x = -3/2 or x = 3/2", "x = -9/4"],
    correct: "x = -3/2",
    correctAnswers: ["x = -3/2", "-3/2", "x=-3/2", "-1.5", "x=-1.5"],
    category: "Perfect Square",
    topic: "perfect-square",
    explanation: "Factorise: (2x + 3)² = 0. Therefore 2x + 3 = 0, giving x = -3/2 (repeated root).",
    hint: "This is (2x + 3)². Check: 4x² = (2x)², 9 = 3², and 12x = 2(2x)(3)."
  },

  // Common Factors - 15 questions
  {
    id: 25,
    question: "Solve by factorisation: 2x² + 10x + 12 = 0",
    options: ["x = -2 or x = -3", "x = 2 or x = 3", "x = -1 or x = -6", "x = 1 or x = 6"],
    correct: "x = -2 or x = -3",
    correctAnswers: ["x = -2 or x = -3", "x = -3 or x = -2", "-2, -3", "-3, -2"],
    category: "Common Factors",
    topic: "common-factors",
    explanation: "First factor out 2: 2(x² + 5x + 6) = 0. Then factorise: 2(x + 2)(x + 3) = 0. Therefore x = -2 or x = -3.",
    hint: "First take out the common factor of 2, then factorise the quadratic."
  },
  {
    id: 26,
    question: "Solve by factorisation: 3x² - 27 = 0",
    options: ["x = 3 or x = -3", "x = 9 or x = -9", "x = 1 or x = -1", "x = 0"],
    correct: "x = 3 or x = -3",
    correctAnswers: ["x = 3 or x = -3", "x = -3 or x = 3", "3, -3", "-3, 3", "±3"],
    category: "Common Factors",
    topic: "common-factors",
    explanation: "First factor out 3: 3(x² - 9) = 0. Then use difference of squares: 3(x + 3)(x - 3) = 0. Therefore x = 3 or x = -3.",
    hint: "First take out the common factor of 3, then use difference of squares."
  },
  {
    id: 27,
    question: "Solve by factorisation: 2x² - 18 = 0",
    options: ["x = 3 or x = -3", "x = 9 or x = -9", "x = 1 or x = -1", "x = 0"],
    correct: "x = 3 or x = -3",
    correctAnswers: ["x = 3 or x = -3", "x = -3 or x = 3", "3, -3", "-3, 3", "±3"],
    category: "Common Factors",
    topic: "common-factors",
    explanation: "First factor out 2: 2(x² - 9) = 0. Then use difference of squares: 2(x + 3)(x - 3) = 0. Therefore x = 3 or x = -3.",
    hint: "First take out the common factor of 2, then use difference of squares."
  },
  {
    id: 28,
    question: "Solve by factorisation: 4x² - 8x - 12 = 0",
    options: ["x = 3 or x = -1", "x = -3 or x = 1", "x = 2 or x = -2", "x = 4 or x = -4"],
    correct: "x = 3 or x = -1",
    correctAnswers: ["x = 3 or x = -1", "x = -1 or x = 3", "3, -1", "-1, 3"],
    category: "Common Factors",
    topic: "common-factors",
    explanation: "First factor out 4: 4(x² - 2x - 3) = 0. Then factorise: 4(x - 3)(x + 1) = 0. Therefore x = 3 or x = -1.",
    hint: "First take out the common factor of 4."
  },
  {
    id: 29,
    question: "Solve by factorisation: 5x² - 45 = 0",
    options: ["x = 3 or x = -3", "x = 9 or x = -9", "x = 5 or x = -5", "x = 1 or x = -1"],
    correct: "x = 3 or x = -3",
    correctAnswers: ["x = 3 or x = -3", "x = -3 or x = 3", "3, -3", "-3, 3", "±3"],
    category: "Common Factors",
    topic: "common-factors",
    explanation: "First factor out 5: 5(x² - 9) = 0. Then use difference of squares: 5(x + 3)(x - 3) = 0. Therefore x = 3 or x = -3.",
    hint: "First take out the common factor of 5, then use difference of squares."
  },
  {
    id: 30,
    question: "Solve by factorisation: 2x² - 50 = 0",
    options: ["x = 5 or x = -5", "x = 25 or x = -25", "x = 10 or x = -10", "x = 2 or x = -2"],
    correct: "x = 5 or x = -5",
    correctAnswers: ["x = 5 or x = -5", "x = -5 or x = 5", "5, -5", "-5, 5", "±5"],
    category: "Common Factors",
    topic: "common-factors",
    explanation: "First factor out 2: 2(x² - 25) = 0. Then use difference of squares: 2(x + 5)(x - 5) = 0. Therefore x = 5 or x = -5.",
    hint: "First take out the common factor of 2, then use difference of squares."
  }
];

export interface ExercisePart {
  question: string;
  hint: string;
  solution: string[];
  correctAnswers: string[]; // All accepted correct answers
  commonMistakes?: {
    answer: string;
    feedback: string;
  }[]; // Common errors with specific feedback
}

export interface ExtraExercise {
  id: number;
  title: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  parts: ExercisePart[];
}

export const exerciseTopics = [
  { id: 'ratios', name: 'Ratios & Proportions', icon: '🔢', color: 'from-blue-500 to-cyan-500' },
  { id: 'lcm-hcf', name: 'LCM & HCF', icon: '🔄', color: 'from-purple-500 to-pink-500' },
  { id: 'prime', name: 'Prime Factorisation', icon: '🌟', color: 'from-amber-500 to-orange-500' },
  { id: 'mass', name: 'Mass Conversions', icon: '⚖️', color: 'from-emerald-500 to-teal-500' },
  { id: 'volume', name: 'Volume Conversions', icon: '📏', color: 'from-indigo-500 to-purple-500' },
  { id: 'time', name: 'Time Calculations', icon: '⏰', color: 'from-rose-500 to-red-500' },
  { id: 'geometry', name: 'Geometry & Areas', icon: '🎨', color: 'from-violet-500 to-fuchsia-500' },
];

export const extraExercises: ExtraExercise[] = [
  // VOLUME CONVERSIONS
  {
    id: 1,
    title: "Engine Capacity Conversion",
    topic: 'volume',
    difficulty: 'easy',
    parts: [
      {
        question: "The capacities of motorbike engines are sometimes quoted in litres and sometimes in cubic centimetres (cc). Knowing that 1,000 L = 1 m³, a motorbike's engine is said to be 1.8 L. How many cubic centimetres is this?",
        hint: "Remember: 1 L = 1000 cm³. To convert from litres to cm³, multiply by 1000.",
        solution: [
          "Step 1: Identify the conversion factor",
          "• 1 L = 1000 cm³",
          "",
          "Step 2: Multiply to convert to smaller unit",
          "• 1.8 L = 1.8 × 1000",
          "• 1.8 L = 1800 cm³",
          "",
          "Answer: 1800 cm³"
        ],
        correctAnswers: [
          "1800 cm³",
          "1800cm³",
          "1800 cm3",
          "1800cm3",
          "1800 cubic centimetres",
          "1800 cubic centimeters",
          "1800 cc",
          "1800cc",
          "1800",
          "1,800 cm³",
          "1,800 cm3",
          "1,800 cc",
          "1,800"
        ],
        commonMistakes: [
          {
            answer: "180",
            feedback: "You've divided instead of multiplied. Remember: converting to a smaller unit means multiply by 1000."
          },
          {
            answer: "18000",
            feedback: "You've multiplied by 10000 instead of 1000. Check the conversion factor: 1 L = 1000 cm³."
          },
          {
            answer: "0.0018",
            feedback: "You've divided by 1000 instead of multiplying. To convert litres to cm³, multiply by 1000."
          }
        ]
      },
      {
        question: "Another engine has a capacity of 2200 cc. What is this in litres?",
        hint: "To convert from cm³ to litres, divide by 1000.",
        solution: [
          "Step 1: Identify the conversion factor",
          "• 1000 cm³ = 1 L",
          "",
          "Step 2: Divide to convert to larger unit",
          "• 2200 cm³ = 2200 ÷ 1000",
          "• 2200 cm³ = 2.2 L",
          "",
          "Answer: 2.2 L"
        ],
        correctAnswers: [
          "2.2 L",
          "2.2L",
          "2.2 litres",
          "2.2 liters",
          "2.2l",
          "2.20 L",
          "2.20 litres",
          "2.2"
        ],
        commonMistakes: [
          {
            answer: "22",
            feedback: "You've divided by 100 instead of 1000. Remember: 1000 cm³ = 1 L."
          },
          {
            answer: "0.22",
            feedback: "You've divided by 10000 instead of 1000. Check: 2200 ÷ 1000 = 2.2."
          },
          {
            answer: "2200000",
            feedback: "You've multiplied instead of divided. To convert cm³ to litres, divide by 1000."
          }
        ]
      }
    ]
  },

  // LCM & HCF
  {
    id: 2,
    title: "Running Laps - Finding LCM",
    topic: 'lcm-hcf',
    difficulty: 'medium',
    parts: [
      {
        question: "Michael, Sophie, and James are running laps around the same circuit. Michael completes one lap in 6 minutes, Sophie in 4 minutes, and James in 8 minutes. They all start together at the starting line. What is the first time, after the start, that they will all cross over the starting line together?",
        hint: "Find the Lowest Common Multiple (LCM) of 6, 4, and 8. List the multiples of each number until you find the first one that appears in all three lists.",
        solution: [
          "Step 1: List multiples of each time",
          "• Multiples of 6: 6, 12, 18, 24, 30, 36...",
          "• Multiples of 4: 4, 8, 12, 16, 20, 24...",
          "• Multiples of 8: 8, 16, 24, 32...",
          "",
          "Step 2: Find the first common multiple",
          "• The first number in all three lists is 24",
          "",
          "Answer: They will meet at 24 minutes"
        ],
        correctAnswers: [
          "24 minutes",
          "24 mins",
          "24min",
          "24 min",
          "24",
          "twenty-four minutes",
          "24 minutes after the start",
          "at 24 minutes",
          "after 24 minutes",
          "24 minutes after they start",
          "They meet at 24 minutes",
          "24m"
        ],
        commonMistakes: [
          {
            answer: "12",
            feedback: "12 is the LCM of 4 and 6, but you need the LCM of all three numbers: 4, 6, and 8. Check: does 12 divide evenly into 8?"
          },
          {
            answer: "12 minutes",
            feedback: "12 is the LCM of 4 and 6, but you need the LCM of all three numbers: 4, 6, and 8. At 12 minutes, James hasn't completed a full lap yet."
          },
          {
            answer: "48",
            feedback: "48 is when they all finish running, but they meet earlier than that. Find the LCM of 6, 4, and 8."
          },
          {
            answer: "48 minutes",
            feedback: "48 is when they all finish running, but they meet earlier than that. Find the smallest common multiple of 6, 4, and 8."
          },
          {
            answer: "6",
            feedback: "At 6 minutes, only Michael has completed a lap. Sophie and James are still running. You need the LCM of all three times."
          },
          {
            answer: "8",
            feedback: "At 8 minutes, only James and Sophie have completed laps. Michael is still running. You need the LCM of all three times."
          },
          {
            answer: "192",
            feedback: "That's the product of 6 × 4 × 8, which is too large. The LCM is always less than or equal to the product. Try listing multiples instead."
          }
        ]
      },
      {
        question: "If they run continuously for 48 minutes, how many laps will each person complete?",
        hint: "Divide the total time (48 minutes) by each person's lap time.",
        solution: [
          "Step 1: Calculate laps for each person",
          "• Michael: 48 ÷ 6 = 8 laps",
          "• Sophie: 48 ÷ 4 = 12 laps",
          "• James: 48 ÷ 8 = 6 laps",
          "",
          "Answer: Michael = 8 laps, Sophie = 12 laps, James = 6 laps"
        ],
        correctAnswers: [
          // Order: Michael, Sophie, James
          "Michael: 8, Sophie: 12, James: 6",
          "Michael 8, Sophie 12, James 6",
          "Michael 8 Sophie 12 James 6",
          "Michael = 8, Sophie = 12, James = 6",
          "Michael=8, Sophie=12, James=6",
          "Michael: 8 laps, Sophie: 12 laps, James: 6 laps",
          "Michael 8 laps, Sophie 12 laps, James 6 laps",
          "M: 8, S: 12, J: 6",
          "M 8, S 12, J 6",
          "M=8, S=12, J=6",
          "8, 12, 6",
          "8 12 6",
          "8,12,6",
          
          // Order: Sophie, Michael, James
          "Sophie: 12, Michael: 8, James: 6",
          "Sophie 12, Michael 8, James 6",
          "Sophie 12 Michael 8 James 6",
          "Sophie = 12, Michael = 8, James = 6",
          "Sophie=12, Michael=8, James=6",
          "Sophie: 12 laps, Michael: 8 laps, James: 6 laps",
          "Sophie 12 laps, Michael 8 laps, James 6 laps",
          "S: 12, M: 8, J: 6",
          "S 12, M 8, J 6",
          "S=12, M=8, J=6",
          "12, 8, 6",
          "12 8 6",
          "12,8,6",
          
          // Order: James, Michael, Sophie
          "James: 6, Michael: 8, Sophie: 12",
          "James 6, Michael 8, Sophie 12",
          "James 6 Michael 8 Sophie 12",
          "James = 6, Michael = 8, Sophie = 12",
          "James=6, Michael=8, Sophie=12",
          "James: 6 laps, Michael: 8 laps, Sophie: 12 laps",
          "James 6 laps, Michael 8 laps, Sophie 12 laps",
          "J: 6, M: 8, S: 12",
          "J 6, M 8, S 12",
          "J=6, M=8, S=12",
          "6, 8, 12",
          "6 8 12",
          "6,8,12",
          
          // Order: James, Sophie, Michael
          "James: 6, Sophie: 12, Michael: 8",
          "James 6, Sophie 12, Michael 8",
          "James 6 Sophie 12 Michael 8",
          "James = 6, Sophie = 12, Michael = 8",
          "James=6, Sophie=12, Michael=8",
          "J: 6, S: 12, M: 8",
          "J 6, S 12, M 8",
          "J=6, S=12, M=8",
          "6, 12, 8",
          "6 12 8",
          "6,12,8",
          
          // Order: Sophie, James, Michael
          "Sophie: 12, James: 6, Michael: 8",
          "Sophie 12, James 6, Michael 8",
          "Sophie 12 James 6 Michael 8",
          "Sophie = 12, James = 6, Michael = 8",
          "Sophie=12, James=6, Michael=8",
          "S: 12, J: 6, M: 8",
          "S 12, J 6, M 8",
          "S=12, J=6, M=8",
          "12, 6, 8",
          "12 6 8",
          "12,6,8",
          
          // Order: Michael, James, Sophie
          "Michael: 8, James: 6, Sophie: 12",
          "Michael 8, James 6, Sophie 12",
          "Michael 8 James 6 Sophie 12",
          "Michael = 8, James = 6, Sophie = 12",
          "Michael=8, James=6, Sophie=12",
          "M: 8, J: 6, S: 12",
          "M 8, J 6, S 12",
          "M=8, J=6, S=12",
          "8, 6, 12",
          "8 6 12",
          "8,6,12",
          
          // With "laps" word
          "8 laps, 12 laps, 6 laps",
          "12 laps, 8 laps, 6 laps",
          "6 laps, 8 laps, 12 laps",
          "8 laps 12 laps 6 laps",
          "12 laps 8 laps 6 laps",
          "6 laps 8 laps 12 laps",
          
          // Descriptive
          "Michael completes 8, Sophie completes 12, James completes 6",
          "Sophie completes 12, Michael completes 8, James completes 6",
          "8 (Michael), 12 (Sophie), 6 (James)",
          "12 (Sophie), 8 (Michael), 6 (James)",
          "6 (James), 8 (Michael), 12 (Sophie)"
        ],
        commonMistakes: [
          {
            answer: "8, 12, 8",
            feedback: "Check James's calculation. He takes 8 minutes per lap, so in 48 minutes: 48 ÷ 8 = 6 laps, not 8."
          },
          {
            answer: "6, 12, 8",
            feedback: "You've mixed up Michael and James. Michael takes 6 minutes per lap (48 ÷ 6 = 8 laps), James takes 8 minutes (48 ÷ 8 = 6 laps)."
          }
        ]
      },
      {
        question: "How many times does Sophie overtake Michael during this 48-minute race?",
        hint: "Sophie overtakes Michael once for each extra lap she completes. Find the difference in their lap counts.",
        solution: [
          "Step 1: Find the difference in laps",
          "• Sophie completes 12 laps",
          "• Michael completes 8 laps",
          "• Difference = 12 - 8 = 4 laps",
          "",
          "Step 2: Interpret the result",
          "• Sophie completes 4 more laps than Michael",
          "• This means she overtakes him 4 times",
          "",
          "Answer: 4 times"
        ],
        correctAnswers: [
          "4 times",
          "4",
          "four times",
          "4 overtakes",
          "four",
          "Sophie overtakes Michael 4 times",
          "4x"
        ],
        commonMistakes: [
          {
            answer: "8",
            feedback: "8 is how many laps Michael completes. Sophie overtakes him once for each extra lap she does: 12 - 8 = 4 times."
          },
          {
            answer: "12",
            feedback: "12 is how many laps Sophie completes. She overtakes Michael once for each extra lap: 12 - 8 = 4 times."
          },
          {
            answer: "3",
            feedback: "Check your calculation. Sophie completes 12 laps and Michael completes 8 laps. The difference is 12 - 8 = 4 overtakes."
          }
        ]
      }
    ]
  },

  // RATIOS
  {
    id: 3,
    title: "Dividing Money in a Ratio",
    topic: 'ratios',
    difficulty: 'easy',
    parts: [
      {
        question: "Divide £96 in the ratio 5:7.",
        hint: "Add the parts of the ratio together (5 + 7 = 12) to find the total number of shares. Then divide £96 by 12 to find the value of one share.",
        solution: [
          "Step 1: Add the ratio parts",
          "• 5 + 7 = 12 parts total",
          "",
          "Step 2: Find the value of one part",
          "• £96 ÷ 12 = £8 per part",
          "",
          "Step 3: Calculate each share",
          "• First share: 5 × £8 = £40",
          "• Second share: 7 × £8 = £56",
          "",
          "Step 4: Check your answer",
          "• £40 + £56 = £96 ✓",
          "",
          "Answer: £40 and £56"
        ],
        correctAnswers: [
          "£40 and £56",
          "£40 and 56",
          "40 and £56",
          "40 and 56",
          "£40, £56",
          "£40,£56",
          "40, 56",
          "40,56",
          "£40 & £56",
          "40 & 56",
          "First share: £40, Second share: £56",
          "First: £40, Second: £56",
          "5 parts = £40, 7 parts = £56",
          "£40 (first share) and £56 (second share)"
        ],
        commonMistakes: [
          {
            answer: "£40",
            feedback: "You've only given one share. The ratio 5:7 means two shares are needed. What is the second share?"
          },
          {
            answer: "£56",
            feedback: "You've only given one share. The ratio 5:7 means two shares are needed. What is the first share?"
          },
          {
            answer: "£48 and £48",
            feedback: "You've divided equally, but the ratio 5:7 means unequal shares. Find the value of one part first: £96 ÷ 12 = £8."
          },
          {
            answer: "£35 and £61",
            feedback: "Check your calculation. Total parts = 5 + 7 = 12. One part = £96 ÷ 12 = £8. Then multiply: 5 × £8 and 7 × £8."
          }
        ]
      }
    ]
  },

  {
    id: 4,
    title: "LCM of 7 and 9",
    topic: 'lcm-hcf',
    difficulty: 'easy',
    parts: [
      {
        question: "The first 10 multiples of 7 are 7, 14, 21, 28, 35, 42, 49, 56, 63 and 70. The first 10 multiples of 9 are 9, 18, 27, 36, 45, 54, 63, 72, 81 and 90. What is the lowest common multiple of 7 and 9?",
        hint: "Look for the smallest number that appears in both lists.",
        solution: [
          "Step 1: Compare the two lists",
          "• Multiples of 7: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70",
          "• Multiples of 9: 9, 18, 27, 36, 45, 54, 63, 72, 81, 90",
          "",
          "Step 2: Find the first common number",
          "• The number 63 appears in both lists",
          "• It is the first (lowest) common multiple",
          "",
          "Answer: 63"
        ],
        correctAnswers: [
          "63",
          "sixty-three",
          "63 is the LCM"
        ],
        commonMistakes: [
          {
            answer: "1",
            feedback: "That's the HCF, not the LCM. The LCM is the smallest number that appears in both lists of multiples."
          },
          {
            answer: "630",
            feedback: "That's too large. Look for the first number that appears in both lists: 7, 14, 21... and 9, 18, 27..."
          }
        ]
      }
    ]
  },

  {
    id: 5,
    title: "Vowels to Consonants in MATHEMATICS",
    topic: 'ratios',
    difficulty: 'easy',
    parts: [
      {
        question: "What is the ratio of vowels to consonants for the word MATHEMATICS?",
        hint: "Count the vowels (A, E, I, O, U) and consonants separately. Remember to count each letter, even if it appears more than once.",
        solution: [
          "Step 1: Write out the word",
          "• M-A-T-H-E-M-A-T-I-C-S (11 letters)",
          "",
          "Step 2: Identify vowels",
          "• Vowels: A, E, A, I = 4 vowels",
          "",
          "Step 3: Identify consonants",
          "• Consonants: M, T, H, M, T, C, S = 7 consonants",
          "",
          "Step 4: Write the ratio",
          "• Vowels : Consonants = 4 : 7",
          "",
          "Step 5: Check if it simplifies",
          "• HCF(4, 7) = 1",
          "• Already in simplest form",
          "",
          "Answer: 4:7"
        ],
        correctAnswers: [
          "4:7",
          "4 : 7",
          "4 to 7",
          "4/7",
          "4-7",
          "4 vowels to 7 consonants",
          "4 vowels : 7 consonants",
          "vowels 4 : consonants 7",
          "4 (vowels) : 7 (consonants)"
        ],
        commonMistakes: [
          {
            answer: "7:4",
            feedback: "You've written consonants to vowels, but the question asks for vowels to consonants. The order matters in ratios."
          },
          {
            answer: "3:8",
            feedback: "Check your counting. MATHEMATICS has 4 vowels (A, E, A, I) and 7 consonants (M, T, H, M, T, C, S)."
          },
          {
            answer: "5:6",
            feedback: "Recount carefully. Remember: vowels are A, E, I, O, U. Count each letter even if it repeats."
          },
          {
            answer: "2:3.5",
            feedback: "Don't simplify by dividing. Keep the ratio in whole numbers: 4:7."
          }
        ]
      }
    ]
  },

  {
    id: 6,
    title: "Prime Factorisation of 504",
    topic: 'prime',
    difficulty: 'medium',
    parts: [
      {
        question: "Only one of the following is the correct set of prime factors for 504: A) 504 = 2 × 2 × 6 × 21, B) 504 = 8 × 63, C) 504 = 2 × 2 × 2 × 64, D) 504 = 2 × 2 × 2 × 3 × 3 × 7. Justify why you can eliminate alternatives A and B straight away.",
        hint: "Prime factors must ALL be prime numbers. Check if 6, 21, 8, and 63 are prime.",
        solution: [
          "Step 1: Check option A",
          "• A: 2 × 2 × 6 × 21",
          "• 6 = 2 × 3 (not prime)",
          "• 21 = 3 × 7 (not prime)",
          "• Eliminated ✗",
          "",
          "Step 2: Check option B",
          "• B: 8 × 63",
          "• 8 = 2 × 2 × 2 (not prime)",
          "• 63 = 9 × 7 (not prime)",
          "• Eliminated ✗",
          "",
          "Answer: A and B contain composite numbers (not prime)"
        ],
        correctAnswers: [
          // Direct statements
          "A and B contain non-prime factors",
          "A and B have composite numbers",
          "A and B contain composite numbers",
          "They contain composite numbers",
          "Not all factors are prime",
          "They have non-prime numbers",
          "Some factors are not prime",
          "They contain non-prime numbers",
          
          // Specific to numbers
          "6, 21, 8, and 63 are not prime",
          "6, 21, 8, 63 are not prime",
          "6 and 21 are not prime",
          "8 and 63 are not prime",
          "6, 21, 8 and 63 are composite",
          "6 and 21 are composite",
          "8 and 63 are composite",
          
          // Explaining 6
          "6 is not prime",
          "6 = 2 × 3",
          "6 is composite",
          "6 is not a prime number",
          "6 can be factored",
          
          // Explaining 21
          "21 is not prime",
          "21 = 3 × 7",
          "21 is composite",
          "21 is not a prime number",
          "21 can be factored",
          
          // Explaining 8
          "8 is not prime",
          "8 = 2 × 2 × 2",
          "8 = 2³",
          "8 is composite",
          "8 is not a prime number",
          "8 can be factored",
          
          // Explaining 63
          "63 is not prime",
          "63 = 9 × 7",
          "63 = 3 × 3 × 7",
          "63 is composite",
          "63 is not a prime number",
          "63 can be factored",
          
          // Combined explanations
          "6 is 2×3 and 21 is 3×7, so not prime",
          "8 is 2×2×2 and 63 is 9×7, so not prime",
          "A has 6 and 21 which are not prime",
          "B has 8 and 63 which are not prime",
          "A: 6 and 21 are composite",
          "B: 8 and 63 are composite",
          "Option A has 6=2×3 and 21=3×7",
          "Option B has 8=2³ and 63=9×7",
          
          // Definition-based
          "Prime factors must be prime numbers only",
          "All factors must be prime",
          "Prime factorisation requires only prime numbers",
          "They don't use only prime numbers",
          "Not all numbers are prime",
          
          // Logical reasoning
          "6, 8, 21, and 63 can be factored further",
          "These numbers can be broken down further",
          "They are not fully factorised",
          "The factorisation is incomplete",
          "They need to be factored more"
        ]
      },
      {
        question: "Show that option D is the correct answer.",
        hint: "Check that all factors in option D are prime, then multiply them to verify they equal 504.",
        solution: [
          "Step 1: Check option C",
          "• C: 2 × 2 × 2 × 64",
          "• 64 = 2⁶ (not prime)",
          "• Eliminated ✗",
          "",
          "Step 2: Check option D",
          "• D: 2 × 2 × 2 × 3 × 3 × 7",
          "• All factors are prime: 2, 3, and 7 ✓",
          "",
          "Step 3: Verify by multiplication",
          "• 2³ × 3² × 7",
          "• = 8 × 9 × 7",
          "• = 72 × 7",
          "• = 504 ✓",
          "",
          "Answer: D is correct (all prime factors, product = 504)"
        ],
        correctAnswers: [
          // Simple answers
          "D",
          "D is correct",
          "Option D",
          "D is the correct answer",
          "The answer is D",
          "It's D",
          "D is right",
          
          // With factorisation
          "2 × 2 × 2 × 3 × 3 × 7",
          "2 * 2 * 2 * 3 * 3 * 7",
          "2×2×2×3×3×7",
          "2*2*2*3*3*7",
          "2 x 2 x 2 x 3 x 3 x 7",
          
          // With exponents
          "2³ × 3² × 7",
          "2^3 × 3^2 × 7",
          "2³ * 3² * 7",
          "2^3 * 3^2 * 7",
          "2³×3²×7",
          "2^3×3^2×7",
          
          // With calculation
          "8 × 9 × 7",
          "8 * 9 * 7",
          "8×9×7",
          "72 × 7",
          "72 * 7",
          "72×7",
          "8 × 9 × 7 = 504",
          "72 × 7 = 504",
          
          // Explaining why D is correct
          "D has all prime factors",
          "D contains only prime numbers",
          "All factors in D are prime",
          "D is fully factorised",
          "D uses only primes",
          "2, 3, and 7 are all prime",
          "2, 3, 7 are prime numbers",
          
          // Verification
          "D equals 504",
          "D = 504",
          "D multiplies to 504",
          "2³ × 3² × 7 = 504",
          "2^3 × 3^2 × 7 = 504",
          "8 × 9 × 7 = 504",
          
          // Combined reasoning
          "D has all prime factors and equals 504",
          "D is correct because all factors are prime",
          "D is correct because 2, 3, 7 are prime",
          "D works because 8×9×7=504",
          "D: all prime and product is 504",
          "Option D has only prime numbers",
          "Option D is fully factorised into primes",
          
          // Eliminating C
          "C has 64 which is not prime",
          "C is wrong because 64 is not prime",
          "64 is not prime, so D is correct",
          "C: 64 = 2⁶ (not prime)",
          
          // Full explanation
          "D is correct: 2, 3, and 7 are all prime, and 2³×3²×7 = 504",
          "D: all factors are prime (2, 3, 7) and product = 504",
          "Option D because all numbers are prime and multiply to 504",
          "D has only primes: 2×2×2×3×3×7 = 504"
        ]
      }
    ]
  },

  {
    id: 7,
    title: "Lorry Weight Limit",
    topic: 'mass',
    difficulty: 'hard',
    parts: [
      {
        question: "A lorry has a weight limit of 4.5 tonnes. Currently, it is loaded with 180 tins of soup weighing 4,500 grammes each, 28 bags of flour weighing 25 kg each, 160 boxes of tea weighing 6.5 kg each, and 12 people with an average weight of 85 kg each. Does the total load exceed the lorry's weight capacity?",
        hint: "Convert all weights to kilograms first. Remember: 1000 g = 1 kg, 1 tonne = 1000 kg. Then add all the weights and compare to 4500 kg.",
        solution: [
          "Step 1: Convert soup tins to kg",
          "• 4500 g = 4.5 kg per tin",
          "• 180 tins × 4.5 kg = 810 kg",
          "",
          "Step 2: Calculate flour weight",
          "• 28 bags × 25 kg = 700 kg",
          "",
          "Step 3: Calculate tea weight",
          "• 160 boxes × 6.5 kg = 1040 kg",
          "",
          "Step 4: Calculate people weight",
          "• 12 people × 85 kg = 1020 kg",
          "",
          "Step 5: Calculate total weight",
          "• Total = 810 + 700 + 1040 + 1020",
          "• Total = 3570 kg",
          "",
          "Step 6: Compare to limit",
          "• Limit = 4.5 tonnes = 4500 kg",
          "• Load = 3570 kg",
          "• 3570 kg < 4500 kg",
          "",
          "Answer: No, the load does NOT exceed capacity (930 kg spare)"
        ],
        correctAnswers: [
          "No",
          "No, it does not exceed",
          "No, 3570 kg < 4500 kg",
          "No, the load is 3570 kg",
          "No, there is 930 kg spare",
          "Does not exceed",
          "No, within capacity"
        ],
        commonMistakes: [
          {
            answer: "Yes",
            feedback: "Check your calculation. Total load = 810 + 700 + 1040 + 1020 = 3570 kg, which is less than 4500 kg."
          }
        ]
      }
    ]
  },

  {
    id: 8,
    title: "HCF of 20 and 28",
    topic: 'lcm-hcf',
    difficulty: 'easy',
    parts: [
      {
        question: "The factors of 20 are 1, 2, 4, 5, 10 and 20, and the factors of 28 are 1, 2, 4, 7, 14 and 28. What is the highest common factor of 20 and 28?",
        hint: "Look for the largest number that appears in both lists of factors.",
        solution: [
          "Step 1: List the factors",
          "• Factors of 20: 1, 2, 4, 5, 10, 20",
          "• Factors of 28: 1, 2, 4, 7, 14, 28",
          "",
          "Step 2: Find common factors",
          "• Common factors: 1, 2, 4",
          "",
          "Step 3: Identify the highest",
          "• The highest common factor is 4",
          "",
          "Answer: 4"
        ],
        correctAnswers: [
          "4",
          "four",
          "HCF = 4",
          "The HCF is 4"
        ],
        commonMistakes: [
          {
            answer: "2",
            feedback: "2 is a common factor, but it's not the highest. Look for the largest number in both lists."
          },
          {
            answer: "140",
            feedback: "That's the LCM, not the HCF. The HCF is the highest common factor."
          }
        ]
      }
    ]
  },

  {
    id: 9,
    title: "Students to Teachers Ratio",
    topic: 'ratios',
    difficulty: 'easy',
    parts: [
      {
        question: "A school has 48 boys, 54 girls and 8 teachers. What is the ratio of students to teachers?",
        hint: "First find the total number of students by adding boys and girls. Then write the ratio and simplify by dividing by the HCF.",
        solution: [
          "Step 1: Find total students",
          "• Total students = 48 + 54 = 102",
          "",
          "Step 2: Write the ratio",
          "• Students : Teachers = 102 : 8",
          "",
          "Step 3: Find HCF",
          "• HCF(102, 8) = 2",
          "",
          "Step 4: Simplify",
          "• 102 ÷ 2 = 51",
          "• 8 ÷ 2 = 4",
          "",
          "Answer: 51:4"
        ],
        correctAnswers: [
          "51:4",
          "51 : 4",
          "51 to 4",
          "51/4",
          "students 51 : teachers 4"
        ],
        commonMistakes: [
          {
            answer: "102:8",
            feedback: "This is correct but not simplified. Divide both numbers by their HCF (2) to get 51:4."
          },
          {
            answer: "4:51",
            feedback: "You've written teachers to students, but the question asks for students to teachers."
          }
        ]
      }
    ]
  },

  {
    id: 10,
    title: "Marking Time",
    topic: 'time',
    difficulty: 'medium',
    parts: [
      {
        question: "Three essays are marked by a teacher. The first takes 6 minutes and 18 seconds to mark, the second takes 8 minutes and 34 seconds, and the third takes 4 minutes and 52 seconds. What is the total time taken to complete marking the essays, in minutes and seconds?",
        hint: "Add the minutes together, then add the seconds together. If seconds exceed 60, convert to minutes (60 seconds = 1 minute).",
        solution: [
          "Step 1: List the times",
          "• Essay 1: 6 min 18 sec",
          "• Essay 2: 8 min 34 sec",
          "• Essay 3: 4 min 52 sec",
          "",
          "Step 2: Add minutes",
          "• 6 + 8 + 4 = 18 minutes",
          "",
          "Step 3: Add seconds",
          "• 18 + 34 + 52 = 104 seconds",
          "",
          "Step 4: Convert seconds to minutes",
          "• 104 seconds = 1 minute 44 seconds",
          "• (because 104 ÷ 60 = 1 remainder 44)",
          "",
          "Step 5: Add to total",
          "• 18 minutes + 1 minute 44 seconds",
          "• = 19 minutes 44 seconds",
          "",
          "Answer: 19 minutes 44 seconds"
        ],
        correctAnswers: [
          "19 minutes 44 seconds",
          "19 min 44 sec",
          "19:44",
          "19 minutes and 44 seconds",
          "19m 44s"
        ],
        commonMistakes: [
          {
            answer: "18 minutes 104 seconds",
            feedback: "You need to convert seconds to minutes. 104 seconds = 1 minute 44 seconds, so add this to 18 minutes."
          }
        ]
      }
    ]
  },

  // Additional exercises (11-20)
  {
    id: 11,
    title: "Height Ratio Problem",
    topic: 'ratios',
    difficulty: 'medium',
    parts: [
      {
        question: "The ratio of Emma's height to David's height is 13:19. If the difference in their heights is 54 cm, how tall is Emma?",
        hint: "The difference in ratio parts is 19 - 13 = 6 parts. If 6 parts = 54 cm, find the value of 1 part, then multiply by 13 to get Emma's height.",
        solution: [
          "Step 1: Find the difference in parts",
          "• Emma : David = 13 : 19",
          "• Difference = 19 - 13 = 6 parts",
          "",
          "Step 2: Find value of one part",
          "• 6 parts = 54 cm",
          "• 1 part = 54 ÷ 6 = 9 cm",
          "",
          "Step 3: Calculate Emma's height",
          "• Emma = 13 parts",
          "• Emma's height = 13 × 9 = 117 cm",
          "",
          "Step 4: Check the answer",
          "• David = 19 × 9 = 171 cm",
          "• Difference = 171 - 117 = 54 cm ✓",
          "",
          "Answer: Emma is 117 cm tall"
        ],
        correctAnswers: [
          "117 cm",
          "117cm",
          "117 centimetres",
          "117 centimeters",
          "117"
        ],
        commonMistakes: [
          {
            answer: "171",
            feedback: "That's David's height. Emma is shorter. Use 13 parts, not 19."
          },
          {
            answer: "54",
            feedback: "That's the difference, not Emma's height. Find the value of one part first: 54 ÷ 6 = 9, then multiply by 13."
          }
        ]
      }
    ]
  },

  {
    id: 12,
    title: "Box of Butter",
    topic: 'mass',
    difficulty: 'easy',
    parts: [
      {
        question: "A box contains 24 blocks of butter, each weighing 125 g. What is the mass of the box in grammes?",
        hint: "Multiply the number of blocks by the weight of each block.",
        solution: [
          "Step 1: Identify the values",
          "• Number of blocks = 24",
          "• Weight per block = 125 g",
          "",
          "Step 2: Calculate total mass",
          "• Total mass = 24 × 125",
          "• Total mass = 3000 g",
          "",
          "Answer: 3000 g"
        ],
        correctAnswers: [
          "3000 g",
          "3000g",
          "3000 grammes",
          "3000 grams",
          "3,000 g",
          "3000"
        ]
      },
      {
        question: "What is the mass of the box in kilogrammes?",
        hint: "Convert grammes to kilogrammes by dividing by 1000.",
        solution: [
          "Step 1: Use the conversion factor",
          "• 1000 g = 1 kg",
          "",
          "Step 2: Convert to kg",
          "• 3000 g = 3000 ÷ 1000",
          "• 3000 g = 3 kg",
          "",
          "Answer: 3 kg"
        ],
        correctAnswers: [
          "3 kg",
          "3kg",
          "3 kilograms",
          "3 kilogrammes",
          "3.0 kg",
          "3"
        ]
      }
    ]
  },

  {
    id: 13,
    title: "Mobile Phone and Books Spending",
    topic: 'ratios',
    difficulty: 'medium',
    parts: [
      {
        question: "For every £4 Rachel spends on her mobile phone, she spends £5 on books. Rachel spent £320 on her phone last year. How much did she spend on books for the same year?",
        hint: "Set up a proportion: Phone : Books = 4 : 5. Find how many '£4 units' are in £320, then multiply by £5.",
        solution: [
          "Step 1: Understand the ratio",
          "• Phone : Books = 4 : 5",
          "• For every £4 on phone, £5 on books",
          "",
          "Step 2: Find the multiplier",
          "• Phone spending = £320",
          "• Number of £4 units = 320 ÷ 4 = 80",
          "",
          "Step 3: Calculate books spending",
          "• Books = 80 × £5 = £400",
          "",
          "Step 4: Check the ratio",
          "• 320 : 400 = 4 : 5 ✓",
          "",
          "Answer: Rachel spent £400 on books"
        ],
        correctAnswers: [
          "£400",
          "400",
          "£400.00",
          "400 pounds",
          "four hundred pounds"
        ],
        commonMistakes: [
          {
            answer: "£320",
            feedback: "That's what she spent on her phone. The ratio is 4:5, so books should be more than phone."
          },
          {
            answer: "£256",
            feedback: "Check your calculation. If phone is £320 and ratio is 4:5, then books = (320 ÷ 4) × 5 = £400."
          }
        ]
      }
    ]
  },

  {
    id: 14,
    title: "LCM and HCF of 280 and 420",
    topic: 'lcm-hcf',
    difficulty: 'hard',
    parts: [
      {
        question: "Find the HCF (Highest Common Factor) of 280 and 420 using prime factorisation.",
        hint: "First find the prime factors of both numbers. For HCF, take the lowest power of each common prime factor.",
        solution: [
          "Step 1: Prime factorisation of 280",
          "• 280 = 2 × 140 = 2 × 2 × 70 = 2 × 2 × 2 × 35",
          "• = 2 × 2 × 2 × 5 × 7",
          "• = 2³ × 5 × 7",
          "",
          "Step 2: Prime factorisation of 420",
          "• 420 = 2 × 210 = 2 × 2 × 105 = 2 × 2 × 3 × 35",
          "• = 2 × 2 × 3 × 5 × 7",
          "• = 2² × 3 × 5 × 7",
          "",
          "Step 3: Find HCF",
          "• Common factors: 2, 5, 7",
          "• Take lowest powers: 2², 5¹, 7¹",
          "• HCF = 4 × 5 × 7 = 140",
          "",
          "Answer: HCF = 140"
        ],
        correctAnswers: [
          "140",
          "HCF = 140",
          "one hundred and forty",
          "The HCF is 140"
        ]
      },
      {
        question: "Find the LCM (Lowest Common Multiple) of 280 and 420.",
        hint: "For LCM, take the highest power of all prime factors that appear in either number.",
        solution: [
          "Step 1: List all prime factors",
          "• 280 = 2³ × 5 × 7",
          "• 420 = 2² × 3 × 5 × 7",
          "• All factors: 2, 3, 5, 7",
          "",
          "Step 2: Find LCM",
          "• Take highest powers: 2³, 3¹, 5¹, 7¹",
          "• LCM = 8 × 3 × 5 × 7",
          "• LCM = 24 × 35",
          "• LCM = 840",
          "",
          "Answer: LCM = 840"
        ],
        correctAnswers: [
          "840",
          "LCM = 840",
          "eight hundred and forty",
          "The LCM is 840"
        ]
      }
    ]
  },

  {
    id: 15,
    title: "Shaded Area Ratio",
    topic: 'geometry',
    difficulty: 'medium',
    parts: [
      {
        question: "A triangle is divided into 9 equal sections. If 5 sections are shaded, what is the ratio of the shaded area to the unshaded area?",
        hint: "Count the shaded sections and unshaded sections. The ratio is shaded : unshaded.",
        solution: [
          "Step 1: Count shaded sections",
          "• Shaded sections = 5",
          "",
          "Step 2: Count unshaded sections",
          "• Total sections = 9",
          "• Unshaded = 9 - 5 = 4 sections",
          "",
          "Step 3: Write the ratio",
          "• Shaded : Unshaded = 5 : 4",
          "",
          "Step 4: Check if it simplifies",
          "• HCF(5, 4) = 1",
          "• Already in simplest form",
          "",
          "Answer: 5:4"
        ],
        correctAnswers: [
          "5:4",
          "5 : 4",
          "5 to 4",
          "5/4",
          "shaded 5 : unshaded 4"
        ],
        commonMistakes: [
          {
            answer: "4:5",
            feedback: "You've written unshaded to shaded, but the question asks for shaded to unshaded."
          }
        ]
      }
    ]
  },

  {
    id: 16,
    title: "Pencil Case Ratios",
    topic: 'ratios',
    difficulty: 'easy',
    parts: [
      {
        question: "In Sarah's pencil case there are seven coloured pencils, three black pens, two red pens, six rubbers, four lead pencils and a ruler. Find the ratio of lead pencils to coloured pencils.",
        hint: "Count the lead pencils and coloured pencils, then write the ratio and simplify if possible.",
        solution: [
          "Step 1: Count the items",
          "• Lead pencils = 4",
          "• Coloured pencils = 7",
          "",
          "Step 2: Write the ratio",
          "• Lead pencils : Coloured pencils = 4 : 7",
          "",
          "Step 3: Check if it simplifies",
          "• HCF(4, 7) = 1",
          "• Already in simplest form",
          "",
          "Answer: 4:7"
        ],
        correctAnswers: [
          "4:7",
          "4 : 7",
          "4 to 7",
          "4/7"
        ]
      },
      {
        question: "Find the ratio of rubbers to all pens.",
        hint: "First count all the pens (black + red), then write the ratio of rubbers to total pens.",
        solution: [
          "Step 1: Count rubbers",
          "• Rubbers = 6",
          "",
          "Step 2: Count all pens",
          "• Black pens = 3",
          "• Red pens = 2",
          "• Total pens = 3 + 2 = 5",
          "",
          "Step 3: Write the ratio",
          "• Rubbers : Pens = 6 : 5",
          "",
          "Step 4: Check if it simplifies",
          "• HCF(6, 5) = 1",
          "• Already in simplest form",
          "",
          "Answer: 6:5"
        ],
        correctAnswers: [
          "6:5",
          "6 : 5",
          "6 to 5",
          "6/5"
        ]
      }
    ]
  },

  {
    id: 17,
    title: "Matching Mass Measurements",
    topic: 'mass',
    difficulty: 'easy',
    parts: [
      {
        question: "For Group A: 12 kg, 1,200 g, 12,000 g - which measurements are the same?",
        hint: "Convert all measurements to the same unit. Remember: 1 kg = 1000 g.",
        solution: [
          "Step 1: Convert to grammes",
          "• 12 kg = 12 × 1000 = 12,000 g",
          "• 1,200 g = 1,200 g",
          "• 12,000 g = 12,000 g",
          "",
          "Step 2: Compare",
          "• 12 kg = 12,000 g ✓",
          "",
          "Answer: 12 kg and 12,000 g are the same"
        ],
        correctAnswers: [
          "12 kg = 12,000 g",
          "12 kg and 12,000 g",
          "12 kg = 12000 g",
          "12kg = 12000g",
          "12 kg and 12000 g are the same"
        ]
      },
      {
        question: "For Group B: 4.8 tonnes, 480 kg, 4,800 kg - which measurements are the same?",
        hint: "Convert all measurements to kilograms. Remember: 1 tonne = 1000 kg.",
        solution: [
          "Step 1: Convert to kilograms",
          "• 4.8 tonnes = 4.8 × 1000 = 4,800 kg",
          "• 480 kg = 480 kg",
          "• 4,800 kg = 4,800 kg",
          "",
          "Step 2: Compare",
          "• 4.8 tonnes = 4,800 kg ✓",
          "",
          "Answer: 4.8 tonnes and 4,800 kg are the same"
        ],
        correctAnswers: [
          "4.8 tonnes = 4,800 kg",
          "4.8 tonnes and 4,800 kg",
          "4.8 tonnes = 4800 kg",
          "4.8t = 4800kg",
          "4.8 tonnes and 4800 kg are the same"
        ]
      }
    ]
  },

  {
    id: 18,
    title: "Prime Factors and HCF (216 and 144)",
    topic: 'prime',
    difficulty: 'hard',
    parts: [
      {
        question: "Express 216 in prime factor form.",
        hint: "Keep dividing by the smallest prime number (2) until you can't anymore, then try 3, then 5, etc.",
        solution: [
          "Step 1: Divide by 2 repeatedly",
          "• 216 = 2 × 108",
          "• 108 = 2 × 54",
          "• 54 = 2 × 27",
          "",
          "Step 2: Divide by 3 repeatedly",
          "• 27 = 3 × 9",
          "• 9 = 3 × 3",
          "",
          "Step 3: Write in index form",
          "• 216 = 2 × 2 × 2 × 3 × 3 × 3",
          "• 216 = 2³ × 3³",
          "",
          "Answer: 2³ × 3³"
        ],
        correctAnswers: [
          "2³ × 3³",
          "2^3 × 3^3",
          "2 × 2 × 2 × 3 × 3 × 3",
          "8 × 27",
          "2³ * 3³"
        ]
      },
      {
        question: "Express 144 in prime factor form.",
        hint: "Use the same method: divide by 2 as many times as possible, then by 3.",
        solution: [
          "Step 1: Divide by 2 repeatedly",
          "• 144 = 2 × 72",
          "• 72 = 2 × 36",
          "• 36 = 2 × 18",
          "• 18 = 2 × 9",
          "",
          "Step 2: Divide by 3 repeatedly",
          "• 9 = 3 × 3",
          "",
          "Step 3: Write in index form",
          "• 144 = 2 × 2 × 2 × 2 × 3 × 3",
          "• 144 = 2⁴ × 3²",
          "",
          "Answer: 2⁴ × 3²"
        ],
        correctAnswers: [
          "2⁴ × 3²",
          "2^4 × 3^2",
          "2 × 2 × 2 × 2 × 3 × 3",
          "16 × 9",
          "2⁴ * 3²"
        ]
      },
      {
        question: "By considering the prime factor form, determine the HCF of 216 and 144.",
        hint: "For HCF, take the lowest power of each common prime factor.",
        solution: [
          "Step 1: Write the prime factors",
          "• 216 = 2³ × 3³",
          "• 144 = 2⁴ × 3²",
          "",
          "Step 2: Identify common factors",
          "• Common prime factors: 2 and 3",
          "",
          "Step 3: Take lowest powers",
          "• For 2: lowest power is 2³",
          "• For 3: lowest power is 3²",
          "",
          "Step 4: Calculate HCF",
          "• HCF = 2³ × 3²",
          "• HCF = 8 × 9",
          "• HCF = 72",
          "",
          "Answer: HCF = 72"
        ],
        correctAnswers: [
          "72",
          "HCF = 72",
          "seventy-two",
          "The HCF is 72"
        ]
      }
    ]
  },

  {
    id: 19,
    title: "LCM of 5 and 12",
    topic: 'lcm-hcf',
    difficulty: 'easy',
    parts: [
      {
        question: "The first 10 multiples of 5 are 5, 10, 15, 20, 25, 30, 35, 40, 45 and 50. The first 10 multiples of 12 are 12, 24, 36, 48, 60, 72, 84, 96, 108 and 120. What is the lowest common multiple of 5 and 12?",
        hint: "Look for the smallest number that appears in both lists. You may need to extend the list of multiples of 5.",
        solution: [
          "Step 1: Extend multiples of 5",
          "• Multiples of 5: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60...",
          "",
          "Step 2: Compare with multiples of 12",
          "• Multiples of 12: 12, 24, 36, 48, 60, 72...",
          "",
          "Step 3: Find first common multiple",
          "• The number 60 appears in both lists",
          "• It is the first (lowest) common multiple",
          "",
          "Alternative method:",
          "• 5 and 12 are coprime (no common factors)",
          "• LCM = 5 × 12 = 60",
          "",
          "Answer: 60"
        ],
        correctAnswers: [
          "60",
          "LCM = 60",
          "sixty",
          "The LCM is 60"
        ],
        commonMistakes: [
          {
            answer: "1",
            feedback: "That's the HCF, not the LCM. The LCM is the smallest number that appears in both lists of multiples."
          }
        ]
      }
    ]
  },

  {
    id: 20,
    title: "Warehouse Weight Limit",
    topic: 'mass',
    difficulty: 'hard',
    parts: [
      {
        question: "A warehouse has a weight limit of 5.8 tonnes. Currently, it is loaded with 240 bottles of olive oil weighing 3,800 grammes each, 35 sacks of rice weighing 20 kg each, 150 cartons of pasta weighing 7.5 kg each, and 15 people with an average weight of 78 kg each. Does the total load exceed the warehouse's weight capacity?",
        hint: "Convert all weights to kilograms. Remember: 1000 g = 1 kg, 1 tonne = 1000 kg. Add all weights and compare to 5800 kg.",
        solution: [
          "Step 1: Convert olive oil to kg",
          "• 3800 g = 3.8 kg per bottle",
          "• 240 bottles × 3.8 kg = 912 kg",
          "",
          "Step 2: Calculate rice weight",
          "• 35 sacks × 20 kg = 700 kg",
          "",
          "Step 3: Calculate pasta weight",
          "• 150 cartons × 7.5 kg = 1125 kg",
          "",
          "Step 4: Calculate people weight",
          "• 15 people × 78 kg = 1170 kg",
          "",
          "Step 5: Calculate total weight",
          "• Total = 912 + 700 + 1125 + 1170",
          "• Total = 3907 kg",
          "",
          "Step 6: Compare to limit",
          "• Limit = 5.8 tonnes = 5800 kg",
          "• Load = 3907 kg",
          "• 3907 kg < 5800 kg",
          "",
          "Answer: No, the load does NOT exceed capacity (1893 kg spare)"
        ],
        correctAnswers: [
          "No",
          "No, it does not exceed",
          "No, 3907 kg < 5800 kg",
          "No, the load is 3907 kg",
          "No, there is 1893 kg spare",
          "Does not exceed",
          "No, within capacity"
        ],
        commonMistakes: [
          {
            answer: "Yes",
            feedback: "Check your calculation. Total load = 912 + 700 + 1125 + 1170 = 3907 kg, which is less than 5800 kg."
          }
        ]
      }
    ]
  },

  // ADDITIONAL VOLUME CONVERSIONS (9 more needed)
  {
    id: 21,
    title: "Swimming Pool Capacity",
    topic: 'volume',
    difficulty: 'medium',
    parts: [
      {
        question: "A swimming pool holds 45,000 litres of water. How many cubic metres is this?",
        hint: "Remember: 1 m³ = 1000 L. To convert from litres to m³, divide by 1000.",
        solution: [
          "Step 1: Identify the conversion factor",
          "• 1000 L = 1 m³",
          "",
          "Step 2: Divide to convert to larger unit",
          "• 45,000 L = 45,000 ÷ 1000",
          "• 45,000 L = 45 m³",
          "",
          "Answer: 45 m³"
        ],
        correctAnswers: ["45 m³", "45m³", "45 m3", "45m3", "45 cubic metres", "45 cubic meters", "45"],
        commonMistakes: [
          { answer: "45000", feedback: "You forgot to convert. Divide by 1000 to convert litres to cubic metres." },
          { answer: "4.5", feedback: "You've divided by 10,000 instead of 1000. Check the conversion: 1000 L = 1 m³." }
        ]
      }
    ]
  },
  {
    id: 22,
    title: "Juice Carton Conversion",
    topic: 'volume',
    difficulty: 'easy',
    parts: [
      {
        question: "A juice carton contains 250 millilitres. How many litres is this?",
        hint: "Remember: 1000 mL = 1 L. To convert from mL to L, divide by 1000.",
        solution: [
          "Step 1: Identify the conversion factor",
          "• 1000 mL = 1 L",
          "",
          "Step 2: Divide to convert to larger unit",
          "• 250 mL = 250 ÷ 1000",
          "• 250 mL = 0.25 L",
          "",
          "Answer: 0.25 L"
        ],
        correctAnswers: ["0.25 L", "0.25L", "0.25 litres", "0.25 liters", "0.25", "1/4 L", "¼ L"],
        commonMistakes: [
          { answer: "2.5", feedback: "You've divided by 100 instead of 1000. Check: 1000 mL = 1 L." },
          { answer: "250", feedback: "You forgot to convert. Divide by 1000 to get litres." }
        ]
      }
    ]
  },
  {
    id: 23,
    title: "Fish Tank Volume",
    topic: 'volume',
    difficulty: 'medium',
    parts: [
      {
        question: "A fish tank has a volume of 0.08 m³. How many litres of water does it hold?",
        hint: "Remember: 1 m³ = 1000 L. To convert from m³ to L, multiply by 1000.",
        solution: [
          "Step 1: Identify the conversion factor",
          "• 1 m³ = 1000 L",
          "",
          "Step 2: Multiply to convert to smaller unit",
          "• 0.08 m³ = 0.08 × 1000",
          "• 0.08 m³ = 80 L",
          "",
          "Answer: 80 L"
        ],
        correctAnswers: ["80 L", "80L", "80 litres", "80 liters", "80"],
        commonMistakes: [
          { answer: "8", feedback: "You've multiplied by 100 instead of 1000. Check: 1 m³ = 1000 L." },
          { answer: "800", feedback: "You've multiplied by 10,000. The correct factor is 1000." }
        ]
      }
    ]
  },
  {
    id: 24,
    title: "Medicine Dosage",
    topic: 'volume',
    difficulty: 'easy',
    parts: [
      {
        question: "A medicine bottle contains 5 mL of liquid. How many cubic centimetres is this?",
        hint: "Remember: 1 mL = 1 cm³. They are equivalent units.",
        solution: [
          "Step 1: Identify the conversion factor",
          "• 1 mL = 1 cm³",
          "",
          "Step 2: Convert",
          "• 5 mL = 5 cm³",
          "",
          "Answer: 5 cm³"
        ],
        correctAnswers: ["5 cm³", "5cm³", "5 cm3", "5cm3", "5 cubic centimetres", "5 cubic centimeters", "5 cc", "5"],
        commonMistakes: [
          { answer: "5000", feedback: "mL and cm³ are the same. No conversion needed: 1 mL = 1 cm³." },
          { answer: "0.005", feedback: "mL and cm³ are equivalent. 5 mL = 5 cm³." }
        ]
      }
    ]
  },
  {
    id: 25,
    title: "Water Bottle Capacity",
    topic: 'volume',
    difficulty: 'easy',
    parts: [
      {
        question: "A water bottle holds 750 mL. How many litres is this?",
        hint: "To convert from mL to L, divide by 1000.",
        solution: [
          "Step 1: Identify the conversion factor",
          "• 1000 mL = 1 L",
          "",
          "Step 2: Divide to convert",
          "• 750 mL = 750 ÷ 1000",
          "• 750 mL = 0.75 L",
          "",
          "Answer: 0.75 L"
        ],
        correctAnswers: ["0.75 L", "0.75L", "0.75 litres", "0.75 liters", "0.75", "3/4 L", "¾ L"],
        commonMistakes: [
          { answer: "7.5", feedback: "You've divided by 100 instead of 1000." },
          { answer: "750", feedback: "You forgot to convert. Divide by 1000." }
        ]
      }
    ]
  },
  {
    id: 26,
    title: "Petrol Tank Conversion",
    topic: 'volume',
    difficulty: 'medium',
    parts: [
      {
        question: "A car's petrol tank holds 55 litres. How many cubic centimetres is this?",
        hint: "Remember: 1 L = 1000 cm³. Multiply by 1000.",
        solution: [
          "Step 1: Identify the conversion factor",
          "• 1 L = 1000 cm³",
          "",
          "Step 2: Multiply to convert",
          "• 55 L = 55 × 1000",
          "• 55 L = 55,000 cm³",
          "",
          "Answer: 55,000 cm³"
        ],
        correctAnswers: ["55000 cm³", "55000cm³", "55000 cm3", "55,000 cm³", "55,000 cm3", "55000", "55,000"],
        commonMistakes: [
          { answer: "5500", feedback: "You've multiplied by 100 instead of 1000." },
          { answer: "550", feedback: "You've multiplied by 10. The correct factor is 1000." }
        ]
      }
    ]
  },
  {
    id: 27,
    title: "Laboratory Beaker",
    topic: 'volume',
    difficulty: 'easy',
    parts: [
      {
        question: "A laboratory beaker contains 150 cm³ of solution. How many millilitres is this?",
        hint: "Remember: 1 cm³ = 1 mL. They are the same.",
        solution: [
          "Step 1: Identify the conversion factor",
          "• 1 cm³ = 1 mL",
          "",
          "Step 2: Convert",
          "• 150 cm³ = 150 mL",
          "",
          "Answer: 150 mL"
        ],
        correctAnswers: ["150 mL", "150mL", "150 millilitres", "150 milliliters", "150"],
        commonMistakes: [
          { answer: "0.15", feedback: "cm³ and mL are equivalent. No division needed: 150 cm³ = 150 mL." },
          { answer: "150000", feedback: "cm³ and mL are the same unit. 150 cm³ = 150 mL." }
        ]
      }
    ]
  },
  {
    id: 28,
    title: "Cooking Oil Bottle",
    topic: 'volume',
    difficulty: 'medium',
    parts: [
      {
        question: "A bottle of cooking oil contains 1.5 litres. How many millilitres is this?",
        hint: "To convert from litres to mL, multiply by 1000.",
        solution: [
          "Step 1: Identify the conversion factor",
          "• 1 L = 1000 mL",
          "",
          "Step 2: Multiply to convert",
          "• 1.5 L = 1.5 × 1000",
          "• 1.5 L = 1500 mL",
          "",
          "Answer: 1500 mL"
        ],
        correctAnswers: ["1500 mL", "1500mL", "1500 millilitres", "1500 milliliters", "1500", "1,500 mL", "1,500"],
        commonMistakes: [
          { answer: "150", feedback: "You've multiplied by 100 instead of 1000." },
          { answer: "15", feedback: "You've multiplied by 10. The correct factor is 1000." }
        ]
      }
    ]
  },
  {
    id: 29,
    title: "Aquarium Volume",
    topic: 'volume',
    difficulty: 'hard',
    parts: [
      {
        question: "An aquarium measures 50 cm × 30 cm × 40 cm. What is its volume in litres?",
        hint: "First calculate volume in cm³ (length × width × height), then convert to litres by dividing by 1000.",
        solution: [
          "Step 1: Calculate volume in cm³",
          "• Volume = length × width × height",
          "• Volume = 50 × 30 × 40",
          "• Volume = 60,000 cm³",
          "",
          "Step 2: Convert to litres",
          "• 1000 cm³ = 1 L",
          "• 60,000 cm³ = 60,000 ÷ 1000",
          "• 60,000 cm³ = 60 L",
          "",
          "Answer: 60 L"
        ],
        correctAnswers: ["60 L", "60L", "60 litres", "60 liters", "60"],
        commonMistakes: [
          { answer: "60000", feedback: "You forgot to convert cm³ to litres. Divide by 1000." },
          { answer: "6", feedback: "You've divided by 10,000 instead of 1000." }
        ]
      }
    ]
  },
  {
    id: 30,
    title: "Milk Carton Comparison",
    topic: 'volume',
    difficulty: 'medium',
    parts: [
      {
        question: "One milk carton holds 2.5 L and another holds 2800 mL. Which carton holds more milk and by how much (in mL)?",
        hint: "Convert both to the same unit (mL), then compare and find the difference.",
        solution: [
          "Step 1: Convert 2.5 L to mL",
          "• 2.5 L = 2.5 × 1000 = 2500 mL",
          "",
          "Step 2: Compare",
          "• First carton: 2500 mL",
          "• Second carton: 2800 mL",
          "• 2800 mL > 2500 mL",
          "",
          "Step 3: Find the difference",
          "• 2800 - 2500 = 300 mL",
          "",
          "Answer: The second carton holds more by 300 mL"
        ],
        correctAnswers: [
          "second carton by 300 mL",
          "second by 300 mL",
          "2800 mL carton by 300 mL",
          "300 mL more in second",
          "second carton, 300 mL",
          "300 mL",
          "300"
        ],
        commonMistakes: [
          { answer: "first", feedback: "Convert both to mL: 2.5 L = 2500 mL, which is less than 2800 mL." },
          { answer: "2800", feedback: "The question asks by how much more. Find the difference: 2800 - 2500 = 300 mL." }
        ]
      }
    ]
  },

  // ADDITIONAL TIME CALCULATIONS (9 more needed)
  {
    id: 31,
    title: "School Day Duration",
    topic: 'time',
    difficulty: 'easy',
    parts: [
      {
        question: "School starts at 08:45 and finishes at 15:20. How long is the school day in hours and minutes?",
        hint: "Count the hours first, then add the minutes. From 08:45 to 15:45 is 7 hours, but we finish 25 minutes earlier.",
        solution: [
          "Step 1: Count the hours",
          "• From 08:45 to 15:45 = 7 hours",
          "",
          "Step 2: Adjust for minutes",
          "• We finish at 15:20, not 15:45",
          "• 15:45 - 15:20 = 25 minutes less",
          "• 7 hours - 25 minutes = 6 hours 35 minutes",
          "",
          "Answer: 6 hours 35 minutes"
        ],
        correctAnswers: [
          "6 hours 35 minutes",
          "6 hours and 35 minutes",
          "6h 35m",
          "6:35",
          "6 hrs 35 mins",
          "395 minutes"
        ],
        commonMistakes: [
          { answer: "7 hours", feedback: "You forgot to account for the minutes. The time is 6 hours 35 minutes." },
          { answer: "6 hours 45 minutes", feedback: "Check your minute calculation. 45 - 20 = 25, so it's 6 hours 35 minutes." }
        ]
      }
    ]
  },
  {
    id: 32,
    title: "Train Journey Time",
    topic: 'time',
    difficulty: 'medium',
    parts: [
      {
        question: "A train departs at 13:25 and arrives at 16:50. How long is the journey?",
        hint: "Count hours first: 13:25 to 16:25 is 3 hours. Then add the extra 25 minutes.",
        solution: [
          "Step 1: Count the hours",
          "• From 13:25 to 16:25 = 3 hours",
          "",
          "Step 2: Add remaining minutes",
          "• From 16:25 to 16:50 = 25 minutes",
          "• Total = 3 hours 25 minutes",
          "",
          "Answer: 3 hours 25 minutes"
        ],
        correctAnswers: [
          "3 hours 25 minutes",
          "3 hours and 25 minutes",
          "3h 25m",
          "3:25",
          "3 hrs 25 mins",
          "205 minutes"
        ],
        commonMistakes: [
          { answer: "3 hours", feedback: "Don't forget the minutes. The journey is 3 hours 25 minutes." },
          { answer: "4 hours", feedback: "Count carefully. From 13:25 to 16:50 is 3 hours 25 minutes." }
        ]
      }
    ]
  },
  {
    id: 33,
    title: "Cinema Film Duration",
    topic: 'time',
    difficulty: 'easy',
    parts: [
      {
        question: "A film starts at 19:15 and ends at 21:40. How long is the film?",
        hint: "From 19:15 to 21:15 is 2 hours. Then add the extra 25 minutes.",
        solution: [
          "Step 1: Count the hours",
          "• From 19:15 to 21:15 = 2 hours",
          "",
          "Step 2: Add remaining minutes",
          "• From 21:15 to 21:40 = 25 minutes",
          "• Total = 2 hours 25 minutes",
          "",
          "Answer: 2 hours 25 minutes"
        ],
        correctAnswers: [
          "2 hours 25 minutes",
          "2 hours and 25 minutes",
          "2h 25m",
          "2:25",
          "2 hrs 25 mins",
          "145 minutes"
        ],
        commonMistakes: [
          { answer: "2 hours", feedback: "Include the minutes. The film is 2 hours 25 minutes long." },
          { answer: "2 hours 15 minutes", feedback: "Check the end time. From 19:15 to 21:40 is 2 hours 25 minutes." }
        ]
      }
    ]
  },
  {
    id: 34,
    title: "Cooking Time Calculation",
    topic: 'time',
    difficulty: 'medium',
    parts: [
      {
        question: "A roast needs to cook for 2 hours 45 minutes. If you want it ready by 18:00, what time should you start cooking?",
        hint: "Work backwards from 18:00. Subtract 2 hours first, then subtract 45 minutes.",
        solution: [
          "Step 1: Subtract the hours",
          "• 18:00 - 2 hours = 16:00",
          "",
          "Step 2: Subtract the minutes",
          "• 16:00 - 45 minutes = 15:15",
          "",
          "Answer: 15:15"
        ],
        correctAnswers: [
          "15:15",
          "3:15 pm",
          "3:15pm",
          "quarter past three",
          "15 15",
          "1515"
        ],
        commonMistakes: [
          { answer: "16:15", feedback: "You only subtracted 2 hours. Remember to also subtract 45 minutes." },
          { answer: "15:45", feedback: "You subtracted 15 minutes instead of 45. The correct time is 15:15." }
        ]
      }
    ]
  },
  {
    id: 35,
    title: "Bus Timetable Reading",
    topic: 'time',
    difficulty: 'medium',
    parts: [
      {
        question: "Buses leave the station every 25 minutes. If the first bus leaves at 07:10, what time does the fourth bus leave?",
        hint: "Add 25 minutes three times (to get from 1st to 4th bus).",
        solution: [
          "Step 1: Calculate total time",
          "• From 1st to 4th bus = 3 intervals",
          "• 3 × 25 minutes = 75 minutes",
          "• 75 minutes = 1 hour 15 minutes",
          "",
          "Step 2: Add to start time",
          "• 07:10 + 1 hour = 08:10",
          "• 08:10 + 15 minutes = 08:25",
          "",
          "Answer: 08:25"
        ],
        correctAnswers: [
          "08:25",
          "8:25 am",
          "8:25am",
          "twenty-five past eight",
          "08 25",
          "0825"
        ],
        commonMistakes: [
          { answer: "08:10", feedback: "You only added 1 hour. Don't forget the extra 15 minutes." },
          { answer: "07:35", feedback: "You only added one interval. From 1st to 4th bus is 3 intervals (75 minutes)." }
        ]
      }
    ]
  },
  {
    id: 36,
    title: "Sports Match Duration",
    topic: 'time',
    difficulty: 'easy',
    parts: [
      {
        question: "A football match has two 45-minute halves with a 15-minute break. How long is the total time from start to finish?",
        hint: "Add all the time periods: first half + break + second half.",
        solution: [
          "Step 1: Add all time periods",
          "• First half: 45 minutes",
          "• Break: 15 minutes",
          "• Second half: 45 minutes",
          "• Total = 45 + 15 + 45 = 105 minutes",
          "",
          "Step 2: Convert to hours and minutes",
          "• 105 minutes = 1 hour 45 minutes",
          "",
          "Answer: 1 hour 45 minutes"
        ],
        correctAnswers: [
          "1 hour 45 minutes",
          "1 hour and 45 minutes",
          "1h 45m",
          "1:45",
          "1 hr 45 mins",
          "105 minutes"
        ],
        commonMistakes: [
          { answer: "90 minutes", feedback: "You forgot the 15-minute break. Total is 105 minutes." },
          { answer: "1 hour 30 minutes", feedback: "Check your addition. 45 + 15 + 45 = 105 minutes = 1 hour 45 minutes." }
        ]
      }
    ]
  },
  {
    id: 37,
    title: "Homework Time Management",
    topic: 'time',
    difficulty: 'medium',
    parts: [
      {
        question: "You have 3 homework tasks: Maths (35 minutes), English (40 minutes), and Science (25 minutes). If you start at 16:30, what time will you finish?",
        hint: "Add all the times together first, then add to the start time.",
        solution: [
          "Step 1: Calculate total time",
          "• 35 + 40 + 25 = 100 minutes",
          "• 100 minutes = 1 hour 40 minutes",
          "",
          "Step 2: Add to start time",
          "• 16:30 + 1 hour = 17:30",
          "• 17:30 + 40 minutes = 18:10",
          "",
          "Answer: 18:10"
        ],
        correctAnswers: [
          "18:10",
          "6:10 pm",
          "6:10pm",
          "ten past six",
          "18 10",
          "1810"
        ],
        commonMistakes: [
          { answer: "17:30", feedback: "You only added 1 hour. Don't forget the extra 40 minutes." },
          { answer: "18:00", feedback: "Check your calculation. 100 minutes = 1 hour 40 minutes, so finish time is 18:10." }
        ]
      }
    ]
  },
  {
    id: 38,
    title: "Sleep Duration",
    topic: 'time',
    difficulty: 'hard',
    parts: [
      {
        question: "You go to bed at 22:45 and wake up at 06:30. How many hours and minutes did you sleep?",
        hint: "Count from 22:45 to midnight (00:00), then from midnight to 06:30.",
        solution: [
          "Step 1: Time until midnight",
          "• From 22:45 to 00:00 = 1 hour 15 minutes",
          "",
          "Step 2: Time after midnight",
          "• From 00:00 to 06:30 = 6 hours 30 minutes",
          "",
          "Step 3: Add together",
          "• 1 hour 15 minutes + 6 hours 30 minutes",
          "• = 7 hours 45 minutes",
          "",
          "Answer: 7 hours 45 minutes"
        ],
        correctAnswers: [
          "7 hours 45 minutes",
          "7 hours and 45 minutes",
          "7h 45m",
          "7:45",
          "7 hrs 45 mins",
          "465 minutes"
        ],
        commonMistakes: [
          { answer: "8 hours", feedback: "Count more carefully. From 22:45 to 06:30 is 7 hours 45 minutes." },
          { answer: "7 hours 30 minutes", feedback: "Check the minutes. From 22:45 to 06:30 is 7 hours 45 minutes." }
        ]
      }
    ]
  },
  {
    id: 39,
    title: "Meeting Schedule",
    topic: 'time',
    difficulty: 'medium',
    parts: [
      {
        question: "A meeting starts at 14:20 and lasts for 1 hour 35 minutes. What time does it end?",
        hint: "Add 1 hour first, then add 35 minutes.",
        solution: [
          "Step 1: Add the hour",
          "• 14:20 + 1 hour = 15:20",
          "",
          "Step 2: Add the minutes",
          "• 15:20 + 35 minutes = 15:55",
          "",
          "Answer: 15:55"
        ],
        correctAnswers: [
          "15:55",
          "3:55 pm",
          "3:55pm",
          "five to four",
          "15 55",
          "1555"
        ],
        commonMistakes: [
          { answer: "15:20", feedback: "You only added the hour. Don't forget to add 35 minutes." },
          { answer: "16:00", feedback: "You added 40 minutes instead of 35. The correct time is 15:55." }
        ]
      }
    ]
  },

  // ADDITIONAL RATIOS & PROPORTIONS (4 more needed)
  {
    id: 40,
    title: "Recipe Ratio Scaling",
    topic: 'ratios',
    difficulty: 'medium',
    parts: [
      {
        question: "A recipe for 4 people uses flour and sugar in the ratio 5:2. If you need to make the recipe for 10 people, and the original recipe uses 200g of flour, how much sugar do you need?",
        hint: "First find how much sugar is needed for 4 people using the ratio, then scale up to 10 people.",
        solution: [
          "Step 1: Find sugar for 4 people",
          "• Ratio flour:sugar = 5:2",
          "• If flour = 200g, then 5 parts = 200g",
          "• 1 part = 200 ÷ 5 = 40g",
          "• Sugar = 2 parts = 2 × 40 = 80g",
          "",
          "Step 2: Scale up to 10 people",
          "• 10 people = 2.5 × 4 people",
          "• Sugar needed = 80 × 2.5 = 200g",
          "",
          "Answer: 200g"
        ],
        correctAnswers: [
          "200g",
          "200 g",
          "200 grams",
          "200 grammes",
          "200"
        ],
        commonMistakes: [
          {
            answer: "80g",
            feedback: "That's the sugar for 4 people. You need to scale up to 10 people."
          },
          {
            answer: "100g",
            feedback: "Check your scaling factor. 10 people = 2.5 × 4 people, not 2 times."
          }
        ]
      }
    ]
  }
];

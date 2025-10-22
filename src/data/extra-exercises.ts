export interface ExercisePart {
  question: string;
  hint: string;
  solution: string[];
  answer?: string; // Resposta esperada (opcional)
}

export interface ExtraExercise {
  id: number;
  title: string;
  topic: string; // Categoria do exercício
  difficulty: 'easy' | 'medium' | 'hard';
  parts: ExercisePart[]; // Sempre array, mesmo que seja 1 parte
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
        answer: "1800 cm³"
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
        answer: "2.2 L"
      }
    ]
  },
  {
    id: 2,
    title: "Running Laps",
    question: "Michael, Sophie, and James are running laps around the same circuit. Michael completes one lap in 6 minutes, Sophie in 4 minutes, and James in 8 minutes. They all start together at the starting line and run continuously for 48 minutes.",
    parts: [
      "What is the first time, after the start, that they will all cross over the starting line together?",
      "How many laps will each person complete in the race?",
      "How many times does Sophie overtake Michael during this race?"
    ],
    hint: "Find the Lowest Common Multiple (LCM) of their lap times to determine when they meet. Count how many complete laps each person does in 48 minutes.",
    solution: [
      "Part a) Finding when they meet:",
      "• Find LCM of 6, 4, and 8",
      "• Multiples of 6: 6, 12, 18, 24, 30, 36...",
      "• Multiples of 4: 4, 8, 12, 16, 20, 24...",
      "• Multiples of 8: 8, 16, 24, 32...",
      "• LCM = 24 minutes",
      "",
      "Part b) Number of laps in 48 minutes:",
      "• Michael: 48 ÷ 6 = 8 laps",
      "• Sophie: 48 ÷ 4 = 12 laps",
      "• James: 48 ÷ 8 = 6 laps",
      "",
      "Part c) Sophie overtakes Michael:",
      "• Sophie completes 12 laps, Michael completes 8 laps",
      "• Difference = 12 - 8 = 4 times",
      "• Sophie overtakes Michael 4 times"
    ]
  },
  {
    id: 3,
    title: "Dividing Money in a Ratio",
    question: "Divide £96 in the ratio 5:7.",
    parts: undefined,
    hint: "Add the parts of the ratio together to find the total number of shares. Then divide the total amount by this number to find the value of one share.",
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
      "Check: £40 + £56 = £96 ✓"
    ]
  },
  {
    id: 4,
    title: "Lowest Common Multiple",
    question: "The first 10 multiples of 7 are 7, 14, 21, 28, 35, 42, 49, 56, 63 and 70. The first 10 multiples of 9 are 9, 18, 27, 36, 45, 54, 63, 72, 81 and 90. What is the lowest common multiple of 7 and 9?",
    parts: undefined,
    hint: "Look for the smallest number that appears in both lists of multiples.",
    solution: [
      "Finding the LCM:",
      "• Multiples of 7: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70...",
      "• Multiples of 9: 9, 18, 27, 36, 45, 54, 63, 72, 81, 90...",
      "",
      "• The first number that appears in both lists is 63",
      "• Therefore, LCM(7, 9) = 63",
      "",
      "Alternative method:",
      "• 7 and 9 are both prime (or coprime)",
      "• LCM = 7 × 9 = 63"
    ]
  },
  {
    id: 5,
    title: "Vowels to Consonants Ratio",
    question: "What is the ratio of vowels to consonants for the word MATHEMATICS?",
    parts: undefined,
    hint: "Count the vowels (A, E, I, O, U) and consonants separately. Then simplify the ratio by dividing both numbers by their HCF.",
    solution: [
      "Step 1: Identify the letters",
      "• MATHEMATICS has 11 letters",
      "• Vowels: A, E, A, I = 4 vowels",
      "• Consonants: M, T, H, M, T, C, S = 7 consonants",
      "",
      "Step 2: Write the ratio",
      "• Vowels : Consonants = 4 : 7",
      "",
      "Step 3: Check if it can be simplified",
      "• HCF(4, 7) = 1",
      "• The ratio is already in simplest form",
      "",
      "Answer: 4:7"
    ]
  },
  {
    id: 6,
    title: "Prime Factorisation",
    question: "Only one of the following is the correct set of prime factors for 504. A) 504 = 2 × 2 × 6 × 21, B) 504 = 8 × 63, C) 504 = 2 × 2 × 2 × 64, D) 504 = 2 × 2 × 2 × 3 × 3 × 7",
    parts: [
      "Justify why you can eliminate alternatives A and B straight away.",
      "Show that option D is the correct answer."
    ],
    hint: "Prime factors must all be prime numbers. Check each option to see if all factors are prime.",
    solution: [
      "Part a) Eliminating A and B:",
      "• Option A: 2 × 2 × 6 × 21",
      "  - 6 = 2 × 3 (not prime)",
      "  - 21 = 3 × 7 (not prime)",
      "  - Eliminated ✗",
      "",
      "• Option B: 8 × 63",
      "  - 8 = 2 × 2 × 2 (not prime)",
      "  - 63 = 9 × 7 (not prime)",
      "  - Eliminated ✗",
      "",
      "• Option C: 2 × 2 × 2 × 64",
      "  - 64 = 2⁶ (not prime)",
      "  - Eliminated ✗",
      "",
      "Part b) Verifying option D:",
      "• Option D: 2 × 2 × 2 × 3 × 3 × 7",
      "• All factors are prime: 2, 3, and 7 ✓",
      "• Check: 2³ × 3² × 7 = 8 × 9 × 7 = 504 ✓",
      "",
      "Answer: D is correct"
    ]
  },
  {
    id: 7,
    title: "Lorry Weight Limit",
    question: "A lorry has a weight limit of 4.5 tonnes. Currently, it is loaded with 180 tins of soup weighing 4,500 grammes each, 28 bags of flour weighing 25 kg each, 160 boxes of tea weighing 6.5 kg each, and 12 people with an average weight of 85 kg each. Does the total load exceed the lorry's weight capacity?",
    parts: undefined,
    hint: "Convert all weights to the same unit (kilograms). Add them all up and compare to 4.5 tonnes (4500 kg).",
    solution: [
      "Step 1: Convert all weights to kg",
      "• Soup tins: 180 × 4.5 kg = 810 kg",
      "• Flour bags: 28 × 25 kg = 700 kg",
      "• Tea boxes: 160 × 6.5 kg = 1040 kg",
      "• People: 12 × 85 kg = 1020 kg",
      "",
      "Step 2: Calculate total weight",
      "• Total = 810 + 700 + 1040 + 1020 = 3570 kg",
      "",
      "Step 3: Compare to limit",
      "• Limit = 4.5 tonnes = 4500 kg",
      "• Load = 3570 kg",
      "• 3570 kg < 4500 kg",
      "",
      "Answer: No, the load does NOT exceed the capacity. There is 930 kg spare capacity."
    ]
  },
  {
    id: 8,
    title: "Highest Common Factor",
    question: "The factors of 20 are 1, 2, 4, 5, 10 and 20, and the factors of 28 are 1, 2, 4, 7, 14 and 28. What is the highest common factor of 20 and 28?",
    parts: undefined,
    hint: "Look for the largest number that appears in both lists of factors.",
    solution: [
      "Finding the HCF:",
      "• Factors of 20: 1, 2, 4, 5, 10, 20",
      "• Factors of 28: 1, 2, 4, 7, 14, 28",
      "",
      "• Common factors: 1, 2, 4",
      "• The highest common factor is 4",
      "",
      "Answer: HCF(20, 28) = 4"
    ]
  },
  {
    id: 9,
    title: "Students to Teachers Ratio",
    question: "A school has 48 boys, 54 girls and 8 teachers. What is the ratio of students to teachers?",
    parts: undefined,
    hint: "First find the total number of students, then write the ratio and simplify by dividing by the HCF.",
    solution: [
      "Step 1: Find total students",
      "• Total students = 48 + 54 = 102",
      "",
      "Step 2: Write the ratio",
      "• Students : Teachers = 102 : 8",
      "",
      "Step 3: Simplify",
      "• HCF(102, 8) = 2",
      "• 102 ÷ 2 = 51",
      "• 8 ÷ 2 = 4",
      "",
      "Answer: 51:4"
    ]
  },
  {
    id: 10,
    title: "Prime Factors and HCF",
    question: "Express 216 and 144 in prime factor form, then determine the HCF of 216 and 144 by considering the prime factor form.",
    parts: [
      "Express 216 and 144 in prime factor form.",
      "By considering the prime factor form, determine the HCF of 216 and 144."
    ],
    hint: "Use factor trees or repeated division to find prime factors. The HCF is found by taking the lowest power of each common prime factor.",
    solution: [
      "Part a) Prime factorisation:",
      "• 216 = 2 × 108 = 2 × 2 × 54 = 2 × 2 × 2 × 27",
      "  = 2 × 2 × 2 × 3 × 9 = 2 × 2 × 2 × 3 × 3 × 3",
      "  = 2³ × 3³",
      "",
      "• 144 = 2 × 72 = 2 × 2 × 36 = 2 × 2 × 2 × 18",
      "  = 2 × 2 × 2 × 2 × 9 = 2 × 2 × 2 × 2 × 3 × 3",
      "  = 2⁴ × 3²",
      "",
      "Part b) Finding HCF:",
      "• 216 = 2³ × 3³",
      "• 144 = 2⁴ × 3²",
      "",
      "• Common prime factors: 2 and 3",
      "• Take lowest powers: 2³ and 3²",
      "• HCF = 2³ × 3² = 8 × 9 = 72",
      "",
      "Answer: HCF(216, 144) = 72"
    ]
  },
  {
    id: 11,
    title: "Pencil Case Ratios",
    question: "In Sarah's pencil case there are seven coloured pencils, three black pens, two red pens, six rubbers, four lead pencils and a ruler.",
    parts: [
      "Find the ratio of lead pencils to coloured pencils.",
      "Find the ratio of rubbers to all pens."
    ],
    hint: "Count the items carefully. For part b, remember to add all types of pens together.",
    solution: [
      "Items in pencil case:",
      "• 7 coloured pencils",
      "• 3 black pens",
      "• 2 red pens",
      "• 6 rubbers",
      "• 4 lead pencils",
      "• 1 ruler",
      "",
      "Part a) Lead pencils : Coloured pencils",
      "• 4 : 7",
      "• Already in simplest form",
      "",
      "Part b) Rubbers : All pens",
      "• Total pens = 3 + 2 = 5",
      "• Rubbers : Pens = 6 : 5",
      "• Already in simplest form",
      "",
      "Answers: a) 4:7, b) 6:5"
    ]
  },
  {
    id: 12,
    title: "Matching Mass Measurements",
    question: "For each group, identify which mass measurements are the same. Group A: 12 kg, 1,200 g, 12,000 g. Group B: 4.8 tonnes, 480 kg, 4,800 kg.",
    parts: undefined,
    hint: "Convert all measurements to the same unit. Remember: 1 kg = 1000 g, 1 tonne = 1000 kg.",
    solution: [
      "Group A conversions:",
      "• 12 kg = 12,000 g",
      "• 1,200 g = 1,200 g",
      "• 12,000 g = 12,000 g",
      "",
      "• Matching: 12 kg = 12,000 g",
      "",
      "Group B conversions:",
      "• 4.8 tonnes = 4,800 kg",
      "• 480 kg = 480 kg",
      "• 4,800 kg = 4,800 kg",
      "",
      "• Matching: 4.8 tonnes = 4,800 kg",
      "",
      "Answers:",
      "Group A: 12 kg and 12,000 g are the same",
      "Group B: 4.8 tonnes and 4,800 kg are the same"
    ]
  },
  {
    id: 13,
    title: "Height Ratio Problem",
    question: "The ratio of Emma's height to David's height is 13:19. If the difference in their heights is 54 cm, how tall is Emma?",
    parts: undefined,
    hint: "The difference in ratio parts is 19 - 13 = 6 parts. If 6 parts = 54 cm, find the value of 1 part, then multiply by 13.",
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
      "Check: David = 19 × 9 = 171 cm",
      "Difference = 171 - 117 = 54 cm ✓",
      "",
      "Answer: Emma is 117 cm tall"
    ]
  },
  {
    id: 14,
    title: "Box of Butter",
    question: "A box contains 24 blocks of butter, each weighing 125 g. What is the mass of the box in grammes and in kilogrammes?",
    parts: [
      "What is the mass in grammes?",
      "What is the mass in kilogrammes?"
    ],
    hint: "Multiply the number of blocks by the weight of each block. Then convert grammes to kilogrammes by dividing by 1000.",
    solution: [
      "Part a) Mass in grammes:",
      "• Number of blocks = 24",
      "• Weight per block = 125 g",
      "• Total mass = 24 × 125 = 3000 g",
      "",
      "Part b) Mass in kilogrammes:",
      "• 1000 g = 1 kg",
      "• 3000 g = 3000 ÷ 1000 = 3 kg",
      "",
      "Answers: a) 3000 g, b) 3 kg"
    ]
  },
  {
    id: 15,
    title: "Mobile Phone and Books Spending",
    question: "For every £4 Rachel spends on her mobile phone, she spends £5 on books. Rachel spent £320 on her phone last year. How much did she spend on books for the same year?",
    parts: undefined,
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
      "Check: 320 : 400 = 4 : 5 ✓",
      "",
      "Answer: Rachel spent £400 on books"
    ]
  },
  {
    id: 16,
    title: "LCM and HCF of 280 and 420",
    question: "Find the LCM and HCF of 280 and 420.",
    parts: undefined,
    hint: "Use prime factorisation. For HCF, take the lowest power of common factors. For LCM, take the highest power of all factors.",
    solution: [
      "Step 1: Prime factorisation",
      "• 280 = 2³ × 5 × 7",
      "• 420 = 2² × 3 × 5 × 7",
      "",
      "Step 2: Find HCF",
      "• Common factors: 2, 5, 7",
      "• Take lowest powers: 2², 5¹, 7¹",
      "• HCF = 4 × 5 × 7 = 140",
      "",
      "Step 3: Find LCM",
      "• All factors: 2, 3, 5, 7",
      "• Take highest powers: 2³, 3¹, 5¹, 7¹",
      "• LCM = 8 × 3 × 5 × 7 = 840",
      "",
      "Answers: HCF = 140, LCM = 840"
    ]
  },
  {
    id: 17,
    title: "Shaded Area Ratio",
    question: "What is the ratio of the shaded area to the unshaded area in this triangle? (The triangle is divided into sections with some parts shaded)",
    parts: undefined,
    hint: "Count the number of equal sections that are shaded and unshaded. The triangle appears to be divided into equal parts.",
    solution: [
      "Analysing the triangle:",
      "• The triangle is divided into equal sections",
      "• Count shaded sections: 5 sections",
      "• Count unshaded sections: 4 sections",
      "",
      "Writing the ratio:",
      "• Shaded : Unshaded = 5 : 4",
      "",
      "Check if it simplifies:",
      "• HCF(5, 4) = 1",
      "• Already in simplest form",
      "",
      "Answer: 5:4"
    ]
  },
  {
    id: 18,
    title: "Marking Time",
    question: "Three essays are marked by a teacher. The first takes 6 minutes and 18 seconds to mark, the second takes 8 minutes and 34 seconds, and the third takes 4 minutes and 52 seconds. What is the total time taken to complete marking the essays, in minutes and seconds?",
    parts: undefined,
    hint: "Add the minutes together, then add the seconds together. If seconds exceed 60, convert to minutes.",
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
      "",
      "Step 5: Add to total",
      "• 18 minutes + 1 minute 44 seconds",
      "• = 19 minutes 44 seconds",
      "",
      "Answer: 19 minutes 44 seconds"
    ]
  },
  // Additional exercises (19-36)
  {
    id: 19,
    title: "LCM of 5 and 12",
    question: "The first 10 multiples of 5 are 5, 10, 15, 20, 25, 30, 35, 40, 45 and 50. The first 10 multiples of 12 are 12, 24, 36, 48, 60, 72, 84, 96, 108 and 120. What is the lowest common multiple of 5 and 12?",
    parts: undefined,
    hint: "Look for the smallest number that appears in both lists of multiples.",
    solution: [
      "Finding the LCM:",
      "• Multiples of 5: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60...",
      "• Multiples of 12: 12, 24, 36, 48, 60, 72, 84, 96, 108, 120...",
      "",
      "• The first number that appears in both lists is 60",
      "• Therefore, LCM(5, 12) = 60",
      "",
      "Alternative method:",
      "• 5 and 12 are coprime (no common factors except 1)",
      "• LCM = 5 × 12 = 60"
    ]
  },
  {
    id: 20,
    title: "Warehouse Weight Limit",
    question: "A warehouse has a weight limit of 5.8 tonnes. Currently, it is loaded with 240 bottles of olive oil weighing 3,800 grammes each, 35 sacks of rice weighing 20 kg each, 150 cartons of pasta weighing 7.5 kg each, and 15 people with an average weight of 78 kg each. Does the total load exceed the warehouse's weight capacity?",
    parts: undefined,
    hint: "Convert all weights to kilograms. Add them all up and compare to 5.8 tonnes (5800 kg).",
    solution: [
      "Step 1: Convert all weights to kg",
      "• Olive oil: 240 × 3.8 kg = 912 kg",
      "• Rice sacks: 35 × 20 kg = 700 kg",
      "• Pasta cartons: 150 × 7.5 kg = 1125 kg",
      "• People: 15 × 78 kg = 1170 kg",
      "",
      "Step 2: Calculate total weight",
      "• Total = 912 + 700 + 1125 + 1170 = 3907 kg",
      "",
      "Step 3: Compare to limit",
      "• Limit = 5.8 tonnes = 5800 kg",
      "• Load = 3907 kg",
      "• 3907 kg < 5800 kg",
      "",
      "Answer: No, the load does NOT exceed the capacity. There is 1893 kg spare capacity."
    ]
  },
  {
    id: 21,
    title: "Vowels to Consonants in EDUCATION",
    question: "What is the ratio of vowels to consonants for the word EDUCATION?",
    parts: undefined,
    hint: "Count the vowels (A, E, I, O, U) and consonants separately. Then simplify the ratio by dividing both numbers by their HCF.",
    solution: [
      "Step 1: Identify the letters",
      "• EDUCATION has 9 letters",
      "• Vowels: E, U, A, I, O = 5 vowels",
      "• Consonants: D, C, T, N = 4 consonants",
      "",
      "Step 2: Write the ratio",
      "• Vowels : Consonants = 5 : 4",
      "",
      "Step 3: Check if it can be simplified",
      "• HCF(5, 4) = 1",
      "• The ratio is already in simplest form",
      "",
      "Answer: 5:4"
    ]
  },
  {
    id: 22,
    title: "Students to Teachers Ratio (63 boys, 72 girls)",
    question: "A school has 63 boys, 72 girls and 9 teachers. What is the ratio of students to teachers?",
    parts: undefined,
    hint: "First find the total number of students, then write the ratio and simplify by dividing by the HCF.",
    solution: [
      "Step 1: Find total students",
      "• Total students = 63 + 72 = 135",
      "",
      "Step 2: Write the ratio",
      "• Students : Teachers = 135 : 9",
      "",
      "Step 3: Simplify",
      "• HCF(135, 9) = 9",
      "• 135 ÷ 9 = 15",
      "• 9 ÷ 9 = 1",
      "",
      "Answer: 15:1"
    ]
  },
  {
    id: 23,
    title: "Conference Speeches Time",
    question: "Three speakers present at a conference. The first speech takes 8 minutes and 24 seconds, the second takes 5 minutes and 47 seconds, and the third takes 9 minutes and 33 seconds. What is the total time taken for all speeches, in minutes and seconds?",
    parts: undefined,
    hint: "Add the minutes together, then add the seconds together. If seconds exceed 60, convert to minutes.",
    solution: [
      "Step 1: List the times",
      "• Speech 1: 8 min 24 sec",
      "• Speech 2: 5 min 47 sec",
      "• Speech 3: 9 min 33 sec",
      "",
      "Step 2: Add minutes",
      "• 8 + 5 + 9 = 22 minutes",
      "",
      "Step 3: Add seconds",
      "• 24 + 47 + 33 = 104 seconds",
      "",
      "Step 4: Convert seconds to minutes",
      "• 104 seconds = 1 minute 44 seconds",
      "",
      "Step 5: Add to total",
      "• 22 minutes + 1 minute 44 seconds",
      "• = 23 minutes 44 seconds",
      "",
      "Answer: 23 minutes 44 seconds"
    ]
  },
  {
    id: 24,
    title: "Cinema and Video Games Spending",
    question: "For every £7 Oliver spends on cinema tickets, he spends £9 on video games. Oliver spent £252 on cinema tickets last year. How much did he spend on video games for the same year?",
    parts: undefined,
    hint: "Set up a proportion: Cinema : Games = 7 : 9. Find how many '£7 units' are in £252, then multiply by £9.",
    solution: [
      "Step 1: Understand the ratio",
      "• Cinema : Games = 7 : 9",
      "• For every £7 on cinema, £9 on games",
      "",
      "Step 2: Find the multiplier",
      "• Cinema spending = £252",
      "• Number of £7 units = 252 ÷ 7 = 36",
      "",
      "Step 3: Calculate games spending",
      "• Games = 36 × £9 = £324",
      "",
      "Check: 252 : 324 = 7 : 9 ✓",
      "",
      "Answer: Oliver spent £324 on video games"
    ]
  },
  {
    id: 25,
    title: "Cycling Laps",
    question: "Lucy, Benjamin, and Charlotte are cycling laps around the same track. Lucy completes one lap in 5 minutes, Benjamin in 3 minutes, and Charlotte in 10 minutes. They all start together at the starting line and cycle continuously for 60 minutes.",
    parts: [
      "What is the first time, after the start, that they will all cross over the starting line together?",
      "How many laps will each person complete in the race?",
      "How many times does Benjamin overtake Lucy during this race?"
    ],
    hint: "Find the LCM of their lap times to determine when they meet. Count how many complete laps each person does in 60 minutes.",
    solution: [
      "Part a) Finding when they meet:",
      "• Find LCM of 5, 3, and 10",
      "• Multiples of 5: 5, 10, 15, 20, 25, 30...",
      "• Multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30...",
      "• Multiples of 10: 10, 20, 30...",
      "• LCM = 30 minutes",
      "",
      "Part b) Number of laps in 60 minutes:",
      "• Lucy: 60 ÷ 5 = 12 laps",
      "• Benjamin: 60 ÷ 3 = 20 laps",
      "• Charlotte: 60 ÷ 10 = 6 laps",
      "",
      "Part c) Benjamin overtakes Lucy:",
      "• Benjamin completes 20 laps, Lucy completes 12 laps",
      "• Difference = 20 - 12 = 8 times",
      "• Benjamin overtakes Lucy 8 times"
    ]
  },
  {
    id: 26,
    title: "Height Ratio Problem (Anna and Thomas)",
    question: "The ratio of Anna's height to Thomas's height is 11:17. If the difference in their heights is 42 cm, how tall is Anna?",
    parts: undefined,
    hint: "The difference in ratio parts is 17 - 11 = 6 parts. If 6 parts = 42 cm, find the value of 1 part, then multiply by 11.",
    solution: [
      "Step 1: Find the difference in parts",
      "• Anna : Thomas = 11 : 17",
      "• Difference = 17 - 11 = 6 parts",
      "",
      "Step 2: Find value of one part",
      "• 6 parts = 42 cm",
      "• 1 part = 42 ÷ 6 = 7 cm",
      "",
      "Step 3: Calculate Anna's height",
      "• Anna = 11 parts",
      "• Anna's height = 11 × 7 = 77 cm",
      "",
      "Check: Thomas = 17 × 7 = 119 cm",
      "Difference = 119 - 77 = 42 cm ✓",
      "",
      "Answer: Anna is 77 cm tall"
    ]
  },
  {
    id: 27,
    title: "Daniel's Desk Drawer Ratios",
    question: "In Daniel's desk drawer there are nine blue pens, four green pens, three red pens, eight paperclips, five highlighters and a stapler.",
    parts: [
      "Find the ratio of highlighters to blue pens.",
      "Find the ratio of paperclips to all pens."
    ],
    hint: "Count the items carefully. For part b, remember to add all types of pens together.",
    solution: [
      "Items in desk drawer:",
      "• 9 blue pens",
      "• 4 green pens",
      "• 3 red pens",
      "• 8 paperclips",
      "• 5 highlighters",
      "• 1 stapler",
      "",
      "Part a) Highlighters : Blue pens",
      "• 5 : 9",
      "• Already in simplest form",
      "",
      "Part b) Paperclips : All pens",
      "• Total pens = 9 + 4 + 3 = 16",
      "• Paperclips : Pens = 8 : 16",
      "• Simplify: HCF(8, 16) = 8",
      "• 8 ÷ 8 = 1, 16 ÷ 8 = 2",
      "• Simplified ratio = 1 : 2",
      "",
      "Answers: a) 5:9, b) 1:2"
    ]
  },
  {
    id: 28,
    title: "Prime Factorisation of 756",
    question: "Only one of the following is the correct set of prime factors for 756. A) 756 = 4 × 3 × 63, B) 756 = 12 × 63, C) 756 = 2 × 2 × 3 × 3 × 3 × 7, D) 756 = 2 × 2 × 2 × 4 × 3 × 7",
    parts: [
      "Justify why you can eliminate alternatives A and B straight away.",
      "Show that option C is the correct answer."
    ],
    hint: "Prime factors must all be prime numbers. Check each option to see if all factors are prime.",
    solution: [
      "Part a) Eliminating A and B:",
      "• Option A: 4 × 3 × 63",
      "  - 4 = 2 × 2 (not prime)",
      "  - 63 = 9 × 7 (not prime)",
      "  - Eliminated ✗",
      "",
      "• Option B: 12 × 63",
      "  - 12 = 4 × 3 (not prime)",
      "  - 63 = 9 × 7 (not prime)",
      "  - Eliminated ✗",
      "",
      "• Option D: 2 × 2 × 2 × 4 × 3 × 7",
      "  - 4 = 2 × 2 (not prime)",
      "  - Eliminated ✗",
      "",
      "Part b) Verifying option C:",
      "• Option C: 2 × 2 × 3 × 3 × 3 × 7",
      "• All factors are prime: 2, 3, and 7 ✓",
      "• Check: 2² × 3³ × 7 = 4 × 27 × 7 = 756 ✓",
      "",
      "Answer: C is correct"
    ]
  },
  {
    id: 29,
    title: "Prime Factors and HCF (240 and 180)",
    question: "Express 240 and 180 in prime factor form, then determine the HCF of 240 and 180 by considering the prime factor form.",
    parts: [
      "Express 240 and 180 in prime factor form.",
      "By considering the prime factor form, determine the HCF of 240 and 180."
    ],
    hint: "Use factor trees or repeated division to find prime factors. The HCF is found by taking the lowest power of each common prime factor.",
    solution: [
      "Part a) Prime factorisation:",
      "• 240 = 2 × 120 = 2 × 2 × 60 = 2 × 2 × 2 × 30",
      "  = 2 × 2 × 2 × 2 × 15 = 2 × 2 × 2 × 2 × 3 × 5",
      "  = 2⁴ × 3 × 5",
      "",
      "• 180 = 2 × 90 = 2 × 2 × 45 = 2 × 2 × 9 × 5",
      "  = 2 × 2 × 3 × 3 × 5",
      "  = 2² × 3² × 5",
      "",
      "Part b) Finding HCF:",
      "• 240 = 2⁴ × 3¹ × 5¹",
      "• 180 = 2² × 3² × 5¹",
      "",
      "• Common prime factors: 2, 3, and 5",
      "• Take lowest powers: 2², 3¹, 5¹",
      "• HCF = 2² × 3 × 5 = 4 × 3 × 5 = 60",
      "",
      "Answer: HCF(240, 180) = 60"
    ]
  },
  {
    id: 30,
    title: "Matching Volume Measurements",
    question: "For each group, identify which volume measurements are the same. Group A: 8.5 L, 850 mL, 8,500 mL. Group B: 3.2 kL, 320 L, 3,200 L.",
    parts: undefined,
    hint: "Convert all measurements to the same unit. Remember: 1 L = 1000 mL, 1 kL = 1000 L.",
    solution: [
      "Group A conversions:",
      "• 8.5 L = 8,500 mL",
      "• 850 mL = 850 mL",
      "• 8,500 mL = 8,500 mL",
      "",
      "• Matching: 8.5 L = 8,500 mL",
      "",
      "Group B conversions:",
      "• 3.2 kL = 3,200 L",
      "• 320 L = 320 L",
      "• 3,200 L = 3,200 L",
      "",
      "• Matching: 3.2 kL = 3,200 L",
      "",
      "Answers:",
      "Group A: 8.5 L and 8,500 mL are the same",
      "Group B: 3.2 kL and 3,200 L are the same"
    ]
  },
  {
    id: 31,
    title: "Car Engine Capacity Conversion",
    question: "The capacities of car engines are sometimes quoted in litres and sometimes in cubic centimetres. Knowing that 1,000 L = 1 m³, answer the following:",
    parts: [
      "A car's engine is said to be 2.4 L. How many cubic centimetres is this?",
      "Another engine has a capacity of 1850 cc. What is this in litres?"
    ],
    hint: "Remember: 1 L = 1000 cm³. To convert from litres to cm³, multiply. To convert from cm³ to litres, divide.",
    solution: [
      "Part a) Converting 2.4 L to cubic centimetres:",
      "• 1 L = 1000 cm³",
      "• 2.4 L = 2.4 × 1000 = 2400 cm³",
      "",
      "Part b) Converting 1850 cc to litres:",
      "• 1000 cm³ = 1 L",
      "• 1850 cm³ = 1850 ÷ 1000 = 1.85 L"
    ]
  },
  {
    id: 32,
    title: "Dividing £84 in Ratio 4:3",
    question: "Divide £84 in the ratio 4:3.",
    parts: undefined,
    hint: "Add the parts of the ratio together to find the total number of shares. Then divide the total amount by this number to find the value of one share.",
    solution: [
      "Step 1: Add the ratio parts",
      "• 4 + 3 = 7 parts total",
      "",
      "Step 2: Find the value of one part",
      "• £84 ÷ 7 = £12 per part",
      "",
      "Step 3: Calculate each share",
      "• First share: 4 × £12 = £48",
      "• Second share: 3 × £12 = £36",
      "",
      "Check: £48 + £36 = £84 ✓"
    ]
  },
  {
    id: 33,
    title: "HCF of 24 and 36",
    question: "The factors of 24 are 1, 2, 3, 4, 6, 8, 12 and 24, and the factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18 and 36. What is the highest common factor of 24 and 36?",
    parts: undefined,
    hint: "Look for the largest number that appears in both lists of factors.",
    solution: [
      "Finding the HCF:",
      "• Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24",
      "• Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36",
      "",
      "• Common factors: 1, 2, 3, 4, 6, 12",
      "• The highest common factor is 12",
      "",
      "Answer: HCF(24, 36) = 12"
    ]
  },
  {
    id: 34,
    title: "Crate of Honey Jars",
    question: "A crate contains 30 jars of honey, each weighing 175 g. What is the mass of the crate in grammes and in kilogrammes?",
    parts: [
      "What is the mass in grammes?",
      "What is the mass in kilogrammes?"
    ],
    hint: "Multiply the number of jars by the weight of each jar. Then convert grammes to kilogrammes by dividing by 1000.",
    solution: [
      "Part a) Mass in grammes:",
      "• Number of jars = 30",
      "• Weight per jar = 175 g",
      "• Total mass = 30 × 175 = 5250 g",
      "",
      "Part b) Mass in kilogrammes:",
      "• 1000 g = 1 kg",
      "• 5250 g = 5250 ÷ 1000 = 5.25 kg",
      "",
      "Answers: a) 5250 g, b) 5.25 kg"
    ]
  },
  {
    id: 35,
    title: "LCM and HCF of 360 and 540",
    question: "Find the LCM and HCF of 360 and 540.",
    parts: undefined,
    hint: "Use prime factorisation. For HCF, take the lowest power of common factors. For LCM, take the highest power of all factors.",
    solution: [
      "Step 1: Prime factorisation",
      "• 360 = 2³ × 3² × 5",
      "• 540 = 2² × 3³ × 5",
      "",
      "Step 2: Find HCF",
      "• Common factors: 2, 3, 5",
      "• Take lowest powers: 2², 3², 5¹",
      "• HCF = 4 × 9 × 5 = 180",
      "",
      "Step 3: Find LCM",
      "• All factors: 2, 3, 5",
      "• Take highest powers: 2³, 3³, 5¹",
      "• LCM = 8 × 27 × 5 = 1080",
      "",
      "Answers: HCF = 180, LCM = 1080"
    ]
  },
  {
    id: 36,
    title: "Shaded Area Ratio (Alternative Triangle)",
    question: "What is the ratio of the shaded area to the unshaded area in this triangle? (The triangle is divided into sections with some parts shaded in a different pattern)",
    parts: undefined,
    hint: "Count the number of equal sections that are shaded and unshaded. The triangle appears to be divided into equal parts.",
    solution: [
      "Analysing the triangle:",
      "• The triangle is divided into equal sections",
      "• Count shaded sections: 3 sections",
      "• Count unshaded sections: 6 sections",
      "",
      "Writing the ratio:",
      "• Shaded : Unshaded = 3 : 6",
      "",
      "Simplify the ratio:",
      "• HCF(3, 6) = 3",
      "• 3 ÷ 3 = 1",
      "• 6 ÷ 3 = 2",
      "",
      "Answer: 1:2"
    ]
  }
];

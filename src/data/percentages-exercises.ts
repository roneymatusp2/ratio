import { ExtraExercise } from './extra-exercises-new';

/**
 * PERCENTAGES UNIT - 100 Differentiated Exercises
 * Form 2 Mathematics (UK Secondary School)
 * British English, British Units (£, kg, metres, cm)
 * AI Evaluation: Gemini 2.5 Flash Lite Preview 09-2025
 */

export const percentagesExercises: ExtraExercise[] = [
  // ============================================================================
  // SECTION 1: FRACTIONS AND PERCENTAGES (Exercises 1-20)
  // ============================================================================
  
  // Exercises 1-5: Easy - Convert simple percentages to fractions
  {
    id: 1001,
    title: "Convert 50% to a Fraction",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [
      {
        question: "Convert 50% to a fraction in its simplest form.",
        hint: "Write the percentage as a fraction over 100, then simplify by dividing both numerator and denominator by their HCF.",
        solution: [
          "Step 1: Write as a fraction over 100",
          "• 50% = 50/100",
          "",
          "Step 2: Simplify",
          "• HCF(50, 100) = 50",
          "• 50 ÷ 50 = 1",
          "• 100 ÷ 50 = 2",
          "",
          "Answer: 1/2"
        ],
        correctAnswers: ["1/2", "½", "one half", "0.5"],
        commonMistakes: [
          { answer: "50/100", feedback: "This is correct but not in simplest form. Divide both numbers by 50." },
          { answer: "5/10", feedback: "You're on the right track, but this can be simplified further. Divide by 5." }
        ]
      }
    ]
  },
  {
    id: 1002,
    title: "Convert 25% to a Fraction",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Convert 25% to a fraction in its simplest form.",
      hint: "25% means 25 out of 100. Simplify by finding the HCF.",
      solution: ["Step 1: 25% = 25/100", "Step 2: HCF(25, 100) = 25", "Step 3: 25 ÷ 25 = 1, 100 ÷ 25 = 4", "Answer: 1/4"],
      correctAnswers: ["1/4", "¼", "one quarter", "0.25"],
      commonMistakes: [{ answer: "25/100", feedback: "Simplify by dividing both by 25." }]
    }]
  },
  {
    id: 1003,
    title: "Convert 10% to a Fraction",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Convert 10% to a fraction in its simplest form.",
      hint: "Write 10 over 100 and simplify.",
      solution: ["Step 1: 10% = 10/100", "Step 2: HCF(10, 100) = 10", "Step 3: 10 ÷ 10 = 1, 100 ÷ 10 = 10", "Answer: 1/10"],
      correctAnswers: ["1/10", "one tenth", "0.1"],
      commonMistakes: [{ answer: "10/100", feedback: "This needs simplifying. Divide both by 10." }]
    }]
  },
  {
    id: 1004,
    title: "Convert 75% to a Fraction",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Convert 75% to a fraction in its simplest form.",
      hint: "75% = 75/100. Find the HCF to simplify.",
      solution: ["Step 1: 75% = 75/100", "Step 2: HCF(75, 100) = 25", "Step 3: 75 ÷ 25 = 3, 100 ÷ 25 = 4", "Answer: 3/4"],
      correctAnswers: ["3/4", "¾", "three quarters", "0.75"],
      commonMistakes: [{ answer: "75/100", feedback: "Simplify by dividing both by 25." }]
    }]
  },
  {
    id: 1005,
    title: "Convert 20% to a Fraction",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Convert 20% to a fraction in its simplest form.",
      hint: "20% = 20/100. Simplify by dividing by the HCF.",
      solution: ["Step 1: 20% = 20/100", "Step 2: HCF(20, 100) = 20", "Step 3: 20 ÷ 20 = 1, 100 ÷ 20 = 5", "Answer: 1/5"],
      correctAnswers: ["1/5", "one fifth", "0.2"],
      commonMistakes: [{ answer: "2/10", feedback: "You can simplify further. Divide by 2." }]
    }]
  },

  // Exercises 6-10: Easy - Convert simple fractions to percentages
  {
    id: 1006,
    title: "Convert 1/2 to a Percentage",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Convert the fraction 1/2 to a percentage.",
      hint: "Multiply the fraction by 100 to convert to a percentage.",
      solution: ["Step 1: Multiply by 100", "• (1/2) × 100 = 50", "Answer: 50%"],
      correctAnswers: ["50%", "50", "fifty percent"],
      commonMistakes: [{ answer: "0.5%", feedback: "You've converted to a decimal, not a percentage. Multiply by 100." }]
    }]
  },
  {
    id: 1007,
    title: "Convert 1/4 to a Percentage",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Convert the fraction 1/4 to a percentage.",
      hint: "Multiply by 100: (1/4) × 100.",
      solution: ["Step 1: (1/4) × 100 = 100/4 = 25", "Answer: 25%"],
      correctAnswers: ["25%", "25", "twenty-five percent"],
      commonMistakes: [{ answer: "0.25%", feedback: "That's the decimal. Multiply by 100 for the percentage." }]
    }]
  },
  {
    id: 1008,
    title: "Convert 3/4 to a Percentage",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Convert the fraction 3/4 to a percentage.",
      hint: "Multiply by 100: (3/4) × 100.",
      solution: ["Step 1: (3/4) × 100 = 300/4 = 75", "Answer: 75%"],
      correctAnswers: ["75%", "75", "seventy-five percent"],
      commonMistakes: [{ answer: "0.75%", feedback: "Multiply by 100 to get the percentage." }]
    }]
  },
  {
    id: 1009,
    title: "Convert 1/5 to a Percentage",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Convert the fraction 1/5 to a percentage.",
      hint: "Multiply by 100: (1/5) × 100.",
      solution: ["Step 1: (1/5) × 100 = 100/5 = 20", "Answer: 20%"],
      correctAnswers: ["20%", "20", "twenty percent"],
      commonMistakes: [{ answer: "5%", feedback: "You've inverted the fraction. 1/5 = 20%, not 5%." }]
    }]
  },
  {
    id: 1010,
    title: "Convert 1/10 to a Percentage",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Convert the fraction 1/10 to a percentage.",
      hint: "Multiply by 100: (1/10) × 100.",
      solution: ["Step 1: (1/10) × 100 = 100/10 = 10", "Answer: 10%"],
      correctAnswers: ["10%", "10", "ten percent"],
      commonMistakes: [{ answer: "1%", feedback: "Remember to multiply by 100, not 10." }]
    }]
  },

  // Exercises 11-15: Medium - Convert complex percentages to fractions
  {
    id: 1011,
    title: "Convert 8% to a Fraction",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Convert 8% to a fraction in its simplest form.",
      hint: "8% = 8/100. Find the HCF to simplify.",
      solution: ["Step 1: 8% = 8/100", "Step 2: HCF(8, 100) = 4", "Step 3: 8 ÷ 4 = 2, 100 ÷ 4 = 25", "Answer: 2/25"],
      correctAnswers: ["2/25", "0.08"],
      commonMistakes: [{ answer: "8/100", feedback: "Simplify by dividing both by 4." }]
    }]
  },
  {
    id: 1012,
    title: "Convert 36% to a Fraction",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Convert 36% to a fraction in its simplest form.",
      hint: "36% = 36/100. Find the HCF.",
      solution: ["Step 1: 36% = 36/100", "Step 2: HCF(36, 100) = 4", "Step 3: 36 ÷ 4 = 9, 100 ÷ 4 = 25", "Answer: 9/25"],
      correctAnswers: ["9/25", "0.36"],
      commonMistakes: [{ answer: "36/100", feedback: "Simplify by dividing both by 4." }]
    }]
  },
  {
    id: 1013,
    title: "Convert 12.5% to a Fraction",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Convert 12.5% to a fraction in its simplest form.",
      hint: "12.5% = 12.5/100. Multiply both by 10 to remove the decimal, then simplify.",
      solution: ["Step 1: 12.5% = 12.5/100", "Step 2: Multiply by 10: 125/1000", "Step 3: HCF(125, 1000) = 125", "Step 4: 125 ÷ 125 = 1, 1000 ÷ 125 = 8", "Answer: 1/8"],
      correctAnswers: ["1/8", "⅛", "0.125"],
      commonMistakes: [{ answer: "125/1000", feedback: "Simplify by dividing both by 125." }]
    }]
  },
  {
    id: 1014,
    title: "Convert 15% to a Fraction",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Convert 15% to a fraction in its simplest form.",
      hint: "15% = 15/100. Find the HCF.",
      solution: ["Step 1: 15% = 15/100", "Step 2: HCF(15, 100) = 5", "Step 3: 15 ÷ 5 = 3, 100 ÷ 5 = 20", "Answer: 3/20"],
      correctAnswers: ["3/20", "0.15"],
      commonMistakes: [{ answer: "15/100", feedback: "Simplify by dividing both by 5." }]
    }]
  },
  {
    id: 1015,
    title: "Convert 45% to a Fraction",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Convert 45% to a fraction in its simplest form.",
      hint: "45% = 45/100. Find the HCF.",
      solution: ["Step 1: 45% = 45/100", "Step 2: HCF(45, 100) = 5", "Step 3: 45 ÷ 5 = 9, 100 ÷ 5 = 20", "Answer: 9/20"],
      correctAnswers: ["9/20", "0.45"],
      commonMistakes: [{ answer: "45/100", feedback: "Simplify by dividing both by 5." }]
    }]
  },

  // Exercises 16-20: Medium - Convert complex fractions to percentages
  {
    id: 1016,
    title: "Convert 3/8 to a Percentage",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Convert the fraction 3/8 to a percentage.",
      hint: "Multiply by 100: (3/8) × 100.",
      solution: ["Step 1: (3/8) × 100 = 300/8", "Step 2: 300 ÷ 8 = 37.5", "Answer: 37.5%"],
      correctAnswers: ["37.5%", "37.5", "37½%"],
      commonMistakes: [{ answer: "38%", feedback: "Be precise. 3/8 = 37.5%, not 38%." }]
    }]
  },
  {
    id: 1017,
    title: "Convert 1/3 to a Percentage",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Convert the fraction 1/3 to a percentage. Give your answer to 1 decimal place.",
      hint: "Multiply by 100 and divide: (1/3) × 100.",
      solution: ["Step 1: (1/3) × 100 = 100/3", "Step 2: 100 ÷ 3 = 33.333...", "Step 3: Round to 1 d.p. = 33.3", "Answer: 33.3%"],
      correctAnswers: ["33.3%", "33.3", "33⅓%", "33.33%"],
      commonMistakes: [{ answer: "33%", feedback: "Be more precise. 1/3 = 33.3% (1 d.p.)." }]
    }]
  },
  {
    id: 1018,
    title: "Convert 2/5 to a Percentage",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Convert the fraction 2/5 to a percentage.",
      hint: "Multiply by 100: (2/5) × 100.",
      solution: ["Step 1: (2/5) × 100 = 200/5", "Step 2: 200 ÷ 5 = 40", "Answer: 40%"],
      correctAnswers: ["40%", "40", "forty percent"],
      commonMistakes: [{ answer: "25%", feedback: "Check your calculation. 2/5 = 40%, not 25%." }]
    }]
  },
  {
    id: 1019,
    title: "Convert 5/8 to a Percentage",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Convert the fraction 5/8 to a percentage.",
      hint: "Multiply by 100: (5/8) × 100.",
      solution: ["Step 1: (5/8) × 100 = 500/8", "Step 2: 500 ÷ 8 = 62.5", "Answer: 62.5%"],
      correctAnswers: ["62.5%", "62.5", "62½%"],
      commonMistakes: [{ answer: "63%", feedback: "Be precise. 5/8 = 62.5%, not 63%." }]
    }]
  },
  {
    id: 1020,
    title: "Convert 7/10 to a Percentage",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Convert the fraction 7/10 to a percentage.",
      hint: "Multiply by 100: (7/10) × 100.",
      solution: ["Step 1: (7/10) × 100 = 700/10", "Step 2: 700 ÷ 10 = 70", "Answer: 70%"],
      correctAnswers: ["70%", "70", "seventy percent"],
      commonMistakes: [{ answer: "7%", feedback: "Remember to multiply by 100." }]
    }]
  },

  // ============================================================================
  // SECTION 2: PERCENTAGE OF A QUANTITY (Exercises 21-40)
  // ============================================================================
  
  // Exercises 21-25: Easy (Non-Calculator) - Simple percentages
  {
    id: 1021,
    title: "10% of £80",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Find 10% of £80.",
      hint: "10% means divide by 10.",
      solution: ["Step 1: 10% = ÷ 10", "Step 2: £80 ÷ 10 = £8", "Answer: £8"],
      correctAnswers: ["£8", "8", "£8.00", "8.00"],
      commonMistakes: [{ answer: "£80", feedback: "You need to find 10%, not 100%. Divide by 10." }]
    }]
  },
  {
    id: 1022,
    title: "50% of 60 kg",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Find 50% of 60 kg.",
      hint: "50% means half, so divide by 2.",
      solution: ["Step 1: 50% = ÷ 2", "Step 2: 60 kg ÷ 2 = 30 kg", "Answer: 30 kg"],
      correctAnswers: ["30 kg", "30kg", "30"],
      commonMistakes: [{ answer: "25 kg", feedback: "50% is half. 60 ÷ 2 = 30 kg." }]
    }]
  },
  {
    id: 1023,
    title: "25% of £40",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Find 25% of £40.",
      hint: "25% means one quarter, so divide by 4.",
      solution: ["Step 1: 25% = ÷ 4", "Step 2: £40 ÷ 4 = £10", "Answer: £10"],
      correctAnswers: ["£10", "10", "£10.00"],
      commonMistakes: [{ answer: "£25", feedback: "25% is one quarter. Divide by 4, not subtract 25." }]
    }]
  },
  {
    id: 1024,
    title: "10% of 120 m",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Find 10% of 120 m.",
      hint: "10% means divide by 10.",
      solution: ["Step 1: 10% = ÷ 10", "Step 2: 120 m ÷ 10 = 12 m", "Answer: 12 m"],
      correctAnswers: ["12 m", "12m", "12", "12 metres"],
      commonMistakes: [{ answer: "110 m", feedback: "You've subtracted 10, not found 10%. Divide by 10." }]
    }]
  },
  {
    id: 1025,
    title: "50% of £90",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Find 50% of £90.",
      hint: "50% is half.",
      solution: ["Step 1: 50% = ÷ 2", "Step 2: £90 ÷ 2 = £45", "Answer: £45"],
      correctAnswers: ["£45", "45", "£45.00"],
      commonMistakes: [{ answer: "£40", feedback: "50% is exactly half. 90 ÷ 2 = 45." }]
    }]
  },

  // Exercises 26-30: Medium (Non-Calculator) - Trickier percentages
  {
    id: 1026,
    title: "75% of £32",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Find 75% of £32.",
      hint: "75% = 3/4. Find 1/4 first, then multiply by 3.",
      solution: ["Step 1: 75% = 3/4", "Step 2: 1/4 of £32 = £32 ÷ 4 = £8", "Step 3: 3/4 = 3 × £8 = £24", "Answer: £24"],
      correctAnswers: ["£24", "24", "£24.00"],
      commonMistakes: [{ answer: "£8", feedback: "That's 25%, not 75%. Multiply by 3." }]
    }]
  },
  {
    id: 1027,
    title: "30% of 80 m",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Find 30% of 80 m.",
      hint: "Find 10% first, then multiply by 3.",
      solution: ["Step 1: 10% of 80 m = 8 m", "Step 2: 30% = 3 × 10%", "Step 3: 30% = 3 × 8 m = 24 m", "Answer: 24 m"],
      correctAnswers: ["24 m", "24m", "24", "24 metres"],
      commonMistakes: [{ answer: "8 m", feedback: "That's 10%. Multiply by 3 for 30%." }]
    }]
  },
  {
    id: 1028,
    title: "20% of £65",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Find 20% of £65.",
      hint: "Find 10% first, then double it.",
      solution: ["Step 1: 10% of £65 = £6.50", "Step 2: 20% = 2 × 10%", "Step 3: 20% = 2 × £6.50 = £13", "Answer: £13"],
      correctAnswers: ["£13", "13", "£13.00"],
      commonMistakes: [{ answer: "£6.50", feedback: "That's 10%. Double it for 20%." }]
    }]
  },
  {
    id: 1029,
    title: "75% of 48 kg",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Find 75% of 48 kg.",
      hint: "75% = 3/4. Find 1/4 first.",
      solution: ["Step 1: 1/4 of 48 kg = 48 ÷ 4 = 12 kg", "Step 2: 3/4 = 3 × 12 kg = 36 kg", "Answer: 36 kg"],
      correctAnswers: ["36 kg", "36kg", "36"],
      commonMistakes: [{ answer: "12 kg", feedback: "That's 25%. Multiply by 3 for 75%." }]
    }]
  },
  {
    id: 1030,
    title: "40% of 55 m",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Find 40% of 55 m.",
      hint: "Find 10% first, then multiply by 4.",
      solution: ["Step 1: 10% of 55 m = 5.5 m", "Step 2: 40% = 4 × 10%", "Step 3: 40% = 4 × 5.5 m = 22 m", "Answer: 22 m"],
      correctAnswers: ["22 m", "22m", "22", "22 metres"],
      commonMistakes: [{ answer: "5.5 m", feedback: "That's 10%. Multiply by 4 for 40%." }]
    }]
  },

  // Exercises 31-35: Medium (Calculator) - Using multipliers
  {
    id: 1031,
    title: "16% of £40",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Find 16% of £40.",
      hint: "Convert 16% to a decimal (0.16) and multiply.",
      solution: ["Step 1: 16% = 0.16", "Step 2: £40 × 0.16 = £6.40", "Answer: £6.40"],
      correctAnswers: ["£6.40", "6.40", "£6.4", "6.4"],
      commonMistakes: [{ answer: "£64", feedback: "You've multiplied by 16, not 0.16." }]
    }]
  },
  {
    id: 1032,
    title: "17.5% of £900",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Find 17.5% of £900.",
      hint: "Convert 17.5% to a decimal (0.175) and multiply.",
      solution: ["Step 1: 17.5% = 0.175", "Step 2: £900 × 0.175 = £157.50", "Answer: £157.50"],
      correctAnswers: ["£157.50", "157.50", "£157.5", "157.5"],
      commonMistakes: [{ answer: "£1575", feedback: "You've multiplied by 17.5, not 0.175." }]
    }]
  },
  {
    id: 1033,
    title: "12% of £250",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Find 12% of £250.",
      hint: "12% = 0.12. Multiply £250 by 0.12.",
      solution: ["Step 1: 12% = 0.12", "Step 2: £250 × 0.12 = £30", "Answer: £30"],
      correctAnswers: ["£30", "30", "£30.00"],
      commonMistakes: [{ answer: "£300", feedback: "You've multiplied by 12, not 0.12." }]
    }]
  },
  {
    id: 1034,
    title: "8.5% of £600",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Find 8.5% of £600.",
      hint: "8.5% = 0.085. Multiply £600 by 0.085.",
      solution: ["Step 1: 8.5% = 0.085", "Step 2: £600 × 0.085 = £51", "Answer: £51"],
      correctAnswers: ["£51", "51", "£51.00"],
      commonMistakes: [{ answer: "£510", feedback: "You've multiplied by 8.5, not 0.085." }]
    }]
  },
  {
    id: 1035,
    title: "22% of £350",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Find 22% of £350.",
      hint: "22% = 0.22. Multiply £350 by 0.22.",
      solution: ["Step 1: 22% = 0.22", "Step 2: £350 × 0.22 = £77", "Answer: £77"],
      correctAnswers: ["£77", "77", "£77.00"],
      commonMistakes: [{ answer: "£770", feedback: "You've multiplied by 22, not 0.22." }]
    }]
  },

  // Exercises 36-40: Hard (Word Problems)
  {
    id: 1036,
    title: "School Trip Attendance",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A school has 280 pupils. 85% go on a trip. How many pupils go on the trip?",
      hint: "Find 85% of 280. Use the multiplier 0.85.",
      solution: ["Step 1: 85% = 0.85", "Step 2: 280 × 0.85 = 238", "Answer: 238 pupils"],
      correctAnswers: ["238", "238 pupils"],
      commonMistakes: [{ answer: "42", feedback: "That's 15% (who don't go). Calculate 85% of 280." }]
    }]
  },
  {
    id: 1037,
    title: "VAT Calculation",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A laptop costs £450 before VAT. VAT is charged at 20%. How much is the VAT?",
      hint: "Find 20% of £450.",
      solution: ["Step 1: 20% = 0.20", "Step 2: £450 × 0.20 = £90", "Answer: £90"],
      correctAnswers: ["£90", "90", "£90.00"],
      commonMistakes: [{ answer: "£540", feedback: "That's the total price. The question asks for the VAT amount only." }]
    }]
  },
  {
    id: 1038,
    title: "Discount on Trainers",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A pair of trainers costs £65. They are reduced by 30% in a sale. How much is the discount?",
      hint: "Find 30% of £65.",
      solution: ["Step 1: 30% = 0.30", "Step 2: £65 × 0.30 = £19.50", "Answer: £19.50"],
      correctAnswers: ["£19.50", "19.50", "£19.5", "19.5"],
      commonMistakes: [{ answer: "£45.50", feedback: "That's the sale price. The question asks for the discount amount." }]
    }]
  },
  {
    id: 1039,
    title: "Test Score Percentage",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "In a test, Sarah scored 72% out of a total of 150 marks. How many marks did she score?",
      hint: "Find 72% of 150.",
      solution: ["Step 1: 72% = 0.72", "Step 2: 150 × 0.72 = 108", "Answer: 108 marks"],
      correctAnswers: ["108", "108 marks"],
      commonMistakes: [{ answer: "72", feedback: "That's the percentage. Calculate 72% of 150 marks." }]
    }]
  },
  {
    id: 1040,
    title: "Population Increase",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A town has a population of 45,000. The population increases by 12%. How many people is the increase?",
      hint: "Find 12% of 45,000.",
      solution: ["Step 1: 12% = 0.12", "Step 2: 45,000 × 0.12 = 5,400", "Answer: 5,400 people"],
      correctAnswers: ["5400", "5,400", "5400 people", "5,400 people"],
      commonMistakes: [{ answer: "50400", feedback: "That's the new population. The question asks for the increase only." }]
    }]
  },

  // ============================================================================
  // SECTION 3: WRITING AS A PERCENTAGE (Exercises 41-55)
  // ============================================================================
  
  // Exercises 41-45: Easy - Express one quantity as a percentage
  {
    id: 1041,
    title: "8 out of 20",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Express 8 out of 20 as a percentage.",
      hint: "Write as a fraction (8/20), then multiply by 100.",
      solution: ["Step 1: Write as fraction: 8/20", "Step 2: Multiply by 100: (8/20) × 100", "Step 3: = 800/20 = 40", "Answer: 40%"],
      correctAnswers: ["40%", "40", "forty percent"],
      commonMistakes: [{ answer: "8%", feedback: "You need to calculate (8/20) × 100, not just use 8." }]
    }]
  },
  {
    id: 1042,
    title: "15 out of 50",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Express 15 out of 50 as a percentage.",
      hint: "Write as a fraction (15/50), then multiply by 100.",
      solution: ["Step 1: 15/50", "Step 2: (15/50) × 100 = 1500/50 = 30", "Answer: 30%"],
      correctAnswers: ["30%", "30", "thirty percent"],
      commonMistakes: [{ answer: "15%", feedback: "Calculate (15/50) × 100." }]
    }]
  },
  {
    id: 1043,
    title: "12 out of 40",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Express 12 out of 40 as a percentage.",
      hint: "Write as a fraction (12/40), then multiply by 100.",
      solution: ["Step 1: 12/40", "Step 2: (12/40) × 100 = 1200/40 = 30", "Answer: 30%"],
      correctAnswers: ["30%", "30", "thirty percent"],
      commonMistakes: [{ answer: "12%", feedback: "Calculate (12/40) × 100." }]
    }]
  },
  {
    id: 1044,
    title: "25 out of 100",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Express 25 out of 100 as a percentage.",
      hint: "Out of 100 makes it easy - the number is the percentage.",
      solution: ["Step 1: 25/100", "Step 2: (25/100) × 100 = 25", "Answer: 25%"],
      correctAnswers: ["25%", "25", "twenty-five percent"],
      commonMistakes: [{ answer: "0.25%", feedback: "25 out of 100 is simply 25%." }]
    }]
  },
  {
    id: 1045,
    title: "18 out of 30",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Express 18 out of 30 as a percentage.",
      hint: "Write as a fraction (18/30), then multiply by 100.",
      solution: ["Step 1: 18/30", "Step 2: (18/30) × 100 = 1800/30 = 60", "Answer: 60%"],
      correctAnswers: ["60%", "60", "sixty percent"],
      commonMistakes: [{ answer: "18%", feedback: "Calculate (18/30) × 100." }]
    }]
  },

  // Exercises 46-50: Medium - Word problems
  {
    id: 1046,
    title: "Halim's Test Score",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Halim scores 32 out of 80 in a test. Express his score as a percentage.",
      hint: "Write as a fraction (32/80), then multiply by 100.",
      solution: ["Step 1: Score = 32/80", "Step 2: (32/80) × 100 = 3200/80 = 40", "Answer: 40%"],
      correctAnswers: ["40%", "40", "forty percent"],
      commonMistakes: [{ answer: "32%", feedback: "Calculate (32/80) × 100, not just 32." }]
    }]
  },
  {
    id: 1047,
    title: "Football Match Attendance",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "A football stadium has 25,000 seats. 18,000 people attend a match. What percentage of seats are filled?",
      hint: "Calculate (18,000/25,000) × 100.",
      solution: ["Step 1: Fraction = 18,000/25,000", "Step 2: (18,000/25,000) × 100 = 72", "Answer: 72%"],
      correctAnswers: ["72%", "72", "seventy-two percent"],
      commonMistakes: [{ answer: "7000", feedback: "That's the number of empty seats. Calculate the percentage filled." }]
    }]
  },
  {
    id: 1048,
    title: "Exam Pass Rate",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "In a class of 32 students, 28 passed an exam. What percentage passed?",
      hint: "Calculate (28/32) × 100.",
      solution: ["Step 1: Fraction = 28/32", "Step 2: (28/32) × 100 = 2800/32 = 87.5", "Answer: 87.5%"],
      correctAnswers: ["87.5%", "87.5", "87½%"],
      commonMistakes: [{ answer: "28%", feedback: "Calculate (28/32) × 100." }]
    }]
  },
  {
    id: 1049,
    title: "Survey Results",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "In a survey of 250 people, 175 said they liked chocolate. What percentage liked chocolate?",
      hint: "Calculate (175/250) × 100.",
      solution: ["Step 1: Fraction = 175/250", "Step 2: (175/250) × 100 = 17500/250 = 70", "Answer: 70%"],
      correctAnswers: ["70%", "70", "seventy percent"],
      commonMistakes: [{ answer: "75", feedback: "That's the number who didn't like it. Calculate (175/250) × 100." }]
    }]
  },
  {
    id: 1050,
    title: "Homework Completion",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Out of 40 homework tasks, James completed 36. What percentage did he complete?",
      hint: "Calculate (36/40) × 100.",
      solution: ["Step 1: Fraction = 36/40", "Step 2: (36/40) × 100 = 3600/40 = 90", "Answer: 90%"],
      correctAnswers: ["90%", "90", "ninety percent"],
      commonMistakes: [{ answer: "36%", feedback: "Calculate (36/40) × 100." }]
    }]
  },

  // Exercises 51-55: Hard - Unit conversion required
  {
    id: 1051,
    title: "Express 2 km as Percentage of 800 m",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "Express 2 km as a percentage of 800 m.",
      hint: "Convert to the same units first. 2 km = 2000 m. Then calculate (2000/800) × 100.",
      solution: ["Step 1: Convert: 2 km = 2000 m", "Step 2: Fraction = 2000/800", "Step 3: (2000/800) × 100 = 250", "Answer: 250%"],
      correctAnswers: ["250%", "250", "two hundred and fifty percent"],
      commonMistakes: [{ answer: "25%", feedback: "2 km is larger than 800 m, so the answer must be over 100%." }]
    }]
  },
  {
    id: 1052,
    title: "Express 450 g as Percentage of 1.5 kg",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "Express 450 g as a percentage of 1.5 kg.",
      hint: "Convert to the same units. 1.5 kg = 1500 g. Then calculate (450/1500) × 100.",
      solution: ["Step 1: Convert: 1.5 kg = 1500 g", "Step 2: Fraction = 450/1500", "Step 3: (450/1500) × 100 = 30", "Answer: 30%"],
      correctAnswers: ["30%", "30", "thirty percent"],
      commonMistakes: [{ answer: "450%", feedback: "450 g is less than 1500 g. Check your conversion." }]
    }]
  },
  {
    id: 1053,
    title: "Express 75 cm as Percentage of 2 m",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "Express 75 cm as a percentage of 2 m.",
      hint: "Convert to the same units. 2 m = 200 cm. Then calculate (75/200) × 100.",
      solution: ["Step 1: Convert: 2 m = 200 cm", "Step 2: Fraction = 75/200", "Step 3: (75/200) × 100 = 37.5", "Answer: 37.5%"],
      correctAnswers: ["37.5%", "37.5", "37½%"],
      commonMistakes: [{ answer: "75%", feedback: "Convert 2 m to 200 cm first." }]
    }]
  },
  {
    id: 1054,
    title: "Express 300 mL as Percentage of 2 L",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "Express 300 mL as a percentage of 2 litres.",
      hint: "Convert to the same units. 2 L = 2000 mL. Then calculate (300/2000) × 100.",
      solution: ["Step 1: Convert: 2 L = 2000 mL", "Step 2: Fraction = 300/2000", "Step 3: (300/2000) × 100 = 15", "Answer: 15%"],
      correctAnswers: ["15%", "15", "fifteen percent"],
      commonMistakes: [{ answer: "300%", feedback: "300 mL is less than 2000 mL. Check your conversion." }]
    }]
  },
  {
    id: 1055,
    title: "Express 1.2 kg as Percentage of 400 g",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "Express 1.2 kg as a percentage of 400 g.",
      hint: "Convert to the same units. 1.2 kg = 1200 g. Then calculate (1200/400) × 100.",
      solution: ["Step 1: Convert: 1.2 kg = 1200 g", "Step 2: Fraction = 1200/400", "Step 3: (1200/400) × 100 = 300", "Answer: 300%"],
      correctAnswers: ["300%", "300", "three hundred percent"],
      commonMistakes: [{ answer: "30%", feedback: "1.2 kg is larger than 400 g, so the answer must be over 100%." }]
    }]
  },

  // ============================================================================
  // SECTION 4: PERCENTAGE INCREASE AND DECREASE (Exercises 56-75)
  // ============================================================================
  
  // Exercises 56-60: Easy - Increase by simple percentage
  {
    id: 1056,
    title: "Increase £50 by 10%",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Increase £50 by 10%.",
      hint: "Find 10% of £50, then add it to £50. Or use multiplier 1.10.",
      solution: ["Step 1: 10% of £50 = £5", "Step 2: £50 + £5 = £55", "Alternative: £50 × 1.10 = £55", "Answer: £55"],
      correctAnswers: ["£55", "55", "£55.00"],
      commonMistakes: [{ answer: "£5", feedback: "That's the increase. Add it to the original £50." }]
    }]
  },
  {
    id: 1057,
    title: "Increase 80 kg by 20%",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Increase 80 kg by 20%.",
      hint: "Find 20% of 80 kg, then add it. Or use multiplier 1.20.",
      solution: ["Step 1: 20% of 80 kg = 16 kg", "Step 2: 80 kg + 16 kg = 96 kg", "Alternative: 80 × 1.20 = 96 kg", "Answer: 96 kg"],
      correctAnswers: ["96 kg", "96kg", "96"],
      commonMistakes: [{ answer: "16 kg", feedback: "That's the increase. Add it to 80 kg." }]
    }]
  },
  {
    id: 1058,
    title: "Increase £120 by 10%",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Increase £120 by 10%.",
      hint: "Use multiplier 1.10.",
      solution: ["Step 1: Multiplier = 1 + 0.10 = 1.10", "Step 2: £120 × 1.10 = £132", "Answer: £132"],
      correctAnswers: ["£132", "132", "£132.00"],
      commonMistakes: [{ answer: "£12", feedback: "That's the increase. The new amount is £132." }]
    }]
  },
  {
    id: 1059,
    title: "Increase 60 m by 15%",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Increase 60 m by 15%.",
      hint: "Use multiplier 1.15.",
      solution: ["Step 1: Multiplier = 1 + 0.15 = 1.15", "Step 2: 60 m × 1.15 = 69 m", "Answer: 69 m"],
      correctAnswers: ["69 m", "69m", "69", "69 metres"],
      commonMistakes: [{ answer: "9 m", feedback: "That's the increase. The new amount is 69 m." }]
    }]
  },
  {
    id: 1060,
    title: "Increase £200 by 5%",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Increase £200 by 5%.",
      hint: "Use multiplier 1.05.",
      solution: ["Step 1: Multiplier = 1 + 0.05 = 1.05", "Step 2: £200 × 1.05 = £210", "Answer: £210"],
      correctAnswers: ["£210", "210", "£210.00"],
      commonMistakes: [{ answer: "£10", feedback: "That's the increase. The new amount is £210." }]
    }]
  },

  // Exercises 61-65: Easy - Decrease by simple percentage
  {
    id: 1061,
    title: "Decrease £80 by 10%",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Decrease £80 by 10%.",
      hint: "Find 10% of £80, then subtract it. Or use multiplier 0.90.",
      solution: ["Step 1: 10% of £80 = £8", "Step 2: £80 - £8 = £72", "Alternative: £80 × 0.90 = £72", "Answer: £72"],
      correctAnswers: ["£72", "72", "£72.00"],
      commonMistakes: [{ answer: "£8", feedback: "That's the decrease. Subtract it from £80." }]
    }]
  },
  {
    id: 1062,
    title: "Decrease 60 kg by 50%",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Decrease 60 kg by 50%.",
      hint: "50% means half. Use multiplier 0.50.",
      solution: ["Step 1: Multiplier = 1 - 0.50 = 0.50", "Step 2: 60 kg × 0.50 = 30 kg", "Answer: 30 kg"],
      correctAnswers: ["30 kg", "30kg", "30"],
      commonMistakes: [{ answer: "50 kg", feedback: "50% decrease means multiply by 0.50, not subtract 10." }]
    }]
  },
  {
    id: 1063,
    title: "Decrease £150 by 20%",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Decrease £150 by 20%.",
      hint: "Use multiplier 0.80.",
      solution: ["Step 1: Multiplier = 1 - 0.20 = 0.80", "Step 2: £150 × 0.80 = £120", "Answer: £120"],
      correctAnswers: ["£120", "120", "£120.00"],
      commonMistakes: [{ answer: "£30", feedback: "That's the decrease. The new amount is £120." }]
    }]
  },
  {
    id: 1064,
    title: "Decrease 90 m by 10%",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Decrease 90 m by 10%.",
      hint: "Use multiplier 0.90.",
      solution: ["Step 1: Multiplier = 1 - 0.10 = 0.90", "Step 2: 90 m × 0.90 = 81 m", "Answer: 81 m"],
      correctAnswers: ["81 m", "81m", "81", "81 metres"],
      commonMistakes: [{ answer: "9 m", feedback: "That's the decrease. The new amount is 81 m." }]
    }]
  },
  {
    id: 1065,
    title: "Decrease £400 by 25%",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "Decrease £400 by 25%.",
      hint: "Use multiplier 0.75.",
      solution: ["Step 1: Multiplier = 1 - 0.25 = 0.75", "Step 2: £400 × 0.75 = £300", "Answer: £300"],
      correctAnswers: ["£300", "300", "£300.00"],
      commonMistakes: [{ answer: "£100", feedback: "That's the decrease. The new amount is £300." }]
    }]
  },

  // Exercises 66-70: Medium - Increase by complex percentage
  {
    id: 1066,
    title: "Increase £800 by 16%",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Increase £800 by 16%.",
      hint: "Use multiplier 1.16.",
      solution: ["Step 1: Multiplier = 1 + 0.16 = 1.16", "Step 2: £800 × 1.16 = £928", "Answer: £928"],
      correctAnswers: ["£928", "928", "£928.00"],
      commonMistakes: [{ answer: "£128", feedback: "That's the increase. The new amount is £928." }]
    }]
  },
  {
    id: 1067,
    title: "Increase 250 kg by 18%",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Increase 250 kg by 18%.",
      hint: "Use multiplier 1.18.",
      solution: ["Step 1: Multiplier = 1 + 0.18 = 1.18", "Step 2: 250 kg × 1.18 = 295 kg", "Answer: 295 kg"],
      correctAnswers: ["295 kg", "295kg", "295"],
      commonMistakes: [{ answer: "45 kg", feedback: "That's the increase. The new amount is 295 kg." }]
    }]
  },
  {
    id: 1068,
    title: "Increase £650 by 12%",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Increase £650 by 12%.",
      hint: "Use multiplier 1.12.",
      solution: ["Step 1: Multiplier = 1 + 0.12 = 1.12", "Step 2: £650 × 1.12 = £728", "Answer: £728"],
      correctAnswers: ["£728", "728", "£728.00"],
      commonMistakes: [{ answer: "£78", feedback: "That's the increase. The new amount is £728." }]
    }]
  },
  {
    id: 1069,
    title: "Increase 180 m by 35%",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Increase 180 m by 35%.",
      hint: "Use multiplier 1.35.",
      solution: ["Step 1: Multiplier = 1 + 0.35 = 1.35", "Step 2: 180 m × 1.35 = 243 m", "Answer: 243 m"],
      correctAnswers: ["243 m", "243m", "243", "243 metres"],
      commonMistakes: [{ answer: "63 m", feedback: "That's the increase. The new amount is 243 m." }]
    }]
  },
  {
    id: 1070,
    title: "Increase £1,200 by 8.5%",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Increase £1,200 by 8.5%.",
      hint: "Use multiplier 1.085.",
      solution: ["Step 1: Multiplier = 1 + 0.085 = 1.085", "Step 2: £1,200 × 1.085 = £1,302", "Answer: £1,302"],
      correctAnswers: ["£1302", "1302", "£1,302", "1,302"],
      commonMistakes: [{ answer: "£102", feedback: "That's the increase. The new amount is £1,302." }]
    }]
  },

  // Exercises 71-75: Medium - Word problems
  {
    id: 1071,
    title: "Salary Increase",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "A salary of £24,000 is increased by 4%. What is the new salary?",
      hint: "Use multiplier 1.04.",
      solution: ["Step 1: Multiplier = 1 + 0.04 = 1.04", "Step 2: £24,000 × 1.04 = £24,960", "Answer: £24,960"],
      correctAnswers: ["£24960", "24960", "£24,960", "24,960"],
      commonMistakes: [{ answer: "£960", feedback: "That's the increase. The new salary is £24,960." }]
    }]
  },
  {
    id: 1072,
    title: "House Price Increase",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "A house is valued at £180,000. Its value increases by 7%. What is the new value?",
      hint: "Use multiplier 1.07.",
      solution: ["Step 1: Multiplier = 1 + 0.07 = 1.07", "Step 2: £180,000 × 1.07 = £192,600", "Answer: £192,600"],
      correctAnswers: ["£192600", "192600", "£192,600", "192,600"],
      commonMistakes: [{ answer: "£12600", feedback: "That's the increase. The new value is £192,600." }]
    }]
  },
  {
    id: 1073,
    title: "Sale Price Reduction",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "A television costs £450. It is reduced by 15% in a sale. What is the sale price?",
      hint: "Use multiplier 0.85.",
      solution: ["Step 1: Multiplier = 1 - 0.15 = 0.85", "Step 2: £450 × 0.85 = £382.50", "Answer: £382.50"],
      correctAnswers: ["£382.50", "382.50", "£382.5", "382.5"],
      commonMistakes: [{ answer: "£67.50", feedback: "That's the discount. The sale price is £382.50." }]
    }]
  },
  {
    id: 1074,
    title: "Inflation Price Increase",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "A loaf of bread costs £1.20. Due to inflation, the price increases by 8%. What is the new price?",
      hint: "Use multiplier 1.08.",
      solution: ["Step 1: Multiplier = 1 + 0.08 = 1.08", "Step 2: £1.20 × 1.08 = £1.296", "Step 3: Round to £1.30", "Answer: £1.30"],
      correctAnswers: ["£1.30", "1.30", "£1.296", "1.296"],
      commonMistakes: [{ answer: "£0.096", feedback: "That's the increase. The new price is £1.30." }]
    }]
  },
  {
    id: 1075,
    title: "Car Depreciation",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "A car is worth £15,000. It depreciates by 12% in one year. What is its value after one year?",
      hint: "Depreciation means decrease. Use multiplier 0.88.",
      solution: ["Step 1: Multiplier = 1 - 0.12 = 0.88", "Step 2: £15,000 × 0.88 = £13,200", "Answer: £13,200"],
      correctAnswers: ["£13200", "13200", "£13,200", "13,200"],
      commonMistakes: [{ answer: "£1800", feedback: "That's the depreciation. The new value is £13,200." }]
    }]
  },

  // ============================================================================
  // SECTION 5: PERCENTAGE CHANGE (PROFIT & LOSS) (Exercises 76-90)
  // ============================================================================
  
  // Exercises 76-80: Easy - Find percentage change
  {
    id: 1076,
    title: "£25 becomes £32",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "£25 becomes £32. Find the percentage profit.",
      hint: "Find the change, then divide by the original and multiply by 100.",
      solution: ["Step 1: Change = £32 - £25 = £7", "Step 2: Percentage = (7/25) × 100", "Step 3: = 700/25 = 28", "Answer: 28%"],
      correctAnswers: ["28%", "28", "twenty-eight percent"],
      commonMistakes: [{ answer: "£7", feedback: "That's the profit amount. Calculate the percentage: (7/25) × 100." }]
    }]
  },
  {
    id: 1077,
    title: "60 kg becomes 75 kg",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "A weight increases from 60 kg to 75 kg. Find the percentage increase.",
      hint: "Change = 75 - 60 = 15 kg. Then (15/60) × 100.",
      solution: ["Step 1: Change = 75 - 60 = 15 kg", "Step 2: Percentage = (15/60) × 100", "Step 3: = 1500/60 = 25", "Answer: 25%"],
      correctAnswers: ["25%", "25", "twenty-five percent"],
      commonMistakes: [{ answer: "15%", feedback: "That's the change amount. Calculate (15/60) × 100." }]
    }]
  },
  {
    id: 1078,
    title: "£80 becomes £60",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "£80 becomes £60. Find the percentage decrease.",
      hint: "Change = 80 - 60 = 20. Then (20/80) × 100.",
      solution: ["Step 1: Change = £80 - £60 = £20", "Step 2: Percentage = (20/80) × 100", "Step 3: = 2000/80 = 25", "Answer: 25%"],
      correctAnswers: ["25%", "25", "twenty-five percent"],
      commonMistakes: [{ answer: "£20", feedback: "That's the decrease amount. Calculate the percentage." }]
    }]
  },
  {
    id: 1079,
    title: "50 m becomes 65 m",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "A length increases from 50 m to 65 m. Find the percentage increase.",
      hint: "Change = 65 - 50 = 15 m. Then (15/50) × 100.",
      solution: ["Step 1: Change = 65 - 50 = 15 m", "Step 2: Percentage = (15/50) × 100", "Step 3: = 1500/50 = 30", "Answer: 30%"],
      correctAnswers: ["30%", "30", "thirty percent"],
      commonMistakes: [{ answer: "15%", feedback: "Calculate (15/50) × 100 = 30%." }]
    }]
  },
  {
    id: 1080,
    title: "£120 becomes £90",
    topic: 'percentages',
    difficulty: 'easy',
    parts: [{
      question: "£120 becomes £90. Find the percentage decrease.",
      hint: "Change = 120 - 90 = 30. Then (30/120) × 100.",
      solution: ["Step 1: Change = £120 - £90 = £30", "Step 2: Percentage = (30/120) × 100", "Step 3: = 3000/120 = 25", "Answer: 25%"],
      correctAnswers: ["25%", "25", "twenty-five percent"],
      commonMistakes: [{ answer: "£30", feedback: "That's the decrease amount. Calculate the percentage." }]
    }]
  },

  // Exercises 81-85: Medium - Word problems
  {
    id: 1081,
    title: "Coat Profit",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "A shop buys a coat for £40 and sells it for £55. Calculate the percentage profit.",
      hint: "Profit = £55 - £40 = £15. Then (15/40) × 100.",
      solution: ["Step 1: Profit = £55 - £40 = £15", "Step 2: Percentage profit = (15/40) × 100", "Step 3: = 1500/40 = 37.5", "Answer: 37.5%"],
      correctAnswers: ["37.5%", "37.5", "37½%"],
      commonMistakes: [{ answer: "£15", feedback: "That's the profit amount. Calculate the percentage." }]
    }]
  },
  {
    id: 1082,
    title: "Mobile Phone Depreciation",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "A mobile phone was bought for £600 and sold for £450. Calculate the percentage loss.",
      hint: "Loss = £600 - £450 = £150. Then (150/600) × 100.",
      solution: ["Step 1: Loss = £600 - £450 = £150", "Step 2: Percentage loss = (150/600) × 100", "Step 3: = 15000/600 = 25", "Answer: 25%"],
      correctAnswers: ["25%", "25", "twenty-five percent"],
      commonMistakes: [{ answer: "£150", feedback: "That's the loss amount. Calculate the percentage." }]
    }]
  },
  {
    id: 1083,
    title: "Test Score Improvement",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "Emma scored 48 marks in her first test and 60 marks in her second test. Calculate the percentage increase.",
      hint: "Increase = 60 - 48 = 12. Then (12/48) × 100.",
      solution: ["Step 1: Increase = 60 - 48 = 12 marks", "Step 2: Percentage increase = (12/48) × 100", "Step 3: = 1200/48 = 25", "Answer: 25%"],
      correctAnswers: ["25%", "25", "twenty-five percent"],
      commonMistakes: [{ answer: "12%", feedback: "Calculate (12/48) × 100 = 25%." }]
    }]
  },
  {
    id: 1084,
    title: "Population Decrease",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "A village had a population of 2,500. It decreased to 2,000. Calculate the percentage decrease.",
      hint: "Decrease = 2,500 - 2,000 = 500. Then (500/2500) × 100.",
      solution: ["Step 1: Decrease = 2,500 - 2,000 = 500", "Step 2: Percentage decrease = (500/2500) × 100", "Step 3: = 50000/2500 = 20", "Answer: 20%"],
      correctAnswers: ["20%", "20", "twenty percent"],
      commonMistakes: [{ answer: "500", feedback: "That's the decrease amount. Calculate the percentage." }]
    }]
  },
  {
    id: 1085,
    title: "Book Profit",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "A bookshop buys a book for £8 and sells it for £12. Calculate the percentage profit.",
      hint: "Profit = £12 - £8 = £4. Then (4/8) × 100.",
      solution: ["Step 1: Profit = £12 - £8 = £4", "Step 2: Percentage profit = (4/8) × 100", "Step 3: = 400/8 = 50", "Answer: 50%"],
      correctAnswers: ["50%", "50", "fifty percent"],
      commonMistakes: [{ answer: "£4", feedback: "That's the profit amount. Calculate the percentage." }]
    }]
  },

  // Exercises 86-90: Hard - Multi-step problems
  {
    id: 1086,
    title: "Car Depreciation Value",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A car's value depreciated 18% from its original value of £8,640. What is its value now?",
      hint: "Use multiplier 0.82 (since 100% - 18% = 82%).",
      solution: ["Step 1: Multiplier = 1 - 0.18 = 0.82", "Step 2: New value = £8,640 × 0.82", "Step 3: = £7,084.80", "Answer: £7,084.80"],
      correctAnswers: ["£7084.80", "7084.80", "£7,084.80", "7,084.80"],
      commonMistakes: [{ answer: "£1555.20", feedback: "That's the depreciation amount. The new value is £7,084.80." }]
    }]
  },
  {
    id: 1087,
    title: "Double Percentage Change",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A £1,200 value drops 20%, then increases 20%. What is the final value?",
      hint: "Apply each change separately: first multiply by 0.80, then by 1.20.",
      solution: ["Step 1: After 20% decrease: £1,200 × 0.80 = £960", "Step 2: After 20% increase: £960 × 1.20 = £1,152", "Answer: £1,152"],
      correctAnswers: ["£1152", "1152", "£1,152", "1,152"],
      commonMistakes: [{ answer: "£1200", feedback: "The changes don't cancel out. Calculate step by step." }]
    }]
  },
  {
    id: 1088,
    title: "Investment Growth",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "An investment of £5,000 grows by 6% in the first year and 8% in the second year. What is the final value?",
      hint: "Apply each year's growth separately.",
      solution: ["Step 1: After year 1: £5,000 × 1.06 = £5,300", "Step 2: After year 2: £5,300 × 1.08 = £5,724", "Answer: £5,724"],
      correctAnswers: ["£5724", "5724", "£5,724", "5,724"],
      commonMistakes: [{ answer: "£5700", feedback: "Apply each percentage separately, not together." }]
    }]
  },
  {
    id: 1089,
    title: "Successive Discounts",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A jacket priced at £80 has a 10% discount, then a further 15% discount is applied. What is the final price?",
      hint: "Apply each discount separately: first multiply by 0.90, then by 0.85.",
      solution: ["Step 1: After 10% discount: £80 × 0.90 = £72", "Step 2: After 15% discount: £72 × 0.85 = £61.20", "Answer: £61.20"],
      correctAnswers: ["£61.20", "61.20", "£61.2", "61.2"],
      commonMistakes: [{ answer: "£60", feedback: "The discounts don't add to 25%. Calculate step by step." }]
    }]
  },
  {
    id: 1090,
    title: "Profit After Expenses",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A retailer buys goods for £2,400, adds 30% markup, but then has 10% expenses. What is the final selling price?",
      hint: "First increase by 30%, then increase by 10%.",
      solution: ["Step 1: After 30% markup: £2,400 × 1.30 = £3,120", "Step 2: After 10% expenses: £3,120 × 1.10 = £3,432", "Answer: £3,432"],
      correctAnswers: ["£3432", "3432", "£3,432", "3,432"],
      commonMistakes: [{ answer: "£3120", feedback: "Don't forget to add the 10% expenses." }]
    }]
  },

  // ============================================================================
  // SECTION 6: REVERSE PERCENTAGES (Exercises 91-100)
  // ============================================================================
  
  // Exercises 91-95: Medium - Find original value
  {
    id: 1091,
    title: "Reverse Percentage - 25% Increase",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "After a 25% increase, the price of an item is £250. Find the original price.",
      hint: "If increased by 25%, the new price is 125% of the original. Divide by 1.25.",
      solution: ["Step 1: New price = 125% of original", "Step 2: £250 = 1.25 × original", "Step 3: Original = £250 ÷ 1.25 = £200", "Answer: £200"],
      correctAnswers: ["£200", "200", "£200.00"],
      commonMistakes: [{ answer: "£187.50", feedback: "Don't subtract 25%. Divide by 1.25." }]
    }]
  },
  {
    id: 1092,
    title: "Reverse Percentage - 20% Decrease",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "After a 20% decrease, the price of a television is £320. Find the original price.",
      hint: "If decreased by 20%, the new price is 80% of the original. Divide by 0.80.",
      solution: ["Step 1: New price = 80% of original", "Step 2: £320 = 0.80 × original", "Step 3: Original = £320 ÷ 0.80 = £400", "Answer: £400"],
      correctAnswers: ["£400", "400", "£400.00"],
      commonMistakes: [{ answer: "£384", feedback: "Don't add 20%. Divide by 0.80." }]
    }]
  },
  {
    id: 1093,
    title: "Reverse Percentage - 15% Increase",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "After a 15% increase, a salary is £34,500. Find the original salary.",
      hint: "New salary = 115% of original. Divide by 1.15.",
      solution: ["Step 1: New salary = 115% of original", "Step 2: £34,500 = 1.15 × original", "Step 3: Original = £34,500 ÷ 1.15 = £30,000", "Answer: £30,000"],
      correctAnswers: ["£30000", "30000", "£30,000", "30,000"],
      commonMistakes: [{ answer: "£29325", feedback: "Divide by 1.15, don't subtract 15%." }]
    }]
  },
  {
    id: 1094,
    title: "Reverse Percentage - 10% Decrease",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "After a 10% decrease, the weight of a package is 72 kg. Find the original weight.",
      hint: "New weight = 90% of original. Divide by 0.90.",
      solution: ["Step 1: New weight = 90% of original", "Step 2: 72 kg = 0.90 × original", "Step 3: Original = 72 ÷ 0.90 = 80 kg", "Answer: 80 kg"],
      correctAnswers: ["80 kg", "80kg", "80"],
      commonMistakes: [{ answer: "79.2 kg", feedback: "Divide by 0.90, don't add 10%." }]
    }]
  },
  {
    id: 1095,
    title: "Reverse Percentage - 8% Increase",
    topic: 'percentages',
    difficulty: 'medium',
    parts: [{
      question: "After an 8% increase, the population of a town is 54,000. Find the original population.",
      hint: "New population = 108% of original. Divide by 1.08.",
      solution: ["Step 1: New population = 108% of original", "Step 2: 54,000 = 1.08 × original", "Step 3: Original = 54,000 ÷ 1.08 = 50,000", "Answer: 50,000"],
      correctAnswers: ["50000", "50,000", "50000 people", "50,000 people"],
      commonMistakes: [{ answer: "49680", feedback: "Divide by 1.08, don't subtract 8%." }]
    }]
  },

  // Exercises 96-100: Hard - Word problems with reverse percentages
  {
    id: 1096,
    title: "Retailer Profit on Microwave",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A retailer sells a microwave for £640, making a 25% profit. How much did the retailer pay?",
      hint: "Selling price = 125% of cost price. Divide by 1.25.",
      solution: ["Step 1: Selling price = 125% of cost", "Step 2: £640 = 1.25 × cost", "Step 3: Cost = £640 ÷ 1.25 = £512", "Answer: £512"],
      correctAnswers: ["£512", "512", "£512.00"],
      commonMistakes: [{ answer: "£480", feedback: "Don't subtract 25%. Divide by 1.25." }]
    }]
  },
  {
    id: 1097,
    title: "Bike Sale Price",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A bike is in a sale with 30% off. The sale price is £210. What was the original price?",
      hint: "Sale price = 70% of original. Divide by 0.70.",
      solution: ["Step 1: Sale price = 70% of original", "Step 2: £210 = 0.70 × original", "Step 3: Original = £210 ÷ 0.70 = £300", "Answer: £300"],
      correctAnswers: ["£300", "300", "£300.00"],
      commonMistakes: [{ answer: "£273", feedback: "Don't add 30%. Divide by 0.70." }]
    }]
  },
  {
    id: 1098,
    title: "VAT Inclusive Price",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A laptop costs £720 including 20% VAT. What was the price before VAT?",
      hint: "Price with VAT = 120% of price before VAT. Divide by 1.20.",
      solution: ["Step 1: Price with VAT = 120% of original", "Step 2: £720 = 1.20 × original", "Step 3: Original = £720 ÷ 1.20 = £600", "Answer: £600"],
      correctAnswers: ["£600", "600", "£600.00"],
      commonMistakes: [{ answer: "£576", feedback: "Divide by 1.20, don't subtract 20%." }]
    }]
  },
  {
    id: 1099,
    title: "Car Depreciation Original Value",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A car is now worth £6,800 after depreciating by 15%. What was its original value?",
      hint: "Current value = 85% of original. Divide by 0.85.",
      solution: ["Step 1: Current value = 85% of original", "Step 2: £6,800 = 0.85 × original", "Step 3: Original = £6,800 ÷ 0.85 = £8,000", "Answer: £8,000"],
      correctAnswers: ["£8000", "8000", "£8,000", "8,000"],
      commonMistakes: [{ answer: "£7820", feedback: "Divide by 0.85, don't add 15%." }]
    }]
  },
  {
    id: 1100,
    title: "Restaurant Bill with Service Charge",
    topic: 'percentages',
    difficulty: 'hard',
    parts: [{
      question: "A restaurant bill is £69 including a 15% service charge. What was the bill before the service charge?",
      hint: "Total bill = 115% of original bill. Divide by 1.15.",
      solution: ["Step 1: Total = 115% of original", "Step 2: £69 = 1.15 × original", "Step 3: Original = £69 ÷ 1.15 = £60", "Answer: £60"],
      correctAnswers: ["£60", "60", "£60.00"],
      commonMistakes: [{ answer: "£58.65", feedback: "Divide by 1.15, don't subtract 15%." }]
    }]
  }
];

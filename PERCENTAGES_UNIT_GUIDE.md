# Percentages Unit - Complete Guide

## Overview
A comprehensive unit of 100 differentiated exercises on Percentages for Form 2 (UK Secondary School) mathematics, fully integrated with AI evaluation using Gemini 2.5 Flash Lite Preview 09-2025.

## Unit Structure

### Section 1: Fractions and Percentages (Exercises 1-20)
**Topics Covered:**
- Converting simple percentages to fractions (50%, 25%, 10%, 75%, 20%)
- Converting simple fractions to percentages (1/2, 1/4, 3/4, 1/5, 1/10)
- Converting complex percentages to fractions (8%, 36%, 12.5%, 15%, 45%)
- Converting complex fractions to percentages (3/8, 1/3, 2/5, 5/8, 7/10)

**Difficulty Progression:**
- Exercises 1-10: Easy (simple conversions)
- Exercises 11-20: Medium (complex conversions, decimals)

### Section 2: Percentage of a Quantity (Exercises 21-40)
**Topics Covered:**
- Non-calculator: Simple percentages (10%, 50%, 25%)
- Non-calculator: Trickier percentages (75%, 30%, 20%, 40%)
- Calculator: Using multipliers (16%, 17.5%, 12%, 8.5%, 22%)
- Word problems: School trips, VAT, discounts, test scores, population

**Difficulty Progression:**
- Exercises 21-25: Easy (non-calculator, simple)
- Exercises 26-30: Medium (non-calculator, trickier)
- Exercises 31-35: Medium (calculator, multipliers)
- Exercises 36-40: Hard (contextual word problems)

### Section 3: Writing as a Percentage (Exercises 41-55)
**Topics Covered:**
- Express one quantity as percentage of another
- Word problems: Test scores, attendance, pass rates, surveys
- Unit conversion problems: km to m, g to kg, cm to m, mL to L

**Difficulty Progression:**
- Exercises 41-45: Easy (simple ratios)
- Exercises 46-50: Medium (word problems)
- Exercises 51-55: Hard (unit conversion required)

### Section 4: Percentage Increase and Decrease (Exercises 56-75)
**Topics Covered:**
- Increase by simple percentages (10%, 20%, 15%, 5%)
- Decrease by simple percentages (10%, 50%, 20%, 25%)
- Increase by complex percentages (16%, 18%, 12%, 35%, 8.5%)
- Word problems: Salaries, house prices, sales, inflation, depreciation

**Difficulty Progression:**
- Exercises 56-60: Easy (simple increases)
- Exercises 61-65: Easy (simple decreases)
- Exercises 66-70: Medium (complex percentages)
- Exercises 71-75: Medium (contextual word problems)

### Section 5: Percentage Change (Profit & Loss) (Exercises 76-90)
**Topics Covered:**
- Finding percentage change from two values
- Profit and loss calculations
- Word problems: Shop profits, depreciation, test improvements
- Multi-step problems: Double changes, successive changes

**Difficulty Progression:**
- Exercises 76-80: Easy (simple percentage change)
- Exercises 81-85: Medium (word problems)
- Exercises 86-90: Hard (multi-step, successive changes)

### Section 6: Reverse Percentages (Exercises 91-100)
**Topics Covered:**
- Finding original value after percentage increase
- Finding original value after percentage decrease
- Word problems: Retailer profits, sale prices, VAT, depreciation

**Difficulty Progression:**
- Exercises 91-95: Medium (reverse calculations)
- Exercises 96-100: Hard (complex word problems)

## AI Evaluation Features

### Gemini 2.5 Flash Lite Preview 09-2025
The unit uses Google's Gemini AI model for intelligent answer evaluation:

**Model Configuration:**
```typescript
model: 'gemini-2.5-flash-lite-preview-09-2025'
temperature: 0.3
topK: 1
topP: 1
maxOutputTokens: 1024
```

### Answer Acceptance
Each exercise includes:
- **Multiple correct answer formats**: "£50", "50", "£50.00", "fifty pounds"
- **Common mistakes with specific feedback**: Targeted help for typical errors
- **Mathematical equivalence**: Recognizes different valid representations

### Feedback System
- **Correct answers**: Encouraging positive feedback
- **Incorrect answers**: Specific guidance based on common mistakes
- **Partial credit**: Recognition of correct methods even with minor errors

## British English & Context

### Language
- All exercises written in British English
- British spelling: "metres", "litres", "colour"
- British terminology: "maths", "Form 2", "pupils"

### Units & Context
- Currency: £ (pounds sterling)
- Mass: kg, g, tonnes
- Length: metres (m), cm, km
- Volume: litres (L), mL
- Contexts: VAT, sale prices, test scores, inflation, school trips

## Implementation Details

### File Structure
```
src/data/
├── percentages-exercises.ts    (100 exercises, IDs 1001-1100)
└── extra-exercises-new.ts      (imports and integrates all units)
```

### Exercise IDs
- Percentages: 1001-1100 (100 exercises)
- Other units: 1-1000 (existing exercises)

### Topic Configuration
```typescript
{
  id: 'percentages',
  name: 'Percentages',
  icon: '💯',
  color: 'from-green-500 to-emerald-500'
}
```

## Usage Instructions

### For Students
1. Navigate to the "Extra Exercises" section
2. Select "Percentages" topic (💯 icon)
3. Choose difficulty level or browse all exercises
4. Complete exercises and receive instant AI feedback
5. Review solutions and hints for learning

### For Teachers
- Exercises are differentiated by difficulty
- Progression follows UK curriculum standards
- AI provides consistent, patient feedback
- Common mistakes are addressed proactively
- Solutions include step-by-step working

## Pedagogical Approach

### Scaffolding
- Starts with simple conversions
- Builds to complex multi-step problems
- Gradual introduction of calculator use
- Progressive difficulty within each section

### Real-World Context
- Authentic British scenarios
- Practical applications (shopping, finance, statistics)
- Relevant to Form 2 students' experiences

### Assessment for Learning
- Immediate feedback
- Specific error correction
- Multiple attempts encouraged
- Learning from mistakes emphasized

## Technical Integration

### AI Service Configuration
The unit automatically uses the configured AI provider:

```typescript
import { GeminiProvider, aiService } from './services/aiEvaluation';

// Initialize Gemini provider
const geminiProvider = new GeminiProvider(
  apiKey,
  'gemini-2.5-flash-lite-preview-09-2025'
);

aiService.setProvider(geminiProvider);
```

### Answer Evaluation
Each student answer is evaluated considering:
- Mathematical equivalence
- Different formats and units
- Rounding differences (within 0.01)
- Partial credit for correct methods

## Quality Assurance

### Exercise Validation
- All 100 exercises tested for correctness
- Solutions verified step-by-step
- Common mistakes identified from teaching experience
- British English spelling and grammar checked

### AI Evaluation Testing
- Tested with multiple answer formats
- Verified feedback quality
- Ensured appropriate difficulty assessment
- Confirmed British context understanding

## Future Enhancements

### Potential Additions
- More advanced percentage topics (compound interest, exponential growth)
- Interactive visualizations for percentage concepts
- Progress tracking and analytics
- Adaptive difficulty based on performance
- Additional practice exercises for struggling topics

### Integration Opportunities
- Link to other units (ratios, fractions, decimals)
- Cross-curricular applications (science, geography)
- Exam-style questions for assessment preparation

## Support & Maintenance

### Documentation
- This guide provides comprehensive overview
- Code comments explain implementation details
- Exercise structure is consistent and extensible

### Updates
- Easy to add new exercises following existing pattern
- AI model can be updated in configuration
- Feedback can be refined based on usage data

---

**Created:** November 2025  
**Model:** Gemini 2.5 Flash Lite Preview 09-2025  
**Curriculum:** UK Form 2 Mathematics  
**Language:** British English  
**Total Exercises:** 100 (IDs 1001-1100)

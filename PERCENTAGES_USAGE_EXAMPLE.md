# Percentages Unit - Usage Examples

## Quick Start

The Percentages unit is now fully integrated and ready to use! Here's how to get started.

## Configuration

### 1. Environment Setup
The Gemini API key is already configured in `.env.local`:
```env
VITE_GEMINI_API_KEY=AIzaSyAq76x1Ov2p3MOb5um523Iepjo0yOoPUEM
```

### 2. AI Service Configuration
The AI service is configured to use Gemini 2.5 Flash Lite Preview:

```typescript
import { GeminiProvider, aiService } from './services/aiEvaluation';

// Initialize Gemini provider
const geminiProvider = new GeminiProvider(
  import.meta.env.VITE_GEMINI_API_KEY,
  'gemini-2.5-flash-lite-preview-09-2025'
);

aiService.setProvider(geminiProvider);
```

## Using the Percentages Unit

### Example 1: Simple Percentage to Fraction Conversion

**Exercise ID**: 1001  
**Title**: "Convert 50% to a Fraction"  
**Difficulty**: Easy

**Question**: Convert 50% to a fraction in its simplest form.

**Accepted Answers**:
- "1/2"
- "½"
- "one half"
- "0.5"

**Common Mistake**:
- Student answers "50/100" → AI responds: "This is correct but not in simplest form. Divide both numbers by 50."

### Example 2: Percentage of a Quantity

**Exercise ID**: 1036  
**Title**: "School Trip Attendance"  
**Difficulty**: Hard

**Question**: A school has 280 pupils. 85% go on a trip. How many pupils go on the trip?

**Accepted Answers**:
- "238"
- "238 pupils"

**Common Mistake**:
- Student answers "42" → AI responds: "That's 15% (who don't go). Calculate 85% of 280."

### Example 3: Reverse Percentage

**Exercise ID**: 1096  
**Title**: "Retailer Profit on Microwave"  
**Difficulty**: Hard

**Question**: A retailer sells a microwave for £640, making a 25% profit. How much did the retailer pay?

**Accepted Answers**:
- "£512"
- "512"
- "£512.00"

**Common Mistake**:
- Student answers "£480" → AI responds: "Don't subtract 25%. Divide by 1.25."

## AI Evaluation Flow

### Step 1: Student Submits Answer
```typescript
const userAnswer = "1/2";
const exercise = percentagesExercises[0]; // Exercise 1001
const part = exercise.parts[0];
```

### Step 2: AI Evaluates
```typescript
const result = await aiService.evaluateAnswer(
  userAnswer,
  part.correctAnswers[0],
  part.question,
  part.hint
);
```

### Step 3: AI Response
```json
{
  "isCorrect": true,
  "confidence": 0.95,
  "feedback": "Excellent! You've correctly simplified 50% to 1/2. Well done!",
  "suggestions": []
}
```

## Testing Different Answer Formats

### Example: Exercise 1021 - "10% of £80"

**Correct Answers Accepted**:
```typescript
correctAnswers: ["£8", "8", "£8.00", "8.00"]
```

**Test Cases**:
1. Student: "£8" → ✅ Correct
2. Student: "8" → ✅ Correct (AI recognizes context)
3. Student: "£8.00" → ✅ Correct
4. Student: "£80" → ❌ Incorrect
   - AI: "You need to find 10%, not 100%. Divide by 10."

## Common Mistake Handling

### Example: Exercise 1056 - "Increase £50 by 10%"

**Common Mistake**:
```typescript
{
  answer: "£5",
  feedback: "That's the increase. Add it to the original £50."
}
```

**Scenario**:
- Student answers "£5"
- AI detects common mistake
- AI provides specific feedback: "That's the increase. Add it to the original £50."
- Student learns to add the increase to get the new amount

## Unit Conversion Examples

### Example: Exercise 1051 - "Express 2 km as Percentage of 800 m"

**Solution Steps**:
1. Convert to same units: 2 km = 2000 m
2. Calculate fraction: 2000/800
3. Convert to percentage: (2000/800) × 100 = 250%

**Common Mistake**:
```typescript
{
  answer: "25%",
  feedback: "2 km is larger than 800 m, so the answer must be over 100%."
}
```

## Multi-Step Problem Example

### Example: Exercise 1087 - "Double Percentage Change"

**Question**: A £1,200 value drops 20%, then increases 20%. What is the final value?

**Solution**:
```
Step 1: After 20% decrease: £1,200 × 0.80 = £960
Step 2: After 20% increase: £960 × 1.20 = £1,152
Answer: £1,152
```

**Common Mistake**:
```typescript
{
  answer: "£1200",
  feedback: "The changes don't cancel out. Calculate step by step."
}
```

## Accessing Exercises in Code

### Get All Percentages Exercises
```typescript
import { extraExercises } from './data/extra-exercises-new';

const percentagesExercises = extraExercises.filter(
  ex => ex.topic === 'percentages'
);

console.log(`Total percentages exercises: ${percentagesExercises.length}`);
// Output: Total percentages exercises: 100
```

### Get Exercises by Difficulty
```typescript
const easyExercises = percentagesExercises.filter(
  ex => ex.difficulty === 'easy'
);

const mediumExercises = percentagesExercises.filter(
  ex => ex.difficulty === 'medium'
);

const hardExercises = percentagesExercises.filter(
  ex => ex.difficulty === 'hard'
);
```

### Get Exercises by Section
```typescript
// Section 1: Fractions and Percentages (1001-1020)
const section1 = percentagesExercises.filter(
  ex => ex.id >= 1001 && ex.id <= 1020
);

// Section 2: Percentage of a Quantity (1021-1040)
const section2 = percentagesExercises.filter(
  ex => ex.id >= 1021 && ex.id <= 1040
);

// Section 3: Writing as a Percentage (1041-1055)
const section3 = percentagesExercises.filter(
  ex => ex.id >= 1041 && ex.id <= 1055
);

// Section 4: Percentage Increase/Decrease (1056-1075)
const section4 = percentagesExercises.filter(
  ex => ex.id >= 1056 && ex.id <= 1075
);

// Section 5: Percentage Change (1076-1090)
const section5 = percentagesExercises.filter(
  ex => ex.id >= 1076 && ex.id <= 1090
);

// Section 6: Reverse Percentages (1091-1100)
const section6 = percentagesExercises.filter(
  ex => ex.id >= 1091 && ex.id <= 1100
);
```

## UI Integration

### Topic Card Display
The Percentages topic appears first in the list with:
- **Icon**: 💯
- **Name**: Percentages
- **Color**: Green gradient (from-green-500 to-emerald-500)
- **Exercise Count**: 100

### Exercise Display
Each exercise shows:
- Title (e.g., "Convert 50% to a Fraction")
- Difficulty badge (Easy/Medium/Hard)
- Question text
- Input field for answer
- Hint button (reveals hint when clicked)
- Submit button (triggers AI evaluation)

### Feedback Display
After submission:
- ✅ Green checkmark for correct answers
- ❌ Red cross for incorrect answers
- Feedback message from AI
- Suggestions for improvement (if incorrect)
- Solution button (reveals step-by-step solution)

## Testing the Unit

### Manual Testing Steps
1. Run the application: `npm run dev`
2. Navigate to "Extra Exercises"
3. Click on "Percentages" (💯 icon)
4. Select an exercise (e.g., Exercise 1001)
5. Try different answer formats:
   - "1/2" → Should be accepted
   - "½" → Should be accepted
   - "0.5" → Should be accepted
   - "50/100" → Should show feedback to simplify
6. Check AI feedback quality
7. Review solution steps

### Automated Testing (Future)
```typescript
describe('Percentages Unit', () => {
  it('should accept multiple answer formats', async () => {
    const exercise = percentagesExercises[0];
    const part = exercise.parts[0];
    
    const answers = ["1/2", "½", "0.5", "one half"];
    
    for (const answer of answers) {
      const result = await aiService.evaluateAnswer(
        answer,
        part.correctAnswers[0],
        part.question,
        part.hint
      );
      
      expect(result.isCorrect).toBe(true);
    }
  });
  
  it('should provide specific feedback for common mistakes', async () => {
    const exercise = percentagesExercises[0];
    const part = exercise.parts[0];
    
    const result = await aiService.evaluateAnswer(
      "50/100",
      part.correctAnswers[0],
      part.question,
      part.hint
    );
    
    expect(result.isCorrect).toBe(false);
    expect(result.feedback).toContain("simplest form");
  });
});
```

## Performance Considerations

### AI Response Time
- Average response time: 1-2 seconds
- Cached responses for common answers
- Fallback to local evaluation if API fails

### Exercise Loading
- All 100 exercises loaded on demand
- Lazy loading for better performance
- Efficient filtering by topic/difficulty

## Troubleshooting

### Issue: AI Not Responding
**Solution**: Check Gemini API key in `.env.local`

### Issue: Incorrect Feedback
**Solution**: Review `commonMistakes` array in exercise definition

### Issue: Answer Not Accepted
**Solution**: Add answer format to `correctAnswers` array

### Issue: Build Errors
**Solution**: Run `npm run build` to check for TypeScript errors

## Best Practices

### For Students
1. Read the question carefully
2. Use the hint if stuck
3. Try different answer formats if not accepted
4. Review the solution to understand the method
5. Practice similar exercises for mastery

### For Teachers
1. Monitor student progress by difficulty level
2. Review common mistakes to identify learning gaps
3. Use AI feedback to supplement teaching
4. Encourage students to explain their reasoning
5. Adapt teaching based on exercise performance

## Next Steps

1. **Test the unit**: Try various exercises and answer formats
2. **Gather feedback**: Collect student and teacher feedback
3. **Refine AI prompts**: Improve feedback quality based on usage
4. **Add analytics**: Track performance and identify difficult topics
5. **Expand content**: Add more exercises or advanced topics

---

**Ready to use!** The Percentages unit is fully integrated and configured with Gemini AI evaluation. Start exploring the 100 differentiated exercises today! 🎉

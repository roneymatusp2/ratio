/**
 * Sistema de avaliação de respostas dos estudantes
 */

export interface EvaluationResult {
  isCorrect: boolean;
  confidence: number; // 0-1
  feedback: string;
  suggestions?: string[];
}

/**
 * Normaliza uma resposta para comparação
 */
function normalizeAnswer(answer: string): string {
  return answer
    .toLowerCase()
    .trim()
    // Remove espaços extras
    .replace(/\s+/g, ' ')
    // Remove pontuação no final
    .replace(/[.,;!?]+$/, '')
    // Normaliza símbolos matemáticos
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-')
    // Remove espaços ao redor de operadores
    .replace(/\s*([+\-*/=:×÷])\s*/g, '$1');
}

/**
 * Extrai números de uma string
 */
function extractNumbers(text: string): number[] {
  const matches = text.match(/\d+\.?\d*/g);
  return matches ? matches.map(Number) : [];
}

/**
 * Verifica se duas respostas são equivalentes
 */
function areEquivalent(userAnswer: string, correctAnswer: string): boolean {
  const normalized1 = normalizeAnswer(userAnswer);
  const normalized2 = normalizeAnswer(correctAnswer);

  // Comparação exata
  if (normalized1 === normalized2) return true;

  // Comparação de números
  const userNumbers = extractNumbers(userAnswer);
  const correctNumbers = extractNumbers(correctAnswer);
  
  if (userNumbers.length > 0 && correctNumbers.length > 0) {
    // Se tem os mesmos números na mesma ordem
    if (userNumbers.length === correctNumbers.length) {
      const allMatch = userNumbers.every((num, idx) => 
        Math.abs(num - correctNumbers[idx]) < 0.01
      );
      if (allMatch) return true;
    }
  }

  // Comparação de razões (ex: "4:7" vs "4 : 7" vs "4 to 7")
  const ratioPattern1 = normalized1.match(/(\d+)\s*[:to]\s*(\d+)/);
  const ratioPattern2 = normalized2.match(/(\d+)\s*[:to]\s*(\d+)/);
  if (ratioPattern1 && ratioPattern2) {
    return ratioPattern1[1] === ratioPattern2[1] && 
           ratioPattern1[2] === ratioPattern2[2];
  }

  // Comparação de unidades (ex: "1800 cm³" vs "1800cm³" vs "1800 cubic centimetres")
  const unitVariations: { [key: string]: string[] } = {
    'cm³': ['cm3', 'cubic centimetres', 'cubic centimeters', 'cc'],
    'cm²': ['cm2', 'square centimetres', 'square centimeters'],
    'kg': ['kilograms', 'kilogrammes', 'kgs'],
    'g': ['grams', 'grammes', 'gs'],
    'l': ['litres', 'liters', 'ls'],
    'ml': ['millilitres', 'milliliters', 'mls'],
    'm': ['metres', 'meters', 'ms'],
    '£': ['pounds', 'gbp'],
  };

  for (const [unit, variations] of Object.entries(unitVariations)) {
    const pattern = new RegExp(`(\\d+\\.?\\d*)\\s*(${[unit, ...variations].join('|')})`, 'i');
    const match1 = normalized1.match(pattern);
    const match2 = normalized2.match(pattern);
    
    if (match1 && match2 && match1[1] === match2[1]) {
      return true;
    }
  }

  return false;
}

/**
 * Avalia a resposta do estudante localmente
 */
export function evaluateAnswerLocally(
  userAnswer: string,
  correctAnswers: string[],
  commonMistakes?: { answer: string; feedback: string }[]
): EvaluationResult {
  if (!userAnswer.trim()) {
    return {
      isCorrect: false,
      confidence: 1,
      feedback: 'Please provide an answer.',
      suggestions: ['Write your answer in the text box above.']
    };
  }

  // Check if answer is correct
  const isCorrect = correctAnswers.some(correct => areEquivalent(userAnswer, correct));

  if (isCorrect) {
    return {
      isCorrect: true,
      confidence: 1,
      feedback: 'Correct! Well done!',
    };
  }

  // Check for common mistakes
  if (commonMistakes) {
    for (const mistake of commonMistakes) {
      if (areEquivalent(userAnswer, mistake.answer)) {
        return {
          isCorrect: false,
          confidence: 1,
          feedback: 'Not quite right.',
          suggestions: [mistake.feedback]
        };
      }
    }
  }

  // General error analysis
  const userNumbers = extractNumbers(userAnswer);
  const correctNumbers = extractNumbers(correctAnswers[0]);

  const suggestions: string[] = [];

  // If has numbers but they're wrong
  if (userNumbers.length > 0 && correctNumbers.length > 0) {
    if (userNumbers.length !== correctNumbers.length) {
      suggestions.push('Check if you have all the required values in your answer.');
    } else {
      suggestions.push('Your calculation might be incorrect. Review your working.');
    }
  }

  // If missing numbers
  if (userNumbers.length === 0 && correctNumbers.length > 0) {
    suggestions.push('Your answer should include numerical values.');
  }

  // If missing units
  const hasUnit = /\b(cm|kg|g|l|ml|m|£|minutes?|seconds?|hours?)\b/i.test(userAnswer);
  const needsUnit = /\b(cm|kg|g|l|ml|m|£|minutes?|seconds?|hours?)\b/i.test(correctAnswers[0]);
  
  if (!hasUnit && needsUnit) {
    suggestions.push('Don\'t forget to include the correct units in your answer.');
  }

  return {
    isCorrect: false,
    confidence: 0.9,
    feedback: 'Not quite right. Try again or check the hint.',
    suggestions: suggestions.length > 0 ? suggestions : [
      'Review your calculation step by step.',
      'Check the hint if you need help.'
    ]
  };
}

/**
 * Avalia a resposta usando Gemini AI
 */
export async function evaluateAnswerWithAI(
  userAnswer: string,
  correctAnswer: string,
  question: string,
  hint: string
): Promise<EvaluationResult> {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      console.warn('Gemini API key not found, using local evaluation');
      return evaluateAnswerLocally(userAnswer, [correctAnswer]);
    }

    const prompt = `You are a patient and encouraging mathematics teacher evaluating a Form 2 student's answer.

Question: ${question}
Hint: ${hint}
Correct Answer: ${correctAnswer}
Student's Answer: ${userAnswer}

Evaluate if the student's answer is correct. Be flexible and consider:
- Mathematical equivalence (e.g., "4:7" = "4 to 7" = "4 : 7")
- Different units (e.g., "1800 cm³" = "1800 cc" = "1800 cubic centimetres")
- Rounding differences (accept if within 0.01)
- Different formats (e.g., "£40 and £56" = "40, 56" = "£40, £56")
- Partial credit for showing correct method even if final answer is slightly off

Respond ONLY with valid JSON in this exact format:
{
  "isCorrect": true or false,
  "confidence": 0.95,
  "feedback": "Brief, encouraging feedback (1-2 sentences)",
  "suggestions": ["specific suggestion 1", "specific suggestion 2"]
}

If correct, keep feedback positive and brief. If incorrect, provide helpful suggestions.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.3,
            topK: 1,
            topP: 1,
            maxOutputTokens: 512,
          }
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Gemini API error:', error);
      return evaluateAnswerLocally(userAnswer, [correctAnswer]);
    }

    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text;
    
    // Remove markdown code blocks if present
    const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
    const result = JSON.parse(cleanText);

    return {
      isCorrect: result.isCorrect,
      confidence: result.confidence || 0.9,
      feedback: result.feedback,
      suggestions: result.suggestions || []
    };

  } catch (error) {
    console.error('AI evaluation failed:', error);
    // Fallback para avaliação local
    return evaluateAnswerLocally(userAnswer, [correctAnswer]);
  }
}

/**
 * Função principal de avaliação
 * Usa avaliação local com múltiplas respostas corretas
 */
export async function evaluateAnswer(
  userAnswer: string,
  correctAnswers: string[],
  commonMistakes?: { answer: string; feedback: string }[],
  question?: string,
  hint?: string,
  useAI: boolean = false
): Promise<EvaluationResult> {
  if (useAI && question && hint) {
    try {
      return await evaluateAnswerWithAI(userAnswer, correctAnswers[0], question, hint);
    } catch (error) {
      console.error('AI evaluation failed, using local evaluation:', error);
    }
  }
  
  return evaluateAnswerLocally(userAnswer, correctAnswers, commonMistakes);
}

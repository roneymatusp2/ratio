/**
 * Serviço de avaliação com IA
 * Suporta múltiplos provedores
 */

export interface AIProvider {
  name: string;
  evaluate: (prompt: string) => Promise<any>;
}

/**
 * OpenAI Provider (exemplo)
 */
export class OpenAIProvider implements AIProvider {
  name = 'OpenAI';
  private apiKey: string;
  private model: string;

  constructor(apiKey: string, model: string = 'gpt-4o-mini') {
    this.apiKey = apiKey;
    this.model = model;
  }

  async evaluate(prompt: string): Promise<any> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages: [
          {
            role: 'system',
            content: 'You are a helpful mathematics teacher who evaluates student answers with patience and clarity.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        response_format: { type: 'json_object' }
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  }
}

/**
 * Claude Provider (Anthropic)
 */
export class ClaudeProvider implements AIProvider {
  name = 'Claude';
  private apiKey: string;
  private model: string;

  constructor(apiKey: string, model: string = 'claude-3-haiku-20240307') {
    this.apiKey = apiKey;
    this.model = model;
  }

  async evaluate(prompt: string): Promise<any> {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: this.model,
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: prompt + '\n\nRespond only with valid JSON.'
          }
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.content[0].text;
    return JSON.parse(content);
  }
}

/**
 * Gemini Provider (Google)
 */
export class GeminiProvider implements AIProvider {
  name = 'Gemini';
  private apiKey: string;
  private model: string;

  constructor(apiKey: string, model: string = 'gemini-2.5-flash-lite-preview-09-2025') {
    this.apiKey = apiKey;
    this.model = model;
  }

  async evaluate(prompt: string): Promise<any> {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt + '\n\nRespond only with valid JSON.'
            }]
          }],
          generationConfig: {
            temperature: 0.3,
            topK: 1,
            topP: 1,
            maxOutputTokens: 1024,
          }
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Gemini API error: ${error.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text;

    // Remove markdown code blocks if present
    const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
    return JSON.parse(cleanText);
  }
}

/**
 * Ollama Provider (Local)
 */
export class OllamaProvider implements AIProvider {
  name = 'Ollama';
  private baseUrl: string;
  private model: string;

  constructor(baseUrl: string = 'http://localhost:11434', model: string = 'llama3.2') {
    this.baseUrl = baseUrl;
    this.model = model;
  }

  async evaluate(prompt: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.model,
        prompt: prompt + '\n\nRespond only with valid JSON.',
        stream: false,
        format: 'json'
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`);
    }

    const data = await response.json();
    return JSON.parse(data.response);
  }
}

/**
 * Gerenciador de provedores de IA
 */
export class AIEvaluationService {
  private provider: AIProvider | null = null;

  setProvider(provider: AIProvider) {
    this.provider = provider;
  }

  async evaluateAnswer(
    userAnswer: string,
    correctAnswer: string,
    question: string,
    hint: string
  ): Promise<any> {
    if (!this.provider) {
      throw new Error('No AI provider configured');
    }

    const prompt = `You are a mathematics teacher evaluating a student's answer.

Question: ${question}
Hint: ${hint}
Correct Answer: ${correctAnswer}
Student's Answer: ${userAnswer}

Evaluate if the student's answer is correct. Consider:
- Mathematical equivalence (e.g., "4:7" = "4 to 7")
- Different units (e.g., "1800 cm³" = "1800 cc")
- Rounding differences (accept if within 0.01)
- Different formats (e.g., "£40 and £56" = "40, 56")
- Partial credit for showing correct method

Respond in JSON format:
{
  "isCorrect": boolean,
  "confidence": number (0-1),
  "feedback": "Brief, encouraging feedback for the student",
  "suggestions": ["specific suggestion 1", "specific suggestion 2"] (optional, only if incorrect)
}`;

    return await this.provider.evaluate(prompt);
  }
}

// Singleton instance
export const aiService = new AIEvaluationService();

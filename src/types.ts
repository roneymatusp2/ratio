export interface Question {
  id: number;
  question: string;
  options: string[]; // Mantido para compatibilidade, mas não será usado
  correct: string;
  correctAnswers: string[]; // Múltiplas respostas aceitas
  category: string;
  topic: string;
  explanation?: string;
  hint?: string;
}
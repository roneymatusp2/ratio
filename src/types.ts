export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: string;
  category: string;
  topic: string;
  explanation?: string;
}
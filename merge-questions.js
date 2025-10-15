// Script to merge measurement questions into main questions file
import fs from 'fs';

// Read the measurement questions
const measurementContent = fs.readFileSync('src/data/measurement-questions.ts', 'utf8');

// Extract just the questions array content
const questionsMatch = measurementContent.match(/export const measurementQuestions: Question\[\] = \[([\s\S]*)\];/);
if (!questionsMatch) {
  console.error('Could not find questions in measurement file');
  process.exit(1);
}

const measurementQuestionsContent = questionsMatch[1];

// Read the main questions file
let mainContent = fs.readFileSync('src/data/questions.ts', 'utf8');

// Find the end of the questions array (before the closing ];)
const lastBracketIndex = mainContent.lastIndexOf('];');

if (lastBracketIndex === -1) {
  console.error('Could not find end of questions array');
  process.exit(1);
}

// Insert measurement questions before the closing bracket
const beforeClosing = mainContent.substring(0, lastBracketIndex);
const afterClosing = mainContent.substring(lastBracketIndex);

// Add a comma after the last question if needed
const needsComma = !beforeClosing.trim().endsWith(',');
const comma = needsComma ? ',' : '';

// Merge the content
const mergedContent = beforeClosing + comma + '\n\n  // ===== MEASUREMENT & TIME QUESTIONS =====\n' + measurementQuestionsContent + afterClosing;

// Write back to the main file
fs.writeFileSync('src/data/questions.ts', mergedContent, 'utf8');

console.log('✅ Successfully merged measurement questions into main questions file!');
console.log('📊 Added 38 new measurement questions');

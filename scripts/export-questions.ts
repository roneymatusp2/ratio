import { questions } from '../src/data/questions.js';
import * as fs from 'fs';
import * as path from 'path';

const outputPath = path.join(process.cwd(), 'scripts', 'questions.json');
fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2));
console.log(`✅ Exported ${questions.length} questions to ${outputPath}`);

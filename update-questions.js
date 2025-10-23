import fs from 'fs';

// Ler o arquivo
let content = fs.readFileSync('src/data/questions.ts', 'utf8');

// Adicionar correctAnswers após cada correct
content = content.replace(
  /correct: "([^"]+)",/g,
  (match, correctAnswer) => {
    // Gerar variações comuns da resposta
    const variations = [correctAnswer];
    
    // Adicionar variações com espaços
    if (correctAnswer.includes(':')) {
      variations.push(correctAnswer.replace(':', ' : '));
      variations.push(correctAnswer.replace(':', ' to '));
      variations.push(correctAnswer.replace(':', 'to'));
    }
    
    // Adicionar variações sem espaços para números
    if (correctAnswer.includes(' ')) {
      variations.push(correctAnswer.replace(/ /g, ''));
    }
    
    // Remover duplicatas
    const unique = [...new Set(variations)];
    
    return `correct: "${correctAnswer}",\n    correctAnswers: ${JSON.stringify(unique)},`;
  }
);

// Salvar o arquivo
fs.writeFileSync('src/data/questions.ts', content, 'utf8');
console.log('✅ Questions updated successfully!');
console.log('Added correctAnswers field to all questions');

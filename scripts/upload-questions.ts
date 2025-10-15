import { createClient } from '@supabase/supabase-js';
import { questions } from '../src/data/questions.js';
import * as fs from 'fs';
import * as path from 'path';

// Read .env.local file
const envPath = path.join(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const supabaseKey = envContent.split('\n')[0].split('=')[1];

const supabaseUrl = 'https://rawjndykfabmbgjdtznk.supabase.co';

const supabase = createClient(supabaseUrl, supabaseKey);

// Function to create a variation of a question by changing numbers
function createVariation(question: typeof questions[0], newId: number): typeof questions[0] {
  const multiplier = Math.floor(Math.random() * 3) + 2; // Random multiplier between 2-4
  
  // Replace numbers in question text with multiplied values
  const newQuestion = question.question.replace(/\d+/g, (match) => {
    const num = parseInt(match);
    return (num * multiplier).toString();
  });
  
  // Update options if they contain numbers
  const newOptions = question.options.map(option => {
    return option.replace(/\d+/g, (match) => {
      const num = parseInt(match);
      return (num * multiplier).toString();
    });
  });
  
  // Update correct answer
  const newCorrect = question.correct.replace(/\d+/g, (match) => {
    const num = parseInt(match);
    return (num * multiplier).toString();
  });
  
  // Update explanation if it contains numbers
  const newExplanation = question.explanation?.replace(/\d+/g, (match) => {
    const num = parseInt(match);
    return (num * multiplier).toString();
  });
  
  return {
    ...question,
    id: newId,
    question: newQuestion,
    options: newOptions,
    correct: newCorrect,
    explanation: newExplanation
  };
}

async function uploadQuestions() {
  try {
    console.log('🚀 Starting upload process...');
    console.log(`📊 Original questions in file: ${questions.length}`);
    
    // Create duplicated questions with variations
    const duplicatedQuestions = questions.map((q, index) => 
      createVariation(q, questions.length + index + 1)
    );
    
    console.log(`📊 Duplicated questions: ${duplicatedQuestions.length}`);
    
    // Combine original and duplicated
    const allQuestions = [...questions, ...duplicatedQuestions];
    console.log(`📊 Total questions to upload: ${allQuestions.length}`);
    
    // Prepare data for Supabase (without id, let DB auto-generate)
    const dataToInsert = allQuestions.map(q => ({
      question: q.question,
      options: JSON.stringify(q.options),
      correct: q.correct,
      category: q.category,
      topic: q.topic,
      explanation: q.explanation || null
    }));
    
    // Insert in batches of 100
    const batchSize = 100;
    for (let i = 0; i < dataToInsert.length; i += batchSize) {
      const batch = dataToInsert.slice(i, i + batchSize);
      console.log(`📤 Uploading batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(dataToInsert.length / batchSize)}...`);
      
      const { error } = await supabase
        .from('ratio_questions')
        .insert(batch);
      
      if (error) {
        console.error('❌ Error inserting batch:', error);
        throw error;
      }
      
      console.log(`✅ Batch ${Math.floor(i / batchSize) + 1} uploaded successfully`);
    }
    
    console.log('🎉 All questions uploaded successfully!');
    
    // Verify the count
    const { count, error: countError } = await supabase
      .from('ratio_questions')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      console.error('❌ Error counting questions:', countError);
    } else {
      console.log(`✅ Total questions in database: ${count}`);
    }
    
  } catch (error) {
    console.error('❌ Upload failed:', error);
    process.exit(1);
  }
}

uploadQuestions();

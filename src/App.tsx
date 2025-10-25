import React, { useState, useEffect } from 'react';
import { BookOpen, Trophy, Target, RotateCcw, CheckCircle, XCircle, ArrowRight, Sparkles, Star, Zap, Award, Ruler, Clock, Thermometer, FileText, Lightbulb, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Send, AlertCircle } from 'lucide-react';
import { questions } from './data/questions';
import { Question } from './types';
import { extraExercises, ExtraExercise, exerciseTopics } from './data/extra-exercises-new';
import { evaluateAnswer } from './utils/answerEvaluation';

const shuffleArray = <T,>(items: T[]): T[] => {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
};

const revisionTips: Record<string, string> = {
  all: 'Blended practice: look for the relationship between parts and totals before you commit to an answer.',
  notation: 'Use the highest common factor to simplify ratios swiftly and express them neatly.',
  equivalent: 'Treat equivalent ratios like fractions — scale both parts by the same factor.',
  simplifying: 'Divide each part by the highest common factor to reach simplest form without fuss.',
  proportion: 'Find the value of one part first, then scale up to the amount you require.',
  combining: 'Match the shared letter so the middle term is equal before weaving the ratios together.',
  sharing: 'Add the parts, find one share, then multiply up to see who receives what.',
  division: 'Translate the ratio into total parts so you can rebuild the whole quantity accurately.',
  'reading-scales': 'Count the divisions carefully and work out what each small mark represents before reading the value.',
  'length-conversion': 'Remember: converting to smaller units means multiply, converting to larger units means divide.',
  'mass-conversion': '1000 grams = 1 kilogram. Move the decimal point three places when converting.',
  'volume-conversion': '1000 millilitres = 1 litre. Think about the size of the unit to decide multiply or divide.',
  'time-conversion': 'For PM times (except 12:00 pm), add 12 to convert to 24-hour. For AM times, just add a leading zero.',
  'time-calculation': 'Remember: 60 minutes = 1 hour. When adding or subtracting, carry or borrow carefully.',
  timetables: 'Work backwards from your arrival time to find the latest departure. Check each column carefully.',
  temperature: 'Negative temperatures go below zero. The further below zero, the colder it is.',
  mixed: 'Break each problem down: a quick sketch or jot can make the relationship clearer.',
  default: 'Look for structure in the numbers and keep an eye on place value as you reason it through.',
};

const TARGET_QUESTION_COUNT = 12;

function App() {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'results' | 'exercises'>('menu');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [roundLength, setRoundLength] = useState<number>(TARGET_QUESTION_COUNT);
  const [topicScores, setTopicScores] = useState<{ [key: string]: { correct: number; total: number } }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [selectedExerciseTopic, setSelectedExerciseTopic] = useState<string | null>(null);
  const [currentExercise, setCurrentExercise] = useState<ExtraExercise | null>(null);
  const [topicExercises, setTopicExercises] = useState<ExtraExercise[]>([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showExerciseHint, setShowExerciseHint] = useState(false);
  const [showExerciseSolution, setShowExerciseSolution] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<{
    isCorrect: boolean;
    confidence: number;
    feedback: string;
    suggestions?: string[];
  } | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const topics = [
    { id: 'all', name: 'All Topics', icon: BookOpen, color: 'from-indigo-500 via-violet-500 to-sky-500', accent: 'bg-indigo-100 text-indigo-700' },
    { id: 'notation', name: 'Ratio Language & Notation', icon: Target, color: 'from-blue-500 via-sky-500 to-cyan-500', accent: 'bg-blue-100 text-blue-700' },
    { id: 'equivalent', name: 'Equivalent Ratios', icon: CheckCircle, color: 'from-emerald-500 via-teal-500 to-green-500', accent: 'bg-emerald-100 text-emerald-700' },
    { id: 'simplifying', name: 'Simplifying Ratios', icon: RotateCcw, color: 'from-orange-500 via-amber-500 to-yellow-500', accent: 'bg-amber-100 text-amber-700' },
    { id: 'proportion', name: 'Direct Proportion', icon: ArrowRight, color: 'from-rose-500 via-red-500 to-pink-500', accent: 'bg-rose-100 text-rose-700' },
    { id: 'combining', name: 'Combining Ratios', icon: Trophy, color: 'from-yellow-500 via-orange-500 to-amber-500', accent: 'bg-yellow-100 text-yellow-700' },
    { id: 'sharing', name: 'Sharing in a Ratio', icon: Target, color: 'from-teal-500 via-cyan-500 to-sky-500', accent: 'bg-teal-100 text-teal-700' },
    { id: 'division', name: 'Proportional Division', icon: CheckCircle, color: 'from-indigo-500 via-purple-500 to-violet-500', accent: 'bg-purple-100 text-purple-700' },
    { id: 'reading-scales', name: 'Reading Scales', icon: Ruler, color: 'from-cyan-500 via-blue-500 to-indigo-500', accent: 'bg-cyan-100 text-cyan-700' },
    { id: 'length-conversion', name: 'Length Conversions', icon: Ruler, color: 'from-lime-500 via-green-500 to-emerald-500', accent: 'bg-lime-100 text-lime-700' },
    { id: 'mass-conversion', name: 'Mass Conversions', icon: Target, color: 'from-violet-500 via-purple-500 to-fuchsia-500', accent: 'bg-violet-100 text-violet-700' },
    { id: 'volume-conversion', name: 'Volume Conversions', icon: Trophy, color: 'from-sky-500 via-blue-500 to-cyan-500', accent: 'bg-sky-100 text-sky-700' },
    { id: 'time-conversion', name: 'Time Conversions', icon: Clock, color: 'from-amber-500 via-orange-500 to-red-500', accent: 'bg-amber-100 text-amber-700' },
    { id: 'time-calculation', name: 'Time Calculations', icon: Clock, color: 'from-pink-500 via-rose-500 to-red-500', accent: 'bg-pink-100 text-pink-700' },
    { id: 'timetables', name: 'Timetables', icon: BookOpen, color: 'from-teal-500 via-emerald-500 to-green-500', accent: 'bg-teal-100 text-teal-700' },
    { id: 'temperature', name: 'Temperature', icon: Thermometer, color: 'from-red-500 via-orange-500 to-yellow-500', accent: 'bg-red-100 text-red-700' },
    { id: 'mixed', name: 'Mixed Review', icon: Sparkles, color: 'from-pink-500 via-fuchsia-500 to-rose-500', accent: 'bg-pink-100 text-pink-700' },
  ];

  const topicCount = topics.filter(topic => topic.id !== 'all').length;
  const totalQuestionCount = questions.length;
  const selectedTopicData = topics.find(topic => topic.id === selectedTopic);
  const topicName = selectedTopicData?.name ?? topics[0].name;
  const topicDescriptor = selectedTopic === 'all' ? 'the mixed set' : `the "${topicName}" set`;
  const revisionTip = revisionTips[selectedTopic] ?? revisionTips.default;
  const accuracy = questionsAnswered > 0 ? Math.round((score / questionsAnswered) * 100) : null;

  useEffect(() => {
    if (gameState === 'playing' && gameQuestions.length > 0) {
      setCurrentQuestion(gameQuestions[questionIndex]);
    }
  }, [gameState, questionIndex, gameQuestions]);

  const startGame = async (topic: string) => {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 600));

    const filteredQuestions = topic === 'all'
      ? questions
      : questions.filter(q => q.topic === topic);

    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    const requestedCount = Math.min(TARGET_QUESTION_COUNT, shuffled.length);
    const count = Math.max(requestedCount, 1);
    const selectedQuestions = shuffled.slice(0, count).map(question => ({
      ...question,
      options: shuffleArray(question.options),
    }));

    setGameQuestions(selectedQuestions);
    setRoundLength(selectedQuestions.length);
    setSelectedTopic(topic);
    setGameState('playing');
    setQuestionIndex(0);
    setScore(0);
    setQuestionsAnswered(0);
    setSelectedAnswer('');
    setShowResult(false);
    setTopicScores({});
    setStreak(0);
    setBestStreak(0);
    setIsLoading(false);
  };

  const handleAnswerSelect = (answer: string) => {
    if (showResult || !currentQuestion) return;

    setSelectedAnswer(answer);
    setShowResult(true);
    setQuestionsAnswered(previous => previous + 1);

    const isCorrect = answer === currentQuestion.correct;

    if (isCorrect) {
      setScore(previous => previous + 1);
      setStreak(previous => {
        const updated = previous + 1;
        setBestStreak(current => Math.max(current, updated));
        return updated;
      });

      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 1500);
    } else {
      setStreak(0);
    }

    setTopicScores(previous => ({
      ...previous,
      [currentQuestion.topic]: {
        correct: (previous[currentQuestion.topic]?.correct || 0) + (isCorrect ? 1 : 0),
        total: (previous[currentQuestion.topic]?.total || 0) + 1,
      },
    }));

    setTimeout(() => {
      if (questionIndex < gameQuestions.length - 1) {
        setQuestionIndex(previous => previous + 1);
        setSelectedAnswer('');
        setShowResult(false);
      } else {
        setGameState('results');
      }
    }, 2500);
  };

  const resetGame = () => {
    setGameState('menu');
    setSelectedTopic('all');
    setCurrentQuestion(null);
    setQuestionIndex(0);
    setScore(0);
    setQuestionsAnswered(0);
    setSelectedAnswer('');
    setShowResult(false);
    setGameQuestions([]);
    setTopicScores({});
    setStreak(0);
    setBestStreak(0);
    setRoundLength(TARGET_QUESTION_COUNT);
  };

  const getScoreColour = (percentage: number) => {
    if (percentage >= 80) return 'text-emerald-600';
    if (percentage >= 60) return 'text-amber-600';
    return 'text-rose-600';
  };

  const getPerformanceMessage = (percentage: number) => {
    if (percentage >= 90) return { message: 'Top marks!', icon: Award, color: 'text-emerald-600' };
    if (percentage >= 80) return { message: 'Brilliant work!', icon: Trophy, color: 'text-indigo-600' };
    if (percentage >= 70) return { message: 'Splendid effort!', icon: Star, color: 'text-sky-600' };
    if (percentage >= 60) return { message: 'Nice going!', icon: Zap, color: 'text-amber-600' };
    return { message: 'Keep practising!', icon: Target, color: 'text-rose-600' };
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin" />
          <p className="mt-6 text-base font-medium text-slate-600">Preparing your set…</p>
        </div>
      </div>
    );
  }

  if (gameState === 'menu') {
    return (
      <div className="relative min-h-screen overflow-hidden bg-slate-100">
        <div className="mesh-overlay" />
        <div className="pattern-grid opacity-40" />
        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-100px] h-[420px] w-[420px] rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-16 lg:px-10">
          <main className="rounded-3xl border border-white/70 bg-white/85 p-10 shadow-xl backdrop-blur">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">Choose your challenge</h2>
                <p className="mt-1 text-sm text-slate-500">Select a strand or sample the lot.</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setGameState('exercises')}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:from-purple-700 hover:to-pink-700"
                >
                  <FileText className="h-4 w-4" />
                  Extra Exercises
                </button>
                <div className="text-sm text-slate-500">
                  {TARGET_QUESTION_COUNT} questions per session · Answers reshuffle every run
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {topics.map(topic => {
                const Icon = topic.icon;
                const topicQuestions = topic.id === 'all'
                  ? totalQuestionCount
                  : questions.filter(q => q.topic === topic.id).length;

                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => startGame(topic.id)}
                    className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white/90 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${topic.color} text-white shadow-lg transition group-hover:scale-105`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{topic.name}</h3>
                      <p className="mt-2 text-sm text-slate-500">
                        {topicQuestions} question{topicQuestions === 1 ? '' : 's'} available
                      </p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-indigo-600">
                      Have a go
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </button>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (gameState === 'results') {
    const percentage = Math.round((score / Math.max(roundLength, 1)) * 100);
    const performance = getPerformanceMessage(percentage);
    const PerformanceIcon = performance.icon;
    const topicPerformanceEntries = Object.entries(topicScores);

    return (
      <div className="relative min-h-screen overflow-hidden bg-slate-100">
        <div className="mesh-overlay" />
        <div className="pattern-grid opacity-30" />
        <div className="absolute left-[-140px] top-24 h-[420px] w-[420px] rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-100px] h-[460px] w-[460px] rounded-full bg-indigo-200/40 blur-3xl" />

        {percentage >= 80 && (
          <div className="celebration-container">
            {[...Array(24)].map((_, index) => (
              <div
                key={index}
                className="celebration-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:px-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-500">Quiz complete</p>
              <h1 className="mt-2 text-4xl font-semibold text-slate-900">Splendid work!</h1>
              <p className="mt-3 text-slate-600">
                You navigated {topicDescriptor} with confidence. Here’s how you performed.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => startGame(selectedTopic)}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur transition hover:border-indigo-300 hover:text-indigo-900"
              >
                <RotateCcw className="h-4 w-4" />
                Take this set again
              </button>
              <button
                type="button"
                onClick={resetGame}
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-indigo-700"
              >
                <Sparkles className="h-4 w-4" />
                Choose another focus
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr),320px]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/70 bg-white/85 p-10 shadow-xl backdrop-blur">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 p-5 shadow-lg">
                      <PerformanceIcon className={`h-10 w-10 ${performance.color}`} />
                    </div>
                    <div>
                      <h2 className={`text-3xl font-semibold ${performance.color}`}>{performance.message}</h2>
                      <p className="mt-1 text-sm text-slate-500">Overall accuracy {percentage}% across {roundLength} questions.</p>
                    </div>
                  </div>

                  {bestStreak > 0 && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                      <Zap className="h-4 w-4" />
                      Best streak: {bestStreak}
                    </div>
                  )}
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6">
                    <span className="text-sm font-medium text-indigo-600">Overall accuracy</span>
                    <p className="mt-3 text-4xl font-semibold text-indigo-700">{percentage}%</p>
                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-indigo-100">
                      <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" style={{ width: `${percentage}%` }} />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6">
                    <span className="text-sm font-medium text-emerald-600">Correct answers</span>
                    <p className="mt-3 text-4xl font-semibold text-emerald-700">{score}</p>
                    <p className="mt-2 text-sm text-emerald-600">out of {roundLength}</p>
                  </div>

                  <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-6">
                    <span className="text-sm font-medium text-sky-600">Topics covered</span>
                    <p className="mt-3 text-4xl font-semibold text-sky-700">{Object.keys(topicScores).length}</p>
                    <p className="mt-2 text-sm text-sky-600">areas revised this round</p>
                  </div>
                </div>
              </div>

              {topicPerformanceEntries.length > 0 && (
                <div className="rounded-3xl border border-white/70 bg-white/85 p-8 shadow-xl backdrop-blur">
                  <h3 className="text-2xl font-semibold text-slate-900">Topic insights</h3>
                  <p className="mt-2 text-sm text-slate-500">Spot the strands where you shone and the ones that need another look.</p>

                  <div className="mt-6 space-y-4">
                    {topicPerformanceEntries.map(([topicId, scores], index) => {
                      const topicData = topics.find(topic => topic.id === topicId);
                      const TopicIcon = topicData?.icon ?? Target;
                      const topicPercentage = Math.round((scores.correct / scores.total) * 100);

                      return (
                        <div
                          key={topicId}
                          className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm"
                          style={{ animationDelay: `${100 * index}ms` }}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`rounded-xl ${topicData?.accent ?? 'bg-indigo-100 text-indigo-700'} p-2`}>
                              <TopicIcon className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-700">{topicData?.name ?? topicId}</p>
                              <p className="text-xs text-slate-500">Answered {scores.correct} of {scores.total}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="h-2 w-32 overflow-hidden rounded-full bg-slate-200">
                              <div
                                className={`${topicPercentage >= 80 ? 'bg-emerald-500' : topicPercentage >= 60 ? 'bg-amber-500' : 'bg-rose-500'} h-full rounded-full`}
                                style={{ width: `${topicPercentage}%` }}
                              />
                            </div>
                            <span className={`text-sm font-semibold ${getScoreColour(topicPercentage)}`}>{topicPercentage}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-6 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-800">Where next?</h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <Star className="mt-1 h-4 w-4 text-indigo-500" />
                  <span>Review explanations you found tricky and note any methods to revisit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="mt-1 h-4 w-4 text-indigo-500" />
                  <span>Swap to another topic to keep your revision balanced.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="mt-1 h-4 w-4 text-indigo-500" />
                  <span>Challenge yourself by aiming for a longer streak next time.</span>
                </li>
              </ul>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-600">
                Remember: in British English we <span className="font-semibold">practise</span> regularly to build fluency. Have another go whenever you’re ready.
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'exercises') {
    // Se não há tópico selecionado, mostrar lista de tópicos
    if (!selectedExerciseTopic) {
      return (
        <div className="relative min-h-screen overflow-hidden bg-slate-100">
          <div className="mesh-overlay" />
          <div className="pattern-grid opacity-40" />
          <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl" />
          <div className="absolute bottom-[-140px] right-[-100px] h-[420px] w-[420px] rounded-full bg-pink-200/40 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:px-10">
            <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-500">Practice & Learn</p>
                <h1 className="mt-2 text-4xl font-semibold text-slate-900">Extra Exercises</h1>
                <p className="mt-3 text-slate-600">
                  Choose a topic to start practising. Work through exercises at your own pace.
                </p>
              </div>

              <button
                type="button"
                onClick={resetGame}
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-indigo-700"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to Quiz
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {exerciseTopics.map((topic) => {
                const topicExercises = extraExercises.filter(ex => ex.topic === topic.id);
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => {
                      // Pegar todos os exercícios do tópico
                      const exercises = extraExercises.filter(ex => ex.topic === topic.id);
                      if (exercises.length > 0) {
                        // Configurar para fazer todos os exercícios em sequência
                        setSelectedExerciseTopic(topic.id);
                        setTopicExercises(exercises);
                        setCurrentExerciseIndex(0);
                        setCurrentExercise(exercises[0]);
                        setCurrentPartIndex(0);
                        setUserAnswer('');
                        setShowExerciseHint(false);
                        setShowExerciseSolution(false);
                        setSubmittedAnswer(false);
                        setEvaluationResult(null);
                        setIsEvaluating(false);
                      }
                    }}
                    className="group flex flex-col items-start gap-4 rounded-3xl border border-white/70 bg-white/90 p-8 text-left shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${topic.color} text-white shadow-lg text-3xl`}>
                      {topic.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{topic.name}</h3>
                      <p className="mt-2 text-sm text-slate-500">
                        {topicExercises.length} exercise{topicExercises.length === 1 ? '' : 's'} available
                      </p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-indigo-600">
                      Start practising
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-12 rounded-3xl border border-white/70 bg-white/90 p-8 shadow-xl backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">How It Works</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Choose a topic and select an exercise</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Read the question and write your answer in the text box</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Use the hint if you need help</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Check the step-by-step solution to learn the method</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Tela intermediária removida - agora vai direto para os exercícios

    // Mostrar exercício atual
    if (!currentExercise) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100">
          <p className="text-base text-slate-600">Loading exercise…</p>
        </div>
      );
    }

    const currentPart = currentExercise.parts[currentPartIndex];
    const topicData = exerciseTopics.find(t => t.id === currentExercise.topic);
    const isLastPart = currentPartIndex === currentExercise.parts.length - 1;

    return (
      <div className="relative min-h-screen overflow-hidden bg-slate-100">
        <div className="mesh-overlay" />
        <div className="pattern-grid opacity-40" />
        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-100px] h-[420px] w-[420px] rounded-full bg-pink-200/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-14 lg:px-10">
          {/* Header */}
          <div className="mb-8">
            <button
              type="button"
              onClick={() => {
                setCurrentExercise(null);
                setSelectedExerciseTopic(null);
                setTopicExercises([]);
                setCurrentExerciseIndex(0);
                setCurrentPartIndex(0);
                setUserAnswer('');
                setShowExerciseHint(false);
                setShowExerciseSolution(false);
                setSubmittedAnswer(false);
                setEvaluationResult(null);
                setIsEvaluating(false);
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 mb-4"
            >
              <ChevronLeft className="h-4 w-4" />
              Exit topic
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${topicData?.color} text-white font-bold`}>
                {currentExercise.id}
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-slate-900">{currentExercise.title}</h1>
                <p className="text-sm text-slate-500">
                  Exercise {currentExerciseIndex + 1} of {topicExercises.length} • Part {currentPartIndex + 1} of {currentExercise.parts.length}
                </p>
              </div>
            </div>
          </div>

          {/* Question Card */}
          <div className="rounded-3xl border border-white/70 bg-white/90 p-8 shadow-xl backdrop-blur mb-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Question</h2>
            <p className="text-base text-slate-700 leading-relaxed">{currentPart.question}</p>

            {/* Answer Input */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Answer
              </label>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Write your answer here..."
                className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                rows={4}
                disabled={submittedAnswer}
              />
              
              {!submittedAnswer && (
                <button
                  type="button"
                  onClick={async () => {
                    setIsEvaluating(true);
                    setSubmittedAnswer(true);
                    
                    // Avaliar resposta com Gemini AI
                    const result = await evaluateAnswer(
                      userAnswer,
                      currentPart.correctAnswers,
                      currentPart.commonMistakes,
                      currentPart.question,
                      currentPart.hint,
                      true // Usando Gemini AI para Extra Exercises
                    );
                    
                    setEvaluationResult(result);
                    setIsEvaluating(false);
                  }}
                  disabled={!userAnswer.trim() || isEvaluating}
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                  {isEvaluating ? 'Evaluating...' : 'Submit Answer'}
                </button>
              )}
              
              {submittedAnswer && evaluationResult && (
                <div className={`mt-4 rounded-2xl border-2 p-4 ${
                  evaluationResult.isCorrect
                    ? 'border-emerald-200 bg-emerald-50'
                    : 'border-amber-200 bg-amber-50'
                }`}>
                  <div className="flex items-start gap-3">
                    {evaluationResult.isCorrect ? (
                      <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className={`font-semibold ${
                        evaluationResult.isCorrect ? 'text-emerald-900' : 'text-amber-900'
                      }`}>
                        {evaluationResult.feedback}
                      </p>
                      {evaluationResult.suggestions && evaluationResult.suggestions.length > 0 && (
                        <ul className="mt-2 space-y-1">
                          {evaluationResult.suggestions.map((suggestion, idx) => (
                            <li key={idx} className="text-sm text-amber-800 flex gap-2">
                              <span>•</span>
                              <span>{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {!evaluationResult.isCorrect && (
                        <button
                          type="button"
                          onClick={() => {
                            setSubmittedAnswer(false);
                            setEvaluationResult(null);
                            setUserAnswer('');
                          }}
                          className="mt-3 text-sm font-medium text-amber-700 hover:text-amber-900 underline"
                        >
                          Try again
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Hint Card */}
          <div className="rounded-3xl border border-amber-200 bg-amber-50/90 p-6 shadow-lg backdrop-blur mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-600" />
                <h3 className="text-base font-semibold text-amber-900">Hint</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowExerciseHint(!showExerciseHint)}
                className="text-sm font-medium text-amber-700 hover:text-amber-900 transition"
              >
                {showExerciseHint ? 'Hide' : 'Show'} hint
              </button>
            </div>
            {showExerciseHint && (
              <p className="text-sm text-amber-800 leading-relaxed">{currentPart.hint}</p>
            )}
          </div>

          {/* Solution Card - Only show if answer is CORRECT */}
          {submittedAnswer && evaluationResult && evaluationResult.isCorrect && (
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/90 p-6 shadow-lg backdrop-blur mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-base font-semibold text-emerald-900">Step-by-Step Solution</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowExerciseSolution(!showExerciseSolution)}
                  className="text-sm font-medium text-emerald-700 hover:text-emerald-900 transition"
                >
                  {showExerciseSolution ? 'Hide' : 'Show'} solution
                </button>
              </div>
              {showExerciseSolution && (
                <div className="space-y-2">
                  {currentPart.solution.map((line, idx) => (
                    <p
                      key={idx}
                      className={`text-sm leading-relaxed ${
                        line.startsWith('•') || line.startsWith('Step') || line.startsWith('Answer')
                          ? 'font-medium text-emerald-900'
                          : line === ''
                          ? 'h-2'
                          : 'text-emerald-800 ml-4'
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                setCurrentPartIndex(currentPartIndex - 1);
                setUserAnswer('');
                setShowExerciseHint(false);
                setShowExerciseSolution(false);
                setSubmittedAnswer(false);
                setEvaluationResult(null);
                setIsEvaluating(false);
              }}
              disabled={currentPartIndex === 0}
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            {!isLastPart ? (
              <button
                type="button"
                onClick={() => {
                  setCurrentPartIndex(currentPartIndex + 1);
                  setUserAnswer('');
                  setShowExerciseHint(false);
                  setShowExerciseSolution(false);
                  setSubmittedAnswer(false);
                  setEvaluationResult(null);
                  setIsEvaluating(false);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-indigo-700"
              >
                Next Part
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  // Verificar se há mais exercícios no tópico
                  const nextExerciseIndex = currentExerciseIndex + 1;
                  if (nextExerciseIndex < topicExercises.length) {
                    // Ir para o próximo exercício
                    setCurrentExerciseIndex(nextExerciseIndex);
                    setCurrentExercise(topicExercises[nextExerciseIndex]);
                    setCurrentPartIndex(0);
                    setUserAnswer('');
                    setShowExerciseHint(false);
                    setShowExerciseSolution(false);
                    setSubmittedAnswer(false);
                    setEvaluationResult(null);
                    setIsEvaluating(false);
                  } else {
                    // Último exercício - voltar ao menu de tópicos
                    setCurrentExercise(null);
                    setSelectedExerciseTopic(null);
                    setTopicExercises([]);
                    setCurrentExerciseIndex(0);
                    setCurrentPartIndex(0);
                    setUserAnswer('');
                    setShowExerciseHint(false);
                    setShowExerciseSolution(false);
                    setSubmittedAnswer(false);
                    setEvaluationResult(null);
                    setIsEvaluating(false);
                  }
                }}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-emerald-700"
              >
                {currentExerciseIndex < topicExercises.length - 1 ? (
                  <>
                    Next Exercise
                    <ArrowRight className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Complete Topic
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="text-base text-slate-600">Preparing your first question…</p>
      </div>
    );
  }

  const progress = ((questionIndex + 1) / Math.max(roundLength, 1)) * 100;

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100">
      <div className="mesh-overlay" />
      <div className="pattern-grid opacity-30" />
      <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-120px] h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />

      {showCelebration && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="celebration-burst">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="celebration-particle"
                style={{
                  '--angle': `${index * 30}deg`,
                  animationDelay: `${index * 0.1}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 lg:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <button
              type="button"
              onClick={resetGame}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition mb-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Exit quiz
            </button>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/70 px-4 py-1 text-xs font-medium text-indigo-600 shadow-sm backdrop-blur">
              <Target className="h-3.5 w-3.5" />
              {topicName}
            </div>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">
              Question {questionIndex + 1} of {roundLength}
            </h1>
            <p className="text-sm text-slate-500">
              {selectedTopic === 'all'
                ? 'A blended practice round drawing from every strand.'
                : `Focused practice: ${topicName}.`}
            </p>
          </div>

          <div className="flex items-center gap-6 rounded-3xl border border-white/70 bg-white/80 px-6 py-4 shadow-lg backdrop-blur">
            <div>
              <span className="text-xs uppercase text-slate-500">Score</span>
              <p className="text-2xl font-semibold text-slate-900">{score}</p>
            </div>
            <div className="h-10 w-px bg-slate-200" />
            <div>
              <span className="text-xs uppercase text-slate-500">Current streak</span>
              <p className="text-2xl font-semibold text-indigo-600">{streak}</p>
            </div>
          </div>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px,minmax(0,1fr)]">
          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-lg backdrop-blur">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-600">Progress</span>
                <span className="font-semibold text-indigo-600">
                  {questionIndex + 1}/{roundLength}
                </span>
              </div>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                  style={{ width: `${progress}%` }}
                />
              </div>
              {accuracy !== null && (
                <p className="mt-4 text-xs text-slate-500">
                  Accuracy so far: <span className="font-semibold text-slate-700">{accuracy}%</span>
                </p>
              )}
            </div>

            <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur">
              <h3 className="text-sm font-semibold text-slate-700">Revision tip</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{revisionTip}</p>
            </div>

            {bestStreak > 0 && (
              <div className="rounded-3xl border border-indigo-100 bg-indigo-50/70 p-6 shadow-lg">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-500">Best streak</p>
                <p className="mt-3 text-3xl font-semibold text-indigo-700">{bestStreak}</p>
                <p className="mt-1 text-xs text-indigo-500">Keep your steady pace for another star.</p>
              </div>
            )}
          </aside>

          <main className="rounded-3xl border border-white/70 bg-white/90 p-10 shadow-2xl backdrop-blur">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1 text-xs font-medium text-emerald-700">
                  <BookOpen className="h-4 w-4" />
                  {currentQuestion.category}
                </div>
                <h2 className="mt-4 text-2xl font-semibold leading-relaxed text-slate-900">
                  {currentQuestion.question}
                </h2>
              </div>

              {streak >= 3 && (
                <div className="flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 shadow-sm">
                  <Star className="h-4 w-4 text-amber-500" />
                  On a roll!
                </div>
              )}
            </div>

            {/* Answer Input */}
            <div className="mt-8">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Answer
              </label>
              <textarea
                value={selectedAnswer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                placeholder="Write your answer here..."
                className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                rows={3}
                disabled={showResult}
              />
              
              {!showResult && (
                <button
                  type="button"
                  onClick={async () => {
                    if (!selectedAnswer.trim()) return;
                    
                    setShowResult(true);
                    setQuestionsAnswered(previous => previous + 1);
                    
                    // Avaliar resposta com Gemini
                    const result = await evaluateAnswer(
                      selectedAnswer,
                      currentQuestion.correctAnswers || [currentQuestion.correct],
                      undefined,
                      currentQuestion.question,
                      currentQuestion.explanation || '',
                      true // Usando Gemini AI
                    );
                    
                    const isCorrect = result.isCorrect;

                    if (isCorrect) {
                      setScore(previous => previous + 1);
                      setStreak(previous => {
                        const updated = previous + 1;
                        setBestStreak(current => Math.max(current, updated));
                        return updated;
                      });

                      setShowCelebration(true);
                      setTimeout(() => setShowCelebration(false), 1500);
                    } else {
                      setStreak(0);
                    }

                    setTopicScores(previous => ({
                      ...previous,
                      [currentQuestion.topic]: {
                        correct: (previous[currentQuestion.topic]?.correct || 0) + (isCorrect ? 1 : 0),
                        total: (previous[currentQuestion.topic]?.total || 0) + 1,
                      },
                    }));

                    setTimeout(() => {
                      if (questionIndex < gameQuestions.length - 1) {
                        setQuestionIndex(previous => previous + 1);
                        setSelectedAnswer('');
                        setShowResult(false);
                      } else {
                        setGameState('results');
                      }
                    }, 3500);
                  }}
                  disabled={!selectedAnswer.trim()}
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                  Submit Answer
                </button>
              )}
            </div>

            <div className="mt-8 hidden">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQuestion.correct;
                const isWrong = isSelected && !isCorrect && showResult;
                const optionLetter = String.fromCharCode(65 + index);

                let buttonClass =
                  'group relative flex items-center justify-between gap-4 rounded-2xl border-2 bg-white/85 p-6 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200';

                if (showResult) {
                  if (isCorrect) {
                    buttonClass += ' border-emerald-500 bg-emerald-50/90 text-emerald-700 shadow-lg';
                  } else if (isWrong) {
                    buttonClass += ' border-rose-500 bg-rose-50/90 text-rose-700 shake';
                  } else {
                    buttonClass += ' border-slate-200 text-slate-500';
                  }
                } else {
                  buttonClass += isSelected
                    ? ' border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md'
                    : ' border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/80 hover:text-indigo-700';
                }

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showResult}
                    className={buttonClass}
                    style={{ animationDelay: `${200 + index * 80}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold ${
                          showResult
                            ? isCorrect
                              ? 'bg-emerald-100 text-emerald-700'
                              : isWrong
                              ? 'bg-rose-100 text-rose-700'
                              : 'bg-slate-100 text-slate-500'
                            : isSelected
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {optionLetter}
                      </span>
                      <span className="text-base font-medium text-current">{option}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {showResult && isCorrect && (
                        <span className="flex items-center gap-1 text-sm font-semibold text-emerald-600">
                          <CheckCircle className="h-4 w-4" />
                          Correct
                        </span>
                      )}
                      {showResult && isWrong && (
                        <span className="flex items-center gap-1 text-sm font-semibold text-rose-600">
                          <XCircle className="h-4 w-4" />
                          Try again
                        </span>
                      )}
                      {!showResult && isSelected && (
                        <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  {selectedAnswer === currentQuestion.correct ? (
                    <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  ) : (
                    <div className="rounded-2xl bg-rose-100 p-3 text-rose-600">
                      <XCircle className="h-5 w-5" />
                    </div>
                  )}
                  <div>
                    <p className="text-base font-semibold text-slate-800">
                      {selectedAnswer === currentQuestion.correct ? 'Brilliant work!' : 'Good effort — here’s the method.'}
                    </p>
                    {currentQuestion.explanation && (
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {currentQuestion.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

'use client'

import { useState } from 'react';

// Define types for quiz questions
type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: number;
};

export function Quiz({ 
  questions, 
  onComplete 
}: { 
  questions: QuizQuestion[],
  onComplete?: (score: number, total: number) => void
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [resultsSent, setResultsSent] = useState(false);
  
  const handleAnswerClick = (isCorrect: boolean, index: number) => {
    if (!answered) {
      setSelectedAnswer(index);
      setAnswered(true);
      if (isCorrect) {
        setScore(score + 1);
      }
      
      // Move to next question after a delay
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setAnswered(false);
          setSelectedAnswer(null);
        } else {
          setShowResults(true);
        }
      }, 1500);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setAnswered(false);
    setSelectedAnswer(null);
  };
  
  if (showResults) {
    if (onComplete && !resultsSent) {
      onComplete(score, questions.length);
      setResultsSent(true);
    }
    
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Resultaten</h2>
        <p className="text-xl mb-4">Je score: {score} van de {questions.length}</p>
        <button 
          onClick={resetQuiz}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Opnieuw proberen
        </button>
      </div>
    );
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-2 border-black dark:border-white my-6">
      <h2 className="text-xl font-bold mb-4">Vraag {currentQuestion + 1} van {questions.length}</h2>
      <p className="mb-4">{questions[currentQuestion].question}</p>
      <div className="space-y-2">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(index === questions[currentQuestion].correctAnswer, index)}
            className={`w-full text-left p-3 rounded-lg transition ${
              answered 
                ? index === questions[currentQuestion].correctAnswer
                  ? 'bg-green-200 dark:bg-green-800'
                  : index === selectedAnswer
                    ? 'bg-red-200 dark:bg-red-800'
                    : 'bg-gray-100 dark:bg-gray-700'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
} 
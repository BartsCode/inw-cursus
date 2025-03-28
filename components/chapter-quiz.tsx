'use client'

import { useState } from 'react';
import { BookOpen, X } from 'lucide-react';
import { Quiz } from './quiz';
import { CodeChallenge } from './code-challenge';

// Dictionary quiz questions
const dictionaryQuizQuestions = [
  {
    question: "Wat is het belangrijkste verschil tussen een lijst en een dictionary in Python?",
    options: [
      "Lijsten kunnen alleen getallen bevatten, dictionaries kunnen elk datatype bevatten",
      "Lijsten worden benaderd via een numerieke index, dictionaries via een sleutel",
      "Dictionaries zijn altijd sneller dan lijsten",
      "Lijsten kunnen worden gesorteerd, dictionaries niet"
    ],
    correctAnswer: 1
  },
  {
    question: "Welke van de volgende kan NIET worden gebruikt als sleutel in een dictionary?",
    options: [
      "Een string",
      "Een getal",
      "Een lijst",
      "Een tuple"
    ],
    correctAnswer: 2
  },
  {
    question: "Wat gebeurt er als je een waarde toevoegt met een sleutel die al bestaat in de dictionary?",
    options: [
      "Er wordt een KeyError gegenereerd",
      "De nieuwe waarde wordt genegeerd",
      "De oude waarde wordt overschreven",
      "Er wordt een nieuwe dictionary gemaakt"
    ],
    correctAnswer: 2
  },
  {
    question: "Welke methode gebruik je om een waarde op te halen uit een dictionary zonder een KeyError te riskeren als de sleutel niet bestaat?",
    options: [
      "dictionary.find(key)",
      "dictionary.search(key)",
      "dictionary.get(key)",
      "dictionary.fetch(key)"
    ],
    correctAnswer: 2
  },
  {
    question: "Wat is de uitvoer van de volgende code?\n\nstudent = {'naam': 'Lobna', 'leeftijd': 17}\nprint(list(student.keys()))",
    options: [
      "['naam', 'leeftijd']",
      "['Lobna', 17]",
      "{'naam': 'Lobna', 'leeftijd': 17}",
      "['naam': 'Lobna', 'leeftijd': 17]"
    ],
    correctAnswer: 0
  }
];

// Dictionary code challenge
const dictionaryCodeChallenge = {
  initialCode: `# Maak een functie die een dictionary teruggeeft met 
# studenten als sleutels en hun leeftijden als waarden

def maak_leeftijd_dictionary():
    # Gebruik deze gegevens
    namen = ["Anna", "Bram", "Chen", "Daan", "Emma"]
    leeftijden = [16, 17, 15, 16, 17]
    
    # Jouw code hier
    
    return student_leeftijden

# Test je functie
print(maak_leeftijd_dictionary())`,
  expectedOutput: "{'Anna': 16, 'Bram': 17, 'Chen': 15, 'Daan': 16, 'Emma': 17}",
  hint: "Begin met een lege dictionary",
  solution: `def maak_leeftijd_dictionary():
    # Gebruik deze gegevens
    namen = ["Anna", "Bram", "Chen", "Daan", "Emma"]
    leeftijden = [16, 17, 15, 16, 17]
    
    # Methode 1: met indexen
    student_leeftijden = {}
    for i in range(len(namen)):
        student_leeftijden[namen[i]] = leeftijden[i]
    
    return student_leeftijden

# Test je functie
print(maak_leeftijd_dictionary())`
};

// Add a type for the chapter content
type ChapterContentType = {
  [key: string]: {
    title: string;
    quiz: {
      question: string;
      options: string[];
      correctAnswer: number;
    }[];
    codeChallenge: {
      initialCode: string;
      expectedOutput: string;
      hint: string;
      solution: string;
    };
  };
};

// Map of chapter IDs to their quizzes and challenges
const chapterContent: ChapterContentType = {
  '4_4': {
    title: 'Dictionaries',
    quiz: dictionaryQuizQuestions,
    codeChallenge: dictionaryCodeChallenge
  },
  '4.4': {
    title: 'Dictionaries',
    quiz: dictionaryQuizQuestions,
    codeChallenge: dictionaryCodeChallenge
  }
  // Add more chapters as needed
};

export function ChapterQuiz({ 
  chapterId,
  currentCourse,
  modalMode = false
}: { 
  chapterId: string, 
  currentCourse: string,
  modalMode?: boolean
}) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showChallenge, setShowChallenge] = useState(false);
  
  // Check if we have content for this chapter
  const content = chapterContent[chapterId];
  
  // Add this debug message
  console.log(`ChapterQuiz: chapterId=${chapterId}, content=${content ? 'found' : 'not found'}`);
  
  if (!content) return null;
  
  // Track completion in localStorage to update achievements
  const markQuizCompleted = (score: number, total: number) => {
    const key = `${currentCourse}_quiz_${chapterId}`;
    localStorage.setItem(key, JSON.stringify({ completed: true, score, total }));
    
    // If perfect score, unlock achievement
    if (score === total) {
      const savedAchievements = localStorage.getItem(`achievements_${currentCourse}`);
      const achievements = savedAchievements ? JSON.parse(savedAchievements) : [];
      
      if (!achievements.includes('perfect_quiz')) {
        const newAchievements = [...achievements, 'perfect_quiz'];
        localStorage.setItem(`achievements_${currentCourse}`, JSON.stringify(newAchievements));
      }
    }
  };
  
  const markChallengeCompleted = () => {
    const key = `${currentCourse}_challenge_${chapterId}`;
    localStorage.setItem(key, JSON.stringify({ completed: true }));
    
    // Unlock achievement for first challenge
    const savedAchievements = localStorage.getItem(`achievements_${currentCourse}`);
    const achievements = savedAchievements ? JSON.parse(savedAchievements) : [];
    
    if (!achievements.includes('first_challenge')) {
      const newAchievements = [...achievements, 'first_challenge'];
      localStorage.setItem(`achievements_${currentCourse}`, JSON.stringify(newAchievements));
    }
    
    // Count completed challenges
    const challengeCount = Object.keys(localStorage)
      .filter(key => key.startsWith(`${currentCourse}_challenge_`) && 
              JSON.parse(localStorage.getItem(key) || '{}').completed)
      .length;
    
    // Unlock achievement for 5 challenges
    if (challengeCount >= 5 && !achievements.includes('five_challenges')) {
      const newAchievements = [...achievements, 'five_challenges'];
      localStorage.setItem(`achievements_${currentCourse}`, JSON.stringify(newAchievements));
    }
  };
  
  // If in modal mode, just render the quiz or challenge directly
  if (modalMode) {
    if (content) {
      return (
        <div>
          <Quiz questions={content.quiz} onComplete={markQuizCompleted} />
        </div>
      );
    }
    return null;
  }
  
  // Otherwise render the buttons
  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-bold">Test je kennis</h2>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setShowQuiz(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
        >
          <BookOpen className="w-5 h-5" />
          <span>Quiz: {content.title}</span>
        </button>
        
        <button
          onClick={() => setShowChallenge(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
        >
          <BookOpen className="w-5 h-5" />
          <span>Code Challenge: {content.title}</span>
        </button>
      </div>
      
      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Quiz: {content.title}</h2>
              <button 
                onClick={() => setShowQuiz(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <Quiz questions={content.quiz} onComplete={(score, total) => {
              markQuizCompleted(score, total);
            }} />
          </div>
        </div>
      )}
      
      {showChallenge && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Code Challenge: {content.title}</h2>
              <button 
                onClick={() => setShowChallenge(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <CodeChallenge 
              initialCode={content.codeChallenge.initialCode}
              expectedOutput={content.codeChallenge.expectedOutput}
              hint={content.codeChallenge.hint}
              solution={content.codeChallenge.solution}
              onComplete={() => {
                markChallengeCompleted();
              }}
              showSolutionButton={false}
            />
          </div>
        </div>
      )}
    </div>
  );
} 
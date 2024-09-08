/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import { ComponentPropsWithoutRef } from 'react';
import { BookOpen, ChevronRight, Sun, Moon, ChevronDown } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'
import Script from 'next/script'
import chapter1_1_5WWI from '../content/5WWI/chapter1_1.md'
import chapter1_2_5WWI from '../content/5WWI/chapter1_2.md'
import chapter1_3_5WWI from '../content/5WWI/chapter1_3.md'
import chapter2_1_5WWI from '../content/5WWI/chapter2_1.md'
import chapter2_2_5WWI from '../content/5WWI/chapter2_2.md'

import chapter1_1_5BWE from '../content/5BWE/chapter1_1.md'
import chapter1_2_5BWE from '../content/5BWE/chapter1_2.md'
import chapter2_1_5BWE from '../content/5BWE/chapter2_1.md'

import chapter1_1_6BWE from '../content/6BWE/chapter1_1.md'
import chapter1_2_6BWE from '../content/6BWE/chapter1_2.md'
import chapter2_1_6BWE from '../content/6BWE/chapter2_1.md'

import chapter1_1_5BCW from '../content/5BCW/chapter1_1.md'
import chapter1_2_5BCW from '../content/5BCW/chapter1_2.md'
import chapter2_1_5BCW from '../content/5BCW/chapter2_1.md'
import chapter2_2_5BCW from '../content/5BCW/chapter2_2.md'

const courses = [
  {
    id: 'INW-5WWI/5EWI/5LWI',
    title: 'INW - 5WWI/EWI/LWI: Introductie tot Python',
    description: 'Een basiscursus Python voor 5e jaars WI-leerlingen.',
    chapters: [
      { 
        id: 1, 
        title: "1. Installatie",
        subchapters: [
          { id: '1.1', title: "1.1 Installatie: Python en VS Code" },
          { id: '1.2', title: "1.2 Python testen" },
          { id: '1.3', title: "1.3 VS Code configureren" },
        ]
      },
      {
        id: 2,
        title: "2. Variabelen en Datatypes",
        subchapters: [
          { id: '2.1', title: "2.1 Variabelen" },
          { id: '2.2', title: "2.2 Datatypes" },
        ]
      }
    ]
  },
  {
    id: 'inw-5bwe',
    title: 'INW - 5BWE: Gevorderde Python Concepten',
    description: 'Een gevorderde Python-cursus voor 5e jaars BWE-leerlingen.',
    chapters: [
      {
        id: 1,
        title: "1. Object-Georiënteerd Programmeren",
        subchapters: [
          { id: '1.1', title: "1.1 Klassen en Objecten" },
          { id: '1.2', title: "1.2 Overerving" },
        ]
      },
      {
        id: 2,
        title: "2. Bestandsverwerking",
        subchapters: [
          { id: '2.1', title: "2.1 Bestanden lezen en schrijven" },
        ]
      }
    ]
  },
  {
    id: 'inw-6bwe',
    title: 'INW - 6BWE: Python voor Data-analyse',
    description: 'Een specialistische Python-cursus voor 6e jaars BWE-leerlingen gericht op data-analyse.',
    chapters: [
      {
        id: 1,
        title: "1. Inleiding tot NumPy",
        subchapters: [
          { id: '1.1', title: "1.1 NumPy Arrays" },
          { id: '1.2', title: "1.2 NumPy Operaties" },
        ]
      },
      {
        id: 2,
        title: "2. Data Visualisatie met Matplotlib",
        subchapters: [
          { id: '2.1', title: "2.1 Basis Plotting" },
        ]
      }
    ]
  },
  {
    id: 'inw-5bcw',
    title: 'INW - 5BCW: Python voor Wetenschappelijke Berekeningen',
    description: 'Een Python-cursus gericht op wetenschappelijke berekeningen voor 5e jaars BCW-leerlingen.',
    chapters: [
      {
        id: 1,
        title: "1. Inleiding tot NumPy",
        subchapters: [
          { id: '1.1', title: "1.1 NumPy Basics" },
          { id: '1.2', title: "1.2 Array Operaties" },
        ]
      },
      {
        id: 2,
        title: "2. Wetenschappelijke Berekeningen",
        subchapters: [
          { id: '2.1', title: "2.1 Lineaire Algebra met NumPy" },
          { id: '2.2', title: "2.2 Statistiek met SciPy" },
        ]
      }
    ]
  }
];

const chapterContent = {
  'INW-5WWI/5EWI/5LWI': {
    '1.1': chapter1_1_5WWI,
    '1.2': chapter1_2_5WWI,
    '1.3': chapter1_3_5WWI,
    '2.1': chapter2_1_5WWI,
    '2.2': chapter2_2_5WWI,
  },
  'inw-5bwe': {
    '1.1': chapter1_1_5BWE,
    '1.2': chapter1_2_5BWE,
    '2.1': chapter2_1_5BWE,
  },
  'inw-6bwe': {
    '1.1': chapter1_1_6BWE,
    '1.2': chapter1_2_6BWE,
    '2.1': chapter2_1_6BWE,
  },
  'inw-5bcw': {
    '1.1': chapter1_1_5BCW,
    '1.2': chapter1_2_5BCW,
    '2.1': chapter2_1_5BCW,
    '2.2': chapter2_2_5BCW,
  },
};

export function CourseWebsite() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedChapter, setSelectedChapter] = useState(0)
  const [selectedSubchapter, setSelectedSubchapter] = useState('')
  const [expandedChapters, setExpandedChapters] = useState<Record<number, boolean>>({})
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const toggleChapterExpansion = (chapterId: number) => {
    setExpandedChapters((prev: Record<number, boolean>) => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }))
  }

  const navigateChapter = (direction: 'prev' | 'next') => {
    const selectedCourseData = courses.find(c => c.id === selectedCourse);
    if (!selectedCourseData) return;

    const currentChapterIndex = selectedCourseData.chapters.findIndex(chapter => chapter.id === selectedChapter);
    if (currentChapterIndex === -1) return;

    const currentChapter = selectedCourseData.chapters[currentChapterIndex];
    const currentSubchapterIndex = currentChapter.subchapters.findIndex(subchapter => subchapter.id === selectedSubchapter);
    if (currentSubchapterIndex === -1) return;

    if (direction === 'next') {
      if (currentSubchapterIndex < currentChapter.subchapters.length - 1) {
        // Move to next subchapter
        setSelectedSubchapter(selectedCourseData.chapters[currentChapterIndex].subchapters[currentSubchapterIndex + 1]?.id ?? '');
      } else if (currentChapterIndex < selectedCourseData.chapters.length - 1) {
        // Move to next chapter
        setSelectedChapter(selectedCourseData.chapters[currentChapterIndex + 1]?.id ?? 0);
        setSelectedSubchapter(selectedCourseData.chapters[currentChapterIndex + 1].subchapters[0].id);
      }
    } else {
      if (currentSubchapterIndex > 0) {
        // Move to previous subchapter
        setSelectedSubchapter(selectedCourseData.chapters[currentChapterIndex].subchapters[currentSubchapterIndex - 1].id);
      } else if (currentChapterIndex > 0) {
        // Move to previous chapter
        setSelectedChapter(selectedCourseData.chapters[currentChapterIndex - 1].id);
        setSelectedSubchapter(selectedCourseData.chapters[currentChapterIndex - 1].subchapters[selectedCourseData.chapters[currentChapterIndex - 1].subchapters.length - 1].id);
      }
    }
  };

  useEffect(() => {
    if (selectedSubchapter) {
      // Check if Codapi script is already loaded
      if (!document.querySelector('script[src*="codapi"]')) {
        const script = document.createElement('script')
        script.src = 'https://codapi.org/scripts/codapi-bundle.js'
        script.async = true
        script.crossOrigin = 'anonymous'
        document.body.appendChild(script)
        script.onload = () => {
          if ('Codapi' in window) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).Codapi.init();
          }
        }
      } else {
        // If script is already loaded, reinitialize Codapi
        if ('Codapi' in window) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).Codapi.init();
        }
      }
    }
  }, [selectedSubchapter])

  const LandingPage = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-black dark:border-white max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-4">INW - Python Cursussen</h1>
        <h2 className="text-2xl mb-8">Kies een cursus om te beginnen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="mb-4">{course.description}</p>
              <button 
                onClick={() => {
                  setSelectedCourse(course.id);
                  setSelectedChapter(1);
                  setSelectedSubchapter(course.chapters[0].subchapters[0].id);
                }} 
                className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black font-bold py-2 px-4 rounded transition duration-300"
              >
                Start cursus
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex-1 transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <header className="bg-white dark:bg-black p-4 flex justify-between items-center border-b-2 border-black dark:border-white">
          <h1 className="text-2xl font-bold">
            {selectedCourse ? courses.find(c => c.id === selectedCourse)?.title : 'INW - Python Cursussen'}
          </h1>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 border border-black dark:border-white">
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </header>
        
        {!selectedCourse ? (
          <LandingPage />
        ) : (
          <div className="flex flex-1 p-8 gap-8">
            <nav className="w-64 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-black dark:border-white">
              <h2 className="text-xl font-semibold mb-4">Hoofdstukken</h2>
              <ul>
                {courses.find(c => c.id === selectedCourse)?.chapters.map((chapter) => (
                  <li key={chapter.id} className="mb-2">
                    <button
                      onClick={() => toggleChapterExpansion(chapter.id)}
                      className={`flex items-center w-full p-2 rounded-lg transition duration-300 ${
                        selectedChapter === chapter.id 
                          ? 'bg-black text-white dark:bg-white dark:text-black' 
                          : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>{chapter.title}</span>
                      <ChevronDown className={`w-4 h-4 ml-auto transition-transform duration-300 ${expandedChapters[chapter.id] ? 'transform rotate-180' : ''}`} />
                    </button>
                    {expandedChapters[chapter.id] && (
                      <ul className="ml-4 mt-2">
                        {chapter.subchapters.map((subchapter) => (
                          <li key={subchapter.id}>
                            <button
                              onClick={() => {
                                setSelectedChapter(chapter.id)
                                setSelectedSubchapter(subchapter.id)
                              }}
                              className={`flex items-center w-full p-2 rounded-lg transition duration-300 ${
                                selectedSubchapter === subchapter.id
                                  ? 'bg-gray-300 dark:bg-gray-600'
                                  : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                              }`}
                            >
                              <ChevronRight className="w-4 h-4 mr-2" />
                              <span>{subchapter.title}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            
            <main className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-black dark:border-white overflow-auto">
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mb-3 mt-6" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-semibold mb-2 mt-4" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4" {...props} />,
                  li: ({node, ...props}) => <li className="mb-1" {...props} />,
                  a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
                  code: ({inline, className, children, ...props}: ComponentPropsWithoutRef<'code'> & { inline?: boolean }) => {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vs as React.ComponentProps<typeof SyntaxHighlighter>}
                        language={match[1]}
                        PreTag="div"
                        {...props as React.ComponentProps<typeof SyntaxHighlighter>}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-gray-200 dark:bg-gray-700 rounded px-1" {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
                rehypePlugins={[rehypeRaw]}
              >
                {chapterContent[selectedCourse as keyof typeof chapterContent]?.[selectedSubchapter as keyof (typeof chapterContent)[keyof typeof chapterContent]] || '# Selecteer een hoofdstuk om te beginnen'}
              </ReactMarkdown>
              {selectedSubchapter && (
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => navigateChapter('prev')}
                    className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    disabled={selectedChapter === 1 && selectedSubchapter === '1.1'}
                  >
                    Vorige
                  </button>
                  <button
                    onClick={() => navigateChapter('next')}
                    className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    disabled={
                      selectedChapter === courses.find(c => c.id === selectedCourse)?.chapters.at(-1)?.id &&
                      selectedSubchapter === courses.find(c => c.id === selectedCourse)?.chapters.at(-1)?.subchapters.at(-1)?.id
                    }
                  >
                    Volgende
                  </button>
                </div>
              )}
            </main>
          </div>
        )}
      </div>
      
      <footer className="bg-white dark:bg-black p-4 text-center text-sm border-t-2 border-black dark:border-white">
        <p>&copy; 2024 INW - Python Cursussen. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  )
}
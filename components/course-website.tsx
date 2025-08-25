/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import { ComponentPropsWithoutRef } from 'react';
import { BookOpen, ChevronRight, Sun, Moon, ChevronDown, Menu, MessageCircle, X, ChevronLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'
import { useRouter, usePathname, ReadonlyURLSearchParams } from 'next/navigation'
import remarkGfm from 'remark-gfm';
import Link from 'next/link'
import Image from 'next/image';
import chapter1_1_5BCW from '../content/5BCW/chapter1_1.md'
import chapter1_2_5BCW from '../content/5BCW/chapter1_2.md'
import chapter1_3_5BCW from '../content/5BCW/chapter1_3.md'
import chapter2_1_5BCW from '../content/5BCW/chapter2_1.md'
import chapter2_2_5BCW from '../content/5BCW/chapter2_2.md'
import chapter2_3_5BCW from '../content/5BCW/chapter2_3.md'
import chapter2_4_5BCW from '../content/5BCW/chapter2_4.md'
import chapter3_1_5BCW from '../content/5BCW/chapter3_1.md'
import chapter3_2_5BCW from '../content/5BCW/chapter3_2.md'
import chapter3_3_5BCW from '../content/5BCW/chapter3_3.md'
import chapter4_1_5BCW from '../content/5BCW/chapter4_1.md'
import chapter4_2_5BCW from '../content/5BCW/chapter4_2.md'
import chapter4_3_5BCW from '../content/5BCW/chapter4_3.md'
import chapter4_4_5BCW from '../content/5BCW/chapter4_4.md'
import chapter4_5_5BCW from '../content/5BCW/chapter4_5.md'
import chapter4_6_5BCW from '../content/5BCW/chapter4_6.md'
import chapter5_1_5BCW from '../content/5BCW/chapter5_1.md'
import chapter5_2_5BCW from '../content/5BCW/chapter5_2.md'
import chapter6_1_5BCW from '../content/5BCW/chapter6_1.md'
import chapter6_2_5BCW from '../content/5BCW/chapter6_2.md'
import chapter6_3_5BCW from '../content/5BCW/chapter6_3.md'
import chapter6_4_5BCW from '../content/5BCW/chapter6_4.md'
import chapter6_5_5BCW from '../content/5BCW/chapter6_5.md'
import BigOComplexityChart from './big-o-chart';
import { useChat } from 'ai/react'
import { MemoizedMarkdown } from './memoized-markdown'
import { Streak } from './streak';
import { Achievements } from './achievements';
import { Leaderboard } from './leaderboard';
import { Quiz } from './quiz';
import { CodeChallenge } from './code-challenge';
import { ChapterQuiz } from './chapter-quiz';


const courses = [
  {
    id: 'inw-5bcw',
    title: 'INW - 5BCW: Introductie tot Python',
    description: 'Een cursus Python, algoritmen en object-georiënteerd programmeren voor 5e jaars BCW-leerlingen.',
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
          { id: '2.3', title: "2.3 Gebruikersinvoer" },
          { id: '2.4', title: "2.4 Oefeningen" },
        ]
      },
      {
        id: 3,
        title: "3. Vergelijkingen en If-statements",
        subchapters: [
          { id: '3.1', title: "3.1 Vergelijkingen en Voorwaarden" },
          { id: '3.2', title: "3.2 If-statements" },
          { id: '3.3', title: "3.3 Oefeningen" },
        ]
      },
      {
        id: 4,
        title: "4. Datastructuren en Herhaling",
        subchapters: [
          { id: '4.1', title: "4.1 Lijsten" },
          { id: '4.2', title: "4.2 Itereren over Lijsten" },
          { id: '4.3', title: "4.3 Oefeningen" },
          { id: '4.4', title: "4.4 Dictionaries (Woordenboeken)" },
          { id: '4.5', title: "4.5 While Loops" },
          { id: '4.6', title: "4.6 Oefeningen: Dictionaries en While Loops" },
        ]
      },
      {
        id: 5, 
        title: "5. Functies", 
        subchapters: [
          { id: '5.1', title: "5.1 Functies" },
          { id: '5.2', title: "5.2 Oefeningen: Functies" }
        ]
      },
      {
        id: 6,
        title: "6. Introductie tot Algoritmen en Efficiëntie",
        subchapters: [
          { id: '6.1', title: "6.1 Wat is een Algoritme?" },
          { id: '6.2', title: "6.2 Efficiëntie: Waarom is het Belangrijk?" },
          { id: '6.3', title: "6.3 Meten van Efficiëntie: Big O Notatie" },
          { id: '6.4', title: "6.4 Analyse van Eenvoudige Algoritmen" },
          { id: '6.5', title: "6.5 Oefeningen: Analyse en Vergelijking" },
        ]
      }
    ]
  }
];

const chapterContent = {
  'inw-5bcw': {
    '1.1': chapter1_1_5BCW,
    '1.2': chapter1_2_5BCW,
    '1.3': chapter1_3_5BCW,
    '2.1': chapter2_1_5BCW,
    '2.2': chapter2_2_5BCW,
    '2.3': chapter2_3_5BCW,
    '2.4': chapter2_4_5BCW,
    '3.1': chapter3_1_5BCW,
    '3.2': chapter3_2_5BCW,
    '3.3': chapter3_3_5BCW,
    '4.1': chapter4_1_5BCW,
    '4.2': chapter4_2_5BCW,
    '4.3': chapter4_3_5BCW,
    '4.4': chapter4_4_5BCW,
    '4.5': chapter4_5_5BCW,
    '4.6': chapter4_6_5BCW,
    '5.1': chapter5_1_5BCW,
    '5.2': chapter5_2_5BCW,
    '6.1': chapter6_1_5BCW,
    '6.2': chapter6_2_5BCW,
    '6.3': chapter6_3_5BCW,
    '6.4': chapter6_4_5BCW,
    '6.5': chapter6_5_5BCW,
  },
};

function ChatInterface({ 
  darkMode, 
  currentContent 
}: { 
  darkMode: boolean;
  currentContent?: string;
}) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    experimental_throttle: 50,
    initialMessages: [
      {
        id: 'system',
        role: 'system',
        content: `You are a helpful teaching assistant for an informatics course that uses basic python. Answer questions about programming and related topics. Respond in the same language as the user (Dutch or English). Never give a straight answer, but rather ask a question to the user to help them find the answer themselves.${
          currentContent 
            ? `\n\nThe user is currently looking at the following chapter content:\n${currentContent}`
            : ''
        }`
      }
    ]
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isOpen ? 'w-full md:w-[800px] max-w-[calc(100vw-2rem)]' : 'w-auto'}`}>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          darkMode ? 'bg-white text-black' : 'bg-black text-white'
        } p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className={`
          absolute bottom-16 right-0 w-full md:w-[800px] 
          h-[600px] max-h-[calc(100vh-8rem)]
          ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}
          rounded-lg shadow-xl border-2
          ${darkMode ? 'border-white' : 'border-black'}
          flex flex-col
        `}>
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages
              .filter(message => message.role !== 'system')
              .map(message => (
                <div key={message.id} className={`
                  flex flex-col gap-1 ${message.role === 'assistant' ? 'items-start' : 'items-end'}
                `}>
                  {message.role === 'assistant' && (
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-3">
                      Meneer Schuyten
                    </span>
                  )}
                  <div className={`
                    flex gap-3 ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}
                    w-full
                  `}>
                    <div className={`
                      max-w-[80%] rounded-lg p-3 
                      prose dark:prose-invert
                      prose-pre:max-w-full prose-pre:overflow-x-auto
                      prose-img:max-w-full prose-img:rounded
                      prose-code:whitespace-pre-wrap
                      ${message.role === 'assistant' 
                        ? (darkMode ? 'bg-gray-700' : 'bg-gray-100')
                        : (darkMode ? 'bg-blue-600' : 'bg-blue-500 text-white')}
                    `}>
                      <div className="max-w-full overflow-x-auto">
                        <MemoizedMarkdown content={message.content} id={message.id} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask a question..."
                className={`
                  flex-1 rounded-lg px-4 py-2 
                  ${darkMode 
                    ? 'bg-gray-700 text-white border-gray-600' 
                    : 'bg-gray-100 text-black border-gray-300'}
                  border focus:outline-none focus:ring-2 focus:ring-blue-500
                `}
              />
              <button
                type="submit"
                className={`
                  px-4 py-2 rounded-lg
                  ${darkMode 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'}
                  transition-colors
                `}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export function CourseWebsite({ searchParams }: { searchParams: ReadonlyURLSearchParams | null }) {
  const router = useRouter()
  const pathname = usePathname()

  const [darkMode, setDarkMode] = useState(false)
  const [selectedChapter, setSelectedChapter] = useState(0)
  const [selectedSubchapter, setSelectedSubchapter] = useState('')
  const [expandedChapters, setExpandedChapters] = useState<Record<number, boolean>>({})
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    const course = searchParams?.get('course')
    const chapter = searchParams?.get('chapter')
    const subchapter = searchParams?.get('subchapter')

    if (course) setSelectedCourse(course)
    if (chapter) setSelectedChapter(parseInt(chapter))
    if (subchapter) setSelectedSubchapter(subchapter)
  }, [searchParams])

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

    let newChapter = selectedChapter;
    let newSubchapter = selectedSubchapter;

    if (direction === 'next') {
      if (currentSubchapterIndex < currentChapter.subchapters.length - 1) {
        newSubchapter = currentChapter.subchapters[currentSubchapterIndex + 1].id;
      } else if (currentChapterIndex < selectedCourseData.chapters.length - 1) {
        newChapter = selectedCourseData.chapters[currentChapterIndex + 1].id;
        newSubchapter = selectedCourseData.chapters[currentChapterIndex + 1].subchapters[0].id;
      }
    } else {
      if (currentSubchapterIndex > 0) {
        newSubchapter = currentChapter.subchapters[currentSubchapterIndex - 1].id;
      } else if (currentChapterIndex > 0) {
        newChapter = selectedCourseData.chapters[currentChapterIndex - 1].id;
        newSubchapter = selectedCourseData.chapters[currentChapterIndex - 1].subchapters.slice(-1)[0].id;
      }
    }

    router.push(`${pathname}?course=${selectedCourse}&chapter=${newChapter}&subchapter=${newSubchapter}`)
  }

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
        <h1 className="text-4xl font-bold mb-4">INW</h1>
        <h2 className="text-2xl mb-4">Kies een cursus om te beginnen</h2>
        <p className="mb-8 text-lg">
          Deze open source cursussen zijn ontwikkeld voor het vak informaticawetenschappen in de derde graad secundair onderwijs, 
          afgestemd op de minimumdoelen van Katholiek Onderwijs Vlaanderen. De cursussen zijn 
          beschikbaar op <a href="https://github.com/Schuyten/inw-cursus" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">mijn GitHub</a>  om te clonen en naar wens aan te passen. Pull requests zijn welkom.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`${pathname}?course=${course.id}&chapter=1&subchapter=1.1`}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  )

  const getChapterTitle = () => {
    if (!selectedCourse || !selectedChapter || !selectedSubchapter) return '';
    
    const course = courses.find(c => c.id === selectedCourse);
    if (!course) return '';
    
    const chapter = course.chapters.find(c => c.id === Number(selectedChapter));
    if (!chapter) return '';
    
    const subchapter = chapter.subchapters.find(s => s.id === selectedSubchapter);
    return subchapter ? subchapter.title : '';
  };

  const getChapterContent = () => {
    if (!selectedCourse || !selectedSubchapter) return '';
    
    return chapterContent[selectedCourse as keyof typeof chapterContent]?.[selectedSubchapter as keyof (typeof chapterContent)[keyof typeof chapterContent]] || '';
  };

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex-1 transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <header className="bg-white dark:bg-black p-4 flex justify-between items-center border-b-2 border-black dark:border-white">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              className="mr-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 border border-black dark:border-white"
              aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              {isSidebarOpen ? <ChevronLeft className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-2xl font-bold">
              {selectedCourse ? courses.find(c => c.id === selectedCourse)?.title : 'Informaticawetenschappen'}
            </h1>
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 border border-black dark:border-white">
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </header>
        
        {!selectedCourse ? (
          <LandingPage />
        ) : (
          <div className="flex flex-1 p-8 gap-8">
            <nav className={`
              ${isSidebarOpen ? 'w-64 p-4' : 'w-16 p-2'} 
              overflow-hidden transition-all duration-300 
              bg-white dark:bg-gray-800 rounded-lg shadow-lg 
              border-2 border-black dark:border-white
            `}>
              {isSidebarOpen ? (
                <div className="opacity-100 transition-opacity duration-300">
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
                          <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-left truncate">{chapter.title}</span>
                          <ChevronDown className={`w-4 h-4 ml-auto flex-shrink-0 transition-transform duration-300 ${expandedChapters[chapter.id] ? 'transform rotate-180' : ''}`} />
                        </button>
                        {expandedChapters[chapter.id] && (
                          <ul className="ml-4 mt-2">
                            {chapter.subchapters.map((subchapter) => (
                              <li key={subchapter.id}>
                                <button
                                  onClick={() => {
                                    router.push(`${pathname}?course=${selectedCourse}&chapter=${chapter.id}&subchapter=${subchapter.id}`)
                                  }}
                                  className={`flex items-center w-full p-2 rounded-lg transition duration-300 ${
                                    selectedSubchapter === subchapter.id
                                      ? 'bg-gray-300 dark:bg-gray-600'
                                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                                  }`}
                                >
                                  <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
                                  <span className="text-left truncate">{subchapter.title}</span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  {courses.find(c => c.id === selectedCourse)?.chapters.map((chapter) => (
                    <button
                      key={chapter.id}
                      onClick={() => {
                        setIsSidebarOpen(true);
                        toggleChapterExpansion(chapter.id);
                      }}
                      className={`p-2 mb-2 rounded-lg transition duration-300 flex items-center ${
                        selectedChapter === chapter.id 
                          ? 'bg-black text-white dark:bg-white dark:text-black' 
                          : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                      title={chapter.title}
                    >
                      <BookOpen className="w-5 h-5 mr-1" />
                      <span className="text-sm font-semibold">{chapter.id}</span>
                    </button>
                  ))}
                </div>
              )}
            </nav>
            
            <main className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-black dark:border-white overflow-auto">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
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
                  },
                  table: ({ children, ...props }: ComponentPropsWithoutRef<'table'>) => (
                    <table className="border-collapse border-2 border-gray-300 my-4 rounded-lg overflow-hidden" {...props}>
                      {children}
                    </table>
                  ),
                  thead: ({ children, ...props }: ComponentPropsWithoutRef<'thead'>) => (
                    <thead className="bg-gray-100" {...props}>{children}</thead>
                  ),
                  tbody: ({ children, ...props }: ComponentPropsWithoutRef<'tbody'>) => (
                    <tbody {...props}>{children}</tbody>
                  ),
                  tr: ({ children, ...props }: ComponentPropsWithoutRef<'tr'>) => (
                    <tr className="border-b border-gray-300" {...props}>{children}</tr>
                  ),
                  td: ({ children, ...props }: ComponentPropsWithoutRef<'td'>) => (
                    <td className="border-x border-gray-300 px-4 py-2" {...props}>{children}</td>
                  ),
                  th: ({ children, ...props }: ComponentPropsWithoutRef<'th'>) => (
                    <th className="border-x border-gray-300 px-4 py-2 font-bold" {...props}>
                      {children}
                    </th>
                  ),
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  img: ({ node, ...props }: { node?: any; [key: string]: any }) => {
                    return (
                      <div className="my-4">
                        <Image
                          src={props.src || ''}
                          alt={props.alt || ''}
                          width={500}
                          height={300}
                          style={{
                            maxWidth: '100%',
                            height: 'auto',
                          }}
                          className="rounded-lg"
                        />
                      </div>
                    )
                  },
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  bigochart: ({node, ...props}: { node?: unknown, [key: string]: any }) => <BigOComplexityChart {...props} />,
                } as ComponentPropsWithoutRef<typeof ReactMarkdown>['components']}
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
        <p>&copy; 2025 INW - door Matthias Schuyten. Alle rechten voorbehouden.</p>
      </footer>
      
      <ChatInterface 
        darkMode={darkMode} 
        currentContent={
          selectedCourse && selectedSubchapter 
            ? chapterContent[selectedCourse as keyof typeof chapterContent]?.[selectedSubchapter as keyof (typeof chapterContent)[keyof typeof chapterContent]]
            : undefined
        }
      />

      {selectedCourse && (
        <div className="bg-white dark:bg-gray-800 p-4 mb-4 rounded-lg shadow-md border-2 border-black dark:border-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <ProgressBar 
              currentCourse={selectedCourse} 
              currentChapter={selectedChapter} 
              currentSubchapter={selectedSubchapter} 
            />
            
            <div className="flex items-center gap-3">
              <Streak />
              <Achievements currentCourse={selectedCourse} />
              <Leaderboard />
            </div>
          </div>
        </div>
      )}

      {selectedChapter && selectedSubchapter && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-2 border-black dark:border-white">
          
          <ChapterQuiz 
            chapterId={selectedSubchapter} 
            currentCourse={selectedCourse!} 
          />
        </div>
      )}
    </div>
  )
}

function ResumeButton() {
  const router = useRouter()
  const pathname = usePathname()

  const handleResume = () => {
    const lastPosition = localStorage.getItem('lastPosition')
    if (lastPosition) {
      const { course, chapter, subchapter } = JSON.parse(lastPosition)
      router.push(`${pathname}?course=${course}&chapter=${chapter}&subchapter=${subchapter}`)
    }
  }

  return (
    <button
      onClick={handleResume}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Hervat laatste positie
    </button>
  )
}

function ProgressBar({ currentCourse, currentChapter, currentSubchapter }: { 
  currentCourse: string; 
  currentChapter: number | string; 
  currentSubchapter: string; 
}) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`progress_${currentCourse}`);
    const progressData = savedProgress ? JSON.parse(savedProgress) : { completed: [] };
    
    // Calculate percentage based on completed chapters
    const course = courses.find(c => c.id === currentCourse);
    if (course) {
      const totalSubchapters = course.chapters.reduce(
        (total, chapter) => total + chapter.subchapters.length, 0
      );
      const completedCount = progressData.completed.length;
      setProgress(Math.round((completedCount / totalSubchapters) * 100));
    }
  }, [currentCourse, currentChapter, currentSubchapter]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">Voortgang</span>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

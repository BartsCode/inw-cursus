/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import { BookOpen, ChevronRight, Sun, Moon, ChevronDown } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'

const chapters = [
  { 
    id: 1, 
    title: "Installatie",
    subchapters: [
      { id: '1.1', title: "Installatie: Python en VS Code" },
      { id: '1.2', title: "Python testen" },
      { id: '1.3', title: "VS Code configureren" },
    ]
  },
  // ... other chapters ...
]

const chapterContent = {
  '1.1': `
# Installatie: Python en VS Code

Voordat we kunnen beginnen met programmeren, moeten we eerst onze ontwikkelomgeving opzetten. We zullen Python installeren en testen of alles correct werkt.

## Python installeren op Windows

1. Ga naar de officiële Python-website: [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. Download de laatste versie van Python voor Windows.
3. Start het gedownloade installatiebestand.
4. Zorg ervoor dat je de optie "Add Python to PATH" aanvinkt tijdens de installatie.
5. Volg de verdere installatie-instructies op het scherm.

## Visual Studio Code (VS Code) installeren

Visual Studio Code is een krachtige, lichtgewicht code-editor die uitstekend geschikt is voor Python-ontwikkeling en voor vele andere programmeertalen. Zo kan je VS Code installeren:

1. Ga naar de officiële VS Code-website: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Klik op de "Download for Windows" knop.
3. Zodra het downloaden voltooid is, start je het installatiebestand.
4. Volg de installatie-instructies. De standaardinstellingen zijn meestal voldoende.
  `,
  '1.2': `
## Python testen in de terminal

Na de installatie is het belangrijk om te controleren of Python correct is geïnstalleerd en toegankelijk is via de command prompt (terminal).

1. Open de Command Prompt (je kunt dit doen door "cmd" te typen in het Windows zoekvenster en op Enter te drukken).
2. Typ het volgende commando en druk op Enter:

\`\`\`bash
python --version
\`\`\`

Als Python correct is geïnstalleerd, zou je de geïnstalleerde versie moeten zien, bijvoorbeeld:

\`\`\`bash
Python 3.12.4
\`\`\`

## Je eerste Python-programma uitvoeren

Laten we een eenvoudig Python-programma uitvoeren om te bevestigen dat alles correct werkt:

1. Open opnieuw de Command Prompt.
2. Typ \`python\` en druk op Enter om de Python-interpreter te starten.
3. Je zou nu de volgende tekens moeten zien: \`>>>\`.
4. Typ de volgende code en druk op Enter:

\`\`\`python
print("Hello, World!")
\`\`\`

Als alles goed is gegaan, zou je de volgende output moeten zien:

\`\`\`bash
Hello, World!
\`\`\`

Om de Python-interpreter te verlaten, typ \`exit()\` en druk op Enter.
  `,
  '1.3': `
## VS Code Python-extensie

Na de installatie van VS Code, moeten we het configureren voor Python-ontwikkeling:

1. Open VS Code.
2. Ga naar de Extensions view door op het vierkante icoon in de linkerzijbalk te klikken of door \`Ctrl+Shift+X\` te drukken.
3. Zoek naar "Python" in de zoekbalk.
4. Installeer de officiële Python-extensie van Microsoft.
5. Herstart VS Code na de installatie van de extensie.

## Een Python-bestand maken en uitvoeren in VS Code

Laten we testen of alles correct werkt:

1. Open VS Code.
2. Maak een nieuw bestand aan (\`Ctrl+N\`) en sla het op als \`hello.py\` (\`Ctrl+S\`).
3. Typ de volgende code in het bestand:

\`\`\`python
print("Hello, World! VS Code werkt correct met Python!")
\`\`\`

4. Druk op \`Ctrl+F5\` of op het driehoekje in de bovenbalk (Run) om het programma uit te voeren.

Gefeliciteerd! Je hebt nu zowel Python als VS Code succesvol geïnstalleerd en geconfigureerd. Je bent klaar om te beginnen met het ontwikkelen van Python-programma's in een professionele programmeeromgeving.
  `,
  // ... other subchapter content ...
}

export function CourseWebsite() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedChapter, setSelectedChapter] = useState(0)
  const [selectedSubchapter, setSelectedSubchapter] = useState('')
  const [expandedChapters, setExpandedChapters] = useState<Record<number, boolean>>({})

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

  const LandingPage = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-black dark:border-white max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4">INW - WWI</h1>
        <h2 className="text-2xl mb-8">Introductie tot Python voor middelbare scholieren</h2>
        <p className="mb-8">
          Welkom bij onze Python-programmeercursus! Deze cursus is ontworpen om je te introduceren tot de 
          basisprincipes van Python, een van de meest populaire en veelzijdige programmeertalen ter wereld. 
          Of je nu geïnteresseerd bent in webontwikkeling, data-analyse, of gewoon wilt leren programmeren, 
          deze cursus zal je een solide basis geven om je programmeerreis te beginnen.
        </p>
        <button 
          onClick={() => {
            setSelectedChapter(1)
            setSelectedSubchapter('1.1')
          }} 
          className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black font-bold py-2 px-6 rounded-full transition duration-300"
        >
          Start met leren
        </button>
      </div>
    </div>
  )

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex-1 transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <header className="bg-white dark:bg-black p-4 flex justify-between items-center border-b-2 border-black dark:border-white">
          <h1 className="text-2xl font-bold">INW - WWI: Introductie tot Python</h1>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 border border-black dark:border-white">
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </header>
        
        {selectedChapter === 0 ? (
          <LandingPage />
        ) : (
          <div className="flex flex-1 p-8 gap-8">
            <nav className="w-64 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-black dark:border-white">
              <h2 className="text-xl font-semibold mb-4">Hoofdstukken</h2>
              <ul>
                {chapters.map((chapter) => (
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
                code: ({node, inline, className, children, ...props}) => {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vs}
                      language={match[1]}
                      PreTag="div"
                      {...props}
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
            >
              {chapterContent[selectedSubchapter as keyof typeof chapterContent] || '# Selecteer een hoofdstuk om te beginnen'}
            </ReactMarkdown>
            </main>
          </div>
        )}
      </div>
      
      <footer className="bg-white dark:bg-black p-4 text-center text-sm border-t-2 border-black dark:border-white">
        <p>&copy; 2023 INW - WWI Python Cursus. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  )
}
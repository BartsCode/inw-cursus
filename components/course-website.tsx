/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import { ComponentPropsWithoutRef } from 'react';
import { BookOpen, ChevronRight, Sun, Moon, ChevronDown, Menu } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'
import { useRouter, usePathname, ReadonlyURLSearchParams } from 'next/navigation'
import remarkGfm from 'remark-gfm';
import Link from 'next/link'
import Image from 'next/image';
import chapter1_1_5WWI from '../content/5WWI/chapter1_1.md'
import chapter1_2_5WWI from '../content/5WWI/chapter1_2.md'
import chapter1_3_5WWI from '../content/5WWI/chapter1_3.md'
import chapter2_1_5WWI from '../content/5WWI/chapter2_1.md'
import chapter2_2_5WWI from '../content/5WWI/chapter2_2.md'
import chapter2_3_5WWI from '../content/5WWI/chapter2_3.md'
import chapter2_4_5WWI from '../content/5WWI/chapter2_4.md'

import chapter1_1_5BWE from '../content/5BWE/chapter1_1.md'
import chapter2_1_5BWE from '../content/5BWE/chapter2_1.md'
import chapter2_2_5BWE from '../content/5BWE/chapter2_2.md'
import chapter2_3_5BWE from '../content/5BWE/chapter2_3.md'
import chapter2_4_5BWE from '../content/5BWE/chapter2_4.md'
import chapter3_1_5BWE from '../content/5BWE/chapter3_1.md'
import chapter3_2_5BWE from '../content/5BWE/chapter3_2.md'
import chapter3_3_5BWE from '../content/5BWE/chapter3_3.md'

import chapter1_1_6BWE from '../content/6BWE/chapter1_1.md'
import chapter1_2_6BWE from '../content/6BWE/chapter1_2.md'
import chapter2_1_6BWE from '../content/6BWE/chapter2_1.md'
import chapter2_2_6BWE from '../content/6BWE/chapter2_2.md'
import chapter2_3_6BWE from '../content/6BWE/chapter2_3.md'
import chapter3_1_6BWE from '../content/6BWE/chapter3_1.md'

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


const courses = [
  {
    id: 'INW-5WWI/5EWI/5LWI',
    title: 'INW - 5WWI/EWI/LWI: Introductie tot Python',
    description: 'Een basiscursus Python, algoritmen en object-georiënteerd programmeren voor 5e jaars WI-leerlingen.',
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
        title: "3. Datastructuren en herhaling",
        subchapters: [
          { id: '3.1', title: "3.1 Lijsten" },
          { id: '3.2', title: "3.2 For loops" },
          { id: '3.3', title: "3.3 Oefeningen" },
        ]
      }
    ]
  },
  {
    id: 'inw-5bwe',
    title: 'INW - 5BWE: Excel, databases, SQL',
    description: 'Een cursus van Excel tot SQL en Power BI voor 5e jaars BWE-leerlingen.',
    chapters: [
      {
        id: 1,
        title: "1. Introductie: Relationele Databanken en Big Data",
        subchapters: [
          { id: '1.1', title: "1.1 Introductie en Cursusdoelen" },
          { id: '1.2', title: "1.2 Cursusstructuur en Kernconcepten" },
        ]
      },
      {
        id: 2,
        title: "2. Tabellen en Gegevensorganisatie met Excel",
        subchapters: [
          { id: '2.1', title: "2.1 Basisprincipes van Excel-spreadsheets" },
          { id: '2.2', title: "2.2 Excel Interface en Gegevensinvoer" },
          { id: '2.3', title: "2.3 Celformattering in Excel" },
          { id: '2.4', title: "2.4 Oefeningen" },
          { id: '2.5', title: "2.5 Data visualisatie" },
        ]
      },
      {
        id: 3,
        title: "3. Databanken",
        subchapters: [
          { id: '3.1', title: "3.1 Introductie tot Databanken" },
          { id: '3.2', title: "3.2 Werktitel" },
          { id: '3.3', title: "3.3 Ook een werktitel" },
        ]
      },
      {
        id: 4,
        title: "4. Data Visualisatie met Excel",
        subchapters: [
          { id: '4.1', title: "4.1 Soorten grafieken en wanneer gebruiken" },
          { id: '4.2', title: "4.2 Grafieken maken en aanpassen" },
          { id: '4.3', title: "4.3 Sparklines" },
          { id: '4.4', title: "4.4 Dashboardbasics" },
        ]
      },
      {
        id: 5,
        title: "5. Introductie tot Databases",
        subchapters: [
          { id: '5.1', title: "5.1 Wat is een database?" },
          { id: '5.2', title: "5.2 Verschillen tussen spreadsheets en databases" },
          { id: '5.3', title: "5.3 Soorten databases (focus op relationele databases)" },
          { id: '5.4', title: "5.4 Basisdatabase terminologie" },
        ]
      },
      {
        id: 6,
        title: "6. Ontwerpen van een eenvoudige Database",
        subchapters: [
          { id: '6.1', title: "6.1 Database structuur plannen" },
          { id: '6.2', title: "6.2 Tabellen maken en velden definiëren" },
          { id: '6.3', title: "6.3 Primaire en vreemde sleutels" },
          { id: '6.4', title: "6.4 Relaties tussen tabellen" },
        ]
      },
      {
        id: 7,
        title: "7. Introductie tot SQL",
        subchapters: [
          { id: '7.1', title: "7.1 Basis SQL syntax" },
          { id: '7.2', title: "7.2 SELECT statements" },
          { id: '7.3', title: "7.3 Gegevens filteren met WHERE" },
          { id: '7.4', title: "7.4 Gegevens sorteren met ORDER BY" },
        ]
      },
      {
        id: 8,
        title: "8. Geavanceerde SQL Queries",
        subchapters: [
          { id: '8.1', title: "8.1 Tabellen joinen" },
          { id: '8.2', title: "8.2 Aggregate functies" },
          { id: '8.3', title: "8.3 Subqueries" },
          { id: '8.4', title: "8.4 Tabellen maken en wijzigen" },
        ]
      },
      {
        id: 9,
        title: "9. Big Data Concepten",
        subchapters: [
          { id: '9.1', title: "9.1 Wat is Big Data?" },
          { id: '9.2', title: "9.2 De 5 V's van Big Data" },
          { id: '9.3', title: "9.3 Overzicht van Big Data technologieën" },
          { id: '9.4', title: "9.4 Big Data use cases en voorbeelden" },
        ]
      },
      {
        id: 10,
        title: "10. Introductie tot Data Warehousing",
        subchapters: [
          { id: '10.1', title: "10.1 Wat is een data warehouse?" },
          { id: '10.2', title: "10.2 Data warehouse architectuur" },
          { id: '10.3', title: "10.3 ETL processen" },
          { id: '10.4', title: "10.4 Verschillen tussen operationele en analytische databases" },
        ]
      },
      {
        id: 11,
        title: "11. Data Analyse en Visualisatie Tools",
        subchapters: [
          { id: '11.1', title: "11.1 Introductie tot business intelligence tools" },
          { id: '11.2', title: "11.2 Overzicht van populaire BI platforms" },
          { id: '11.3', title: "11.3 Basisrapporten en dashboards maken" },
          { id: '11.4', title: "11.4 Principes van data storytelling" },
        ]
      },
      {
        id: 12,
        title: "12. Eindproject: Bouwen van een Data Oplossing",
        subchapters: [
          { id: '12.1', title: "12.1 Geleerde concepten toepassen op een echt probleem" },
          { id: '12.2', title: "12.2 Database ontwerpen en implementeren" },
          { id: '12.3', title: "12.3 Gegevens analyseren met SQL" },
          { id: '12.4', title: "12.4 Visualisaties en rapporten maken" },
        ]
      }
    ]
  },
  {
    id: 'inw-6bwe',
    title: 'INW - 6BWE: Databases, Big Data en Python voor Data-analyse',
    description: 'Een gevorderde cursus over databases, SQL, big data concepten en Python voor data-analyse, gericht op 6e jaars BWE-leerlingen.',
    chapters: [
      {
        id: 1,
        title: "1. Introductie",
        subchapters: [
          { id: '1.1', title: "1.1 Overzicht" },
          { id: '1.2', title: "1.2 Herhaling Excel" },
        ]
      },
      {
        id: 2,
        title: "2. Introductie tot Databases en Big Data",
        subchapters: [
          { id: '2.1', title: "2.1 Van Excel naar Databases" },
          { id: '2.2', title: "2.2 Introductie tot Big Data" },
          { id: '2.3', title: "2.3 Business Intelligence vs. Big Data" },
        ]
      },
      {
        id: 3,
        title: "3. Relationele Databases",
        subchapters: [
          { id: '3.1', title: "3.1 Introductie tot Relationele Databases" },
          { id: '3.2', title: "3.2 Entity-Relationship Diagrammen (ERD)" },
          { id: '3.3', title: "3.3 Normalisatie" },
          { id: '3.4', title: "3.4 Database Management Systemen (DBMS)" },
        ]
      },
      {
        id: 4,
        title: "4. SQL Fundamentals",
        subchapters: [
          { id: '4.1', title: "4.1 Introductie tot SQL" },
          { id: '4.2', title: "4.2 SELECT Queries en Filtering" },
          { id: '4.3', title: "4.3 Joins en Subqueries" },
          { id: '4.4', title: "4.4 Data Manipulatie en Definitie" },
        ]
      },
      {
        id: 5,
        title: "5. Datawarehousing en Business Intelligence",
        subchapters: [
          { id: '5.1', title: "5.1 Concepten van Datawarehousing" },
          { id: '5.2', title: "5.2 ETL Processen" },
          { id: '5.3', title: "5.3 Introductie tot Power BI" },
          { id: '5.4', title: "5.4 Dashboards en Rapportages" },
        ]
      },
      {
        id: 6,
        title: "6. Introductie tot Python",
        subchapters: [
          { id: '6.1', title: "6.1 Python Basics" },
          { id: '6.2', title: "6.2 Variabelen en Datatypes" },
          { id: '6.3', title: "6.3 Controlestructuren" },
          { id: '6.4', title: "6.4 Functies en Modules" },
        ]
      },
      {
        id: 7,
        title: "7. Python voor Data-analyse",
        subchapters: [
          { id: '7.1', title: "7.1 Numpy en Pandas Basics" },
          { id: '7.2', title: "7.2 Data Cleaning en Preprocessing" },
          { id: '7.3', title: "7.3 Data Visualisatie met Matplotlib" },
          { id: '7.4', title: "7.4 Statistische Analyse" },
        ]
      },
      {
        id: 8,
        title: "8. Geavanceerde Data-analyse Technieken",
        subchapters: [
          { id: '8.1', title: "8.1 Machine Learning Basics" },
          { id: '8.2', title: "8.2 Regressie en Classificatie" },
          { id: '8.3', title: "8.3 Clustering en Dimensionaliteitsreductie" },
          { id: '8.4', title: "8.4 Tijdreeksanalyse" },
        ]
      },
      {
        id: 9,
        title: "9. Big Data Technologieën",
        subchapters: [
          { id: '9.1', title: "9.1 Hadoop en MapReduce" },
          { id: '9.2', title: "9.2 Apache Spark Basics" },
          { id: '9.3', title: "9.3 NoSQL Databases" },
          { id: '9.4', title: "9.4 Big Data Use Cases" },
          { id: '9.5', title: "9.5 Cloud Computing voor Big Data" },
        ]
      },
      {
        id: 10,
        title: "10. Eindproject: Data-analyse in de Praktijk",
        subchapters: [
          { id: '10.1', title: "10.1 Projectdefinitie en Dataverzameling" },
          { id: '10.2', title: "10.2 Data-analyse en Modellering" },
          { id: '10.3', title: "10.3 Visualisatie en Rapportage" },
          { id: '10.4', title: "10.4 Presentatie en Evaluatie" },
        ]
      },
    ]
  },
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
        title: "3. Datastructuren en herhaling",
        subchapters: [
          { id: '3.1', title: "3.1 Lijsten" },
          { id: '3.2', title: "3.2 For loops" },
          { id: '3.3', title: "3.3 Oefeningen" },
        ]
      },
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
    '2.3': chapter2_3_5WWI,
    '2.4': chapter2_4_5WWI,
    '3.1': chapter3_1_5BCW,
    '3.2': chapter3_2_5BCW,
    '3.3': chapter3_3_5BCW,
  },
  'inw-5bwe': {
    '1.1': chapter1_1_5BWE,
    '2.1': chapter2_1_5BWE,
    '2.2': chapter2_2_5BWE,
    '2.3': chapter2_3_5BWE,
    '2.4': chapter2_4_5BWE,
    '3.1': chapter3_1_5BWE,
    '3.2': chapter3_2_5BWE,
    '3.3': chapter3_3_5BWE,
  },
  'inw-6bwe': {
    '1.1': chapter1_1_6BWE,
    '1.2': chapter1_2_6BWE,
    '2.1': chapter2_1_6BWE,
    '2.2': chapter2_2_6BWE,
    '2.3': chapter2_3_6BWE,
    '3.1': chapter3_1_6BWE,
  },
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
  },
};

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

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex-1 transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <header className="bg-white dark:bg-black p-4 flex justify-between items-center border-b-2 border-black dark:border-white">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              className="mr-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 border border-black dark:border-white"
            >
              <Menu className="w-6 h-6" />
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
              ${isSidebarOpen ? 'w-64 p-4' : 'w-0 p-0'} 
              overflow-hidden transition-all duration-300 
              bg-white dark:bg-gray-800 rounded-lg shadow-lg 
              border-2 border-black dark:border-white
            `}>
              <div className={`${isSidebarOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
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
                                  router.push(`${pathname}?course=${selectedCourse}&chapter=${chapter.id}&subchapter=${subchapter.id}`)
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
              </div>
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
                  img: ({node, ...props}) => {
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
        <p>&copy; 2024 INW - door Matthias Schuyten. Alle rechten voorbehouden.</p>
      </footer>
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

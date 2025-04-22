'use client'

import { useState, useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code, Loader2 } from 'lucide-react';
import { Editor, loader } from '@monaco-editor/react';
import type { OnMount } from '@monaco-editor/react';
import type * as Monaco from 'monaco-editor';

// Configure Monaco loader to use unpkg CDN which is allowed by CSP
loader.config({
  paths: {
    vs: 'https://unpkg.com/monaco-editor@0.52.2/min/vs'
  }
});

export function CodeChallenge({ 
  initialCode, 
  expectedOutput, 
  hint, 
  solution, 
  onComplete,
  showSolutionButton = false
}: { 
  initialCode: string;
  expectedOutput: string;
  hint: string;
  solution: string;
  onComplete?: () => void;
  showSolutionButton?: boolean;
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [editorError, setEditorError] = useState<string | null>(null);
  const editorRef = useRef<Monaco.editor.IStandaloneCodeEditor | null>(null);

  // Setup error handling for Monaco loader
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      // Check if this is a Monaco-related error
      if (event.filename && (
          event.filename.includes('monaco') || 
          event.message.includes('monaco') ||
          event.filename.includes('vs/loader.js')
      )) {
        console.error('Monaco loading error:', event);
        setEditorError('Failed to load code editor. Using fallback editor.');
      }
    };

    // Listen for script loading errors
    window.addEventListener('error', handleError, true);

    return () => {
      window.removeEventListener('error', handleError, true);
    };
  }, []);

  // Check if dark mode is enabled
  useEffect(() => {
    // Check the initial color scheme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches || document.documentElement.classList.contains('dark'));

    // Listen for changes in color scheme
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches || document.documentElement.classList.contains('dark'));
    };

    mediaQuery.addEventListener("change", handleChange);
    
    // Listen for changes in class on documentElement (for manual theme toggle)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      observer.disconnect();
    };
  }, []);

  // Handle editor mounting
  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  // Custom loading component for Monaco
  const LoadingEditor = () => (
    <div className="flex items-center justify-center h-48 bg-gray-50 dark:bg-gray-900 border rounded-md">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <p>Loading editor...</p>
      </div>
    </div>
  );
  
  // Fallback editor when Monaco fails to load
  const FallbackEditor = () => (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      className="w-full h-[300px] p-4 font-mono text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md"
    />
  );
  
  const runCode = async () => {
    setIsLoading(true);
    setOutput('');
    
    try {
      // Use our server-side API route instead of calling RapidAPI directly
      const response = await fetch('/api/run-python', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: code
        })
      });
      
      const data = await response.json();
      
      // Handle the API response
      if (data.error) {
        setOutput(data.output || 'An error occurred');
      } else {
        // Extract output from the response and clean it
        let outputText = data.output || 'No output';
        
        // Clean the output by removing "Exited with code 0" and any trailing/leading whitespace
        outputText = outputText.replace(/Exited with code \d+/g, '').trim();
        
        setOutput(outputText);
        
        // Check if output matches expected output
        let isOutputCorrect = false;
        
        // Special handling for dictionary outputs
        if (expectedOutput.trim().startsWith('{') && expectedOutput.trim().endsWith('}') && 
            outputText.trim().startsWith('{') && outputText.trim().endsWith('}')) {
          try {
            // Extract just the dictionary part from the output if it contains other text
            const dictRegex = /(\{[^{]*?\})/;
            const outputDictMatch = outputText.match(dictRegex);
            const actualDictText = outputDictMatch ? outputDictMatch[1] : outputText;
            
            // Convert both outputs to dictionaries for comparison
            const expectedDict = JSON.parse(expectedOutput.replace(/'/g, '"'));
            // Need to handle Python's single quotes in the output
            const actualDict = JSON.parse(actualDictText.replace(/'/g, '"'));
            
            console.log("Comparing dictionaries:", { expected: expectedDict, actual: actualDict });
            
            // Compare dictionaries
            isOutputCorrect = 
              // Check if all expected keys exist in actual output with correct values
              Object.keys(expectedDict).every(key => 
                Object.prototype.hasOwnProperty.call(actualDict, key) && 
                expectedDict[key] === actualDict[key]
              ) && 
              // Check if all actual keys exist in expected output
              Object.keys(actualDict).every(key => 
                Object.prototype.hasOwnProperty.call(expectedDict, key)
              );
          } catch (e) {
            // If parsing fails, fall back to string comparison after cleaning
            console.error("Error comparing dictionaries:", e);
            
            // Try to extract just the dictionary part
            const dictRegex = /(\{[^{]*?\})/;
            const expectedMatch = expectedOutput.match(dictRegex);
            const outputMatch = outputText.match(dictRegex);
            
            const normalizedOutput = outputMatch ? outputMatch[1].trim().replace(/'/g, '"') : outputText.trim().replace(/'/g, '"');
            const normalizedExpected = expectedMatch ? expectedMatch[1].trim().replace(/'/g, '"') : expectedOutput.trim().replace(/'/g, '"');
            
            isOutputCorrect = normalizedOutput === normalizedExpected;
          }
        } else {
          // For non-dictionary outputs, use normal string comparison
          const normalizedOutput = outputText.trim().replace(/'/g, '"');
          const normalizedExpected = expectedOutput.trim().replace(/'/g, '"');
          isOutputCorrect = normalizedOutput === normalizedExpected;
        }
        
        setIsCorrect(isOutputCorrect);
        
        // Call onComplete if the answer is correct and the callback exists
        if (isOutputCorrect && onComplete) {
          onComplete();
        }
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'An unknown error occurred';
      setOutput(`Error: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-2 border-black dark:border-white my-6">
      <h3 className="text-xl font-bold mb-4">Code Challenge</h3>
      
      <div className="mb-4 border rounded-md overflow-hidden">
        {editorError ? (
          <FallbackEditor />
        ) : (
          <Editor
            value={code}
            language="python"
            height="300px"
            onChange={(value) => setCode(value || '')}
            onMount={handleEditorDidMount}
            loading={<LoadingEditor />}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              fontSize: 14,
              tabSize: 4,
              automaticLayout: true,
              insertSpaces: true,
              detectIndentation: true,
              wordWrap: 'on',
              renderLineHighlight: 'all',
              bracketPairColorization: { enabled: true },
              guides: { bracketPairs: true },
              suggest: {
                showKeywords: true
              }
            }}
            theme={isDarkMode ? 'vs-dark' : 'light'}
            className="w-full"
          />
        )}
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <button 
          onClick={runCode}
          disabled={isLoading}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center gap-2 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <Code className="w-5 h-5" />
          {isLoading ? 'Running...' : 'Run Code'}
        </button>
        
        <button 
          onClick={() => setShowHint(!showHint)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
        
        {showSolutionButton && (
          <button 
            onClick={() => setShowSolution(!showSolution)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          >
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </button>
        )}
      </div>
      
      {showHint && (
        <div className="mb-4 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-md">
          <h4 className="font-bold mb-2">Hint:</h4>
          <p>{hint}</p>
        </div>
      )}
      
      {showSolution && (
        <div className="mb-4">
          <h4 className="font-bold mb-2">Solution:</h4>
          <SyntaxHighlighter language="python" style={vs}>
            {solution}
          </SyntaxHighlighter>
        </div>
      )}
      
      <div className="mt-4">
        <h4 className="font-bold mb-2">Output:</h4>
        <div className={`p-4 font-mono text-sm rounded-md ${
          output 
            ? isCorrect 
              ? 'bg-green-100 dark:bg-green-900' 
              : 'bg-red-100 dark:bg-red-900'
            : 'bg-gray-100 dark:bg-gray-900'
        }`}>
          {isLoading 
            ? 'Running your code...' 
            : output || 'Run your code to see the output'}
        </div>
        
        {isCorrect && (
          <div className="mt-2 text-green-600 dark:text-green-400 font-bold">
            Correct! Challenge completed.
          </div>
        )}
      </div>
    </div>
  );
} 
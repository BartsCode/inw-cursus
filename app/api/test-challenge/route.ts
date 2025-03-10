import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { code, challengeId } = await request.json();
    
    // Define test cases for different challenges
    const testCases = {
      'dictionary_word_count': [
        {input: "de kat zit op de mat de kat is zwart", expected: {'de': 3, 'kat': 2, 'zit': 1, 'op': 1, 'mat': 1, 'is': 1, 'zwart': 1}},
        {input: "hello hello world", expected: {'hello': 2, 'world': 1}}
      ],
      // Add more challenges as needed
    };
    
    // Get the appropriate test cases
    const tests = testCases[challengeId];
    if (!tests) {
      return NextResponse.json({
        error: true,
        output: `No test cases found for challenge: ${challengeId}`
      });
    }
    
    // Create test code
    const testCode = `
${code}

# Test cases
test_results = []
${tests.map((test, i) => `
# Test ${i+1}
try:
    result = tel_woorden(${JSON.stringify(test.input)})
    expected = ${JSON.stringify(test.expected)}
    passed = result == expected
    test_results.append({
        "passed": passed,
        "input": ${JSON.stringify(test.input)},
        "output": result,
        "expected": expected
    })
except Exception as e:
    test_results.append({
        "passed": False,
        "input": ${JSON.stringify(test.input)},
        "error": str(e)
    })
`).join('\n')}

import json
print(json.dumps(test_results))
`;
    
    // Execute the test code
    const response = await fetch('https://code-compiler16.p.rapidapi.com/api/v1/code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'code-compiler16.p.rapidapi.com',
        'x-rapidapi-key': 'd3de6d0ca9msh75a36693a7a58b6p189556jsn213df0a1776a'
      },
      body: JSON.stringify({
        code: testCode,
        language: "py",
        input: ""
      })
    });
    
    const data = await response.json();
    
    // Parse test results
    try {
      const testResults = JSON.parse(data.output);
      const allPassed = testResults.every(result => result.passed);
      
      return NextResponse.json({
        success: allPassed,
        results: testResults,
        error: false
      });
    } catch (e) {
      return NextResponse.json({
        error: true,
        output: data.output || data.error || 'Failed to parse test results'
      });
    }
  } catch (error) {
    console.error('Error testing code challenge:', error);
    return NextResponse.json(
      { error: true, output: 'Failed to test code challenge' },
      { status: 500 }
    );
  }
} 
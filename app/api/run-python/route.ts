import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();
    
    // Call the new RapidAPI endpoint from the server
    const response = await fetch('https://code-compiler16.p.rapidapi.com/api/v1/code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'code-compiler16.p.rapidapi.com',
        'x-rapidapi-key': 'd3de6d0ca9msh75a36693a7a58b6p189556jsn213df0a1776a'
      },
      body: JSON.stringify({
        code: code,
        language: "py",
        input: ""
      })
    });
    
    const data = await response.json();
    
    // Format the response to match what our frontend expects
    return NextResponse.json({
      output: data.output || data.error || '',
      error: data.error ? true : false
    });
  } catch (error) {
    console.error('Error running Python code:', error);
    return NextResponse.json(
      { error: true, output: 'Failed to execute Python code' },
      { status: 500 }
    );
  }
} 
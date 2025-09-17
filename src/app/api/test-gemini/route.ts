import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if API key is available
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Gemini API key not configured',
          keyExists: false 
        },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    
    const result = await model.generateContent('Hello, please respond with exactly: "API connection successful"');
    const response = await result.response;
    const text = response.text();
    
    return NextResponse.json({ 
      success: true, 
      response: text,
      keyExists: true,
      keyLength: process.env.GEMINI_API_KEY.length,
      keyPrefix: process.env.GEMINI_API_KEY.substring(0, 10) + '...'
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Test API error:', error);
    
    return NextResponse.json({ 
      success: false, 
      error: errorMessage,
      keyExists: !!process.env.GEMINI_API_KEY,
      keyLength: process.env.GEMINI_API_KEY?.length || 0,
      keyPrefix: process.env.GEMINI_API_KEY?.substring(0, 10) + '...' || 'No key'
    });
  }
}
import { GoogleGenerativeAI } from '@google/generative-ai';

// Test API connection
const testGeminiConnection = async () => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    
    const result = await model.generateContent('Hello, can you respond with just "API working"?');
    const response = await result.response;
    const text = response.text();
    
    console.log('✅ Gemini API test successful:', text);
    return true;
  } catch (error) {
    console.error('❌ Gemini API test failed:', error);
    return false;
  }
};

export { testGeminiConnection };
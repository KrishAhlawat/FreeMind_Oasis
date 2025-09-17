import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize the Gemini AI with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Pre-defined AI-like responses for fallback scenarios
const fallbackResponses = [
  "I understand you're reaching out, and I want you to know that's a brave step. While I'm experiencing some technical difficulties, I'm here to listen. What's been on your mind lately?",
  
  "Thank you for sharing with me. Sometimes technology has its challenges, but your feelings and experiences are always valid. Can you tell me more about what brought you here today?",
  
  "I appreciate you taking the time to connect. Even though I'm having some connectivity issues, I want you to know that seeking support shows real strength. What would be most helpful for you right now?",
  
  "I hear you, and I'm glad you're here. While I work through some technical challenges, please know that your mental health journey matters. What's one thing that's been weighing on your mind?",
  
  "Your willingness to reach out is commendable. Despite some system hiccups on my end, I want to remind you that you're not alone in whatever you're facing. How are you feeling today?",
  
  "I'm experiencing some technical difficulties, but I don't want that to diminish the importance of your message. Every step toward mental wellness counts. What support are you looking for?",
  
  "While I navigate some connectivity issues, I want you to know that your thoughts and feelings are important. Taking care of your mental health is a priority. What's been challenging for you recently?",
  
  "Thank you for being here. Even with these technical challenges, I believe in the power of connection and support. Sometimes just talking helps. What would you like to explore together?",
  
  "I'm having some system troubles, but your presence here shows real courage. Mental health conversations matter, and so do you. What's something you'd like to share or work through?",
  
  "Despite these technical hurdles, I want to acknowledge your effort to seek support. That takes strength. Your mental wellness journey is unique and valuable. How can I best support you today?",
  
  "I'm working through some connectivity issues, but I don't want that to stop our conversation. Your mental health is important, and so are your experiences. What brings you to chat with me today?",
  
  "While I resolve these technical challenges, I want you to remember that reaching out is always the right choice. Your feelings are valid, and support is available. What's one thing you'd like to talk about?"
];

// Track used responses to avoid repetition
let usedResponseIndices: number[] = [];

// Function to get a unique fallback response
function getUniqueFallbackResponse(): string {
  // Reset if all responses have been used
  if (usedResponseIndices.length >= fallbackResponses.length) {
    usedResponseIndices = [];
  }
  
  // Find available responses
  const availableIndices = fallbackResponses
    .map((_, index) => index)
    .filter(index => !usedResponseIndices.includes(index));
  
  // Pick a random available response
  const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
  usedResponseIndices.push(randomIndex);
  
  return fallbackResponses[randomIndex];
}

// Function to get a contextual fallback response based on user message
function getContextualFallbackResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  // Check for emotional keywords and respond appropriately
  if (message.includes('anxious') || message.includes('anxiety') || message.includes('worried')) {
    return "I can sense you might be feeling anxious. While I'm having some technical difficulties, I want you to know that anxiety is very common and manageable. Try taking a few deep breaths. What specific thoughts or situations are causing you concern?";
  }
  
  if (message.includes('sad') || message.includes('depressed') || message.includes('down')) {
    return "I hear that you may be going through a difficult time. Even though I'm experiencing some connectivity issues, I want you to know that these feelings are valid. You're not alone in this. What has been contributing to these feelings?";
  }
  
  if (message.includes('stress') || message.includes('overwhelmed') || message.includes('pressure')) {
    return "It sounds like you might be dealing with stress or feeling overwhelmed. While I work through some technical challenges, remember that stress is a normal response, and there are ways to manage it. What's been the biggest source of stress for you lately?";
  }
  
  if (message.includes('help') || message.includes('support') || message.includes('need')) {
    return "I'm glad you're reaching out for support - that shows real strength. Despite some technical hiccups on my end, I want you to know that help is available. What kind of support would be most helpful for you right now?";
  }
  
  // Default to random unique response if no keywords match
  return getUniqueFallbackResponse();
}

export async function POST(request: NextRequest) {
  let userMessage = '';
  
  try {
    const { message } = await request.json();
    userMessage = message; // Store the message for use in catch block

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if API key is available
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

    // Create a mental health-focused prompt
    const prompt = `You are a compassionate AI mental health assistant for FreeMind Oasis, a platform dedicated to supporting mental wellness. Your role is to provide empathetic, supportive responses while maintaining professional boundaries. 

Guidelines:
- Be warm, understanding, and non-judgmental
- Offer practical coping strategies and mindfulness techniques
- Encourage professional help when appropriate
- Never provide medical diagnoses or replace professional therapy
- Focus on emotional support and mental wellness education
- Keep responses helpful but concise

User message: ${message}

Please respond in a supportive and helpful manner:`;

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });

  } catch (error: unknown) {
    console.error('Error in chat API:', error);
    
    // Get a contextual fallback response based on user's message
    let fallbackResponse = getContextualFallbackResponse(userMessage || '');
    
    // Check for specific error types and provide additional context
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.includes('API key not valid')) {
      fallbackResponse = "I'm experiencing authentication issues with my AI service. " + fallbackResponse + " Remember that professional mental health resources are always available.";
    } else if (errorMessage.includes('not found') || errorMessage.includes('model')) {
      fallbackResponse = "I'm having trouble connecting to my advanced AI capabilities. " + fallbackResponse + " Your mental wellness journey is important.";
    }
    
    return NextResponse.json({ 
      response: fallbackResponse 
    });
  }
}
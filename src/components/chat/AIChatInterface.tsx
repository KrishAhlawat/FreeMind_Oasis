'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

// Pre-defined AI responses for mental health support
const aiResponses = [
  "I understand you're reaching out, and I want you to know that's a brave step. What's been on your mind lately?",
  
  "Thank you for sharing with me. Your feelings and experiences are always valid. Can you tell me more about what brought you here today?",
  
  "I appreciate you taking the time to connect. Taking care of your mental health shows real strength. What would be most helpful for you right now?",
  
  "I hear you, and I'm glad you're here. Your mental health journey matters. What's one thing that's been weighing on your mind?",
  
  "Your willingness to reach out is commendable. You're not alone in whatever you're facing. How are you feeling today?",
  
  "I want you to know that your thoughts and feelings are important. Every step toward mental wellness counts. What support are you looking for?",
  
  "I believe in the power of connection and support. Taking care of your mental health is a priority. What's been challenging for you recently?",
  
  "Thank you for being here. Mental health conversations matter, and so do you. Sometimes just talking helps. What would you like to explore together?",
  
  "Your presence here shows real courage. Mental health is important, and your experiences are valuable. What's something you'd like to share or work through?",
  
  "I want to acknowledge your effort to seek support. That takes strength. Your mental wellness journey is unique and important. How can I best support you today?",
  
  "Your mental health matters, and so do your experiences. I'm here to listen and support you. What brings you to chat with me today?",
  
  "Reaching out is always the right choice. Your feelings are valid, and support is always available. What's one thing you'd like to talk about?"
];

// Contextual responses based on keywords
const contextualResponses = {
  anxiety: [
    "I can sense you might be feeling anxious. Anxiety is very common and manageable. Try taking a few deep breaths. What specific thoughts or situations are causing you concern?",
    "Anxiety can feel overwhelming, but you're taking a positive step by talking about it. What has been triggering these anxious feelings for you?",
    "I understand that anxiety can be really challenging. Remember that these feelings are temporary. What coping strategies have you tried before?"
  ],
  sad: [
    "I hear that you may be going through a difficult time. These feelings are valid, and you're not alone. What has been contributing to these feelings?",
    "It takes courage to acknowledge when we're feeling sad. Your emotions matter, and it's okay to feel this way. What would help you feel supported right now?",
    "Sadness is a natural human emotion, and it's important to honor these feelings. What has been weighing heavily on your heart lately?"
  ],
  stress: [
    "It sounds like you might be dealing with stress or feeling overwhelmed. Stress is a normal response, and there are ways to manage it. What's been the biggest source of stress for you lately?",
    "I can understand how stress can feel consuming. Remember that you have the strength to get through this. What aspects of your life feel most overwhelming right now?",
    "Stress affects all of us, and recognizing it is the first step. You're being proactive by reaching out. What would help reduce some of that pressure you're feeling?"
  ],
  help: [
    "I'm glad you're reaching out for support - that shows real strength. Help is available, and you deserve it. What kind of support would be most helpful for you right now?",
    "Seeking help is a sign of wisdom, not weakness. You're taking an important step. What specific areas of your life feel like they need the most support?",
    "It's wonderful that you're asking for help. Everyone needs support sometimes. What would make you feel most supported and understood right now?"
  ]
};

// Track used responses to avoid repetition
let usedResponseIndices: number[] = [];

// Function to get a unique AI response
function getUniqueAIResponse(): string {
  // Reset if all responses have been used
  if (usedResponseIndices.length >= aiResponses.length) {
    usedResponseIndices = [];
  }
  
  // Find available responses
  const availableIndices = aiResponses
    .map((_, index) => index)
    .filter(index => !usedResponseIndices.includes(index));
  
  // Pick a random available response
  const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
  usedResponseIndices.push(randomIndex);
  
  return aiResponses[randomIndex];
}

// Function to get a contextual response based on user message
function getContextualResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  // Check for emotional keywords and respond appropriately
  if (message.includes('anxious') || message.includes('anxiety') || message.includes('worried')) {
    const responses = contextualResponses.anxiety;
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  if (message.includes('sad') || message.includes('depressed') || message.includes('down') || message.includes('crying')) {
    const responses = contextualResponses.sad;
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  if (message.includes('stress') || message.includes('overwhelmed') || message.includes('pressure') || message.includes('busy')) {
    const responses = contextualResponses.stress;
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  if (message.includes('help') || message.includes('support') || message.includes('need') || message.includes('guidance')) {
    const responses = contextualResponses.help;
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Default to random unique response if no keywords match
  return getUniqueAIResponse();
}

export default function AIChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI mental health assistant. How can I help you today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    const currentInput = inputText; // Store the input before clearing it
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI processing delay (2-3 seconds)
    const delay = Math.random() * 1000 + 2000; // Random delay between 2-3 seconds
    
    setTimeout(() => {
      // Get contextual response based on user input
      const aiResponseText = getContextualResponse(currentInput);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, delay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-4 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🤖</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">AI Mental Health Assistant</h2>
              <p className="text-sm text-gray-500">Always here to help and listen</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
              📝
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
              📞
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
              ⚙️
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-xs text-gray-500">AI is typing...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-end space-x-3">
          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            📎
          </button>
          <div className="flex-1 relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              disabled={isLoading}
              className="w-full text-black resize-none border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              rows={1}
              style={{ minHeight: '40px', maxHeight: '120px' }}
            />
          </div>
          <button 
            onClick={sendMessage}
            disabled={!inputText.trim() || isLoading}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ➤
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            🎤
          </button>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  avatar: string;
  isFromSupport?: boolean;
  isFromMe?: boolean;
}

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  avatar: string;
  isOnline: boolean;
  messages: Message[];
}

export default function MessagingInterface() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState('');

  const chats: Chat[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastMessage: 'Thanks for your help with the stress management techniques!',
      timestamp: '2:45 PM',
      unreadCount: 2,
      avatar: '👩',
      isOnline: true,
      messages: [
        {
          id: 1,
          sender: 'Sarah Johnson',
          content: 'Hi! I\'ve been feeling really overwhelmed with my coursework lately.',
          timestamp: '2:30 PM',
          avatar: '👩'
        },
        {
          id: 2,
          sender: 'You',
          content: 'I understand how stressful that can be. Have you tried any relaxation techniques?',
          timestamp: '2:32 PM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 3,
          sender: 'Sarah Johnson',
          content: 'Not really, I\'m not sure where to start.',
          timestamp: '2:35 PM',
          avatar: '👩'
        },
        {
          id: 4,
          sender: 'You',
          content: 'Try the 4-7-8 breathing technique: breathe in for 4, hold for 7, exhale for 8. It really helps!',
          timestamp: '2:40 PM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 5,
          sender: 'Sarah Johnson',
          content: 'Thanks for your help with the stress management techniques!',
          timestamp: '2:45 PM',
          avatar: '👩'
        }
      ]
    },
    {
      id: 2,
      name: 'Alex Chen',
      lastMessage: 'I\'ll try the study schedule you suggested',
      timestamp: '1:20 PM',
      unreadCount: 1,
      avatar: '👨',
      isOnline: true,
      messages: [
        {
          id: 1,
          sender: 'Alex Chen',
          content: 'Hey, I\'m having trouble managing my time between studies and work.',
          timestamp: '1:00 PM',
          avatar: '👨'
        },
        {
          id: 2,
          sender: 'You',
          content: 'That sounds challenging. What\'s your current schedule like?',
          timestamp: '1:05 PM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 3,
          sender: 'Alex Chen',
          content: 'I work part-time 20 hours a week and have 5 courses this semester.',
          timestamp: '1:10 PM',
          avatar: '👨'
        },
        {
          id: 4,
          sender: 'You',
          content: 'Have you considered time-blocking? Dedicate specific hours to studying each subject.',
          timestamp: '1:15 PM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 5,
          sender: 'Alex Chen',
          content: 'I\'ll try the study schedule you suggested',
          timestamp: '1:20 PM',
          avatar: '👨'
        }
      ]
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      lastMessage: 'See you at the support group meeting tomorrow',
      timestamp: '11:30 AM',
      unreadCount: 0,
      avatar: '👩‍🦱',
      isOnline: false,
      messages: [
        {
          id: 1,
          sender: 'Emma Rodriguez',
          content: 'Thanks for organizing the study group session yesterday!',
          timestamp: '11:15 AM',
          avatar: '👩‍🦱'
        },
        {
          id: 2,
          sender: 'You',
          content: 'You\'re welcome! I\'m glad everyone found it helpful.',
          timestamp: '11:20 AM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 3,
          sender: 'Emma Rodriguez',
          content: 'Are we still meeting tomorrow for the support group?',
          timestamp: '11:25 AM',
          avatar: '👩‍🦱'
        },
        {
          id: 4,
          sender: 'You',
          content: 'Yes, same time and place. Looking forward to it!',
          timestamp: '11:28 AM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 5,
          sender: 'Emma Rodriguez',
          content: 'See you at the support group meeting tomorrow',
          timestamp: '11:30 AM',
          avatar: '👩‍🦱'
        }
      ]
    },
    {
      id: 4,
      name: 'Michael Park',
      lastMessage: 'The meditation app you recommended is great!',
      timestamp: 'Yesterday',
      unreadCount: 3,
      avatar: '👨‍🎓',
      isOnline: true,
      messages: [
        {
          id: 1,
          sender: 'Michael Park',
          content: 'I\'ve been having trouble sleeping due to anxiety about exams.',
          timestamp: 'Yesterday 9:00 PM',
          avatar: '👨‍🎓'
        },
        {
          id: 2,
          sender: 'You',
          content: 'I can recommend some mindfulness apps that might help with sleep.',
          timestamp: 'Yesterday 9:05 PM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 3,
          sender: 'Michael Park',
          content: 'That would be amazing, thank you!',
          timestamp: 'Yesterday 9:10 PM',
          avatar: '👨‍🎓'
        },
        {
          id: 4,
          sender: 'You',
          content: 'Try "Calm" or "Headspace" - they have great sleep stories and guided meditations.',
          timestamp: 'Yesterday 9:15 PM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 5,
          sender: 'Michael Park',
          content: 'The meditation app you recommended is great!',
          timestamp: 'Yesterday 10:30 PM',
          avatar: '👨‍🎓'
        }
      ]
    },
    {
      id: 5,
      name: 'Lisa Wong',
      lastMessage: 'Thank you for listening to me today',
      timestamp: 'Monday',
      unreadCount: 0,
      avatar: '👩‍💻',
      isOnline: false,
      messages: [
        {
          id: 1,
          sender: 'Lisa Wong',
          content: 'I\'m feeling really isolated lately, especially since classes went online.',
          timestamp: 'Monday 3:00 PM',
          avatar: '👩‍💻'
        },
        {
          id: 2,
          sender: 'You',
          content: 'That\'s completely understandable. Many students are feeling the same way.',
          timestamp: 'Monday 3:05 PM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 3,
          sender: 'Lisa Wong',
          content: 'It helps to know I\'m not alone in feeling this way.',
          timestamp: 'Monday 3:10 PM',
          avatar: '👩‍💻'
        },
        {
          id: 4,
          sender: 'You',
          content: 'Would you be interested in joining our virtual coffee chat sessions? We have them twice a week.',
          timestamp: 'Monday 3:15 PM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 5,
          sender: 'Lisa Wong',
          content: 'Thank you for listening to me today',
          timestamp: 'Monday 3:45 PM',
          avatar: '👩‍💻'
        }
      ]
    },
    {
      id: 6,
      name: 'David Kumar',
      lastMessage: 'Looking forward to our next session',
      timestamp: 'Sunday',
      unreadCount: 1,
      avatar: '👨‍🔬',
      isOnline: true,
      messages: [
        {
          id: 1,
          sender: 'David Kumar',
          content: 'I wanted to follow up on our conversation about goal setting.',
          timestamp: 'Sunday 2:00 PM',
          avatar: '👨‍🔬'
        },
        {
          id: 2,
          sender: 'You',
          content: 'Of course! How did the SMART goals exercise work out for you?',
          timestamp: 'Sunday 2:05 PM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 3,
          sender: 'David Kumar',
          content: 'It really helped me break down my thesis work into manageable chunks.',
          timestamp: 'Sunday 2:10 PM',
          avatar: '👨‍🔬'
        },
        {
          id: 4,
          sender: 'You',
          content: 'That\'s fantastic! Remember to celebrate the small wins along the way.',
          timestamp: 'Sunday 2:15 PM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 5,
          sender: 'David Kumar',
          content: 'Looking forward to our next session',
          timestamp: 'Sunday 2:30 PM',
          avatar: '👨‍🔬'
        }
      ]
    },
    {
      id: 7,
      name: 'Amy Thompson',
      lastMessage: 'The journaling technique is really helping',
      timestamp: 'Friday',
      unreadCount: 2,
      avatar: '👩‍🎨',
      isOnline: false,
      messages: [
        {
          id: 1,
          sender: 'Amy Thompson',
          content: 'I\'ve been struggling with negative self-talk lately.',
          timestamp: 'Friday 4:00 PM',
          avatar: '👩‍🎨'
        },
        {
          id: 2,
          sender: 'You',
          content: 'That\'s a common challenge. Have you tried thought reframing techniques?',
          timestamp: 'Friday 4:05 PM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 3,
          sender: 'Amy Thompson',
          content: 'Not really, could you teach me some?',
          timestamp: 'Friday 4:10 PM',
          avatar: '👩‍🎨'
        },
        {
          id: 4,
          sender: 'You',
          content: 'Try writing down negative thoughts and then challenge them with evidence. What would you tell a friend in your situation?',
          timestamp: 'Friday 4:15 PM',
          avatar: '🧑‍💼',
          isFromMe: true
        },
        {
          id: 5,
          sender: 'Amy Thompson',
          content: 'The journaling technique is really helping',
          timestamp: 'Friday 6:00 PM',
          avatar: '👩‍🎨'
        }
      ]
    }
  ];

  const selectedChatData = chats.find(chat => chat.id === selectedChat);

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage, 'to chat:', selectedChat);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
    // Auto-resize textarea
    const target = e.target;
    target.style.height = 'auto';
    target.style.height = Math.min(target.scrollHeight, 128) + 'px';
  };

  const handleChatSelect = (chatId: number) => {
    setSelectedChat(chatId);
    // Mark chat as read when selected
    const chat = chats.find(c => c.id === chatId);
    if (chat) {
      chat.unreadCount = 0;
    }
  };

  return (
    <div className="flex-1 flex bg-white">
      {/* Chat List Section */}
      <div className="w-80 bg-yellow-100 border-r">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-yellow-200 to-yellow-300 border-b border-yellow-400">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-800">Messages</h2>
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700 bg-yellow-400 px-2 py-1 rounded-full">CHAT</span>
              <button className="text-gray-700 hover:text-gray-900 p-1 rounded-full hover:bg-yellow-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full text-black pl-10 pr-4 py-2.5 bg-white border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="chat-list overflow-y-auto h-full">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatSelect(chat.id)}
              className={`flex items-center p-3 border-b border-yellow-200 cursor-pointer hover:bg-yellow-50 transition-colors ${
                selectedChat === chat.id ? 'bg-yellow-50 border-l-4 border-l-orange-500' : ''
              }`}
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-3 text-white">
                  <span className="text-lg">{chat.avatar}</span>
                </div>
                {chat.isOnline && (
                  <div className="absolute -bottom-0.5 right-3 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-yellow-100"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-800 truncate text-sm">{chat.name}</h3>
                  <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 truncate leading-tight">{chat.lastMessage}</p>
              </div>
              {chat.unreadCount > 0 && (
                <div className="ml-3 bg-orange-500 text-white text-xs rounded-full min-w-[24px] h-6 flex items-center justify-center px-2 flex-shrink-0">
                  {chat.unreadCount}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Messages Section */}
      <div className="flex-1 flex flex-col">
        {selectedChatData ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-white border-b flex items-center justify-between shadow-sm">
              <div className="flex items-center">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-3 text-white">
                    <span className="text-lg">{selectedChatData.avatar}</span>
                  </div>
                  {selectedChatData.isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">{selectedChatData.name}</h3>
                  <p className={`text-sm ${selectedChatData.isOnline ? 'text-green-600' : 'text-gray-500'}`}>
                    {selectedChatData.isOnline ? 'Online' : 'Last seen recently'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-gray-500 hover:text-orange-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-orange-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z"></path>
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-orange-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="messages-container flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-gray-100">
              {selectedChatData.messages.map((message) => (
                <div key={message.id} className={`flex items-end space-x-2 ${message.isFromMe ? 'justify-end' : 'justify-start'}`}>
                  {!message.isFromMe && (
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm text-white">{message.avatar}</span>
                    </div>
                  )}
                  <div className={`max-w-xs text-black lg:max-w-md ${message.isFromMe ? 'order-2' : 'order-1'}`}>
                    <div className={`px-4 py-3 rounded-2xl shadow-sm ${
                      message.isFromMe 
                        ? 'bg-orange-500 text-white rounded-br-md' 
                        : 'bg-white border border-gray-200 rounded-bl-md'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    <div className={`mt-1 text-xs text-gray-500 px-1 ${message.isFromMe ? 'text-right' : 'text-left'}`}>
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-200 text-black">
              <div className="flex items-center justify-center space-x-3">
                <button className="text-gray-500 hover:text-orange-600 p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <div className="flex-1 relative flex items-center justify-center">
                  <textarea
                    value={newMessage}
                    onChange={handleTextareaChange}
                    onKeyPress={handleKeyPress}
                    placeholder={`Message ${selectedChatData.name}...`}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none max-h-32 min-h-[48px]"
                    rows={1}
                    style={{
                      height: 'auto',
                      minHeight: '48px'
                    }}
                  />
                </div>
                <button className="text-gray-500 hover:text-orange-600 p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zM9 9a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm1 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <button 
                  onClick={handleSendMessage}
                  className={`p-3 rounded-full transition-all duration-200 flex items-center justify-center ${
                    newMessage.trim() 
                      ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!newMessage.trim()}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          /* No Chat Selected */
          <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="text-center max-w-md px-8">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Welcome to FreeMind Oasis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Start connecting with students who need your support. Select a conversation from the left to begin making a difference in someone&apos;s mental wellness journey.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-sm text-orange-800 font-medium">
                  💡 Tip: Click on any chat to see their conversation history and continue helping!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
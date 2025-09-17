'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ChatDashboardSidebar() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('Chat with AI');

  const menuItems: MenuItem[] = [
    { id: 'overview', label: 'OVERVIEW', icon: '📊' },
    { id: 'chat', label: 'Chat with AI', icon: '🤖', isActive: true },
    { id: 'history', label: 'Chat History', icon: '📝' },
    { id: 'return-home', label: 'Return Back To Home Page', icon: '↶' },
    { id: 'change-role', label: 'Change Role', icon: '🔄' },
  ];

  interface MenuItem {
    id: string;
    label: string;
    icon: string;
    isActive?: boolean;
  }

  const handleMenuClick = (item: MenuItem) => {
    setActiveSection(item.label);
    if (item.id === 'return-home') {
      router.push('/');
    }
  };

  return (
    <div className="w-64 bg-gradient-to-b from-orange-400 to-orange-500 text-black flex flex-col h-screen">
      {/* Header */}
      <div className="px-6 py-4 border-b border-orange-300 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
            <span className="text-lg">🤖</span>
          </div>
          <h1 className="text-xl font-bold">AI Chat</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {/* Menu Items */}
        <nav className="py-4">
          <div className="px-4 mb-4">
            <h3 className="text-sm font-semibold opacity-80 mb-4">OVERVIEW</h3>
          </div>
          
          <div className="space-y-2 px-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item)}
                className={`w-full flex cursor-pointer items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  item.isActive || activeSection === item.label
                    ? 'bg-white bg-opacity-20 font-medium'
                    : 'hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Support Section */}
        <div className="p-4 m-4 bg-white bg-opacity-10 rounded-lg">
          <h3 className="font-semibold mb-2">24/7 AI Assistant Available</h3>
          <p className="text-sm opacity-80 mb-4">
            Have questions? Need mental health support? Chat with our AI assistant!
          </p>
          <button className="w-full cursor-pointer bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
            Start New Chat
          </button>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-orange-300 space-y-3">
          <button className="flex items-center cursor-pointer space-x-3 text-sm hover:bg-white hover:bg-opacity-10 w-full p-2 rounded">
            <span>⚙️</span>
            <span>Settings</span>
          </button>
          <button className="flex items-center cursor-pointer space-x-3 text-sm hover:bg-white hover:bg-opacity-10 w-full p-2 rounded">
            <span>❓</span>
            <span>FAQ</span>
          </button>
          <button className="flex items-center cursor-pointer space-x-3 text-sm hover:bg-white hover:bg-opacity-10 w-full p-2 rounded">
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useRouter } from 'next/navigation';

interface CounsellorSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CounsellorSidebar({ isOpen, onClose }: CounsellorSidebarProps) {
  const router = useRouter();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', active: true },
    { id: 'back', label: 'Return Back To Home Page', icon: '🏠', active: false },
    { id: 'role', label: 'Change Role', icon: '🔄', active: false },
  ];

  const peerStudents = [
    { name: 'Rishab', subtitle: 'Communication', avatar: '👨‍💼' },
    { name: 'Aman', subtitle: 'Communication', avatar: '👨‍💻' },
    { name: 'Krish', subtitle: 'Communication', avatar: '👨‍🎓' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:relative top-0 left-0 z-50 h-full
        w-80 bg-gradient-to-b from-orange-400 to-orange-500 text-white flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        overflow-hidden
      `}>
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide p-6 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="mr-2">💎</span>
          Dashboard
        </h2>
      </div>
      
      {/* Overview Section */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold mb-4 text-orange-100">OVERVIEW</h3>
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`w-full text-left p-3 rounded-lg transition-colors flex items-center ${
                item.active 
                  ? 'bg-white/20 text-white' 
                  : 'text-orange-100 hover:bg-white/10'
              }`}
              onClick={() => {
                if (item.id === 'back') {
                  router.push('/');
                } else if (item.id === 'role') {
                  router.push('/volunteer');
                }
              }}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Peer Students Section */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold mb-4 text-orange-100">PEER STUDENTS</h3>
        <div className="space-y-3">
          {peerStudents.map((student, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">
                {student.avatar}
              </div>
              <div>
                <div className="font-medium">{student.name}</div>
                <div className="text-sm text-orange-100">{student.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 24/7 Support */}
      <div className="bg-white/10 rounded-xl p-4 mb-6">
        <h4 className="font-semibold mb-2">24/7 Student Support Available</h4>
        <p className="text-sm text-orange-100 mb-3">
          Have query? Not able to book appointment? Contact Us!
        </p>
        <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors w-full">
          Chat Now
        </button>
      </div>
      
      {/* Footer */}
      <div className="mt-auto space-y-4">
        <button className="flex items-center text-orange-100 hover:text-white transition-colors">
          <span className="mr-2">⚙️</span>
          Settings
        </button>
        <button className="flex items-center text-orange-100 hover:text-white transition-colors">
          <span className="mr-2">❓</span>
          FAQ
        </button>
        <button className="flex items-center text-orange-100 hover:text-white transition-colors">
          <span className="mr-2">🚪</span>
          Logout
        </button>
      </div>
        </div>
      </div>
    </>
  );
}
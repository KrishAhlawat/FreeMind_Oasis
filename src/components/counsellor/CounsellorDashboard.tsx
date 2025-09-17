'use client';

import { useState } from 'react';
import CounsellorSidebar from '@/components/counsellor/CounsellorSidebar';
import StatsSection from '@/components/counsellor/StatsSection';
import WellnessCorner from '@/components/counsellor/WellnessCorner';
import PatientStudents from '@/components/counsellor/PatientStudents';

export default function CounsellorDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-full h-screen bg-gray-50 relative">
      {/* Left Sidebar */}
      <CounsellorSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className={`
        flex-1 flex flex-col p-6 overflow-auto transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'lg:ml-0' : 'lg:ml-0'}
      `}>
        {/* Header with Menu Button */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-2">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Welcome To FreeMind Oasis</h1>
          </div>
          <p className="text-gray-600">Hope you are healthy and happy today!</p>
        </div>
        
        {/* Stats and Content Area */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats */}
          <div className="lg:col-span-2 space-y-6">
            <StatsSection />
            <WellnessCorner />
          </div>
          
          {/* Right Column - Patient Students */}
          <div className="lg:col-span-1">
            <PatientStudents />
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function StatsSection() {
  // Line Chart Data for Students Progress
  const lineChartData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
    datasets: [
      {
        label: 'Students Progress',
        data: [65, 75, 80, 85, 90, 95],
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(249, 115, 22)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgb(249, 115, 22)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
        },
      },
      y: {
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
        },
        ticks: {
          color: '#6b7280',
          callback: function(value: string | number) {
            return value + '%';
          },
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart' as const,
    },
  };

  // Doughnut Chart Data for Today's Sessions
  const doughnutData = {
    labels: ['Completed', 'Pending', 'Cancelled'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: [
          'rgb(249, 115, 22)',
          'rgb(251, 191, 36)',
          'rgb(239, 68, 68)',
        ],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          color: '#6b7280',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgb(249, 115, 22)',
        borderWidth: 1,
      },
    },
    animation: {
      animateRotate: true,
      duration: 2000,
    },
  };

  const stats = [
    {
      title: 'Students Booked with Me',
      subtitle: 'View all students who have scheduled sessions with you.',
      icon: '📊',
      bgColor: 'bg-blue-100',
    },
    {
      title: "Today's Sessions Lineup",
      subtitle: 'See who you&apos;re meeting with throughout the day.',
      icon: '📋',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Anonymous Student Feedback',
      subtitle: 'A safe space for students to share feedback anonymously.',
      icon: '📝',
      bgColor: 'bg-blue-100',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Main Chart Section */}
      <div className="bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 rounded-2xl p-6 relative overflow-hidden">
        {/* Background Mountain Illustration */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <path d="M0,200 L0,120 L80,80 L160,100 L240,60 L320,90 L400,70 L400,200 Z" fill="url(#mountainGradient)" />
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="100%" stopColor="#6b7280" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Sun */}
        <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
        
        {/* Chart Content */}
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <button className="bg-white/80 hover:bg-white text-gray-700 px-4 py-2 rounded-lg transition-colors">
                All
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl p-6 relative">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Students Supported</h3>
              <div className="h-48">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bgColor} rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer`}>
            <div className="text-3xl mb-3">{stat.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-2">{stat.title}</h3>
            <p className="text-sm text-gray-600">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Today's Sessions Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Today&apos;s Sessions Distribution</h3>
        <div className="h-64">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      </div>
    </div>
  );
}
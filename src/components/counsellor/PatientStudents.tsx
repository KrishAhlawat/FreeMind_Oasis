'use client';

export default function PatientStudents() {
  const currentUser = {
    name: 'Keyur',
    greeting: 'Good Morning Keyur',
    subtitle: 'Continue Your Journey Forward',
    avatar: '👨‍💼',
  };

  const patients = [
    {
      id: 1,
      name: 'Ravi Prakash',
      subtitle: 'Computer',
      avatar: '👨‍💻',
      status: 'online',
      lastMessage: '2 min ago',
    },
    {
      id: 2,
      name: 'Akshat Sinha',
      subtitle: 'Computer',
      avatar: '👨‍💼',
      status: 'away',
      lastMessage: '15 min ago',
    },
    {
      id: 3,
      name: 'Khushi Upadhyaya',
      subtitle: 'Computer',
      avatar: '👩‍💻',
      status: 'online',
      lastMessage: '1 hour ago',
    },
    {
      id: 4,
      name: 'Pranshi Chaubey',
      subtitle: 'Computer',
      avatar: '👩‍💼',
      status: 'offline',
      lastMessage: '3 hours ago',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-gray-900 text-white rounded-xl p-6 h-full">
      {/* Current User Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-lg">
            {currentUser.avatar}
          </div>
          <div>
            <h3 className="font-semibold text-lg">{currentUser.greeting}</h3>
            <p className="text-gray-400 text-sm">{currentUser.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Patient Students Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-lg">Patient Students</h4>
          <span className="text-orange-400 text-2xl">👥</span>
        </div>
        
        <div className="space-y-4">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-sm">
                  {patient.avatar}
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(patient.status)} rounded-full border-2 border-gray-900`}></div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="font-medium group-hover:text-orange-400 transition-colors">
                  {patient.name}
                </div>
                <div className="text-sm text-gray-400">{patient.subtitle}</div>
              </div>
              
              <div className="text-xs text-gray-500">
                {patient.lastMessage}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See All Button */}
      <div className="mt-6">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-colors font-medium flex items-center justify-center space-x-2">
          <span>See All</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 space-y-3">
        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors text-sm flex items-center space-x-2">
          <span>📅</span>
          <span>Schedule Session</span>
        </button>
        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors text-sm flex items-center space-x-2">
          <span>📊</span>
          <span>View Reports</span>
        </button>
        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors text-sm flex items-center space-x-2">
          <span>💬</span>
          <span>Send Message</span>
        </button>
      </div>
    </div>
  );
}
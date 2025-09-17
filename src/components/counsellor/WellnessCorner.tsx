'use client';

import { useRouter } from 'next/navigation';

export default function WellnessCorner() {
  const router = useRouter();

  const videos = [
    {
      id: 1,
      title: 'Coping Skills For Everyday Challenges : Thrive Under Pressure',
      author: 'Keyur',
      authorSubtitle: 'UGC',
      thumbnail: '/api/placeholder/300/180',
      category: 'Coping Skills',
    },
    {
      id: 2,
      title: 'Mindful You : Building Daily Wellness Habits',
      author: 'Keyur',
      authorSubtitle: 'UGC',
      thumbnail: '/api/placeholder/300/180',
      category: 'Mindfulness',
    },
    {
      id: 3,
      title: 'Speaking Your Mind: Expressing Emotions Safely',
      author: 'Keyur',
      authorSubtitle: 'UGC',
      thumbnail: '/api/placeholder/300/180',
      category: 'Communication',
    },
  ];

  const handleVideoClick = () => {
    router.push('/resources');
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Wellness Corner</h2>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-all duration-300"
            onClick={handleVideoClick}
          >
            {/* Video Thumbnail */}
            <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              {/* Placeholder for video thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-80">
                <div className="flex items-center justify-center h-full">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-black/60 text-white px-2 py-1 rounded text-xs font-medium">
                {video.category}
              </div>
              
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-sm leading-tight mb-3 group-hover:text-orange-600 transition-colors">
                {video.title}
              </h3>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {video.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700">{video.author}</div>
                  <div className="text-xs text-gray-500">{video.authorSubtitle}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => router.push('/resources')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors font-medium"
        >
          View All Resources
        </button>
      </div>
    </div>
  );
}
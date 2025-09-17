'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Video {
  id: string;
  title: string;
  description: string;
  category: string;
  embedUrl: string;
  duration: string;
  thumbnail: string;
}

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const videos: Video[] = [
    {
      id: '1',
      title: 'Understanding Anxiety: Causes and Coping Strategies',
      description: 'Learn about anxiety disorders, their causes, and effective coping mechanisms to manage daily stress.',
      category: 'Anxiety',
      embedUrl: 'https://www.youtube.com/embed/WWloIAQpMcQ',
      duration: '12:45',
      thumbnail: 'https://img.youtube.com/vi/WWloIAQpMcQ/maxresdefault.jpg'
    },
    {
      id: '2',
      title: 'Depression: Breaking the Silence',
      description: 'Understanding depression, recognizing symptoms, and finding hope through professional help and support.',
      category: 'Depression',
      embedUrl: 'https://www.youtube.com/embed/z-IR48Mb3W0',
      duration: '15:30',
      thumbnail: 'https://img.youtube.com/vi/z-IR48Mb3W0/maxresdefault.jpg'
    },
    {
      id: '3',
      title: 'Mindfulness Meditation for Beginners',
      description: 'A gentle introduction to mindfulness meditation practices for stress reduction and mental clarity.',
      category: 'Mindfulness',
      embedUrl: 'https://www.youtube.com/embed/ZToicYcHIOU',
      duration: '20:15',
      thumbnail: 'https://img.youtube.com/vi/ZToicYcHIOU/maxresdefault.jpg'
    },
    {
      id: '4',
      title: 'Building Resilience in Tough Times',
      description: 'Develop mental resilience and learn how to bounce back from life&apos;s challenges with strength.',
      category: 'Resilience',
      embedUrl: 'https://www.youtube.com/embed/NWH8N-BvhAw',
      duration: '18:22',
      thumbnail: 'https://img.youtube.com/vi/NWH8N-BvhAw/maxresdefault.jpg'
    },
    {
      id: '5',
      title: 'Student Stress Management Techniques',
      description: 'Practical strategies specifically designed for students to manage academic pressure and stress.',
      category: 'Stress Management',
      embedUrl: 'https://www.youtube.com/embed/hnpQrMqDoqE',
      duration: '14:10',
      thumbnail: 'https://img.youtube.com/vi/hnpQrMqDoqE/maxresdefault.jpg'
    },
    {
      id: '6',
      title: 'Breathing Exercises for Instant Calm',
      description: 'Quick and effective breathing techniques you can use anywhere to reduce anxiety and find calm.',
      category: 'Breathing Techniques',
      embedUrl: 'https://www.youtube.com/embed/tybOi4hjZFQ',
      duration: '8:45',
      thumbnail: 'https://img.youtube.com/vi/tybOi4hjZFQ/maxresdefault.jpg'
    },
    {
      id: '7',
      title: 'Self-Care Practices for Mental Health',
      description: 'Essential self-care routines and practices to maintain good mental health and emotional well-being.',
      category: 'Self-Care',
      embedUrl: 'https://www.youtube.com/embed/w0iVTQS8ftg',
      duration: '16:30',
      thumbnail: 'https://img.youtube.com/vi/w0iVTQS8ftg/maxresdefault.jpg'
    },
    {
      id: '8',
      title: 'Cognitive Behavioral Therapy Basics',
      description: 'Introduction to CBT techniques and how they can help reshape negative thought patterns.',
      category: 'Therapy',
      embedUrl: 'https://www.youtube.com/embed/0ViaCs0k2jM',
      duration: '22:15',
      thumbnail: 'https://img.youtube.com/vi/0ViaCs0k2jM/maxresdefault.jpg'
    },
    {
      id: '9',
      title: 'Sleep Hygiene for Better Mental Health',
      description: 'The connection between sleep and mental health, plus tips for improving sleep quality.',
      category: 'Sleep',
      embedUrl: 'https://www.youtube.com/embed/nm1TxQj9IsQ',
      duration: '13:20',
      thumbnail: 'https://img.youtube.com/vi/nm1TxQj9IsQ/maxresdefault.jpg'
    },
    {
      id: '10',
      title: 'Building Healthy Relationships',
      description: 'How to create and maintain healthy relationships that support your mental well-being.',
      category: 'Relationships',
      embedUrl: 'https://www.youtube.com/embed/rbD5dShemps',
      duration: '19:45',
      thumbnail: 'https://img.youtube.com/vi/rbD5dShemps/maxresdefault.jpg'
    },
    {
      id: '11',
      title: 'Managing Social Anxiety',
      description: 'Strategies and techniques to overcome social anxiety and build confidence in social situations.',
      category: 'Anxiety',
      embedUrl: 'https://www.youtube.com/embed/uGdcNLsKDzU',
      duration: '17:30',
      thumbnail: 'https://img.youtube.com/vi/uGdcNLsKDzU/maxresdefault.jpg'
    },
    {
      id: '12',
      title: 'Emotional Regulation Skills',
      description: 'Learn practical skills to better understand and manage your emotions in healthy ways.',
      category: 'Emotional Wellness',
      embedUrl: 'https://www.youtube.com/embed/uq5YUQzAo_g',
      duration: '21:10',
      thumbnail: 'https://img.youtube.com/vi/uq5YUQzAo_g/maxresdefault.jpg'
    }
  ];

  const categories = ['All', ...Array.from(new Set(videos.map(video => video.category)))];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => router.back()}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 className="text-4xl font-bold">Mental Health Resource Hub</h1>
          </div>
          <p className="text-xl text-orange-100">
            Curated mental health videos to support your wellness journey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-black mb-2">
                Search Videos
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-black placeholder-gray-500 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <label htmlFor="category" className="block text-sm font-medium text-black mb-2">
                Filter by Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="text-black">{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredVideos.length} of {videos.length} videos
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No videos found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}

interface VideoCardProps {
  video: Video;
}

function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow video-card-hover"
    >
      {/* Video Embed */}
      <div className="relative aspect-video bg-gray-900">
        {isPlaying ? (
          <iframe
            src={video.embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-colors">
              <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-colors">
                <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            {/* Duration Badge */}
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
              {video.duration}
            </div>
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {video.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {video.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {video.description}
        </p>

        {/* Duration and Watch Button */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{video.duration}</span>
          <button
            onClick={() => setIsPlaying(true)}
            className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
          >
            Watch Now →
          </button>
        </div>
      </div>
    </div>
  );
}
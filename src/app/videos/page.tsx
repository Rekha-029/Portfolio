'use client'
import { Play, Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'

export default function VideosPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              🎬 Performance Videos
            </h1>
            <p className="text-gray-600 text-lg">
              Watch Surender's dance performances and creative journey
            </p>
          </div>
          <Link 
            href="/" 
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VideoCard 
            src="/A.mp4"
            title="India's Talent Fight - Season 6"
            description="Dance Performance"
            date="2024"
            category="Competition"
          />
          
          <VideoCard 
            src="/B.mp4"
            title="SHC Project Dance Event"
            description="Company Performance"
            date="2023"
            category="Corporate"
          />
          
          <VideoCard 
            src="/C.mp4"
            title="Creative Dance Reel"
            description="Personal Performance"
            date="2024"
            category="Creative"
          />

          <VideoCard 
            src="/D.mp4"
            title="Annual Day Celebration"
            description="Special Performance"
            date="2023"
            category="Event"
          />

          <VideoCard 
            src="/E.mp4"
            title="Dance Workshop"
            description="Teaching & Learning"
            date="2024"
            category="Workshop"
          />

          <VideoCard 
            src="/F.mp4"
            title="Cultural Program"
            description="Traditional Dance"
            date="2022"
            category="Cultural"
          />
        </div>
      </div>
    </div>
  )
}

// Video Card Component
function VideoCard({ src, title, description, date, category }: { src: string; title: string; description: string; date: string; category: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
      <div className="relative aspect-video bg-gray-900">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          preload="metadata"
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <div 
            className="absolute inset-0 bg-black/30 hover:bg-black/50 transition flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.play()
                setIsPlaying(true)
              }
            }}
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:scale-110 transition">
              <Play className="text-white w-10 h-10 ml-1" />
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {date}
          </span>
          <span className="flex items-center gap-1">
            <User size={14} /> Surender Panchal
          </span>
        </div>
      </div>
    </div>
  )
}
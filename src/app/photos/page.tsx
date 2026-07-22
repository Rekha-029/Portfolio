'use client'
import { Image as ImageIcon, Calendar, User, ArrowLeft, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Photo {
  id: number
  src: string
  title: string
  category: string
  date: string
}

export default function PhotosPage() {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null)

  // Sample photos data - Add your photos here
  const photos: Photo[] = [
    {
      id: 1,
      src: '/photos/performance1.jpg',
      title: 'India\'s Talent Fight',
      category: 'Competition',
      date: '2024',
    },
    {
      id: 2,
      src: '/photos/performance2.jpg',
      title: 'SHC Project Event',
      category: 'Corporate',
      date: '2023',
    },
    {
      id: 3,
      src: '/photos/performance3.jpg',
      title: 'Dance Performance',
      category: 'Creative',
      date: '2024',
    },
    {
      id: 4,
      src: '/photos/performance4.jpg',
      title: 'Annual Celebration',
      category: 'Event',
      date: '2023',
    },
    {
      id: 5,
      src: '/photos/performance5.jpg',
      title: 'Cultural Program',
      category: 'Cultural',
      date: '2022',
    },
    {
      id: 6,
      src: '/photos/performance6.jpg',
      title: 'Dance Workshop',
      category: 'Workshop',
      date: '2024',
    },
    {
      id: 7,
      src: '/photos/performance7.jpg',
      title: 'Award Ceremony',
      category: 'Achievement',
      date: '2024',
    },
    {
      id: 8,
      src: '/photos/performance8.jpg',
      title: 'Group Performance',
      category: 'Event',
      date: '2023',
    },
    {
      id: 9,
      src: '/photos/performance9.jpg',
      title: 'Solo Performance',
      category: 'Creative',
      date: '2024',
    },
  ]

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              📸 Performance Photos
            </h1>
            <p className="text-gray-600 text-lg">
              Memorable moments from Surender's performances and events
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

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div 
              key={photo.id}
              className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-sm">{photo.title}</h3>
                  <p className="text-xs text-gray-300">{photo.category}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                <ImageIcon className="text-white opacity-0 group-hover:opacity-100 transition" size={40} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={30} />
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-2xl font-semibold">{selectedImage.title}</h3>
              <div className="flex items-center gap-4 mt-2 text-gray-300">
                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {selectedImage.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={16} /> Surender Panchal
                </span>
                <span className="bg-blue-600 px-3 py-1 rounded-full text-xs">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
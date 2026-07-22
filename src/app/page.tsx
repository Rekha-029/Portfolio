import { Briefcase, MapPin, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Surender Panchal
              </h1>
              <p className="text-xl md:text-2xl mb-2 text-blue-100">
                Store Incharge
              </p>
              <p className="text-lg mb-6 text-blue-50">
                Spartan Builder's Pvt Ltd
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full flex items-center">
                  <Briefcase size={18} className="mr-2" />
                  Store Management
                </span>
                <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full flex items-center">
                  <MapPin size={18} className="mr-2" />
                  India
                </span>
                <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full flex items-center">
                  <Calendar size={18} className="mr-2" />
                  Since 2017
                </span>
              </div>
              <Link 
                href="/about" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition shadow-lg"
              >
                Know More About Me
              </Link>
            </div>
            <div className="flex justify-center">
  <div className="relative w-64 h-64 md:w-80 md:h-80">
    <Image
      src="/sp.webp"  // ← Apni image ka path
      alt="Surender Panchal"
      fill
      className="rounded-full object-cover shadow-2xl"
      priority
    />
  </div>
</div>

          </div>
        </div>
      </section>
      

<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8">
      <Link href="/videos" className="block">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center hover:scale-105 transition shadow-xl">
          <div className="text-6xl mb-4">🎬</div>
          <h3 className="text-2xl font-bold mb-2">Watch Videos</h3>
          <p className="text-purple-100">View all dance performances</p>
        </div>
      </Link>
      <Link href="/photos" className="block">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white text-center hover:scale-105 transition shadow-xl">
          <div className="text-6xl mb-4">📸</div>
          <h3 className="text-2xl font-bold mb-2">View Photos</h3>
          <p className="text-blue-100">See all performance moments</p>
        </div>
      </Link>
    </div>
  </div>
</section>

      {/* Quick Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-black">
          <h2 className="text-3xl font-bold text-center mb-12 ">At a Glance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="font-semibold text-xl mb-2">Current Role</h3>
              <p className="text-black-600">Store Incharge</p>
              <p className="text-sm text-black-500">Spartan Builder's Pvt Ltd</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-semibold text-xl mb-2">Experience</h3>
              <p className="text-black-600">7+ Years</p>
              <p className="text-sm text-black-500">Store & Account Management</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold text-xl mb-2">Achievement</h3>
              <p className="text-black-600">India's Talent Fight</p>
              <p className="text-sm text-black-500">Season 6 - Selected</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
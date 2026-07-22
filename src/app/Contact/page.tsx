'use client'
import { PhoneCall, MapPin, Mail } from 'lucide-react'

export default function Contact() {
  const client = {
    name: 'Surender Panchal',
    phone: '919306848434',
    company: "Spartan Builder's Pvt Ltd"
  }

  const whatsappLink = `https://wa.me/${client.phone}?text=${encodeURIComponent(
    `Hi Surender Panchal! 👋\n\nI visited your portfolio and would like to connect with you.\n\nThanks!`
  )}`

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-3xl w-full mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          {/* Profile Icon */}
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-white font-bold">SP</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Contact Me
          </h1>
          <p className="text-gray-500 mb-8">
            Let's connect! I'm available for professional inquiries.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 mb-8 text-left max-w-sm mx-auto">
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="bg-green-100 p-2 rounded-full">
                <PhoneCall className="text-green-600" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Phone / WhatsApp</p>
                <a href="tel:+919306848434" className="text-gray-800 font-medium hover:text-blue-600">
                  +91 93068 48434
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="bg-blue-100 p-2 rounded-full">
                <Mail className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <a href="mailto:surender@example.com" className="text-gray-800 font-medium hover:text-blue-600">
                  surender@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-2 rounded-full">
                <MapPin className="text-red-600" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="text-gray-800 font-medium">India</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button with Pre-filled Message */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition shadow-lg hover:shadow-xl"
          >
            <PhoneCall size={24} />
            Chat on WhatsApp
          </a>

          {/* Company Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              📍 Currently working at <span className="font-medium">{client.company}</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">
              ⏰ Available for professional inquiries
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
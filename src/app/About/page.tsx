import { Award, Music, Gamepad, Video, Heart } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          About Me
        </h1>

        {/* About Me Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Hi, I'm Surender Panchal 👋
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I'm passionate about dance, singing, music, gaming, and video editing. 
                I love learning new creative skills and expressing myself through them. 
                My biggest dream is to work hard, achieve success, and give my family a better future.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-black">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Music className="mx-auto text-blue-600 mb-2" size={28} />
                  <span className="text-sm font-medium">Music</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Gamepad className="mx-auto text-green-600 mb-2" size={28} />
                  <span className="text-sm font-medium">Gaming</span>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Video className="mx-auto text-purple-600 mb-2" size={28} />
                  <span className="text-sm font-medium">Video Editing</span>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <Heart className="mx-auto text-pink-600 mb-2" size={28} />
                  <span className="text-sm font-medium">Dance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Work Experience
        </h2>
        <div className="space-y-6 mb-12 ">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold   text-blue-600">Store Incharge</h3>
                <p className="text-gray-600 font-medium">Spartan Builder's Pvt Ltd</p>
              </div>
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                Sep 2024 - Till Now
              </span>
            </div>
            <p className="text-gray-500 mt-3">
              Stock Handling, Stock Inventory for Audit, and completing company challenges on time.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold  text-green-600">Store Assistant</h3>
                <p className="text-gray-600 font-medium">SHC Project Private Limited</p>
              </div>
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                Sep 2022 - Sep 2024
              </span>
            </div>
            <p className="text-gray-500 mt-3">
              Store management, inventory control, and operational support.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-600">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-orange-600">Account Assistant</h3>
                <p className="text-gray-600 font-medium">Dadheech Infrastructure Private Limited</p>
              </div>
              <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium">
                May 2017 - May 2020
              </span>
            </div>
            <p className="text-gray-500 mt-3">
              Accounts management and financial record keeping.
            </p>
          </div>
        </div>

        {/* Achievement Section */}
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          🏆 Achievement
        </h2>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-yellow-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-6xl">🏅</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                India's Talent Fight - Season 6
              </h3>
              <p className="text-gray-700 mt-2 text-lg">
                While working as a Store Assistant at SHC Projects Private Limited, 
                I got an opportunity to showcase my dance talent. I auditioned and 
                was selected for <strong>India's Talent Fight Season 6</strong>!
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                This experience inspired me to pursue my creative passions alongside my professional career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
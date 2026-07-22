export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Surender Kumar. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Spartan Builder's Pvt Ltd | Store Incharge
        </p>
      </div>
    </footer>
  )
}
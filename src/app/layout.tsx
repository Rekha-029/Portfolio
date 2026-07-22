import './globals.css'
import Navbar from '../app/components/Navbar'  // ← Note: ../components not ../app/components
import Footer from './components/footer'   // ← Capital F

export const metadata = {
  title: 'Surender Kumar - Store Incharge | Spartan Builders',
  description: 'Professional Store Incharge with passion for dance, music, and creativity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
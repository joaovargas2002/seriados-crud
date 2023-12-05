import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/layouts/navbar'
import Rodape from './components/layouts/rodape'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children, }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Rodape />
        </div>
      </body>
    </html>
  )
}


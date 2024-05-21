import './globals.css'
import Navbar from '@/components/navbar'
import { Inter, Inconsolata, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const inconsolata = Inconsolata({ subsets: ['latin'] })
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700']
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <Navbar />
        <main className="px-4 max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  )
}

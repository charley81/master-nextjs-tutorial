import Link from 'next/link'
import { mainNavbarLinks } from '@/utils/links'

export default function Navbar() {
  return (
    <nav className="px-4 max-w-3xl mx-auto py-4 flex gap-x-4">
      {mainNavbarLinks.map((link) => (
        <Link key={link.path} href={link.path}>
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/research': {
    name: 'Research',
  },
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="site-nav" id="nav">
      {Object.entries(navItems).map(([path, { name }]) => (
        <Link
          key={path}
          href={path}
          className="nav-link"
          aria-current={pathname === path ? 'page' : undefined}
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}

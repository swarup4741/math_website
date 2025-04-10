"use client"
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Moon, Sun } from './Icons'


export default function Navigation() {

  const pathname = usePathname();

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const navLinks = [
    {
      label: 'Research',
      url: '/research'
    },
    {
      label: 'Activities',
      url: '/activities'
    },
    {
      label: 'Contact',
      url: '/contact'
    }
  ]

  useEffect(() => setMounted(true), [])

  return (
    <nav className="sticky top-0 z-20 bg-zinc-100 dark:bg-zinc-950 border-b border-gray-300 dark:border-gray-800">
      <div className="max-w-5xl px-5 py-4 mx-auto">
        <ul className="flex items-center justify-between">
          <Link href="/">
          <Image unoptimized src={"/trefoil.gif"} width="40" height="40" alt='Trefoil'/>
          </Link>
          {navLinks.map(navLink => (
            <li key={navLink.label} className={pathname === navLink.url ? "font-bold text-slate-900" : ""}>
              <Link href={navLink.url} className='text-slate-600 dark:text-slate-200' passHref>
                  {navLink.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              aria-label="Toggle theme"
              className="p-2 text-gray-800 cursor-pointer fill-current dark:text-gray-100"
              onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
              }}
            >
              {mounted && (theme === 'light' ? <Moon /> : <Sun />)}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
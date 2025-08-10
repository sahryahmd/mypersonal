// app/components/Header.tsx
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const NAV_ITEMS = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/#about" },
  { name: "Layanan", href: "/services" },
  { name: "Caption AI", href: "/ai-caption" },
  { name: "Proyek", href: "/#projects" },
  { name: "Kontak", href: "/#contact" },
] as const

const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState<string>("")

  // Track hash changes for section highlighting and to close menu
  useEffect(() => {
    const onHashChange = () => setActiveHash(typeof window !== "undefined" ? window.location.hash : "")
    onHashChange()
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  // Close mobile menu on route or hash change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname, activeHash])

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const isItemActive = (href: string) => {
    if (href.includes("#")) {
      const hash = href.slice(href.indexOf("#"))
      return hash === activeHash
    }
    return href === pathname
  }

  const linkBaseClasses = "text-gray-300 hover:text-white transition-colors duration-200 font-medium"
  const activeClasses = "text-white"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      {/* Skip to content link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] bg-gray-800 text-white px-3 py-2 rounded-lg"
      >
        Lewati ke konten
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={32}
                height={32}
                className="object-cover w-8 h-8"
                priority
              />
            </div>
            <span className="text-xl font-bold gradient-text">Ahmad Bushairi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Navigasi utama">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.href)
              const isHash = item.href.includes("#")
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={isHash ? false : true}
                  aria-current={active ? "page" : undefined}
                  className={`${linkBaseClasses} ${active ? activeClasses : ""}`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item.href)
                const isHash = item.href.includes("#")
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={isHash ? false : true}
                    aria-current={active ? "page" : undefined}
                    className={`block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200 ${
                      active ? "text-white" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

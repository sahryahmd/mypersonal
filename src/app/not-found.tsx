"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center px-6">
        <p className="text-gray-300">Halaman tidak ditemukan. Mengalihkan ke beranda…</p>
        <a
          href="/"
          className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  )
}

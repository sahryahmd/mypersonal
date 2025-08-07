"use client"

import { useState } from "react"
import { FaWhatsapp, FaTimes, FaCommentDots } from "react-icons/fa"

export default function WhatsappBubbleChat() {
  const [open, setOpen] = useState(false)

  const toggleChat = () => setOpen(!open)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Bubble button */}
      <button
        onClick={toggleChat}
        className="bg-blue-800 text-white p-4 rounded-full shadow-lg hover:bg-white hover:text-blue-800 transition"
        aria-label="Chat"
      >
        {open ? <FaTimes /> : <FaCommentDots />}
      </button>

      {/* Chat content */}
      {open && (
        <div className="mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-xl p-4 animate-fade-in-up">
          <p className="text-gray-800 mb-2">Hai! Butuh bantuan? 👋</p>
          <a
            href="https://wa.me/6285693922994?text=Halo%20saya%20mau%20tanya%20tentang%20layanan%20Anda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          >
            <FaWhatsapp className="mr-2" />
            Chat via WhatsApp
          </a>
        </div>
      )}
    </div>
  )
}

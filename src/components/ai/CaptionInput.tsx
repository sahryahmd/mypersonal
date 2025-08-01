// src/components/ai/CaptionInput.tsx
"use client"
import { useState } from "react"

type Props = {
  onGenerate: (prompt: string) => void
}

export default function CaptionInput({ onGenerate }: Props) {
  const [input, setInput] = useState("")

  const handleGenerate = () => {
    onGenerate(input)
    setInput("") // reset input setelah generate
  }

  return (
    <div className="space-y-4">
      <textarea
        placeholder="Masukkan prompt caption..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#503217]"
        rows={4}
      />
      <button
        onClick={handleGenerate}
        className="bg-[#503217] text-white px-6 py-2 rounded-md hover:bg-[#3c2615]"
      >
        Generate Caption
      </button>
    </div>
  )
}

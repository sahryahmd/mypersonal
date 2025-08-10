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
        placeholder="Tulis ide atau konteks caption Anda..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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

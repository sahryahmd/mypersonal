"use client"

import { useState } from "react"
import CaptionInput from "@/components/ai/CaptionInput"
import CaptionResult from "@/components/ai/CaptionResult"
import Header from "@/components/Header"

export default function AICaptionPage() {
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleGenerate = async (prompt: string) => {
    setLoading(true)
    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })

      const data = await res.json()
      setResult(data.result)
    } catch (error) {
      console.error("Error:", error)
      setResult("Terjadi kesalahan saat mengambil data dari AI.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen text-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <section className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40" />
          <div className="relative max-w-2xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-center mb-6 animate-fade-in">
              <span className="gradient-text">Generator Caption AI</span>
            </h1>

            <div className="animate-fade-in" style={{ animationDelay: "120ms" }}>
              <CaptionInput onGenerate={handleGenerate} />
            </div>

            {loading && (
              <p className="mt-6 text-center text-gray-200 font-medium animate-fade-in" style={{ animationDelay: "180ms" }}>
                Memuat...
              </p>
            )}

            {!loading && result && (
              <div className="animate-fade-in" style={{ animationDelay: "240ms" }}>
                <CaptionResult result={result} />
              </div>
            )}

                      </div>
        </section>
      </main>
    </div>
  )
}

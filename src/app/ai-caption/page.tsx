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
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f0f23] via-[#1e1e2e] to-[#0f0f23] text-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center text-[#503217] mb-6">
            AI Caption Generator
          </h1>

          <CaptionInput onGenerate={handleGenerate} />

          {loading && (
            <p className="mt-6 text-center text-[#503217] font-medium">
              Loading...
            </p>
          )}

          {!loading && result && <CaptionResult result={result} />}
        </section>
      </main>
    </div>
  )
}

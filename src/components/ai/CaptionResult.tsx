"use client"
import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"

type Props = {
  result: string
}

export default function CaptionResult({ result }: Props) {
  const [copied, setCopied] = useState(false)
  const [displayText, setDisplayText] = useState("")

  // Animasi typing
  useEffect(() => {
    let i = 0
    setDisplayText("")
    const interval = setInterval(() => {
      if (i < result.length) {
        setDisplayText((prev) => prev + result[i])
        i++
      } else {
        clearInterval(interval)
      }
    }, 20) // kecepatan typing
    return () => clearInterval(interval)
  }, [result])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Copy failed:", err)
    }
  }

  return (
    <div className="mt-6 p-4 bg-blue-950 border rounded-md relative">
      <p className="font-medium text-white">Hasil Caption:</p>
      <p className="mt-2 text-lg font-semibold text-white min-h-[2rem]">
        {displayText}
      </p>

      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 flex items-center gap-2 text-sm text-gray-50 hover:text-[#3c2615]"
      >
        {copied ? (
          <>
            <Check size={16} />
            Tersalin!
          </>
        ) : (
          <>
            <Copy size={16} />
            Salin
          </>
        )}
      </button>
    </div>
  )
}

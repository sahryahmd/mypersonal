import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import WhatsappBubbleChat from "@/components/WhatsappBubbleChat"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Ahmad Bushairi - IT & Frontend Developer | Personal Website",
  description:
    "Ahmad Bushairi adalah IT & Frontend Developer. Berpengalaman dalam instalasi jaringan, troubleshooting, maintenance hardware/software, POS systems, dan pengembangan website modern.",
  keywords: [
    "Ahmad Bushairi",
    "IT Support",
    "Network Installation",
    "POS Systems",
    "Network Management",
    "Hardware Maintenance",
    "Software Troubleshooting",
    "Mikrotik",
    "Windows OS",
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "Personal Website",
  ],
  authors: [{ name: "Ahmad Bushairi" }],
  // viewport: "width=device-width, initial-scale=1", // Hapus dari sini
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-gray-900 text-white`}
      >
        {children}
        <WhatsappBubbleChat />
      </body>
    </html>
  )
}

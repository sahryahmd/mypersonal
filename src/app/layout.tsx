import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

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
  title: "Ahmad Bushairi - IT & Frontend Developer",
  description:
    "Experienced IT Support professional with expertise in network installation, troubleshooting, and hardware/software maintenance. Specialized in POS systems, network management, and IT infrastructure.",
  keywords: [
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
      </body>
    </html>
  )
}

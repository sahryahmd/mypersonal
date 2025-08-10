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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Ahmad Bushairi - IT Support & Frontend Developer | Portofolio & Jasa",
  description:
    "Layanan profesional IT Support (onsite/remote), pembuatan website modern, dan dukungan infrastruktur. 13+ tahun pengalaman. Konsultasi gratis & harga transparan.",
  keywords: [
    "Ahmad Bushairi",
    "Jasa IT Support",
    "Layanan IT",
    "Pembuatan Website",
    "Web Development",
    "Remote Support",
    "Maintenance Jaringan",
    "Troubleshooting",
    "Mikrotik",
    "Windows",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Portofolio",
    "Depok",
    "Indonesia",
  ],
  authors: [{ name: "Ahmad Bushairi" }],
  openGraph: {
    title: "Ahmad Bushairi - IT Support & Frontend Developer | Portofolio & Jasa",
    description:
      "Layanan profesional IT Support (onsite/remote), pembuatan website modern, dan dukungan infrastruktur. 13+ tahun pengalaman.",
    images: ["/personal.png"],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Bushairi - IT Support & Frontend Developer | Portofolio & Jasa",
    description:
      "Layanan profesional IT Support (onsite/remote), pembuatan website modern, dan dukungan infrastruktur.",
    images: ["/personal.png"],
  },
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
    <html lang="id" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-gray-900 text-white`}
      >
        {children}
        <WhatsappBubbleChat />
      </body>
    </html>
  )
}

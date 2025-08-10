import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
  Code2,
  Wrench,
  Headphones,
  Check,
  ShieldCheck,
  Clock,
  Award,
  Wallet,
  MessageSquare,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Jasa & Paket Layanan - IT Support, Web Development, Remote Support | Ahmad Bushairi",
  description:
    "Paket layanan profesional meliputi IT Support onsite/remote, Web Development modern dengan Next.js, dan dukungan teknis cepat. Desain responsif, harga transparan, dan garansi dukungan.",
  keywords: [
    "IT Support",
    "Web Development",
    "Remote Support",
    "Jasa IT",
    "Next.js",
    "Tailwind CSS",
    "Maintenance",
    "Troubleshooting",
  ],
}

export default function ServicesPage() {
  const wa = (msg: string) =>
    `https://wa.me/6285693922994?text=${encodeURIComponent(msg)}`

  const cards = [
    {
      id: "it-support",
      title: "IT Support Onsite",
      icon: Wrench,
      price: "Rp 500.000 / visit",
      accent: "from-indigo-600 to-purple-600",
      cta: wa(
        "Halo, saya tertarik dengan paket IT Support Onsite. Mohon info lebih lanjut."
      ),
      features: [
        "Instalasi & konfigurasi perangkat",
        "Troubleshooting jaringan & printer",
        "Setup POS, OS, driver, dan update",
        "Dokumentasi singkat & rekomendasi",
      ],
      note: "Kunjungan Jabodetabek. Biaya di luar kota menyesuaikan.",
    },
    {
      id: "web-dev",
      title: "Web Development",
      icon: Code2,
      price: "Mulai Rp 3.500.000",
      accent: "from-fuchsia-600 to-pink-600",
      cta: wa(
        "Halo, saya ingin membuat website perusahaan/portfolio. Mohon konsultasi paket Web Development."
      ),
      features: [
        "Website modern (Next.js, Tailwind)",
        "Desain responsif & cepat",
        "Optimasi SEO dasar",
        "Form kontak & integrasi WhatsApp",
      ],
      note: "Include deploy ke Vercel. Revisi minor 1x. Custom fitur menambah biaya.",
    },
    {
      id: "remote-support",
      title: "Remote Support",
      icon: Headphones,
      price: "Rp 150.000 / jam",
      accent: "from-blue-600 to-cyan-600",
      cta: wa(
        "Halo, saya membutuhkan Remote Support untuk troubleshooting. Kapan tersedia?"
      ),
      features: [
        "Diagnosis & perbaikan jarak jauh",
        "Konfigurasi OS & aplikasi",
        "Panduan via chat/voice",
        "Laporan ringkas penyelesaian",
      ],
      note: "Minimal 1 jam. Penambahan waktu pro-rata.",
    },
  ] as const

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Jasa & Paket Layanan</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Solusi profesional untuk kebutuhan IT Support, pembuatan website modern,
            dan dukungan remote dengan respons cepat serta harga transparan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "120ms" }}>
            <a
              href={wa("Halo, saya ingin konsultasi paket layanan.")}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasi via WhatsApp
            </a>
            <Link
              href="/#contact"
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-indigo-500 hover:text-white transition-all"
            >
              Hubungi via Form
            </Link>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => {
              const { id, title, icon: Icon, price, accent, cta, features, note } = card
              return (
                <div
                  key={id}
                  className="glass rounded-2xl overflow-hidden flex flex-col hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className={`p-6 bg-gradient-to-r ${accent}`}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <Icon className="w-8 h-8 text-white/90" />
                    </div>
                    <div className="mt-4 text-2xl font-bold">{price}</div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <ul className="space-y-3">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-400 mt-4">{note}</p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={cta}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-gradient-to-r from-indigo-600 to-purple-600 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all"
                      >
                        Pesan Sekarang
                      </a>
                      <Link
                        href="/#contact"
                        className="w-full text-center border border-gray-600 py-2 rounded-lg font-medium text-gray-300 hover:border-indigo-500 hover:text-white transition-all"
                      >
                        Diskusikan Kebutuhan
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Custom / Add-ons */}
          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-2xl animate-fade-in" style={{ animationDelay: "60ms" }}>
              <h4 className="text-lg font-semibold mb-2">Add-on Populer</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-indigo-400" /> Integrasi WhatsApp & Email</li>
                <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-indigo-400" /> Domain & SSL (managed)</li>
                <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-indigo-400" /> Training singkat penggunaan</li>
              </ul>
            </div>
            <div className="glass p-6 rounded-2xl animate-fade-in" style={{ animationDelay: "120ms" }}>
              <h4 className="text-lg font-semibold mb-2">Term & Catatan</h4>
              <p className="text-gray-300">Harga dapat berubah sesuai kompleksitas. Penjadwalan berdasarkan ketersediaan. Invoice & tanda jadi untuk pekerjaan pengembangan.</p>
            </div>
            <div className="glass p-6 rounded-2xl animate-fade-in" style={{ animationDelay: "180ms" }}>
              <h4 className="text-lg font-semibold mb-2">Butuh Paket Kustom?</h4>
              <p className="text-gray-300">Ceritakan kebutuhan Anda, saya bantu buatkan paket yang paling efisien dan sesuai anggaran.</p>
              <a
                href={wa("Halo, saya ingin paket kustom sesuai kebutuhan saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why me */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 animate-fade-in">
            <span className="gradient-text">Kenapa Memilih Saya</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-2xl text-center hover-lift animate-fade-in" style={{ animationDelay: "60ms" }}>
              <ShieldCheck className="w-8 h-8 mx-auto text-indigo-400" />
              <h3 className="mt-3 font-semibold">Berpengalaman</h3>
              <p className="text-gray-300 text-sm mt-1">13+ tahun menangani infrastruktur, sistem, dan web modern.</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center hover-lift animate-fade-in" style={{ animationDelay: "120ms" }}>
              <Clock className="w-8 h-8 mx-auto text-indigo-400" />
              <h3 className="mt-3 font-semibold">Respons Cepat</h3>
              <p className="text-gray-300 text-sm mt-1">Prioritas pada downtime minimal dan penyelesaian efektif.</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center hover-lift animate-fade-in" style={{ animationDelay: "180ms" }}>
              <Award className="w-8 h-8 mx-auto text-indigo-400" />
              <h3 className="mt-3 font-semibold">Kualitas Terjaga</h3>
              <p className="text-gray-300 text-sm mt-1">Standar praktik terbaik dan dokumentasi ringkas.</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center hover-lift animate-fade-in" style={{ animationDelay: "240ms" }}>
              <Wallet className="w-8 h-8 mx-auto text-indigo-400" />
              <h3 className="mt-3 font-semibold">Harga Transparan</h3>
              <p className="text-gray-300 text-sm mt-1">Biaya jelas sejak awal, opsi paket & add-on fleksibel.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

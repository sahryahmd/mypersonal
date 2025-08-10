"use client"

import { useEffect, useState } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const experiences = [
    {
      year: "April 2025 - Sekarang",
      title: "Spesialis IT Support",
      company: "PT Gema Indah Pratama SpinCity Agora",
      description:
        "Instalasi sistem POS Raptor dengan printer thermal Epson, monitoring aplikasi kasir (QBilliard dan Kitchen POS Raptor), pemeliharaan sistem kasir bowling QUBICA AMF Conqueror, manajemen jaringan kabel & nirkabel, serta perbaikan printer thermal dan dot matrix.",
    },
    {
      year: "April 2012 - April 2025",
      title: "Staf IT",
      company: "PT Centra Sarana Data",
      description:
        "Instalasi jaringan internet dan telepon berbasis VOIP untuk tenant di Thamrin Nine Complex, aktivasi & pengujian layanan pasca-instalasi, monitoring aktivitas jaringan harian dengan Cacti dan The Dude, serta diagnosis dan penyelesaian gangguan layanan.",
    },
    {
      year: "Juni 2011 - April 2012",
      title: "Staf IT",
      company: "PT Offistarindo Adhiprima",
      description:
        "Instalasi mesin absensi fingerprint dan pelatihan pengguna, instalasi papan tulis interaktif Promethean beserta demonstrasi penggunaan, serta pemeliharaan mesin fingerprint, laboratorium bahasa, dan papan interaktif.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Tentang Ahmad Bushairi</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ahmad Bushairi adalah IT Support & Frontend Developer yang antusias
              pada teknologi dan pengalaman digital. Saya membantu bisnis membangun
              infrastruktur yang stabil dan website modern yang cepat serta mudah digunakan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <div className="space-y-6">
              <div className="glass p-8 rounded-2xl hover-lift">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Siapa Ahmad Bushairi?
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Saya, Ahmad Bushairi, adalah profesional IT Support dengan pengalaman
                  lebih dari 13 tahun dalam instalasi jaringan, troubleshooting, serta
                  perawatan perangkat keras/perangkat lunak. Saya juga seorang Frontend
                  Developer yang siap membantu membangun website modern dan responsif.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Lulusan S1 Teknik Informatika dari Universitas Indraprasta PGRI, saya
                  terbiasa beradaptasi dengan teknologi baru dan tantangan di bidang IT
                  serta sistem informasi.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Selain dukungan infrastruktur, saya berfokus pada antarmuka web yang
                  ramah pengguna menggunakan Next.js. Saya terbiasa menerjemahkan desain
                  UI/UX menjadi kode yang rapi dan fungsional—menggabungkan visual yang
                  kuat dengan implementasi efektif agar tujuan bisnis Anda tercapai.
                </p>
              </div>

              {/* Skills Preview */}
              <div className="glass p-8 rounded-2xl hover-lift">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Apa yang Saya Kerjakan
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-300">Instalasi Jaringan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Perawatan Perangkat Keras</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Pengembangan Frontend</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-fuchsia-500 rounded-full"></div>
                    <span className="text-gray-300">Figma & Adobe Illustrator</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300">Slicing Desain ke Kode</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                    <span className="text-gray-300">Sistem POS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">Pemecahan Masalah IT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Pengalaman
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="glass p-6 rounded-xl hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-2"></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-indigo-400 font-medium mb-1">
                          {exp.year}
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {exp.title}
                        </h4>
                        <div className="text-purple-400 font-medium mb-2">
                          {exp.company}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="glass p-4 rounded-xl text-center hover-lift">
                  <div className="text-2xl font-bold gradient-text">13+</div>
                  <div className="text-sm text-gray-400">Tahun Pengalaman</div>
                </div>
                <div className="glass p-4 rounded-xl text-center hover-lift">
                  <div className="text-2xl font-bold gradient-text">100+</div>
                  <div className="text-sm text-gray-400">Sistem Terpasang</div>
                </div>
                <div className="glass p-4 rounded-xl text-center hover-lift">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-gray-400">Jaringan Dikelola</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

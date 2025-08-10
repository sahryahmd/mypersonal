"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const projects = [
    // Frontend projects dulu
    {
      id: 7,
      title: "Spin City Bowling Website",
      description:
        "Website profil perusahaan modern dan responsif untuk Spin City Bowling, dibangun dengan Next.js dan Tailwind CSS. Memuat informasi pemesanan, galeri, dan formulir kontak.",
      image: "/spin.png",
      category: "frontend",
      technologies: ["Next.js", "Tailwind CSS", "React", "Vercel"],
      liveUrl: "https://www.spincityagora.my.id",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 8,
      title: "Personal Portfolio Website",
      description:
        "Website portofolio pribadi untuk menampilkan keahlian, pengalaman, dan proyek saya sebagai frontend developer. Dibangun dengan Next.js dan bergaya menggunakan Tailwind CSS.",
      image: "/personal.png",
      category: "frontend",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 9,
      title: "Redesain Landing Page Perusahaan",
      description:
        "Redesain landing page perusahaan untuk meningkatkan pengalaman pengguna dan responsivitas mobile. Menerapkan praktik terbaik UI/UX modern.",
      image: "/personal.png",
      category: "frontend",
      technologies: ["React", "Tailwind CSS", "UI/UX"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    // Sisanya project lain
    {
      id: 1,
      title: "Instalasi Sistem POS Raptor",
      description:
        "Instalasi dan konfigurasi sistem POS Raptor dengan printer thermal Epson untuk operasional kasir, termasuk aplikasi QBilliard dan Kitchen POS Raptor.",
      image: "/pos.jpg",
      category: "systems",
      technologies: [
        "POS Raptor",
        "Epson Printers",
        "QBilliard",
        "Kitchen POS",
        "System Configuration",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Infrastruktur Jaringan Thamrin Nine",
      description:
        "Perancangan dan pemasangan jaringan internet serta telepon berbasis VOIP untuk banyak tenant di Thamrin Nine Complex, memastikan koneksi andal dan kualitas layanan.",
      image: "/thamrinnine.jpg",
      category: "networking",
      technologies: [
        "VOIP",
        "Network Installation",
        "Cacti",
        "The Dude",
        "Service Activation",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Sistem Bowling QUBICA AMF",
      description:
        "Pemeliharaan dan memastikan kesiapan operasional sistem kasir bowling QUBICA AMF Conqueror, termasuk dukungan teknis dan optimasi sistem.",
      image: "/amf.jpg",
      category: "systems",
      technologies: [
        "QUBICA AMF",
        "Cashier Systems",
        "System Maintenance",
        "Technical Support",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Sistem Absensi Fingerprint",
      description:
        "Instalasi dan konfigurasi sistem absensi fingerprint disertai pelatihan pengguna serta dukungan pemeliharaan berkelanjutan.",
      image: "/att.webp",
      category: "hardware",
      technologies: [
        "Fingerprint Systems",
        "User Training",
        "System Installation",
        "Maintenance",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Pemasangan Papan Tulis Interaktif",
      description:
        "Pemasangan papan tulis interaktif Promethean dengan demonstrasi penggunaan dan dukungan teknis untuk institusi pendidikan.",
      image: "/promethean.png",
      category: "hardware",
      technologies: [
        "Promethean",
        "Interactive Whiteboards",
        "Educational Technology",
        "User Training",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Monitoring & Pemecahan Masalah Jaringan",
      description:
        "Implementasi monitoring jaringan komprehensif menggunakan Cacti dan The Dude, dengan respons cepat untuk penanganan gangguan layanan.",
      image: "/network.jpg",
      category: "networking",
      technologies: [
        "Cacti",
        "The Dude",
        "Network Monitoring",
        "Troubleshooting",
        "Service Support",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ]

  const filters = [
    { id: "all", label: "Semua Proyek" },
    { id: "networking", label: "Jaringan" },
    { id: "systems", label: "Sistem" },
    { id: "hardware", label: "Perangkat Keras" },
    { id: "frontend", label: "Frontend" },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Proyek Unggulan</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Kumpulan karya terbaru dan solusi yang saya bangun
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass rounded-2xl overflow-hidden hover-lift group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 overflow-hidden">
                  {/* Render gambar project */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <span className="text-white font-semibold">
                        {project.title}
                      </span>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Unggulan
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
                    >
                      Lihat Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-600 text-gray-300 text-center py-2 px-4 rounded-lg text-sm font-medium hover:border-indigo-500 hover:text-white transition-all duration-200"
                    >
                      Lihat Kode
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 hover-lift"
            >
              Lihat Lebih Banyak di GitHub
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

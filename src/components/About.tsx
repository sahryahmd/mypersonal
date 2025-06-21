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
      year: "April 2025 - Present",
      title: "IT Support Specialist",
      company: "PT Gema Indah Pratama SpinCity Agora",
      description:
        "Installed POS Raptor systems with Epson thermal printers, monitored cashier applications (QBilliard and Kitchen POS Raptor), maintained QUBICA AMF Conqueror bowling cashier system, managed wired and wireless networks, and repaired thermal and dot matrix printers.",
    },
    {
      year: "April 2012 - April 2025",
      title: "IT Staff",
      company: "PT Centra Sarana Data",
      description:
        "Installed internet and VOIP-based telephone networks for tenants at Thamrin Nine Complex, activated and tested services post-installation, monitored daily network activity using Cacti and The Dude, and diagnosed and resolved service interruptions.",
    },
    {
      year: "June 2011 - April 2012",
      title: "IT Staff",
      company: "PT Offistarindo Adhiprima",
      description:
        "Installed fingerprint attendance systems and conducted user training, installed Promethean interactive whiteboards with usage demonstrations, and maintained fingerprint machines, language labs, and interactive whiteboards.",
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
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate developer with a love for creating exceptional digital
              experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <div className="space-y-6">
              <div className="glass p-8 rounded-2xl hover-lift">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Who I Am
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm an experienced IT Support professional with over 13 years
                  of experience in network installation, troubleshooting, and
                  hardware/software maintenance. I specialize in POS systems,
                  network management, and IT infrastructure solutions with
                  proven ability to work both independently and collaboratively
                  within a team.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I hold a Bachelor's Degree in Informatics Engineering from
                  Universitas Indraprasta PGRI and am highly adaptable to new
                  technologies and challenges in the IT and information systems
                  sector.
                </p>
              </div>

              {/* Skills Preview */}
              <div className="glass p-8 rounded-2xl hover-lift">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  What I Do
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-300">Network Installation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Hardware Maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-300">POS Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">IT Troubleshooting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Experience
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
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="glass p-4 rounded-xl text-center hover-lift">
                  <div className="text-2xl font-bold gradient-text">100+</div>
                  <div className="text-sm text-gray-400">Systems Installed</div>
                </div>
                <div className="glass p-4 rounded-xl text-center hover-lift">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-gray-400">Networks Managed</div>
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

"use client"

import { useEffect, useState } from "react"

const Skills = () => {
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

    const element = document.getElementById("skills")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const skillCategories = [
    {
      category: "Network & Infrastructure",
      skills: [
        {
          name: "Mikrotik Configuration",
          level: 95,
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "Network Switching",
          level: 90,
          color: "from-black to-gray-800",
        },
        { name: "PABX Systems", level: 88, color: "from-blue-600 to-blue-800" },
        {
          name: "VOIP Installation",
          level: 92,
          color: "from-cyan-500 to-blue-500",
        },
        {
          name: "Network Monitoring",
          level: 85,
          color: "from-orange-500 to-red-500",
        },
      ],
    },
    {
      category: "Hardware & Systems",
      skills: [
        {
          name: "POS Systems",
          level: 90,
          color: "from-green-500 to-green-700",
        },
        {
          name: "Windows OS Management",
          level: 95,
          color: "from-gray-600 to-gray-800",
        },
        {
          name: "Printer Maintenance",
          level: 88,
          color: "from-blue-600 to-indigo-600",
        },
        {
          name: "Fingerprint Systems",
          level: 85,
          color: "from-green-600 to-green-800",
        },
        {
          name: "Interactive Whiteboards",
          level: 80,
          color: "from-purple-500 to-pink-500",
        },
      ],
    },
    {
      category: "Software & Development",
      skills: [
        {
          name: "General IT Support",
          level: 95,
          color: "from-orange-600 to-red-600",
        },
        {
          name: "Graphic Design",
          level: 75,
          color: "from-blue-500 to-indigo-600",
        },
        {
          name: "Frontend Development",
          level: 70,
          color: "from-yellow-500 to-orange-500",
        },
        { name: "Next.js", level: 65, color: "from-purple-500 to-pink-500" },
        {
          name: "System Troubleshooting",
          level: 92,
          color: "from-green-500 to-teal-500",
        },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="glass p-6 rounded-2xl hover-lift"
              >
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${
                              categoryIndex * 100 + skillIndex * 50
                            }ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

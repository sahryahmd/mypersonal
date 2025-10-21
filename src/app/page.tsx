import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import BlogLatest from "@/components/BlogLatest"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BlogLatest />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

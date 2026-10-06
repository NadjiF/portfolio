import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stack from '@/components/Stack'
import Projects from '@/components/Projects'
import About from '@/components/About'  
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stack />
      <Projects />
      <Contact />
    </main>
  )
}

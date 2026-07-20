import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SocialSidebar } from '@/components/layout/SocialSidebar'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      {/* Fixed elements */}
      <Navbar />
      <SocialSidebar />

      {/* Main scrollable content — left margin clears the sidebar */}
      <main className="min-h-screen pl-12 md:pl-16">
        <div className="max-w-5xl mx-auto px-4 pt-20">
          {/* Page sections */}
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  )
}

import React from 'react'
import HeroSection from '@/components/Home/hero'
import About from '@/components/Home/about'
// import SectionDivider from '@/components/ui/SectionDivider'
import Footer from '@/components/Footer/page'

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      {/* <SectionDivider/>  */}
      <About />
      <Footer />

    </div>
  )
}

export default Home
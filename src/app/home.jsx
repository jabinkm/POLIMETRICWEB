import React, { useEffect } from 'react'
import { Hero } from '../components/hero'
import { About } from '../components/about'
import { Services } from '../components/services'
import { Projects } from '../components/projects'
import { Testimonials } from '../components/testimonials'
import  HomeComponent  from '../components/HomeComponent'
import { Footer } from '../components/footer'
import IsoCertificate from '../components/isoCertificate'
import OurClients from '../components/ourClients'
import { Navigation } from '../components/navigationHome'

export default function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);


  return (
    <main className="flex flex-col max-h-screen overflow-x-hidden">
      <HomeComponent />
      
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Projects /> */}
      {/* <OurClients /> */}
      {/* <IsoCertificate /> */}
      {/* <Testimonials /> */}
      {/* <Contact />
      <Footer /> */}
    </main>
  )
}


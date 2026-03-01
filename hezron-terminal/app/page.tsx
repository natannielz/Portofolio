'use client';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import ProjectShowcase from './components/ProjectShowcase';
import IntelligenceStream from './components/IntelligenceStream';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <AboutSkills />
        <ProjectShowcase />
        <IntelligenceStream />
      </main>
      <Footer />
    </>
  );
}

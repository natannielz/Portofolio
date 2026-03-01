'use client';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Arsenal from './components/Arsenal';
import InfrastructureTiers from './components/InfrastructureTiers';
import IntelligenceStream from './components/IntelligenceStream';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Arsenal />
        <InfrastructureTiers />
        <IntelligenceStream />
      </main>
      <Footer />
    </>
  );
}

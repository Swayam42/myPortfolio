'use client';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/ui/apple-preloader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loader, setLoader] = useState(true); // 👈 add loader state

  // Handle preloader timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3300);

    return () => clearTimeout(timer); // cleanup
  }, []);

  // Handle dark mode
  useEffect(() => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      setDarkMode(userPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loader && <Preloader />}
      </AnimatePresence>

      {!loader && (
        <div className="min-h-screen bg-white dark:bg-[#0B1120] transition-colors duration-300">
          <div className="dark:bg-gradient-to-b dark:from-[#0B1120] dark:via-[#0B1120] dark:to-[#0B1120]/90">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero />
            <About />
            <ProjectsSection />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

import React from 'react';
// @ts-expect-error - JSX component without TypeScript declarations
import Magnetic from './ui/magnetic-effect.jsx';
import { IoIosMail } from "react-icons/io";
import { BsGithub, BsArrowDown, BsLinkedin } from "react-icons/bs";
  const Hero: React.FC = () => {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
              <span className="text-blue-600 dark:text-blue-400">Hi, I'm</span> <span className="inline-block">Swayam Jethi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              A passionate software developer specializing in Java development and DSA.
              I build clean, efficient, and scalable solutions to complex problems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md border border-slate-300 dark:border-slate-600 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex justify-center space-x-6">
              {/* GitHub with magnetic effect */}
              <Magnetic>
                <div className="text-white text-3xl md:text-7xl hover:cursor-pointer p-5">
                  <a 
                    href="https://github.com/Swayam42" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <BsGithub size={32} />
                  </a>
                </div>
              </Magnetic>
  
              
              <Magnetic>
                <div className="text-white text-3xl md:text-7xl hover:cursor-pointer p-5">
                  <a 
                    href="https://www.linkedin.com/in/swayam-jethi-8046251b9/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <BsLinkedin size={32} />
                  </a>
                </div>
              </Magnetic>
  
              {/* Mail with magnetic effect */}
              <Magnetic>
                <div className="text-white text-3xl md:text-7xl hover:cursor-pointer p-5">
                  <a 
                    href="mailto:swayam.jethi@gmail.com" 
                    className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    aria-label="Email"
                  >
                    <IoIosMail size={32} />
                  </a>
                </div>
              </Magnetic>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <a 
              href="#about" 
              className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Scroll Down"
            >
              <BsArrowDown size={24} />
            </a>
          </div>
        </div>
      </section>
    );
  };
  export default Hero;


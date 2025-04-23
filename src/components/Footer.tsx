import React from 'react';
import { Github, Linkedin,Twitter, MessageCircle, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl font-bold text-blue-400 mb-4 md:mb-0">
            Got Ideas? Let’s Talk
            </div>
            
            <div className="flex space-x-8">
              <a href="#home" className="text-slate-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/Swayam42" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/swayam-jethi-8046251b9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:youremail@example.com" 
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>

            <a
              href="https://x.com/otvkhabar/status/1914696786440270092"  // Replace with your X profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://wa.me/917008613958"  // Replace with your Whatsapp URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} /> 
            </a>
          </div>
          
          <div className="text-center text-slate-400 text-sm">
            <p className="mb-4">© {new Date().getFullYear()} Swayam Jethi. All rights reserved.</p>
            <p>Crafted with care and passion.</p>
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={scrollToTop}
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
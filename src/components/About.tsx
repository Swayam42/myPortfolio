import React from 'react';
import { Code, BookOpen, Layout, Database, Server, GitBranch } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 rounded-full"></div>
          
          <div className="mb-12 text-slate-600 dark:text-slate-300 space-y-4">
            <p>
              I'm a passionate software developer with a focus on Java programming and data structures &amp; algorithms.
              With a solid foundation in computer science principles, I enjoy solving complex problems and building
              efficient, scalable applications.
            </p>
            <p>
              My journey in software development started during my undergraduate studies, where I developed a keen interest
              in algorithmic thinking and software architecture. Since then, I've been continuously expanding my knowledge
              and skills through personal projects and professional experiences.
            </p>
            <p>
            When I’m not coding, you can see me exploring new technologies, playing the piano, cycling to discover new places, 
            and teaching others what I’m good at.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white text-center">Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                  <Code size={24} />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white">Programming Languages</h4>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>Java (Intermediate)</li>
                <li>JavaScript/TypeScript (Beginner)</li>
                <li>Python (Basic)</li>
                
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                  <BookOpen size={24} />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white">Data Structures &amp; Algorithms</h4>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>Arrays and Strings</li>
                <li>Linked Lists, Stacks, Queues</li>
                <li>Trees and Graphs</li>
                <li>Dynamic Programming</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                  <Layout size={24} />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white">Frontend Development</h4>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>HTML, CSS, JavaScript</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                  <Server size={24} />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white">Backend Development</h4>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>Java Spring Boot</li>
                <li>Node.js/Express</li>
                <li>RESTful APIs</li>
                <li>Microservices</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                  <Database size={24} />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white">Databases</h4>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Firebase</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                  <GitBranch size={24} />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white">Tools &amp; Others</h4>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>Git/GitHub</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
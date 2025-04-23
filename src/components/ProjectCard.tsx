import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getDifficultyColor = (difficulty?: string) => {
    if (!difficulty) return '';
    
    switch(difficulty) {
      case 'Basic':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] h-full flex flex-col">
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{project.title}</h3>
          {project.difficulty && (
            <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(project.difficulty)}`}>
              {project.difficulty}
            </span>
          )}
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border-t border-slate-200 dark:border-slate-700 flex justify-between">
        <div className="flex space-x-3">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={16} className="mr-1" />
            <span>Code</span>
          </a>
          
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={16} className="mr-1" />
              <span>Demo</span>
            </a>
          )}
        </div>
        
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {new Date(project.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short' 
          })}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
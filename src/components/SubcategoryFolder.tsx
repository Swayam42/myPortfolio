import React, { useState } from 'react';
import { Folder, FolderOpen, ChevronRight } from 'lucide-react';
import { Project } from '../types/Project';

interface SubcategoryFolderProps {
  name: string;
  projects: Project[];
  onSelectLevel: (level: string) => void;
  selectedLevel: string | null;
}

const SubcategoryFolder: React.FC<SubcategoryFolderProps> = ({ 
  name, 
  projects, 
  onSelectLevel,
  selectedLevel
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  // Get unique difficulty levels for this subcategory
  const levels = Array.from(new Set(projects.map(project => project.difficulty))).filter(Boolean) as string[];
  
  // Count projects per level
  const getProjectCountByLevel = (level: string) => {
    return projects.filter(project => project.difficulty === level).length;
  };

  return (
    <div className="mb-2">
      <button
        onClick={toggleExpand}
        className="flex items-center justify-between w-full text-left p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
      >
        <div className="flex items-center">
          {isExpanded ? (
            <FolderOpen size={18} className="mr-2 text-amber-500 dark:text-amber-400" />
          ) : (
            <Folder size={18} className="mr-2 text-amber-500 dark:text-amber-400" />
          )}
          <span className="text-slate-700 dark:text-slate-300">{name}</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full px-2 py-0.5 mr-2">
            {projects.length}
          </span>
          <ChevronRight 
            size={16} 
            className={`transition-transform ${isExpanded ? 'rotate-90' : ''} text-slate-400 dark:text-slate-500`} 
          />
        </div>
      </button>
      
      {isExpanded && (
        <div className="pl-8 mt-1 space-y-1 animate-fade-in">
          {levels.map(level => (
            <button
              key={level}
              onClick={() => onSelectLevel(level)}
              className={`flex items-center justify-between w-full text-left p-2 rounded-md transition-colors ${
                selectedLevel === level
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-700/50 text-slate-600 dark:text-slate-400'
              }`}
            >
              <span className="text-sm">{level}</span>
              <span className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full px-2 py-0.5">
                {getProjectCountByLevel(level)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubcategoryFolder;
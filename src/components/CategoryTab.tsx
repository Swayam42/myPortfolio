import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CategoryTabProps {
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  count: number;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ 
  name, 
  icon, 
  isActive, 
  onClick,
  count
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between w-full text-left p-3 rounded-md transition-all duration-300 ${
        isActive 
          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium' 
          : 'hover:bg-slate-100 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-300'
      }`}
    >
      <div className="flex items-center">
        <div className={`mr-3 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}>
          {icon}
        </div>
        <span>{name}</span>
      </div>
      
      <div className="flex items-center">
        <span className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full px-2 py-0.5 mr-2">
          {count}
        </span>
        <ChevronRight 
          size={16} 
          className={`transition-transform ${isActive ? 'rotate-90 text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} 
        />
      </div>
    </button>
  );
};

export default CategoryTab;
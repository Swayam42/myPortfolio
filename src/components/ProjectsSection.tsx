import React, { useState, useMemo } from 'react';
import { Database, Globe, Smartphone, Code } from 'lucide-react';
import { Project } from '../types/Project';
import ProjectCard from './ProjectCard';
import CategoryTab from './CategoryTab';
import SubcategoryFolder from './SubcategoryFolder';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('DSA Projects');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  
  // Filter subcategories for the selected category
  const subcategories = useMemo(() => {
    if (selectedCategory === 'DSA Projects') {
      return Array.from(new Set(
        projects
          .filter(project => project.category === selectedCategory)
          .map(project => project.subcategory)
      )).filter(Boolean) as string[];
    }
    return [];
  }, [selectedCategory]);
  
  // Filter projects based on selections
  const filteredProjects = useMemo(() => {
    let result = projects.filter(project => project.category === selectedCategory);
    
    if (selectedSubcategory) {
      result = result.filter(project => project.subcategory === selectedSubcategory);
    }
    
    if (selectedLevel) {
      result = result.filter(project => project.difficulty === selectedLevel);
    }
    
    return result;
  }, [selectedCategory, selectedSubcategory, selectedLevel]);
  
  // Count projects by category
  const getCategoryCount = (category: string) => {
    return projects.filter(project => project.category === category).length;
  };

  // Get projects for a specific subcategory
  const getProjectsBySubcategory = (subcategory: string) => {
    return projects.filter(
      project => project.category === selectedCategory && project.subcategory === subcategory
    );
  };
  
  // Reset filters when changing category
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setSelectedLevel(null);
  };
  
  // Reset level filter when changing subcategory
  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setSelectedLevel(null);
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'DSA Projects':
        return <Database size={20} />;
      case 'Web Projects':
        return <Globe size={20} />;
      case 'Mobile Projects':
        return <Smartphone size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  // Get breadcrumb items
  const breadcrumbs = () => {
    const items = [{ label: selectedCategory, onClick: () => handleCategoryChange(selectedCategory) }];
    
    if (selectedSubcategory) {
      items.push({ 
        label: selectedSubcategory, 
        onClick: () => handleSubcategoryChange(selectedSubcategory as string) 
      });
    }
    
    if (selectedLevel) {
      items.push({ label: selectedLevel, onClick: () => {} });
    }
    
    return items;
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800 dark:text-white">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 rounded-full"></div>
        
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto mb-6 flex items-center text-sm text-slate-500 dark:text-slate-400 overflow-x-auto">
          {breadcrumbs().map((item, index) => (
            <React.Fragment key={index}>
              <button 
                onClick={item.onClick}
                className="hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors px-2 py-1"
              >
                {item.label}
              </button>
              {index < breadcrumbs().length - 1 && (
                <span className="mx-1">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Sidebar - Categories */}
          <div className="md:w-64 shrink-0">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 sticky top-20">
              <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">Categories</h3>
              
              <div className="space-y-2">
                {['DSA Projects', 'Web Projects', 'Mobile Projects', 'Other Projects'].map(category => (
                  <CategoryTab
                    key={category}
                    name={category}
                    icon={getCategoryIcon(category)}
                    isActive={selectedCategory === category}
                    onClick={() => handleCategoryChange(category)}
                    count={getCategoryCount(category)}
                  />
                ))}
              </div>
              
              {/* Subcategories for DSA Projects */}
              {selectedCategory === 'DSA Projects' && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">Data Structures</h3>
                  
                  {subcategories.map(subcategory => (
                    <SubcategoryFolder
                      key={subcategory}
                      name={subcategory as string}
                      projects={getProjectsBySubcategory(subcategory as string)}
                      onSelectLevel={setSelectedLevel}
                      selectedLevel={selectedLevel}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Right Content - Project Grid */}
          <div className="grow">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-12 text-center">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  No projects found for the selected filters.
                </p>
                <button 
                  onClick={() => {
                    setSelectedSubcategory(null);
                    setSelectedLevel(null);
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
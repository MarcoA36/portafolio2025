import React, { createContext, useContext, useState } from 'react';
import { projectsData, skillsData } from '../data';

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};
export const AppProvider = ({ children }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredProjects = selectedSkill
    ? projectsData.filter((project) => project.skills.includes(selectedSkill))
    : projectsData;

  const contextValue = {
    selectedSkill,
    setSelectedSkill,
    skillsData,
    projectsData,
    filteredProjects,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

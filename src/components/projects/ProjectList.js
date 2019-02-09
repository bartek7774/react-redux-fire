import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  return (
    <div className="project-list section">
      {
        [1,2,3,4,5].map((x,id)=><ProjectSummary key={id}/>)
      }    
    </div>
  );
};

export default ProjectList;
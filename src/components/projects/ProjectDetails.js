import React from 'react';

const ProjectDetails = (props) => {
  const id=props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores a perferendis ipsam ipsa dicta quibusdam? Consequuntur illo, reiciendis ex ab inventore praesentium architecto aliquam nihil corporis dolor repellendus temporibus.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Net Nijna</div>
          <div>2nd September,</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
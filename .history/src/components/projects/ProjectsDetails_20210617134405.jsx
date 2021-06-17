import React from "react";

export default function ProjectsDetails({ma}) {
  console.log(props);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            doloribus, ab saepe ad nesciunt blanditiis sint reiciendis optio
            unde ex!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Me</div>
          <div>2nd Sep, 2am</div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Abstract3D from "./Abstract3D";

const ProjectCard = ({ project }) => (
  <Link to={`/projects/${project.slug}`} className="p-card glass-card" aria-label={project.title}>
    <div className="p-card-stage" style={{ "--accent": project.accent }}>
      <Abstract3D shape={project.shape} accent={project.accent} size="sm" />
    </div>
    <div className="p-card-body">
      <span className="p-card-cat">{project.category}</span>
      <h3>{project.title}</h3>
      <p>{project.shortDescription}</p>
      <ul className="chip-row">
        {project.stack.slice(0, 4).map((s) => <li key={s}>{s}</li>)}
        {project.stack.length > 4 && <li>+{project.stack.length - 4}</li>}
      </ul>
      <span className="p-card-link">View case study</span>
    </div>
  </Link>
);

export default ProjectCard;
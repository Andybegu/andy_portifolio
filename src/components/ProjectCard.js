// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css'; // We'll create this CSS file next

function ProjectCard({ image, title, description, technologies, liveLink, githubLink }) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech-stack">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-pill">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn">
              Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary project-btn">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
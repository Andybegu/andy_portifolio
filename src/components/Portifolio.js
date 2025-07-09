// src/components/Portfolio.js
import React from 'react';
import ProjectCard from "./ProjectCard.js"; // Import our reusable ProjectCard
import './Portfolio.css'; // We'll create this CSS file next

// Import your project images
import recipe from '../assets/recipe.png'; // Replace with your actual image paths
import coach from '../assets/coach.jpg'; // Replace with your actual image paths
import task from '../assets/task.jpg'; // Replace with your actual image paths




function Portfolio() {
  // Define your project data as an array of objects
  const projects = [
    {
      image: recipe, // Use the imported image
      title: 'E-commerce Store',
      description: 'A full-stack e-commerce platform built with user authentication, product catalog, shopping cart, and order processing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      githubLink: 'https://github.com/Andybegu/shoping',
    },
    {
      image: coach,
      title: 'Task Management App',
      description: 'A responsive single-page application for managing tasks, with features like drag-and-drop reordering and status updates.',
      technologies: ['React', 'CSS Modules'],
      githubLink: 'https://github.com/Andybegu/tracking-time',
    },
    {
      image: task,
      title: 'Coach Finder App',
      description: 'A responsive web application for finding and booking coaching sessions.',
      technologies: ['Vue.js', 'tailwindcss', 'Firebase'],
      githubLink: 'https://github.com/Andybegu/andy_portifolio',
    },
    // Add more projects as needed!
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-content">
        <h2 className="portfolio-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index} // Use index as key here, or project.id if you add one
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
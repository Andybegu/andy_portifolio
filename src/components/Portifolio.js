// src/components/Portfolio.js
import React from 'react';
import ProjectCard from "./ProjectCard.js"; // Import our reusable ProjectCard
import './Portfolio.css'; // We'll create this CSS file next

// Import your project images
import project1Image from '../assets/project1Image.jpg'; // Replace with your actual image paths
import project2Image from '../assets/project2Image.jpg';
import project3Image from '../assets/project3Image.jpg';

function Portfolio() {
  // Define your project data as an array of objects
  const projects = [
    {
      image: project1Image, // Use the imported image
      title: 'E-commerce Store',
      description: 'A full-stack e-commerce platform built with user authentication, product catalog, shopping cart, and order processing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API'],
      liveLink: 'https://www.example.com/ecommerce', // Replace with actual links
      githubLink: 'https://github.com/yourusername/ecommerce-repo',
    },
    {
      image: project2Image,
      title: 'Task Management App',
      description: 'A responsive single-page application for managing tasks, with features like drag-and-drop reordering and status updates.',
      technologies: ['React', 'Firebase', 'CSS Modules'],
      liveLink: 'https://www.example.com/task-app',
      githubLink: 'https://github.com/yourusername/task-app-repo',
    },
    {
      image: project3Image,
      title: 'Personal Blog Site',
      description: 'A simple blog where users can create, read, update, and delete posts. Features markdown support and commenting.',
      technologies: ['Next.js', 'Sanity.io (CMS)', 'Tailwind CSS'],
      liveLink: 'https://www.example.com/blog',
      githubLink: 'https://github.com/yourusername/blog-repo',
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
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
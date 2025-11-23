import React from "react";
import { Briefcase, ChevronRight } from 'lucide-react';

// Project Data
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A simple E-commerce Platform.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://placehold.co/600x400/1e40af/ffffff?text=E-Commerce",
    link: "https://github.com/csabordo/csabordo.github.io"
  },
  {
    id: 2,
    title: "Online Profile",
    description: "A Simple Online Portfolio.",
    technologies: ["React", "Bootstrap"],
    image: "https://placehold.co/600x400/d97706/ffffff?text=Chat+App",
    link: "#"
  },
  {
    id: 3,
    title: "Item Resell Forecast",
    description: "A Simple Online Item Forecast",
    technologies: ["Tensor", "Bootstrap"],
    image: "https://placehold.co/600x400/023020/ffffff?text=Forecast",
    link: "https://github.com/csabordo/itemForecast/tree/master"
  },
];

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-section py-5 mb-5 text-center d-flex align-items-center" style={{ minHeight: '90vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="fw-bold text-light mb-2">Hello, I'm Kian Abordo</p>
              <h1 className="display-3 fw-bold mb-3 text-white">
                Building Modern Web <span className="text-warning">Experiences</span>
              </h1>
              <p className="lead mb-4 text-white opacity-75">
                Front-end developer specializing in React, Java, and PHP.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="#projects" className="btn btn-light btn-lg rounded-pill px-4 fw-bold text-primary">
                  View Work
                </a>
                <a href="#contact" className="btn btn-outline-light btn-lg rounded-pill px-4">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Added ID="projects" here for the scroll link */}
      <section id="projects" className="container py-5 my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold d-inline-flex align-items-center">
            <Briefcase className="me-2 text-primary" size={32} /> Featured Projects
          </h2>
        </div>

        <div className="row g-4">
          {projectsData.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow border-0 hover-effect">
                <img 
                  src={project.image} 
                  className="card-img-top" 
                  alt={project.title} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-primary">{project.title}</h5>
                  <p className="card-text text-muted small flex-grow-1">{project.description}</p>
                  
                  <div className="mb-3">
                    {project.technologies.map(tech => (
                      <span key={tech} className="badge bg-secondary-subtle text-secondary-emphasis me-1 rounded-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} className="btn btn-outline-primary w-100 mt-auto">
                    View Code <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
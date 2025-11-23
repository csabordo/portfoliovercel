import React from "react";
import { User } from "lucide-react";

const About = () => {
  const skills = ["React", "Bootstrap", "JavaScript (ES6+)", "HTML/CSS",  "Git/GitHub", "REST APIs"];
  
  return (
    <div className="container my-5 py-5">
      <div className="card shadow-lg border-0 p-4 p-md-5">
        <h1 className="text-center display-5 fw-bold mb-4 text-primary d-flex align-items-center justify-content-center">
          <User className="me-3" size={32} /> About Me
        </h1>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <p className="lead text-muted text-center mb-5">
             Kian Abordo is currently a student at the University of Cabuyao (PnC), where he is enrolled in the Bachelor of Science (B.S.) in Computer Science program under the College of Computing Studies. The B.S. in Computer Science program focuses on the fundamental theories and principles of computing, equipping students with essential skills in logic formulation, algorithm design, and application development.
            </p>

            <h2 className="fs-4 fw-bold text-secondary border-bottom pb-2 mb-3">Skills & Tools</h2>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {skills.map(skill => (
                <span key={skill} className="badge bg-primary fs-6 p-2 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
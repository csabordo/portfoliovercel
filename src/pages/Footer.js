import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    // bg-dark for dark background, text-white for text, pt-5 pb-3 for padding, mt-auto pushes to bottom
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row justify-content-center text-center text-md-start">
          
          {/* Logo/Branding */}
          <div className="col-md-3 mb-4">
            <h5 className="text-primary fw-bold">CSAbordo</h5>
            <p className="small text-white-50">A Laboratory Activity.</p>
          </div>

          {/* Social Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Connect</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white text-opacity-75 text-decoration-none transition">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/csabordo" target="_blank" rel="noopener noreferrer" className="text-white text-opacity-75 text-decoration-none transition">
                <Github size={24} />
              </a>
              <a href="mailto:kian.abordo05@gmail.com" className="text-white text-opacity-75 text-decoration-none transition">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-3 border-top border-secondary opacity-75">
          <p className="small text-white-50 mb-0">
            &copy; {new Date().getFullYear()} CSAbordo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
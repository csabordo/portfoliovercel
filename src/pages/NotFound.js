import React from "react";
import { useNavigate } from "react-router-dom";
import { Frown } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center py-5" style={{ minHeight: "80vh" }}>
      <Frown size={80} className="text-primary mb-4" />
      <h1 className="display-1 fw-bold text-dark">404</h1>
      <h2 className="display-6 text-muted mb-3">Page Not Found</h2>
      <p className="lead mb-4">
        Oops! The page you are looking for might have been removed or temporarily unavailable.
      </p>
      <button 
        onClick={() => navigate('/')} 
        className="btn btn-primary btn-lg shadow-sm"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
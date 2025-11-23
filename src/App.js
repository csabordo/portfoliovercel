import './App.css';
import React, { useState, useEffect } from 'react';

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

// Import components
import Header from './pages/Header'; // Ensure path is correct based on your folder structure
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const ThemeContext = React.createContext();
export { ThemeContext }; 

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('bs-theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    const html = document.documentElement;
    const newTheme = darkMode ? 'dark' : 'light';
    html.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('bs-theme', newTheme);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className="d-flex flex-column min-vh-100">
        
        {/* Navigation */}
        <Header />
        
        {/* Main Content - Components stacked vertically */}
        <main className="flex-grow-1">
          {/* We pass IDs to the components or wrap them here */}
          
          <div id="home">
            <Home />
          </div>

          {/* Add a divider or spacing between sections */}
          <hr className="my-0 opacity-0" />

          <div id="about">
            <About />
          </div>

          <hr className="my-0 opacity-0" />

          <div id="contact">
            <Contact />
          </div>
          
        </main>
        
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
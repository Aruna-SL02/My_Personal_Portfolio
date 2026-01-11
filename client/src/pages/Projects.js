import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import './Projects.css';

const Projects = () => {
  const scrollRef = useRef(null);
  const isPausedRef = useRef(false); // Tracks if mouse is hovering
  const isManualScrollingRef = useRef(false); // NEW: Tracks if a button was clicked

  // Your Project Data
  const projectList = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "My first Full-Stack MERN application. It showcases my skills, projects, and contact info dynamically.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      githubLink: "https://github.com/Aruna-SL02/My_Personal_Portfolio", 
      demoLink: "/" 
    },
    {
      id: 2,
      title: "Flappy Bird Clone",
      description: "A classic browser game built to understand game loop logic and DOM manipulation.",
      tech: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Aruna-SL02/Flappy-Bird-Game", 
      demoLink: "#" 
    },
    {
      id: 3,
      title: "ValueMart Inventory \n Management System",
      description: "Inventory Management System built with PHP (MVC), MySQL, HTML, CSS, and JavaScript.",
      tech: ["PHP", "MySQL", "MVC"],
      githubLink: "https://github.com/Aruna-SL02/ValueMart-Inventory-System", 
      demoLink: "#" 
    },
    {
      id: 4,
      title: "Sales Evaluation System",
      description: "Full-stack Sales Performance Evaluation System with secure login, role-based dashboards, and tracking.",
      tech: ["PHP", "AJAX", "MySQL"],
      githubLink: "https://github.com/Aruna-SL02/Sales-Performance-Evaluation-System", 
      demoLink: "#" 
    },
    {
      id: 5,
      title: "Shopping Management",
      description: "A complete Shopping Management System built with C# Windows Forms and MySQL.",
      tech: ["C#", "MySQL"],
      githubLink: "https://github.com/Aruna-SL02/Shopping-Management-System", 
      demoLink: "#" 
    },
    {
      id: 6,
      title: "Web Calendar App",
      description: "A simple, responsive, and user-friendly calendar application designed for everyday scheduling needs.",
      tech: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Aruna-SL02/Web-Based-Calendar-Application", 
      demoLink: "#" 
    },
    {
      id: 7,
      title: "Java Calculator",
      description: "A simple Java Calculator application developed using NetBeans IDE for basic arithmetic operations.",
      tech: ["Java"],
      githubLink: "https://github.com/Aruna-SL02/Java-Calculator-Application", 
      demoLink: "#" 
    },
    {
      id: 8,
      title: "JavaScript Calculator",
      description: "A simple and responsive calculator built using HTML, CSS, and JavaScript with a clean UI.",
      tech: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Aruna-SL02/JavaScript-Calculator", 
      demoLink: "#" 
    },
    {
      id: 9,
      title: "Upcoming Project",
      description: "This is a placeholder for my next awesome project.",
      tech: ["React", "API"],
      githubLink: "#",
      demoLink: "#" 
    }
  ];

  // --- AUTO SCROLL LOGIC ---
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (scrollContainer) {
        // ONLY SCROLL IF: 
        // 1. Mouse is NOT hovering (isPausedRef is false)
        // 2. Buttons are NOT being clicked (isManualScrollingRef is false)
        if (!isPausedRef.current && !isManualScrollingRef.current) {
          scrollContainer.scrollLeft += 1; // Move 1 pixel
        }

        // INFINITE LOOP LOGIC
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // --- MANUAL BUTTON FUNCTIONS (FIXED) ---
  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      // 1. Pause Auto-Scroll temporarily
      isManualScrollingRef.current = true;

      // 2. Calculate scroll amount (-350 for left, +350 for right)
      const scrollAmount = direction === 'left' ? -350 : 350;

      // 3. Perform the smooth scroll
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      // 4. Resume Auto-Scroll after 500ms (enough time for animation to finish)
      setTimeout(() => {
        isManualScrollingRef.current = false;
      }, 500);
    }
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-subtitle">Here are some of the things I've built. (Hover to Pause)</p>
      
      <div className="slider-wrapper">
        
        {/* Left Button */}
        <button 
          className="scroll-btn left" 
          onClick={() => handleManualScroll('left')} 
        >
          <FaChevronLeft />
        </button>

        <div 
          className="slider-track" 
          ref={scrollRef}
          onMouseEnter={() => { isPausedRef.current = true; }} 
          onMouseLeave={() => { isPausedRef.current = false; }} 
        >
          
          {/* ORIGINAL LIST */}
          {projectList.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="card-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaGithub /> Code
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* DUPLICATE LIST */}
          {projectList.map((project) => (
            <div className="project-card" key={`dup-${project.id}`}>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="card-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaGithub /> Code
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Right Button */}
        <button 
          className="scroll-btn right" 
          onClick={() => handleManualScroll('right')} 
        >
          <FaChevronRight />
        </button>

      </div>
    </div>
  );
};

export default Projects;

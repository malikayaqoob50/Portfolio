// App.jsx
import React from "react";
import { Link, Element } from "react-scroll";
import "./style.css";

function App() {
  return (
    <>
      <header id="home">
        <div className="container">
          <nav>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
            <div className="menu">
              <Link to="about" smooth={true} duration={500} spy={true} activeClass="active">About</Link>
              <Link to="skills" smooth={true} duration={500} spy={true} activeClass="active">Skills</Link>
              <Link to="projects" smooth={true} duration={500} spy={true} activeClass="active">Projects</Link>
              <Link to="resume" smooth={true} duration={500} spy={true} activeClass="active">Resume</Link>
              <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active">Contact</Link>

            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Hi, I'M Malika Yaqoob </h1>
            <p>A passionate Full Stack Developer crafting modern, responsive websites using the MERN stack.
               I turn ideas into interactive digital experiences.</p>
            <Link to="projects" smooth={true} duration={500}>
              <button className="hero-btn">View My Work</button>
            </Link>

            <Link to="contact" smooth={true} duration={500}>
              <button className="hero-btn1">Contact</button>
            </Link>
          </div>
        </section>

       <Element name="about" className="section">
  <div className="container">
    <h2>About Me</h2>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
      <div>
        <p>
          I’m Yaqoob Abid, a BS Information Technology student and an aspiring full-stack web developer with a strong focus on the MERN (MongoDB, Express.js, React, Node.js) stack. My journey into the tech world began with curiosity and has grown into a passion for building dynamic, responsive, and user-friendly websites and applications.
        </p>
        
        <p>
          <strong>Certifications:</strong>
        </p>
        <ul>
          <li>Frontend Web Development (HTML, CSS, JavaScript) – CodeAlpha</li>
          <li>React Fundamentals – Meta (Coursera)</li>
          <li>MongoDB Basics – MongoDB University</li>
          <li>Node.js and Express API Development – Udemy</li>
        </ul>
        <p>
          <strong>Internship Experience:</strong>
        </p>
        <ul>
          <li>Frontend Developer Intern – CodeAlpha (2025)</li>
          <li>Web Developer Intern – TechZone Solutions (Remote)</li>
        </ul>
        <p><strong>Let's connect and create something amazing together!</strong></p>
      </div>
    </div>
  </div>
</Element>


        <Element name="skills" className="section">
          <div className="container">
            <h2>Skills</h2>
            <div className="skill-list">
              {["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MongoDB", "Git", "GitHub", "Postman", "Python"].map((skill, i) => (
                <div className="skill" key={i}>{skill}</div>
              ))}
            </div>
          </div>
        </Element>

        <Element name="projects" className="section">
          <div className="container">
            <h2>Projects</h2>
            <div className="project">
              <h3>EduQuest</h3>
              <p>Educational site for learning HTML, CSS, and JavaScript with interactive content and quizzes.</p>
              <a href="https://eduquest.netlify.app" target="_blank" rel="noopener noreferrer">Live Demo</a> <span>|   </span> 
              <a href="https://github.com/yaqoobabid/eduquest" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="project">
              <h3>Swapify</h3>
              <p>Skill trading platform allowing users to exchange and showcase skills using MERN stack.</p>
              <a href="https://swapify.netlify.app" target="_blank" rel="noopener noreferrer">Live Demo</a> <span>|   </span> 
              <a href="https://github.com/yaqoobabid/swapify" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </Element>

        <Element name="resume" className="section">
          <div className="container">
            <h2>Resume</h2>
            <p>You can download my updated resume to learn more about my background.</p>
            <a href="/Yaqoob_Resume.pdf" className="btn" download>Download Resume</a>
          </div>
        </Element>

        <Element name="contact" className="section">
          <div className="container">
            <h2>Contact Me</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </Element>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 Malika Yaqoob. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

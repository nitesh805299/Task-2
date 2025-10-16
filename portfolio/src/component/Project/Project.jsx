import React from 'react';
import './Project.css';
import theme_pattern from "../../assets/theme_pattern.svg";

const Project = () => {
  return (
    <div className='project'> 
    <div className="project-title">
      <h1>My Projects</h1>
       <img src={theme_pattern} alt="pattern" />
       </div>
      <div className='projectCard'>
        <div>
          <h2>Project 1</h2>
          <p><span>Project Name:</span> Basic Calculator</p>
          <p><span>Description:</span> A simple calculator application that performs basic arithmetic operations.</p>
          <p><span>Technologies Used:</span> HTML, CSS, JavaScript</p>
          <a href='https://nitesh805299.github.io/CodeSft-Task3-main/'>View Project</a>
        </div>
        <div>
          <h2>Project 2</h2>
          <p><span>Project Name:</span> Landing Page</p>
          <p><span>Description:</span> A landing page for a fictional product or service, showcasing its features.</p>
          <p><span>Technologies Used:</span> HTML, CSS</p>
          <a href='https://nitesh805299.github.io/CodeSoft-task2-main/'>View Project</a>
        </div>
        <div>
          <h2>Project 3</h2>
          <p><PETOPIA-HUB>Project Name:</PETOPIA-HUB></p>
          <p><span>Description:</span> A web application for browsing animal with features like filtering and a shopping cart.</p>
          <p><span>Technologies Used:</span> HTML, CSS, </p>
          <a href='https://nitesh805299.github.io/TASK-1/'>View Project</a>
        </div>
        <div>
          <h2>Project 5</h2>
          <p><span>Project Name:</span> Registration Form & Carousel</p>
          <p><span>Description:</span> A form for users to register and a carousel for showcasing information.</p>
          <p><span>Technologies Used:</span> HTML, CSS, JavaScript</p>
          <a href=' https://nitesh805299.github.io/WildLife/'>View Project</a>
        </div>
      
      </div>
    </div>
  );
};

export default Project;

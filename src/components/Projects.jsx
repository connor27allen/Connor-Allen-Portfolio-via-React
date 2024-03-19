import React from 'react';

import screenshot_1 from '../assets/freelancers.png'
import screenshot_2 from '../assets/screenshot_1.png'
import screenshot_3 from '../assets/flickfinder.png'
import screenshot_4 from '../assets/texpress.png'
import screenshot_5 from '../assets/ecommerce.png'
import screenshot_6 from '../assets/sql.png'



const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "FreeLancers",
      description: "GraphQL, MongoDB, React, Express.js, Node.js, JSON Web Token, Heroku",
      photo: screenshot_1,
      siteLink: "https://salty-coast-36768-7c025fc4e535.herokuapp.com/",
      githubLink: "https://github.com/dann9109/freeflow"
    },
    {
      id: 2,
      title: "Flavor Hub",
      description: "MySQL, Express.js, Node.js, REST API Handlebars.js, Sequelize ORM, MVC structure, VS Code Live Share, Heroku",
      photo: screenshot_2,
      siteLink: "https://infinite-journey-57628-3f2779f996f7.herokuapp.com/",
      githubLink: "https://github.com/magellanrose/Recipe_Book_Project"
    },
        {
      id: 3,
      title: "flickFinder",
      description: "Server-side APIs, JavaScript, Bootstrap",
      photo: screenshot_3,
      siteLink: "https://dann9109.github.io/movieapp/ ",
      githubLink: "https://github.com/dann9109/movieapp"
    },
    {
      id: 4,
      title: "Texpress",
      description: "MySQL2, Sequelize, bcrypt, Express.js, Handlebars.js, MVC structure",
      photo: screenshot_4,
      siteLink: "https://pacific-plains-98540-116313d212c8.herokuapp.com/",
      githubLink: "https://github.com/connor27allen/Texpress"
    },
    {
      id: 5,
      title: "E-commerce backend",
      description: "MySQL2, Sequelize, dotenv package, Insomnia, Object-Relational Mapping (ORM)",
      photo: screenshot_5,
      siteLink: "https://youtu.be/qddgMR2QeHg",
      githubLink: "https://github.com/connor27allen/E-commerce-Backend-Database"
    },
    {
      id: 6,
      title: "Employee Tracker",
      description: "MySQL2, Node.js, Inquirer package, Content Management System (CMS)",
      photo: screenshot_6,
      siteLink: "https://youtu.be/wPaq92bAsE0",
      githubLink: "https://github.com/connor27allen/Employee-Tracker"
    }
    // Add siteLink and githubLink for each project
  ];

  return (
    <div className="px-7 md:px-10 my-8" id="projects">
      <h1 className="text-3x1 mt-5 text-primary font-semibold">Featured Projects</h1>
      <p className="text-white my-2 md:w-2/3 leading-[2]"></p>
      {/* featured projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {
          projects.map((project, index) => (
            <div key={index} className="flex flex-col shadow-sm md:w-[343px] bg-[#31313f] rounded">
              <a href={project.photo} className="mb-4">
                {/* define image sizes */}
                <img className="" src={project.photo} alt="" />
              </a>
              <h3 className="text-primary font-semibold text-lg">{project.title}</h3>
              <p className="text-white mt-1">{project.description}</p>
              {/* buttons */}
              <div className="mt-5">
                <a href={project.siteLink} className="btn bg-primary py-2 text-white rounded hover:bg-white hover:text-primary transition-all duration-500">Site Link</a>
                <a href={project.githubLink} className="btn outline px-6 py-1.5 rounded border-none text-white ml-5">Github Repo</a>
              </div>
            </div>
          )
          )
        }
      </div>
    </div>
  );
};

export default Projects;
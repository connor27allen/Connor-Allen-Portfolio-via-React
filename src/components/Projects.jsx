import React from 'react';

import screenshot_1 from '../assets/screenshot_1.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "flickFinder",
      photo: screenshot_1,
      siteLink: "https://dann9109.github.io/movieapp/",
      githubLink: "https://github.com/dann9109/movieapp"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Texpress",
      photo: "https://via.placeholder.com/150",
      siteLink: "https://pacific-plains-98540-116313d212c8.herokuapp.com/",
      githubLink: "https://github.com/connor27allen/Texpress"
    },
        {
      id: 3,
      title: "Project 3",
      description: "JATE",
      photo: "https://via.placeholder.com/150",
      siteLink: "https://jate-5rv4.onrender.com/",
      githubLink: "https://github.com/connor27allen/JATE"
    },
    {
      id: 4,
      title: "Project 4",
      description: "Day Planner",
      photo: "https://via.placeholder.com/150",
      siteLink: "https://connor27allen.github.io/Day_Planner_/",
      githubLink: "https://github.com/connor27allen/Day_Planner_"
    },
    {
      id: 5,
      title: "Project 5",
      description: "Weather Dashboard",
      photo: "https://via.placeholder.com/150",
      siteLink: "https://connor27allen.github.io/Weather-Dashboard/",
      githubLink: "https://github.com/connor27allen/Weather-Dashboard"
    },
    {
      id: 6,
      title: "Project 6",
      description: "JS Quiz",
      photo: "https://via.placeholder.com/150",
      siteLink: "https://connor27allen.github.io/JavaScript-Quiz/",
      githubLink: "https://github.com/connor27allen/JavaScript-Quiz"
    }
    // Add siteLink and githubLink for each project
  ];

  return (
    <div className="px-7 md:px-10 my-8" id="projects">
      <h1 className="text-3x1 mt-5 text-primary font-semibold">Featured Projects</h1>
      <p className="text-white my-2 md:w-2/3 leading-[2]">Description</p>
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
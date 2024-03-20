import React from 'react';

const About = () => {
  const skills= [
    {name: 'UI and UX Design', image:'/src/assets/icons/ruler-pen.png'},
    {name: 'Server Side Development', image:'/src/assets/icons/code.png'},
    {name: 'User Authentication', image:'/src/assets/icons/android.png'},
    {name: 'API Development', image:'/src/assets/icons/web-scraping.png'},
  ]
  return (
    <div className="px-7 md:px-10 sm:-mt-24 pt-8" id="about">

      {/* <h1 className="text-3x1 mt-5 text-primary font-semibold">About me</h1> */}

      <p className="text-white my-4 md:w-2/3 leading-[2]">3 years of frontend  development experience through Boston University courses, resources like Stack Overflow, Github, and freeCodeCamp, and 1 year experience as a blog writer for a software startup formerly known as Prajix. Recent graduate of Rutgers University Full Stack Web Development Bootcamp.{" "}</p>

      {/* experiences */}
      <div className="md:flex items-center my-7">
        <p className="text-primary text-8x1 font-bold">3+</p>
        <p className="text-white text-2x-1 md:ml-5">Years of experience specializing in frontend development</p>
      </div>

      {/* skills */}
      <div className="flex flex-col md:flex-row">
        {
          skills.map((skill, index) => <div key={index} className="skills md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500">
            <img src={skill.image} alt="" />
            <p className="text-2x-1 mt-3 text-white font-semibold"> {skill.name}</p>
            </div>)
        }
      </div>

      {/* services */}

    </div>
  );
};

export default About;
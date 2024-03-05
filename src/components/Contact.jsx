import React from 'react';
import facebook from '../assets/socials/facebook.png';
import instagram from '../assets/socials/instagram.png';
// import dribble from '../assets/socials/dribble.png';
import email from '../assets/socials/sms.png';

const Contact = () => {
  return (
    <div className="px-7 md:px-10 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* texts and icons */}
        <div className="md:w-1/2">
          <h1 className="text-3x1 mt-5 text-primary font-semibold">Contact</h1>

          <p className="text-white my-2 md:w-2/3 leading-[2]">Description</p>

          {/* social icons */}
          <div className="flex">
            <a href=""><img src={facebook} alt="" /></a>
            <a href="" className="ml-4"><img src={instagram} alt="" /></a>
            {/* <a href="" className="ml-4"><img src={dribble} alt="" /></a> */}
            <a href="" className="ml-4"><img src={email} alt="" /></a>


          </div>

        </div>
          
          {/* form */}
          <div className="md:w-1/2">
            <p className="mt-16 text-white text-2x-1 mb-6">Contact me</p>
            <form className="d-flex">
              <input type="text" name="name" id="name" placeholder="Name: " className="bg-[#F5F5F5 bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded"></input>
              <input type="email" name="email" id="email" placeholder="Email: " className="bg-[#F5F5F5 bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"></input>

              <textarea name="message" id="message" placeholder="Message" className="bg-[#F5F5F5 bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"></textarea>
              <button className="btn bg-primary py-2 px-12 text-white hover:bg-white hover:text-primary block-transition-all duration-500">Submit</button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Contact;
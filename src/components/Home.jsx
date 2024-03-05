import React from 'react';
import heroImg from '../assets/img2.png';

const Home = () => {
    return (
        <div className="px-7 md:px-10 my-14 md:h-screen bg-[#1a1a29]" id="home" style={{ padding: '5px', margin: '5px', height: '40vh' }}>
            <div className="w-full flex flex-col md:flex-row items-center justify-between">
                {/* texts */}
                <div className="text-white" style={{ paddingLeft: '30px'}}>
                    <h6 className="text-3x1 mt-12">Hello, I'm </h6>
                    <h1 className="font-semibold text-3x1 md:text-5x1 my-4">Connor</h1>
                    <p className="md:w-96">Full Stack Dev</p>
                    
                    {/* buttons */}
                    <div className="mt-5">
                        <button className="btn bg-primary py-2 text-white rounded hover:bg-white hover:text-primary transition-all duration-500">About me</button>
                        <button className="btn outline px-6 py-1.5 rounded border-none text-white ml-5">Projects</button>
                    </div>
                </div>

                {/* img */}
                <div className="order-first md:order-last relative">
                    {/* <img src={heroImg} alt="" /> */}
                </div>

                {/* divider */}
                <div className="w-full h-24 bg-[#1h1h24] mx-auto absolute left-0 hidden md:block">

                </div>
            </div>
        </div>
    );
};

export default Home;


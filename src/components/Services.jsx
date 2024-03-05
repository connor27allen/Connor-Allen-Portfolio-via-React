import React from 'react';
import services from '../../public/services'

const Services = () => {
    return (
        <div>
            <h1 className="text-primary font-semibold text-3x-1 mt-14">services I offer</h1>
            <div className="grid md:grid-cols-3 gap-5 my-8">
                {
                    services.map(service => <div key={service.id} classname="service-card flex flex-col justify-center items-center p-6 text-center text-white">
                        <img src={service.image} alt="" className="mb-3" />
                        <h6 classname="text-2x-1 mb-4">{service.title}</h6>
                        <p className="text-base">{service.description}</p>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Services;
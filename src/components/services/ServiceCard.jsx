import React from 'react'

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="group border relative rounded flex flex-col items-center justify-center p-5 w-full md:w-[15rem] max-w-[15rem] hover:bg-primaryBlue transition duration-300 ease-in-out">
            <div className="text-green-500 py-3">
                {icon}
            </div>
            <div className="py-3 text-xl font-semibold text-center text-gray-500 group-hover:text-white">
                {title}
            </div>
            <div className="py-3 text-gray-500 text-md text-center group-hover:text-white">
                {description}
            </div>
        </div>
    );
};

export default ServiceCard
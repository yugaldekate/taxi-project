/* eslint-disable react/prop-types */
import React from 'react'

const TeamMember = ({ name, role, image }) => {
    return (
        <div className="w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0 relative">
            <div className="relative overflow-hidden rounded-lg">
                <img src={image} alt={name} className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 bg-green-500 opacity-0 transition-opacity duration-500 flex flex-col items-center justify-end rounded-lg hover:opacity-70">
                    <div className="text-white text-xl py-2">{name}</div>
                    <div className="text-white text-md py-2 italic">{role}</div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember


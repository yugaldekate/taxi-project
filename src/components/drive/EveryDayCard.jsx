import React from 'react'

const EveryDayCard = ({ icon, title, description }) => {
    return (
        <div className="group relative rounded flex flex-col items-center justify-center p-5 w-full md:w-[17rem] max-w-[17rem] transition duration-300 ease-in-out">
            <div className="text-green-500 py-3">
                {icon}
            </div>
            <div className="py-3 text-xl font-semibold text-center text-gray-700">
                {title}
            </div>
            <div className="py-3 text-gray-500 text-md text-center">
                {description}
            </div>
        </div>
    );
};

export default EveryDayCard
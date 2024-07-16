import React from "react";

const CarServiceCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col group text-center border relative rounded-md items-center justify-center p-6 py-8 w-full md:w-[20rem] h-[15rem] transition duration-300 ease-in-out hover:bg-primaryBlue hover:text-white">
            <div className="border p-4 mx-auto mb-4 text-green-500  rounded-full">
                {icon}
            </div>
            <div className="text-xl font-semibold py-2 group-hover:text-white">
                {title}
            </div>
            <div className="text-md text-gray-500 group-hover:text-white">
                {description}
            </div>
        </div>
    );
};

export default CarServiceCard;
import React from "react";

const CarItem = ({ image, name, hourlyPrice, dailyPrice, categories }) => (
    <div className={`default-car-item ${categories} bg-white p-6 rounded-lg text-center`}>
        <div className="mb-4">
            <img className="w-full h-auto object-cover rounded-lg" src={image} alt={name} />
        </div>
        <h3 className="text-xl font-semibold mb-2"><a href="car-single.html">{name}</a></h3>
        <div className="text-gray-600 mb-4 p-2 flex justify-center border rounded-md">
            <div className="flex items-center">
                <span>Price: <span className="font-bold text-green-500">${hourlyPrice}</span> / Hour</span>
                <div className="mx-4 h-full border-l border-gray-400" />
                <span>Price: <span className="font-bold text-green-500">${dailyPrice}</span> / Day</span>
            </div>
        </div>
        <a href="car-single.html" className="inline-block bg-green-500 hover:bg-primaryBlue transition-all duration-300 ease-in-out text-white py-2 px-4 rounded">
            RENT A CAR
        </a>
    </div>
);

export default CarItem;

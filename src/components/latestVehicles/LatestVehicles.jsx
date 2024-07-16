import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from "./data.js"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const LatestVehicles = () => {
    return (
        <div className="py-10 bg-gray-50">
            <div className="py-10 flex flex-col items-center justify-evenly">
                <div className="text-3xl font-semibold">
                    Our Latest Vehicles
                </div>

                <div className="py-5 text-md text-gray-500">
                    The weather started getting rough the tiny ship was tossed if not for the courage.
                </div>

                <div className="py-5 w-full px-4 sm:px-10 md:px-20 lg:px-32">
                    <Slider {...settings}>
                        {data.map((d, index) => (
                            <a href='/contact' key={index} className="flex flex-col items-center justify-center px-4 sm:px-10">
                                <div className="w-full">
                                    <div className="w-full h-auto flex justify-center">
                                        <img src={d.image} alt={d.name} className="max-w-full h-auto" />
                                    </div>
                                </div>

                                <div className="text-center text-xl font-semibold py-1">
                                    {d.name}
                                </div>

                                <div className="text-center text-md flex items-center justify-center">
                                    Price:
                                    <div className="text-green-500 pl-2">
                                        <strong>{d.price}</strong>
                                    </div>
                                    /Per day
                                </div>
                            </a>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default LatestVehicles;

import React from "react";

import { carsData } from "./data";
import FilterButton from "./FilterButton";
import CarItem from "./CarItem";

const Gallery = () => {
    return (
        <section className="gallery-section py-12 px-4 md:px-8 lg:px-20">
            <div className="container mx-auto">
                {/* Heading Title */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="text-4xl flaticon-sports-car"></span>
                    </div>
                    <h2 className="text-3xl font-medium">
                        Meet the Fleet
                    </h2>
                    <p className="text-gray-600">
                        The weather started getting rough the tiny ship was tossed if not for the courage.
                    </p>
                </div>

                {/* Filter */}
                <div className="text-center flex justify-center mb-12 mx-auto">
                    <ul className="flex flex-wrap gap-2 rounded-lg p-2">
                        <FilterButton active filter="all">All</FilterButton>
                        <FilterButton filter="pickups">Pickups</FilterButton>
                        <FilterButton filter="sedan">Sedan</FilterButton>
                        <FilterButton filter="compact">Compact</FilterButton>
                        <FilterButton filter="wagon">Wagon</FilterButton>
                        <FilterButton filter="crossover">Crossover</FilterButton>
                    </ul>
                </div>

                {/* Filter List */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {carsData.map((car, index) => (
                        <CarItem 
                            key={index}
                            image={car.image} 
                            name={car.model} 
                            hourlyPrice={car.hourlyPrice} 
                            dailyPrice={car.dailyPrice} 
                            categories={car.categories}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
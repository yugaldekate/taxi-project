import React from "react";
import toast from "react-hot-toast";

import { TfiWallet } from "react-icons/tfi";
import { SlDrop } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineDocumentText } from "react-icons/hi2";

const BookNowSection = () => {

    const sendAlert1 = () => {
        toast.success("Booking Sent Successfully!");
    };

    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <div className="flex flex-wrap -mx-4">
                {/* Car Rental Form Section */}

                <div className="w-full md:-mt-20  md:w-1/2 xl:w-1/2 p-4">
                    <div className="py-10 flex items-center justify-evenly">
                        <div className="mt-[-5rem] bg-white rounded relative">
                            <div className="shadow border rounded flex flex-col justify-center p-5 w-[25rem]">
                                <div className="text-2xl font-medium text-center py-5">Car Rental</div>
                                <div className="text-xl text-grey-500 py-5">Pickup</div>
                                <input type="text" id="pickup" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-green-500 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-green-500 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Enter Location....."></input>
                                <div className="flex gap-5 py-5">
                                    <input type="date" id="pickup-date" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-green-500 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-green-500 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="" />
                                    <input type="time" id="pickup-time" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-green-500 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-green-500 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="" />
                                </div>
                                <div className="">
                                    <div className="text-xl text-grey-500 py-5">Drop</div>
                                    <div className="flex gap-5">
                                        <input type="date" id="drop-date" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-green-500 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-green-500 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="" />
                                        <input type="time" id="drop-time" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-green-500 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-green-500 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="" />
                                    </div>
                                    <div className="py-5">
                                        <button onClick={sendAlert1} className="w-full bg-green-500 rounded shadow text-white hover:bg-primaryBlue py-3 uppercase">Book now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Welcome Section */}
                <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                    <div className="text-center">
                        <h2 className="text-2xl font-medium mb-4">Welcome To Valencia Car Hire</h2>
                        <p className="text-gray-600 mb-4">The weather started getting rough, the tiny ship was tossed if not for the courage of the fearless crew, the minnow would be lost.</p>
                        <div className="flex flex-wrap justify-around">
                            <div className="w-1/2 p-4">
                                <div className="bg-white group flex border-gray-200 rounded p-4 text-center items-center justify-center h-full">
                                    <span>
                                        <HiOutlineDocumentText className="h-10 w-10 mr-4 group-hover:text-green-500"/>
                                    </span>
                                    <div>
                                        <i className="fas fa-file-invoice-dollar text-2xl text-gray-600 mb-2"></i>
                                        <h4 className="text-lg font-semibold mb-2">Tax & Insurance Included</h4>
                                        <p className="text-gray-600">The weather started getting rough, the ship was tossed if courage.</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="w-1/2 p-4">
                                <div className="bg-white group flex border-gray-200 rounded p-4 text-center items-center justify-center h-full">
                                    <span>
                                        <TfiWallet className="h-10 w-10 mr-4 group-hover:text-green-500"/>
                                    </span>
                                    <div>
                                        <i className="fas fa-car text-2xl text-gray-600 mb-2"></i>
                                        <h4 className="text-lg font-semibold mb-2">Free Car Upgrades</h4>
                                        <p className="text-gray-600">The weather started getting rough, the ship was tossed if courage.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 p-4">
                                <div className="bg-white group flex border-gray-200 rounded p-4 text-center items-center justify-center h-full">
                                    <span className="">
                                        <SlDrop className="h-10 w-10 mr-4 group-hover:text-green-500 "/>
                                    </span>
                                    <div>
                                        <i className="fas fa-lock text-2xl text-gray-600 mb-2"></i>
                                        <h4 className="text-lg font-semibold mb-2">Refundable Deposit</h4>
                                        <p className="text-gray-600">The weather started getting rough, the ship was tossed if courage.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 p-4">
                            <div className="bg-white group flex border-gray-200 rounded p-4 text-center items-center justify-center h-full">
                                    <span>
                                        <TfiHeadphoneAlt className="h-10 w-10 mr-4 hover:text-green-500 font-semibold"/>
                                    </span>
                                    <div>
                                        <i className="fas fa-lock text-2xl text-gray-600 mb-2"></i>
                                        <h4 className="text-lg font-semibold mb-2">Refundable Deposit</h4>
                                        <p className="text-gray-600">The weather started getting rough, the ship was tossed if courage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNowSection;

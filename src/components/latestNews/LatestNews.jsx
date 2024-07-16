import React from "react";

const LatestNews = () => {
    return (
        <section className="latest-news py-20 px-4 md:px-8 lg:px-24">
            <div className="container mx-auto">
                <h2 className="text-3xl font-medium text-center mb-4">Our Latest News</h2>
                <p className="text-lg text-gray-600 text-center mb-10">
                    The weather started getting rough the tiny ship was tossed if not for the courage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white  rounded overflow-hidden relative">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="https://utfs.io/f/184327ea-c5b3-4575-a255-5b55c62f90a4-2vy51w.jpg"
                                alt="Group would some form a family"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute flex flex-col items-center top-2 left-2 p-2 w-12 bg-green-500 text-white rounded">
                                <span className="block text-lg font-bold">01</span>
                                <span className="block text-sm">Sep</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">Group would some form a family</h3>
                            <div className="flex items-center mb-4 text-gray-600">
                                <span className="mr-4"><i className="fas fa-eye"></i> 12 Views</span>
                                <span><i className="fas fa-share-alt"></i> 15 Shares</span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                The weather started getting rough the tiny ship was lost the min ting a maximum security road and back stock a against ade lost the minnow.
                            </p>
                            <a href="#" className="bg-green-500 hover:bg-primaryBlue text-white font-bold py-2 px-4 rounded">
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="bg-white  rounded overflow-hidden relative">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="https://utfs.io/f/148cb569-174c-42c1-8c06-98280d18f7c9-2vy51x.jpg"
                                alt="The tale of our castaways"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute flex flex-col items-center top-2 left-2 p-2 w-12 bg-green-500 text-white rounded">
                                <span className="block text-lg font-bold">27</span>
                                <span className="block text-sm">Aug</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">The tale of our castaways</h3>
                            <div className="flex items-center mb-4 text-gray-600">
                                <span className="mr-4"><i className="fas fa-eye"></i> 46 Views</span>
                                <span><i className="fas fa-share-alt"></i> 38 Shares</span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                The weather started getting rough the tiny ship was lost the min ting a maximum security road and back stock a against ade lost the minnow.
                            </p>
                            <a href="#" className="bg-green-500 hover:bg-primaryBlue text-white font-bold py-2 px-4 rounded">
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="bg-white  rounded overflow-hidden relative">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="https://utfs.io/f/1b3dc5fd-0984-418a-be41-c50df27ca6e9-2vy51y.jpg"
                                alt="Flying away on a wings and prayer"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute flex flex-col items-center top-2 left-2 p-2 w-12 bg-green-500 text-white rounded">
                                <span className="block text-lg font-bold">19</span>
                                <span className="block text-sm">Jul</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">Flying away on a wings and prayer</h3>
                            <div className="flex items-center mb-4 text-gray-600">
                                <span className="mr-4"><i className="fas fa-eye"></i> 51 Views</span>
                                <span><i className="fas fa-share-alt"></i> 42 Shares</span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                The weather started getting rough the tiny ship was lost the min ting a maximum security road and back stock a against ade lost the minnow.
                            </p>
                            <a href="#" className="bg-green-500 hover:bg-primaryBlue text-white font-bold py-2 px-4 rounded">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LatestNews;

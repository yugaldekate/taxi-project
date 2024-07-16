import React from 'react';

import { GrDocumentPerformance } from 'react-icons/gr';
import { BiCheckCircle, BiTrophy } from 'react-icons/bi';
import { BsGearWideConnected } from 'react-icons/bs';

const WhyChooseUs = () => {
    return (
        <div className='px-10 md:px-20 lg:px-40'>

            <div className="text-3xl font-semibold py-5">
                Why Choose Us
            </div>

            <div className="text-gray-500 text-md">
                At Yashashree Translog Pvt Ltd, our vision is to be the foremost choice in the
                transportation sector by consistently surpassing customer expectations with exceptional
                service, reliability, and innovation. We aim to set new standards for excellence not only
                in Pune but across the transportation industry. Our vision encompasses:
            </div>

            <div className="flex items-center">
                <div className="w-full md:w-3/5 lg:w-[600px]">
                    <div className='space-y-2'>
                        <div className="flex flex-col md:flex-row py-5 gap-5">
                            <div className="p-5 flex items-center justify-center">
                                <GrDocumentPerformance className='w-10 h-10 text-green-500' />
                            </div>
                            <div className="max-md:px-2">
                                <div className="text-xl max-md:text-center font-semibold pb-3">Exceptional Service</div>
                                <div className="text-md max-md:text-center text-gray-500">
                                    We prioritize customer satisfaction with personalized, responsive services,
                                    ensuring every interaction is positive and tailored to meet the unique needs of each client.
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row py-5 gap-5">
                            <div className="p-5 flex items-center justify-center">
                                <BiCheckCircle className='w-10 h-10 text-green-500' />
                            </div>
                            <div className="max-md:px-2">
                                <div className="text-xl max-md:text-center font-semibold pb-3">Unwavering Reliability</div>
                                <div className="text-md max-md:text-center text-gray-500">
                                    Reliability is our cornerstone. We ensure on-time delivery with a modern
                                    fleet and skilled professionals, building trust and long-term client 
                                    relationships.
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row py-5 gap-5">
                            <div className="p-5 flex items-center justify-center">
                                <BsGearWideConnected className='w-10 h-10 text-green-500' />
                            </div>
                            <div className="max-md:px-2">
                                <div className="text-xl max-md:text-center font-semibold pb-3">Continuous Innovation</div>
                                <div className="text-md max-md:text-center text-gray-500">
                                    Innovation drives us. We use cutting-edge technologies to enhance services, 
                                    streamline operations, and add value to our clients' businesses.
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row py-5 gap-5">
                            <div className="p-5 flex items-center justify-center">
                                <BiTrophy className='w-10 h-10 text-green-500' />
                            </div>
                            <div className="max-md:px-2">
                                <div className="text-xl max-md:text-center font-semibold pb-3">Industry Leadership</div>
                                <div className="text-md max-md:text-center text-gray-500">
                                    We aim to lead the transportation industry by setting new standards 
                                    in sustainability, safety, and quality, influencing positive change and 
                                    raising the bar for others.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block ml-10">
                    <img src="https://utfs.io/f/85246001-7b17-4ab2-886d-4bc514fbf48e-drpkdb.jpg" alt="" className='w-full md:w-[600px] lg:w-[800px] aspect-video' />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
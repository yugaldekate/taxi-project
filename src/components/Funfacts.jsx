import React, { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaCar } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { GiHouseKeys } from "react-icons/gi";
import { IoSpeedometerOutline } from "react-icons/io5";

const Funfacts = () => {
    const [start, setStart] = useState(false);

    return (
        <div
            className="py-5 max-md:min-h-[650px] md:min-h-[400px]"
            style={{
                backgroundImage: `url(https://utfs.io/f/ec00687f-6453-40c4-9e2f-00cbd266dd79-vmbc5b.jpg)`,
                width: "100%",
                position: "relative",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                alignItems: "center",
                backgroundPosition: "center center",
            }}
        >
            <div
                className="flex flex-col items-center justify-center text-center text-white font-medium"
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    borderTop: "1px dotted rgba(255, 255, 255, 0.5)", // Dotted border on top
                    borderBottom: "1px dotted rgba(255, 255, 255, 0.5)", // Dotted border on bottom
                    borderRight: "1px solid rgba(255, 255, 255, 0.5)", // Solid border on right
                }}
            >
                <h2 className="mb-4 text-3xl">Our Fun Facts</h2>
                <p className="py-5">
                    The weather started getting rough the tiny ship was tossed if not
                    for the courage
                </p>
    
                <ScrollTrigger
                    onEnter={() => setStart(true)}
                    onExit={() => setStart(false)}
                >
                    <div className="flex max-md:flex-col justify-center md:justify-between px-4">
    
                        <div className="flex items-center justify-center gap-6 md:gap-10 mb-6 md:mb-0 md:border-r border-dotted ml-4">
                            <div className="text-6xl pr-4 md:pr-10">
                                <FaCar />
                            </div>
                        </div>
    
                        <div className="flex items-center justify-center gap-6 md:gap-10 mb-6 md:mb-0 md:border-r border-dotted ml-4">
                            <div className="text-xl">
                                <div className="text-green-500">Cabs</div>
                                <div className="text-2xl font-semibold">
                                    {start && <CountUp start={0} end={8350} duration={2} />}
                                    +
                                </div>
                            </div>
                            <div className="text-6xl pr-4 md:pr-10">
                                <GoGear />
                            </div>
                        </div>
    
                        <div className="flex items-center justify-center gap-6 md:gap-10 mb-6 md:mb-0 md:border-r border-dotted ml-4">
                            <div className="text-xl">
                                <div className="text-green-500">Trips Daily</div>
                                <div className="text-2xl font-semibold">
                                    {start && <CountUp start={0} end={25000} duration={2} />}
                                    +
                                </div>
                            </div>
                            <div className="text-6xl pr-4 md:pr-10">
                                <GiHouseKeys />
                            </div>
                        </div>
    
                        <div className="flex items-center justify-center gap-6 md:gap-10 mb-6 md:mb-0 md:border-r border-dotted ml-4 md:mr-4">
                            <div className="text-xl">
                                <div className="text-green-500">Clients Annually</div>
                                <div className="text-2xl font-semibold">
                                    {start && <CountUp start={0} end={5500000} duration={2} />}
                                    +
                                </div>
                            </div>
                            <div className="text-6xl pr-4 md:pr-10">
                                <IoSpeedometerOutline />
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-center gap-6 md:gap-10 mb-6 md:mb-0">
                            <div className="text-xl">
                                <div className="text-green-500">Kilometers Daily</div>
                                <div className="text-2xl font-semibold">
                                    {start && <CountUp start={0} end={12000} duration={2} />}
                                    +
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    );
}

export default Funfacts;

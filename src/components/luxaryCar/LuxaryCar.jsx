import React from "react";
import { GrDocumentVerified } from "react-icons/gr";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { PiCarProfile } from "react-icons/pi";

import CarServiceCard from "./LuxaryCarCard";

const LuxuryCar = () => {
    return (
        <div className="bg-gray-50">
            <div className="py-10 flex flex-col items-center justify-evenly">
                <div className="text-3xl font-semibold">
                    Drive A Luxury Car Everyday
                </div>
                <div className="py-5 text-md text-gray-500">
                    The weather started getting rough the tiny ship was tossed if not for
                    the courage.
                </div>
                <div className="flex flex-wrap justify-center gap-6 px-4 md:px-20 lg:px-32 pt-10">
                    <CarServiceCard
                        icon={<GrDocumentVerified className="w-7 h-auto" />}
                        title="Book Your Car"
                        description="The weather started getting rough the tiny ship was lost the min ting a maximum security stockade lost the minnow."
                    />
                    <CarServiceCard
                        icon={<FaRegMoneyBillAlt className="w-7 h-auto" />}
                        title="Pay the Fare"
                        description="The weather started getting rough the tiny ship was lost the min ting a maximum security stockade lost the minnow."
                    />
                    <CarServiceCard
                        icon={<PiCarProfile className="w-7 h-auto" />}
                        title="Ride the Car"
                        description="The weather started getting rough the tiny ship was lost the min ting a maximum security stockade lost the minnow."
                    />
                </div>
            </div>
        </div>
    );
};

export default LuxuryCar;

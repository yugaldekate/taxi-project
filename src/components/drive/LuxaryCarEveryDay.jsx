import React from "react";

import EveryDayCard from "./EveryDayCard";

import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { LiaCarSideSolid } from "react-icons/lia";
import { LiaClipboardListSolid } from "react-icons/lia";

const LuxaryCarEveryDay = () => {
    return (
        <div className="py-10 px-5 md:px-10 lg:px-40">
            <div className="py-10">
                <h2 className="text-3xl font-semibold py-3 text-center">
                    Drive A Luxury Car Everyday
                </h2>
                <div className="text-gray-500 text-md text-center">
                    The weather started getting rough the tiny ship was tossed if not for the courage.
                </div>

                <div className="flex flex-wrap justify-center items-center py-10 gap-20">
                    <EveryDayCard
                        icon={<LiaClipboardListSolid className="h-auto w-10 text-green-500" />}
                        title="Book Your Car"
                        description="The weather started getting rough the tiny ship was tossed if not for the courage."
                    />
                    <EveryDayCard
                        icon={<LiaMoneyBillWaveAltSolid className="h-auto w-10 text-green-500" />}
                        title="Pay the Fare"
                        description="The weather started getting rough the tiny ship was tossed if not for the courage."
                    />
                    <EveryDayCard
                        icon={<LiaCarSideSolid className="h-auto w-10 text-green-500" />}
                        title="Ride the Car"
                        description="The weather started getting rough the tiny ship was tossed if not for the courage."
                    />
                </div>
            </div>
        </div>
    );
};

export default LuxaryCarEveryDay;

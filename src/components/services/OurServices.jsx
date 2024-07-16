import React from "react";

import { TbGlassGin } from "react-icons/tb";
import { GiDiamondRing } from "react-icons/gi";
import { LuPizza } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsRocket } from "react-icons/bs";
import { FaRegCirclePlay } from "react-icons/fa6";

import ServiceCard from "./ServiceCard";

const OurServices = () => {
    return (
        <div className="py-10 px-5 md:px-10 lg:px-40">
            <div className="py-10">
                <h2 className="text-3xl font-semibold py-3 text-center">
                    Our Awesome Services
                </h2>
                <div className="text-gray-500 text-md text-center">
                    The weather started getting rough the tiny ship was tossed if not for
                    the courage.
                </div>

                <div className="flex flex-wrap justify-center items-center py-10 gap-10">
                    <ServiceCard
                        icon={<TbGlassGin className="h-auto w-10 text-green-500" />}
                        title="Night Parties"
                        description="The weather started getting rough the tiny ship was tossed if not for the courage."
                    />
                    <ServiceCard
                        icon={<GiDiamondRing className="h-auto w-10 text-green-500" />}
                        title="Weddings"
                        description="The weather started getting rough the tiny ship was tossed if not for the courage."
                    />
                    <ServiceCard
                        icon={<LuPizza className="h-auto w-10 text-green-500" />}
                        title="Restaurant"
                        description="The weather started getting rough the tiny ship was tossed if not for the courage."
                    />
                    <ServiceCard
                        icon={<MdOutlineShoppingCart className="h-auto w-10 text-green-500" />}
                        title="Shopping Malls"
                        description="The weather started getting rough the tiny ship was tossed if not for the courage."
                    />
                    <ServiceCard
                        icon={<BsRocket className="h-auto w-10 text-green-500" />}
                        title="Space Travel"
                        description="The weather started getting rough the tiny ship was tossed if not for the courage."
                    />
                    <ServiceCard
                        icon={<FaRegCirclePlay className="h-auto w-10 text-green-500" />}
                        title="Entertainment"
                        description="The weather started getting rough the tiny ship was tossed if not for the courage."
                    />
                </div>
            </div>
        </div>
    );
};

export default OurServices;

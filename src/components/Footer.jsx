import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';

const Footer = () => {
  const sendAlert = () => {
    toast.success("Thank You For Subscribing!");
  };

  return (
    <div className="bg-[#222222] py-10 px-4 md:py-20 md:px-32 text-white">
      <Toaster />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="">
          <div className="text-lg font-bold">Opening Hours</div>
          <div className="py-5 text-md leading-normal pr-5">
            We are available to serve you during the following hours:
          </div>
          <div className="flex items-center justify-between text-md py-5">
            <div className="">Monday - Friday</div>
            <div className="text-green-500">9.00am to 8.00pm</div>
          </div>
          
          {/* <div className="flex items-center justify-between text-md">
            <div className="">Monday - Friday</div>
            <div className="text-green-500">9.00am to 8.00pm</div>
          </div>
          <div className="flex items-center justify-between text-md py-5">
            <div className="">Monday - Friday</div>
            <div className="text-green-500">9.00am to 8.00pm</div>
          </div> */}
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold pb-5">Explore</div>
          <div className="py-3 hover:text-green-500 flex items-center justify-center gap-2">
            <IoIosArrowForward className="text-green-500" />
            <a href="/about" className="text-md">About Us</a>
          </div>
          <div className="py-3 hover:text-green-500 flex items-center justify-center gap-2 pr-3">
            <IoIosArrowForward className="text-green-500" />
            <a href="/services" className="text-md">Services</a>
          </div>
          <div className="py-3 hover:text-green-500 flex items-center justify-center gap-2 pr-7">
            <IoIosArrowForward className="text-green-500" />
            <a href="/policy" className="text-md">Policy</a>
          </div>
          <div className="py-3 hover:text-green-500 flex items-center justify-center gap-2 pl-2">
            <IoIosArrowForward className="text-green-500" />
            <a href="/contact" className="text-md">Contact Us</a>
          </div>
        </div>
        <div className="">
          <div className="text-xl font-bold pb-10">Flicker Photos</div>
          <div className="grid grid-cols-3 gap-2">
            <img src="https://utfs.io/f/8414f63d-c6df-4624-8124-b2ba207c3a42-uprltk.jpg" alt="" className="rounded w-full h-auto" />
            <img src="https://utfs.io/f/8414f63d-c6df-4624-8124-b2ba207c3a42-uprltk.jpg" alt="" className="rounded w-full h-auto" />
            <img src="https://utfs.io/f/8414f63d-c6df-4624-8124-b2ba207c3a42-uprltk.jpg" alt="" className="rounded w-full h-auto" />
            <img src="https://utfs.io/f/8414f63d-c6df-4624-8124-b2ba207c3a42-uprltk.jpg" alt="" className="rounded w-full h-auto" />
            <img src="https://utfs.io/f/8414f63d-c6df-4624-8124-b2ba207c3a42-uprltk.jpg" alt="" className="rounded w-full h-auto" />
            <img src="https://utfs.io/f/8414f63d-c6df-4624-8124-b2ba207c3a42-uprltk.jpg" alt="" className="rounded w-full h-auto" />
          </div>
        </div>
        <div className="px-4 md:px-10">
          <div className="text-xl font-bold pb-2">Newsletter</div>
          <div className="text-md py-5">The weather started getting rough tining</div>
          <div className="relative w-full py-2">
            <input
              type="text"
              id="voice-search"
              className="h-10 bg-white border border-white text-gray-500 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Your E-mail....."
              required
            />
          </div>
          <div className="h-10 py-5 relative bg-green-500 w-full rounded uppercase font-medium flex items-center justify-center p-4">
            <button onClick={sendAlert} className="text-md">Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

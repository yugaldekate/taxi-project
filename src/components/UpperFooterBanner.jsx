import React from "react";
import { IoMdCall } from "react-icons/io";
import '../styles/angle.css';

const UpperFooterBanner = () => {
  return (
    <div className="flex flex-wrap justify-between">

      <div className="bg-green-600 w-full md:w-1/2 text-center flex items-center justify-center mt-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-4 h-full">
          <div className="p-3 rounded-full border border-white flex-shrink-0">
            <IoMdCall className="text-white w-5 h-5" />
          </div>
          <div className="text-white font-sm text-xl md:text-2xl flex-grow">
            <div className="h-full flex flex-col justify-center">
              Book by Phone: <strong>+91-8329301102</strong>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#222222] w-full md:w-1/2 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center py-2 px-4">
          <img src="https://utfs.io/f/4f4bc7d0-42f7-4e01-8e8c-c430539d9e07-rjxnlm.png" alt="" className="w-36 h-auto md:pr-10 md:border-r md:border-white" />
          <div className="text-white text-md not-italic ml-5 md:mt-0 leading-9 text-center md:text-left">
            Yashashree Translog Pvt Ltd, based in Pune, is a premier transport service provider known 
            for top-notch rental car and transport solutions. Committed to excellence, 
            we set industry standards in safety, reliability, and customer satisfaction. 
            Our extensive fleet and dedicated team ensure secure, comfortable, and punctual journeys.
          </div>
        </div>
      </div>

    </div>
  );
};

export default UpperFooterBanner;

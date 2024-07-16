import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { FaClock, FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AccouncementBanner = () => {
  return (
    <div className="bg-announcement text-white flex justify-evenly font-nunito py-2 flex-wrap">
          <div className="hidden md:flex text-white flex h-10 items-center font-bold text-xl gap-3">
            <FaPhoneAlt />
            +91-987654321 - Cab Attachments | +91-987654321 - Corporate Enquiry
          </div>
          <div className="hidden md:flex text-white flex h-10 items-center font-bold text-xl gap-3">
            <FaClock />
            Mon - Sat (9 am - 6 pm)
          </div>
          <div className="flex md:hidden text-white flex h-10 items-center font-bold text-xl gap-3">
            <MdEmail />
            test@test.com
          </div>
          <div className="flex text-white flex h-10 items-center font-bold text-xl gap-3">
            <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
            <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
    </div>
  )
}

export default AccouncementBanner
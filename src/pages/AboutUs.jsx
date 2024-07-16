import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { teamMembers } from "../components/teamMember/data";

import Funfacts from "../components/Funfacts";
import TeamMember from "../components/teamMember/TeamMember";
import FooterCarousel from "../components/FooterCarousel";
import Carousel from "../components/Carousel";

const AboutUs = () => {

  return (
    <div className="font-primary">
      <div
        className="py-5"
        style={{
          backgroundImage: `url(https://utfs.io/f/3452f983-db96-4232-9d4e-32481878a906-xyr1oi.jpg)`,
          height: "25rem",
          width: "100%",
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          alignItems: "center",
          backgroundPosition: "center center",
        }}
      >
        <div
          className="flex items-center justify-center text-center text-white font-medium text-5xl"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          About Us
        </div>
      </div>

      <div className="py-20">
        <div className="px-4 md:px-10 flex flex-col md:flex-row items-center justify-evenly w-full">
          <img
            src="https://utfs.io/f/76c3a21a-12f8-4111-b829-350c7459fffd-tfww43.png"
            alt=""
            className="w-full md:w-1/2 h-auto mb-8 md:mb-0"
          />
          <div className="px-4 md:px-32">
            <div className="text-3xl font-medium py-5">About Yashashree Translog g Pvt Ltd</div>
            <div className="text-gray-700 text-base font-normal py-5 leading-relaxed">
              Yashashree Translog Pvt Ltd, based in Pune, is a premier transport service provider
              known for top-notch rental car and transport solutions. Committed to excellence, 
              we set industry standards in safety, reliability, and customer satisfaction. 
              Our extensive fleet and dedicated team ensure secure, comfortable, and punctual journeys.
            </div>
            <div className="duration-500 py-3 hover:bg-green-500 cursor-pointer bg-primaryBlue w-40 h-12 rounded shadow flex items-center justify-center">
              <a href="#" className="text-white text-md font-medium">
                HIRE A CAR
              </a>
            </div>
          </div>
        </div>
      </div>

      <Funfacts />

      <div className="py-20 md:py-40">
        <div className="text-3xl text-center font-medium">
          Meet Our Team
        </div>
        <div className="py-5 text-md text-center text-gray-500">
          The weather started getting rough the tiny ship was tossed if not for the courage.
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-4 md:px-20">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>
      </div>

      <Carousel/>

      <FooterCarousel/>
    </div>
  );
};

export default AboutUs;

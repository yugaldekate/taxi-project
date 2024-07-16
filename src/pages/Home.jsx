import React from "react";
import { Toaster } from "react-hot-toast";

import "../styles/animation.css";

import BookNowSection from "../components/BookNowSection";
import Funfacts from "../components/Funfacts";
import Signup from "../components/Signup";
import Carousel from "../components/Carousel";
import FooterCarousel from "../components/FooterCarousel";
import LatestNews from "../components/latestNews/LatestNews";
import Gallery from "../components/gallary/Gallery";
import BannerCarousel from "../components/BannerCarousel";
import LuxaryCarEveryDay from "../components/drive/LuxaryCarEveryDay";

const Home = () => {

  return (
    <>
      <div className="">
        <Toaster />
        
        <BannerCarousel/>

        <BookNowSection/>

        <div className="flex max-md:flex-col justify-center items-center mb-3">
          <h2 className="font-medium text-2xl flex items-center space-x-8">
            <span>Hire a Luxury Cars</span>
            <span className="h-12 w-12 text-white rounded-full bg-green-500 flex items-center justify-center">OR</span>
            <span>Hire a Sedan Cars</span>
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <img src="https://utfs.io/f/d6f9f8be-e25e-4af2-bacf-5ffae14cc6c1-drpkdc.jpg" alt="featuredImage" />
        </div>

        <LuxaryCarEveryDay/>

        <Funfacts/>

        <Gallery/>

        <Signup/>

        <LatestNews/>

        <Carousel/>

        <FooterCarousel/>
      </div>
    </>
  );
};

export default Home;

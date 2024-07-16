import React from 'react';

import { Toaster } from 'react-hot-toast';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/sliderButton.css';

import Signup from '../components/Signup';
import WhyChooseUs from '../components/services/WhyChooseUs';
import OurServices from '../components/services/OurServices';
import LuxuryCar from '../components/luxaryCar/LuxaryCar';
import LatestVehicles from '../components/latestVehicles/LatestVehicles';

const Services = () => {

  return (
    <div className="font-nunito">
       <Toaster />
        <div className="py-5" style={{backgroundImage: `url(https://utfs.io/f/3452f983-db96-4232-9d4e-32481878a906-xyr1oi.jpg)`, height: '25rem', width: '100%', position: 'relative', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', alignItems: 'center', backgroundPosition: 'center center'}}>
          <div className="flex items-center justify-center text-center text-white font-medium text-5xl" style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
            Services
          </div>
        </div>

        <WhyChooseUs/>

        <Signup/>

        <OurServices/>

        <LuxuryCar/>

        <LatestVehicles/>
      </div>
  )
}

export default Services
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,         // Enable autoplay
  autoplaySpeed: 2000,    // Autoplay speed in milliseconds (1 second)
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const data = [
  {
    name: `John Morgan`,
    img: "https://utfs.io/f/c249a778-ce36-4208-8157-9b4a44294fe7-wn8blk.jpg",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Ellie Anderson`,
    img: "https://utfs.io/f/c249a778-ce36-4208-8157-9b4a44294fe7-wn8blk.jpg",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Nia Adebayo`,
    img: "https://utfs.io/f/c249a778-ce36-4208-8157-9b4a44294fe7-wn8blk.jpg",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Rigo Louie`,
    img: "https://utfs.io/f/c249a778-ce36-4208-8157-9b4a44294fe7-wn8blk.jpg",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mia Williams`,
    img: "https://utfs.io/f/c249a778-ce36-4208-8157-9b4a44294fe7-wn8blk.jpg",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Carousel = () => {
  return (
    <div className="py-10 bg-gray-100 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="pl-5">
            <div className="h-[400px] w-full sm:w-[300px] text-black rounded-xl bg-green-500 flex flex-col items-center justify-center cursor-pointer">
              <div className="h-32 w-32 flex justify-center items-center rounded-full bg-white overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4 text-white text-center">
                <p className="text-xl font-semibold">{d.name}</p>
                <p>{d.review}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

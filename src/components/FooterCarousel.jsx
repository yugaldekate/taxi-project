import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5, // Display 3 slides at a time on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5, // Reduce to 5 slides on tablets (1024px width and below)
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3, // Display 3 slide on mobile devices (600px width and below)
            },
        },
    ],
};

const data = [
  { name: "banner1" },
  { name: "banner2" },
  { name: "banner3" },
  { name: "banner4" },
  { name: "banner5" },
];

const FooterCarousel = () => {
    return (
        <div className="py-20 px-20">
            <Slider {...settings1}>
                {data.map((d) => (
                <div key={d.name} className="pl-2 lg:pl-4 xl:pl-8">
                    <img src="https://utfs.io/f/9719244c-0011-4eb2-9e74-1ba3bfdeeefa-yma26.png" alt="" className="" />
                </div>
                ))}
            </Slider>
        </div>
    );
};

export default FooterCarousel;

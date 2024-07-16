import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = () => {
    const bannerData = [
        {
            image: "https://utfs.io/f/b010adfa-b3ad-4c04-952b-60409e28d5e3-z89yoq.jpg",
            smallTitle: "Welcome to Valencia Car Hire",
            bigTitle: "Enjoy the Ride with Brand New <br>Ducatti Cars",
            buttonText1: "Rent a Car",
            buttonLink1: "#",
            buttonText2: "Contact Us",
            buttonLink2: "#",
        },
        {
            image: "https://utfs.io/f/6d4bc733-de4d-4fd9-8d80-66f6a81b9e92-tqabiv.jpg",
            smallTitle: "No. 1 Car Rental / Hire Company",
            bigTitle: "We are trusted by Millions of <br>Customers Worldwide",
            buttonText1: "Rent a Car",
            buttonLink1: "#",
            buttonText2: "Contact Us",
            buttonLink2: "#",
        },
        {
            image: "https://utfs.io/f/8e6d9c69-3f42-4c96-ac5e-acb1cb3268a2-wydvc7.jpg",
            smallTitle: "Starts from $500/day",
            bigTitle: "The Classic Aston Martin Dark Shiny <br>Sport Car in the Street",
            buttonText1: "Rent a Car",
            buttonLink1: "#",
            buttonText2: "Contact Us",
            buttonLink2: "#",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: true,
    };

    return (
        <section className="relative">
            <div className="relative overflow-hidden">
                <Slider {...settings}>
                    {bannerData.map((banner, index) => (
                        <div key={index} className="relative">
                            <div
                                className="h-[35rem] max-md:h-[27rem] w-full bg-cover bg-center flex flex-col justify-center items-center"
                                style={{ backgroundImage: `url(${banner.image})` }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                                <div className="relative z-10 text-center text-white home-banner-text-1">
                                    <div className="text-xl mb-4">
                                        {banner.smallTitle}
                                    </div>
                                    <h2
                                        className="text-5xl mb-6 home-banner-text-2"
                                        dangerouslySetInnerHTML={{ __html: banner.bigTitle }}
                                    ></h2>
                                    <div className="flex space-x-4 justify-center">
                                        <a
                                            href={banner.buttonLink1}
                                            className="px-5 py-2 home-banner-text-3 bg-white text-black uppercase rounded shadow text-sm font-semibold transition-all duration-300 hover:bg-gray-500 hover:text-white"
                                        >
                                            {banner.buttonText1}
                                        </a>
                                        <a
                                            href={banner.buttonLink2}
                                            className="px-5 py-2 home-banner-text-3 bg-green-500 text-white uppercase rounded shadow text-sm font-semibold transition-all duration-300 hover:bg-transparent hover:text-green-500 hover:border hover:border-green-500"
                                        >
                                            {banner.buttonText2}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default BannerCarousel;

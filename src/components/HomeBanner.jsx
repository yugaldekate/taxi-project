import React from "react"

const HomeBanner = () => {
    return (
        <div
          className="py-10"
          style={{
            backgroundImage: `url(https://utfs.io/f/b010adfa-b3ad-4c04-952b-60409e28d5e3-z89yoq.jpg)`,
            height: "35rem",
            width: "100%",
            position: "relative",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            alignItems: "center",
            backgroundPosition: "center center",
          }}
        >
          <div
            className="flex flex-col items-center justify-center"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <div className="text-center text-xl text-white font-semibold py-3 home-banner-text-1">
              Welcome To Yashashree Translog
            </div>
            <div className="text-center text-5xl text-white font-semibold w-[45rem] home-banner-text-2">
              Enjoy The Ride With Brand New Buggatti Cars
            </div>
            <div className="pt-10 flex gap-3 home-banner-text-3">
              <button className="uppercase bg-white py-2 px-5 rounded shadow text-sm font-semibold hover:bg-gray-500 hover:text-white">
                rent a car
              </button>
              <div className="uppercase border border-green-500 text-white bg-green-500 py-2 px-5 rounded shadow text-sm font-semibold hover:bg-transparent hover:border-green-500 hover:text-green-500">
                <a href="/contact">contact us</a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default HomeBanner
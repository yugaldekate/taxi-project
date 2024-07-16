import React from 'react'
import JoinUs from '../components/JoinUs'

const WhyChooseUs = () => {
  return (
    <div className="font-nunito mt-40">
          <div className="py-10 text-5xl text-center font-bold">Why Choose Us</div>
          <div className="py-10 text-5xl text-center font-bold">Why Choose Corporate Cab(P) Limited? </div>
          <div className="text-3xl text-center font-semibold px-80">In a sea of transportation options, Corporate Cabs (P) Limited stands out as your premier choice. Here’s why:</div>
        <div className="flex items-center justify-evenly py-20 px-40">
              <div className="rounded shadow-xl"><img className="rounded-xl shadow-lg w-[650px] h-[480px]" src="https://corporatecabs.in/wp-content/uploads/2024/02/taxi-driver-client-car.jpg" alt="employee bus log" /></div>
              <div className="w-1/2 text-3xl text-center">
                  <div className="text-5xl text-blue-500 font-semibold pb-10">Unmatched Safety and Reliability</div>
                <div className="text-3xl font-semibold pb-5 px-20">Safety is not just a promise. it&apos;s our priority. From rigorous driver vetting to real-time vehicle tracking, we ensure every journey is secure and reliable.</div>
              </div>
          </div>
          <div className="flex items-center justify-evenly py-20 px-40">
              <div className="w-1/2 text-3xl text-center">
                  <div className="text-5xl text-blue-500 font-semibold pb-10">Tailored Transportation Solutions</div>
                <div className="text-3xl font-semibold pb-5 px-20">Every client is unique, and so are their needs. We specialize in customizing our services, from daily commutes to luxury travel, ensuring a perfect fit for your requirements.</div>
              </div>
            <div className="rounded shadow-xl"><img className="rounded-xl shadow-lg w-[650px] h-[480px]" src="https://corporatecabs.in/wp-content/uploads/2024/02/handsome-business-man-working-computer-car-1.jpg" alt="employee bus log" /></div>
          </div>
          
          <div className="flex items-center justify-evenly py-20 px-40">
              <div className="rounded shadow-xl"><img className="rounded-xl shadow-lg w-[650px] h-[480px]" src="https://corporatecabs.in/wp-content/uploads/2024/02/woman-wanting-pay-taxi-services.jpg" alt="employee bus log" /></div>
              <div className="w-1/2 text-3xl text-center">
                  <div className="text-5xl text-blue-500 font-semibold pb-10">Cutting-Edge Technology</div>
                <div className="text-3xl font-semibold pb-5 px-20">Leveraging the latest in transportation technology, we offer convenience at your fingertips. Our user-friendly app and advanced booking systems make managing your commutes effortless.</div>
              </div>
          </div>
          <div className="flex items-center justify-evenly py-20 px-40">
              <div className="w-1/2 text-3xl text-center">
                  <div className="text-5xl text-blue-500 font-semibold pb-10">Sustainability Commitment</div>
                <div className="text-3xl font-semibold pb-5 px-20">We&apos;re dedicated to reducing our environmental footprint. By incorporating electric vehicles and optimizing routes, we contribute to a greener, cleaner planet.</div>
              </div>
            <div className="rounded shadow-xl"><img className="rounded-xl shadow-lg w-[650px] h-[480px]" src="https://corporatecabs.in/wp-content/uploads/2024/02/men-holding-car-key-side-view.jpg" alt="employee bus log" /></div>
          </div>
           <div className="flex items-center justify-evenly py-20 px-40">
              <div className="rounded shadow-xl"><img className="rounded-xl shadow-lg w-[650px] h-[480px]" src="https://corporatecabs.in/wp-content/uploads/2024/02/elegant-uber-driver-giving-taxi-ride.jpg" alt="employee bus log" /></div>
              <div className="w-1/2 text-3xl text-center">
                  <div className="text-5xl text-blue-500 font-semibold pb-10">Exceptional Customer Service</div>
                <div className="text-3xl font-semibold pb-5 px-20">Our clients are at the heart of everything we do. With round-the-clock support and a team committed to your satisfaction, we&apos;re here for you, always.</div>
              </div>
          </div>
          <JoinUs />
      </div>
  )
}

export default WhyChooseUs
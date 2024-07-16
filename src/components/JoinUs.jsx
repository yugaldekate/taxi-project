import React from 'react';

import { FaArrowRight } from 'react-icons/fa'

const JoinUs = () => {
  return (
      <div style={{ backgroundImage: `url(https://utfs.io/f/9cbecc29-96b3-4b78-bd6e-32b2a2b72a68-2f9.jpg)`, height: '30rem', width: '100%', position: 'relative', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(211, 211, 211, 0.5)' }}>
              <div className="font-nunito text-center text-5xl font-semibold py-10">Join Our Journey</div>
              <div className="font-nunito text-center text-3xl font-semibold py-5 px-52">As we continue to grow and evolve, Corporate Cabs (P) Limited remains dedicated to the principles upon which we were founded. We invite you to join us on this exciting journey as we pave the way for a future where every commute is not just a ride, but an experience.</div>
              <div className="flex items-center justify-center py-5">
                <div className="bg-announcement w-52 h-20 flex items-center justify-center rounded-xl shadow gap-3"><a href="/contact" className='text-white font-nunito text-2xl'>Contact Us</a><FaArrowRight style={{color: 'white'}} /></div>
            </div>
          </div>
    </div>
  )
}

export default JoinUs
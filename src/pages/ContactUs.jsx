import React from 'react';

import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoHomeOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';
import { GiWorld } from 'react-icons/gi';

const ContactUs = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_obepwxr', 'template_6hs0x5b', form.current, 'JVtJiwB01Rhx77VcN')
      e.target.reset()
  };

  const sendAlert = () => {
    toast.success("Your message has been sent!")
  }

  return (
    <div className="">

      <div className="py-5" style={{backgroundImage: `url(https://utfs.io/f/3452f983-db96-4232-9d4e-32481878a906-xyr1oi.jpg)`, height: '25rem', width: '100%', position: 'relative', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', alignItems: 'center', backgroundPosition: 'center center'}}>
        <div className="flex items-center justify-center text-center text-white font-medium text-5xl" style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
          Contact Us
        </div>
      </div>
      <Toaster />

      <div className="w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.93187088895!2d73.78056538537243!3d18.524761375428106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720093910942!5m2!1sen!2sin" width="100%" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="py-20">
        <div className="px-40">
          <div className="text-3xl font-semibold py-3">Contact Information</div>
          <div className="text-gray-500 text-md font-medium py-3">
            If you have any questions or need assistance, feel free to reach out to us at our Head Office. We are always here to help.
          </div>
        </div>

        <div className="px-40 py-20">
          <div className="grid grid-cols-3">
            <div className="">
              <div className="text-2xl font-medium pb-5">Head Office</div>
              <div className="flex items-center gap-5 text-md py-3">
                <div className="text-green-500"><IoHomeOutline /></div>
                <div className="">
                  S No 288, Diwad , Diwad Gavthan Road , Maharastra
                </div>
              </div>
              <div className="flex items-center gap-5 text-md py-3">
                <div className="text-green-500"><FiPhone /></div>
                <div className="">+91-8329301102</div>
              </div>
              <div className="flex items-center gap-5 text-md py-3">
                <div className="text-green-500"><CiMail /></div>
                <div className="">info@yashashreetranslog.com</div>
              </div>
              <div className="flex items-center gap-5 text-md py-3">
                <div className="text-green-500"><GiWorld /></div>
                <div className="">www.valencia.com</div>
              </div>
            </div>
{/* 
            <div className="">
              <div className="text-2xl font-medium pb-5">Head Office</div>
              <div className="flex items-center gap-5 text-md py-3">
                <div className="text-green-500"><IoHomeOutline /></div>
                <div className="">123A, Mainbridge, Lotopride, United States.</div>
              </div>
              <div className="flex items-center gap-5 text-md py-3">
                <div className="text-green-500"><FiPhone /></div>
                <div className="">+1800 - 2374 - 190 / +1800 - 2374 - 190</div>
              </div>
              <div className="flex items-center gap-5 text-md py-3">
                <div className="text-green-500"><CiMail /></div>
                <div className="">valencia@support.com</div>
              </div>
              <div className="flex items-center gap-5 text-md py-3">
                <div className="text-green-500"><GiWorld /></div>
                <div className="">www.valencia.com</div>
              </div>
            </div>

            <div className="">
              <div className="text-2xl font-medium pb-5">Head Office</div>
              <div className="flex items-center gap-5 text-md py-3">
                <div className="text-green-500"><IoHomeOutline /></div>
                <div className="">123A, Mainbridge, Lotopride, United States.</div>
              </div>
              <div className="flex items-center gap-5 text-md py-3">
                <div className="text-green-500"><FiPhone /></div>
                <div className="">+1800 - 2374 - 190 / +1800 - 2374 - 190</div>
              </div>
              <div className="flex items-center gap-5 text-md py-3">
                <div className="text-green-500"><CiMail /></div>
                <div className="">valencia@support.com</div>
              </div>
              <div className="flex items-center gap-5 text-md py-3">
                <div className="text-green-500"><GiWorld /></div>
                <div className="">www.valencia.com</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="px-40">
        <div className="uppercase text-3xl font-medium">Fill the form</div>
        <form ref={form} className="py-7" onSubmit={sendEmail} >
          <div className="py-2">
            <label htmlFor="" className='text-md font-medium '>Full Name</label>
          </div>
          <div className="pb-5">
            <input type="text" name='name' className="border border-gray-400 rounded-md w-full h-12" placeholder=' Your Full Name.......' />
          </div>
          <div className="py-2">
            <label htmlFor="" className=' text-md font-medium'>Email</label>
          </div>
          <div className="pb-5">
            <input type="email" name='email' className="border border-gray-400 rounded-md w-full h-12" placeholder=' Your Email' />
          </div>
          <div className="py-2">
            <label htmlFor="" className=' text-md font-medium'>Contact Number</label>
          </div>
          <div className="pb-5">
            <input type="number" name='number' className="border border-gray-400 rounded-md w-full h-12" placeholder=' Your Contact Number' />
          </div>
          <div className="py-3">
            <label htmlFor="" className=' text-md font-medium'>Subject</label>
          </div>
          <div className="pb-5">
            <textarea type="text" name='purpose' className="border border-gray-400 rounded-md w-full h-40" placeholder=' Your Message' />
          </div>
            <button onClick={sendAlert} className="w-40 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-green-500 transition duration-300 ease-out border-2 border-green-500 rounded shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-700 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="font-medium text-xl uppercase gap-2 absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">Submit</span>
                <span className="relative invisible font-medium text-md uppercase">Submit</span>
            </button>    
        </form>
      </div>
    </div>
  )
}

export default ContactUs
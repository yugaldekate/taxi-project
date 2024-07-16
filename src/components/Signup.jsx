import React from "react";

import toast from "react-hot-toast";

const Signup = () => {
  const sendAlert = () => {
    toast.success("Email Signup!");
  };

  return (
    <div className="bg-primaryBlue flex flex-col items-center max-h-[75%] px-2 py-4">
      <div className="mt-8 mb-4">
        <img 
          src="https://utfs.io/f/4f4bc7d0-42f7-4e01-8e8c-c430539d9e07-rjxnlm.png" 
          alt="Car Hire Valencia Logo" 
          className="w-40 h-36 md:w-60 md:h-56" 
        />
      </div>

      <div className="text-center text-2xl md:text-3xl text-white mb-2">
        Never Miss A Deal. Let’s Go.
      </div>

      <div className="text-center text-base md:text-lg text-white mb-4">
        The weather started getting rough the tiny ship was tossed if not for the courage
      </div>

      <div className="flex justify-center w-full max-w-3xl px-2 md:px-0 mb-8">
        <div className="flex items-center w-full gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              id="email"
              className="bg-white border border-white text-gray-800 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              placeholder="Enter Your E-mail..."
              required
            />
          </div>

          <button
            onClick={sendAlert}
            className="w-24 md:w-32 inline-flex items-center justify-center py-2 px-4 text-sm font-medium text-white bg-green-500 rounded-md border border-green-500 hover:bg-primaryBlue focus:ring-4 focus:outline-none focus:ring-green-500"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
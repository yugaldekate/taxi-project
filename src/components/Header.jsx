import React from 'react';

const Header = () => {
    return (
      <header className="shadow h-16 flex items-center justify-between px-4 md:px-8 lg:px-20 bg-white">
        <div className="flex items-center">
          <a href="/">
            <img className="hidden md:flex md:h-40 lg:h-42 w-auto" 
              src="https://utfs.io/f/4f4bc7d0-42f7-4e01-8e8c-c430539d9e07-rjxnlm.png" 
              alt="Car Hire Valencia Logo"
            />
          </a>
        </div>

        <nav className="flex items-center font-nunito text-sm md:text-md lg:text-md font-semibold space-x-2 md:space-x-4 lg:space-x-6">
          <a href="/" className="hover:bg-green-500 hover:text-white transition duration-300 py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4 rounded">
            Home
          </a>
          <a href="/about" className="hover:bg-green-500 hover:text-white transition duration-300 py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4 rounded">
            About Us
          </a>
          <a href="/services" className="hover:bg-green-500 hover:text-white transition duration-300 py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4 rounded">
            Services
          </a>
          <a href="/blog" className="hover:bg-green-500 hover:text-white transition duration-300 py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4 rounded">
            Blog
          </a>
          <a href="/contact" className="hover:bg-green-500 hover:text-white transition duration-300 py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4 rounded">
            Contact Us
          </a>
        </nav>
      </header>
    );
}

export default Header;
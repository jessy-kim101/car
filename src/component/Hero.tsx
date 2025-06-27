import React from 'react';
import { NavLink } from 'react-router-dom';

const error = () => {
  return (
   <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-green">
     {/* Main content */}
     <div className="container mx-auto px-4 py-20 lg:py-32">
       <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        {/* Left column - Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              DISCOUNTED VOUCHERS <br />
              <span className="text-primary">FOR SAFARI RALLY EXPERIENCE</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
             Book your dream car today and enjoy discounts in your journey in style.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NavLink to="/cars" >
                More information
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NavLink>
              <NavLink to="/contact">
                Help
              </NavLink>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="p-3 rounded-lg bg-gray-200 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary">tickets info</h3>
                <p className="text-sm text-gray-400">Support</p>
              </div>
              <div className="p-3 rounded-lg bg-gray-200 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary">Grabs</h3>
                <p className="text-sm text-gray-400">Contact us</p>
              </div>
              <div className="p-3 rounded-lg bg-gray-200 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary">Other services</h3>
                <p className="text-sm text-gray-400">Delivery</p>
              </div>
            </div>
          </div>

          {/* Right column - Car Image */}
          <div className="relative max-w-lg mx-auto lg:max-w-full">
            <div className="relative z-10 p-4">
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-primary/20 blur-2xl -z-10"></div>
            
            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-white/10 background-color:red">
              <div className="text-white">
                <p className="text-lg font-bold">Voucher tickets</p>
                <p className="text-xs opacity-75">Voucher information</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default error;

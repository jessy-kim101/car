
import React from "react";

const AboutPage = () => (
  <div className="w-full min-h-screen">
    {/* Adjust pt-16 (or higher) based on your navbar height */}
    <header className="w-full bg-gray-950 text-white py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center">About Us</h1>
      <p className="text-lg md:text-xl text-center">
        Safari Rally Ticket Vouchers
      </p>
    </header>


    <main className="px-4 md:px-12 lg">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-black">Our Mission</h2>
        <p className="text-base md:text-lg text-white-600 leading-relaxed">
          To offer accessible ticket vouchers for the Safari Rally, ensuring that every car enthusiast can experience the thrill of this iconic event.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
        <ul className="grid grid-cols-1">
          <li className="flex items-center space-x-2">
            <span>Affordable voucher tickets with unlimited grabs</span>
          </li>
          <li className="flex items-center space-x-2">
            
            <span>All time support </span>
          </li>
          <li className="flex items-center space-x-2">
            
            <span>Professional processing of voucher tickets</span>
          </li>
          <li className="flex items-center space-x-2">
            
            <span>Easily accessibility</span>
          </li>
          <li className="flex items-center space-x-2">
            
            <span>Everytime unlimited grabs</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-black-800 mb-4">Policy</h2>
        <p className="text-base md:text-lg text-black-600 leading-relaxed">
          We are committed to  ensure your booking voucher tickets is smooth and secure.
        </p>
      </section>

      <div className="text-center py-8 bg-blue-50 rounded-lg">
        <p className="text-xl md:text-2xl text-black-900 font-medium">
          Discover the thrill of enjoying the Safari Rally with our exclusive ticket vouchers!
        </p>
        <a
          href="/book"
          className="mt-6 inline-block bg-black-400"
        >
          Book Now
        </a>
      </div>
    </main>
  </div>
);

export default AboutPage;
import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-800 px-4">
      <div className="flex justify-between items-center text-white border-b-2 border-b-white">
        <h2>Naija news hub</h2>
        <div>
          <p>Follow us on Social Media</p>
          <div className="flex gap-1">
            <FaTwitter size={20} />
            <FaFacebookF size={20} />
            <FaLinkedinIn size={20} />
          </div>
        </div>
      </div>
      <div className=" text-gray-400 flex flex-wrap justify-between p-5">
        {/* Info Sections */}
        <div className="flex justify-between w-1/2 flex-wrap gap-8">
          <div className="space-y-2">
            <h2 className="text-[17px] hover:text-white cursor-pointer">
              ABOUT KONGA
            </h2>
            <ul className="space-y-3 text-sm ml-0">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Our Blog</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-[17px] hover:text-white cursor-pointer">
              PAYMENT
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">KongaPay</li>
              <li className="hover:text-white cursor-pointer">Wallet</li>
              <li className="hover:text-white cursor-pointer">Verve</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-[17px] hover:text-white cursor-pointer">
              BUYING ON KONGA
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">
                Buyer Safety Centre
              </li>
              <li className="hover:text-white cursor-pointer">
                Digital Services
              </li>
              <li className="hover:text-white cursor-pointer">Bulk Purchase</li>
            </ul>
          </div>
        </div>

        <div className="flex w-[300px] rounded-md overflow-hidden h-12 shadow-md">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-3 py-2 text-sm border-none outline-none"
          />
          <span className="bg-[#ff007b] text-white text-base font-bold px-4 py-2 cursor-pointer hover:bg-[#e6006e] transition">
            Subscribe
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} NaijaPulse Blog. All rights reserved.
      </p>
    </footer>
  );
}

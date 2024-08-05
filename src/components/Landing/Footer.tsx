import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#9da3a5] text-white py-4 px-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        
        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
          <p className="text-xs text-gray-400 md:text-sm">
            Copyright 2024 &copy; All Rights Reserved
          </p>
        </div>

        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
          <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
           
            <li className="mx-4">
              <Link to="/ESTAR-Privacy-Policy.pdf" className="text-gray-400 hover:text-white" target="_blank">
                Privacy Policy
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

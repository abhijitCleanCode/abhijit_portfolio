import React from "react";
import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa6";

const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon">
            <a href="https://github.com/abhijitCleanCode" target="_blank"><FaGithub size={30} color="#f5f5f5"/></a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/abhijit-singh-377117284/" target="_blank"><FaLinkedinIn size={30} color="#f5f5f5"/></a>
          </div>
          <div className="social-icon">
            <a href="https://leetcode.com/u/Mr_spongySpine/" target="_blank"><FaCode size={30} color="#f5f5f5"/></a>
          </div>
        </div>
  
        <p className="text-white-500">© 2024 Abhijit Singh. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  
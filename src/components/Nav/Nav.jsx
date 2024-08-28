import React from "react";
import logo from "../../assets/paw-print-pic.png";

const Nav = () => {
  return (
    <div className="bg-blue-400 px-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <img className="max-w-[70px]" src={logo} alt="" />
          <span className="text-white text-xl duration-500 hover:text-blue-800">
            Cartoonsarea web Scraper
          </span>
        </div>
        {/* <div>
          <a className="text-white hidden md:block" href="#">
            Cartoonsarea English Downloader
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;

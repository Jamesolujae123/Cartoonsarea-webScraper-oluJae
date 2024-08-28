import React from "react";
import { IoGiftSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { PiVideo } from "react-icons/pi";

const Benefits = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between py-24">
      <div className="flex flex-col items-center justify-center gap-5">
        <IoGiftSharp className="text-7xl" />
        <span className="text-3xl font-bold text-cyan-600">Free Download</span>
        <span>Unlimited conversion and free download.</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <PiVideo className="text-7xl" />
        <span className="text-3xl font-bold text-cyan-600">Video</span>
        <span>Directly download your anime Videos.</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <FaDownload className="text-7xl" />
        <span className="text-3xl font-bold text-cyan-600">Easy Download</span>
        <span>Fully compatible with all browsers.</span>
      </div>
    </div>
  );
};

export default Benefits;

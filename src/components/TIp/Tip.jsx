import React from "react";
import firstTipPic from "../../assets/tip-image.png";
import secTipPic from "../../assets/tip-image-2.png";
import animeside1 from "../../assets/anime-side-pic.avif";
import animeside2 from "../../assets/anime-side-ot-pic.jpg";
import animeside3 from "../../assets/pic.jpeg";

const Tip = () => {
  return (
    <div className="py-10">
      <div className=" flex flex-col gap-5">
        <div>
          <p>
            <span className="text-2xl font-bold">Tip:</span> Make sure the link
            resembles this format, the entire link, it currently works on only
            the english anime seasons. Development for the japanese series are
            underway
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <img
            className="max-h-[60px] max-w-[333px] md:max-w-[850px] object-cover"
            src={firstTipPic}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <img
            className="max-h-[60px] max-w-[333px] md:max-w-[850px] object-cover"
            src={secTipPic}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-6">
          <img className="md:max-w-80" src={animeside1} alt="" />
          <div className="flex flex-col gap-7">
            <span>
              If you can’t directly download video to your PC, please follow the
              guidelines below:
            </span>
            <span>Step1: Click the "Download" button.</span>
            <span>
              Step2: In the new window, click the three dots/ menu button to
              save video OR right click to video, then select "Save as Video".
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tip;

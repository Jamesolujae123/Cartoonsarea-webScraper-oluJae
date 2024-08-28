import React from "react";

const Instructions = () => {
  return (
    <div className="bg-[#f9f9f9] flex flex-col md:flex-row items-center md:justify-center md:items-center mt-5  justify-between px-10">
      <div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-start">
            Instructions
          </h2>
          <ol className="list-decimal text-lg">
            <li>paste the link of video you want to convert</li>
            <li>Click "Start" button to begin converting process</li>
            <li>
              Select the video format you want to download, then click
              "Download" button
            </li>
          </ol>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center md:text-start">
          Features
        </h2>
        <div>
          <ul className="mt-3 list-disc text-lg">
            <li>Unlimited downloads and always free</li>
            <li>High-speed video converter</li>
            <li>No registration required</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Instructions;

import React from 'react';
import ParticlesBackground from './particle/particleBackground';

export default function Main() {

  return (
    <div className="flex flex-row grow justify-around items-center  bg-black">
      {/* <ParticlesBackground /> */}
      <div className="w-1/2 h-full flex flex-col justify-center  space-y-12 items-center">
        <div className="flex w-full flex-col justify-center items-center space-y-4">
          <div className="flex flex-row space-x-1">
            <p className="text-4xl max-lg:text-xl max-xl:text-2xl max-2xl:text-3xl font-bold text-white">
              HAVE YOU SEEN THE TRUE POWER OF
            </p>
            <p className="text-4xl max-lg:text-xl max-xl:text-2xl max-2xl:text-3xl font-bold text-blueAi">AI</p>
            <p className="text-4xl max-lg:text-xl max-xl:text-2xl max-2xl:text-3xl font-bold text-white">?</p>
          </div>
          <p className="text-blueAi 2xl:text-xl font-bold">
            Solving 6 basic needs with artificial antelligence
          </p>
        </div>
        <button className="text-4xl max-lg:text-xl max-xl:text-2xl max-2xl:text-3xl font-bold bg-gradient-to-r from-blueAi to-purpleAi p-5 rounded-3xl">
          LEARN MORE
        </button>
      </div>
      <div className="w-1/2  h-full flex justify-center pr-4 items-center">
        <video src={require("./8.mp4")} controls={false} autoPlay={true} loop={true}></video>

      </div>
    </div>
  );
}

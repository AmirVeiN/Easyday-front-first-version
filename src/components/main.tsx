import React from 'react';
import ParticlesBackground from './particle/particleBackground';

export default function Main() {

  return (
    <div className="flex desktop:flex-row laptop:flex-row tablet:flex-col phone:flex-col p-2 justify-between bg-black ">
      {/* <div className=''>
        <ParticlesBackground />
      </div> */}
      <div className=" desktop:h-96 phone:w-full laptop:h-96 tablet:h-72 phone:h-72 desktop:p-5 laptop:p-5 phone:p-5 tablet:p-5 items-center desktop:w-1/2 laptop:w-1/2 tablet:w-full   justify-center flex flex-col ">
        <div className="flex items-center w-full tablet:w-80 phone:w-full  flex-col space-y-2 ">
          <p className="desktop:text-5xl text-center phone:w-full laptop:text-3xl tablet:text-4xl phone:text-3xl font-bold w-full  text-white inline">
            Have You Seen The True Power Of <p className="text-blueAi desktop:w-96 laptop:w-96 tablet:w-96 phone:w-96 inline">AI</p> ?
          </p>
          <p className="text-blueAi text-center desktop:w-full desktop:text-xl tablet:w-full tablet:text-[16px] laptop:w-full laptop:text-lg phone:w-full phone:text-lg inline ">
            maximum your life's potential with artificial intelligence
          </p>
        </div>
        <div className='w-full justify-center pt-5 flex items-center h-fit'>
          <button className="desktop:text-xl phone:w-48 laptop:text-xl desktop:w-52 tablet:w-48 tablet:p-4 desktop:p-4 phone:p-5 phone:text-xl laptop:w-40 laptop:p-3 rounded-3xl tablet:text-xl  text-white bg-blueAi/50 hover:opacity-80 ">
            White Paper
          </button>
        </div>
      </div>
      <div className="desktop:w-1/2 phone:p-5 laptop:p-5 desktop:p-5 phone:w-full phone:h-full laptop:w-4/6 tablet:w-full h-full flex justify-center tablet:p-5  items-center ">
        <video src={require("./8.mp4")} controls={false} autoPlay={true} loop={true}></video>

      </div>
    </div>
  );
}

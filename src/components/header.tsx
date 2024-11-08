// icons
import { useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  const [Menu, MenuHandler] = useState(false);
  return (
    <div className="flex flex-row justify-between w-full h-20 bg-black">
      <a href='#' className=" h-full  flex flex-row space-x-1 desktop:ml-8 laptop:ml-4 phone:ml-2 tablet:ml-2 items-center">
        <img src={"/logo.png"} alt="loading..." width={60} height={60} />
        <p className="desktop:text-2xl laptop:text-xl phone:text-lg tablet:text-lg text-white font-bold">EasyDay</p>
      </a>
      <div className="justify-between desktop:mr-5 laptop:mr-3 phone:w-5/12 tablet:w-3/12 laptop:w-9/12 items-center flex flex-row desktop:w-8/12 h-full">
        <button className="hover:text-cyan-300 tablet:hidden phone:hidden  text-white">Who We Are</button>
        <button className="hover:text-cyan-300 tablet:hidden phone:hidden  text-white">Commuity</button>
        <button className="hover:text-cyan-300 tablet:hidden phone:hidden  text-white">Roadmap</button>
        <button className="hover:text-cyan-300 tablet:hidden phone:hidden  text-white">Tokenomics</button>
        <a className='desktop:text-2xl laptop:text-xl tablet:text-xl phone:text-xl text-white hover:text-twitter' href='www.aparat.com' target="_blank" ><FaTwitter /></a>
        <a className='desktop:text-2xl laptop:text-xl tablet:text-xl phone:text-xl text-white hover:text-twitter' href='www.aparat.com' target="_blank"><FaTelegramPlane /></a>
        <button className="desktop:text-lg desktop:p-2 tablet:hidden phone:hidden tablet:rounded-lg desktop:rounded-xl font-medium laptop:text-lg laptop:rounded-xl laptop:p-2 text-white  bg-gradient-to-r from-purpleAi
         to-blueAi hover:from-blueAi hover:to-purpleAi ">
          Buy Now
        </button>
        <div onClick={() => MenuHandler((prev) => !prev)}>
          <button className={Menu ? " text-white laptop:hidden phone:visible phone:text-4xl phone:pr-3 desktop:hidden tablet:text-3xl tablet:pr-3 tablet:visible w-full bg-green-800 h-96 " : "w-full text-white laptop:hidden phone:text-4xl phone:pr-3 desktop:hidden phone:visible tablet:text-3xl tablet:pr-3 tablet:visible"}><GiHamburgerMenu />
            <button className="font-bold text-sm text-red tablet:hidden phone:hidden">Who We Are</button>
            <button className="font-bold text-sm text-red tablet:hidden phone:hidden">Commuity</button>
            <button className="font-bold text-sm text-red tablet:hidden phone:hidden">Roadmap</button>
            <button className="font-bold text-sm text-red tablet:hidden phone:hidden">Tokenomics</button>
          </button>
        </div>
      </div>
    </div>
  );
}

// icons
import { FaTwitter } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  return (
    <div className="flex flex-row justify-between w-full h-20 bg-black">
      <a href='#' className=" h-full  flex flex-row space-x-1 desktop:ml-8 laptop:ml-4 phone:ml-2 tablet:ml-2 items-center">
        <img src={"/logo.png"} alt="loading..." width={60} height={60} />
        <p className="desktop:text-2xl laptop:text-xl phone:text-lg tablet:text-lg text-white font-bold">EasyDay</p>
      </a>
      <div className="justify-between desktop:mr-5 laptop:mr-3 phone:w-5/12 tablet:w-3/12 laptop:w-9/12 items-center flex flex-row desktop:w-8/12 h-full">
        <button className="hover:border-b-2 tablet:hidden phone:hidden font-bold text-white">Who We Are</button>
        <button className="hover:border-b-2 tablet:hidden phone:hidden font-bold text-white">Commuity</button>
        <button className="hover:border-b-2 tablet:hidden phone:hidden font-bold text-white">Roadmap</button>
        <button className="hover:border-b-2 tablet:hidden phone:hidden font-bold text-white">Tokenomics</button>
        <a className='desktop:text-2xl laptop:text-xl tablet:text-xl phone:text-lg text-white hover:text-twitter' href='www.aparat.com' target="_blank" ><FaTwitter /></a>
        <a className='desktop:text-2xl laptop:text-xl tablet:text-xl phone:text-lg text-white hover:text-twitter' href='www.aparat.com' target="_blank"><FaTelegramPlane /></a>
        <button className="desktop:text-xl desktop:p-3 tablet:hidden phone:hidden tablet:rounded-lg desktop:rounded-xl font-bold laptop:text-lg laptop:rounded-xl laptop:p-2 text-white  bg-gradient-to-r from-blueAi
         to-purpleAi hover:from-purpleAi hover:to-blueAi ">
          Buy Now
        </button>
        <button className='text-white laptop:hidden phone:text-4xl phone:pr-3 desktop:hidden tablet:text-3xl tablet:pr-3 tablet:visible'><GiHamburgerMenu /></button>
      </div>
    </div>
  );
}

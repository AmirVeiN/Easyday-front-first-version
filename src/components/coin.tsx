export default function Coin() {
  return (
    <div className="w-full h-full  flex flex-col -space-y-1 bg-black">

      <img src={"/curve.png"} alt="loading" width={2000} height={100} />

      <div className="w-full h-full flex flex-col  bg-gradient-to-r  from-left to-right">
        <div className="w-full flex justify-end">
          <div className="desktop:w-1/2 laptop:w-1/2 tablet:w-1/2 phone:w-2/3 flex  justify-center relative">
            <div className="w-1/3 relative">
              <img
                className="absolute desktop:-top-24 laptop:-top-24 tablet:-top-20 phone:-top-10"
                src={"/bomb.png"}
                alt="Loading"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-row">
          <div className="w-full flex flex-col items-center">
            <div className="desktop:w-1/3 laptop:w-1/3 tablet:w-1/3 phone:w-1/3 relative">
              <img
                className="absolute desktop:-left-20 desktop:top-20 laptop:-left-12 laptop:top-14 tablet:-left-7 tablet:top-5 phone:-left-8 phone:top-7"
                src={"/coin.png"}
                alt="Loading"
              />
            </div>
            <div className="">
              <img
                className=""
                src={"/hand.png"}
                alt="Loading"

              />
            </div>
          </div>
          <div className="desktop:w-1/3 laptop:w-1/2 tablet:w-1/2 phone:w-1/3 flex desktop:min-h-full laptop:min-h-full
           desktop:flex-row desktop:mb-44 laptop:mb-44 laptop:flex-row tablet:flex-row pr-5 items-center ">
            <div className="flex justify-center w-full text-center items-center  ">
              <p className="desktop:text-5xl laptop:text-4xl tablet:text-2xl phone:text-lg text-white font-bold ">
                Combination of
                <p className="text-blueAi w-96 inline"> AI
                </p> and
                <p className="text-blueAi w-96 inline"> BlockChain
                </p> technology will change your life
              </p>

            </div>
          </div>

        </div>
      </div>


    </div>
  );
}

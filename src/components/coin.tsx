export default function Coin() {
  return (
    <div className="w-full h-full pt-10 flex flex-col -space-y-1 bg-black">
      <div className="z-20 w-full">
        <img src={"/curve.png"} alt="loading" width={2000} height={100} />
      </div>
      <div className="w-full h-full flex flex-col  bg-gradient-to-r z-20  from-left to-right">
        <div className="w-full flex justify-end">
          <div className="w-1/2 flex justify-center relative">
            <div className="w-1/3 relative">
              <img
                className="absolute -top-24"
                src={"/bomb.png"}
                alt="Loading"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-row">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="w-1/3 relative">
              <img
                className="absolute -left-8 top-10"
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
          <div className="w-1/2 flex flex-col justify-center space-y-12 items-center">
            <div className="flex flex-col justify-center text-center items-center space-y-4">
              <div className="flex flex-col">
                <p className="text-4xl max-lg:text-xl max-xl:text-2xl max-2xl:text-3xl font-bold text-white">DO YOU WANT TO</p>
                <p className="text-4xl max-lg:text-xl max-xl:text-2xl max-2xl:text-3xl font-bold text-white">BE PART OF OUR</p>
                <div className="flex flex-row space-x-3 justify-center items-center">
                  <p className="text-4xl max-lg:text-xl max-xl:text-2xl max-2xl:text-3xl font-bold text-purpleAi">COMMUNITY</p>
                </div>
              </div>
            </div>
            <button className="text-4xl max-lg:text-xl max-xl:text-2xl max-2xl:text-3xl font-bold bg-gradient-to-r flex from-blueAi to-purpleAi p-5 px-16 rounded-3xl">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* <div className="w-full h-full flex flex-row justify-between items-center ">
          <div className="flex flex-col justify-center pl-12 items-start space-y-8">
            <div className="flex flex-col space-y-6">
              <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blueAi to-purpleAi">
                RELATIONSHIP
              </h1>
              <div>
                <p className="text-5xl font-bold">
                  Want to attract your dream girl ?
                </p>
                <p className="text-5xl font-bold">
                  Tired of techniques and fake advices ?
                </p>
              </div>
            </div>
            <button className="text-4xl font-bold bg-gradient-to-r flex from-blueAi to-purpleAi p-5 px-20 rounded-3xl">
              LEARN MORE
            </button>
          </div>
          <div className="relative">
            <img
              className=""
              src={"/phone2.png"}
              alt="Loading"
              width={950}
              height={850}
            />
            <img
              className="absolute top-1 right-32"
              src={"/love.png"}
              alt="Loading"
              width={550}
              height={550}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

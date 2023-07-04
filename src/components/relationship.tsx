export default function Relationship() {
    return <div className="w-full h-full flex desktop:flex-row laptop:flex-row tablet:flex-col phone:flex-col justify-between items-center bg-gradient-to-r  from-left to-right ">
        <div className="flex flex-col items-center phone:hidden tablet:hidden desktop:w-5/12 laptop:w-5/12 tablet:w-full h-96  space-y-5">

            <div className="w-full desktop:ml-20 laptop:ml-10 space-y-5">
                <h1 className="font-bold text-transparent desktop:text-5xl laptop:text-4xl   bg-clip-text bg-gradient-to-r from-blueAi to-purpleAi">
                    RELATIONSHIP
                </h1>

                <p className="desktop:text-4xl laptop:text-3xl  items-center  flex  text-white ">
                    Want to attract your dream girl?
                    Tired of techniques and fake advices ?
                </p>


            </div>
            <div>
                <button className="desktop:text-2xl desktop:p-3  laptop:p-3 rounded-3xl laptop:w-36  desktop:w-48 
                 text-white items-center justify-center bg-gradient-to-r flex from-blueAi to-purpleAi hover:bg-gradient-to-r hover:from-purpleAi hover:to-blueAi ">
                    Learn More
                </button>
            </div>
        </div>
        <div className="desktop:w-7/12 laptop:w-7/12 tablet:w-full phone:w-full ">
            <div className="relative desktop:w-full laptop:w-full tablet:w-full phone:w-full">
                <img
                    className=""
                    src={"/phone2.png"}
                    alt="Loading"
                    width={8000}
                    height={850}
                />
                <img
                    className="absolute desktop:w-96 laptop:w-72 desktop:top-12 tablet:w-80 phone:w-48 tablet:top-12 tablet:right-20 desktop:right-20 laptop:top-12 laptop:right-20 phone:top-2 phone:right-12  "
                    src={"/love.png"}
                    alt="Loading"
                    width={5500}
                    height={550}
                />
            </div>
        </div>
        <div className="flex flex-col items-center tablet:w-full  tablet:visible  desktop:hidden laptop:hidden phone:visible tablet:p-5 phone:p-5 space-y-5">

            <div className="w-full  flex flex-col space-y-5 justify-center items-center text-center">
                <h1 className="font-bold w-full text-transparent phone:text-3xl tablet:text-4xl bg-clip-text bg-gradient-to-r from-blueAi to-purpleAi">
                    RELATIONSHIP
                </h1>

                <p className=" tablet:text-xl flex phone:text-lg justify-center items-center w-full text-white ">
                    Want to attract your dream girl?
                    Tired of techniques and fake advices ?
                </p>


            </div>
            <div className="w-full flex justify-center items-center">
                <button className=" rounded-xl tablet:w-36 tablet:p-2  phone:p-2 phone:text-xl tablet:text-xl text-xl 
                 text-white items-center justify-center bg-gradient-to-r flex from-blueAi to-purpleAi hover:bg-gradient-to-r hover:from-purpleAi hover:to-blueAi ">
                    Learn More
                </button>
            </div>
        </div>
    </div >
}

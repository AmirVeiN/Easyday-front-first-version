export default function Appearance() {
    return <div className="w-full h-full flex flex-row justify-between items-center bg-gradient-to-r  from-left to-right ">
        <div className="w-6/12">
            <div className="relative w-full ">
                <img
                    className=""
                    src={"/phone2.png"}
                    alt="Loading"
                    width={8000}
                    height={850}
                />
                <img
                    className="absolute desktop:w-96 desktop:top-12 desktop:right-20"
                    src={"/love.png"}
                    alt="Loading"
                    width={5500}
                    height={550}
                />
            </div>
        </div>
        <div className="flex flex-col items-center  w-5/12 h-96  space-y-5">

            <div className="w-full mr-20 space-y-3">
                <h1 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blueAi to-purpleAi">
                    Appearance
                </h1>

                <p className="text-4xl items-center  flex  text-white ">
                    The only thing you know about AI is just creating pointless images and chatting with bots? HaHa
                </p>


            </div>
            <div>
                <button className="text-2xl p-3  w-48 text-white items-center justify-center bg-gradient-to-r flex from-blueAi to-purpleAi  rounded-3xl">
                    Learn More
                </button>
            </div>
        </div>

    </div >
}

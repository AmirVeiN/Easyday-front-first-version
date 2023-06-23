export default function Relationship() {
    return <div className="w-full h-full flex flex-row justify-between items-center ">
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
    </div>
}

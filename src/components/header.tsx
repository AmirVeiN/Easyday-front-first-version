
export default function Header() {
  return (
    <div className="flex flex-row w-full h-24 bg-black">
      <div className="w-1/4 h-full flex flex-row space-x-3 justify-start pl-6 items-center">
        <img src={"/logo.png"} alt="loading..." width={60} height={60} />
        <p className="text-2xl font-bold text-white">EASYDAY</p>
      </div>
      <div className="justify-around items-center flex flex-row w-3/4 h-full">
        <button className="font-bold text-white">COMMUNITY</button>
        <button className="font-bold text-white">TEAM</button>
        <button className="border-b-2 font-bold text-white">PRE SALE</button>
        <button className="font-bold text-white">ROADMAP</button>
        <button className="font-bold text-white">ECOSYSTEM</button>
      </div>
    </div>
  );
}

import Image from "next/image";
import { useState, useEffect } from "react";

export function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      console.log(event.target)
      if (event.target.id !== "menu") {
        setShowMenu(false);
      }
    });
  }, []);

  return (
    <div className="z-50 bg-black text-white w-full md:h-full rounded-2xl px-8 py-2 md:py-12 min-w-[220px] md:max-w-[250px] md:overflow-y-scroll">
      <div className="flex md:flex-col justify-between h-full">
        <div>
          <h1 className="text-3xl font-semibold my-2 md:mb-12">Board.</h1>
          <div className="hidden md:block">
            <Menu />
          </div>
        </div>
        <div className="hidden md:flex mt-10 flex-col gap-4 text-gray-300">
          <a className="hover:text-white">Help</a>
          <a className="hover:text-white">Contact us</a>
        </div>
        <div className="relative my-auto md:hidden">
          <div
            className="flex flex-col p-2 gap-[6px]"
          >
            <span id="menu" onClick={() => setShowMenu(!showMenu)} className="absolute top-0 w-full h-full"></span>
            <span className="h-[4px] bg-white w-8 rounded-lg"></span>
            <span className="h-[4px] bg-white w-8 rounded-lg"></span>
            <span className="h-[4px] bg-white w-8 rounded-lg"></span>
          </div>
          <div
            className={`${
              showMenu ? "" : "hidden"
            } bg-black my-4 p-6 absolute -right-8 w-52 text-center rounded-2xl`}
          >
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="flex flex-col gap-8 [&>div>span]:font-sans">
      <div className="flex gap-3 items-center font-semibold">
        <Image
          src="/pie_icon.png"
          alt="chart icon"
          className="inline w-[18px] h-full"
          width="15"
          height="15"
        />
        <span>Dashboard</span>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          src="/transaction_icon.png"
          alt="chart icon"
          className="inline  w-[18px] h-full"
          width="15"
          height="15"
        />
        <span>Transactions</span>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          src="/schedule_icon.png"
          alt="chart icon"
          className="inline  w-[18px] h-full"
          width="15"
          height="15"
        />
        <span>Schedules</span>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          src="/user_icon.png"
          alt="chart icon"
          className="inline  w-[18px] h-full"
          width="15"
          height="15"
        />
        <span>Users</span>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          src="/setting_icon.png"
          alt="chart icon"
          className="inline w-[18px] h-full"
          width="15"
          height="15"
        />
        <span>Settings</span>
      </div>
    </div>
  );
}

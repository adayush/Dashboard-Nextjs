import { Graph, TopProducts, Schedule } from "@/components";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

export function Dashboard({ data, stats }) {
  const { data: session } = useSession();
  const [profileDropdown, setProfileDropdown] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (event.target.id !== "profile") {
        setProfileDropdown(false);
      }
    });
  }, []);

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col gap-6 p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <div className="flex gap-3 items-center">
          <input className="px-2 rounded-md" placeholder="Search..." />
          <div className="flex p-2">
            <Image src="/bell_icon.png" alt="bell icon" width="15" height="15" />
          </div>
          <div className="relative">
            <Image
              src={session.user.image}
              id="profile"
              onClick={() => setProfileDropdown(!profileDropdown)}
              className="h-7 rounded-full"
              alt="profile image"
              width="28"
              height="28"
            />
            <div
              className={`${
                profileDropdown ? "" : "hidden"
              } bg-white p-2 absolute right-0 mt-3 w-36 text-center rounded-lg`}
            >
              <p>{session.user.name}</p>
              <div className="my-1 border-b-2 border-gray-200"></div>
              <button
                className="text-left my-2"
                onClick={() => signOut({ callbackUrl: "/login" })}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#DDEFE0] rounded-2xl p-6">
          <div className="flex justify-end">
            <Image className="" src="/revenue.png" alt="revenue icon" width="24" height="24" />
          </div>
          <p className="text-sm">Total Revenues</p>
          <p className="text-xl font-bold">
            ${Intl.NumberFormat("en-US").format(stats[0].value)}
          </p>
        </div>
        <div className="bg-[#F4ECDD] rounded-2xl p-6">
          <div className="flex justify-end">
            <Image
              className=""
              src="/transaction_black.png"
              width="24"
              height="24"
              alt="transaction icon"
            />
          </div>
          <p className="text-sm">Total Transactions</p>
          <p className="text-xl font-bold">{Intl.NumberFormat("en-US").format(stats[1].value)}</p>
        </div>
        <div className="bg-[#EFDADA] rounded-2xl p-6">
          <div className="flex justify-end">
            <Image className="" src="/likes.png" alt="likes icon" width="24" height="24" />
          </div>
          <p className="text-sm">Total Likes</p>
          <p className="text-xl font-bold">{Intl.NumberFormat("en-US").format(stats[2].value)}</p>
        </div>
        <div className="bg-[#DEE0EF] rounded-2xl p-6">
          <div className="flex justify-end">
            <Image className="" src="/users.png" alt="users icon" width="24" height="24" />
          </div>
          <p className="text-sm">Total Users</p>
          <p className="text-xl font-bold">{Intl.NumberFormat("en-US").format(stats[3].value)}</p>
        </div>
      </div>
      <Graph data={data} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TopProducts data={data} />
        <Schedule />
      </div>
    </div>
  );
}

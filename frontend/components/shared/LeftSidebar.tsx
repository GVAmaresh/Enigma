"use client";

import Link from "next/link";
import { sidebarLinks } from "./../../constants/index";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          // if (link.route === "/profile") link.route = `/profile/${12}`;
          return (
            <div>
              <Link
                href={link.route}
                key={link.label}
                className={`leftsidebar_link ${isActive && "bg-purple-500"}`}
              >
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <p className="text-light-1 mx-lg:hidden">{link.label}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mt-10 px-6">
        <div className="flex cursor-pointer gap-4 p-4">
          <Link href={"/login"} key={"login"}>
            <Image
              src="./assets/logout.svg"
              alt="logout"
              width={24}
              height={24}
            />
            <p className="text-light-2 mx-lg:hidden">Login</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default LeftSidebar;

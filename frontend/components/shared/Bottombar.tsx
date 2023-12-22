"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { sidebarLinks } from "./../../constants/index";
function Bottombar() {
  const pathname = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container "></div>
    </section>
  );
}
export default Bottombar;

import React from "react";
import { menus } from "@/assets/menu";
import MenuItem from "./menuitem";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section className="">
      <header className="h-[10vh] shadow flex items-center gap-4 justify-between font-bold px-4">
        <Link href="/">
          <img className="w-1/2" src="/shopify.png" alt="" />
        </Link>
      </header>
      <section className="pl-2 h-[84vh] flex flex-col justify-between transition-height duration-300">
        <div className="overflow-x-auto">
          <ul className="my-4">
            {menus.map((menu, index) => (
              <MenuItem key={index} {...{ menu }} />
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Sidebar;

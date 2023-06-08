import Link from "next/link";
import React from "react";
import { navData } from "./data";
import { useRouter } from "next/router";

export default function BottomNavigation() {
  const router = useRouter();
  return (
    <section className="lg:hidden block fixed bottom-0 inset-x-0 z-50 text-gray-800  nc-header-bg shadow-sm dark:border-b dark:border-neutral-900 border-t-2 border-royal/20">
      <div id="tabs" className="flex justify-between">
        {navData.map((row, index) => (
          <Link
            key={index}
            href={row.route}
            className={`w-full focus:text-royal hover:text-royal flex flex-col justify-center items-center text-center pt-2 pb-1 dark:text-white ${
              router.asPath == row.route
                ? "!font-semibold  bg-neutral-100 dark:bg-neutral-800"
                : ""
            } `}
            activeClass="dark:text-gray-100 text-black dark:text-white"
          >
            {router.asPath == row.route ? row.activeIcon : row.icon}
            <span className="tab block text-xs">{row.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

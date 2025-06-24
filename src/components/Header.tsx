"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SideMenu } from "./SideMenu";
import { navigation } from "@/data";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="shadow border px-6 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-pink-600">
        Artistly<span className="text-gray-900 text-xl">.com</span>
      </h1>

      <nav className="space-x-10 font-medium invisible md:visible">
        {navigation.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "hover:text-pink-600",
              pathname === href ? "text-pink-600" : "text-gray-800"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
      <SideMenu />
    </header>
  );
}

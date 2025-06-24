"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navigation } from "@/data";

export function SideMenu() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden cursor-pointer">
          <Menu className="w-14 h-14 text-pink-600" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-pink-600 text-xl mb-4">
            Artistly<span className="text-gray-900 text-sm">.com</span>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-4 mt-4 pl-6">
          {navigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-base font-medium hover:text-pink-600 transition",
                pathname === href ? "text-pink-600" : "text-gray-800"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

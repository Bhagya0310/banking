'use client';

import { SheetContent } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full max-w-[264px]">
      <button onClick={() => setIsOpen(true)}>
        <Image
          src="/icons/hamburger.svg"
          width={30}
          height={30}
          alt="menu"
          className="cursor-pointer"
        />
      </button>
      {isOpen && (
        <SheetContent className="border-none bg-white fixed inset-y-0 left-0 w-3/4 sm:max-w-sm p-6 shadow-lg">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <span className="sr-only">Close</span>
          </button>
          <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
            <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
          </Link>
          <nav className="flex h-full flex-col gap-6 pt-16 text-white">
            {sidebarLinks.map((item) => {
              const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

              return (
                <Link
                  key={item.route}
                  href={item.route}
                  className={cn("mobilenav-sheet_close w-full", { "bg-bank-gradient": isActive })}
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={cn({ "brightness-[3] invert-0": isActive })}
                  />
                  <p className={cn("text-16 font-semibold text-black-2", { "text-white": isActive })}>
                    {item.label}
                  </p>
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      )}
    </section>
  );
};

export default MobileNav;


"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { navLinks } from "@/shared/constants/navLinks";
import { cn } from "@/shared/utils/cn";
import { Menu, X } from "lucide-react";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <LazyMotion features={domAnimation}>
      <Dialog modal>
        <DialogTrigger asChild className="group">
          <button
            className="md:hidden group text-primary-dark focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={24} className="block text-primary-dark" />
          </button>
        </DialogTrigger>
        <DialogContent className="fixed top-0 left-0 w-screen h-screen p-0 bg-transparent flex flex-col">
          <m.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.2, delay: 0, ease: "easeIn" }}
            className="bg-primary-dark/80 py-4 h-full pl-6 pr-2 backdrop-blur-sm backdrop-saturate-[100%]"
          >
            <DialogHeader className="flex justify-between items-center flex-row mb-4">
              <DialogTitle></DialogTitle>
              <DialogClose asChild>
                <button className="focus:outline-none rounded-full h-10 w-10 flex items-center justify-center">
                  <X size={28} className="text-primary-light" />
                </button>
              </DialogClose>
            </DialogHeader>
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map(link => (
                <DialogClose asChild key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "font-bold text-xl uppercase transition-colors py-2",
                      isActive(link.href) ? "text-white" : "text-primary-light hover:text-white"
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </DialogClose>
              ))}
            </nav>
          </m.div>
        </DialogContent>
      </Dialog>
    </LazyMotion>
  );
};

export default MobileMenu;

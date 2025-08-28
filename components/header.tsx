"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { NAV_ITEMS } from "@/constants";
import { IoSearchSharp } from "react-icons/io5";
import Image from "next/image";

const NavLinks = ({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) => (
  <>
    {NAV_ITEMS.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className={className}
        onClick={onClick}
      >
        {link.label}
      </Link>
    ))}
  </>
);

const AuthButtons = () => (
  <div className="flex items-center gap-5 md:gap-6">
    <Link href={"/events"}>
      <IoSearchSharp color="black" className="size-6 cursor-pointer" />
    </Link>
    <SignedOut>
      <SignInButton mode="modal">
        <Button size="sm" className="px-4 max-sm:py-5 md:px-8">Sign In</Button>
      </SignInButton>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </div>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // ✅ control sheet

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        scrolled ? "bg-background/95 shadow-md" : "bg-background/95"
      )}
    >
      <div className="container relative flex h-18 items-center justify-between">
        {/* Left side: Logo + Hamburger (mobile only) */}
        <div className="flex items-center gap-2">
          {/* Hamburger (mobile only) */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="flex lg:hidden" aria-label="Open Menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 sm:w-80">
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src="/assets/logo-black.png"
                    alt="Logo"
                    width={60}
                    height={40}
                    className="object-contain -mt-4"
                  />
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Nav */}
              <div className="flex flex-col space-y-4 mt-6">
                <NavLinks
                  onClick={() => setOpen(false)} // ✅ close sheet on click
                  className="text-lg font-medium hover:text-primary px-2 py-1"
                />
              </div>


            </SheetContent>
          </Sheet>

          {/* Logo (always visible) */}
          <Link href="/">
            <Image
              src="/assets/logo-black.png"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Center Nav (desktop only, absolutely centered) */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8">
          <NavLinks className="text-base font-semibold text-gray-600 transition-colors hover:text-primary p-2 !tracking-normal" />
        </nav>

        {/* Right side: Auth */}
        <div className="flex items-center gap-2">
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}

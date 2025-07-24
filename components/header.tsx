"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { NAV_ITEMS } from "@/constants";
import { IoSearchSharp } from "react-icons/io5";

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
  <div className="hidden md:flex items-center gap-4 min-w-[160px] justify-end">
    <Link href={"/events"}>
      <IoSearchSharp color="black" className="size-6 mr-2 cursor-pointer" />
    </Link>
    <SignedOut>
      <SignInButton />
      <SignUpButton>
        <Button>Sign Up</Button>
      </SignUpButton>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </div>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        scrolled ? "bg-background/95 shadow-md" : "bg-background/95"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-2xl font-bold bg-gradient-to-r from-purple-dark via-purple to-gold bg-clip-text text-transparent"
        >
          Karang Events
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" />
        </nav>

        {/* Auth */}
        <AuthButtons />

        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
          isMenuOpen ? "fade-in-0" : "hidden"
        )}
      >
        <div className="flex flex-col space-y-4">
          <NavLinks
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-primary"
          />

          <div className="pt-4 flex flex-col gap-2">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" className="w-full justify-start">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="w-full justify-start">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}

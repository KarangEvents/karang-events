"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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
        "sticky top-0 z-50 w-full  backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        scrolled ? "bg-background/95 shadow-md" : "bg-background/95"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold bg-gradient-to-r from-purple-dark via-purple to-gold bg-clip-text text-transparent">
              Karang Events
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Events
          </Link>
          <Link
            href="/showcase"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Showcase
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

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

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
          isMenuOpen ? "fade-in-0" : "hidden"
        )}
      >
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/events"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/showcase"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Showcase
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/faq"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-4 flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">Login as:</p>
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
              >
                User Login
              </Button>
            </Link>
            <Link href="/vendor/login" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
              >
                Vendor Login
              </Button>
            </Link>
            <Link href="/admin/login" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
              >
                Admin Login
              </Button>
            </Link>
            <div className="pt-2">
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";

import Image from "next/image";
import { APP_LINKS, QUICK_LINKS, RESOURCES, SOCIAL_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/assets/footer-bg.jpg ')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative container-custom py-16 container">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo and App Downloads */}
          <div className="lg:col-span-1">
            {/* Karang Logo */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src="/assets/logo.png"
                  alt="Karang Events Logo"
                  width={120}
                  height={50}
                  className="w-24 h-auto"
                />
              </div>
              <p className="text-gray-300 text-sm font-medium">
                Events That Speak Your Story
              </p>
            </div>

            {/* App Download Buttons */}
            <div className="space-y-3">
              {APP_LINKS.map(
                ({ href, labelTop, labelBottom, icon: Icon }, i) => (
                  <Link href={href} key={i} className="block">
                    <div className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition-colors">
                      <div className="w-8 h-8">
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">{labelTop}</div>
                        <div className="text-sm font-semibold">
                          {labelBottom}
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">
              QUICK LINKS
            </h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map(({ href, label }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">FEATURES</h3>
            <ul className="space-y-4">
              {RESOURCES.map(({ href, label }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div className="lg:col-span-1"></div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-2 sm:space-y-0 text-sm text-gray-300">
              <div>
                <span className="font-medium">Email:</span> events@karang.com
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              {SOCIAL_LINKS.map(({ href, icon: Icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">Copyright © 2025</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

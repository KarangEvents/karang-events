import Link from "next/link";
import Image from "next/image";
import { APP_LINKS, QUICK_LINKS, RESOURCES, SOCIAL_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden py-14">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/assets/footer-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Tagline + App Buttons */}
          <div>
            <div className="mb-4">
              <Image
                src="/assets/logo-white.png"
                alt="Karang Events Logo"
                width={120}
                height={50}
                className="w-24 h-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Events That Speak Your Story
            </p>
            <div className="space-y-3">
              {APP_LINKS.map(
                ({ href, labelTop, labelBottom, icon: Icon }, i) => (
                  <Link href={href} key={i} className="block w-[70%]">
                    <div
                      className="flex items-center space-x-3 
                     bg-black/50 hover:bg-black/70
                     ring-2
                    rounded-lg p-3 transition"
                    >
                      <div className="size-6">
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
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map(({ href, label }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white text-sm transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              {RESOURCES.map(({ href, label }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white text-sm transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Get in Touch
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              <span className="font-medium">Email:</span>{" "}
              <Link href="mailto:Karangevents@gmail.com">
                Karangevents@gmail.com
              </Link>
            </p>
            <p className="text-sm text-gray-300 mb-4">
              <span className="font-medium">Phone:</span>{" "}
              <Link
                href="tel:+917019872097"
                className="text-gray-400 hover:text-white transition"
              >
                +917019872097
              </Link>
            </p>
            <div className="flex space-x-5">
              {SOCIAL_LINKS.map(({ href, icon: Icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="text-gray-400 hover:text-white transition"
                >
                  <Icon className="size-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-sm text-gray-400 text-center">
          <span>© 2025 Karang Events. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

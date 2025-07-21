import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const socialLinks = [
  { href: "#", icon: FiFacebook },
  { href: "https://www.instagram.com/karang_events", icon: FiInstagram },
  { href: "#", icon: FiTwitter },
  { href: "#", icon: FiLinkedin },
  { href: "#", icon: FiYoutube },
];

const quickLinks = [
  { href: "/", label: "Events" },
  { href: "/", label: "About Us" },
  { href: "/", label: "Showcase" },
  { href: "/", label: "Contact" },
  { href: "/", label: "FAQ" },
];

const resources = [
  { href: "/", label: "Blog" },
  { href: "/", label: "Help Center" },
  { href: "/", label: "Privacy Policy" },
  { href: "/", label: "Terms of Service" },
];

const appLinks = [
  {
    href: "#",
    labelTop: "Download on the",
    labelBottom: "App Store",
    icon: FaApple,
  },
  {
    href: "#",
    labelTop: "Get it on",
    labelBottom: "Google Play",
    icon: IoLogoGooglePlaystore,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold">Karang Events</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sophisticated event management platform for customers and vendors.
              Creating memorable experiences through meticulous planning and
              flawless execution.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon: Icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map(({ href, label }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Downloads */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get Our App</h3>
            <div className="space-y-3">
              {appLinks.map(
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
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Karang Events. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

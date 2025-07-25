import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import {
  MdOutlineFestival,
  MdCorporateFare,
  MdWhereToVote,
} from "react-icons/md";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Showcase", href: "/" },
  { label: "About", href: "/" },
  { label: "FAQ", href: "/" },
  { label: "Contact", href: "/" },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Event Organizer",
    content:
      "Karang Events made our corporate event seamless and memorable. Their attention to detail is unmatched.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Wedding Planner",
    content:
      "The platform's features helped us coordinate a perfect wedding. Highly recommend for any event planning needs.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Conference Manager",
    content:
      "Professional service and excellent support. Karang Events exceeded our expectations in every way.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "David Smith",
    role: "Festival Director",
    content:
      "Their platform is user-friendly and the team is always ready to assist. A great partner for our annual festival.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    name: "Laura Kim",
    role: "Non-Profit Coordinator",
    content:
      "We successfully organized our charity event with Karang Events. Their tools made everything so much easier.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

const SUCCESS_STORIES = [
  {
    id: 1,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
  {
    id: 2,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
  {
    id: 3,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
];

// Sample data
const FEATURED_EVENTS = [
  {
    id: 1,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
  {
    id: 2,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
  {
    id: 3,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
  {
    id: 4,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
  {
    id: 5,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
  {
    id: 6,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
];

//Footer
const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61573190107120&mibextid=ZbWKwL",
    icon: FiFacebook,
  },
  { href: "https://www.instagram.com/karang_events", icon: FiInstagram },
  { href: "#", icon: FiTwitter },
  {
    href: "https://www.linkedin.com/in/karang-events-46624234a",
    icon: FiLinkedin,
  },
  { href: "#", icon: FiYoutube },
];

const QUICK_LINKS = [
  { href: "/", label: "Events" },
  { href: "/", label: "About Us" },
  { href: "/", label: "Showcase" },
  { href: "/", label: "Contact" },
  { href: "/", label: "FAQ" },
];

const RESOURCES = [
  { href: "/", label: "Blog" },
  { href: "/", label: "Help Center" },
  { href: "/", label: "Privacy Policy" },
  { href: "/", label: "Terms of Service" },
];

const APP_LINKS = [
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

// Service data for the Services component in home page
const SERVICE_DATA = [
  {
    title: "Corporate Events",
    description:
      "Professional conferences, product launches, and corporate gatherings designed to impress and engage.",
    Icon: MdCorporateFare,
    iconBg: "#DAC5FB",
    gradient:
      "linear-gradient(360deg, rgba(91, 33, 182, 0.19) 0%, rgba(255, 255, 255, 0.19) 100%)",
    iconClassName: "text-black",
  },
  {
    title: "Social Celebrations",
    description:
      "Weddings, anniversaries, birthdays, and milestone celebrations crafted with personal touches.",
    Icon: MdOutlineFestival,
    iconBg: "#EFC69B",
    gradient:
      "linear-gradient(360deg, rgba(239, 198, 155, 0.19) 0%, rgba(255, 255, 255, 0.19) 100%)",
    iconClassName: "text-black",
  },
  {
    title: "Venue Selection",
    description:
      "Access to exclusive venues and comprehensive event management services tailored to your needs.",
    Icon: MdWhereToVote,
    iconBg: "#9C9B9E",
    gradient: "linear-gradient(180deg, #FFFFFF 0%, #D1CED6 100%)",
    iconClassName: "text-white",
  },
];
export {
  NAV_ITEMS,
  TESTIMONIALS,
  SUCCESS_STORIES,
  FEATURED_EVENTS,
  SOCIAL_LINKS,
  QUICK_LINKS,
  RESOURCES,
  APP_LINKS,
  SERVICE_DATA,
};

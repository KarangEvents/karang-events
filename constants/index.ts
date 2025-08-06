import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
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
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
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
  { href: "https://x.com/karang1942131?s=21", icon: FaXTwitter },
  {
    href: "https://www.linkedin.com/in/karang-events-46624234a",
    icon: FiLinkedin,
  },
  {
    href: "https://youtube.com/@karang-n1u?si=qHNb_4f_Y6O3un76",
    icon: FiYoutube,
  },
];

const QUICK_LINKS = [
  { href: "/events", label: "Events" },
  { href: "/about", label: "About Us" },
  { href: "/showcase", label: "Showcase" },
  { href: "/faq", label: "FAQ" },
];

const RESOURCES = [
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cancellation-and-refunds", label: "Cancellation & Refunds Policy" },
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

// FAQ data structure
const FAQ_CATEGORIES = [
  {
    title: "General Questions",
    items: [
      {
        question: "What is Karang Events?",
        answer:
          "Karang Events is a sophisticated event management platform that connects customers with premium event services and vendors. We offer a wide range of event packages from corporate galas to weddings and private celebrations.",
      },
      {
        question: "How do I create an account?",
        answer:
          "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Fill in your details, select your account type (User, Vendor, or Organization), and follow the prompts to complete your registration.",
      },
      {
        question: "Is Karang Events available in my city?",
        answer:
          "Karang Events currently operates in major metropolitan areas across the country. You can check availability in your location by entering your city in the search bar on our events page.",
      },
    ],
  },
  {
    title: "Booking & Payments",
    items: [
      {
        question: "How do I book an event?",
        answer:
          "To book an event, browse our event listings and select the one that interests you. Click on 'Book Now', select your preferred date and time, and proceed to checkout. You'll receive a confirmation email once your booking is complete.",
      },
      {
        question: "Can I customize an event package?",
        answer:
          "Yes, many of our event packages can be customized to suit your specific requirements. When viewing an event, look for the 'Customization Options' section or contact the vendor directly to discuss your needs.",
      },
      {
        question: "What payment methods do you support?",
        answer:
          "We accept all major credit and debit cards, UPI payments, net banking, and digital wallets. For corporate bookings, we also offer invoice-based payments with terms.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Cancellation policies vary by vendor and event type. The specific policy for each event is clearly displayed on the event details page before booking. Generally, cancellations made 30+ days before the event date receive a full refund, while those made 15-29 days before receive a 50% refund.",
      },
    ],
  },

  {
    title: "Technical Support",
    items: [
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          "Click on 'Login' and then select 'Forgot Password'. Enter your registered email address, and we'll send you instructions to reset your password.",
      },
      {
        question: "The website isn't working properly. What should I do?",
        answer:
          "Try clearing your browser cache and cookies, or try using a different browser. If the issue persists, please contact our support team with details of the problem and screenshots if possible.",
      },
      {
        question: "How do I update my profile information?",
        answer:
          "Log in to your account, click on your profile icon in the top right corner, and select 'Profile Settings'. Here, you can update your personal information, change your password, and manage your notification preferences.",
      },
    ],
  },
];

// Events

// Sample data for events
const EVENTS_DATA = [
  {
    id: 1,
    title: "Corporate Gala Dinner",
    image: "/placeholder.svg?height=400&width=600",
    date: "June 15, 2023",
    location: "Grand Hyatt, New York",
    city: "New York",
    price: "$1,200",
    rating: 4.8,
    category: "Corporate",
  },
  {
    id: 2,
    title: "Wedding Reception Package",
    image: "/placeholder.svg?height=400&width=600",
    date: "Flexible Dates",
    location: "Beachfront Resort, Miami",
    city: "Miami",
    price: "$3,500",
    rating: 4.9,
    category: "Wedding",
  },
  {
    id: 3,
    title: "Tech Conference Setup",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 10-12, 2023",
    location: "Convention Center, San Francisco",
    city: "San Francisco",
    price: "$5,000",
    rating: 4.7,
    category: "Conference",
  },
  {
    id: 4,
    title: "Birthday Celebration Package",
    image: "/placeholder.svg?height=400&width=600",
    date: "Customizable",
    location: "Various Venues, Delhi",
    city: "Delhi",
    price: "$800",
    rating: 4.6,
    category: "Birthday",
  },
  {
    id: 5,
    title: "Charity Fundraiser Gala",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 5, 2023",
    location: "Luxury Hotel, Chicago",
    city: "Chicago",
    price: "$2,500",
    rating: 4.5,
    category: "Charity",
  },
  {
    id: 6,
    title: "Product Launch Event",
    image: "/placeholder.svg?height=400&width=600",
    date: "July 22, 2023",
    location: "Modern Gallery, Los Angeles",
    city: "Los Angeles",
    price: "$4,200",
    rating: 4.8,
    category: "Corporate",
  },
  {
    id: 7,
    title: "Anniversary Celebration",
    image: "/placeholder.svg?height=400&width=600",
    date: "Customizable",
    location: "Rooftop Restaurant, Seattle",
    city: "Seattle",
    price: "$1,800",
    rating: 4.7,
    category: "Anniversary",
  },
  {
    id: 8,
    title: "Music Festival Production",
    image: "/placeholder.svg?height=400&width=600",
    date: "August 18-20, 2023",
    location: "Outdoor Park, Austin",
    city: "Austin",
    price: "$12,000",
    rating: 4.9,
    category: "Festival",
  },
  {
    id: 9,
    title: "Corporate Retreat",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 5-7, 2023",
    location: "Mountain Resort, Denver",
    city: "Denver",
    price: "$9,500",
    rating: 4.7,
    category: "Corporate",
  },
  {
    id: 10,
    title: "Wedding Ceremony Package",
    image: "/placeholder.svg?height=400&width=600",
    date: "Flexible Dates",
    location: "Garden Venue, Bengaluru",
    city: "Bengaluru",
    price: "$2,800",
    rating: 4.8,
    category: "Wedding",
  },
  {
    id: 11,
    title: "Tech Startup Meetup",
    image: "/placeholder.svg?height=400&width=600",
    date: "July 15, 2023",
    location: "Innovation Hub, Bengaluru",
    city: "Bengaluru",
    price: "$1,200",
    rating: 4.6,
    category: "Conference",
  },
  {
    id: 12,
    title: "Cultural Festival",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 22-24, 2023",
    location: "Heritage Center, Delhi",
    city: "Delhi",
    price: "$3,500",
    rating: 4.9,
    category: "Festival",
  },
];

// Available cities for filter
const EVENT_CITIES = [
  "All Cities",
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "New York",
  "Miami",
  "San Francisco",
  "Chicago",
  "Los Angeles",
  "Seattle",
  "Austin",
  "Denver",
];

// Available categories for filter
const EVENT_CATEGORIES = [
  "All Categories",
  "Corporate",
  "Wedding",
  "Conference",
  "Birthday",
  "Charity",
  "Anniversary",
  "Festival",
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
  FAQ_CATEGORIES,
  EVENTS_DATA,
  EVENT_CITIES,
  EVENT_CATEGORIES,
};

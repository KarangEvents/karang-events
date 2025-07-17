"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Calendar,
  Download,
  Filter,
  Home,
  MoreHorizontal,
  PieChart,
  Search,
  Settings,
  Users,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for events
const events = [
  {
    id: 1,
    title: "Corporate Gala Dinner",
    vendor: "Elite Events Co.",
    date: "June 15, 2023",
    location: "Grand Hyatt, New York",
    status: "Active",
    bookings: 3,
  },
  {
    id: 2,
    title: "Wedding Reception Package",
    vendor: "Dream Weddings",
    date: "Flexible Dates",
    location: "Beachfront Resort, Miami",
    status: "Active",
    bookings: 5,
  },
  {
    id: 3,
    title: "Tech Conference Setup",
    vendor: "TechEvents Pro",
    date: "September 10-12, 2023",
    location: "Convention Center, San Francisco",
    status: "Draft",
    bookings: 0,
  },
  {
    id: 4,
    title: "Birthday Celebration Package",
    vendor: "Party Planners Inc.",
    date: "Customizable",
    location: "Various Venues",
    status: "Active",
    bookings: 2,
  },
  {
    id: 5,
    title: "Charity Fundraiser Gala",
    vendor: "Elite Events Co.",
    date: "November 5, 2023",
    location: "Luxury Hotel, Chicago",
    status: "Inactive",
    bookings: 0,
  },
]

// Sample data for vendors
const vendors = [
  {
    id: 1,
    name: "Elite Events Co.",
    email: "contact@eliteevents.com",
    phone: "+1 (555) 123-4567",
    events: 12,
    rating: 4.9,
    status: "Verified",
  },
  {
    id: 2,
    name: "Dream Weddings",
    email: "info@dreamweddings.com",
    phone: "+1 (555) 987-6543",
    events: 8,
    rating: 4.7,
    status: "Verified",
  },
  {
    id: 3,
    name: "TechEvents Pro",
    email: "support@techevents.pro",
    phone: "+1 (555) 456-7890",
    events: 5,
    rating: 4.5,
    status: "Pending",
  },
  {
    id: 4,
    name: "Party Planners Inc.",
    email: "hello@partyplanners.com",
    phone: "+1 (555) 789-0123",
    events: 15,
    rating: 4.8,
    status: "Verified",
  },
]

// Sample data for users
const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    role: "User",
    bookings: 3,
    joined: "Jan 15, 2023",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    role: "User",
    bookings: 1,
    joined: "Mar 22, 2023",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@example.com",
    role: "Vendor",
    bookings: 0,
    joined: "Feb 10, 2023",
    status: "Active",
  },
  {
    id: 4,
    name: "Jessica Williams",
    email: "j.williams@example.com",
    role: "Admin",
    bookings: 0,
    joined: "Dec 5, 2022",
    status: "Active",
  },
]

// Sample data for bookings
const bookings = [
  {
    id: 1,
    event: "Corporate Gala Dinner",
    client: "Acme Corporation",
    vendor: "Elite Events Co.",
    date: "June 15, 2023",
    amount: "$3,600",
    status: "Confirmed",
  },
  {
    id: 2,
    event: "Wedding Reception Package",
    client: "John & Sarah Smith",
    vendor: "Dream Weddings",
    date: "July 8, 2023",
    amount: "$5,250",
    status: "Pending",
  },
  {
    id: 3,
    event: "Birthday Celebration Package",
    client: "Michael Johnson",
    vendor: "Party Planners Inc.",
    date: "June 22, 2023",
    amount: "$1,200",
    status: "Confirmed",
  },
  {
    id: 4,
    event: "Corporate Retreat",
    client: "Tech Innovations LLC",
    vendor: "Elite Events Co.",
    date: "August 10-12, 2023",
    amount: "$8,500",
    status: "Pending",
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-shrink-0 border-r bg-midnight-dark text-white md:flex md:flex-col">
        <div className="flex h-16 items-center border-b border-midnight px-6">
          <Link href="/admin/dashboard" className="flex items-center">
            <span className="font-serif text-xl font-bold text-white">Admin Portal</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          <Link
            href="/admin/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              activeTab === "dashboard" ? "bg-purple text-white" : "text-gray-300 hover:bg-midnight hover:text-white"
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/admin/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              activeTab === "events" ? "bg-purple text-white" : "text-gray-300 hover:bg-midnight hover:text-white"
            }`}
            onClick={() => setActiveTab("events")}
          >
            <Calendar className="h-5 w-5" />
            All Events
          </Link>
          <Link
            href="/admin/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              activeTab === "vendors" ? "bg-purple text-white" : "text-gray-300 hover:bg-midnight hover:text-white"
            }`}
            onClick={() => setActiveTab("vendors")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Vendors
          </Link>
          <Link
            href="/admin/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              activeTab === "users" ? "bg-purple text-white" : "text-gray-300 hover:bg-midnight hover:text-white"
            }`}
            onClick={() => setActiveTab("users")}
          >
            <Users className="h-5 w-5" />
            Users
          </Link>
          <Link
            href="/admin/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              activeTab === "bookings" ? "bg-purple text-white" : "text-gray-300 hover:bg-midnight hover:text-white"
            }`}
            onClick={() => setActiveTab("bookings")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Bookings
          </Link>
          <Link
            href="/admin/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              activeTab === "analytics" ? "bg-purple text-white" : "text-gray-300 hover:bg-midnight hover:text-white"
            }`}
            onClick={() => setActiveTab("analytics")}
          >
            <BarChart className="h-5 w-5" />
            Analytics
          </Link>
          <Link
            href="/admin/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              activeTab === "settings" ? "bg-purple text-white" : "text-gray-300 hover:bg-midnight hover:text-white"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
        <div className="mt-auto border-t border-midnight p-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=40&width=40" alt="Admin avatar" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Jessica Williams</p>
              <p className="text-xs text-gray-400">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-6">
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <form className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="w-[200px] pl-8 md:w-[300px]" />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Help
            </Button>
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="p-6">
          <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h1 className="font-serif text-3xl font-bold text-midnight-dark">Admin Dashboard</h1>
                  <p className="text-muted-foreground">
                    Welcome back, Jessica. Here's what's happening with Karang Events.
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Button className="bg-purple hover:bg-purple-dark">
                    <Download className="mr-2 h-4 w-4" /> Export Reports
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">128</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Active Vendors</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+3 new this month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$124,580</div>
                    <p className="text-xs text-muted-foreground">+18.2% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">573</div>
                    <p className="text-xs text-muted-foreground">+42 from last month</p>
                  </CardContent>
                </Card>
              </div>

              {/* Analytics Charts */}
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="px-2">
                    <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                      <BarChart className="h-16 w-16 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Revenue Chart Placeholder</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Booking Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="px-2">
                    <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
                      <PieChart className="h-16 w-16 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Distribution Chart Placeholder</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Bookings */}
              <div>
                <h2 className="font-serif text-xl font-bold mb-4">Recent Bookings</h2>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Event</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Vendor</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookings.slice(0, 5).map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">{booking.event}</TableCell>
                          <TableCell>{booking.client}</TableCell>
                          <TableCell>{booking.vendor}</TableCell>
                          <TableCell>{booking.date}</TableCell>
                          <TableCell>{booking.amount}</TableCell>
                          <TableCell>
                            <Badge
                              variant={booking.status === "Confirmed" ? "default" : "outline"}
                              className={
                                booking.status === "Confirmed"
                                  ? "bg-green-500 hover:bg-green-500/80"
                                  : "text-orange-500 border-orange-500"
                              }
                            >
                              {booking.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                                <DropdownMenuItem>Contact Client</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h1 className="font-serif text-3xl font-bold text-midnight-dark">All Events</h1>
                  <p className="text-muted-foreground">Manage all events across the platform</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Button className="bg-purple hover:bg-purple-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" x2="12" y1="3" y2="15" />
                    </svg>
                    Export Events
                  </Button>
                </div>
              </div>

              {/* Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search events..." className="pl-9" />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </div>
              </div>

              {/* Events Table */}
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event Title</TableHead>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Bookings</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>{event.vendor}</TableCell>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              event.status === "Active"
                                ? "text-green-500 border-green-500"
                                : event.status === "Draft"
                                  ? "text-blue-500 border-blue-500"
                                  : "text-gray-500 border-gray-500"
                            }
                          >
                            {event.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{event.bookings}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Event</DropdownMenuItem>
                              <DropdownMenuItem>Change Status</DropdownMenuItem>
                              <DropdownMenuItem>Delete Event</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Vendors Tab */}
            <TabsContent value="vendors" className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h1 className="font-serif text-3xl font-bold text-midnight-dark">Vendors</h1>
                  <p className="text-muted-foreground">Manage all vendors on the platform</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Button className="bg-purple hover:bg-purple-dark">Add New Vendor</Button>
                </div>
              </div>

              {/* Vendors Table */}
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Events</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vendors.map((vendor) => (
                      <TableRow key={vendor.id}>
                        <TableCell className="font-medium">{vendor.name}</TableCell>
                        <TableCell>{vendor.email}</TableCell>
                        <TableCell>{vendor.phone}</TableCell>
                        <TableCell>{vendor.events}</TableCell>
                        <TableCell>{vendor.rating}</TableCell>
                        <TableCell>
                          <Badge
                            variant={vendor.status === "Verified" ? "default" : "outline"}
                            className={
                              vendor.status === "Verified"
                                ? "bg-green-500 hover:bg-green-500/80"
                                : "text-orange-500 border-orange-500"
                            }
                          >
                            {vendor.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Edit Vendor</DropdownMenuItem>
                              <DropdownMenuItem>Verify Vendor</DropdownMenuItem>
                              <DropdownMenuItem>Suspend Vendor</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

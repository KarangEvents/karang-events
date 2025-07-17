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
  Calendar,
  Clock,
  Edit,
  Filter,
  Home,
  MapPin,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
  Users,
  Star,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for managed events
const managedEvents = [
  {
    id: 1,
    title: "Corporate Gala Dinner",
    date: "June 15, 2023",
    location: "Grand Hyatt, New York",
    status: "Active",
    bookings: 3,
  },
  {
    id: 2,
    title: "Wedding Reception Package",
    date: "Flexible Dates",
    location: "Beachfront Resort, Miami",
    status: "Active",
    bookings: 5,
  },
  {
    id: 3,
    title: "Tech Conference Setup",
    date: "September 10-12, 2023",
    location: "Convention Center, San Francisco",
    status: "Draft",
    bookings: 0,
  },
  {
    id: 4,
    title: "Birthday Celebration Package",
    date: "Customizable",
    location: "Various Venues",
    status: "Active",
    bookings: 2,
  },
  {
    id: 5,
    title: "Charity Fundraiser Gala",
    date: "November 5, 2023",
    location: "Luxury Hotel, Chicago",
    status: "Inactive",
    bookings: 0,
  },
]

// Sample data for upcoming bookings
const upcomingBookings = [
  {
    id: 1,
    eventTitle: "Corporate Gala Dinner",
    clientName: "Acme Corporation",
    date: "June 15, 2023",
    time: "7:00 PM - 11:00 PM",
    guests: 120,
    status: "Confirmed",
  },
  {
    id: 2,
    eventTitle: "Wedding Reception Package",
    clientName: "John & Sarah Smith",
    date: "July 8, 2023",
    time: "5:00 PM - 12:00 AM",
    guests: 150,
    status: "Pending",
  },
  {
    id: 3,
    eventTitle: "Birthday Celebration Package",
    clientName: "Michael Johnson",
    date: "June 22, 2023",
    time: "8:00 PM - 11:00 PM",
    guests: 40,
    status: "Confirmed",
  },
]

// Sample data for notifications
const notifications = [
  {
    id: 1,
    type: "booking",
    message: "New booking request for Corporate Gala Dinner",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "message",
    message: "John Smith sent you a message regarding Wedding Reception",
    time: "Yesterday",
    read: false,
  },
  {
    id: 3,
    type: "system",
    message: "Your Tech Conference Setup listing has been approved",
    time: "2 days ago",
    read: true,
  },
  {
    id: 4,
    type: "booking",
    message: "Booking for Birthday Celebration has been confirmed",
    time: "3 days ago",
    read: true,
  },
]

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-shrink-0 border-r bg-white md:flex md:flex-col">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/vendor/dashboard" className="flex items-center">
            <span className="font-serif text-xl font-bold bg-gradient-to-r from-purple-dark via-purple to-gold bg-clip-text text-transparent">
              Vendor Portal
            </span>
          </Link>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          <Link
            href="/vendor/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              activeTab === "dashboard"
                ? "bg-purple text-white"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/vendor/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              activeTab === "events"
                ? "bg-purple text-white"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => setActiveTab("events")}
          >
            <Calendar className="h-5 w-5" />
            My Events
          </Link>
          <Link
            href="/vendor/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              activeTab === "locations"
                ? "bg-purple text-white"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => setActiveTab("locations")}
          >
            <MapPin className="h-5 w-5" />
            My Locations
          </Link>
          <Link
            href="/vendor/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              activeTab === "calendar"
                ? "bg-purple text-white"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => setActiveTab("calendar")}
          >
            <Clock className="h-5 w-5" />
            Calendar View
          </Link>
          <Link
            href="/vendor/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              activeTab === "notifications"
                ? "bg-purple text-white"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => setActiveTab("notifications")}
          >
            <div className="relative">
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
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                2
              </span>
            </div>
            Notifications
          </Link>
        </nav>
        <div className="mt-auto border-t p-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=40&width=40" alt="Vendor avatar" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium">Elite Events Co.</p>
              <p className="text-xs text-muted-foreground">Vendor</p>
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
                  <h1 className="font-serif text-3xl font-bold text-midnight-dark">Welcome, Elite Events Co.</h1>
                  <p className="text-muted-foreground">Here's an overview of your events and bookings</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-purple hover:bg-purple-dark">
                        <Plus className="mr-2 h-4 w-4" /> Add New Event
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-2xl">Add New Event</DialogTitle>
                        <DialogDescription>Create a new event listing to showcase your services.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="event-title">Event Title</Label>
                          <Input id="event-title" placeholder="e.g. Corporate Gala Dinner" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="event-date">Date</Label>
                            <Input id="event-date" placeholder="Date or date range" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="event-price">Price</Label>
                            <Input id="event-price" placeholder="Starting price" />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="event-location">Location</Label>
                          <Input id="event-location" placeholder="Venue name and address" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="event-description">Description</Label>
                          <Textarea
                            id="event-description"
                            placeholder="Describe your event package..."
                            className="min-h-[100px]"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="event-status">Status</Label>
                          <Select defaultValue="draft">
                            <SelectTrigger id="event-status">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="draft">Draft</SelectItem>
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="inactive">Inactive</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAddEventOpen(false)}>
                          Cancel
                        </Button>
                        <Button className="bg-purple hover:bg-purple-dark">Save Event</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
                    <div className="text-2xl font-bold">{managedEvents.length}</div>
                    <p className="text-xs text-muted-foreground">+2 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">10</div>
                    <p className="text-xs text-muted-foreground">+3 from last month</p>
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
                    <div className="text-2xl font-bold">$24,780</div>
                    <p className="text-xs text-muted-foreground">+12.5% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.9</div>
                    <p className="text-xs text-muted-foreground">Based on 48 reviews</p>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Bookings */}
              <div>
                <h2 className="font-serif text-xl font-bold mb-4">Upcoming Bookings</h2>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Event</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Guests</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {upcomingBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">{booking.eventTitle}</TableCell>
                          <TableCell>{booking.clientName}</TableCell>
                          <TableCell>
                            {booking.date}
                            <br />
                            <span className="text-xs text-muted-foreground">{booking.time}</span>
                          </TableCell>
                          <TableCell>{booking.guests}</TableCell>
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
                                <DropdownMenuItem>Contact Client</DropdownMenuItem>
                                <DropdownMenuItem>Update Status</DropdownMenuItem>
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
                  <h1 className="font-serif text-3xl font-bold text-midnight-dark">My Events</h1>
                  <p className="text-muted-foreground">Manage your event listings</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-purple hover:bg-purple-dark">
                        <Plus className="mr-2 h-4 w-4" /> Add New Event
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-2xl">Add New Event</DialogTitle>
                        <DialogDescription>Create a new event listing to showcase your services.</DialogDescription>
                      </DialogHeader>
                      {/* Form fields would go here - same as in dashboard tab */}
                    </DialogContent>
                  </Dialog>
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
                      <TableHead>Date</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Bookings</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {managedEvents.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.title}</TableCell>
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
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <div>
                <h1 className="font-serif text-3xl font-bold text-midnight-dark">Notifications</h1>
                <p className="text-muted-foreground">Stay updated with your event activities</p>
              </div>

              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-4 rounded-lg border p-4 ${
                      !notification.read ? "bg-purple-light/10" : ""
                    }`}
                  >
                    <div
                      className={`rounded-full p-2 ${
                        notification.type === "booking"
                          ? "bg-green-100 text-green-600"
                          : notification.type === "message"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {notification.type === "booking" ? (
                        <Calendar className="h-5 w-5" />
                      ) : notification.type === "message" ? (
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
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      ) : (
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
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" x2="12" y1="8" y2="12" />
                          <line x1="12" x2="12.01" y1="16" y2="16" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{notification.message}</p>
                      <p className="text-sm text-muted-foreground">{notification.time}</p>
                    </div>
                    {!notification.read && <div className="h-2 w-2 rounded-full bg-purple"></div>}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

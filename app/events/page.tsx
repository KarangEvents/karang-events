import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import SearchWithFilter from "@/components/events/SearchWithFilter";
import EventsList from "@/components/events/EventsList";
import { sanityFetch } from "@/sanity/client";
import { IEvent, ICategory, IArea } from "@/types";

const EVENTS_QUERY = `*[_type == "event"]{
  _id,
  title,
  "slug": slug.current,
  image,
  date,
  location,
  "area": area->name,
  "category": category->name,
  price,
  rating,
  capacity,
} | order(date desc)`;

const CATEGORIES_QUERY = `*[_type == "category"]{
  _id,
  name,
  "slug": slug.current,
} | order(name asc)`;

const AREAS_QUERY = `*[_type == "area"]{
  _id,
  name,
  "slug": slug.current,
} | order(name asc)`;

const options = { next: { revalidate: 300 } };

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  // Handle search parameters for filtering
  const { q, area, category } = await searchParams;

  const [events, categories, areas]: [IEvent[], ICategory[], IArea[]] =
    await Promise.all([
      sanityFetch({ query: EVENTS_QUERY }),
      sanityFetch({ query: CATEGORIES_QUERY }),
      sanityFetch({ query: AREAS_QUERY }),
    ]);

  const normalize = (str: string) => str.toLowerCase().replace(/[\s_-]/g, "");

  // Filter events based on search parameters
  const filteredEvents = events.filter((event) => {
    const matchesQuery = q
      ? event.title.toLowerCase().includes(q.toLowerCase())
      : true;

    const matchesArea = area
      ? normalize(event.area).includes(normalize(area))
      : true;

    const matchesCategory = category
      ? event.category.toLowerCase() === category.toLowerCase()
      : true;

    return matchesQuery && matchesArea && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white py-6 md:pt-12 md:pb-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-8">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-midnight-dark mb-2">
              Discover Events
            </h1>
            <p className="text-muted-foreground">
              Find and book the perfect event package for your needs
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <SearchWithFilter categories={categories} areas={areas} />

        {/* Events List */}
        <EventsList events={filteredEvents} />

        {/* Pagination */}
        {/* {events.length > 0 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous page</span>
                <FaChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-purple text-white"
              >
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
                <FaChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          </div>
        )} */}
      </div>
    </div>
  );
}

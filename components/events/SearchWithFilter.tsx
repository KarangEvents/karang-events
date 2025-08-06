"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Filter, MapPin, Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/lib/useDebounce";
import { IArea, ICategory } from "@/types";

interface SearchWithFilterProps {
  categories: ICategory[];
  areas: IArea[];
}

const SearchWithFilter: React.FC<SearchWithFilterProps> = ({
  categories,
  areas,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedArea, setSelectedArea] = useState(
    searchParams.get("area") || "All Areas"
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All Categories"
  );

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const params = new URLSearchParams();

    if (debouncedSearchQuery) params.set("q", debouncedSearchQuery);
    if (selectedArea && selectedArea !== "All Areas")
      params.set("area", selectedArea);
    if (selectedCategory && selectedCategory !== "All Categories")
      params.set("category", selectedCategory);

    router.replace(`?${params.toString()}`);
  }, [debouncedSearchQuery, selectedArea, selectedCategory]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input with Clear Button */}
        <div className="flex-1 relative">
          <Input
            placeholder="Search events..."
            className="pl-9 pr-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Search className="h-4 w-4 text-muted-foreground" />}
          />
          {searchQuery && (
            <X
              className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer"
              onClick={() => setSearchQuery("")}
            />
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Location */}
          <Select value={selectedArea} onValueChange={setSelectedArea}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <SelectValue placeholder="All Areas" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Areas">All Areas</SelectItem>
              {areas.map((area) => (
                <SelectItem key={area._id} value={area.slug}>
                  {area.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Category */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <SelectValue placeholder="All Categories" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Categories">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category._id} value={category.slug}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchWithFilter;

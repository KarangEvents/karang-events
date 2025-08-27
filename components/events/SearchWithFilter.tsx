"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Filter, MapPin, Search, X, Check, ChevronsUpDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/lib/useDebounce";
import { IArea, ICategory } from "@/types";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchWithFilterProps {
  categories: ICategory[];
  areas: IArea[];
}

const Combobox = ({
  icon,
  placeholder,
  items,
  value,
  setValue,
}: {
  icon: React.ReactNode;
  placeholder: string;
  items: { label: string; value: string }[];
  value: string;
  setValue: (v: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full sm:w-[180px] justify-between"
        >
          <div className="flex items-center gap-2 truncate">
            {icon}
            {value
              ? items.find((item) => item.value === value)?.label
              : placeholder}
          </div>
          <ChevronsUpDown className="h-4 w-4 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${placeholder.toLowerCase()}...`} className="h-9" />
          <CommandList>
            <CommandEmpty>No result found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const SearchWithFilter: React.FC<SearchWithFilterProps> = ({
  categories,
  areas,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedArea, setSelectedArea] = useState(
    searchParams.get("area") || "all"
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const params = new URLSearchParams();

    if (debouncedSearchQuery) params.set("q", debouncedSearchQuery);
    if (selectedArea !== "all") params.set("area", selectedArea);
    if (selectedCategory !== "all") params.set("category", selectedCategory);

    router.replace(`?${params.toString()}`);
  }, [debouncedSearchQuery, selectedArea, selectedCategory]);

  const areaOptions = [{ label: "All Areas", value: "all" }, ...areas.map((a) => ({ label: a.name, value: a.slug }))];
  const categoryOptions = [{ label: "All Categories", value: "all" }, ...categories.map((c) => ({ label: c.name, value: c.slug }))];

  return (
    <div className="bg-white rounded-xl shadow-md p-2 md:p-4 mb-8 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Input
            placeholder="Search events..."
            className="pl-9 pr-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          {searchQuery && (
            <X
              className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer"
              onClick={() => setSearchQuery("")}
            />
          )}
        </div>

        {/* Filters */}
        <div className="flex gap-2 md:gap-4">
          {/* Area Combobox */}
          <Combobox
            icon={<MapPin className="h-4 w-4" />}
            placeholder="All Areas"
            items={areaOptions}
            value={selectedArea}
            setValue={setSelectedArea}
          />

          {/* Category Combobox */}
          <Combobox
            icon={<Filter className="h-4 w-4" />}
            placeholder="All Categories"
            items={categoryOptions}
            value={selectedCategory}
            setValue={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchWithFilter;

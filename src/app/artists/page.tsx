"use client";

import { useState } from "react";
import ArtistCard from "@/components/ArtistsCard";
import { artists as allArtists } from "@/data/artists";
import { Slider } from "@/components/ui/slider";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";

const categories = [...new Set(allArtists.map((a) => a.category))];
const locations = [...new Set(allArtists.map((a) => a.location))];

export default function ArtistsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(100000);

  const filtered = allArtists.filter((artist) => {
    const inCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(artist.category);

    const inLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(artist.location);

    const inPrice = artist.upperLimit <= priceRange;

    return inCategory && inLocation && inPrice;
  });

  return (
    <main className="min-h-screen px-6 py-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">
        Browse Artists
      </h1>

      <div className="flex flex-col md:flex-row gap-4 items-start justify-center mb-10 max-w-6xl mx-auto">
        <div className="w-full md:w-1/4">
          <MultiSelectDropdown
            title="Category"
            options={categories}
            selected={selectedCategories}
            onChange={setSelectedCategories}
          />
        </div>

        <div className="w-full md:w-1/4">
          <MultiSelectDropdown
            title="Location"
            options={locations}
            selected={selectedLocations}
            onChange={setSelectedLocations}
          />
        </div>

        <div className="w-full md:w-1/3">
          <label className="text-sm text-gray-700 mb-1 block">
            Budget: ₹{priceRange.toLocaleString()}
          </label>
          <Slider
            max={100000}
            step={5000}
            value={[priceRange]}
            onValueChange={(val) => setPriceRange(val[0])}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filtered.length > 0 ? (
          filtered.map((artist) => <ArtistCard key={artist.id} {...artist} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No artists match the selected filters.
          </p>
        )}
      </div>
    </main>
  );
}

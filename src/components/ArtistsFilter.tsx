"use client";

import { useArtistContext } from "@/context/ArtistsContext";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";
import { Slider } from "@/components/ui/slider";
import { artists } from "@/data/artists";

const categories = [...new Set(artists.map((a) => a.category))];
const locations = [...new Set(artists.map((a) => a.location))];

export default function ArtistFilters() {
  const {
    selectedCategories,
    setSelectedCategories,
    selectedLocations,
    setSelectedLocations,
    priceRange,
    setPriceRange,
  } = useArtistContext();

  return (
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
        />
      </div>
    </div>
  );
}

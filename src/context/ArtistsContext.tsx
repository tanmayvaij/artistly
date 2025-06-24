"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { artists as allArtists } from "@/data/artists";

type Artist = (typeof allArtists)[0];

type ArtistContextType = {
  selectedCategories: string[];
  setSelectedCategories: (cats: string[]) => void;
  selectedLocations: string[];
  setSelectedLocations: (locs: string[]) => void;
  priceRange: number;
  setPriceRange: (price: number) => void;
  filteredArtists: Artist[];
};

const ArtistContext = createContext<ArtistContextType | null>(null);

export function useArtistContext() {
  const ctx = useContext(ArtistContext);
  if (!ctx) throw new Error("useArtistContext must be used inside ArtistProvider");
  return ctx;
}

export function ArtistProvider({ children }: { children: ReactNode }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(100000);

  const filteredArtists = useMemo(() => {
    return allArtists.filter((artist) => {
      const inCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(artist.category);

      const inLocation =
        selectedLocations.length === 0 ||
        selectedLocations.includes(artist.location);

      const inPrice = artist.upperLimit <= priceRange;

      return inCategory && inLocation && inPrice;
    });
  }, [selectedCategories, selectedLocations, priceRange]);

  return (
    <ArtistContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        selectedLocations,
        setSelectedLocations,
        priceRange,
        setPriceRange,
        filteredArtists,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
}

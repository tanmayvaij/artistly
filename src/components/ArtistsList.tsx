"use client";

import { useArtistContext } from "@/context/ArtistsContext";
import ArtistCard from "@/components/ArtistsCard";

export default function ArtistResults() {
  const { filteredArtists } = useArtistContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {filteredArtists.length > 0 ? (
        filteredArtists.map((artist) => (
          <ArtistCard key={artist.id} {...artist} />
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">
          No artists match the selected filters.
        </p>
      )}
    </div>
  );
}

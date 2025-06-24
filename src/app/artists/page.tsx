import ArtistFilters from "@/components/ArtistsFilter";
import ArtistResults from "@/components/ArtistsList";
import { ArtistProvider } from "@/context/ArtistsContext";

export default function ArtistsPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">
        Browse Artists
      </h1>

      <ArtistProvider>
        <ArtistFilters />
        <ArtistResults />
      </ArtistProvider>
    </main>
  );
}

export const metadata = {
  title: "Browse Artists - Artistly",
  description:
    "Explore a wide range of verified performing artists across categories and cities. Filter by category, location, and fee.",
};

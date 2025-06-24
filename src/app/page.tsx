import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { categories } from "@/data";
import Image from "next/image";
import { Search, UserPlus } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen text-gray-800">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1  text-center md:text-left">
            
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Connect with the Best <br className="hidden md:inline" />{" "}
              Performing Artists
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Discover and book talented artists for your next big event. From
              soulful singers to inspiring speakers - Artistly.com makes it
              effortless.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="gap-2 bg-pink-600 hover:bg-pink-500 cursor-pointer p-6">
                <Search className="w-4 h-4" />
                Explore Artists
              </Button>

              <Button
                variant="outline"
                className="gap-2 border-gray-300 cursor-pointer hover:border-gray-500 p-6"
              >
                <UserPlus className="w-4 h-4" />
                Onboard Artist
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <Image
              src="/artist.png"
              alt="Artists Performing"
              width={600}
              height={400}
              className="rounded-full shadow-lg object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold mb-2 text-center">
          Popular Categories
        </h2>
        <p className="text-center text-gray-600 text-base mb-8 max-w-2xl mx-auto">
          Explore a variety of talented performers to elevate your event — from
          soulful singers to energetic DJs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, id) => (
            <CategoryCard key={id} {...cat} />
          ))}
        </div>
      </section>
    </main>
  );
}

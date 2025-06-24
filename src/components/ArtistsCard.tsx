import Image from "next/image";
import { MapPin } from "lucide-react";

type Props = {
  name: string;
  category: string;
  location: string;
  lowerLimit: number;
  upperLimit: number;
  image: string;
};

export default function ArtistCard({
  name,
  category,
  location,
  lowerLimit,
  upperLimit,
  image,
}: Props) {
  return (
    <div className=" rounded-lg shadow bg-white hover:shadow-md transition overflow-hidden">
      <div className="relative w-full h-48">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-pink-600">{name}</h3>

        <p className="inline-block text-xs mt-1 bg-pink-100 text-pink-700 px-3 py-1 rounded-full mb-2">
          {category}
        </p>

        <p className="text-xs text-gray-500 flex items-center gap-1 pt-1">
          <MapPin className="w-3 h-3 text-gray-400" />
          {location}
        </p>

        <p className="text-sm text-gray-500 mb-4 font-medium pt-2">
          ₹{lowerLimit.toLocaleString()} - ₹{upperLimit.toLocaleString()}
        </p>

        <button className="cursor-pointer bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-500">
          Ask for Quote
        </button>
      </div>
    </div>
  );
}

import Image from "next/image";

type Props = {
  title: string;
  image: string;
  description: string;
};

export default function CategoryCard({ title, image, description }: Props) {
  return (
    <div className="bg-white cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all pb-10 text-center">
      <div className="relative w-full h-56 mb-5">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-base text-gray-600 px-4">{description}</p>
    </div>
  );
}

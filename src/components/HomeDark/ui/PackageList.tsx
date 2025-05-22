import Image from "next/image";
import Link from "next/link";

export interface PackageCardTwoProps {
  id: string;
  img: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  currencySymbol: string;
}

const PackageCardTwo = ({
  id,
  img,
  title,
  location,
  duration,
  price,
  currencySymbol,
}: PackageCardTwoProps) => {
  return (
    <div className="package-card rounded-2xl bg-white shadow-lg overflow-hidden">
      <div className="relative w-full h-60">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">
          <Link href={`/package/${id}`} className="hover:text-primary-2">
            {title}
          </Link>
        </h3>
        <p className="text-gray-500 text-sm mb-2">{location}</p>
        <p className="text-sm mb-2">Duration: {duration}</p>
        <div className="text-lg font-bold text-primary-2">
          {currencySymbol}
          {price.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default PackageCardTwo;

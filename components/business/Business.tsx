import Image from "next/image";
import Link from "next/link";

interface CardProps {
  href: string;
  imageSrc: string;
  title: string;
  subtitle: string;
}

function CategoryCard({ href, imageSrc, title, subtitle }: CardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl shadow-xl w-full max-w-[320px] md:max-w-none aspect-[4/5] cursor-pointer"
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Layer Overlay عند الهوفر */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl" />

      {/* الجزء السفلي */}
      <div className="absolute bottom-0 inset-x-0 p-4 bg-black/40 backdrop-blur-md border-t border-white/10 text-white rounded-b-2xl">
        <h3 className="text-lg md:text-xl font-bold tracking-wide group-hover:text-gray-200 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-neutral-300 mt-1 opacity-80">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}

export default function Business() {
  const categories = [
    {
      href: "/wedding",
      imageSrc: "/img1.jpg",
      title: "WEDDINGS",
      subtitle: "Wedding Photography",
    },
    {
      href: "/events",
      imageSrc: "/event1.JPG",
      title: "EVENTS",
      subtitle: "Event Coverage",
    },
    {
      href: "/model",
      imageSrc: "/model1.jpeg",
      title: "MODELS",
      subtitle: "Model Photo Sessions",
    },
  ];

  return (
    <div className="py-12 md:py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
      {categories.map((cat, index) => (
        <CategoryCard key={index} {...cat} />
      ))}
    </div>
  );
}
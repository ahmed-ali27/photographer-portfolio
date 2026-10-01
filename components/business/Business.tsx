import Image from "next/image";
import Link from "next/link";

export default function Business() {
  return (
    <div className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-4 px-3.5 ">
      <Link
        href="/wedding"
        className="group relative overflow-hidden rounded-2xl shadow-xl w-100 cursor-pointer"
      >
        <div className="relative w-full h-100">
          <Image
            src="/img1.jpg"
            alt="wedding"
            width={400}
            height={400}
            className="object-cover w-full h-full rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl" />
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 bg-black/40 backdrop-blur-md border-t border-white/10 text-white rounded-b-2xl">
          <h3 className="text-xl font-bold tracking-wide group-hover:text-gray-300  transition-colors">
            تصوير زفاف
          </h3>
          <p className="text-xs text-gray-300 mt-1 opacity-80">
            Weddings & Events
          </p>
        </div>
      </Link>
      <Link
        href="/events"
        className="group relative overflow-hidden rounded-2xl shadow-xl w-100 cursor-pointer"
      >
        <div className="relative w-full h-100">
          <Image
            src="/event1.JPG"
            alt="events"
            width={400}
            height={400}
            className="object-cover w-full h-full rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl" />
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 bg-black/40 backdrop-blur-md border-t border-white/10 text-white rounded-b-2xl">
          <h3 className="text-xl font-bold tracking-wide group-hover:text-gray-300 transition-colors">
            تصوير Events
          </h3>
          <p className="text-xs text-gray-300 mt-1 opacity-80">
            Events
          </p>
        </div>
      </Link>
      <Link
        href="/model"
        className="group relative overflow-hidden rounded-2xl shadow-xl w-100 cursor-pointer"
      >
        <div className="relative w-full h-100">
          <Image
            src="/model1.jpeg"
            alt="models"
            width={400}
            height={400}
            className="object-cover w-full h-full rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl" />
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 bg-black/40 backdrop-blur-md border-t border-white/10 text-white rounded-b-2xl">
          <h3 className="text-xl font-bold tracking-wide group-hover:text-gray-300  transition-colors">
            تصوير موديل
          </h3>
          <p className="text-xs text-gray-300 mt-1 opacity-80">
            Models
          </p>
        </div>
      </Link>
    </div>
  );
}

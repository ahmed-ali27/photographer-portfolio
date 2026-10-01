"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function WeddingPage() {
  const weddingImages = [
    "/img1.jpg",
    "/weding1.jpeg",
    "/weding2.jpeg",
    "/weding3.jpeg",
    "/weding4.jpeg",
    "/weding5.jpeg",
    "/weding6.jpeg",
    "/weding7.jpeg",
    "/weding8.jpeg",
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % weddingImages.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + weddingImages.length) % weddingImages.length
      );
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 max-w-7xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-8 text-sm text-neutral-600 hover:text-black transition-colors font-medium"
      >
        ← العودة للرئيسية
      </Link>

      <h1 className="text-3xl font-bold mb-8 border-b border-neutral-300 pb-4 text-neutral-900">
        معرض صور الزفاف
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {weddingImages.map((src, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-300/80 shadow-md group cursor-pointer bg-neutral-200"
          >
            <Image
              src={src}
              alt={`Wedding photo ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 transition-all"
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-2xl p-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 transition-colors z-10"
          >
            <FaTimes />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 md:left-8 text-white text-xl p-3 rounded-full bg-neutral-800/80 hover:bg-neutral-700 transition-colors z-10"
          >
            <FaChevronLeft />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl h-[80vh]"
          >
            <Image
              src={weddingImages[selectedIndex]}
              alt="Expanded photo"
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={showNext}
            className="absolute right-4 md:right-8 text-white text-xl p-3 rounded-full bg-neutral-800/80 hover:bg-neutral-700 transition-colors z-10"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
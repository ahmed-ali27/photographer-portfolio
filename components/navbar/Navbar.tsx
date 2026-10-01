import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#about", label: "عنّي" },
  { href: "/#work", label: "أعمال" },
  { href: "/#price", label: "الأسعار" },
  { href: "/#contact", label: "تواصل" },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between gap-3 px-4 sm:px-5 md:px-7">
      <Link href="/" className="shrink-0">
        <Image
          src="/Logo.png"
          alt="Dr.Handsa"
          width={200}
          height={200}
          priority
          className="h-auto w-24 sm:w-32 md:w-48"
        />
      </Link>

      <ul className="flex items-center gap-3 pl-3 text-sm font-semibold sm:gap-5 sm:pl-9 sm:text-base md:gap-7">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="block py-2">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
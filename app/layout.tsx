import { Reem_Kufi, IBM_Plex_Sans_Arabic } from "next/font/google";


import "./globals.css";

const display = Reem_Kufi({
  subsets: ["arabic", "latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${display.variable} ${body.variable}`}
    >
      <body className="bg-[#F3EFE6] text-neutral-900 min-h-screen"> {children}</body>
    </html>
  );
}

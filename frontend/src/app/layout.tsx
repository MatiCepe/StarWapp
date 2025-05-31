import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FavoritesProvider } from "../context/FavoriteContext";
import Header from "./components/Header";
import "./globals.css";
import Theme from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Star Wars Explorer",
  description: "A full-stack project using Next.js and NestJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="">
      <head>
        <link
          rel="stylesheet"
          href="/css/starwars-glyphicons.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Theme>
          <FavoritesProvider>
            <Header />
              {children}
          </FavoritesProvider>
        </Theme>
      </body>
    </html>
  );
}

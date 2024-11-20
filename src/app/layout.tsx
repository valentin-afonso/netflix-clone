import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mymovies App",
  description: "Mymovies app build with Next",
  openGraph: {
    title: "Welcome on my Mymovies app !",
    description:
      "An app made to find all your favorite films thanks to the Imdb API.",
    type: "article",
    url: "https://mymovies-afso.vercel.app/",
    images: [
      {
        url: "https://mymovies-afso.vercel.app/twitter-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome on my Mymovies app !",
    description:
      "An app made to find all your favorite films thanks to the Imdb API.",
    creator: "@valentinafso",
    images: [
      {
        url: "https://mymovies-afso.vercel.app/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "cover Mymovies app",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-auto bg-dark w-screen overflow-x-hidden text-white"
    >
      <body className={`${inter.className} h-full max-w-[100vw]`}>
        {children}
      </body>
    </html>
  );
}

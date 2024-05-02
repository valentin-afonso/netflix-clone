import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/Header";
import Footer from "@/app/ui/footer/Footer";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import PopupProvider from "@/providers/popup-provider";
import WishlistProvider from "@/providers/wishlist-provider";
import SidebarProvider from "@/providers/sidebar-provider";
import SideBar from "@/app/ui/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netfilx App",
  description: "Netflix app build with Next",
  openGraph: {
    title: "Welcome on my netflix app !",
    description:
      "An app made to find all your favorite films thanks to the Imdb API.",
    type: "article",
    url: "https://cruip-tutorials-next.vercel.app/social-preview",
    images: [
      {
        url: "/img-blade-runner-01-low-quality.jpg Dynamic Open Graph and Twitter Images in Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome on my netflix app !",
    description:
      "An app made to find all your favorite films thanks to the Imdb API.",
    images: [
      "/img-blade-runner-01-low-quality.jpg Dynamic Open Graph and Twitter Images in Next.js",
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html
      lang="en"
      className="h-auto bg-dark w-screen overflow-x-hidden text-white"
    >
      <body className={`${inter.className} h-full max-w-[100vw]`}>
        <SidebarProvider>
          {session && <Header />}
          {session && <SideBar />}
        </SidebarProvider>
        <WishlistProvider>
          <PopupProvider>{children}</PopupProvider>
        </WishlistProvider>
        {session && <Footer />}
      </body>
    </html>
  );
}

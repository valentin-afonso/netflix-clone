import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/Header";
import Footer from "@/app/ui/footer/Footer";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netfilx App",
  description: "Netflix app build with Next",
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
      className="h-full bg-dark w-screen overflow-x-hidden text-white"
    >
      <Provider>
        <body className={`${inter.className} h-full `}>
          {session && <Header />}
          <>{children}</>
          {session && <Footer />}
        </body>
      </Provider>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/Header";
import Footer from "@/app/ui/footer/Footer";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Provider from "./Provider";
import PopupProvider from "@/providers/popup-provider";

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
      className="h-auto bg-dark w-screen overflow-x-hidden text-white"
    >
      <body className={`${inter.className} h-full max-w-[100vw]`}>
        {session && <Header />}
        <PopupProvider>{children}</PopupProvider>
        {session && <Footer />}
      </body>
    </html>
  );
}

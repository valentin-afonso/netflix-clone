import Header from "@/app/ui/header/Header";
import Footer from "@/app/ui/footer/Footer";
import PopupProvider from "@/providers/popup-provider";
import WishlistProvider from "@/providers/wishlist-provider";
import SidebarProvider from "@/providers/sidebar-provider";
import SideBar from "@/app/ui/SideBar";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function BrowserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <SidebarProvider>
        <Header />
        <SideBar />
      </SidebarProvider>
      <WishlistProvider>
        <PopupProvider>{children}</PopupProvider>
      </WishlistProvider>
      <Footer />
    </>
  );
}

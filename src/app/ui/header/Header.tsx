import AccountSection from "./AccountSection";
import MainNav from "./MainNav";
import MenuMobileTrigger from "../MenuMobileTrigger";

export default function Header() {
  return (
    <header className="fixed w-full flex justify-between items-center px-1 bg-header shadow-sm z-10 h-[67px]">
      <MenuMobileTrigger />
      <MainNav />
      <AccountSection />
    </header>
  );
}

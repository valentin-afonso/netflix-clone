import AccountSection from "./AccountSection";
import MainNav from "./MainNav";

export default function Header() {
  return (
    <header className="fixed w-full flex justify-end items-center px-1 bg-header shadow-sm z-10 h-[67px] sm:justify-between">
      <MainNav />
      <AccountSection />
    </header>
  );
}

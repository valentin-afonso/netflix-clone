import AccountSection from "./AccountSection";
import MainNav from "./MainNav";

export default function Header() {
  return (
    <header className="fixed w-full flex justify-between items-center px-1 bg-header shadow-sm z-50">
        <MainNav />
        <AccountSection />
    </header>
  )
}



import AccountSection from "./AccountSection";
import MainNav from "./MainNav";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-1 bg-white shadow-sm">
        <MainNav />
        <AccountSection />
    </header>
  )
}

import AboutSlider from "@/app/ui/AboutSlider";
import AboutBlocInfo from "@/app/ui/AboutBlocInfo";
import AboutBlocFeature from "@/app/ui/AboutBlocFeature";
import AboutBlocBottom from "@/app/ui/AboutBlocBottom";
import Socials from "@/app/ui/Socials";

export default function page() {
  return (
    <div>
      <AboutSlider />
      <AboutBlocInfo />
      <AboutBlocFeature />
      <AboutBlocBottom />
      <Socials />
    </div>
  );
}

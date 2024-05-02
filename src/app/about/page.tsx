import AboutSlider from "@/app/ui/AboutSlider";
import AboutBlocInfo from "@/app/ui/AboutBlocInfo";
import AboutBlocFeature from "@/app/ui/AboutBlocFeature";
import AboutBlocBottom from "@/app/ui/AboutBlocBottom";
import Socials from "@/app/ui/Socials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netfilx App - About the app",
  description:
    "Netflix app, Here is all informations you need to know about this app",
};

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

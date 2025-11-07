import FooterCTA from "@/components/footer";
import Header from "@/components/header";
import LandingPage from "@/components/landing";
import Section from "@/components/section";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
      <Slider />
      <Section />
      <FooterCTA />
    </>
  );
}

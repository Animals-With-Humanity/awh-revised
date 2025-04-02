import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FooterImage from "@/components/FooterImage";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Initiative from "@/components/Initiative";
import Providers from "@/components/Providers";

export default function Home() {
  return (
    <div className="flex-col flex min-h-screen">
      <Header/>
      <div className="flex-1">
      <HeroSection/>
      <Initiative/>
      <Features/>
      <Providers/>
      <FooterImage/>
      <Footer/>
      </div>
    </div>
  );
}

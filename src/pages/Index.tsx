import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import CallToAction from "@/components/sections/CallToAction";
import BenefitsSection from "@/components/sections/BenefitsSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TechnologiesSection />
      <CallToAction />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Index;

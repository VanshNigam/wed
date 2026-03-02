import FloatingFlowers from "@/components/FloatingFlowers";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import ProgrammeSection from "@/components/ProgrammeSection";
import VenueSection from "@/components/VenueSection";
import WishesSection from "@/components/WishesSection";
import FooterSection from "@/components/FooterSection";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <LanguageProvider>
        <FloatingFlowers />
      <div className="relative min-h-screen overflow-x-hidden">
        <MusicPlayer />
        <LanguageToggle />
        <HeroSection />
        <CoupleSection />
        <ProgrammeSection />
        <VenueSection />
        <WishesSection />
        <FooterSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;

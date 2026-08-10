import { HeroSection } from '../components/HeroSection';
import { GrowFeaturesSection } from '../components/GrowFeaturesSection';
import { MaceSection } from '../components/MaceSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { CustomerLogosSection } from '../components/CustomerLogosSection';
import { StatsSection } from '../components/StatsSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { FinalCTASection } from '../components/FinalCTASection';

export function HomePage() {
  return (
    <main className="w-full">
      <HeroSection />
      <GrowFeaturesSection />
      <MaceSection />
      <FeaturesSection />
      <CustomerLogosSection />
      <StatsSection />
      <TestimonialSection />
      <FinalCTASection />
    </main>
  );
}

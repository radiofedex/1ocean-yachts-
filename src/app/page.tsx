import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { DestinationsSection } from '@/components/sections/DestinationsSection';
import { FeaturedYachts } from '@/components/sections/FeaturedYachts';
import { ExclusiveBrands } from '@/components/sections/ExclusiveBrands';
import { AboutSection } from '@/components/sections/AboutSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { LeadSection } from '@/components/sections/LeadSection';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <DestinationsSection />
      <FeaturedYachts />
      <ExclusiveBrands />
      <AboutSection />
      <EventsSection />
      <LeadSection />
    </Layout>
  );
}

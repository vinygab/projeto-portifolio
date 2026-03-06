import { ExperienceSection } from '@/components/sections/experience';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects';
import { FinalCtaSection } from '@/components/sections/final-cta';
import { HeroSection } from '@/components/sections/hero';
import { HighlightsSection } from '@/components/sections/highlights';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <FinalCtaSection />
    </>
  );
}

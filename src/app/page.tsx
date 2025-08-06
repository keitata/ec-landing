'use client';

import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PricingSection from '@/components/home/PricingSection';
import FAQSection from '@/components/home/FAQSection';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
    </main>
  );
}

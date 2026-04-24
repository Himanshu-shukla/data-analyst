'use client';

import { useState } from 'react';
import ApplicationForm from '@/components/ApplicationForm';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CompaniesSection from '@/components/CompaniesSection';
import FeaturesSection from '@/components/FeaturesSection';
import UrgencyScarcity from '@/components/UrgencyScarcity';
import SocialProofNumbers from '@/components/SocialProofNumbers';
import GuaranteesSection from '@/components/GuaranteesSection';
import VideoSection from '@/components/VideoSection';
import CourseStructure from '@/components/CourseStructure';
import InstructorCredibility from '@/components/InstructorCredibility';
import TestimonialsSection from '@/components/TestimonialsSection';
import TrustpilotReviews from '@/components/TrustpilotReviews';
import CurrentBatchTestimonials from '@/components/CurrentBatchTestimonials';
import VideoTestimonials from '@/components/VideoTestimonials';
import AIComparisonSection from '@/components/AIComparisonSection';
import FAQSection from '@/components/FAQSection';
import CertificateSection from '@/components/CertificateSection';
import Footer from '@/components/Footer';
import { VIDEO_CONFIG } from '@/config/video';

interface HomePageClientProps {
  initialApplicationFormOpen?: boolean;
}

export default function HomePageClient({ initialApplicationFormOpen = false }: HomePageClientProps) {
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(initialApplicationFormOpen);

  const handleApplyNow = () => {
    setIsApplicationFormOpen(true);
  };

  const handleWatchDemo = () => {
    if (!VIDEO_CONFIG.enabled) return;

    const element = document.getElementById('demo');
    if (element) {
      const navbarHeight = 128;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden max-w-full">
      <div className="w-full max-w-full overflow-x-hidden">
        <Navigation onApplyNow={handleApplyNow} />
        <HeroSection
          onApplyNow={handleApplyNow}
          onWatchDemo={VIDEO_CONFIG.enabled ? handleWatchDemo : undefined}
        />
        {VIDEO_CONFIG.enabled && <VideoSection onApplyNow={handleApplyNow} />}
        <CompaniesSection />
        <VideoTestimonials />
        <TestimonialsSection />
        <AIComparisonSection onApplyNow={handleApplyNow} />
        <TrustpilotReviews />
        <CurrentBatchTestimonials onApplyNow={handleApplyNow} />
        <UrgencyScarcity onApplyNow={handleApplyNow} />
        <SocialProofNumbers onApplyNow={handleApplyNow} />
        <GuaranteesSection onApplyNow={handleApplyNow} />
        <CourseStructure onApplyNow={handleApplyNow} />
        <InstructorCredibility onApplyNow={handleApplyNow} />
        <FeaturesSection />
        <CertificateSection onApplyNow={handleApplyNow} />
        <FAQSection onApplyNow={handleApplyNow} />
        <Footer onApplyNow={handleApplyNow} />
        <ApplicationForm
          isOpen={isApplicationFormOpen}
          onClose={() => setIsApplicationFormOpen(false)}
        />
      </div>
    </main>
  );
}

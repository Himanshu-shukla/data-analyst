import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: 'Apply for the Data Analytics Career Program',
  description:
    'Apply for Brit Institute’s Data Analytics Career Program and book a free consultation with the admissions team.',
  alternates: {
    canonical: '/apply',
  },
};

export default function ApplyPage() {
  return <HomePageClient initialApplicationFormOpen />;
}

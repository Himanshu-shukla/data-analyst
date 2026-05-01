import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';

const siteUrl = 'https://britinstitute.uk';

export const metadata: Metadata = {
  title: 'Data Analytics Career Program',
  description:
    'Join Brit Institute’s 6-month Data Analytics Career Program to learn Python, SQL, Excel, Tableau, and Power BI with hands-on projects and career support.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Brit Institute Data Analytics Career Program',
    description:
      'Learn Python, SQL, Excel, Tableau, and Power BI through a practical data analytics program designed to help learners build job-ready skills.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brit Institute Data Analytics Career Program',
    description:
      'Hands-on data analytics training with Python, SQL, Excel, Tableau, Power BI, and career support.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need any math or programming background for data analysis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic math skills are helpful, but not required. The program starts with the fundamentals and teaches Python from scratch for data analysis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I really get a data analyst job after 6 months?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The program is structured to help learners build practical skills, complete portfolio projects, and prepare for analyst roles with career support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide job placement assistance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brit Institute offers career support such as resume guidance, interview preparation, and job-focused assistance after program completion.',
      },
    },
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brit Institute',
  url: siteUrl,
  logo: `${siteUrl}/britinstitute_v1.png`,
  email: 'info@britinstitute.uk',
  sameAs: ['https://www.trustpilot.com/review/britinstitute.uk'],
};

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Data Analytics Career Program',
  description:
    'A 6-month practical data analytics program covering Python, SQL, Excel, Tableau, and Power BI, with portfolio-building and career support.',
  provider: {
    '@type': 'Organization',
    name: 'Brit Institute',
    sameAs: siteUrl,
  },
  educationalCredentialAwarded: 'Certificate of Completion',
  teaches: ['Python', 'SQL', 'Excel', 'Tableau', 'Power BI', 'Data Visualization'],
};

type HomeProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function hasApplyParam(value: string | string[] | undefined): boolean {
  if (Array.isArray(value)) {
    return value.some((item) => hasApplyParam(item));
  }

  if (!value) {
    return false;
  }

  return ['1', 'true', 'yes', 'open'].includes(value.toLowerCase());
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const shouldOpenApplicationForm = hasApplyParam(params?.apply) || hasApplyParam(params?.form);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageClient initialApplicationFormOpen={shouldOpenApplicationForm} />
    </>
  );
}

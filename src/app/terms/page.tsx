'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import { Shield, BookOpen, AlertCircle, Award, Scale, HelpCircle } from 'lucide-react';

export default function TermsAndConditionsPage() {
  const handleApplyNow = () => {
    window.location.href = '/';
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <nav className="w-full bg-white border-b border-gray-200 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center text-sm md:text-base">
          <Link href="/" className="font-semibold text-gray-700 hover:text-primary transition flex items-center gap-2">
            <span className="text-xl">&larr;</span> Back to Home
          </Link>
          <span className="font-bold text-gray-900 text-lg">Brit Institute</span>
        </div>
      </nav>

      <div className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-t-3xl p-10 md:p-14 text-white shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Terms & Conditions</h1>
          </div>
          <p className="text-blue-100 font-medium text-lg ml-1">Effective Date: 03/03/2026</p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-b-3xl shadow-xl border border-gray-100 p-8 md:p-14 -mt-2">
          
          <div className="space-y-10 text-gray-700 leading-relaxed text-[15px] md:text-base">
            <p className="text-lg">
              Welcome to Brit Institute. These Terms and Conditions govern your use of our website (<a href="https://britinstitute.uk" className="text-primary hover:underline font-semibold">https://britinstitute.uk</a>) and our educational services. By accessing or using our services, you agree to comply with and be bound by these Terms.
            </p>

            <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-indigo-500" />
                <h2 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              </div>
              <p>By enrolling in our courses, submitting an application, or browsing our website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in full.</p>
            </section>

            <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-emerald-500" />
                <h2 className="text-xl font-bold text-gray-900">2. Enrollment & Payments</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
                  <span>All course fees must be paid in accordance with the payment plans agreed upon at the time of enrollment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
                  <span>Brit Institute reserves the right to suspend access to course materials if payments are delayed or defaulted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
                  <span>Refunds are subject to our standard refund policy, provided to students prior to official enrollment.</span>
                </li>
              </ul>
            </section>

            <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-amber-500" />
                <h2 className="text-xl font-bold text-gray-900">3. Intellectual Property</h2>
              </div>
              <p>All content provided, including but not limited to course modules, videos, assignments, and presentations, are the exclusive property of Brit Institute. Sharing, redistributing, or selling these materials without explicit written consent is strictly prohibited and violates our intellectual property rights.</p>
            </section>

            <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-rose-500" />
                <h2 className="text-xl font-bold text-gray-900">4. Job Placement Guarantee</h2>
              </div>
              <p>Our Job Placement Guarantee is applicable only to students who successfully fulfill all academic, attendance, and assignment requirements outlined in the program syllabus. Specific conditions apply and will be detailed in the Student Enrollment Agreement.</p>
            </section>

            <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-slate-500" />
                <h2 className="text-xl font-bold text-gray-900">5. Limitation of Liability</h2>
              </div>
              <p>Brit Institute is committed to providing high-quality education. However, we do not guarantee specific employment outcomes beyond our explicit agreements. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
              <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-xl text-indigo-900">
                <p className="mb-3">For any queries regarding these Terms and Conditions, please contact us:</p>
                <p className="font-bold mb-1 text-lg">Brit Institute</p>
                <p>Email: <a href="mailto:info@britinstitute.uk" className="text-primary hover:underline font-bold">info@britinstitute.uk</a></p>
                <p>Website: <a href="https://britinstitute.uk" className="text-primary hover:underline font-bold">https://britinstitute.uk</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer onApplyNow={handleApplyNow} />
    </main>
  );
}

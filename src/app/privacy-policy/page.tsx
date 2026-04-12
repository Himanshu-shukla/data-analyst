'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  const handleApplyNow = () => {
    window.location.href = '/';
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-fuchsia-50 to-purple-50 flex flex-col font-sans">
      <nav className="w-full bg-white/70 backdrop-blur-md border-b border-purple-100 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center text-sm md:text-base">
          <Link href="/" className="font-semibold text-purple-800 hover:text-rose-600 transition flex items-center gap-2">
            <span>&larr;</span> Back to Home
          </Link>
          <span className="font-bold text-purple-950">Brit Institute</span>
        </div>
      </nav>

      <div className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 md:py-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl shadow-purple-900/5 border border-purple-100/50 p-8 md:p-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-700 mb-2">
            Privacy Policy – Brit Institute
          </h1>
          <p className="text-purple-600/70 font-semibold mb-8">Effective Date: 03/03/2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed text-[15px] md:text-base">
            <p>
              At Brit Institute (“we”, “our”, “us”), accessible from <a href="https://britinstitute.uk" className="text-rose-600 hover:text-purple-700 hover:underline font-medium transition-colors">https://britinstitute.uk</a>, we are committed to protecting your personal data and your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>

            <section>
              <h2 className="text-xl font-bold text-purple-950 mb-3">1. Information We Collect</h2>
              <p className="mb-2">We may collect the following:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-purple-400">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Course preferences and responses to form questions</li>
                <li>Technical data (IP address, browser type, device info, cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-950 mb-3">2. How We Collect Data</h2>
              <p className="mb-2">We collect data when you:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-purple-400">
                <li>Fill out forms on our website or ads (e.g., Meta lead forms)</li>
                <li>Contact us via email, phone, or social media</li>
                <li>Browse our website (via cookies and analytics tools)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-950 mb-3">3. How We Use Your Information</h2>
              <p className="mb-2">We use your data to:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-purple-400">
                <li>Contact you regarding courses, applications, and enquiries</li>
                <li>Provide course details, counselling, and support</li>
                <li>Improve our website, services, and user experience</li>
                <li>Send relevant updates or promotional communication (only if appropriate)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-950 mb-3">4. Data Sharing</h2>
              <p className="font-semibold text-rose-700 mb-2">We do not sell your personal data.</p>
              <p className="mb-2">We may share your data with:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-purple-400">
                <li>Internal team members for communication and support</li>
                <li>Trusted service providers (CRM tools, email platforms)</li>
                <li>Legal authorities if required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-950 mb-3">5. Data Storage &amp; Security</h2>
              <p className="mb-2">We implement appropriate technical and organizational measures to protect your data from unauthorized access, misuse, or disclosure.</p>
              <p>However, no system is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-950 mb-3">6. Cookies &amp; Tracking</h2>
              <p className="mb-2">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3 marker:text-purple-400">
                <li>Understand user behavior</li>
                <li>Improve website performance</li>
                <li>Support advertising and remarketing (e.g., Meta Pixel)</li>
              </ul>
              <p>You can control cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-950 mb-3">7. Your Rights</h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3 marker:text-purple-400">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent for communication</li>
              </ul>
              <p>To exercise these rights, contact us at: <a href="mailto:info@britinstitute.uk" className="text-rose-600 hover:text-purple-700 hover:underline font-medium transition-colors">info@britinstitute.uk</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-950 mb-3">8. Third-Party Links</h2>
              <p>Our website may contain links to external sites. We are not responsible for their privacy practices.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-950 mb-3">9. Updates to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-950 mb-3">10. Contact Us</h2>
              <p className="mb-3">If you have any questions about this Privacy Policy, contact:</p>
              <div className="bg-gradient-to-r from-rose-50/50 to-purple-50/50 border border-purple-100 p-6 rounded-2xl text-gray-800 shadow-sm">
                <p className="font-bold text-purple-950 text-lg mb-2">Brit Institute</p>
                <p className="mb-1">Email: <a href="mailto:info@britinstitute.uk" className="text-rose-600 hover:text-purple-700 hover:underline font-medium transition-colors">info@britinstitute.uk</a></p>
                <p>Website: <a href="https://britinstitute.uk" className="text-rose-600 hover:text-purple-700 hover:underline font-medium transition-colors">https://britinstitute.uk</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer onApplyNow={handleApplyNow} />
    </main>
  );
}
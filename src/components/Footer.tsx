'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface FooterProps {
  onApplyNow: () => void;
}

export default function Footer({ onApplyNow }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center p-1">
              <Image
                src="/britinstitute_v1.png"
                alt="Brit Institute Logo"
                width={20}
                height={20}
                className="w-5 h-5"
                loading="lazy"
              />
            </div>
            <span className="text-xl font-bold">Brit Institute</span>
          </div>
          <p className="text-gray-400 mb-8">
            Master Data Analytics and transform your career with industry-leading skills.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onApplyNow}
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            Apply Now
          </motion.button>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-8">
              <a href="/privacy-policy" className="hover:text-primary transition-colors font-medium">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary transition-colors font-medium">Terms & Conditions</a>
            </div>
            <p className="text-gray-600">© {new Date().getFullYear()} Brit Institute. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

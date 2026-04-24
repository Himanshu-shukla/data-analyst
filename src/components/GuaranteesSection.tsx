'use client';

import { motion } from 'framer-motion';
import type { KeyboardEvent } from 'react';
import { Shield, DollarSign, TrendingUp, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import { trackCourseInvestmentClick } from '@/lib/analytics';

interface GuaranteesSectionProps {
  onApplyNow: () => void;
}

export default function GuaranteesSection({ onApplyNow }: GuaranteesSectionProps) {
  const trackInvestmentClick = () => {
    trackCourseInvestmentClick({
      courseTitle: 'Data Analytics Career Program',
      courseSlug: 'data-analytics',
      currency: 'GBP',
    });
  };

  const handleInvestmentKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    event.preventDefault();
    trackInvestmentClick();
  };

  const guarantees = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Job Placement Guarantee",
      description: "We guarantee access to our network and dedicated career support until you land your ideal role.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Skills Mastery Promise",
      description: "Master industry-standard tools and techniques or get additional mentoring until you're job-ready.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Job Placement Assistance",
      description: "Access to our exclusive network of 200+ hiring partners actively seeking data talent.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  const careerPromises = [
    "💼 Direct access to 200+ partner companies",
    "🚀 85% of professionals land jobs within 6 months",
    "🌟 Freelancing business setup and client acquisition support",
    "📈 Lifetime career support and networking opportunities",
    "🎯 Personalized career path planning and mentorship"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            role="button"
            tabIndex={0}
            onClick={trackInvestmentClick}
            onKeyDown={handleInvestmentKeyDown}
            aria-label="Track course investment interest for Data Analytics Career Program"
            className="inline-flex cursor-pointer items-center space-x-2 bg-green-100 border border-green-300 rounded-full px-6 py-2 mb-6 outline-none transition hover:bg-green-200 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-semibold">Risk-Free Investment</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We&apos;re So Confident, We <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Guarantee</span> Your Success
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your success is our reputation. That&apos;s why we back our program with industry-leading guarantees 
            that remove all risk from your investment in your future.
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`${guarantee.bgColor} ${guarantee.borderColor} border-2 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className={`w-16 h-16 ${guarantee.color} mx-auto mb-6 flex items-center justify-center bg-white rounded-full shadow-md`}>
                {guarantee.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{guarantee.title}</h3>
              <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Income Promise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Career Acceleration Promise</h3>
              </div>
              
              <p className="text-xl text-gray-200 mb-8">
                Our program is designed to accelerate your career transformation. Here&apos;s what our graduates achieve:
              </p>

              <div className="space-y-4">
                {careerPromises.map((promise, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">{promise}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl p-8 mb-8"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">95%</div>
                <div className="text-xl font-semibold">Job Placement Success</div>
                <div className="text-sm opacity-90 mt-2">Within 6 Months</div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onApplyNow}
                className="bg-white text-gray-900 font-bold py-5 px-10 rounded-full text-xl hover:shadow-xl transition-all flex items-center space-x-2 mx-auto"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Risk Elimination Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center"
        >
          <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Zero Risk, Maximum Reward
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience our program with complete confidence. We&apos;re committed to your success with 
            ongoing support, personalized mentoring, and guaranteed career assistance.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-bold text-gray-800 mb-3">✅ What&apos;s Guaranteed for Your Success:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Full access to all course materials</li>
                <li>• Personal mentorship and support</li>
                <li>• Job placement assistance</li>
                <li>• Lifetime access to updates</li>
                <li>• Community and networking opportunities</li>
              </ul>
            </div>
            
            <div className="text-left">
              <h4 className="font-bold text-gray-800 mb-3">🎯 Additional Career Support:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Resume and LinkedIn optimization</li>
                <li>• Mock interview sessions with industry experts</li>
                <li>• Portfolio development guidance</li>
                <li>• Salary negotiation strategies</li>
                <li>• Continued learning pathway planning</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

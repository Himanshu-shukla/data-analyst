'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Target, CheckCircle, AlertCircle } from 'lucide-react';
import { bootcampApi, type BootcampApplication } from '@/lib/api';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
}

export default function ApplicationForm({ isOpen, onClose }: ApplicationFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<BootcampApplication>({
    fullName: '',
    email: '',
    phone: '',
    course: 'Data Analytics Career Program'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Validation functions
  const validateFullName = (name: string): string | undefined => {
    if (!name.trim()) return 'Full name is required';
    if (name.trim().length < 2) return 'Full name must be at least 2 characters';
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) return 'Full name can only contain letters, spaces, hyphens, and apostrophes';
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'Email address is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return 'Please enter a valid email address';
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) return 'Phone number is required';
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) return 'Phone number must be at least 10 digits';
    if (cleanPhone.length > 15) return 'Phone number cannot exceed 15 digits';
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone)
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== undefined);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      fullName: true,
      email: true,
      phone: true
    });

    if (!validateForm()) {
      toast.error('Please fix the errors in the form before submitting');
      return;
    }

    setIsSubmitting(true);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || (process.env.NODE_ENV === 'production' ? 'https://api.britinstitute.uk' : 'http://localhost:4000');
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          subject: `${formData.course || 'Data Analytics Career Program'} - Application`,
          message: `User submitted an application for the ${formData.course || 'Data Analytics Career Program'}.`,
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        course: 'Data Analytics Career Program'
      });
      setErrors({});
      setTouched({});
      onClose();
      router.push('/thankyou');
    } catch (error) {
      setIsSubmitting(false);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (touched[name]) {
      const newErrors = { ...errors };
      switch (name) {
        case 'fullName':
          newErrors.fullName = validateFullName(value);
          break;
        case 'email':
          newErrors.email = validateEmail(value);
          break;
        case 'phone':
          newErrors.phone = validatePhone(value);
          break;
      }
      setErrors(newErrors);
    }
  };

  const handleBlur = (fieldName: string) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));

    const newErrors = { ...errors };
    switch (fieldName) {
      case 'fullName':
        newErrors.fullName = validateFullName(formData.fullName);
        break;
      case 'email':
        newErrors.email = validateEmail(formData.email);
        break;
      case 'phone':
        newErrors.phone = validatePhone(formData.phone);
        break;
    }
    setErrors(newErrors);
  };

  const handleCancel = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      course: 'Data Analytics Career Program'
    });
    setErrors({});
    setTouched({});
    onClose();
  };

  const isFormValid = () => {
    return validateFullName(formData.fullName) === undefined &&
      validateEmail(formData.email) === undefined &&
      validatePhone(formData.phone) === undefined &&
      formData.fullName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== '';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            // Changed: Removed strictly fixed height, allowing it to adapt normally while keeping 50vw width
            className="bg-white rounded-2xl shadow-2xl w-full md:w-[50vw] max-w-2xl max-h-[95vh] flex flex-col border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 md:p-6 border-b border-slate-100 bg-slate-50/80 shrink-0">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                    Data Analytics Career Program
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="bg-emerald-100 text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Placement Guarantee
                    </span>
                    <span className="bg-blue-100 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Free Consultation
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCancel}
                  className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Form Content (Only scrolls if on a very small screen, otherwise fully visible) */}
            <div className="flex-1 overflow-y-auto p-5 md:p-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
              <form id="application-form" onSubmit={handleSubmit} className="space-y-5">

                {/* Inputs Area */}
                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('fullName')}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none transition-all duration-200 placeholder:text-slate-400 ${errors.fullName && touched.fullName
                        ? 'border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100'
                        : 'border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                        }`}
                      placeholder="e.g. Jane Doe"
                    />
                    {errors.fullName && touched.fullName && (
                      <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center mt-1.5 text-red-500 text-xs font-medium">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.fullName}
                      </motion.div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none transition-all duration-200 placeholder:text-slate-400 ${errors.email && touched.email
                        ? 'border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100'
                        : 'border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                        }`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && touched.email && (
                      <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center mt-1.5 text-red-500 text-xs font-medium">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.email}
                      </motion.div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={() => handleBlur('phone')}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none transition-all duration-200 placeholder:text-slate-400 ${errors.phone && touched.phone
                        ? 'border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100'
                        : 'border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                        }`}
                      placeholder="+44 7XXX XXXXXX"
                    />
                    {errors.phone && touched.phone && (
                      <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center mt-1.5 text-red-500 text-xs font-medium">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.phone}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Compact Guarantees Section */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 border border-blue-100/60 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-blue-600" />
                    Program Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                      Job Placement Guarantee
                    </div>
                    <div className="flex items-center text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Skills Mastery Promise
                    </div>
                    <div className="flex items-center text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                      Freelancing Setup
                    </div>
                    <div className="flex items-center text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Lifetime Career Support
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Sticky Submit Footer */}
            <div className="border-t border-slate-100 p-5 md:p-6 bg-white shrink-0">
              <button
                type="submit"
                form="application-form"
                disabled={isSubmitting || !isFormValid()}
                className={`w-full py-4 px-6 rounded-xl font-bold text-[15px] transform transition-all duration-200 flex items-center justify-center shadow-sm ${isSubmitting || !isFormValid()
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-500/25 hover:shadow-lg active:scale-[0.98]'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-slate-300 border-t-white mr-2"></div>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Claim Free Consultation
                  </>
                )}
              </button>

              {!isFormValid() && !isSubmitting && Object.keys(touched).length > 0 && (
                <p className="text-xs text-red-500 text-center mt-3 font-medium flex items-center justify-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  Please complete all fields correctly
                </p>
              )}

              <p className="text-[11px] text-slate-400 text-center mt-3.5 font-medium">
                🔒 We'll contact you within 2 hours. 100% Free & No Obligation.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
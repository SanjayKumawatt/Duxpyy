import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  TrendingUp,
  Minus
} from 'lucide-react';

const BlinkingCursor = () => (
  <span className="animate-pulse border-r-2 border-blue-600 ml-1"></span>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Hide success message after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div className="pt-20 font-sans text-gray-900 bg-white min-h-screen">
      
      {/* --- HERO HEADING --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Contact us <BlinkingCursor />
        </h1>
      </section>

      {/* --- MAIN CONTENT (FORM & CONTACT INFO) --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Contact Form Area */}
          <div className="w-full lg:w-1/2">
            <span className="text-blue-600 font-semibold tracking-wider text-xs uppercase mb-4 block">
              CONTACT US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Get in Touch with Our AI Specialists
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Whether you have a question, need support, or just want to say hello, we’re here for you. Reach out to us using the contact form or through details provided for our location. We look forward to hearing from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Your Message (optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3.5 rounded text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </div>
              
              {/* Inline Success Message */}
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-600 font-medium flex items-center justify-center gap-2 mt-4 p-3 bg-green-50 rounded-md border border-green-100"
                >
                  ✓ Your message has been sent. We'll get back to you shortly!
                </motion.div>
              )}
            </form>
          </div>

          {/* Right Side: Contact Information Card (No Map) */}
          <div className="w-full lg:w-1/2 pt-2 lg:pt-0">
            <div className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden">
              
              {/* Card Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
                <Minus className="w-5 h-5 text-gray-500" />
                <span className="font-semibold text-gray-700">India Headquarters</span>
              </div>
              
              {/* Card Body */}
              <div className="p-6 md:p-8 space-y-6">
                
                {/* Email Info */}
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <a href="mailto:contact@duxpysystemhub.in" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
                      contact@duxpysystemhub.in
                    </a>
                  </div>
                </div>

                {/* Address Info */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-gray-600 text-sm leading-relaxed">
                    <p className="font-medium text-gray-800 mb-1">DUXPY TECHNOLOGIES PRIVATE LIMITED</p>
                    <p>House No. Sf1/448, Safipur 1,</p>
                    <p>Harjinder Nagar, Kanpur Nagar,</p>
                    <p>Uttar Pradesh, India, 208007</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      

    </div>
  );
};

export default Contact;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, CheckCircle2, Loader2, X } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Start Loading State
    setIsSubmitting(true);
    
    // Simulate network request (2.5 seconds)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      e.target.reset(); // Clear the form
      
      // Auto-hide the toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 2500);
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0514] font-sans text-white pt-24 pb-20 relative overflow-hidden flex items-center justify-center">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-10"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Contact Your AI-Meeting Assistant
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                We'd love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-base mb-1">DUXPY TECHNOLOGIES PRIVATE LIMITED</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    House No. Sf1/448, Safipur 1, Harjinder Nagar,<br />
                    Kanpur Nagar, Harjinder Nagar,<br />
                    Uttar Pradesh, India, 208007.
                  </p>
                </div>
              </div>

             

              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-gray-500 flex-shrink-0" />
                <a href="mailto:contact@duxpysystemhub.in" className="text-gray-400 text-sm hover:text-white transition-colors">
                  contact@duxpysystemhub.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs font-semibold text-gray-300 ml-1">First name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    required
                    className="w-full bg-[#13141f] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs font-semibold text-gray-300 ml-1">Last name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    required
                    className="w-full bg-[#13141f] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-gray-300 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full bg-[#13141f] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-semibold text-gray-300 ml-1">Phone number</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full bg-[#13141f] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-gray-300 ml-1">Message</label>
                <textarea 
                  id="message"
                  required
                  rows="4"
                  className="w-full bg-[#13141f] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-white text-black font-semibold text-sm rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center min-w-[150px] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin text-black" />
                  ) : (
                    "Send message"
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      </div>

      {/* Side Pop-up Toast Notification (No Browser Alerts) */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed bottom-10 right-4 sm:right-10 bg-[#161722] border border-gray-700 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-xl p-4 flex items-start gap-4 z-50 max-w-sm w-full"
          >
            <div className="mt-0.5">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-white mb-1">Message Sent!</h4>
              <p className="text-xs text-gray-400">Your message has been successfully delivered to our team. We will get back to you shortly.</p>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            {/* Loading bar for auto-hide */}
            <motion.div 
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="absolute bottom-0 left-0 h-1 bg-green-500/50 rounded-b-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Contact;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Lock, 
  Headset, 
  MessageSquare,
  TrendingUp
} from 'lucide-react';

const BlinkingCursor = () => (
  <span className="animate-pulse border-r-2 border-blue-600 ml-1"></span>
);

const BetaAccess = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '' });
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const timelineFeatures = [
    {
      icon: CreditCard,
      title: "Free Trial",
      description: "Get access at no cost. We give our early adopters credits that you can use to try out your own documents."
    },
    {
      icon: Lock,
      title: "Secure Environment",
      description: "We send you an invite to your own dedicated environment on our developing cloud infrastructure. Safe & Secure."
    },
    {
      icon: Headset,
      title: "Dedicated Support",
      description: "Our core engineering team provides dedicated, hands-on support for our beta partners."
    },
    {
      icon: MessageSquare,
      title: "Need more?",
      description: "Get in touch with us directly for a free proof of concept tailored to your business needs."
    }
  ];

  return (
    <div className="pt-20 font-sans text-gray-900 bg-white min-h-screen">
      
      {/* --- HERO HEADING --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Request Beta Access <BlinkingCursor />
        </h1>
      </section>

      {/* --- MAIN CONTENT (FORM & TIMELINE) --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Form Container */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-100 shadow-sm">
            <span className="text-blue-600 font-semibold tracking-wider text-xs uppercase mb-4 block">
              GET STARTED TODAY
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Test your own documents at no cost.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              As an early-stage startup, we value your feedback. We provide you with a separate, secure environment that nobody else has access to, so that you can test your documents in pieces. Provide the information below and our team will be in touch.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Name</label>
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
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Company</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="pt-4">
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
                  ✓ Beta request sent successfully! We'll reach out soon.
                </motion.div>
              )}
            </form>
          </div>

          {/* Right Side: Timeline Features */}
          <div className="w-full lg:w-1/2 pt-8 lg:pt-16">
            <div className="relative border-l-2 border-blue-200 ml-6 space-y-12">
              {timelineFeatures.map((feature, idx) => (
                <div key={idx} className="relative pl-12">
                  {/* Timeline Icon Box */}
                  <div className="absolute -left-[25px] top-0 w-12 h-12 bg-[#323d53] rounded flex items-center justify-center shadow-md">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Feature Content */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      

    </div>
  );
};

export default BetaAccess;
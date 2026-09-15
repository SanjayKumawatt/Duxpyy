import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  AlignLeft, 
  FileWarning, 
  Zap, 
  Server, 
  Fingerprint 
} from 'lucide-react';

// Exact wahi import jo tune bola tha
import img from "../assets/illus.jpg";

// --- Custom Typewriter Effect ---
const BlinkingCursor = () => (
  <span className="animate-pulse border-r-2 border-blue-600 ml-1"></span>
);

const IDPPage = () => {
  // Accordion State
  const [openAccordion, setOpenAccordion] = useState(0);

  // Form State
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', accepted: false });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const accordionData = [
    {
      id: 0,
      title: "Human Readable Definitions",
      icon: AlignLeft,
      content: "Revolutionizing data management with Classification & Extraction guided by Human Readable Definitions, ensuring accuracy and efficiency in data processing. Gone are the days of complex regions and outdated patterns."
    },
    {
      id: 1,
      title: "Dirty Data",
      icon: FileWarning,
      content: "Seamlessly handle unstructured and dirty data in any language, empowering your growing organization to extract valuable insights regardless of data complexity."
    },
    {
      id: 2,
      title: "Get Started in Seconds",
      icon: Zap,
      content: "Experience unprecedented speed and agility with automatic creation of definitions in mere seconds, minimizing setup time and maximizing productivity for your early-stage teams."
    },
    {
      id: 3,
      title: "Enterprise Ready Infrastructure",
      icon: Server,
      content: "Our developing SaaS Platform offers segregated environments for our early adopters - helping you stay compliant. Our modules and AI models can also be configured for on-premise setups to meet Indian data localization needs."
    },
    {
      id: 4,
      title: "Transparent and Traceable AI",
      icon: Fingerprint,
      content: "Having the usage of AI limited to certain tasks and functions allows DUXPY Tech to keep a trace of what was done and why the AI performed certain steps the way it did. This helps your organization stay in line with regulations."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!formData.accepted) return;
    
    setIsSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', accepted: false });
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div className="pt-20 font-sans text-gray-900 bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-8">
          Intelligent Document <br className="hidden md:block" />
          Processing (IDP) <BlinkingCursor />
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
          Forget legacy capture/OCR solutions and empower your business users to automate any incoming document, form or email. No coding required.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/beta-access" className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto text-center">
            Request Beta Access
          </Link>
          
        </div>
      </section>

      {/* --- FEATURES / ACCORDION SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Accordion */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-4">
              {accordionData.map((item) => (
                <div 
                  key={item.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-800">{item.title}</span>
                    </div>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 pt-2 border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Features Title */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-32">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-4 block">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Why choose Inbound by DUXPY Tech?
            </h2>
          </div>

        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="bg-gray-50 border-t border-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Left Side: Imported Image Illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-md aspect-video rounded-2xl flex items-center justify-center overflow-hidden mix-blend-multiply">
                 <img 
                   src={img} 
                   alt="AI Trends and Insights Illustration" 
                   className="w-full h-full object-contain"
                 />
              </div>
            </div>

            {/* Right Side: Form Area */}
            <div className="w-full md:w-1/2 max-w-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Stay Up-to-Date on AI Trends and Insights
              </h3>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name" 
                    required
                    className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name" 
                    required
                    className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email" 
                    required
                    className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex items-start gap-2 pt-2 pb-4">
                  <input 
                    type="checkbox" 
                    id="privacyPolicy" 
                    name="accepted"
                    checked={formData.accepted}
                    onChange={handleInputChange}
                    required
                    className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="privacyPolicy" className="text-sm text-gray-500 cursor-pointer">
                    I accept the privacy policy
                  </label>
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    type="submit"
                    className="bg-gray-800 text-white px-8 py-3 rounded text-sm font-medium hover:bg-gray-900 transition-colors"
                  >
                    Subscribe
                  </button>
                  
                  {/* Inline Success Message (No Browser Alert) */}
                  {isSubmitted && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-green-600 font-medium flex items-center gap-1"
                    >
                      ✓ Subscribed successfully!
                    </motion.span>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default IDPPage;
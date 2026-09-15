import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  FileOutput, 
  CheckSquare 
} from 'lucide-react';
import img from "../assets/illus.jpg";

const BlinkingCursor = () => (
  <span className="animate-pulse border-r-2 border-blue-600 ml-1"></span>
);

const FormProduct = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', accepted: false });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Accordion Data - Added relevant dummy features based on the provided text
  const accordionData = [
    {
      id: 0,
      title: "Guided Section Forms",
      icon: Layers,
      content: "Split up long and complex forms based on logical sections that users will be guided through. This step-by-step approach significantly improves completion rates and user experience."
    },
    {
      id: 1,
      title: "Instant PDF to Web Conversion",
      icon: FileOutput,
      content: "Simply convert conventional, static PDF forms into responsive, mobile-friendly web forms. DUXPY Tech helps you digitize legacy documents effortlessly without requiring a dedicated front-end team."
    },
    {
      id: 2,
      title: "Built-in Data Validation",
      icon: CheckSquare,
      content: "Ensure data accuracy right at the source. Our developing form module supports real-time field validation, helping your operations reduce downstream errors and maintain a clean database."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!formData.accepted) return;
    setIsSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', accepted: false });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="pt-20 font-sans text-gray-900 bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-8">
          Form - Webform Design <br className="hidden sm:block" />
          & Conversion <BlinkingCursor />
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto mb-10">
          Introducing our cutting-edge Form Module. Our intuitive editor empowers users of all levels to craft sleek and conversion-focused webforms effortlessly or simply convert conventional PDF forms to Web forms.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/beta-access" 
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto text-center"
          >
            Request Beta Access
          </Link>
       
        </div>
      </section>

      {/* --- FEATURES / ACCORDION SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-start">
          
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
                      <span className="font-semibold text-gray-800 text-left">{item.title}</span>
                    </div>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Sticky Heading */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-32">
            <span className="text-blue-600 font-semibold tracking-wider text-xs uppercase mb-4 block">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Our <br/> Advantages
            </h2>
          </div>

        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="bg-gray-50 border-t border-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Left Side: Imported Illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-md aspect-video rounded-2xl flex items-center justify-center overflow-hidden mix-blend-multiply">
                <img 
                  src={img} 
                  alt="AI Trends and Insights Illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Side: Form */}
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
                    id="formPrivacy" 
                    name="accepted"
                    checked={formData.accepted}
                    onChange={handleInputChange}
                    required
                    className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="formPrivacy" className="text-sm text-gray-500 cursor-pointer">
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

export default FormProduct;
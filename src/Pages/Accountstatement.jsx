import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Workflow, 
  FileText
} from 'lucide-react';

const BlinkingCursor = () => (
  <span className="animate-pulse border-r-2 border-blue-600 ml-1"></span>
);

// Mac Window Wrapper for pure CSS illustrations
const MacWindow = ({ children }) => (
  <div className="w-full rounded-xl border border-gray-200 shadow-sm bg-white overflow-hidden flex flex-col mt-6">
    <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
      <div className="w-3 h-3 rounded-full bg-red-400"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-400"></div>
    </div>
    <div className="flex-1 p-0 bg-gray-50 flex items-center justify-center overflow-x-auto">
      {children}
    </div>
  </div>
);

const AccountStatements = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', useCase: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', useCase: '' });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  // Accordion Data with CSS Illustrations embedded
  const accordionData = [
    {
      id: 0,
      title: "How we automated the Workflow.",
      icon: Workflow,
      content: (
        <div className="text-gray-600 text-sm leading-relaxed">
          <p className="mb-4">
            Our flow module comes with a powerful business workflow designer to automate business processes.
          </p>
          <Link to="/products/flow" className="text-blue-600 font-medium hover:underline inline-block mb-2">
            Learn more about our Flow Module
          </Link>
          
          {/* CSS Illustration: Flow Designer for Statements */}
          <MacWindow>
            <div className="w-full min-w-[600px] h-[300px] bg-white relative p-6 font-mono text-[10px] overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
              
              <div className="absolute top-4 left-4 font-sans font-semibold text-gray-700 flex items-center gap-2 text-sm">
                <div className="w-6 h-6 bg-blue-600 rounded text-white flex items-center justify-center">d</div>
                Flow Designer
              </div>

              {/* Nodes Container */}
              <div className="flex items-center justify-center gap-6 h-full pt-8">
                
                {/* Node 1 */}
                <div className="w-40 bg-white border border-gray-300 rounded shadow-sm relative z-10">
                  <div className="p-2 border-b border-gray-200 font-semibold text-center bg-gray-50 rounded-t">Create Statement Trigger</div>
                  <div className="p-2 text-gray-500 space-y-1">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-400 rounded-full"></div> End of Month</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-gray-400 rounded-full"></div> Cron Job</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="w-6 h-[2px] bg-gray-300 relative z-0">
                  <div className="absolute -right-1 -top-1 w-2 h-2 border-t-2 border-r-2 border-gray-300 rotate-45"></div>
                </div>

                {/* Node 2 */}
                <div className="w-40 bg-white border border-gray-300 rounded shadow-sm relative z-10">
                  <div className="p-2 border-b border-gray-200 font-semibold text-center bg-gray-50 rounded-t">Get Account Data</div>
                  <div className="p-2 text-gray-500 space-y-1">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-green-400 rounded-full"></div> Fetch Transactions</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-400 rounded-full"></div> Calculate Interest</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="w-6 h-[2px] bg-gray-300 relative z-0">
                  <div className="absolute -right-1 -top-1 w-2 h-2 border-t-2 border-r-2 border-gray-300 rotate-45"></div>
                </div>

                {/* Node 3 */}
                <div className="w-40 bg-white border border-gray-300 rounded shadow-sm relative z-10">
                  <div className="p-2 border-b border-gray-200 font-semibold text-center bg-gray-50 rounded-t">Generate HTML Statement</div>
                  <div className="p-2 text-gray-500 space-y-1">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-purple-600 rounded-full"></div> Map Variables</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> Export Document</div>
                  </div>
                </div>

              </div>
            </div>
          </MacWindow>
        </div>
      )
    },
    {
      id: 1,
      title: "How we designed the Statement.",
      icon: FileText,
      content: (
        <div className="text-gray-600 text-sm leading-relaxed">
          <p className="mb-4">
            Our outbound module allows your operations team to dynamically design pixel-perfect account statements. Incorporate tables for transactions, dynamic charts for spending, and secure data mapping without writing custom HTML/CSS.
          </p>
          <Link to="/products/outbound" className="text-blue-600 font-medium hover:underline inline-block">
            Learn more about our Outbound Module
          </Link>
        </div>
      )
    }
  ];

  return (
    <div className="pt-20 font-sans text-gray-900 bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-8">
          Online Account <br className="hidden sm:block" />
          Statement <BlinkingCursor />
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
          Issue regular statements summarizing account activity, including deposits, withdrawals, interest earned, and fees charged.
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

      {/* --- USED FEATURES SECTION --- */}
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
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
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
              Used Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Learn more <br/> about how it <br/> was built.
            </h2>
          </div>

        </div>
      </section>

      {/* --- CONTACT / DON'T SEE WHAT YOU NEED SECTION --- */}
      <section className="bg-gray-50 border-t border-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Text Area */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Don't see what you need?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our developing modules at DUXPY Tech are very versatile and the solutions you can see here have been built closely with our early design partners and local businesses, but might not cover your specific needs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are always interested in learning about real-world solutions that would meet your business needs.
              </p>
              <p className="font-semibold text-gray-900">
                Just leave us a message, using the form.
              </p>
            </div>

            {/* Form Area */}
            <div className="w-full md:w-1/2">
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Your Use Case</label>
                  <textarea 
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center gap-4">
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
                    ✓ Your message has been sent successfully. We'll be in touch!
                  </motion.div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AccountStatements;
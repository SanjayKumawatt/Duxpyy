import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Users, 
  Zap, 
  Server, 
  Fingerprint, 
  Coins 
} from 'lucide-react';
import img from "../assets/illus.jpg";


const BlinkingCursor = () => (
  <span className="animate-pulse border-r-2 border-blue-600 ml-1"></span>
);

const FormsManagement = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', accepted: false });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const accordionData = [
    {
      id: 0,
      title: "Business User Empowerment",
      icon: Users,
      content: "Configuration is driven by normal conversational input. No coding, no complex drag and drop interface. Simply describe what is desired, and our developing engines at DUXPY Tech will do the rest. No heavy training is required."
    },
    {
      id: 1,
      title: "Get Started in Seconds",
      icon: Zap,
      content: "Experience unprecedented speed with the automatic creation of definitions in mere seconds, minimizing setup time for your early-stage or scaling organization."
    },
    {
      id: 2,
      title: "Enterprise Ready Infrastructure",
      icon: Server,
      content: "Our SaaS Platform offers segregated environments for early adopters to stay compliant. All our modules and AI models can run on-premise as well, respecting Indian data norms."
    },
    {
      id: 3,
      title: "Transparent and Traceable AI",
      icon: Fingerprint,
      content: "Having AI limited to certain tasks allows DUXPY Tech to keep a trace of what was done and why, helping your operations keep in line with strict compliance regulations."
    },
    {
      id: 4,
      title: "No Upfront Costs",
      icon: Coins,
      content: "Migrate from outdated systems with our fast and cost-effective solutions. We focus on low-barrier entry for growing businesses without massive capital expenditure."
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

  // Helper for Mac Window UI Wrapper
  const MacWindow = ({ children }) => (
    <div className="w-full rounded-xl border border-gray-200 shadow-xl bg-white overflow-hidden flex flex-col h-full min-h-[300px]">
      <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
      <div className="flex-1 p-4 bg-gray-50 flex items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  );

  return (
    <div className="pt-20 font-sans text-gray-900 bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-8">
          Forms Management <BlinkingCursor />
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto mb-10">
          Forms management is the practice of creating, distributing, completing, evaluating, and automating forms. 
          We believe that digitalization of forms is best deployed following a logical process, with a focus on optimal return on investment and risk reduction. 
          This is achieved by enhancing your current systems, processes, and capabilities – not replacing them.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/beta-access" className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto text-center">
            Request Beta Access
          </Link>
          
        </div>
      </section>

      {/* --- MATURITY GRAPH SECTION --- */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 h-64 md:h-80 mb-12">
            {[
              { title: "PDF Forms with Manual Processing", stage: "INITIAL" },
              { title: "Automated Data Extraction (OCR)", stage: "FUNCTIONAL" },
              { title: "Automated Workflows (BPM)", stage: "EFFICIENT" },
              { title: "Data collection through native Webforms", stage: "STRATEGIC" },
              { title: "Advanced Data Collection (AI Agent)", stage: "OPTIMIZED" }
            ].map((col, idx) => (
              <div key={idx} className="relative w-full h-full bg-[#2a3441] rounded-t-sm overflow-hidden flex flex-col group">
                <div className="p-4 text-center z-10">
                  <p className="text-xs md:text-sm text-gray-300 font-medium">{col.title}</p>
                </div>
                {/* Diagonal Blue Fill overlay */}
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-blue-500 z-0 transition-all duration-500 group-hover:bg-blue-400"
                  style={{ height: `${20 + (idx * 15)}%`, clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)' }}
                ></div>
                <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                  <p className="text-[10px] md:text-xs font-bold text-white tracking-wider">{col.stage}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Forms Management Maturity</h3>
            <p className="text-gray-500 text-md leading-relaxed">
              We know forms are not going to disappear in the foreseeable future – neither should they, and we also recognize that organizations are at various different stages of what we call the forms’ management maturity scale. However, we believe that every organization can increase efficiency even further, without the need to replace their whole architecture. Depending on the stages below, we will tackle the low-hanging fruit first and our products simply integrate into your existing architecture – no need to replace what you already have.
            </p>
          </div>
        </div>
      </section>

      {/* --- STAGES (ALTERNATING LAYOUT WITH CSS ILLUSTRATIONS) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        
        {/* 1. INITIAL STAGE */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <MacWindow>
              {/* CSS Illustration: Complex Medical/Tax Form Fake Data */}
              <div className="w-full h-full bg-white border border-gray-300 p-4 shadow-sm text-[8px] font-mono text-gray-600 flex flex-col gap-2">
                <div className="border-b-2 border-gray-400 pb-2 mb-2 font-bold text-[10px] uppercase text-center">Patient Registration Form</div>
                <div className="flex gap-2">
                  <div className="flex-1 border border-gray-300 p-1">Last Name: <span className="text-blue-600">DOE</span></div>
                  <div className="flex-1 border border-gray-300 p-1">First Name: <span className="text-blue-600">JOHN</span></div>
                  <div className="w-16 border border-gray-300 p-1">MI: <span className="text-blue-600">A</span></div>
                </div>
                <div className="border border-gray-300 p-1">Address: <span className="text-blue-600">999 FAKE STREET, CITY, ST 00000</span></div>
                <div className="flex gap-2">
                  <div className="flex-1 border border-gray-300 p-1">DOB: <span className="text-blue-600">01/01/1980</span></div>
                  <div className="flex-1 border border-gray-300 p-1">SSN: <span className="text-blue-600">XXX-XX-XXXX</span></div>
                </div>
                <div className="grid grid-cols-3 gap-1 mt-2">
                  <div className="border border-gray-300 h-8 bg-gray-100"></div>
                  <div className="border border-gray-300 h-8 bg-gray-100"></div>
                  <div className="border border-gray-300 h-8 bg-gray-100"></div>
                </div>
                <div className="border border-gray-300 p-1 mt-auto text-center italic text-gray-400">Sample Form - Not Real Data</div>
              </div>
            </MacWindow>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">INITIAL STAGE</span>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              You have probably heavily invested in the creation of forms that capture the information that is needed. However, in most cases, the extraction of data still happens manually. Deployment of a capture is an ideal starting point in most organizations.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our Inbound Solution identifies the type of document, and extracts/transforms data to a digital format. In addition, it is very likely that DUXPY Tech can replace legacy systems at a fraction of the cost of current system support and maintenance fees.
            </p>
            <Link to="/products/inbound" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-sm">
              Learn more about our Inbound Module <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 2. FUNCTIONAL STAGE */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <MacWindow>
              {/* CSS Illustration: Inbound/OCR UI Fake Data */}
              <div className="w-full h-full bg-white flex shadow-sm border border-gray-200">
                <div className="w-1/4 bg-gray-100 border-r border-gray-200 p-2 flex flex-col gap-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-6 bg-blue-100 text-blue-800 text-[8px] flex items-center px-2 rounded">Inv_001.pdf</div>
                  <div className="h-6 bg-gray-200 text-gray-500 text-[8px] flex items-center px-2 rounded">Rec_992.png</div>
                </div>
                <div className="flex-1 p-4 flex flex-col relative">
                  <div className="w-full h-32 bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center mb-2 relative">
                    <span className="text-gray-300 text-xs font-mono uppercase">Scanned Document</span>
                    {/* Bounding Box Simulation */}
                    <div className="absolute top-8 left-10 w-24 h-6 border-2 border-blue-500 bg-blue-500/20"></div>
                  </div>
                  <div className="text-[10px] font-mono">
                    <div className="flex justify-between border-b border-gray-100 py-1">
                      <span className="text-gray-500">Vendor:</span> <span className="font-semibold">Acme Corp Ltd.</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 py-1">
                      <span className="text-gray-500">Total Amount:</span> <span className="font-semibold text-green-600">$0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </MacWindow>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">FUNCTIONAL STAGE</span>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              OCR and Intelligent Document Processing have been buzzwords for years, so some organizations already have their data extracted and automatically stored in a database or other system. Automating the process is the logical next step.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We offer a “next generation” workflow automation solution. Conversational input allows users to create or modify process workflows in minutes by simply describing the process in conversation language. While some solutions support only linear flows, DUXPY Tech supports branching at any step in a flow.
            </p>
            <Link to="/products/flow" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-sm">
              Learn more about our Flow Module <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3. EFFICIENT STAGE */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <MacWindow>
              {/* CSS Illustration: Flow/BPM Nodes */}
              <div className="w-full h-full relative bg-gray-50 flex items-center justify-center p-4">
                 {/* Flow Lines (simulated) */}
                 <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gray-300 -translate-y-1/2 z-0"></div>
                 <div className="absolute top-1/4 bottom-1/4 left-1/2 w-0.5 bg-gray-300 -translate-x-1/2 z-0"></div>
                 
                 {/* Nodes */}
                 <div className="relative z-10 w-full h-full flex justify-between items-center text-[8px] font-mono">
                    <div className="bg-white border border-gray-300 shadow-sm p-2 rounded text-center w-20">
                      <div className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full mx-auto mb-1 flex items-center justify-center">1</div>
                      Extract Data
                    </div>
                    <div className="flex flex-col justify-between h-3/4">
                      <div className="bg-white border border-gray-300 shadow-sm p-2 rounded text-center w-20">
                        <div className="w-4 h-4 bg-green-100 text-green-600 rounded-full mx-auto mb-1 flex items-center justify-center">2A</div>
                        Validate
                      </div>
                      <div className="bg-white border border-gray-300 shadow-sm p-2 rounded text-center w-20 border-red-300">
                        <div className="w-4 h-4 bg-red-100 text-red-600 rounded-full mx-auto mb-1 flex items-center justify-center">2B</div>
                        Exception
                      </div>
                    </div>
                    <div className="bg-white border border-blue-500 shadow-md p-2 rounded text-center w-20">
                      <div className="w-4 h-4 bg-blue-600 text-white rounded-full mx-auto mb-1 flex items-center justify-center">3</div>
                      Save to DB
                    </div>
                 </div>
              </div>
            </MacWindow>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">EFFICIENT STAGE</span>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              You have invested in the creation of forms that provide the information that is needed. The best path to capturing that information digitally vs through documents is to create a corresponding web form. This allows the same data to be introduced into the same workflow as data extracted from documents.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our Forms’ module enables real time validation of data, supports required fields, etc., reducing related downstream cost and effort. It further allows the automatic conversion of PDFs to web forms based on your document in minutes.
            </p>
            <Link to="/products/form" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-sm">
              Learn more about our Form Module <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4. STRATEGIC STAGE */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <MacWindow>
              {/* CSS Illustration: Form Builder UI */}
              <div className="w-full h-full bg-white p-6 shadow-inner flex flex-col gap-3">
                <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                <div className="space-y-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-gray-500 font-medium">First Name *</span>
                    <div className="w-full h-6 border border-gray-300 rounded bg-gray-50"></div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-gray-500 font-medium">Email Address *</span>
                    <div className="w-full h-6 border border-gray-300 rounded bg-gray-50"></div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-3 h-3 border border-gray-300 rounded-sm"></div>
                    <span className="text-[9px] text-gray-400">Accept fake terms and conditions</span>
                  </div>
                  <div className="w-16 h-6 bg-blue-500 rounded mt-2"></div>
                </div>
              </div>
            </MacWindow>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">STRATEGIC STAGE</span>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              If your organization is at a stage where PDF forms and back-office processes are fully automated and forms are, in addition, provided as web forms, we think it is time to look at improving customer experience and introducing new channels for data gathering.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our Agent is an AI “virtual team member” that can be very easily configured and deployed for a variety of cases of use. Customers can “fill out” data through a conversation with them. Either through text (chat) or speech (phone).
            </p>
            <Link to="/products/agent" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-sm">
              Learn more about our Agent Module <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 5. OPTIMIZED STAGE */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <MacWindow>
              {/* CSS Illustration: Conversational AI Agent */}
              <div className="w-full h-full bg-gray-50 p-4 flex flex-col gap-3 font-sans overflow-hidden">
                <div className="self-end bg-blue-600 text-white text-[9px] p-2 rounded-l-lg rounded-tr-lg max-w-[80%] shadow-sm">
                  Hi, I need to update my shipping details.
                </div>
                <div className="self-start bg-white border border-gray-200 text-gray-700 text-[9px] p-2 rounded-r-lg rounded-tl-lg max-w-[80%] shadow-sm">
                  Hello! I can help with that. Could you please provide your 5-digit dummy zip code?
                </div>
                <div className="self-end bg-blue-600 text-white text-[9px] p-2 rounded-l-lg rounded-tr-lg max-w-[80%] shadow-sm">
                  00000
                </div>
                <div className="self-start bg-white border border-gray-200 text-gray-700 text-[9px] p-2 rounded-r-lg rounded-tl-lg max-w-[80%] shadow-sm flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </MacWindow>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">OPTIMIZED STAGE</span>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Organizations at this stage are far ahead of the curve and can look at cost optimizations. DUXPY Tech provides a comprehensive solution set that provides digitalization and automation for all document-centric processes. Each component of the suite can be deployed individually.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Configuration is driven by normal conversational input. No coding, no complex drag and drop interface. Simply describe what is desired, and DUXPY Tech will do the rest. No training is required and if a user needs assistance, the solution will provide guidance. Take a look at those and more advantages below.
            </p>
          </div>
        </div>

      </section>

      {/* --- FEATURES / ACCORDION SECTION --- */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            
            {/* Features Title */}
            <div className="w-full lg:w-2/5 lg:sticky lg:top-32">
              <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-4 block">
                Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Why choose DUXPY Tech?
              </h2>
            </div>

            {/* Accordion */}
            <div className="w-full lg:w-3/5">
              <div className="space-y-4">
                {accordionData.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <item.icon className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-gray-800">{item.title}</span>
                      </div>
                      {openAccordion === item.id ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                    </button>
                    <AnimatePresence>
                      {openAccordion === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
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

          </div>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION (Imported Image) --- */}
      <section className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-md aspect-video rounded-2xl flex items-center justify-center overflow-hidden">
                 <img src={img} alt="AI Trends and Insights" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="w-full md:w-1/2 max-w-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Stay Up-to-Date on AI Trends and Insights
              </h3>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First name" required className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last name" required className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                
                <div className="flex items-start gap-2 pt-2 pb-4">
                  <input type="checkbox" id="privacyOpt" name="accepted" checked={formData.accepted} onChange={handleInputChange} required className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label htmlFor="privacyOpt" className="text-sm text-gray-500 cursor-pointer">I accept the privacy policy</label>
                </div>

                <div className="flex items-center gap-4">
                  <button type="submit" className="bg-gray-800 text-white px-8 py-3 rounded text-sm font-medium hover:bg-gray-900 transition-colors">
                    Subscribe
                  </button>
                  {isSubmitted && (
                    <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-sm text-green-600 font-medium flex items-center gap-1">
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

export default FormsManagement;
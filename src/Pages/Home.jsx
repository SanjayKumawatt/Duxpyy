import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Users, Server, Shuffle } from 'lucide-react';

import img from "../assets/illus.jpg"


import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"

import vid from "../assets/vid1.mp4"



// --- Custom Typewriter Component ---
const Typewriter = ({ words, textClass }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100;
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText(word.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={textClass}>
      {currentText}
      <span className="animate-pulse border-r-2 border-current ml-1 text-blue-600"></span>
    </span>
  );
};

const Home = () => {
  // Form State
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', accepted: false });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    
    // Yahan tu future me API call laga sakta hai
    setIsSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', accepted: false });
    
    // 4 seconds baad success message gayab ho jayega
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div className="pt-20 font-sans text-gray-900 bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Transform <Typewriter words={['Conversations', 'Documents', 'Workflows', 'Raw Data']} textClass="text-blue-600" /> <br />
          to Structured Data
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-500 text-lg mb-10 leading-relaxed">
          Manual data entry from unstructured documents is prone to errors and inefficiencies. 
          Empower your early-stage operations in India to automate incoming documents, forms, or emails. 
          Code-free approaches for growing teams.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <Link to="/beta-access" className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto text-center">
            Request Beta Access
          </Link>
          
        </div>

        {/* Video Placeholder (Mac Window Style) */}
        <div>
          
          <div className="aspect-video relative  flex items-center justify-center">
            <img src={img1} alt="" />
          </div>
        </div>
      </section>

      {/* --- WE ARE SECTION (Blue Banner) --- */}
      <section className="bg-blue-600 py-20 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            We are <Typewriter words={['Cloud-Based', 'AI-Driven', 'No-Code', 'Innovators']} textClass="text-white" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageSquare, title: 'Conversational Intelligence', desc: 'Engage in a new era of interaction with our conversational interface prototype.' },
              { icon: Users, title: 'Business User Empowerment', desc: 'Place control in the hands of your operations team - minimizing IT dependency.' },
              { icon: Server, title: 'Infrastructure Choice', desc: 'Our modules run in our secure cloud-based environment or locally.' },
              { icon: Shuffle, title: 'Legacy System Transformation', desc: 'Start migrating from outdated systems with our early-stage, cost-effective solutions.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 leading-tight">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODULES SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20 flex items-center justify-center gap-2">
          <h2 className="text-2xl font-bold text-gray-800">See how simple Intelligent Document Processing can be.</h2>
          <ArrowRight className="w-6 h-6 text-gray-800" />
        </div>

        {/* Inbound Module */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-24">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] rounded-xl bg-gray-100 border border-gray-200 shadow-lg flex items-center justify-center overflow-hidden">
               {/* UI Screenshot Placeholder - Add your image here */}
               {/* <span className="text-gray-400 font-medium">Inbound Designer UI</span> */}
               <img src={img1} alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-4 block">INBOUND MODULE</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Specify the data that needs to be extracted.
            </h3>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Our inbound module effortlessly classifies, analyses and extracts data from documents, helping Indian businesses streamline early operations.
            </p>
            <Link to="/products/inbound" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Learn more about our Inbound Module <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Flow Module */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] rounded-xl bg-gray-100 border border-gray-200 shadow-lg flex items-center justify-center overflow-hidden">
               {/* UI Screenshot Placeholder - Add your image here */}
               {/* <span className="text-gray-400 font-medium">Flow Designer UI</span> */}
               <img src={img2} alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-4 block">FLOW MODULE</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Define the next steps for your data and documents.
            </h3>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Our flow module comes with a business workflow designer to automate fundamental business processes without heavy coding.
            </p>
            <Link to="/products/flow" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Learn more about our Flow Module <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="bg-gray-50 border-t border-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Illustration Area */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-md aspect-video bg-blue-50/50 rounded-2xl flex items-center justify-center">
                 {/* 3D Illustration Placeholder - Add your image here */}
                 {/* <span className="text-blue-300 font-medium text-sm">3D Contract Illustration</span> */}
                 <img src={img} alt="" />
              </div>
            </div>

            {/* Form Area */}
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
                    id="privacy" 
                    name="accepted"
                    checked={formData.accepted}
                    onChange={handleInputChange}
                    required
                    className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-500">
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
                  
                  {/* Elegant Success Message (No Alert) */}
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

export default Home;
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Globe, Building2, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 font-sans text-gray-900 bg-white min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight mb-8">
          About DUXPY Tech <span className="text-blue-600 animate-pulse">|</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
          We are an early-stage technology startup proudly based in India. 
          Our mission is to simplify complex business workflows by building accessible, 
          intelligent, and cloud-ready systems for emerging enterprises.
        </p>
      </section>

      {/* --- OUR STORY & VISION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-6">
              <Rocket className="w-4 h-4" /> Our Journey
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Building the foundation for next-generation system hubs.
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded and driven by a passionate team, including our lead developer Rajeev Sharma, DUXPY TECHNOLOGIES PRIVATE LIMITED is currently in its growth phase. We don't rely on exaggerated claims or inflated statistics; instead, we focus on engineering robust, no-code solutions that solve real-world document and data challenges.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Operating out of Kanpur, we are dedicated to proving that powerful enterprise-grade tools can be built from the ground up with dedication, modern web technologies, and a clear vision.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <Target className="w-12 h-12 text-blue-600 mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Our Core Focus</h3>
            <ul className="space-y-4 text-gray-600 relative z-10">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>Empowering business users with code-free automation tools.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>Developing flexible cloud and on-premise infrastructure.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>Creating sustainable, high-ROI legacy system transformations.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- COMPANY DETAILS SECTION --- */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Details</h2>
            <p className="text-gray-500 text-lg">Official information for DUXPY TECHNOLOGIES PRIVATE LIMITED.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Legal Name */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Registered Name</h4>
              <p className="text-gray-900 font-medium leading-snug">DUXPY TECHNOLOGIES PRIVATE LIMITED</p>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Headquarters</h4>
              <p className="text-gray-900 font-medium leading-relaxed">
                House No. Sf1/448, Safipur 1, Harjinder Nagar,<br />
                Kanpur Nagar, Uttar Pradesh,<br />
                India, 208007
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Address</h4>
              <a href="mailto:contact@duxpysystemhub.in" className="text-blue-600 font-medium hover:underline break-all">
                contact@duxpysystemhub.in
              </a>
            </div>

            
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
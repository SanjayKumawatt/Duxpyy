import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#323d53] text-slate-300 font-sans border-t border-[#404c66]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section - Company Details */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#404c66] pb-12 mb-12 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 inline-flex">
                           <img src={logo} className='h-9 mb-2' alt="" />
             
              <span className="text-2xl font-medium text-white tracking-tight">
                Duxpy Tech
              </span>
            </Link>
            <h2 className="text-white text-lg font-medium">DUXPY TECHNOLOGIES PRIVATE LIMITED</h2>
          </div>

          <div className="flex flex-col gap-3 max-w-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
              <p className="text-sm leading-relaxed text-slate-300">
                House No. Sf1/448, Safipur 1, Harjinder Nagar,<br />
                Kanpur Nagar, Uttar Pradesh, India, 208007
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400 shrink-0" />
              <a href="mailto:contact@duxpysystemhub.in" className="text-sm hover:text-white transition-colors">
                contact@duxpysystemhub.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/early-access" className="text-sm hover:text-white transition-colors">Request Beta Access</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions/idp" className="text-sm hover:text-white transition-colors">Intelligent Document Processing</Link></li>
              <li><Link to="/solutions/forms-management" className="text-sm hover:text-white transition-colors">Forms Management</Link></li>
              <li><Link to="/solutions/xfa-conversion" className="text-sm hover:text-white transition-colors">XFA Form Conversion</Link></li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/products/flow" className="text-sm hover:text-white transition-colors">Flow</Link></li>
              <li><Link to="/products/agent" className="text-sm hover:text-white transition-colors">Agent</Link></li>
              <li><Link to="/products/inbound" className="text-sm hover:text-white transition-colors">Inbound</Link></li>
              <li><Link to="/products/outbound" className="text-sm hover:text-white transition-colors">Outbound</Link></li>
              <li><Link to="/products/form" className="text-sm hover:text-white transition-colors">Form</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              
              <li><Link to="/use-case/loan-application" className="text-sm hover:text-white transition-colors">Banking Use Cases</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-[#404c66] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} DUXPY TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
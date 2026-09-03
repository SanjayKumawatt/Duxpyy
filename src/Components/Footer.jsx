import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, MapPin } from 'lucide-react';
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#0a0514] border-t border-white/10 pt-20 pb-10 font-sans text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Company Details */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-1 mb-4">
                           <img src={logo} className='h-8 mb-1' alt="" />
             
              <span className="text-3xl font-bold tracking-tight text-purple-400">
                Duxpy
              </span>
            </Link>
            
            <p className="text-white font-semibold text-lg">
              DUXPY TECHNOLOGIES PRIVATE LIMITED
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  House No. Sf1/448, Safipur 1, Harjinder Nagar,<br />
                  Kanpur Nagar, Harjinder Nagar,<br />
                  Uttar Pradesh, India, 208007.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <a href="mailto:contact@duxpysystemhub.in" className="text-sm text-gray-400 hover:text-white transition-colors">
                  contact@duxpysystemhub.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/agents" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Agents</Link></li>
              <li><Link to="/use-cases" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Use Cases</Link></li>
              <li><Link to="/features" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/solutions/sales" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Sales Automation</Link></li>
              <li><Link to="/solutions/engineering" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Engineering & CTO Assistant</Link></li>
              <li><Link to="/solutions/recruiting" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Recruiting Insights</Link></li>
              <li><Link to="/solutions/project-management" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Project Management</Link></li>
              <li><Link to="/solutions/finance" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Finance & Dealflow</Link></li>
              <li><Link to="/solutions/customer-support" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Customer Support</Link></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6">Resources & Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/blogs" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Blogs & Insights</Link></li>
              
              {/* Exactly 2 Legal Links */}
              <li className="pt-2">
                <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} DUXPY TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            <a href="https://duxpysystemhub.in" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              duxpysystemhub.in
            </a>
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
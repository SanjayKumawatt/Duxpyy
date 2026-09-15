import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Mail, 
  Building2, 
  ArrowRight, 
  Workflow, 
  Bot, 
  ArrowDownToLine, 
  ArrowUpFromLine, 
  FormInput,
  Menu,
  X
} from 'lucide-react';

import logo from "../assets/logo.png"

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let timeoutId;

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutId);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} className='h-9 mb-2' alt="" />
              <span className="text-xl font-medium text-gray-800 tracking-tight">
                Duxpy Tech
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* About Dropdown */}
            <div 
              className="relative py-8"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-medium transition-colors">
                About <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'about' ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeMenu === 'about' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] bg-white border border-gray-100 shadow-xl rounded-2xl p-8 "
                  >
                    <div>
                      {/* Clickable About Link */}
                      <Link to="/about" className="flex items-start gap-4 group p-2 -m-2 rounded-xl hover:bg-gray-50 transition-colors">
                        <Building2 className="w-6 h-6 text-gray-700 mt-1 group-hover:text-blue-600 transition-colors" />
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">About our Company</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            At DUXPY TECHNOLOGIES, our team is committed to rethinking conventional methodologies to build scalable systems for India and beyond.
                          </p>
                        </div>
                      </Link>
                    </div>
                   
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative py-8"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Solutions <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'solutions' ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              <AnimatePresence>
                {activeMenu === 'solutions' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-20 -left-[400px] w-[1000px] bg-white border border-gray-100 shadow-xl rounded-2xl p-8 flex gap-8"
                  >
                    <div className="w-1/4 border-r border-gray-100 pr-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">Interested in our Industry Use Cases?</h3>
                      <div className="space-y-4 text-sm font-medium">
                        <div className="text-blue-600">Banking</div>
                        <Link to="/use-case/loan-application" className="block text-gray-600 hover:text-blue-600 transition-colors">Loan Application Agent</Link>
                        <Link to="/use-case/account-statements" className="block text-gray-600 hover:text-blue-600 transition-colors">Online Account Statements</Link>
                        <Link to="/use-case/fraud-alerts" className="block text-gray-600 hover:text-blue-600 transition-colors">Automated Fraud Alerts</Link>
                      </div>
                    </div>
                    
                    <div className="w-3/4 grid grid-cols-3 gap-6">
                      {/* Made Cards Clickable Links */}
                      <Link to="/solutions/idp" className="block bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-blue-200 transition-all group">
                        <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Intelligent Document Processing (IDP)</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          Empower your Indian business users to automate incoming documents, forms or emails seamlessly. Exploring code-free approaches for early adopters.
                        </p>
                      </Link>
                      <Link to="/solutions/forms-management" className="block bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-blue-200 transition-all group">
                        <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Forms Management</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          Forms digitalization best deployed following a logical process. Focused on sustainable ROI by enhancing current processes, tailored for the Indian market.
                        </p>
                      </Link>
                      <Link to="/solutions/xfa-conversion" className="block bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-blue-200 transition-all group">
                        <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">XFA Form Conversion</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          Automatically convert XFA (XML Forms Architecture) forms to modern web forms. Simplifying tech transitions with minimal coding.
                        </p>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative py-8"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Products <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              <AnimatePresence>
                {activeMenu === 'products' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-20 -left-[500px] w-[1100px] bg-white border border-gray-100 shadow-xl rounded-2xl p-8 flex gap-8"
                  >
                    <div className="w-1/4 border-r border-gray-100 pr-6">
                      <h3 className="text-blue-600 font-medium text-xl mb-4">Cloud or On-Premise</h3>
                      <p className="text-sm text-gray-500 mb-6">
                        Whether you prefer cloud hosting or on-premises installation for your early infrastructure, we got you covered across our Indian servers.
                      </p>
                     
                    </div>

                    <div className="w-3/4 grid grid-cols-5 gap-4">
                      {/* Made Product Cards Clickable Links */}
                      {[
                        { icon: Workflow, name: 'Flow', desc: 'Workflow Design, Simulation & Monitoring', path: '/products/flow' },
                        { icon: Bot, name: 'Agent', desc: 'Conversational and Goal-oriented AI Worker', path: '/products/agent' },
                        { icon: ArrowDownToLine, name: 'Inbound', desc: 'Document/Data Classification and Extraction', path: '/products/inbound' },
                        { icon: ArrowUpFromLine, name: 'Outbound', desc: 'Document Design, Generation and Distribution', path: '/products/outbound' },
                        { icon: FormInput, name: 'Form', desc: 'Form Creation, Auto PDF to Webform conversion', path: '/products/form' },
                      ].map((prod, idx) => (
                        <Link key={idx} to={prod.path} className="block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group flex flex-col">
                          <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                            <prod.icon className="w-5 h-5" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{prod.name}</h4>
                          <p className="text-xs text-gray-500 leading-tight">{prod.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Docs Link */}
            {/* <Link to="/docs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Docs
            </Link> */}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/beta-access" className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
              Request Beta Access
            </Link>
            <Link to="/contact" className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded text-sm font-medium hover:bg-blue-50 transition-colors">
              Contact Us <Mail className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <Link to="/about" className="block text-base font-medium text-gray-800">About</Link>
              <Link to="/solutions" className="block text-base font-medium text-gray-800">Solutions</Link>
              <Link to="/products" className="block text-base font-medium text-gray-800">Products</Link>
              <Link to="/docs" className="block text-base font-medium text-gray-800">Docs</Link>
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <Link to="/beta-access" className="text-blue-600 font-medium text-center py-2">Request Beta Access</Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded font-medium">
                  Contact Us <Mail className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
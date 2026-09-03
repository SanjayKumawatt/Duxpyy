import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Rocket, 
  Settings, 
  Users, 
  KanbanSquare, 
  TrendingUp, 
  Headphones, 
  MessageSquare,
  BookOpen
} from 'lucide-react';
import logo from "../assets/logo.png"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const solutions = [
    {
      name: 'Sales',
      description: 'AI-powered sales call automation and insights.',
      icon: <Rocket className="w-5 h-5 text-blue-400" />,
      bgColor: 'bg-blue-400/10'
    },
    {
      name: 'Engineering',
      description: 'AI-powered CTO assistant and technical insights.',
      icon: <Settings className="w-5 h-5 text-pink-400" />,
      bgColor: 'bg-pink-400/10'
    },
    {
      name: 'Recruiting',
      description: 'AI-powered interview insights and hiring automation.',
      icon: <Users className="w-5 h-5 text-green-400" />,
      bgColor: 'bg-green-400/10'
    },
    {
      name: 'Project Management',
      description: 'AI-powered project management and product development tools.',
      icon: <KanbanSquare className="w-5 h-5 text-orange-400" />,
      bgColor: 'bg-orange-400/10'
    },
    {
      name: 'Finance',
      description: 'AI-powered VC/Dealflow agent Finance and automation.',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      bgColor: 'bg-emerald-400/10'
    },
    {
      name: 'Customer Support',
      description: 'AI-powered customer support and automation.',
      icon: <Headphones className="w-5 h-5 text-purple-400" />,
      bgColor: 'bg-purple-400/10'
    }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0514]/80 backdrop-blur-md border-b border-white/10 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-1">
              <img src={logo} className='h-8 mb-1' alt="" />
              <span className="text-2xl font-bold tracking-tight text-purple-400">
                Duxpy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/agents" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">Agents</Link>
            <Link to="/use-cases" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">Use cases</Link>
            <Link to="/features" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">Features</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">Contact</Link>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-white font-medium text-sm transition-colors py-2">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[800px] bg-[#13141f] rounded-2xl shadow-2xl border border-white/5 flex overflow-hidden"
                  >
                    <div className="w-2/3 p-6 grid grid-cols-2 gap-6">
                      {solutions.map((item, idx) => (
                        <Link to={`/solutions/${item.name.toLowerCase().replace(' ', '-')}`} key={idx} className="flex gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors group">
                          <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${item.bgColor}`}>
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">{item.name}</h4>
                            <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Right side banner of Dropdown */}
                    <div className="w-1/3 bg-[#3c1a53] p-6 relative overflow-hidden flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">AI-Powered Solutions</h3>
                        <p className="text-sm text-gray-300 mt-2">Transform your business with intelligent automation</p>
                      </div>
                      <div className="mt-6 bg-[#1a1b26] rounded-xl p-4 flex-grow border border-white/10 flex items-center justify-center relative shadow-lg">
                          <div className="absolute top-4 left-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"><span className="text-[10px]">f</span></div>
                          <div className="absolute bottom-4 right-4 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center"><span className="text-[10px]">Ig</span></div>
                          <MessageSquare className="w-16 h-16 text-purple-400 opacity-80" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-white font-medium text-sm transition-colors py-2">
                Resources <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-[#13141f] rounded-xl shadow-2xl border border-white/5 p-4"
                  >
                    <Link to="/blogs" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <BookOpen className="w-5 h-5 text-purple-400 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-white">Blogs</h4>
                        <p className="text-xs text-gray-400 mt-1">Explore our latest blog posts and insights.</p>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <Link 
              to="/login" 
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              Login / Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0514] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/agents" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Agents</Link>
              <Link to="/use-cases" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Use cases</Link>
              <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Features</Link>
              <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Pricing</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Contact</Link>
              
              <div className="px-3 py-2">
                <div className="text-base font-medium text-white mb-2">Solutions</div>
                <div className="pl-4 space-y-2">
                  {solutions.map((item, idx) => (
                    <Link key={idx} to={`/solutions/${item.name.toLowerCase().replace(' ', '-')}`} className="block text-sm text-gray-400 hover:text-white py-1">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-base font-medium text-white mb-2">Resources</div>
                <Link to="/blogs" className="block pl-4 text-sm text-gray-400 hover:text-white py-1">Blogs</Link>
              </div>

              <div className="px-3 pt-4">
                <Link 
                  to="/login" 
                  className="w-full flex justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base font-semibold"
                >
                  Login / Register
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
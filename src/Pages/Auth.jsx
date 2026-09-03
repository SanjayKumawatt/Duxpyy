import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  Mail,
  Lock,
  User as UserIcon,
  ShieldCheck,
  AlertCircle,
  FileText,
  Clock
} from 'lucide-react';

const Auth = () => {
  // State for toggling between Login and Sign Up
  const [isLoginMode, setIsLoginMode] = useState(true);
  
  // Form States
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // NEW: shows the "pending approval" screen after a successful signup
  const [isPendingApproval, setIsPendingApproval] = useState(false);
  
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when typing
  };

  // Toggle Mode and Clear states
  const handleToggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setError('');
    setSuccess('');
    setIsPendingApproval(false);
    setFormData({ fullName: '', email: '', password: '' });
  };

  // Handle Form Submit with Local Storage Logic
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.email || !formData.password || (!isLoginMode && !formData.fullName)) {
      setError("Please fill in all fields.");
      return;
    }

    // Get existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('duxpy_users')) || {};

    if (isLoginMode) {
      // --- LOGIN LOGIC ---
      // Generic error: don't reveal whether email exists or password is wrong
      const account = existingUsers[formData.email];
      if (!account || account.password !== formData.password) {
        setError("Invalid email or password. Please check your credentials and try again.");
        return;
      }

      // Block login if account hasn't been verified/activated yet
      if (account.status === 'pending') {
        setError("Your account is pending verification. Our team will email you once it's activated.");
        return;
      }

      // Success Login
      setSuccess("Login successful!");
      setTimeout(() => {
        // Redirect to Home Page
        navigate('/');
      }, 1500);

    } else {
      // --- SIGNUP LOGIC ---
      if (existingUsers[formData.email]) {
        setError("An account with this email already exists. Please log in.");
        return;
      }

      // Save new user with a pending status (not yet verified)
      existingUsers[formData.email] = {
        fullName: formData.fullName,
        password: formData.password,
        status: 'pending'
      };
      
      localStorage.setItem('duxpy_users', JSON.stringify(existingUsers));

      // Don't redirect to home — show the pending approval message instead
      setIsPendingApproval(true);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0514] font-sans text-white flex flex-col md:flex-row overflow-hidden py-15">
      
      {/* Left Side: Value Proposition (What the company provides) */}
      <div className="hidden md:flex md:w-1/2 lg:w-[55%] bg-[#11121c] border-r border-gray-800 p-12 lg:p-20 flex-col justify-between relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
        </div>

        <div className="relative z-10">
         

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            The AI Meeting Assistant for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Modern Teams</span>
          </h1>
          
          <p className="text-gray-400 text-lg mb-12 max-w-lg">
            Stop taking notes and start taking action. Duxpy automatically transforms your meeting conversations into actionable business outcomes.
          </p>

          <div className="space-y-6">
            {[
              { title: "Automated Ticket Creation", desc: "Turns discussions directly into Jira or Asana tickets.", icon: <Zap className="w-5 h-5 text-yellow-400" /> },
              { title: "Role-Specific Reports", desc: "Generates tailored PRDs, CRM updates, and technical debt logs.", icon: <FileText className="w-5 h-5 text-blue-400" /> },
              { title: "Organizational Memory", desc: "Makes every past decision and conversation instantly searchable.", icon: <ShieldCheck className="w-5 h-5 text-green-400" /> }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#161722] border border-gray-800 max-w-lg"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-200">{feature.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-12 flex items-center gap-2 text-sm text-gray-500 font-medium">
          <CheckCircle2 className="w-4 h-4 text-green-500" /> Trusted by 150+ professionals worldwide.
        </div>
      </div>

      {/* Right Side: Auth Form (Login & Sign Up) */}
      <div className="w-full md:w-1/2 lg:w-[45%] flex items-center justify-center p-6 sm:p-12 relative">
        <div className="w-full max-w-md">
          
          {/* Mobile Logo */}
          <Link to="/" className="flex items-center gap-2 mb-10 w-fit md:hidden">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">Duxpy</span>
          </Link>

          <AnimatePresence mode="wait">
            {isPendingApproval ? (
              // ---- PENDING APPROVAL SCREEN (shown after successful signup) ----
              <motion.div
                key="pending"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center md:text-left py-4"
              >
                <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <Clock className="w-7 h-7 text-purple-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Request received
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                  Our Product/Sales team will review your request and connect with you on email, and activate your account after verification.
                </p>

                <div className="mt-6 bg-[#13141f] border border-gray-800 rounded-lg p-4 flex items-center gap-3 max-w-sm mx-auto md:mx-0">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300 truncate">{formData.email}</span>
                </div>

                <button
                  onClick={handleToggleMode}
                  className="mt-8 text-sm text-purple-400 font-semibold hover:text-purple-300 transition-colors focus:outline-none"
                >
                  Back to log in
                </button>
              </motion.div>
            ) : (
              // ---- LOGIN / SIGNUP FORM ----
              <motion.div
                key={isLoginMode ? 'login' : 'signup'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {isLoginMode ? 'Welcome back' : 'Create an account'}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {isLoginMode 
                      ? 'Enter your details to access your dashboard.' 
                      : 'Sign up to start transforming your meetings today.'}
                  </p>
                </div>

                {/* Error/Success Messages */}
                <AnimatePresence>
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }} 
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-lg flex items-center gap-3 text-sm mb-6 overflow-hidden"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {error}
                    </motion.div>
                  )}
                  {success && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }} 
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-green-500/10 border border-green-500/30 text-green-400 p-3 rounded-lg flex items-center gap-3 text-sm mb-6 overflow-hidden"
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      {success}
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name Field (Only for Sign Up) */}
                  <AnimatePresence>
                    {!isLoginMode && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 overflow-hidden"
                      >
                        <label className="text-xs font-semibold text-gray-300 ml-1">Full Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <UserIcon className="h-5 w-5 text-gray-500" />
                          </div>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full bg-[#13141f] border border-gray-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 ml-1">Email address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full bg-[#13141f] border border-gray-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 ml-1">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="w-full bg-[#13141f] border border-gray-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-6 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  >
                    {isLoginMode ? 'Sign in to Duxpy' : 'Create Account'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Toggle Mode Button */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-400">
                    {isLoginMode ? "Don't have an account?" : "Already have an account?"}
                    <button 
                      onClick={handleToggleMode}
                      className="ml-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors focus:outline-none"
                    >
                      {isLoginMode ? 'Sign up' : 'Log in'}
                    </button>
                  </p>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Auth;
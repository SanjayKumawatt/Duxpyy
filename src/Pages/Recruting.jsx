import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Star, 
  Hourglass, 
  Users, 
  TrendingDown, 
  ShieldCheck,
  BrainCircuit,
  FileText,
  Users2,
  MessageSquare,
  Lightbulb,
  Lock,
  CircleDot,
  UserCircle2
} from 'lucide-react';

const Recruiting = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Stats Data
  const statsData = [
    { value: "60%", title: "Time Saved", desc: "Reduce time-to-hire significantly", icon: <Hourglass className="w-8 h-8 text-pink-400" /> },
    { value: "85%", title: "Better Hires", desc: "Improve candidate quality", icon: <Users className="w-8 h-8 text-purple-400" /> },
    { value: "40%", title: "Cost Reduction", desc: "Lower recruiting costs", icon: <TrendingDown className="w-8 h-8 text-blue-400" /> },
    { value: "100%", title: "Compliance", desc: "Always interview compliant", icon: <ShieldCheck className="w-8 h-8 text-green-400" /> }
  ];

  // Features Data
  const featuresData = [
    {
      title: "AI Interview Analysis",
      desc: "Get instant insights on candidate responses, body language, and communication skills.",
      icon: <BrainCircuit className="w-6 h-6 text-pink-400" />,
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20"
    },
    {
      title: "Smart Interview Summaries",
      desc: "Automatically generate detailed interview summaries with key points and recommendations.",
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Team Collaboration",
      desc: "Share interview insights and collaborate with hiring teams in real-time.",
      icon: <Users2 className="w-6 h-6 text-green-400" />,
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      title: "Candidate Evaluation",
      desc: "Standardize evaluation criteria and track candidate progression effectively.",
      icon: <MessageSquare className="w-6 h-6 text-orange-400" />,
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      title: "Skills Assessment",
      desc: "AI-powered analysis of technical and soft skills during interviews.",
      icon: <Lightbulb className="w-6 h-6 text-purple-400" />,
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      title: "Compliance & Security",
      desc: "Ensure interview compliance with built-in security and privacy features.",
      icon: <Lock className="w-6 h-6 text-slate-400" />,
      bgColor: "bg-slate-500/10",
      borderColor: "border-slate-500/20"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0a0514] font-sans text-white pt-24 pb-12 overflow-hidden">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
           
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              No More Guesswork<br/>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Every Interview, Scored Fairly</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Duxpy records the interview, then generates a structured candidate scorecard: skills demonstrated, red flags, and a clear recommendation. No more inconsistent notes between interviewers.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                to="/book-demo" 
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Request Demo
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              {[
                { text: "No credit card required" },
                { text: "14-day free trial" },
                { text: "Cancel anytime" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Mockup (Pure CSS) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-xl mx-auto"
          >
            {/* Background Glows */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500 rounded-full blur-[80px] opacity-30"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-500 rounded-full blur-[80px] opacity-30"></div>

            {/* Mockup Card */}
            <div className="bg-[#11121c] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden font-sans relative z-10">
              
              {/* Window Header */}
              <div className="h-10 bg-[#161722] border-b border-gray-800 flex items-center justify-between px-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[10px] text-gray-400 font-medium tracking-wide">Duxpy - Interview</div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <CircleDot className="w-2.5 h-2.5 text-green-400 animate-pulse" />
                  <span className="text-[9px] text-green-400 font-medium">Live Interview</span>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-6 space-y-6 bg-[#0c0d14]">
                
                {/* HR Message */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    HR
                  </div>
                  <div>
                    <div className="bg-[#1a1b26] rounded-2xl rounded-tl-none px-4 py-3 border border-gray-800 text-sm text-gray-300">
                      "Tell me about a time you faced a challenging technical problem and how you solved it."
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1.5 ml-1">10:15 AM</div>
                  </div>
                </div>

                {/* Candidate Message */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <UserCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="bg-[#1a1b26] rounded-2xl rounded-tl-none px-4 py-3 border border-gray-800 text-sm text-gray-300 leading-relaxed">
                      "I was working on a project where we had a critical bug in our production system..."
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1.5 ml-1">10:17 AM</div>
                  </div>
                </div>

                {/* AI Insight Box */}
                <div className="mt-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-purple-500/30 p-5 shadow-[0_0_20px_rgba(168,85,247,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                  <div className="flex items-center gap-2 mb-3">
                    <BrainCircuit className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold text-purple-300 tracking-wider uppercase">AI Insight Generated</span>
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    <span className="font-semibold text-white">Candidate demonstrated:</span> Strong problem-solving skills, ability to work under pressure, and clear communication.<br/><br/>
                    <span className="font-semibold text-pink-400">Opportunity:</span> Ask about teamwork in similar situations.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#11121c] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {statsData.map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-[#161722] border border-gray-800 rounded-2xl p-8 text-center flex flex-col items-center hover:border-gray-600 transition-colors"
              >
                <div className="mb-6">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <h4 className="text-base font-semibold text-purple-300 mb-2">{stat.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI-Powered Recruiting Features Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">AI-Powered Recruiting Features</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Everything you need to streamline your hiring process and make better decisions.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuresData.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#11121c] border border-gray-800 rounded-2xl p-8 flex flex-col h-full hover:border-gray-600 transition-colors shadow-lg"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${feature.bgColor} ${feature.borderColor}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default Recruiting;
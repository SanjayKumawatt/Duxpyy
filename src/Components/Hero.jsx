import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  FileText, 
  CheckSquare, 
  MessageCircle, 
  HelpCircle, 
  FileAudio, 
  Gavel, 
  Lightbulb, 
  Smile, 
  PieChart,
  Video,
  Users,
  Calendar,
  Blocks,
  ArrowUpRight,
  Settings,
  Play,
  Clock,
  CheckCircle,
  Circle,
  MoreVertical,
  Calendar as CalendarIcon
} from 'lucide-react';

import logo from "../assets/logo.png"

// Background Stars Component
const Starfield = () => {
  // Generating static coordinates to avoid hydration issues
  const stars = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      top: `${(i * 13) % 100}%`,
      left: `${(i * 17) % 100}%`,
      size: (i % 3) + 1,
      duration: (i % 4) + 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const pillItems = [
    { name: 'Executive Summary', icon: <FileText className="w-4 h-4" /> },
    { name: 'Key Topics', icon: <Lightbulb className="w-4 h-4" /> },
    { name: 'Action Points', icon: <CheckSquare className="w-4 h-4" /> },
    { name: 'Ask DUXPY', icon: <MessageCircle className="w-4 h-4" /> },
    { name: 'Questions & Answers', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'Transcript', icon: <FileAudio className="w-4 h-4" /> },
    { name: 'Decisions', icon: <Gavel className="w-4 h-4" /> },
    { name: 'Takeaways', icon: <Lightbulb className="w-4 h-4" /> },
    { name: 'Sentiment of meeting', icon: <Smile className="w-4 h-4" /> },
    { name: 'Reports', icon: <PieChart className="w-4 h-4" /> },
  ];

  const marqueeRow1 = [...pillItems, ...pillItems, ...pillItems];
  const marqueeRow2 = [...pillItems.reverse(), ...pillItems.reverse(), ...pillItems.reverse()];

  return (
    <section className="relative w-full min-h-screen bg-[#0a0514] overflow-hidden pt-32 pb-20 font-sans">
      <Starfield />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
       
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
            AI Meeting Assistant
          </span> for Modern Teams.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Duxpy transforms meeting conversations into AI-powered meeting notes, actionable insights, and searchable organizational knowledge.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link 
            to="/request-demo"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm transition-all hover:opacity-90"
          >
            Request demo
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          {['Enterprise-Grade Security', 'Multi-Language Support', 'ChatGPT for Meeting conversations'].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-gray-300 text-sm font-medium">{feature}</span>
            </div>
          ))}
        </motion.div>

        {/* Highly Detailed Laptop Mockup (Pure CSS & Text) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-[1000px] mx-auto mb-20 relative text-left"
        >
          {/* Laptop Screen Frame */}
          <div className="relative bg-[#0c0d14] rounded-t-2xl border-[6px] border-[#1e1f29] p-1 shadow-2xl">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#1e1f29] rounded-b-lg"></div>
            
            {/* Inner Screen Content */}
            <div className="bg-[#0b0c10] rounded-xl overflow-hidden border border-white/5 flex aspect-[16/10] md:aspect-video text-white font-sans text-xs md:text-sm">
              
              {/* Sidebar */}
              <div className="w-[200px] bg-[#111218] border-r border-white/5 flex flex-col justify-between hidden md:flex">
                <div>
                  {/* Logo */}
                  <div className="px-5 py-6 flex items-center gap-2">
                    <img src={logo} className='h-5' alt="" />
                    <span className="font-bold text-lg tracking-wide text-purple-100">Duxpy</span>
                  </div>

                  {/* Navigation Links */}
                  <nav className="px-3 space-y-1">
                    {[
                      { icon: <Video className="w-4 h-4" />, name: 'Meeting' },
                      { icon: <Users className="w-4 h-4" />, name: 'Consultations' },
                      { icon: <Calendar className="w-4 h-4" />, name: 'Agenda' },
                      { icon: <Blocks className="w-4 h-4" />, name: 'Integrations' },
                      { icon: <ArrowUpRight className="w-4 h-4" />, name: 'Follow-up Center', active: true },
                      { icon: <Settings className="w-4 h-4" />, name: 'Settings' }
                    ].map((item, idx) => (
                      <div key={idx} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-default ${item.active ? 'bg-white/10 text-white font-medium' : 'text-gray-400 hover:text-white'}`}>
                        {item.icon}
                        <span className="text-[13px]">{item.name}</span>
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Google Play Badge Text version */}
               
              </div>

              {/* Main Workspace */}
              <div className="flex-1 flex flex-col bg-[#0b0c10] overflow-hidden">
                {/* Topbar */}
                <div className="h-16 border-b border-white/5 flex items-center justify-end px-6 gap-4">
                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-700 bg-gray-800/40">
                     <Clock className="w-3.5 h-3.5 text-gray-400" />
                     <span className="text-xs text-gray-300">30 Days Left In Trial</span>
                   </div>
                   <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                     <div className="text-right hidden sm:block">
                       <div className="text-sm font-medium text-white leading-none">Elisa Isabelle</div>
                       <div className="text-[11px] text-gray-400">elisa@duxpysystemhub.in</div>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center font-semibold text-xs border border-pink-400">
                       EI
                     </div>
                   </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                   
                   {/* Page Header */}
                   <div className="flex items-start gap-4 mb-8">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 flex-shrink-0">
                        <ArrowUpRight className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                        <h2 className="text-lg md:text-xl font-semibold text-white mb-1">Meeting Summary & Action Points</h2>
                        <p className="text-xs md:text-sm text-gray-400">Track progress and follow up on important action items.</p>
                      </div>
                   </div>

                   {/* Meeting Details Box */}
                   <div className="bg-[#13141f] border border-gray-800 rounded-xl p-5 md:p-6">
                      
                      {/* Sub-header inside box */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-800">
                        <h3 className="text-base font-semibold text-white">01:10 PM - Standup Meet - AI Implementation</h3>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-700 bg-gray-800/50 text-gray-300 text-xs font-medium w-fit">
                          <CalendarIcon className="w-3.5 h-3.5" />
                          2023-03-23
                        </div>
                      </div>

                      {/* Summary Section */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
                          <FileText className="w-4 h-4" />
                          Meeting Summary
                        </div>
                        <p className="text-[13px] text-gray-300 leading-relaxed text-justify">
                          The meeting focused on discussing the transition from traditional IT services to more advanced service offerings, particularly in the context of AI solutions in healthcare and document automation. Elisa, Isabelle and Grace,Lily discussed ongoing projects, including a voice agent for healthcare appointments and an automated document processing tool called Extract Doc. They also explored potential improvements in their workflows and the introduction of forward-deployed engineers in their teams. The conversation touched various aspects of their current projects, including the use of large language models (LLMs) for accuracy improvements and the integration of automation tools like Zapier.
                        </p>
                      </div>

                      {/* Action Items Section */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                           <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                             <CheckSquare className="w-4 h-4" />
                             Action Items (3)
                           </div>
                           <div className="flex items-center gap-4 text-xs font-medium">
                              <span className="text-green-400 flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5"/> COMPLETED (0)</span>
                              <span className="text-gray-400">PENDING (3)</span>
                           </div>
                        </div>

                        {/* List Items */}
                        <div className="space-y-3">
                           {/* Item 1 */}
                           <div className="flex items-center justify-between p-3 rounded-lg bg-[#1a1b26] border border-gray-800">
                             <div className="flex items-start gap-3">
                               <Circle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                               <p className="text-[13px] text-gray-200">Elisa,Isabelle to prepare a detailed report on the healthcare project and its capabilities.</p>
                             </div>
                             <div className="flex items-center gap-2 text-xs text-gray-400 pl-4 border-l border-gray-700 ml-4 hidden sm:flex">
                               <div className="w-5 h-5 rounded-full bg-pink-600/20 text-pink-500 flex items-center justify-center font-bold text-[9px] border border-pink-500/30">EI</div>
                               Elisa,Isabelle
                             </div>
                           </div>
                           
                           {/* Item 2 */}
                           <div className="flex items-center justify-between p-3 rounded-lg bg-[#1a1b26] border border-gray-800">
                             <div className="flex items-start gap-3">
                               <Circle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                               <p className="text-[13px] text-gray-200">Grace,Lily to discuss potential growth strategies for Extract Doc with the team.</p>
                             </div>
                             <div className="flex items-center gap-2 text-xs text-gray-400 pl-4 border-l border-gray-700 ml-4 hidden sm:flex">
                               <div className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-bold text-[9px] border border-blue-500/30">GL</div>
                               Grace,Lily
                             </div>
                           </div>

                           {/* Item 3 */}
                           <div className="flex items-center justify-between p-3 rounded-lg bg-[#1a1b26] border border-gray-800">
                             <div className="flex items-start gap-3">
                               <Circle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                               <p className="text-[13px] text-gray-200">Elisa,Rosie to explore the integration of additional features for Extract Doc based...</p>
                             </div>
                             <div className="flex items-center gap-2 text-xs text-gray-400 pl-4 border-l border-gray-700 ml-4 hidden sm:flex">
                               <div className="w-5 h-5 rounded-full bg-emerald-600/20 text-emerald-500 flex items-center justify-center font-bold text-[9px] border border-emerald-500/30">ER</div>
                               Elisa,Rosie
                             </div>
                           </div>
                        </div>

                      </div>
                   </div>

                </div>
              </div>

            </div>
          </div>
          {/* Laptop Base */}
          <div className="h-4 md:h-6 w-[104%] -ml-[2%] bg-[#1a1b23] rounded-b-xl md:rounded-b-2xl border-t border-gray-800 relative shadow-xl flex justify-center">
             <div className="w-32 md:w-48 h-1.5 md:h-2 bg-[#0c0d14] rounded-b-md"></div>
          </div>
        </motion.div>

        {/* Endless Marquee Section */}
        <div className="w-full relative py-8">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0514] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0514] to-transparent z-10 pointer-events-none"></div>

          <div className="flex overflow-hidden mb-4">
            <motion.div
              animate={{ x: [0, -1900] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              className="flex gap-4 whitespace-nowrap px-2"
            >
              {marqueeRow1.map((item, idx) => (
                <div 
                  key={`row1-${idx}`} 
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#11121c] border border-gray-800 text-gray-300 text-sm font-medium hover:text-white hover:border-gray-600 transition-colors cursor-default"
                >
                  <span className="text-purple-400">{item.icon}</span>
                  {item.name}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [-1900, 0] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              className="flex gap-4 whitespace-nowrap px-2"
            >
              {marqueeRow2.map((item, idx) => (
                <div 
                  key={`row2-${idx}`} 
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#11121c] border border-gray-800 text-gray-300 text-sm font-medium hover:text-white hover:border-gray-600 transition-colors cursor-default"
                >
                  <span className="text-blue-400">{item.icon}</span>
                  {item.name}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
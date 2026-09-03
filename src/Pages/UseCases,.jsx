import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  PhoneCall, 
  UserCheck, 
  HeadphonesIcon, 
  KanbanSquare, 
  TerminalSquare, 
  FileText, 
  PieChart, 
  Layers, 
  Handshake, 
  Award, 
  Star, 
  Target, 
  MonitorPlay,
  ArrowRight,
  TrendingUp,
  GraduationCap,
  UserPlus
} from 'lucide-react';

const UseCases = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Dynamic Array for Use Cases (Marketing words removed)
  const useCasesData = [
    {
      title: "Deal & Pipeline Intelligence",
      icon: <Users className="w-6 h-6 text-purple-400" />,
      description: "Ask Duxpy across every rep's calls to surface competitor mentions, objection patterns, and stalled deals. Spot risk before it costs you the quarter - without sitting in on a single call."
    },
    {
      title: "Renewal & QBR Prep",
      icon: <Briefcase className="w-6 h-6 text-pink-400" />,
      description: "Duxpy pulls pain points, feature interest, and past commitments from every touchpoint with an account. Walk into every renewal or business review with full conversation history in minutes."
    },
    {
      title: "Sales Call Intelligence",
      icon: <PhoneCall className="w-6 h-6 text-blue-400" />,
      description: "Duxpy auto-extracts decision-makers, budget signals, and next steps into structured MEDDPICC reports after every call. Turn conversations into deal data your CRM can actually use."
    },
    {
      title: "Recruiting & Interview Debriefs",
      icon: <UserCheck className="w-6 h-6 text-green-400" />,
      description: "Duxpy's Recruiting Agent captures interviews live and generates comprehensive candidate evaluation summaries. Cut recruiter admin time without losing detail on any candidate."
    },
    {
      title: "Customer Support",
      icon: <HeadphonesIcon className="w-6 h-6 text-orange-400" />,
      description: "Duxpy routes tickets, flags frustration and churn risk in real time, and reports on service trends around the clock. Free your team to focus on the cases that need real judgment."
    },
    {
      title: "Scrum Agent - Ticket Automation",
      icon: <KanbanSquare className="w-6 h-6 text-teal-400" />,
      description: "Duxpy's Scrum Agent captures blockers, decisions, and commitments from standups, sprint planning, and retros automatically. Developers spend time building, not writing notes."
    },
    {
      title: "DevOps Meeting-to-Ticket Automation",
      icon: <TerminalSquare className="w-6 h-6 text-indigo-400" />,
      description: "Duxpy's Ticket Agent extracts action items from technical discussions - bug triage, incident calls, ad hoc syncs - and creates prioritized Jira tickets in real time. Nothing discussed slips through the cracks."
    },
    {
      title: "PRD Generation",
      icon: <FileText className="w-6 h-6 text-yellow-400" />,
      description: "Duxpy's Product Manager Agent turns roadmap and scoping discussions into structured PRDs with goals and success criteria defined. Move from conversation to spec instantly."
    },
    {
      title: "Budget Planning & Dealflow",
      icon: <PieChart className="w-6 h-6 text-cyan-400" />,
      description: "Duxpy's Finance Agent documents budget meetings and dealflow calls, generating reports automatically. Finance teams focus on decisions, not documentation."
    },
    {
      title: "Meeting Consolidation",
      icon: <Layers className="w-6 h-6 text-fuchsia-400" />,
      description: "Duxpy merges notes and decisions from related meetings into one master record - then let's you ask it anything across your entire meeting history. Track a deal or project across every touchpoint without piecing together separate call notes."
    },
    {
      title: "Client & Project Meetings",
      icon: <Handshake className="w-6 h-6 text-rose-400" />,
      description: "Duxpy documents client calls in real time and produces shareable recaps for both your team and the client. Agencies and freelancers cut admin time while staying accountable."
    },
    {
      title: "Leadership Meetings",
      icon: <Award className="w-6 h-6 text-violet-400" />,
      description: "Duxpy documents decisions, priorities, and action items across board, leadership, and cross-team meetings automatically. Every team stays aligned without dedicating someone to take notes."
    },
    {
      title: "Performance Reviews",
      icon: <Star className="w-6 h-6 text-amber-400" />,
      description: "Duxpy documents career goals, feedback, and commitments from manager 1:1s and performance reviews automatically. Managers walk into every check-in with a clear record of what was promised last time."
    },
    {
      title: "Growth Campaign Planning", // Changed from Marketing to Growth
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      description: "Duxpy turns campaign planning and performance review calls into creative briefs and action items automatically. Growth teams spend less time on meeting admin and more on the work that drives growth."
    },
    {
      title: "Product Demo & Discovery Calls",
      icon: <MonitorPlay className="w-6 h-6 text-sky-400" />,
      description: "Duxpy captures prospect questions, objections, and feature interest during demo and discovery calls in real time. Sales and product teams get a clear record of what resonated - without reviewing the recording."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0a0514] font-sans text-white pt-24 pb-12 overflow-hidden">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-24 mt-12">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          AI Agent Use Cases: <br/>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">
            Automate Sales, Support, Hiring & More.
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Automate admin. Accelerate engage.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link 
            to="/signup" 
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCasesData.map((useCase, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#11121c] border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-600 transition-colors flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center mb-6">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Use Case Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#11121c] border border-gray-800 rounded-3xl overflow-hidden flex flex-col lg:flex-row relative"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Left Content */}
          <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center z-10">
            <span className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 w-fit mb-6">
              Featured Use Case
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sales Hiring & Enablement
            </h2>
            <p className="text-gray-400 text-base mb-10 leading-relaxed">
              Our AI agents transform how companies hire, train, and develop their sales teams, resulting in higher performance and reduced turnover.
            </p>

            <div className="bg-[#161722] rounded-2xl p-6 border border-gray-800 mb-8">
              <h3 className="text-sm font-bold text-white mb-6">Key Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-1">68%</div>
                  <div className="text-xs text-gray-400">Faster Hiring Process</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">42%</div>
                  <div className="text-xs text-gray-400">Improved Retention</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">3.2x</div>
                  <div className="text-xs text-gray-400">ROI in First Year</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">85%</div>
                  <div className="text-xs text-gray-400">Training Completion</div>
                </div>
              </div>
            </div>

            <div>
              <Link 
                to="/signup" 
                className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Try Duxpy Agent
              </Link>
            </div>
          </div>

          {/* Right Visual Graphic (Built with Pure CSS/Icons) */}
          <div className="lg:w-1/2 bg-[#0c0d14] border-l border-gray-800 p-8 md:p-12 flex flex-col justify-center items-center relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold text-center text-white mb-6 leading-tight">
              Sales Hiring <br/> & Enablement
            </h3>
            <p className="text-center text-gray-400 text-sm max-w-md mb-12">
              Our AI agents transform how companies hire, train, and develop their sales teams, resulting in higher performance and reduced turnover.
            </p>

            <div className="flex items-center justify-center gap-8 md:gap-12 w-full">
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center mb-3 group-hover:border-purple-400 group-hover:bg-purple-500/10 transition-all">
                  <UserPlus className="w-8 h-8 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <span className="text-gray-300 font-medium">Hire</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center mb-3 group-hover:border-pink-400 group-hover:bg-pink-500/10 transition-all">
                  <GraduationCap className="w-8 h-8 text-gray-400 group-hover:text-pink-400 transition-colors" />
                </div>
                <span className="text-gray-300 font-medium">Train</span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center mb-3 group-hover:border-blue-400 group-hover:bg-blue-500/10 transition-all">
                  <TrendingUp className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-gray-300 font-medium">Develop</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#0a0514] to-[#0a0514] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center max-w-3xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10">
            Experience the power of AI-driven agents that understand your business needs and help you achieve more with less effort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:scale-105 transition-transform group flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/book-demo" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-600 text-white font-semibold text-sm hover:bg-gray-800 transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default UseCases;
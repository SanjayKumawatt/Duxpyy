import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from "../assets/ag1.jpg"
import img2 from "../assets/ag2.jpg"
import img3 from "../assets/ag3.jpg"
import { 
  Users, 
  KanbanSquare, 
  Box, 
  LineChart, 
  Briefcase, 
  Settings, 
  MonitorPlay, 
  HeadphonesIcon, 
  TrendingUp, 
  PieChart, 
  Activity,
  CheckCircle2,
  ArrowRight,
  Zap,
  Image as ImageIcon
} from 'lucide-react';

const Agents = () => {
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
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const agentsData = [
    {
      id: 'recruiting',
      title: 'AI Recruiting Agent',
      icon: <Users className="w-6 h-6 text-pink-400" />,
      description: 'Turn interviews into structured candidate assessments. Analyze candidate responses, evaluate skills and experience, and generate structured interview feedback and recommendations.',
      features: [
        { title: 'Comprehensive Evaluation', desc: 'Analyzes candidate responses to assess technical skills, experience, and problem-solving abilities.' },
        { title: 'Cultural Fit Analysis', desc: 'Evaluates alignment with company values, team dynamics, and work style preferences.' },
        { title: 'Structured Feedback', desc: 'Generates detailed interview reports with strengths, areas for improvement, and final recommendations.' }
      ],
      linkText: 'Try Recruiting Agent',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      id: 'scrum',
      title: 'Scrum Agent',
      icon: <KanbanSquare className="w-6 h-6 text-blue-400" />,
      description: 'Turn sprint conversations into Jira-ready tickets. Extract requirements, priorities, dependencies, blockers, assignees, and deadlines directly from meeting conversations.',
      features: [
        { title: 'Extracts Actionable Tickets', desc: 'Automatically extracts actionable tickets from meeting transcripts.' },
        { title: 'Identifies Priorities', desc: 'Identifies priority levels and dependencies.' },
        { title: 'Assigns Tasks', desc: 'Assigns tasks to team members based on context.' },
        { title: 'Captures Deadlines', desc: 'Captures due dates and identifies blockers.' }
      ],
      linkText: 'Try Scrum Agent',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'product-manager',
      title: 'Product Manager Agent',
      icon: <Box className="w-6 h-6 text-purple-400" />,
      description: 'Turn product discussions into structured PRDs. Generate product requirements, goals, acceptance criteria, technical requirements, timelines, and budgets from meetings.',
      features: [
        { title: 'Detailed PRDs', desc: 'Creates detailed PRDs with clear goals.' },
        { title: 'Defines Requirements', desc: 'Defines specific requirements and acceptance criteria.' },
        { title: 'Technical Configurations', desc: 'Captures necessary technical configurations.' },
        { title: 'Timelines & Budgets', desc: 'Documents project timelines and estimated budgets.' }
      ],
      linkText: 'Try Product Manager Agent',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      id: 'sales',
      title: 'Sales Agent',
      icon: <LineChart className="w-6 h-6 text-green-400" />,
      description: 'Generates comprehensive sales reports using MEDDPICC, SPICED, SPIN, and BANT frameworks to track and analyze sales opportunities.',
      features: [
        { title: 'MEDDPICC Analysis', desc: 'Detailed MEDDPICC framework analysis.' },
        { title: 'SPICED & SPIN', desc: 'In-depth SPICED and SPIN reporting.' },
        { title: 'BANT Tracking', desc: 'BANT qualification and tracking.' },
        { title: 'Next Steps', desc: 'Clear next steps and follow-up actions.' }
      ],
      linkText: 'Try Sales Agent',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'project-management',
      title: 'Project Management Agent',
      icon: <Briefcase className="w-6 h-6 text-orange-400" />,
      description: 'Creates visual project status reports with clear indicators for tracking progress, risks, and next steps from meeting discussions.',
      features: [
        { title: 'Visual Indicators', desc: 'Clear visual status indicators.' },
        { title: 'Milestone Tracking', desc: 'Accurate milestone tracking.' },
        { title: 'Risk Identification', desc: 'Risk and blocker identification.' },
        { title: 'Action Items', desc: 'Comprehensive action item management.' }
      ],
      linkText: 'Try Project Management Agent',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      id: 'cto',
      title: 'CTO Agent',
      icon: <Settings className="w-6 h-6 text-slate-400" />,
      description: 'Creates CTO-level technical reports from meetings, focusing on architecture decisions, risks, and strategic implications.',
      features: [
        { title: 'Decision Tracking', desc: 'Technical decision tracking.' },
        { title: 'Risk Assessment', desc: 'Thorough technical risk assessment.' },
        { title: 'Resource Planning', desc: 'Strategic resource planning.' },
        { title: 'Strategic Recommendations', desc: 'High-level strategic recommendations.' }
      ],
      linkText: 'Try CTO Agent',
      bgColor: 'bg-slate-500/10',
      borderColor: 'border-slate-500/20'
    },
    {
      id: 'product-demo',
      title: 'Product Demo Agent',
      icon: <MonitorPlay className="w-6 h-6 text-teal-400" />,
      description: 'Evaluates product demos and generates comprehensive reports on effectiveness, user experience, and performance metrics.',
      features: [
        { title: 'Effectiveness Analysis', desc: 'Presenter effectiveness analysis.' },
        { title: 'Metrics Tracking', desc: 'Performance metrics tracking.' },
        { title: 'UX Evaluation', desc: 'User experience evaluation.' },
        { title: 'Feedback Collection', desc: 'Feature feedback collection.' }
      ],
    //   linkText: 'Try Product Demo Agent',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/20'
    },
    {
      id: 'customer-support',
      title: 'Customer Support Agent',
      icon: <HeadphonesIcon className="w-6 h-6 text-red-400" />,
      description: 'Generate clear, structured summaries of customer support conversations.',
      features: [
        { title: 'Extract Information', desc: 'Extract customer information.' },
        { title: 'Summarize Issues', desc: 'Summarize reported issue.' },
        { title: 'Troubleshooting Steps', desc: 'List troubleshooting steps.' },
        { title: 'Resolution Status', desc: 'State resolution status.' }
      ],
      linkText: 'Try Customer Support Agent',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      id: 'digital-growth', 
      title: 'Digital Growth Agent', 
      icon: <TrendingUp className="w-6 h-6 text-indigo-400" />,
      description: 'Helps growth teams analyze, optimize, and coordinate initiatives.',
      features: [
        { title: 'KPIs & Outcomes', desc: 'Summarize KPIs & outcomes.' },
        { title: 'Feedback Capture', desc: 'Capture initiative feedback.' },
        { title: 'Strategy Suggestions', desc: 'List strategy suggestions.' },
        { title: 'Budget Discussions', desc: 'Note budget discussions.' }
      ],
      linkText: 'Try Digital Growth Agent',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      id: 'vc-dealflow',
      title: 'VC Dealflow Agent',
      icon: <PieChart className="w-6 h-6 text-yellow-400" />,
      description: 'Generates investment summaries from dealflow meetings, analyzing market opportunities and investment potential.',
      features: [
        { title: 'Company Analysis', desc: 'Comprehensive company analysis.' },
        { title: 'Opportunity Assessment', desc: 'Market opportunity assessment.' },
        { title: 'Terms Evaluation', desc: 'Deal terms evaluation.' },
        { title: 'Investment Rationale', desc: 'Clear investment rationale.' }
      ],
      linkText: 'Try VC Dealflow Agent',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      id: 'vc-check-in',
      title: 'VC Check-in Agent',
      icon: <Activity className="w-6 h-6 text-cyan-400" />,
      description: 'Creates concise summaries of company check-in meetings for VCs, tracking metrics, progress, and challenges.',
      features: [
        { title: 'Metrics Tracking', desc: 'Key metrics tracking.' },
        { title: 'Progress Monitoring', desc: 'Ongoing progress monitoring.' },
        { title: 'Risk Assessment', desc: 'Current risk assessment.' },
        { title: 'Resource Needs', desc: 'Resource needs analysis.' }
      ],
      linkText: 'Try VC Check-in Agent',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    }
  ];

  // Steps Data with Image Placeholders
  // Bhai bas yahan imageUrl mein link daal dena "" ke andar
  const stepsData = [
    {
      step: "1",
      title: "Connect & Configure",
      desc: "Set up your agent with custom configurations tailored to your specific business needs and workflows.",
      imageUrl: img1 // <-- PLACE YOUR IMAGE LINK HERE
    },
    {
      step: "2",
      title: "Train & Adapt",
      desc: "The agent learns from your data and interactions, continuously improving its performance and accuracy.",
      imageUrl: img2 // <-- PLACE YOUR IMAGE LINK HERE
    },
    {
      step: "3",
      title: "Automate & Scale",
      desc: "Let the agent handle repetitive tasks while your team focuses on high-value activities and strategic initiatives.",
      imageUrl: img3 // <-- PLACE YOUR IMAGE LINK HERE
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0a0514] font-sans text-white pt-24 pb-12 overflow-hidden">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-32 mt-12">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text mb-6 leading-tight tracking-tight"
        >
          AI Meeting Agents <br/> Turn Conversations Into Action
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Duxpy transforms meeting conversations into Jira tickets, PRDs, sales reports, project updates, recruitment insights, customer support summaries, and automated workflows with AI-powered agents.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link 
            to="/signup" 
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Agents Section Title */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enable Role-Specific Agents</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Automate tasks and generate role-specific outputs from every conversation.</p>
      </motion.section>

      {/* Agents Grid (Dynamic Mapping with Stagger Animations) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {agentsData.map((agent) => (
            <motion.div 
              key={agent.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-[#11121c] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col h-full hover:border-gray-600 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${agent.bgColor} ${agent.borderColor}`}>
                {agent.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{agent.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {agent.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {agent.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-200">{feat.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How it Works Section with Image Placeholders */}
      <section className="bg-[#11121c] py-24 border-y border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">How AI Agents Transform <br/> Meetings Into Action</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Discover how Duxpy analyzes conversations and turns them into actionable business outcomes.</p>
          </motion.div>
          
          <div className="space-y-24">
            {stepsData.map((step, index) => {
              const isEven = index % 2 !== 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`flex flex-col gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-400 font-bold text-xl mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">{step.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">{step.desc}</p>
                  </div>

                  {/* Exact Image Placeholder for User Links */}
                  <div className="flex-1 w-full max-w-xl">
                    <div className="aspect-video w-full rounded-2xl bg-[#1a1b26] border border-gray-700 shadow-2xl relative overflow-hidden group flex items-center justify-center">
                      
                      {step.imageUrl ? (
                        <img 
                          src={step.imageUrl} 
                          alt={step.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        // Fallback UI if link is empty
                        <div className="flex flex-col items-center justify-center text-gray-500">
                           <ImageIcon className="w-12 h-12 mb-3 opacity-50" />
                           <span className="text-sm font-medium">Paste Your Image Link Here</span>
                        </div>
                      )}

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center bg-[#0a0514]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0a0514] to-[#0a0514] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center max-w-3xl mx-auto px-4"
        >
          <Zap className="w-12 h-12 text-purple-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Ready to Transform <br/> Your Workflow?
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Experience the power of AI-driven agents that understand your business needs and help you achieve more with less effort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
            <Link 
              to="/book-demo" 
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-gray-600 text-white font-semibold text-sm hover:bg-gray-800 transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Agents;
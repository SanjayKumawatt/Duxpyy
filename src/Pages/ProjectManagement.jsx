import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight,
  GitPullRequest,
//   Trello,
  FileText,
  Network,
  KanbanSquare,
  ListTodo,
  Rocket,
  Plus,
  MoreHorizontal,
  FolderKanban,
  Activity,
  Zap,
  Box
} from 'lucide-react';

const ProjectManagement = () => {
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

  // Data Arrays for clean mapping
  const agentsData = [
    {
      title: "Product Manager Agent",
      desc: "Turn customer feedback, stakeholder discussions, and product conversations into structured product decisions.",
      icon: <Network className="w-6 h-6 text-blue-400" />,
      features: [
        "Analyze customer and user feedback",
        "Identify recurring feature requests",
        "Generate product review documents"
      ],
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      iconBg: "bg-blue-600"
    },
    {
      title: "Scrum Agent - Ticket Creator",
      desc: "Intelligent ticket creation system that converts meeting discussions into actionable tickets with proper tagging and assignment.",
    //   icon: <Trello className="w-6 h-6 text-green-400" />,
      features: [
        "Automated ticket generation",
        "Smart task categorization",
        "Priority assignment"
      ],
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      iconBg: "bg-green-600"
    },
    {
      title: "Project Agent",
      desc: "Give project managers an intelligent assistant that continuously monitors project execution and provides updates.",
      icon: <ListTodo className="w-6 h-6 text-pink-400" />,
      features: [
        "Track project progress",
        "Identify blockers and bottlenecks",
        "Automated status reports"
      ],
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      iconBg: "bg-pink-600"
    }
  ];

  const transformFeatures = [
    "Reduce project planning time by 75%",
    "Increase team productivity by 60%",
    "Improve project delivery rates by 85%",
    "Automate 90% of routine project tasks",
    "Real-time project insights and analytics",
    "Seamless integration with existing tools"
  ];

  const integrationsData = [
    {
      title: "Atlassian Confluence",
      desc: "Transform meeting discussions into structured project documentation and knowledge.",
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      borderColor: "border-blue-500/20"
    },
    {
      title: "Jira",
      desc: "Turn engineering discussions into actionable Jira tickets and identify potential work items from project meetings.",
      icon: <KanbanSquare className="w-8 h-8 text-indigo-400" />,
      borderColor: "border-indigo-500/20"
    },
    {
      title: "Asana",
      desc: "Convert meeting actions and project discussions into structured Asana tasks.",
      icon: <FolderKanban className="w-8 h-8 text-rose-400" />,
      borderColor: "border-rose-500/20"
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 w-fit">
              <GitPullRequest className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-semibold text-purple-300">AI-Powered Project Management</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              AI Project Management <br/>
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">That Turns Meetings Into Execution</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Duxpy connects your project meetings, decisions, tasks, documents, and project management tools to keep execution moving - without the manual project administration.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                to="/signup" 
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              {[
                { text: "Duxpy connects meetings" },
                { text: "Project Discussions" },
                { text: "Status reports & Jira Tickets" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Mockup (Pure CSS Dashboard) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-xl mx-auto"
          >
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-[80px] opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-[80px] opacity-30"></div>

            {/* Dashboard Mockup Card */}
            <div className="bg-[#11121c] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden font-sans relative z-10 flex h-[340px]">
              
              {/* Sidebar */}
              <div className="w-16 sm:w-48 bg-[#161722] border-r border-gray-800 flex flex-col pt-4">
                <div className="px-4 mb-8 hidden sm:block font-bold text-indigo-400 tracking-wider text-sm">Duxpy</div>
                <div className="px-4 mb-8 sm:hidden flex justify-center"><Box className="w-6 h-6 text-indigo-400" /></div>
                
                <div className="space-y-2 px-2 sm:px-3">
                  {['Dashboard', 'Projects', 'Tasks', 'Meetings'].map((item, i) => (
                    <div key={i} className={`h-8 sm:h-10 rounded-lg flex items-center px-3 ${i === 1 ? 'bg-indigo-500/20 text-indigo-300' : 'text-gray-500'} text-xs sm:text-sm font-medium`}>
                      <span className="hidden sm:block">{item}</span>
                      <div className="sm:hidden w-full flex justify-center">
                        <div className={`w-4 h-4 rounded-sm ${i === 1 ? 'bg-indigo-400' : 'bg-gray-600'}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Area */}
              <div className="flex-1 bg-[#0c0d14] p-4 sm:p-6 overflow-hidden flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">Website Redesign (Q3)</h3>
                    <p className="text-gray-500 text-[10px] sm:text-xs">8 tasks completed • 3 pending</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold">JD</div>
                </div>

                {/* List Items Mockup */}
                <div className="flex-1 space-y-3 overflow-hidden">
                  {[
                    { title: "Finalize homepage UI", status: "Done", color: "text-green-400 bg-green-500/10 border-green-500/20" },
                    { title: "Integrate payment gateway", status: "In Progress", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
                    { title: "Review accessibility guidelines", status: "To Do", color: "text-gray-400 bg-gray-500/10 border-gray-500/20" },
                    { title: "Update Terms of Service", status: "To Do", color: "text-gray-400 bg-gray-500/10 border-gray-500/20" }
                  ].map((task, i) => (
                    <div key={i} className="bg-[#161722] border border-gray-800 rounded-lg p-3 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full border flex-shrink-0 ${task.status === 'Done' ? 'bg-green-500 border-green-500' : 'border-gray-600'}`}></div>
                        <span className={`text-xs sm:text-sm ${task.status === 'Done' ? 'text-gray-500 line-through' : 'text-gray-200'} truncate`}>{task.title}</span>
                      </div>
                      <span className={`text-[9px] sm:text-[10px] px-2 py-1 rounded-md border whitespace-nowrap ${task.color}`}>
                        {task.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="text-center mb-16 max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 w-fit mb-6">
            <Network className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold text-purple-300">AI-Powered Agents</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">From Meeting to Execution</h2>
          <p className="text-gray-400 text-lg">
            AI agents to automate these repetitive activities and give project teams a continuously updated view
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {agentsData.map((agent, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-[#11121c] border border-gray-800 rounded-3xl p-8 flex flex-col h-full hover:border-gray-600 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white ${agent.iconBg}`}>
                {agent.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{agent.title}</h3>
              <p className="text-sm text-gray-400 mb-8 flex-grow">{agent.desc}</p>
              
              <div className="space-y-4 pt-6 border-t border-gray-800">
                {agent.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Transform Your Project Success Section */}
      <section className="py-24 bg-[#0a0612] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Project Success</h2>
              <p className="text-gray-400 text-lg mb-12 max-w-lg">
                Experience unprecedented project management efficiency with our AI-powered solutions that adapt to your team's unique workflow.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {transformFeatures.map((feat, idx) => (
                  <div key={idx} className="bg-[#161722] border border-gray-800 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-200 leading-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual Kanban Mockup (Pure CSS) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#11121c] border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden font-sans flex flex-col h-[400px]"
            >
              <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white"><KanbanSquare className="w-4 h-4"/></div>
                  <span className="font-semibold text-white">Sprint Board</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"><Plus className="w-4 h-4 text-gray-400"/></div>
                  <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"><MoreHorizontal className="w-4 h-4 text-gray-400"/></div>
                </div>
              </div>

              {/* Kanban Columns */}
              <div className="flex-1 grid grid-cols-3 gap-4 overflow-hidden">
                {/* To Do */}
                <div className="flex flex-col bg-[#161722] rounded-xl p-3 h-full">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-gray-400 uppercase">To Do</span>
                    <span className="bg-gray-800 text-gray-400 text-[10px] px-2 py-0.5 rounded-full">2</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-[#1c1d2b] p-3 rounded-lg border border-gray-800">
                      <div className="w-8 h-2 bg-rose-500/50 rounded-full mb-2"></div>
                      <p className="text-xs text-gray-200 mb-3">Design auth flow screens</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-gray-500">TASK-101</span>
                        <div className="w-5 h-5 rounded-full bg-purple-500 text-[8px] flex items-center justify-center font-bold">AK</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* In Progress */}
                <div className="flex flex-col bg-[#161722] rounded-xl p-3 h-full">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-blue-400 uppercase">In Progress</span>
                    <span className="bg-blue-500/20 text-blue-400 text-[10px] px-2 py-0.5 rounded-full">1</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-[#1c1d2b] p-3 rounded-lg border border-gray-800 border-l-2 border-l-blue-500">
                      <div className="w-8 h-2 bg-yellow-500/50 rounded-full mb-2"></div>
                      <p className="text-xs text-gray-200 mb-3">Setup CI/CD pipeline</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-gray-500">TASK-098</span>
                        <div className="w-5 h-5 rounded-full bg-indigo-500 text-[8px] flex items-center justify-center font-bold">JD</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Done */}
                <div className="flex flex-col bg-[#161722] rounded-xl p-3 h-full">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-green-400 uppercase">Done</span>
                    <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full">1</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-[#1c1d2b] p-3 rounded-lg border border-gray-800 opacity-60">
                      <div className="w-8 h-2 bg-green-500/50 rounded-full mb-2"></div>
                      <p className="text-xs text-gray-400 line-through mb-3">Database migration</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-gray-600">TASK-092</span>
                        <div className="w-5 h-5 rounded-full bg-blue-500 text-[8px] flex items-center justify-center font-bold">SJ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 w-fit mb-6">
            <Network className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold text-purple-300">Smart Integrations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Connect With Your Existing Project Management Tools</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our AI agents automatically sync with your project management tools to create tickets and update documentation
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {integrationsData.map((integration, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-[#11121c] border border-gray-800 rounded-3xl p-8 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border bg-gray-800/30 ${integration.borderColor}`}>
                  {integration.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{integration.title}</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {integration.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center flex flex-col items-center">
          <p className="text-sm text-gray-500 mb-6">Don't see your tool? We're constantly adding new integrations.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-purple-500/30 text-purple-400 text-sm font-semibold hover:bg-purple-500/10 transition-colors"
          >
            Request Integration
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/15 via-[#0a0514] to-[#0a0514] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center max-w-3xl mx-auto px-4 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 w-fit mb-8">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold text-purple-300">Get Started Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Turn Every Project Conversation <br className="hidden md:block"/> Into Action
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-10">
            Join thousands of teams already using AI to deliver projects faster and more efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Contact Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default ProjectManagement;
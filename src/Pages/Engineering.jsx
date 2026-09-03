import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Settings, 
  Cloud, 
  GitMerge, 
  Code2, 
//   Trello, 
  FileText, 
  MessageSquare,
  ArrowRight,
  Zap,
  CircleDot,
  TerminalSquare
} from 'lucide-react';

const Engineering = () => {
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

  // Agents Data
  const agentsData = [
    {
      id: "cto-assistant",
      title: "CTO Assistant",
      subtitle: "Generates CTO-focused reports from technical meetings.",
      icon: <Settings className="w-6 h-6 text-blue-400" />,
      about: "Sits above the noise of individual standups to give CTOs and VPs of Engineering the view they actually need: project health, blockers, technical debt, and team capacity - in one report, after every leadership sync.",
      features: [
        "Project status and technical decisions, summarized for leadership",
        "Cross-cutting blockers surfaced before they become escalations",
        "Resource and capacity analysis pulled straight from meeting discussion"
      ],
      focusArea: "CTO Assistant",
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500"
    },
    {
      id: "architecture-advisor",
      title: "Architecture Advisor",
      subtitle: "System design reviews and technical decision records.",
      icon: <Cloud className="w-6 h-6 text-purple-400" />,
      about: "Every architecture discussion generates decisions someone eventually has to remember - and defend. Duxpy logs the decision, the rationale, and the tradeoffs discussed, so your team has a searchable architectural decision record without anyone writing an ADR by hand.",
      features: [
        "Architectural decisions captured with rationale, not just outcomes",
        "Technical debt implications flagged as they're discussed",
        "System dependency and integration points mapped automatically"
      ],
      focusArea: "Architecture Advisor",
      borderColor: "border-purple-500/30",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-500"
    },
    {
      id: "sprint-analyzer",
      title: "Sprint Analyzer",
      subtitle: "Sprint planning, standups, and retros.",
      icon: <GitMerge className="w-6 h-6 text-green-400" />,
      about: "Duxpy sits in on your agile ceremonies and tracks what actually happened - not just what was planned. Velocity trends, recurring blockers, and team dynamics surface automatically, so retros start with data instead of memory.",
      features: [
        "Sprint commitments and outcomes tracked automatically",
        "Recurring blockers and dependencies flagged across sprints",
        "Velocity trends visible without a manual report"
      ],
      focusArea: "Sprint Analyzer",
      borderColor: "border-green-500/30",
      bgColor: "bg-green-500/10",
      iconColor: "text-green-500"
    },
    {
      id: "technical-debt-tracker",
      title: "Technical Debt Tracker",
      subtitle: "Teams that discuss debt but never prioritize it.",
      icon: <Code2 className="w-6 h-6 text-red-400" />,
      about: "Technical debt gets mentioned in a dozen meetings and prioritized in none. Duxpy catalogs every debt item as it comes up - in planning, in code review discussions, in retros - and ranks it by business impact so it actually makes it onto a roadmap.",
      features: [
        "Technical debt catalogued automatically from any meeting",
        "Items prioritized by business impact, not just engineering opinion",
        "Debt accumulation patterns tracked over time"
      ],
      focusArea: "Technical Debt Tracker",
      borderColor: "border-red-500/30",
      bgColor: "bg-red-500/10",
      iconColor: "text-red-500"
    }
  ];

  // Integrations/Insights Destination Data
  const destinationsData = [
    {
      title: "Jira & Asana",
      subtitle: "Action items and technical debt items sync directly to your existing boards",
    //   icon: <Trello className="w-8 h-8 text-blue-400" />,
      features: [
        "Auto-creates tickets from action items and technical debt discussions",
        "Syncs priority, assignee, and status directly to your existing Jira or Asana boards",
        "Keeps engineering backlogs current without anyone leaving the meeting"
      ],
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Confluence & Notion",
      subtitle: "Decisions and sprint summaries saved as searchable documentation",
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      features: [
        "Auto-publishes architecture decisions and sprint summaries",
        "Keeps a searchable decision record so rationale isn't lost after the meeting ends",
        "Organizes documentation directly into your existing Confluence or Notion workspace"
      ],
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    },
    {
      title: "Slack & Teams",
      subtitle: "Blockers and CTO briefings delivered where your team already talks",
      icon: <MessageSquare className="w-8 h-8 text-indigo-400" />,
      features: [
        "Auto-delivers blockers and CTO briefings directly to the right Slack or Teams channel",
        "Keeps leadership and teams aligned without anyone digging through meeting notes",
        "Surfaces urgent blockers in real time so nothing waits for the next standup"
      ],
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20"
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit">
              <TerminalSquare className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold text-blue-300">AI-Powered Engineering Management</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Standups, Sprints & Architecture Reviews<br/>
              <span className="text-blue-400">Documented Automatically</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Duxpy turns every technical meeting into a structured report: CTO briefings, architecture decisions, sprint velocity, and technical debt - without a developer touching a keyboard.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                to="/signup" 
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                Start Free Trial
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500 rounded-full blur-[80px] opacity-30"></div>

            {/* Mockup Card */}
            <div className="bg-[#11121c] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden font-sans relative z-10">
              
              {/* Window Header */}
              <div className="h-10 bg-[#161722] border-b border-gray-800 flex items-center justify-between px-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[10px] text-gray-400 font-medium tracking-wide">Duxpy - Engineering Meeting</div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <CircleDot className="w-2.5 h-2.5 text-green-400 animate-pulse" />
                  <span className="text-[9px] text-green-400 font-medium">Recording</span>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-6 space-y-6 bg-[#0c0d14]">
                
                {/* Message 1 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    TL
                  </div>
                  <div>
                    <div className="bg-[#1a1b26] rounded-2xl rounded-tl-none px-4 py-3 border border-gray-800 text-sm text-gray-300">
                      "We need to address the scaling issues in our microservices architecture..."
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1.5 ml-1">2:32 PM</div>
                  </div>
                </div>

                {/* Message 2 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    SA
                  </div>
                  <div>
                    <div className="bg-[#1a1b26] rounded-2xl rounded-tl-none px-4 py-3 border border-gray-800 text-sm text-gray-300 leading-relaxed">
                      "The current load balancing strategy isn't optimal for our traffic patterns..."
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1.5 ml-1">2:35 PM</div>
                  </div>
                </div>

                {/* AI Insight Box */}
                <div className="mt-6 rounded-xl bg-[#111424] border border-blue-500/30 p-5 shadow-[0_0_20px_rgba(59,130,246,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-blue-300 tracking-wider">CTO Assistant Insight</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Technical Challenge Identified:</span> Microservices scaling and load balancing optimization needed. Current system shows 78% resource utilization under peak load.<br/><br/>
                    <span className="font-semibold text-blue-400">Recommendation:</span> Implement dynamic scaling policies and enhance monitoring.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">AI-Powered Engineering Agents</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            One Agent for Every Seat at the Engineering Table, From the CTO's desk to the sprint board, pick the agent that matches the meeting.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {agentsData.map((agent) => (
            <motion.div 
              key={agent.id}
              variants={itemVariants}
              className="bg-[#11121c] border border-gray-800 rounded-3xl p-8 flex flex-col h-full hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${agent.bgColor} ${agent.borderColor}`}>
                  {agent.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{agent.title}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-8">{agent.subtitle}</p>
              
              <div className="mb-8 flex-grow">
                <h4 className="text-sm font-bold text-white mb-3">About this Agent</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{agent.about}</p>
              </div>

              <div className="space-y-4 mb-8">
                {agent.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${agent.iconColor}`} />
                    <span className="text-sm text-gray-300">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-800">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  Focus Area: <span className={`${agent.iconColor}`}>{agent.focusArea}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Where Insights Go (Destinations) */}
      <section className="py-24 bg-[#0a0612] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Where Your Engineering Insights Go</h2>
            <p className="text-gray-400 text-lg">Duxpy doesn't just generate reports - it puts them where your team already works</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {destinationsData.map((dest, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-[#11121c] border border-gray-800 rounded-2xl p-8 flex flex-col hover:border-gray-600 transition-colors shadow-lg"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border mb-8 ${dest.bgColor} ${dest.borderColor}`}>
                  {dest.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{dest.title}</h3>
                <p className="text-sm text-gray-400 mb-8 h-10">{dest.subtitle}</p>
                
                <div className="space-y-4">
                  {dest.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/15 via-[#0a0514] to-[#0a0514] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Level Up Your Engineering<br/>
            <span className="text-cyan-400">Leadership with AI</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl">
            Transform your technical meetings into actionable insights. Start optimizing your engineering processes today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/pricing" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold text-sm hover:bg-gray-800 transition-colors"
            >
              View Pricing Plans
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {[
              "14-day free trial",
              "No setup fees",
              "Cancel anytime"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-xs sm:text-sm text-gray-400 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Engineering;
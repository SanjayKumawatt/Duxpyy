import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Rocket,
  Search,
  Eye,
  TrendingUp,
  BrainCircuit,
  FileText,
  MessageSquare,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Video,
  Monitor,
  Layout,
  Database,
  Cloud,
  MessageCircle,
  Plus,
  ArrowRight,
  Download,
  Users2,
  Lock,
  CircleDot,
  User,
  ChevronDown,
  Briefcase
} from 'lucide-react';

const CustomerSupport = () => {
  const [openFaq, setOpenFaq] = useState(null);

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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Journey Data mapped with pure CSS visual mockups
  const journeyData = [
    {
      title: "Comprehensive Conversation Summaries",
      desc: "Generate clear and organized overviews of every customer interaction, ensuring all key details are documented for future reference.",
      points: ["Instant analysis of intro calls", "Automated deal qualification", "Seamless follow-up tracking"],
      icon: <Search className="w-6 h-6 text-purple-400" />,
      visual: (
        <div className="w-full h-full bg-[#11121c] p-6 flex flex-col justify-center border border-gray-800 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
          <div className="bg-[#1a1b26] rounded-xl border border-gray-700 p-4 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-bold text-white">Customer Support Assistant</h4>
              <button className="bg-red-500/20 text-red-400 text-[10px] px-3 py-1 rounded border border-red-500/30">Create Agent</button>
            </div>
            <p className="text-[10px] text-gray-400 mb-4 pb-2 border-b border-gray-800">Goal: Generate clear, structured summaries of customer support conversations.</p>
            <div className="space-y-3">
              {[
                "Extract Customer data including name, contact info, and account identifiers mentioned during the interaction.",
                "Summarize the main issue or request the customer reported, specifying affected products or services.",
                "List the troubleshooting steps performed or instructions given by the support agent during the call."
              ].map((text, i) => (
                <div key={i} className="flex gap-3 items-start bg-[#151623] p-2 rounded-lg border border-gray-800">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px] font-bold flex-shrink-0">{i+1}</div>
                  <p className="text-[10px] text-gray-300 leading-relaxed mt-0.5">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Essential Information Capture",
      desc: "Automatically record critical elements such as customer identity, issue details, troubleshooting steps, and resolution status within each summary.",
      points: ["Surface risks automatically", "Collaborate on key findings", "Data-driven investment memos"],
      icon: <Eye className="w-6 h-6 text-blue-400" />,
      visual: (
        <div className="w-full h-full bg-[#11121c] p-6 flex flex-col justify-center border border-gray-800 rounded-2xl relative overflow-hidden">
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
           <div className="bg-[#1a1b26] rounded-xl border border-gray-700 shadow-xl overflow-hidden flex flex-col h-64">
              <div className="h-8 bg-[#161722] border-b border-gray-800 flex items-center px-4 gap-2">
                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                 <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <span className="text-[10px] text-gray-400 ml-2">Duxpy - Agents</span>
              </div>
              <div className="flex-1 p-4 flex flex-col gap-3">
                 <h4 className="text-xs font-bold text-white mb-2">Your Agents</h4>
                 {[
                   {name: "Scrum Agent - Ticket Creator", status: "Enabled", color: "text-green-400 bg-green-500/20"},
                   {name: "Product Manager Agent", status: "Enabled", color: "text-green-400 bg-green-500/20"},
                   {name: "Recruiting Agent", status: "Disabled", color: "text-gray-400 bg-gray-500/20"}
                 ].map((agent, i) => (
                   <div key={i} className="flex justify-between items-center bg-[#151623] p-2.5 rounded-lg border border-gray-800">
                     <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-gray-800 flex items-center justify-center"><User className="w-3 h-3 text-gray-400"/></div>
                        <div>
                          <div className="text-[10px] font-semibold text-white flex items-center gap-2">
                            {agent.name} <span className={`text-[8px] px-1.5 rounded ${agent.color}`}>{agent.status}</span>
                          </div>
                          <div className="w-32 h-1 bg-gray-700 rounded mt-1"></div>
                        </div>
                     </div>
                     <div className="w-12 h-4 bg-purple-600 rounded text-[8px] flex items-center justify-center text-white">Active</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      )
    },
    {
      title: "Actionable Insights & Follow-up",
      desc: "Track customer sentiment and outline necessary follow-up actions, empowering support teams to deliver proactive and personalized customer care.",
      points: ["Automated KPI tracking", "Early issue detection", "Generate board-ready reports"],
      icon: <TrendingUp className="w-6 h-6 text-pink-400" />,
      visual: (
        <div className="w-full h-full bg-[#11121c] p-6 flex flex-col justify-center border border-gray-800 rounded-2xl relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500/10 blur-3xl rounded-full"></div>
           <div className="bg-[#1a1b26] rounded-xl border border-gray-700 shadow-xl overflow-hidden flex flex-col h-64">
              <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                 <div className="text-[10px] text-gray-400">Agent Summary / Customer Support</div>
                 <button className="text-[9px] text-gray-300 flex items-center gap-1 border border-gray-700 px-2 py-1 rounded bg-[#151623]"><Download className="w-3 h-3"/> Download</button>
              </div>
              <div className="flex-1 p-4 overflow-hidden flex flex-col gap-3">
                 <div className="bg-[#151623] border border-gray-800 rounded-lg p-3">
                   <h5 className="text-[10px] font-bold text-gray-200 mb-2">Issue Description</h5>
                   <p className="text-[9px] text-gray-400 mb-1"><span className="text-gray-300">Main Issue:</span> Clarification on payment process for organization accounts.</p>
                   <p className="text-[9px] text-gray-400 mb-1"><span className="text-gray-300">Affected Products:</span> Payment gateway integration.</p>
                   <p className="text-[9px] text-gray-400"><span className="text-gray-300">Category:</span> Billing</p>
                 </div>
                 <div className="bg-[#151623] border border-gray-800 rounded-lg p-3 opacity-60">
                   <h5 className="text-[10px] font-bold text-gray-200 mb-2">Troubleshooting & Recommendations</h5>
                   <div className="w-full h-2 bg-gray-700 rounded-full mb-1"></div>
                   <div className="w-3/4 h-2 bg-gray-700 rounded-full"></div>
                 </div>
              </div>
           </div>
        </div>
      )
    }
  ];

  // Features Data
  const featuresData = [
    { title: "AI-Powered Transcription", desc: "Real-time, speaker-diarized transcripts with over 95% accuracy across 50+ languages.", icon: <BrainCircuit className="w-6 h-6 text-purple-400" /> },
    { title: "Automated Summaries", desc: "Instantly get summaries, action items, and key topics from every call with custom templates.", icon: <FileText className="w-6 h-6 text-blue-400" /> },
    { title: "Conversation Intelligence", desc: "Track keywords, analyze sentiment, and uncover hidden insights with advanced AI models.", icon: <MessageSquare className="w-6 h-6 text-pink-400" /> },
    { title: "Seamless CRM Sync", desc: "Automatically push notes, contacts, and tasks to your CRM with bi-directional sync.", icon: <RefreshCw className="w-6 h-6 text-purple-400" /> },
    { title: "Advanced Search", desc: "Find any moment, in any conversation, across your entire history with semantic search.", icon: <SearchCheck className="w-6 h-6 text-blue-400" /> },
    { title: "Enterprise-Grade Security", desc: "Protecting your data with SOC 2, GDPR, and HIPAA compliance plus end-to-end encryption.", icon: <ShieldCheck className="w-6 h-6 text-pink-400" /> }
  ];

  // Integrations Data
  const integrationsData = [
    // { name: "Google Meet", icon: <Monitor className="w-6 h-6 text-green-500" /> },
    // { name: "Microsoft Teams", icon: <Layout className="w-6 h-6 text-indigo-500" /> },
    { name: "Asana", icon: <CheckCircle2 className="w-6 h-6 text-rose-400" /> },
    { name: "Confluence", icon: <FileText className="w-6 h-6 text-blue-400" /> },
    { name: "Jira", icon: <Layout className="w-6 h-6 text-blue-600" /> },
    { name: "Monday.com", icon: <Briefcase className="w-6 h-6 text-purple-500" /> },
    { name: "Salesforce", icon: <Cloud className="w-6 h-6 text-blue-400" /> },
    { name: "HubSpot", icon: <Database className="w-6 h-6 text-orange-500" /> },
    { name: "Slack", icon: <MessageCircle className="w-6 h-6 text-pink-500" /> }
  ];

  // FAQs Data
  const faqs = [
    { question: "How does Duxpy ensure our sensitive conversation data is secure?", answer: "We utilize enterprise-grade encryption for data at rest and in transit. We are fully SOC 2, GDPR, and HIPAA compliant, ensuring all customer support conversations remain strictly confidential and secure." },
   
    { question: "Can the AI be customized to our firm's specific investment thesis?", answer: "Yes, Duxpy allows you to build custom templates and tracking frameworks so the AI extracts exactly what matters to your specific support workflows and business criteria." },
    { question: "What is the onboarding process like?", answer: "Onboarding is incredibly fast. You can set up Duxpy in under 5 minutes. For Enterprise teams, we provide a dedicated account manager to assist with custom CRM mappings and team training." }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0a0514] font-sans text-white pt-24 pb-12 overflow-hidden">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-32 flex flex-col items-center">
        
        {/* Top Trust Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161722] border border-gray-800 mb-8"
        >
          <Rocket className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-semibold text-gray-300 tracking-wide">Trusted by 150+ Investment Professionals</span>
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-6"
        >
          The AI Agent for <span className="bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">Customer Support Teams</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl text-center mb-8"
        >
          Generate clear, structured summaries of customer support conversations by capturing essential information such as customer identity, issue details, troubleshooting steps, resolution status, sentiment, and follow-up actions
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <Link 
            to="/signup" 
            className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center gap-2"
          >
            <Rocket className="w-4 h-4" />
            Get Started Free
          </Link>
        </motion.div>

        {/* Trust Markers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {[
            "No credit card required",
            "14-day free trial",
            "Setup in 5 minutes"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300 font-medium">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* Dashboard Mockup (Pure CSS) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-5xl mx-auto relative"
        >
          {/* Subtle Outer Glows */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500 rounded-full blur-[80px] opacity-30"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-30"></div>

          <div className="bg-[#11121c] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden font-sans relative z-10 flex flex-col h-[500px]">
            
            {/* Header Bar */}
            <div className="h-12 bg-[#161722] border-b border-gray-800 flex items-center justify-between px-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-purple-600 flex items-center justify-center">
                  <MessageSquare className="w-3 h-3 text-white" />
                </div>
                <span className="font-bold text-white text-sm tracking-wide">Duxpy</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-[10px] border border-gray-700 bg-gray-800 px-2 py-1 rounded text-gray-300 flex items-center gap-1"><Rocket className="w-3 h-3"/> Upgrade</button>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center text-[10px]">JD</div>
                  <div className="hidden sm:block text-right leading-tight">
                     <div className="text-[10px] text-white">Joe Doe</div>
                     <div className="text-[8px] text-gray-500">joe@Duxpy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#0c0d14] p-6 flex flex-col overflow-hidden">
               <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                 <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-white">&lt;</div>
                 <span>Agent Summary</span>
               </div>

               {/* Mock Navigation Tabs */}
               <div className="flex gap-4 border-b border-gray-800 pb-3 mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide text-xs font-medium">
                  <span className="text-gray-500 hover:text-gray-300 cursor-pointer">Query</span>
                  <span className="text-gray-500 hover:text-gray-300 cursor-pointer">Tags</span>
                  <span className="text-gray-500 hover:text-gray-300 cursor-pointer">Speaker Analytics</span>
                  <span className="text-gray-500 hover:text-gray-300 cursor-pointer">Ticket Creator</span>
                  <span className="text-gray-500 hover:text-gray-300 cursor-pointer">PRDs</span>
                  <span className="text-gray-500 hover:text-gray-300 cursor-pointer">HR</span>
                  <span className="text-gray-500 hover:text-gray-300 cursor-pointer">BANT</span>
                  <span className="text-gray-500 hover:text-gray-300 cursor-pointer">Digital Growth</span>
                  <span className="text-blue-400 border-b-2 border-blue-400 pb-3 -mb-[13px]">Customer Support</span>
               </div>

               <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm font-bold text-white">Customer Support Agent Report</h2>
                  <button className="text-[10px] text-gray-400 flex items-center gap-1 hover:text-white"><Download className="w-3 h-3"/> Download</button>
               </div>

               {/* Report Cards */}
               <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                 
                 {/* Card 1 */}
                 <div className="bg-[#161722] border border-gray-800 rounded-xl p-4">
                    <h3 className="text-xs font-bold text-gray-200 mb-3">Customer Identity</h3>
                    <div className="space-y-1.5">
                      <p className="text-[11px] text-gray-400"><span className="text-gray-300">Name:</span> Ajith Vijayan</p>
                      <p className="text-[11px] text-gray-400"><span className="text-gray-300">Contact Info:</span> No information available in transcript</p>
                      <p className="text-[11px] text-gray-400"><span className="text-gray-300">Account Identifiers:</span> No information available in transcript</p>
                    </div>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-[#161722] border border-gray-800 rounded-xl p-4">
                    <h3 className="text-xs font-bold text-gray-200 mb-3">Issue Description</h3>
                    <div className="space-y-1.5">
                      <p className="text-[11px] text-gray-400"><span className="text-gray-300">Main Issue:</span> Clarification on payment process for organization accounts and handling trial periods.</p>
                      <p className="text-[11px] text-gray-400"><span className="text-gray-300">Affected Products:</span> Payment gateway integration, organization account management.</p>
                      <p className="text-[11px] text-gray-400"><span className="text-gray-300">Category:</span> Billing</p>
                    </div>
                 </div>

                 {/* Card 3 (Faded to show scroll) */}
                 <div className="bg-[#161722] border border-gray-800 rounded-xl p-4 opacity-70">
                    <h3 className="text-xs font-bold text-gray-200 mb-3">Troubleshooting & Recommendations</h3>
                    <div className="space-y-1.5">
                      <p className="text-[11px] text-gray-400"><span className="text-gray-300">Steps:</span> Explanation of payment process for organization accounts where one admin pays for multiple users.</p>
                    </div>
                 </div>

               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Built for full customer support journey */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Built for the full <span className="bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">Customer Support Journey</span></h2>
          <p className="text-gray-400 text-lg">
            From initial inquiry to case closure, Duxpy is your team's dedicated AI partner
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {journeyData.map((item, idx) => (
            <React.Fragment key={idx}>
              {/* Conditional rendering for alternating Zig-Zag layout */}
              {idx % 2 !== 0 ? (
                 <>
                   {/* Text first, Visual second for Odd items */}
                   <motion.div variants={itemVariants} className="flex flex-col justify-center order-2 md:order-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center border border-gray-700">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="space-y-3">
                        {item.points.map((point, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-300">{point}</span>
                          </div>
                        ))}
                      </div>
                   </motion.div>
                   <motion.div variants={itemVariants} className="order-1 md:order-2 h-64 md:h-auto">
                      {item.visual}
                   </motion.div>
                 </>
              ) : (
                 <>
                   {/* Visual first, Text second for Even items */}
                   <motion.div variants={itemVariants} className="h-64 md:h-auto">
                      {item.visual}
                   </motion.div>
                   <motion.div variants={itemVariants} className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center border border-gray-700">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="space-y-3">
                        {item.points.map((point, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-300">{point}</span>
                          </div>
                        ))}
                      </div>
                   </motion.div>
                 </>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful features, <span className="text-purple-400">seamless workflow</span></h2>
          <p className="text-gray-400 text-lg">Everything you need to supercharge your investment process.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuresData.map((feat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#11121c] border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center mb-5 border border-gray-700">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Seamless integrations with your favorite tools</h2>
          <p className="text-gray-400 text-base">Connect with the platforms you already use to streamline your investment workflow</p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {integrationsData.map((integration, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-[#11121c] border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center w-36 hover:border-gray-600 transition-colors"
            >
              <div className="mb-3">
                {integration.icon}
              </div>
              <h4 className="text-xs font-semibold text-gray-300 text-center">{integration.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">Questions</span></h2>
          <p className="text-gray-400 text-base">Everything you need to know about Duxpy</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-800 last:border-0 pb-4">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
              >
                <span className="text-sm md:text-base font-semibold text-gray-200 pr-4 group-hover:text-white transition-colors">{faq.question}</span>
                <Plus className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-45 text-white' : 'group-hover:text-white'}`} />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 text-sm text-gray-400 leading-relaxed pr-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
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
          className="relative z-10 text-center max-w-3xl mx-auto px-4 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Ready to supercharge your <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">customer support workflow?</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl">
            Join thousands of support professionals who've transformed their workflows with AI-powered assistance. Start your 14-day free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <Rocket className="w-4 h-4" />
              Start Free Trial
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
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

export default CustomerSupport;
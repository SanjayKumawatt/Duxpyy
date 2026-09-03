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
  Share2,
  Download,
  Users,
  ChevronDown,
  CircleDot,
  Megaphone,
  Briefcase,
  PieChart,
  ArrowRight
} from 'lucide-react';

const Finance = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Lifecycle Data with Custom CSS Visuals built directly in
  const lifecycleData = [
    {
      title: "Deal Sourcing",
      desc: "Never miss a potential investment. Automatically capture and analyze every intro call, generating instant summaries and identifying high-potential leads based on your thesis.",
      points: ["Instant analysis of intro calls", "Automated deal qualification", "Seamless follow-up tracking"],
      icon: <Search className="w-5 h-5 text-purple-400" />,
      visual: (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#151623] to-[#0c0d14] p-6">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl"></div>
            <Megaphone className="w-20 h-20 text-purple-400 relative z-10 transform -rotate-12" />
            <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/30 animate-pulse">
              <span className="text-yellow-400 font-bold text-sm">$</span>
            </div>
            <div className="absolute top-10 -right-6 w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/30 animate-pulse delay-75">
              <span className="text-yellow-400 font-bold text-xs">$</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Due Diligence",
      desc: "Go deeper, faster. Analyze expert interviews and reference calls to automatically surface red flags, verify claims, and build a data-driven investment case.",
      points: ["Surface risks automatically", "Collaborate on key findings", "Data-driven investment memos"],
      icon: <Eye className="w-5 h-5 text-indigo-400" />,
      visual: (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#151623] to-[#0c0d14] p-6">
          <div className="w-full max-w-[200px] bg-[#1a1b26] rounded-lg border border-gray-700 shadow-xl overflow-hidden flex flex-col">
            <div className="h-6 bg-[#1f202e] border-b border-gray-700 flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            </div>
            <div className="p-3 space-y-2">
              <div className="w-3/4 h-2 bg-indigo-500/30 rounded-full"></div>
              <div className="w-full h-2 bg-gray-700 rounded-full"></div>
              <div className="w-5/6 h-2 bg-gray-700 rounded-full"></div>
              <div className="flex gap-2 mt-2 pt-2 border-t border-gray-700">
                <div className="w-4 h-4 rounded bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30"><CheckCircle2 className="w-2 h-2 text-indigo-400"/></div>
                <div className="w-4 h-4 rounded bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30"><CheckCircle2 className="w-2 h-2 text-indigo-400"/></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Portfolio Management",
      desc: "Stay ahead of the curve. Automate portfolio company check-ins, track progress against KPIs, and get early warnings on potential issues to better support your founders.",
      points: ["Automated KPI tracking", "Early issue detection", "Generate board-ready reports"],
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
      visual: (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#151623] to-[#0c0d14] p-6">
          <div className="relative">
            <div className="w-24 h-32 bg-[#1a1b26] border-2 border-blue-500/30 rounded-xl relative z-10 p-2 flex flex-col gap-2">
               <div className="w-full h-8 bg-blue-500/10 rounded border border-blue-500/20"></div>
               <div className="w-full flex-1 bg-gray-800 rounded"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-600 rounded-full border-4 border-[#0c0d14] flex items-center justify-center z-20">
              <CheckCircle2 className="w-6 h-6 text-white" />
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
    { title: "Seamless CRM Sync", desc: "Automatically push notes, contacts, and tasks to your CRM with bi-directional sync.", icon: <RefreshCw className="w-6 h-6 text-green-400" /> },
    { title: "Advanced Search", desc: "Find any moment, in any conversation, across your entire history with semantic search.", icon: <SearchCheck className="w-6 h-6 text-indigo-400" /> },
    { title: "Enterprise-Grade Security", desc: "Protecting your data with SOC 2, GDPR, and HIPAA compliance plus end-to-end encryption.", icon: <ShieldCheck className="w-6 h-6 text-rose-400" /> }
  ];

  // Integrations Data
  const integrationsData = [
    // { name: "Zoom", icon: <Video className="w-6 h-6 text-blue-500" /> },
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
    { question: "How does Duxpy ensure our sensitive conversation data is secure?", answer: "We utilize enterprise-grade encryption for data at rest and in transit. We are fully SOC 2, GDPR, and HIPAA compliant, ensuring your dealflow and portfolio data remains strictly confidential and secure." },
 
    { question: "Can the AI be customized to our firm's specific investment thesis?", answer: "Yes, Duxpy allows you to build custom templates and tracking frameworks so the AI extracts exactly what matters to your specific investment criteria and thesis." },
    { question: "What is the onboarding process like?", answer: "Onboarding is incredibly fast. You can set up Duxpy in under 5 minutes. For Enterprise firms, we provide a dedicated account manager to assist with custom CRM mappings and team training." }
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
          The AI Copilot for <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Venture Capital</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl text-center mb-8"
        >
          Duxpy automates note-taking and analysis across your entire investment workflow, from deal sourcing to portfolio management, so you can focus on what matters: building relationships and closing deals.
        </motion.p>
        
        {/* Trust Markers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
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

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link 
            to="/signup" 
            className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Get Started Free
          </Link>
        </motion.div>

        {/* Dashboard Mockup (Pure CSS) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-5xl mx-auto relative"
        >
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="bg-[#11121c] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden font-sans relative z-10 flex flex-col md:flex-row h-auto md:h-[500px]">
            
            {/* Main Content Area */}
            <div className="flex-1 p-6 flex flex-col border-r border-gray-800 bg-[#0c0d14] overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-white text-lg">Duxpy</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded bg-gray-800 border border-gray-700 text-xs text-gray-300 flex items-center gap-2"><Share2 className="w-3 h-3"/> Share</button>
                  <button className="px-3 py-1.5 rounded bg-gray-800 border border-gray-700 text-xs text-gray-300 flex items-center gap-2"><Download className="w-3 h-3"/> Download</button>
                </div>
              </div>

              <div className="mb-2 text-sm text-gray-400 flex items-center gap-2">
                <span className="hover:text-white cursor-pointer">My Meetings</span>
                <span>/</span>
                <span className="text-gray-500">Q3 Dealflow Sync - Block...</span>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">Meeting Summary</h2>
              <p className="text-sm text-gray-400 mb-8">The meeting covered the quarterly performance, key metrics, and strategic plans for the next quarter.</p>

              {/* Data Table Mockup */}
              <div className="flex-1 overflow-hidden flex flex-col gap-6">
                
                {/* Action Points */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded bg-purple-500"></div>
                    <span className="text-sm font-bold text-gray-200">Action Points</span>
                  </div>
                  <div className="bg-[#161722] border border-gray-800 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 p-3 border-b border-gray-800 text-xs text-gray-500 font-medium">
                      <div className="col-span-1">#</div>
                      <div className="col-span-6">Task</div>
                      <div className="col-span-3">Owner</div>
                      <div className="col-span-2">Action</div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 p-3 border-b border-gray-800 text-xs text-gray-300 items-center">
                      <div className="col-span-1">1</div>
                      <div className="col-span-6">Prepare the detailed sales report for Q3.</div>
                      <div className="col-span-3 flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">A</div> Alice Johnson</div>
                      <div className="col-span-2 text-blue-400">Edit</div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 p-3 text-xs text-gray-300 items-center">
                      <div className="col-span-1">2</div>
                      <div className="col-span-6">Draft new marketing strategies for Q3.</div>
                      <div className="col-span-3 flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">B</div> Bob Smith</div>
                      <div className="col-span-2 text-blue-400">Edit</div>
                    </div>
                  </div>
                </div>

                {/* Topics (Faded slightly to show depth) */}
                <div className="opacity-60 hidden sm:block">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded bg-yellow-500"></div>
                    <span className="text-sm font-bold text-gray-200">Topics</span>
                  </div>
                  <div className="bg-[#161722] border border-gray-800 rounded-lg overflow-hidden">
                     <div className="p-3 text-xs text-gray-500 h-10 border-b border-gray-800"></div>
                     <div className="p-3 text-xs text-gray-500 h-10"></div>
                  </div>
                </div>

              </div>
            </div>

            {/* Sidebar Area */}
            <div className="w-full md:w-72 bg-[#161722] p-6 flex flex-col">
              
              {/* User Profile */}
              <div className="flex justify-end items-center gap-3 mb-8">
                 <div className="text-right">
                   <div className="text-sm font-bold text-white leading-none">Joe Doe</div>
                   <div className="text-[10px] text-gray-500">joe.doe@realinvest.com</div>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center">JD</div>
              </div>

              {/* Participants */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-white">Participants</h3>
                  <span className="text-[10px] text-blue-400 cursor-pointer">View All</span>
                </div>
                <div className="space-y-3">
                  {[
                    {name: "Alice Johnson", color: "bg-red-500/20 text-red-400", init: "A"},
                    {name: "Bob Smith", color: "bg-blue-500/20 text-blue-400", init: "B"},
                    {name: "Wade Warren", color: "bg-purple-500/20 text-purple-400", init: "W"},
                    {name: "Leslie Alexander", color: "bg-green-500/20 text-green-400", init: "L"}
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${p.color}`}>{p.init}</div>
                      <span className="text-xs text-gray-300">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ask Section */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-sm font-bold text-white mb-4">Ask?</h3>
                <div className="flex-1 border border-gray-800 rounded-lg bg-[#0c0d14] p-3 flex flex-col justify-end gap-2">
                   <div className="bg-[#1a1b26] p-2 rounded text-[10px] text-gray-400">How is engineering with their current tasks?</div>
                   <div className="bg-[#1a1b26] p-2 rounded text-[10px] text-gray-400">Are we on track to meet our goals?</div>
                   <div className="bg-[#1a1b26] p-2 rounded text-[10px] text-gray-400">How can we improve collaboration?</div>
                   <div className="mt-2 relative">
                     <input type="text" placeholder="Message to Duxpy..." className="w-full bg-[#161722] border border-gray-700 rounded p-2 text-[10px] text-white focus:outline-none" readOnly />
                     <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center"><Plus className="w-3 h-3 text-gray-400"/></div>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* Built for full investment lifecycle */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Built for the full <span className="text-pink-400">investment lifecycle</span></h2>
          <p className="text-gray-400 text-lg">
            From sourcing to exit, Duxpy is your team's dedicated AI partner.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {lifecycleData.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-[#11121c] border border-gray-800 rounded-3xl overflow-hidden flex flex-col lg:flex-row hover:border-gray-600 transition-colors col-span-1 md:col-span-2 lg:col-span-1 first:md:col-span-2"
            >
              <div className="lg:w-2/5 h-48 lg:h-auto border-b lg:border-b-0 lg:border-r border-gray-800">
                {item.visual}
              </div>
              <div className="p-8 lg:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center border border-gray-700">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <div className="space-y-3">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful features, <span className="text-blue-400">seamless workflow</span></h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked <span className="text-blue-400">Questions</span></h2>
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">VC workflow?</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl">
            Join thousands of investment professionals who've transformed their workflow with AI. Start your 14-day free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              <Rocket className="w-4 h-4" />
              Start Free Trial
            </Link>
            <Link 
              to="/book-demo" 
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

export default Finance;
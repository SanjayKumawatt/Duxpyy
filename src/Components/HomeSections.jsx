import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Menu,
  User,
  MessageSquare,
  Search,
  Settings,
  HelpCircle,
  FileText,
  Rocket,
  Star,
  FolderOpen,
  TrendingUp,
  Share2,
  CheckSquare,
  List,
  Crosshair,
  Zap,
  Link as LinkIcon,
  ChevronDown,
  MessageCircle
} from 'lucide-react';

const HomeSections = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { question: "How does Duxpy protect our meeting data in transit and at rest?", answer: "We use industry-standard AES-256 encryption for data at rest and TLS 1.2+ for data in transit to ensure maximum security." },
    { question: "Who can access our data, and can we control or restrict access ourselves?", answer: "Only authorized personnel within your organization can access your data. Duxpy provides granular role-based access control (RBAC)." },
    { question: "Is Duxpy compliant with regulations like GDPR, HIPAA, and SOC 2?", answer: "Yes, Duxpy is fully compliant with SOC2 Type II, GDPR, and offers HIPAA compliant plans for healthcare providers." },
    { question: "Does Duxpy use our meeting data to train AI models? How is privacy maintained?", answer: "No, we do not use your private meeting data to train our foundational models. Your data remains strictly yours." },
    
    { question: "How does Duxpy handle security incidents and ensure ongoing monitoring?", answer: "We have 24/7 automated monitoring and a dedicated security team ready to respond to any anomalous activities instantly." }
  ];

  const gridFeatures = [
    { icon: <Rocket className="w-5 h-5 text-purple-400" />, title: "Organizational Memory", desc: "Capture and preserve years of meeting conversations, decisions, and institutional knowledge." },
    { icon: <Star className="w-5 h-5 text-purple-400" />, title: "AI Meeting Search & Q&A", desc: "Ask questions across hundreds of meetings and instantly retrieve relevant conversations, decisions, and context." },
    { icon: <FolderOpen className="w-5 h-5 text-purple-400" />, title: "Meeting Intelligence & Analytics", desc: "Analyze recurring meetings to identify key trends, hidden risks, recurring blockers, customer issues, and growth opportunities." },
    { icon: <TrendingUp className="w-5 h-5 text-purple-400" />, title: "From Conversations to Action", desc: "Automatically identify decisions, action items, commitments, and follow-ups-and turn them into workflows." },
    { icon: <Share2 className="w-5 h-5 text-purple-400" />, title: "Customer meetings into Insights", desc: "Identify customer pain points, requirements, objections, feedback, and buying signals across every conversation." },
    { icon: <List className="w-5 h-5 text-purple-400" />, title: "Accelerate Product Decisions", desc: "Aggregate feature requests, product feedback, and customer needs to discover what your users really want." },
    { icon: <CheckSquare className="w-5 h-5 text-purple-400" />, title: "Track Decisions & Commitments", desc: "Automatically track every decision, commitment, owner, deadline, action item, and critical next step across your meetings." },
    { icon: <TrendingUp className="w-5 h-5 text-purple-400" />, title: "Reduce Post-Meeting Admin Work", desc: "Transform conversations into Jira tickets, product requirements, sales follow-ups, and actionable workflows." },
    { icon: <LinkIcon className="w-5 h-5 text-purple-400" />, title: "Connect Your Favorite Tools", desc: "Turn meeting conversations into Jira tickets, CRM updates, documentation, tasks, and workflows across the tools your teams already use." }
  ];

  return (
    <div className="bg-[#0a0514] font-sans w-full overflow-hidden text-white">
      
      {/* --- Ask Duxpy Anything Section --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Ask Duxpy Anything
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Chat with all your meetings. AI retrieves the right conversations, reasons across them, and delivers accurate answers, reports and actionable insights.
            </p>

            <div className="space-y-6">
              {[
                { title: "Generate Executive Reports Automatically", text: "Summarize all leadership meetings from the last 12 months." },
                { title: "Analyze Trends Across Hundreds of Meetings", text: "Discovers hidden patterns, recurring issues, project risks, customer feedback, and business trends across hundreds of meetings." },
                { title: "Never Lose Organizational Knowledge", text: "Every meeting enriches your organization's knowledge, making every conversation instantly searchable and reusable." },
                { title: "Find Answers from Years of Team Conversations", text: "Find every discussion, decision, and insight from thousands of conversations." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    <strong className="text-white font-semibold">{item.title} - </strong> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Phone Mockup (Pure CSS) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-[320px] h-[640px] bg-[#1a1b26] rounded-[3rem] border-[10px] border-[#0c0d14] relative shadow-2xl overflow-hidden flex flex-col">
              
              {/* Top Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0c0d14] rounded-b-3xl z-20"></div>

              {/* Topographic Background Pattern Simulation */}
              <div className="absolute top-0 w-full h-64 opacity-20 pointer-events-none">
                 <div className="w-[200%] h-[200%] rounded-[100%] border border-gray-500 absolute -top-[50%] -left-[50%]"></div>
                 <div className="w-[180%] h-[180%] rounded-[100%] border border-gray-500 absolute -top-[40%] -left-[40%]"></div>
                 <div className="w-[160%] h-[160%] rounded-[100%] border border-gray-500 absolute -top-[30%] -left-[30%]"></div>
              </div>

              {/* App Header */}
              <div className="pt-12 px-6 pb-4 flex items-center justify-between z-10">
                <button className="w-10 h-10 rounded-full bg-[#151623] flex items-center justify-center border border-gray-700">
                  <Menu className="w-5 h-5 text-gray-300" />
                </button>
                <div className="font-bold text-sm tracking-widest text-gray-200">ASK DUXPY <span className="text-[10px] align-top bg-purple-500 text-white px-1 rounded">AI</span></div>
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500 flex items-center justify-center">
                  <User className="w-5 h-5 text-indigo-400" />
                </div>
              </div>

              {/* App Body */}
              <div className="flex-1 px-4 pb-6 flex flex-col justify-end space-y-4 z-10 relative">
                
                {/* Chat Bubbles */}
                <div className="w-full bg-[#0c0d14] rounded-2xl p-4 flex items-center gap-3 border border-gray-800">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-xs text-gray-300 truncate">How is engineering progressing with their curre...</div>
                  <MoreHorizontalIcon />
                </div>

                <div className="w-full bg-[#0c0d14] rounded-2xl p-4 flex items-center gap-3 border border-gray-800">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Settings className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-xs text-gray-300 truncate">Are we on track to meet our goals?</div>
                  <MoreHorizontalIcon />
                </div>

                <div className="w-full bg-[#0c0d14] rounded-2xl p-4 flex items-center gap-3 border border-gray-800">
                  <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-pink-400" />
                  </div>
                  <div className="text-xs text-gray-300 truncate">How can we improve collaboration?</div>
                  <MoreHorizontalIcon />
                </div>

                {/* Input Area */}
                <div className="mt-4 bg-[#0c0d14] rounded-full p-2 pl-6 flex items-center justify-between border border-gray-800">
                  <span className="text-xs text-gray-500">Message to Duxpy.........</span>
                  <div className="w-10 h-10 rounded-full bg-[#1a1b26] flex items-center justify-center border border-gray-700">
                    <Zap className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Features Grid Section --- */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {gridFeatures.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#11121c] border border-gray-800 hover:border-gray-600 rounded-xl p-6 md:p-8 transition-colors group cursor-default"
            >
              <div className="mb-4 bg-gray-800/50 w-fit p-3 rounded-lg group-hover:bg-purple-900/30 transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Pricing Section --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text mb-4">
          Supercharge every meeting
        </h2>
        <p className="text-gray-300 text-lg mb-12">Choose the plan that's right for you</p>

        {/* Toggle */}
        <div className="flex items-center justify-center mb-16">
          <div className="bg-[#151623] border border-gray-800 rounded-full p-1 flex relative">
            <button 
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors ${isAnnual ? 'text-black' : 'text-gray-400 hover:text-white'}`}
            >
              Annually
            </button>
            <button 
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors ${!isAnnual ? 'text-black' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            {/* Active Pill Background */}
            <div 
              className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-full transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-[96%]'}`}
            ></div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          
          {/* Free Plan */}
          <div className="bg-[#0c0d14] border border-purple-900/50 rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Free (15 days)</h3>
            <p className="text-sm text-gray-400 mb-6 h-10">High quality meeting notes.</p>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-4xl font-bold text-white">₹0</span>
              <span className="text-sm text-gray-400 font-medium mb-1">INR</span>
            </div>
            <Link to="/signup" className="w-full py-3 px-4 rounded-xl bg-[#1a1b26] hover:bg-[#232533] text-white text-sm font-semibold text-center transition-colors mb-8 border border-gray-700">
              Basic Plan
            </Link>
            <div className="space-y-4">
              {['Unlimited recordings & transcriptions', 'Limited AI Summarization & Action points', 'Integrations', 'Agents', '600 mins of storage', 'Ask Duxpy : AI assistant', 'Upload File', 'Record on-line', 'Mobile App', 'Chrome Extension'].map((feature, i) => (
                <div key={i} className="flex gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#0c0d14] border-2 border-purple-500/50 rounded-3xl p-8 flex flex-col relative shadow-[0_0_40px_rgba(168,85,247,0.1)] transform md:-translate-y-4">
            <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
            <p className="text-sm text-gray-400 mb-6 h-10">Collaboration for teams or companies</p>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-4xl font-bold text-white">₹{isAnnual ? '525' : '699'}</span>
              <span className="text-sm text-gray-400 font-medium mb-1">per seat/month</span>
            </div>
            {isAnnual ? (
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-8 h-6">
                Billed annually at ₹6,299 <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-medium">💰 Save ₹2,089</span>
              </div>
            ) : (
              <div className="text-xs text-gray-400 mb-8 h-6 flex items-center">Billed monthly</div>
            )}
            
            <Link to="/checkout/pro" className="w-full py-3 px-4 rounded-xl bg-white hover:bg-gray-100 text-black text-sm font-semibold text-center transition-colors mb-8">
              Buy this plan
            </Link>
            <div className="space-y-4">
              {['Unlimited transcription', 'Unlimited AI summaries', 'Unlimited storage', 'Download transcripts, summaries, recordings', 'Talk-time analytics', 'Follow-up centre for action points', 'Unlimited integrations', 'Conversation intelligence Agents', 'Meeting consolidation'].map((feature, i) => (
                <div key={i} className="flex gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#0c0d14] border border-purple-900/50 rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-sm text-gray-400 mb-6 h-10">For large scale enterprises</p>
            <div className="mb-8 mt-1 h-[44px]">
              <span className="text-4xl font-bold text-white">Let's Talk</span>
            </div>
            <Link to="/contact" className="w-full py-3 px-4 rounded-xl bg-[#1a1b26] hover:bg-[#232533] text-white text-sm font-semibold text-center transition-colors mb-8 border border-gray-700">
              Let's talk
            </Link>
            <div className="space-y-4">
              {['On-Premise deployment', 'White Label Solutions', 'APIs', 'SSO', 'SOC1 TYPE2 Compliance', 'HIPAA compliance', 'Private storage', 'Custom data retention', 'Transcript + Summary only mode', 'Super admin role', 'Dedicated account manager'].map((feature, i) => (
                <div key={i} className="flex gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>
          </div>

          <div className="md:col-span-8 space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#151623] border border-gray-800 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
                >
                  <span className="text-sm md:text-base font-semibold text-gray-200 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-5 pt-0 text-sm text-gray-400 border-t border-gray-800/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        {/* Subtle radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0a0514] to-[#0a0514] pointer-events-none"></div>

        <div className="relative z-10 text-center flex flex-col items-center">
          

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4 leading-tight">
            Ready To See <br/> Duxpy Agent In Action ?
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-10">
            Claim your free trial or book a free demo
          </p>
          <Link 
            to="/book-demo" 
            className="px-8 py-3.5 bg-white text-black font-semibold text-sm rounded-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Book A Demo
          </Link>
        </div>
      </section>

    </div>
  );
};

// Helper component for the three dots icon in the mockup
const MoreHorizontalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 ml-auto cursor-pointer">
    <circle cx="12" cy="12" r="1"/>
    <circle cx="19" cy="12" r="1"/>
    <circle cx="5" cy="12" r="1"/>
  </svg>
);

export default HomeSections;
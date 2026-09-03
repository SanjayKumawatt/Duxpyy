import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Star, 
  Award, 
  Zap, 
  Globe2, 
  Infinity as InfinityIcon,
  Target,
  LineChart,
  BrainCircuit,
  DollarSign,
  ArrowRight,
  MessageSquare,
  CircleDot
} from 'lucide-react';

const Sales = () => {
  const [isAnnual, setIsAnnual] = useState(true);

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
      transition: { duration: 0.5 }
    }
  };

  const statsData = [
    { value: "95%", title: "Accuracy Rate", desc: "Industry-leading transcription accuracy", icon: <Award className="w-6 h-6 text-purple-400" /> },
    { value: "10x", title: "Faster", desc: "Speed up your meeting workflow", icon: <Zap className="w-6 h-6 text-pink-400" /> },
    { value: "50+", title: "Languages", desc: "Multi-language support", icon: <Globe2 className="w-6 h-6 text-blue-400" /> },
    { value: "99.9%", title: "Uptime", desc: "Enterprise-grade reliability", icon: <InfinityIcon className="w-6 h-6 text-green-400" /> }
  ];

  const frameworksData = [
    {
      id: "meddpicc",
      title: "Sales Agent - MEDDPICC",
      icon: <Target className="w-6 h-6 text-purple-400" />,
      useCase: "Complex, multi-stakeholder enterprise deals",
      about: "Built for long sales cycles with multiple decision-makers. Duxpy identifies the Economic Buyer, Champion, and Decision Criteria from your call - then flags where your deal is exposed before your forecast call does.",
      features: [
        "Auto-identifies decision-makers and Economic Buyer signals",
        "Flags missing Paper Process and Competition details",
        "Surfaces deal risk before pipeline review, Take action before the pipeline review"
      ],
      framework: "MEDDPICC",
      borderColor: "border-purple-500/30",
      bgColor: "bg-purple-500/10"
    },
    {
      id: "spiced",
      title: "Sales Agent - SPICED",
      icon: <LineChart className="w-6 h-6 text-pink-400" />,
      useCase: "Modern SaaS and PLG sales motions.",
      about: "Built for teams selling on value and impact rather than pain alone. Duxpy tracks Situation, Pain, Impact, Critical Event, and Decision signals through the call - so your report reflects how your team actually pitches.",
      features: [
        "Captures quantified business impact, not just stated pain",
        "Flags the Critical Event driving urgency",
        "Structures next steps around the buyer's decision process"
      ],
      framework: "SPICED",
      borderColor: "border-pink-500/30",
      bgColor: "bg-pink-500/10"
    },
    {
      id: "spin",
      title: "Sales Agent - SPIN",
      icon: <BrainCircuit className="w-6 h-6 text-blue-400" />,
      useCase: "Discovery-heavy, consultative selling.",
      about: "Built for reps who lead with questions. Duxpy separates Situation and Problem questions from Implication and Need-Payoff questions - showing you exactly where a discovery call went deep and where it stayed surface-level.",
      features: [
        "Breaks the call down by SPIN question type",
        "Flags under-explored Implication questions",
        "Coaches reps on discovery depth, call over call"
      ],
      framework: "SPIN",
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-500/10"
    },
    {
      id: "bant",
      title: "Sales Agent - BANT",
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      useCase: "Fast-cycle, transactional sales.",
      about: "Built for high-velocity teams that need a quick qualify/disqualify signal. Duxpy extracts Budget, Authority, Need, and Timeline the moment a call ends - so reps and managers know instantly if a deal is real.",
      features: [
        "Instant Budget/Authority/Need/Timeline extraction",
        "Flags unqualified leads before they clog the pipeline",
        "Built for high-volume SDR and inside-sales teams"
      ],
      framework: "BANT",
      borderColor: "border-green-500/30",
      bgColor: "bg-green-500/10"
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
              Never Write a Call Summary Again.<br/>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Just Close The Deal.</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Duxpy listens to every sales call and turns it into a MEDDPICC, BANT, SPIN, or SPICED report - automatically. Your team spends the saved hours selling, not typing.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                to="/signup" 
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Start Free Trial
              </Link>
              {/* Note: Removed "View Demo" based on user correction history guidelines */}
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              {[
                { text: "Win More Deals" },
                { text: "Boost Sales" },
                { text: "Drive More Revenue" }
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
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 rounded-full blur-[60px] opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-pink-500 rounded-full blur-[60px] opacity-50"></div>

            {/* Mockup Card */}
            <div className="bg-[#11121c] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden font-sans">
              
              {/* Window Header */}
              <div className="h-10 bg-[#161722] border-b border-gray-800 flex items-center justify-between px-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[10px] text-gray-400 font-medium tracking-wide">Duxpy - Sales Call</div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <CircleDot className="w-2.5 h-2.5 text-green-400 animate-pulse" />
                  <span className="text-[9px] text-green-400 font-medium">Recording</span>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-6 space-y-6 bg-[#0c0d14]">
                
                {/* Message 1 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    SP
                  </div>
                  <div>
                    <div className="bg-[#1a1b26] rounded-2xl rounded-tl-none px-4 py-3 border border-gray-800 text-sm text-gray-300">
                      "What's your current budget for this type of solution?"
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1.5 ml-1">2:32 PM</div>
                  </div>
                </div>

                {/* Message 2 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    SM
                  </div>
                  <div>
                    <div className="bg-[#1a1b26] rounded-2xl rounded-tl-none px-4 py-3 border border-gray-800 text-sm text-gray-300 leading-relaxed">
                      "We're spending too much time on unqualified prospects. Our conversion rate is only 12%..."
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1.5 ml-1">2:35 PM</div>
                  </div>
                </div>

                {/* AI Insight Box */}
                <div className="mt-6 rounded-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/20 border border-indigo-500/30 p-5 shadow-[0_0_20px_rgba(99,102,241,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">AI Insight Generated</span>
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    <span className="font-semibold text-white">Key pain point identified:</span> Lead qualification inefficiency. Prospect spends 40% of time on unqualified leads with 12% conversion rate.<br/><br/>
                    <span className="font-semibold text-green-400">Opportunity:</span> Implement lead scoring system.
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Numbers Sales Teams See With Duxpy</h2>
            <p className="text-gray-400 text-sm md:text-base">Proven results that drive revenue growth</p>
          </div>

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
                <div className="w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center mb-6">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <h4 className="text-base font-semibold text-gray-200 mb-2">{stat.title}</h4>
                <p className="text-xs text-gray-400">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">AI-Powered Sales Agent</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Pick the Framework Your Sales Team Already Runs On. Duxpy doesn't force a single methodology. Choose the sales framework that matches how your team sells - Duxpy fits the report to it.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {frameworksData.map((agent) => (
            <motion.div 
              key={agent.id}
              variants={itemVariants}
              className="bg-[#11121c] border border-gray-800 rounded-3xl p-8 flex flex-col h-full hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${agent.bgColor} ${agent.borderColor}`}>
                  {agent.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{agent.title}</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-bold text-white mb-2">Use Case</h4>
                <p className="text-sm text-gray-400">{agent.useCase}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-white mb-2">About this Agent</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{agent.about}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {agent.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-800">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  Framework: <span className="text-gray-300">{agent.framework}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing Section (Embedded directly as requested) */}
      <section className="py-24 bg-[#0d071a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-300 text-base max-w-2xl mx-auto mb-16">
              Every Plan Includes Unlimited Sales Agents Run MEDDPICC, SPICED, SPIN, and BANT on the same call - switch frameworks anytime, no add-on cost.
            </p>
            
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">Supercharge every meeting</h3>
            <p className="text-gray-400 text-sm mb-10">Choose the plan that's right for you</p>

            {/* Annual / Monthly Toggle */}
            <div className="flex items-center justify-center mb-16">
              <div className="bg-[#151623] border border-gray-800 rounded-full p-1 flex relative w-[200px]">
                <button 
                  onClick={() => setIsAnnual(true)}
                  className={`flex-1 relative z-10 py-2 rounded-full text-xs font-semibold transition-colors ${isAnnual ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  Annually
                </button>
                <button 
                  onClick={() => setIsAnnual(false)}
                  className={`flex-1 relative z-10 py-2 rounded-full text-xs font-semibold transition-colors ${!isAnnual ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  Monthly
                </button>
                <div 
                  className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full ml-2'}`}
                ></div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Free Plan */}
            <div className="bg-[#11121c] border border-gray-800 rounded-3xl p-8 flex flex-col hover:border-gray-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Free (15 days)</h3>
              <p className="text-sm text-gray-400 mb-6 h-10">High quality meeting notes.</p>
              <div className="flex items-end gap-2 mb-8 h-12">
                <span className="text-5xl font-bold text-white">₹0</span>
                <span className="text-sm text-gray-400 font-medium mb-1">INR</span>
              </div>
              <Link to="/signup" className="w-full py-3 px-4 rounded-xl bg-[#1a1b26] hover:bg-[#232533] text-white text-sm font-semibold text-center transition-colors mb-8 border border-gray-700">
                Basic Plan
              </Link>
              <div className="space-y-4">
                {['Unlimited recordings & transcriptions', 'Limited AI Summarization & Action points', 'Integrations', 'Agents', '600 mins of storage', 'Ask Duxpy : AI assistant', 'Upload File', 'Record on-line', 'Mobile App', 'Chrome Extension'].map((feature, i) => (
                  <div key={i} className="flex gap-3 text-sm text-gray-300 items-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#11121c] border-2 border-purple-500/50 rounded-3xl p-8 flex flex-col relative shadow-[0_0_40px_rgba(168,85,247,0.15)] transform md:-translate-y-4">
              <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
              <p className="text-sm text-gray-400 mb-6 h-10">Collaboration for teams or companies</p>
              <div className="flex items-end gap-2 mb-2 h-12">
                <span className="text-5xl font-bold text-white">₹{isAnnual ? '525' : '699'}</span>
                <span className="text-sm text-gray-400 font-medium mb-1">per seat/month</span>
              </div>
              <div className="h-8 mb-6">
                {isAnnual ? (
                  <div className="flex items-center gap-2 text-[11px] text-gray-400">
                    Billed annually at ₹6,299 <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded border border-green-500/30 font-medium whitespace-nowrap">💰 Save ₹2,089</span>
                  </div>
                ) : (
                  <div className="text-xs text-gray-400 flex items-center h-full">Billed monthly</div>
                )}
              </div>
              <Link to="/checkout/pro" className="w-full py-3 px-4 rounded-xl bg-white hover:bg-gray-200 text-black text-sm font-semibold text-center transition-colors mb-8">
                Buy this plan
              </Link>
              <div className="space-y-4">
                {['Unlimited transcription', 'Unlimited AI summaries', 'Unlimited storage', 'Download transcripts, summaries, recordings', 'Talk-time analytics', 'Follow-up centre for action points', 'Unlimited integrations', 'Conversation intelligence Agents', 'Meeting consolidation'].map((feature, i) => (
                  <div key={i} className="flex gap-3 text-sm text-gray-300 items-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#11121c] border border-gray-800 rounded-3xl p-8 flex flex-col hover:border-gray-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-sm text-gray-400 mb-6 h-10">For large scale enterprises</p>
              <div className="flex items-end mb-8 h-12 pt-2">
                <span className="text-4xl font-bold text-white">Let's Talk</span>
              </div>
              <Link to="/contact" className="w-full py-3 px-4 rounded-xl bg-[#1a1b26] hover:bg-[#232533] text-white text-sm font-semibold text-center transition-colors mb-8 border border-gray-700 mt-2">
                Let's talk
              </Link>
              <div className="space-y-4">
                {['On-Premise deployment', 'White Label Solutions', 'APIs', 'SSO', 'SOC1 TYPE2 Compliance', 'HIPAA compliance', 'Private storage', 'Custom data retention', 'Transcript + Summary only mode', 'Super admin role', 'Dedicated account manager'].map((feature, i) => (
                  <div key={i} className="flex gap-3 text-sm text-gray-300 items-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0a0514] to-[#0a0514] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center max-w-3xl mx-auto px-4 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
            Win More Deals<br/>
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">With AI-Powered Agents</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-10">
            Stop missing opportunities. Start closing more deals with more deals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/pricing" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-gray-600 text-white font-semibold text-sm hover:bg-gray-800 transition-colors"
            >
              View Pricing Plans
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
            {[
              "Never Miss a Deal",
              "Convert More Leads",
              "Shorten Sales Cycles"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <CheckCircle2 className="w-3 h-3 text-green-400" />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Sales;
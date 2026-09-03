import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  BarChart3, 
  Globe2, 
  CalendarCheck, 
  FileText, 
  MessageSquareText, 
  Lightbulb, 
  Zap, 
  ShieldCheck,
  ArrowRight,
  Image as ImageIcon,
  Calendar,
  Mail,
  Database,
  Cloud,
  Video,
  Monitor,
  Layout,
  CheckCircle2,
  KanbanSquare
} from 'lucide-react';

const Features = () => {
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

  // Main Features Data (with Image Placeholders)
  // Bhai inke imageUrl ke andar apni image ki link paste kar dena
  const mainFeatures = [
    {
      id: 'intelligent-agents',
      title: 'Intelligent AI Agents',
      description: 'Our AI agents use cutting-edge natural language processing to understand context, learn from interactions, and deliver increasingly personalized results.',
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
      link: '/features/intelligent-agents',
      imageUrl: "", // <-- PASTE YOUR FIRST IMAGE LINK HERE
      fallbackVisual: (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#151623] to-[#0c0d14]">
          <BrainCircuit className="w-16 h-16 text-purple-400 mb-4 opacity-80" />
          <h4 className="text-xl font-bold text-white mb-6">Intelligent AI Agents</h4>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-semibold">HR</span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-semibold">Sales</span>
            <span className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg text-sm font-semibold">Support</span>
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm font-semibold">Ticketing</span>
          </div>
        </div>
      )
    },
    {
      id: 'advanced-analytics',
      title: 'Advanced Analytics',
      description: 'Gain deep insights into performance metrics, user engagement, and productivity improvements with our comprehensive analytics dashboard.',
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      link: '/features/analytics',
      imageUrl: "", // <-- PASTE YOUR SECOND IMAGE LINK HERE
      fallbackVisual: (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#151623] to-[#0c0d14]">
          <h4 className="text-xl font-bold text-white mb-6">Advanced Analytics</h4>
          <div className="w-full max-w-sm bg-[#1a1b26] rounded-xl p-4 border border-gray-700 shadow-xl">
             <div className="flex items-end gap-2 mb-6 h-24 border-b border-gray-700 pb-2">
               {[40, 70, 45, 90, 60, 80].map((h, i) => (
                 <div key={i} className="flex-1 bg-purple-500/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
               ))}
             </div>
             <div className="flex gap-4">
               <div className="w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent"></div>
               <div className="flex-1 space-y-2">
                 <div className="w-full h-2 bg-gray-700 rounded-full"></div>
                 <div className="w-3/4 h-2 bg-gray-700 rounded-full"></div>
               </div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'seamless-integrations',
      title: 'Seamless Integrations',
      description: 'Connect with your favorite tools and platforms without friction. Our API and pre-built integrations make it easy to incorporate AI into your existing workflow.',
      icon: <Globe2 className="w-6 h-6 text-purple-400" />,
      link: '/features/integrations',
      imageUrl: "", // <-- PASTE YOUR THIRD IMAGE LINK HERE
      fallbackVisual: (
        <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-[#151623] to-[#0c0d14]">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center border border-purple-500/30">
                <Globe2 className="w-10 h-10 text-purple-400" />
              </div>
            </div>
            {/* Orbital Nodes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#1a1b26] rounded-xl flex items-center justify-center border border-gray-700 shadow-lg">
              <Video className="w-6 h-6 text-blue-400" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#1a1b26] rounded-xl flex items-center justify-center border border-gray-700 shadow-lg">
              <Mail className="w-6 h-6 text-red-400" />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1a1b26] rounded-xl flex items-center justify-center border border-gray-700 shadow-lg">
              <Database className="w-6 h-6 text-green-400" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1a1b26] rounded-xl flex items-center justify-center border border-gray-700 shadow-lg">
              <Cloud className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
        </div>
      )
    }
  ];

  const moreFeatures = [
    { title: 'Smart Scheduling', desc: 'AI-powered calendar management that learns your preferences and optimizes your schedule.', icon: <CalendarCheck className="w-6 h-6 text-purple-400" /> },
    { title: 'Document Analysis', desc: 'Extract key insights and summarize long documents with remarkable accuracy.', icon: <FileText className="w-6 h-6 text-purple-400" /> },
    { title: 'Natural Conversations', desc: 'Engage in human-like dialogues with context awareness and memory of previous interactions.', icon: <MessageSquareText className="w-6 h-6 text-purple-400" /> },
    { title: 'Predictive Insights', desc: 'Anticipate trends and make data-driven recommendations before issues arise.', icon: <Lightbulb className="w-6 h-6 text-purple-400" /> },
    { title: 'Real-time Processing', desc: 'Process and analyze data instantly for immediate actionable insights.', icon: <Zap className="w-6 h-6 text-purple-400" /> },
    { title: 'Enterprise Security', desc: 'Bank-grade encryption and security protocols to keep your data safe and private.', icon: <ShieldCheck className="w-6 h-6 text-purple-400" /> }
  ];

  const integrations = [
    { name: "Calendar Integration", icons: [<Calendar className="w-5 h-5 text-blue-400" />, <Mail className="w-5 h-5 text-blue-600" />] },
    { name: "CRM Integration", icons: [<Database className="w-5 h-5 text-orange-500" />, <Cloud className="w-5 h-5 text-blue-400" />, <Layout className="w-5 h-5 text-red-500" />] },
    { name: "Knowledge Base", icons: [<FileText className="w-5 h-5 text-blue-500" />, <Monitor className="w-5 h-5 text-gray-300" />] },
    { name: "Meeting Integration", icons: [<Video className="w-5 h-5 text-blue-500" />, <Monitor className="w-5 h-5 text-green-500" />] },
    { name: "Project Management", icons: [<CheckCircle2 className="w-5 h-5 text-blue-400" />, <KanbanSquare className="w-5 h-5 text-pink-500" />] }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0a0514] font-sans text-white pt-24 pb-12 overflow-hidden">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-24 mt-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          Powerful <span className="text-purple-500">AI Features</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Discover the advanced capabilities that make our AI agents indispensable for modern businesses.
        </motion.p>
      </section>

      {/* Main Features (Zig-Zag Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 space-y-24">
        {mainFeatures.map((feat, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={feat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Text Area */}
              <div className="flex-1 space-y-6">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/20">
                  {feat.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{feat.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                  {feat.description}
                </p>
                
              </div>

              {/* Image / Placeholder Area */}
              <div className="flex-1 w-full max-w-xl">
                <div className="aspect-[4/3] w-full rounded-2xl bg-[#11121c] border border-gray-800 shadow-2xl relative overflow-hidden group">
                  {feat.imageUrl ? (
                    <img 
                      src={feat.imageUrl} 
                      alt={feat.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    feat.fallbackVisual
                  )}
                  
                  
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* More Powerful Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 pt-12 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">More Powerful Features</h2>
          <p className="text-gray-400 text-base">Explore the full range of capabilities that make our platform stand out.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {moreFeatures.map((feat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#11121c] border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-colors flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-900/20 flex items-center justify-center mb-5 border border-purple-500/10">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Integrations Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Integrations</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {integrations.map((integration, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#11121c] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center min-w-[200px] hover:border-purple-500/30 transition-colors cursor-default shadow-lg"
            >
              <h4 className="text-sm font-semibold text-purple-400 mb-4 text-center">{integration.name}</h4>
              <div className="flex items-center gap-4">
                {integration.icons.map((Icon, i) => (
                  <div key={i} className="p-2 bg-gray-800/50 rounded-lg">
                    {Icon}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Features;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // FAQ Data (Filled with standard SaaS answers for completeness)
  const faqs = [
    { 
      question: "What are the available Duxpy pricing plans?", 
      answer: "We offer three main plans: a Free plan (15 days) for basic meeting notes, a Pro plan for team collaboration and unlimited AI summaries, and an Enterprise plan for large-scale deployments with custom requirements." 
    },
    { 
      question: "Is there a free trial or free version available?", 
      answer: "Yes, we offer a Free plan that lasts for 15 days, providing high-quality meeting notes, limited AI summarization, and up to 600 mins of storage to help you experience the core features." 
    },
    { 
      question: "What is included in the Pro or Paid plan that’s not in the Free plan?", 
      answer: "The Pro plan includes unlimited transcription, unlimited AI summaries, unlimited storage, talk-time analytics, conversation intelligence agents, meeting consolidation, and unlimited integrations." 
    },
    { 
      question: "How is enterprise pricing determined?", 
      answer: "Enterprise pricing is custom-tailored based on your organization's specific needs, user count, deployment type (On-Premise vs Cloud), and required compliance standards. Please contact our sales team for a custom quote." 
    },
    { 
      question: "What payment methods are accepted?", 
      answer: "We accept all major credit cards, debit cards, and standard business payment methods including wire transfers for Enterprise annual contracts." 
    },
    { 
      question: "Can I upgrade, downgrade, or cancel my plan anytime?", 
      answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time from your account settings. Changes will be reflected in your next billing cycle." 
    },
    { 
      question: "Does Duxpy offer refunds?", 
      answer: "We do not offer refunds for partial months of service. However, if you are unsatisfied during your first billing cycle, please reach out to support to discuss your case." 
    },
    { 
      question: "What happens to my data if I cancel my subscription?", 
      answer: "If you cancel, your data will be retained for a standard grace period before being securely deleted, in accordance with our data retention policy. You can download your transcripts and summaries before canceling." 
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0a0514] font-sans text-white pt-24 pb-20 overflow-hidden">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 mt-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6 tracking-tight"
        >
          Supercharge every meeting
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 text-lg mb-12"
        >
          Choose the plan that's right for you
        </motion.p>

        {/* Annual / Monthly Toggle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center mb-16"
        >
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
            {/* Sliding Pill Background */}
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full ml-2'}`}
            ></div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Cards Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          
          {/* Free Plan */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#0c0d14] border border-gray-800 rounded-3xl p-8 flex flex-col hover:border-gray-600 transition-colors"
          >
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
              {[
                'Unlimited recordings & transcriptions', 
                'Limited AI Summarization & Action points', 
                'Integrations', 
                'Agents', 
                '600 mins of storage', 
                'Ask Duxpy : AI assistant', 
                'Upload File', 
                'Record on-line', 
                'Mobile App', 
                'Chrome Extension'
              ].map((feature, i) => (
                <div key={i} className="flex gap-3 text-sm text-gray-300 items-start">
                  <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#0c0d14] border-2 border-purple-500/50 rounded-3xl p-8 flex flex-col relative shadow-[0_0_40px_rgba(168,85,247,0.15)] transform md:-translate-y-4"
          >
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
              {[
                'Unlimited transcription', 
                'Unlimited AI summaries', 
                'Unlimited storage', 
                'Download transcripts, summaries, recordings', 
                'Talk-time analytics', 
                'Follow-up centre for action points', 
                'Unlimited integrations', 
                'Conversation intelligence Agents', 
                'Meeting consolidation'
              ].map((feature, i) => (
                <div key={i} className="flex gap-3 text-sm text-gray-300 items-start">
                  <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#0c0d14] border border-gray-800 rounded-3xl p-8 flex flex-col hover:border-gray-600 transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-sm text-gray-400 mb-6 h-10">For large scale enterprises</p>
            
            <div className="flex items-end mb-8 h-12 pt-2">
              <span className="text-4xl font-bold text-white">Let's Talk</span>
            </div>
            
            <Link to="/contact" className="w-full py-3 px-4 rounded-xl bg-[#1a1b26] hover:bg-[#232533] text-white text-sm font-semibold text-center transition-colors mb-8 border border-gray-700 mt-2">
              Let's talk
            </Link>
            
            <div className="space-y-4">
              {[
                'On-Premise deployment', 
                'White Label Solutions', 
                'APIs', 
                'SSO', 
                'SOC1 TYPE2 Compliance', 
                'HIPAA compliance', 
                'Private storage', 
                'Custom data retention', 
                'Transcript + Summary only mode', 
                'Super admin role', 
                'Dedicated account manager'
              ].map((feature, i) => (
                <div key={i} className="flex gap-3 text-sm text-gray-300 items-start">
                  <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>
          </motion.div>

          <div className="md:col-span-8 space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#151623] border border-gray-800 rounded-xl overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm md:text-base font-semibold text-gray-200 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-180 text-white' : ''}`} />
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
                      <div className="p-4 md:p-5 pt-0 text-sm text-gray-400 border-t border-gray-800/50 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Pricing;
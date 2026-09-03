import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Terminal, 
  Briefcase, 
  Lightbulb, 
  X, 
  ChevronRight,
  BookOpen,
  MessageSquare
} from 'lucide-react';

// --- BLOG CONTENT DATA ---
const blogsData = [
  {
    id: "rag-challenge",
    title: "How We Cracked the Multi-Meeting RAG Challenge",
    category: "technology",
    tag: "RAG",
    icon: <Terminal className="w-5 h-5 text-blue-400" />,
    gradient: "from-blue-500/20 to-indigo-500/20",
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed font-sans">
        <h2 className="text-2xl font-bold text-white mb-6">Transforming Enterprise Conversations into Organizational Intelligence</h2>
        <p>Enterprise knowledge is rarely stored in a single document.</p>
        <p>It is spread across sales calls, customer meetings, product reviews, leadership discussions, project updates, support escalations, and countless other conversations happening every day.</p>
        <p>While Large Language Models (LLMs) have made it easier to search and summarize information, organizations still struggle with a fundamental challenge:</p>
        <p className="font-medium text-white border-l-2 border-blue-500 pl-4 py-2 bg-blue-500/10">How do you retrieve insights from hundreds or thousands of meetings and generate a single, accurate answer?</p>
        <p>At Duxpy, we faced this challenge while building our AI-powered Meeting Intelligence platform. Traditional Retrieval-Augmented Generation (RAG) architectures were not designed to reason across months of conversations distributed throughout an organization.</p>
        <p>This article explains how we built a Multi-Meeting RAG architecture that transforms fragmented discussions into actionable organizational intelligence.</p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">The Problem with Traditional RAG</h3>
        <p>Traditional RAG systems work well for:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>PDF documents</li>
          <li>Knowledge bases</li>
          <li>Policies and procedures</li>
          <li>Product documentation</li>
          <li>Structured repositories</li>
        </ul>
        <p className="mt-4">The process is straightforward: Convert documents into chunks &rarr; Generate embeddings &rarr; Store them in a vector database &rarr; Retrieve relevant chunks &rarr; Send context to an LLM &rarr; Generate a response.</p>
        <p>However, meetings create a different challenge.</p>
        <p>Consider the question: <em className="text-gray-200">"What concerns have enterprise customers raised about pricing during the last six months?"</em></p>
        <p>The answer may exist across: Customer discovery calls, Sales pipeline reviews, Executive business reviews, Product roadmap discussions, and Customer support escalations.</p>
        <p>No single meeting contains the complete answer. Traditional RAG retrieves individual chunks but struggles to understand relationships across hundreds of conversations.</p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Why Meeting Data is Different</h3>
        <div className="space-y-4">
          <div><strong className="text-gray-200">1. Information is Distributed:</strong> Critical insights are spread across multiple meetings rather than centralized in one document.</div>
          <div><strong className="text-gray-200">2. Context Evolves Over Time:</strong> Customer concerns discussed in January may evolve significantly by June.</div>
          <div><strong className="text-gray-200">3. Multiple Perspectives Exist:</strong> Sales teams, product managers, executives, and customers may discuss the same topic differently.</div>
          <div><strong className="text-gray-200">4. High Volume:</strong> Large organizations generate thousands of meeting transcripts every month.</div>
        </div>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Our Multi-Meeting RAG Architecture</h3>
        <p>To solve this problem, we designed a hierarchical retrieval framework that operates at multiple levels of intelligence.</p>
        
        <div className="space-y-6 mt-6">
          <div className="bg-[#161722] p-5 rounded-xl border border-gray-800">
            <h4 className="font-bold text-blue-400 mb-2">Layer 1: Meeting Intelligence Extraction</h4>
            <p className="text-sm">Each meeting is processed through an AI pipeline that extracts Key topics, Decisions, Risks, Action items, Customer feedback, Business entities, Sentiment signals, and Strategic themes.</p>
          </div>
          <div className="bg-[#161722] p-5 rounded-xl border border-gray-800">
            <h4 className="font-bold text-blue-400 mb-2">Layer 2: Knowledge Aggregation</h4>
            <p className="text-sm">We group semantically similar discussions into organizational themes. Instead of treating them as separate conversations, they become part of a shared knowledge graph.</p>
          </div>
          <div className="bg-[#161722] p-5 rounded-xl border border-gray-800">
            <h4 className="font-bold text-blue-400 mb-2">Layer 3: Multi-Level Retrieval</h4>
            <p className="text-sm">When a user asks a question, retrieval occurs across raw transcripts, summaries, decisions, action items, aggregated themes, and knowledge structures.</p>
          </div>
          <div className="bg-[#161722] p-5 rounded-xl border border-gray-800">
            <h4 className="font-bold text-blue-400 mb-2">Layer 4: Context Optimization</h4>
            <p className="text-sm">We solve the LLM context window limitation by ranking relevance, removing duplication, consolidating insights, and prioritizing authoritative sources.</p>
          </div>
          <div className="bg-[#161722] p-5 rounded-xl border border-gray-800">
            <h4 className="font-bold text-blue-400 mb-2">Layer 5: AI Reasoning and Synthesis</h4>
            <p className="text-sm">Finally, the LLM synthesizes information across multiple conversations, answering complex organizational queries intelligently.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Beyond Meeting Notes</h3>
        <p>Most meeting assistants focus on transcription and summarization. While useful, summaries only capture what happened in a single conversation.</p>
        <p>The next evolution is Organizational Intelligence. Organizations need answers such as: What are customers consistently requesting? Which product risks appear repeatedly? What commitments were made across teams?</p>
        <p className="font-medium text-white">Answering these questions requires reasoning across thousands of conversations. That is where Multi-Meeting RAG becomes essential.</p>
      </div>
    )
  },
  {
    id: "prompt-engineering",
    title: "From Prompt Engineering to AI Systems Engineering",
    category: "business",
    tag: "Prompt to Context to AI Systems",
    icon: <Lightbulb className="w-5 h-5 text-yellow-400" />,
    gradient: "from-yellow-500/20 to-orange-500/20",
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed font-sans">
        <p>A few years ago, if you could write a good prompt, you were considered an AI expert.</p>
        <p>People discovered that changing a few words could dramatically improve AI responses. Organizations started creating prompt libraries. Teams shared prompt templates. Entire courses emerged around Prompt Engineering.</p>
        <p>And for a while, it worked.</p>
        <p>But as businesses began deploying AI into real-world operations, they discovered something important:</p>
        <p className="font-medium text-white border-l-2 border-yellow-500 pl-4 py-2 bg-yellow-500/10">A great prompt can generate a great answer. It cannot guarantee a great outcome.</p>
        <p>That's where the industry is today. And that's why AI is entering a new phase of maturity.</p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">The Same Journey Software Engineering Experienced</h3>
        <p>The AI industry today reminds me of software engineering twenty years ago.</p>
        <p>In the early days, building software was primarily about writing code. If the code worked, the job was considered done. But as systems became larger and more critical to business operations, organizations realized that writing code was only one small piece of the puzzle.</p>
        <p>Success depended on Architecture, Scalability, Security, Reliability, Monitoring, Governance, and User Experience.</p>
        <p>Today, nobody evaluates a banking platform or ERP system based solely on how much code was written. We evaluate whether the entire system delivers business value reliably and at scale. AI is now following the exact same path.</p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Phase 1: Prompt Engineering</h3>
        <p>The first wave of AI adoption focused on prompts. The thinking was simple: "If we ask better questions, we'll get better answers."</p>
        <p>Prompt Engineering helped people unlock the power of large language models. But organizations quickly discovered its limitations.</p>
        <p>Imagine asking an AI: <em className="text-gray-200">"What should we do to improve customer retention?"</em> The AI might provide a reasonable answer. But does it know your customer history? Your churn data? Your product roadmap? Your support tickets?</p>
        <p>Of course not. The problem was no longer the prompt. The problem was the lack of context.</p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Phase 2: Context Engineering</h3>
        <p>This led to the next evolution: Context Engineering.</p>
        <p>Instead of focusing only on prompts, organizations began asking: "How do we provide the right information to the AI at the right time?"</p>
        <p>Rather than relying on the model's generic knowledge, companies started enriching AI with enterprise documents, customer information, and historical decisions. The workflow became:</p>
        <div className="text-center p-4 bg-gray-800/50 rounded-lg text-yellow-400 font-bold border border-gray-700">
          Question + Business Context = Better Answer
        </div>
        <p>This is why technologies like RAG, Vector Databases, and Semantic Search have become foundational.</p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">What Happens After The Answer?</h3>
        <p>Let's assume AI generates a perfect answer. Now what?</p>
        <p>Someone still needs to create tasks, update systems, assign owners, trigger workflows, track execution, and measure outcomes. And that's where most AI implementations stop.</p>
        <p className="font-medium text-white">Businesses don't buy AI to generate content. They invest in AI to improve outcomes.</p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Phase 3: AI Systems Engineering</h3>
        <p>AI Systems Engineering is the discipline of building complete business systems around AI.</p>
        <p>Instead of asking: "Can AI generate a response?" we ask: "Can AI help drive a business outcome?"</p>
        <p>The focus shifts from models to systems. From answers to actions. From intelligence to execution.</p>
        <p>At Duxpy, we are building true AI systems that don't just summarize your meetings, but execute the downstream actions automatically.</p>
      </div>
    )
  },
  {
    id: "top-10-tools",
    title: "Top 10 AI Meeting Management Tools in 2026",
    category: "business",
    tag: "Top 10 AI Meeting Management Tools",
    icon: <Briefcase className="w-5 h-5 text-purple-400" />,
    gradient: "from-purple-500/20 to-pink-500/20",
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed font-sans">
        <p>Your meetings are generating more data than ever. The question is - are you capturing it, or losing it?</p>
        <p>Meetings are no longer just conversations. They are repositories of decisions, action items, strategy shifts, and institutional knowledge - most of which vanishes the moment someone closes </p>
        <p>In 2026, AI meeting management tools have evolved far beyond simple transcription. Today’s best platforms combine real-time intelligence, multi-agent automation, CRM synchronization, workflow orchestration, and searchable meeting memory.</p>
        <p>This guide covers the best AI meeting management tools evaluated across capabilities, integrations, security, pricing, and use case.</p>

        <h3 className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-gray-800">1. Duxpy - Best for Enterprise-Grade AI Agent Automation</h3>
        <p>If most AI meeting tools are recorders with a summary on top, Duxpy is a different category entirely. It is an enterprise AI SaaS platform built around persona-driven AI agents - each agent tuned to a specific business role: Product, Sales, HR, Support, and more.</p>
        <p>Rather than simply transcribing what was said, Duxpy processes meeting conversations through domain-specific intelligence, extracting not just summaries but structured insights, follow-up actions, and strategic decisions mapped to the right stakeholders - automatically.</p>
        
        <h4 className="font-bold text-purple-400 mt-6">Why Duxpy Stands Out in 2026</h4>
        <p>What makes Duxpy genuinely different is its workflow orchestration layer. Most tools stop at notes. Duxpy pushes those notes into action - routing tasks, generating role-specific outputs, and connecting meeting intelligence to downstream business processes without manual handoffs.</p>
        
        <div className="bg-[#161722] p-5 rounded-xl border border-gray-800 my-6">
          <h4 className="font-bold text-white mb-4">Key Features</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-gray-200">Persona-Driven AI Agents:</strong> Dedicated AI agents that understand context within their domain, not just keywords.</li>
            <li><strong className="text-gray-200">Intelligent Meeting Automation:</strong> Converts raw audio into structured outputs: action items, decisions, and strategic summaries.</li>
            <li><strong className="text-gray-200">Workflow Orchestration:</strong> Automates downstream tasks directly from meeting insights - no manual copy-paste.</li>
            <li><strong className="text-gray-200">Organizational Memory:</strong> Builds a searchable knowledge base from past meetings.</li>
          </ul>
        </div>
        <p><strong className="text-gray-200">Best For:</strong> Mid-sized to large IT and SaaS enterprises that want AI to do more than take notes - teams that need their meetings to drive execution.</p>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-gray-800">2. Fireflies.ai - Best for Breadth of Integrations</h3>
        <p>Fireflies.ai has cemented itself as one of the most widely adopted AI meeting assistants in 2026, largely because of its extraordinary ecosystem reach. With native connectors spanning CRMs, project management tools, and storage systems, Fireflies turns every meeting into a workflow trigger.</p>
        <p><strong className="text-gray-200">Best For:</strong> Sales and operations teams that run high meeting volumes and need data to flow automatically.</p>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-gray-800">3. Fathom - Best Free Tier</h3>
        <p>Fathom has earned high ratings largely due to its unlimited free recording, 30-second post-call processing, and high transcription accuracy. In a market where “free” usually means capped, Fathom’s free tier is genuinely usable.</p>
        <p><strong className="text-gray-200">Best For:</strong> Individual contributors, freelancers, and small teams who want a premium experience without a premium price tag.</p>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-gray-800">4. Otter.ai - Best for Real-Time Live Transcription</h3>
        <p>Otter.ai was one of the first AI meeting tools to market, and its core strength remains its real-time transcription experience. Otter’s conversational interface lets you ask questions about meeting content rather than reading through full transcripts.</p>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-gray-800">5. tl;dv - Best for Multi-Meeting Pattern Analysis</h3>
        <p>While most tools focus on one meeting at a time, tl;dv emphasizes multi-meeting intelligence, analyzing patterns across conversations rather than just capturing individual calls.</p>
        <p><strong className="text-gray-200">Best For:</strong> Product teams and UX researchers who run discovery sessions regularly and need to synthesize insights across many conversations.</p>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-gray-800">6. Fellow - Best for Enterprise Security</h3>
        <p>Fellow is the only tool in its category with extensive compliance certifications at a team-accessible price, and it covers the entire meeting lifecycle - from pre-meeting agenda building to post-meeting action tracking.</p>
      </div>
    )
  }
];

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  // Prevent scrolling on background when modal is open
  useEffect(() => {
    if (activeBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeBlog]);

  return (
    <div className="w-full min-h-screen bg-[#0a0514] font-sans text-white pt-24 pb-24 overflow-hidden relative">
      
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161722] border border-gray-800 mb-6"
        >
          <BookOpen className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Knowledge Base</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          Duxpy AI Agent <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Blogs</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Insights, updates, and thought leadership on AI agents and their impact on business operations.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            to="/signup" 
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Blogs Grid (No Images as requested) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {blogsData.map((blog, idx) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              onClick={() => setActiveBlog(blog)}
              className="bg-[#11121c] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all cursor-pointer group flex flex-col h-full shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
            >
              {/* Graphic Placeholder using CSS gradient instead of image */}
              <div className={`h-48 bg-gradient-to-br ${blog.gradient} flex items-center justify-center border-b border-gray-800/50 relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-[#0a0514]/40"></div>
                 <div className="w-20 h-20 rounded-2xl bg-[#1a1b26] border border-gray-700 flex items-center justify-center shadow-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {blog.icon}
                 </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                    {blog.category}
                  </span>
                  <span className="text-[10px] bg-gray-800 px-2 py-1 rounded text-gray-300 font-medium">
                    {blog.tag}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors leading-snug">
                  {blog.title}
                </h3>
                
                <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
                  Read Article
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* Full Screen Modal Overlay for Blog Content */}
      <AnimatePresence>
        {activeBlog && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 overflow-y-auto"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="bg-[#0c0d14] w-full max-w-4xl rounded-2xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col my-auto relative"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-[#11121c]/90 backdrop-blur-md border-b border-gray-800 p-4 sm:px-8 sm:py-5 flex justify-between items-center z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center border border-gray-700">
                    {activeBlog.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-400 block leading-tight">{activeBlog.category}</span>
                    <span className="text-xs text-gray-300 font-medium hidden sm:block">Article View</span>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveBlog(null)}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors border border-gray-700"
                >
                  <X className="w-5 h-5 text-gray-300" />
                </button>
              </div>

              {/* Modal Content Scroll Area */}
              <div className="p-6 sm:p-10 lg:p-14 overflow-y-auto max-h-[80vh] scrollbar-hide">
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                    {activeBlog.title}
                  </h1>
                  
                  <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-gray-800">
                    <span className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1.5 rounded-full font-medium">
                      {activeBlog.tag}
                    </span>
                    <span className="text-xs bg-gray-800 text-gray-300 border border-gray-700 px-3 py-1.5 rounded-full font-medium flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" /> Duxpy Team
                    </span>
                  </div>

                  {/* Render the specific blog content */}
                  <div className="blog-content">
                    {activeBlog.content}
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Blogs;
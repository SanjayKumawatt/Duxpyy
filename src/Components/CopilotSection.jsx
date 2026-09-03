import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Zap, 
  FileText, 
  Cloud, 
  User, 
  Users, 
  Folder, 
  Video, 
  Home, 
  Mic, 
  MicOff,
  Video as VideoIcon, 
  MonitorUp, 
  PhoneOff, 
  Send,
  Image as ImageIcon,
  MoreHorizontal,
  ChevronLeft,
  Maximize2
} from 'lucide-react';

const CopilotSection = () => {
  return (
    <section className="w-full bg-[#0a0514] py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  AI Copilot for Every Meeting
                </span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Capture, transcribe, summarize, and transform every team conversation into searchable knowledge.
              </p>
            </div>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Settings className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                  Secure AI Meeting Recording,Transcription,Summaries and Action points
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                  Converts conversations into role-specific outputs like PRDs, JIRA tickets, deal briefs, and assessment reports
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                  Analyze an entire year of recurring meetings with Duxpy to uncover trends, decisions, action items, and business insights.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Cloud className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                  Reduces administrative effort, enhances accountability, and drives measurable action
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed pt-4 border-t border-white/10">
              Capture every conversation. Search every insight. Turn every meeting into organizational knowledge with Duxpy's AI Meeting Intelligence Platform.
            </p>
          </motion.div>

          {/* Right Column: Complex UI Mockup (Pure CSS & HTML) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="w-full bg-[#1e202e] rounded-2xl border border-gray-700 shadow-2xl overflow-hidden flex flex-col font-sans">
              
              {/* Mockup Top Bar */}
              <div className="h-12 bg-[#151623] border-b border-gray-800 flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-semibold text-gray-300 tracking-wider">Duxpy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-[10px] text-gray-400 font-medium">REC 00:12:34</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="flex -space-x-2">
                     <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-[#151623] flex items-center justify-center text-[8px] font-bold text-white">AJ</div>
                     <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-[#151623] flex items-center justify-center text-[8px] font-bold text-white">SK</div>
                   </div>
                   <div className="px-2 py-1 rounded bg-gray-800 text-[10px] text-gray-300 border border-gray-700">+ Invite users to the call</div>
                   <Maximize2 className="w-3.5 h-3.5 text-gray-400 ml-2" />
                </div>
              </div>

              {/* Mockup Main Body */}
              <div className="flex h-[450px]">
                
                {/* Left Sidebar */}
                <div className="w-12 border-r border-gray-800 bg-[#151623] flex flex-col items-center py-4 space-y-6">
                  <User className="w-4 h-4 text-gray-500" />
                  <Users className="w-4 h-4 text-gray-500" />
                  <Folder className="w-4 h-4 text-gray-500" />
                  <div className="relative">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-md"></div>
                    <Video className="w-4 h-4 text-blue-400" />
                  </div>
                  <Home className="w-4 h-4 text-gray-500" />
                  <div className="mt-auto pt-8">
                     <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] font-bold text-white">ME</div>
                  </div>
                </div>

                {/* Video Area */}
                <div className="flex-1 bg-[#0c0d14] p-4 relative flex flex-col">
                  {/* Main Video Layout */}
                  <div className="flex-1 flex gap-3 h-full">
                    
                    {/* Main Speaker Large View */}
                    <div className="flex-1 bg-gradient-to-br from-orange-400/20 to-pink-500/10 rounded-xl border border-gray-800 relative overflow-hidden flex items-center justify-center">
                      {/* Fake Subject */}
                      <div className="w-32 h-32 rounded-full bg-orange-500/20 border-4 border-orange-500/30 flex items-center justify-center">
                         <User className="w-12 h-12 text-orange-400/50" />
                      </div>
                      
                      {/* Name Tag */}
                      <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-white font-medium">Elisa Isabelle</span>
                      </div>

                      {/* Controls Pill */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                         <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"><Mic className="w-4 h-4 text-white" /></button>
                         <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"><VideoIcon className="w-4 h-4 text-white" /></button>
                         <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"><MonitorUp className="w-4 h-4 text-white" /></button>
                         <button className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600"><PhoneOff className="w-4 h-4 text-white" /></button>
                      </div>
                    </div>

                    {/* Side Participants */}
                    <div className="w-24 flex flex-col gap-3">
                      {[
                        { bg: 'bg-blue-500/20', color: 'text-blue-400', initial: 'AK' },
                        { bg: 'bg-green-500/20', color: 'text-green-400', initial: 'SJ' },
                        { bg: 'bg-purple-500/20', color: 'text-purple-400', initial: 'RJ' },
                        { bg: 'bg-pink-500/20', color: 'text-pink-400', initial: 'MN' }
                      ].map((p, i) => (
                        <div key={i} className={`flex-1 rounded-lg border border-gray-800 flex items-center justify-center relative ${p.bg}`}>
                           <span className={`font-bold ${p.color}`}>{p.initial}</span>
                           <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-black/50 flex items-center justify-center">
                             <MicOff className="w-2 h-2 text-red-400" />
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Transcript / Subtitles Mock */}
                  <div className="h-16 mt-3 rounded-xl bg-[#151623] border border-gray-800 flex items-center px-4 gap-4">
                     <div className="w-8 flex justify-center space-x-0.5">
                       <div className="w-1 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                       <div className="w-1 h-5 bg-blue-500 rounded-full animate-pulse delay-75"></div>
                       <div className="w-1 h-2 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                       <div className="w-1 h-4 bg-blue-500 rounded-full animate-pulse delay-75"></div>
                     </div>
                     <div>
                       <div className="text-[10px] text-gray-500 font-semibold mb-0.5">ELISA ISABELLE</div>
                       <div className="text-xs text-gray-300">
                         I will send you the <span className="font-semibold text-white">life debt update</span> by end of the day.
                       </div>
                     </div>
                  </div>
                </div>

                {/* Right Sidebar (Chat & Stats) */}
                <div className="w-64 border-l border-gray-800 bg-[#151623] flex flex-col">
                  {/* Tabs */}
                  <div className="flex border-b border-gray-800 p-2">
                    <div className="flex-1 py-1.5 bg-gray-800 rounded-md text-[11px] font-medium text-white text-center cursor-default">Messages (3)</div>
                    <div className="flex-1 py-1.5 text-[11px] font-medium text-gray-400 text-center cursor-default">Participants</div>
                  </div>

                  <div className="flex-1 p-4 flex flex-col overflow-hidden">
                    
                    {/* Stats Widget */}
                    <div className="bg-[#1e202e] rounded-lg p-3 border border-gray-700 mb-4">
                      <h4 className="text-[10px] text-gray-300 font-semibold mb-3">Use of Graphics</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-[9px] text-gray-400 mb-1">
                            <span>Illustrations</span>
                            <span>81%</span>
                          </div>
                          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                            <div className="w-[81%] h-full bg-indigo-400 rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[9px] text-gray-400 mb-1">
                            <span>Images</span>
                            <span>71%</span>
                          </div>
                          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                            <div className="w-[71%] h-full bg-pink-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] text-center text-gray-500 mb-3 border-b border-gray-800 pb-2">Messages</div>

                    {/* Chat Messages */}
                    <div className="flex-1 space-y-4 overflow-hidden">
                      <div className="flex gap-2">
                        <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-[8px] font-bold shrink-0 mt-1">C</div>
                        <div>
                          <div className="text-[9px] text-gray-400 mb-0.5">Cody <span className="text-gray-600">10:23am</span></div>
                          <div className="text-[10px] text-gray-300 bg-gray-800 rounded-lg p-2 rounded-tl-none">Hello boys! Think your uplink?</div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[8px] font-bold shrink-0 mt-1">J</div>
                        <div>
                          <div className="text-[9px] text-gray-400 mb-0.5">Jahi <span className="text-gray-600">10:24am</span></div>
                          <div className="text-[10px] text-gray-300 bg-gray-800 rounded-lg p-2 rounded-tl-none">Images are better.</div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Input */}
                    <div className="mt-auto pt-3">
                      <div className="flex items-center gap-2 bg-[#1e202e] border border-gray-700 rounded-lg p-1.5">
                        <button className="p-1 hover:bg-gray-700 rounded text-gray-400"><ImageIcon className="w-3.5 h-3.5" /></button>
                        <input 
                          type="text" 
                          placeholder="Write message here..." 
                          className="flex-1 bg-transparent border-none outline-none text-[10px] text-white placeholder-gray-500"
                          readOnly
                        />
                        <button className="p-1.5 bg-white rounded flex items-center justify-center hover:bg-gray-200">
                          <Send className="w-3 h-3 text-black" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CopilotSection;
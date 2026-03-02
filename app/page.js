"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, Cpu, Shield, Zap, Activity, Database, Lock } from 'lucide-react';

export default function OmegaGodMode() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'SYSTEM INITIALIZED: OMEGA-X CORE IS ONLINE. READY FOR DOMINATION.' }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleExecute = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);

    setTimeout(() => {
      const omegaResponse = { 
        role: 'omega', 
        content: `ANALYSIS COMPLETE: COMMAND [${input.toUpperCase()}] PROCESSED THROUGH QUANTUM LAYER. STATUS: OPTIMIZED.` 
      };
      setMessages(prev => [...prev, omegaResponse]);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-cyan-400 font-mono p-4 flex flex-col relative overflow-hidden">
      
      {/* تأثير الشبكة الخلفية 3D */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90px, #0891b2 1px, transparent 1px)', 
                    backgroundSize: '40px 40px', transform: 'perspective(500px) rotateX(60deg) translateY(-100px)' }}>
      </div>

      {/* الرأس (Header) - تصميم زجاجي */}
      <header className="relative z-10 backdrop-blur-md bg-black/40 border border-cyan-500/30 p-4 rounded-xl mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
                <div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full relative shadow-[0_0_15px_#ff0000]"></div>
            </div>
            <h1 className="text-2xl font-black tracking-[0.2em] text-white italic">OMEGA<span className="text-cyan-500 underline">X</span></h1>
          </div>
          <div className="flex gap-3">
             <Activity className="text-green-500 animate-pulse" size={18} />
             <Lock className="text-cyan-500" size={18} />
          </div>
        </div>
        <div className="mt-2 flex gap-4 text-[9px] uppercase font-bold text-cyan-700">
            <span className="flex items-center gap-1"><Cpu size={10}/> UPTIME: 99.9%</span>
            <span className="flex items-center gap-1"><Database size={10}/> NODE: DC-WASHINGTON</span>
        </div>
      </header>

      {/* منطقة الرسائل المحسنة */}
      <main className="flex-1 overflow-y-auto relative z-10 space-y-6 mb-6 px-2 custom-scrollbar">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: msg.role === 'user' ? 50 : -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`relative max-w-[90%] p-4 rounded-2xl border transition-all ${
                msg.role === 'user' 
                ? 'bg-gradient-to-br from-cyan-900/40 to-black border-cyan-500/50 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                : 'bg-gradient-to-br from-zinc-900/80 to-black border-zinc-700/50 text-cyan-200'
              }`}>
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"></div>
                <div className="text-[8px] uppercase tracking-tighter opacity-50 mb-2 flex items-center gap-2">
                   {msg.role === 'user' ? <Shield size={10}/> : <Zap size={10}/>}
                   {msg.role === 'user' ? 'AUTH_STRATEGIST' : 'OMEGA_AI_CORE'}
                </div>
                <p className="text-sm md:text-base font-medium leading-relaxed">{msg.content}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </main>

      {/* مدخل الأوامر (Command Input) */}
      <footer className="relative z-10">
        <form onSubmit={handleExecute} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-2xl blur opacity-25 group-focus-within:opacity-75 transition duration-500"></div>
          <div className="relative bg-black rounded-xl border border-white/10 p-2 flex items-center">
            <Terminal className="text-cyan-500 ml-2" size={24} />
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ENTER COMMAND TO EXECUTE..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-white px-4 py-3 text-sm placeholder:text-cyan-900 outline-none"
            />
            <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold p-3 rounded-lg transition-transform active:scale-90 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <Send size={20} />
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
}

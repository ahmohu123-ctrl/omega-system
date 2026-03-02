"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Send, Cpu, Shield, Zap, Globe } from 'lucide-react';

export default function OmegaSystem() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'SYSTEM INITIALIZED: OMEGA-X CORE IS ONLINE.' }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleExecute = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);

    // محاكاة استجابة النظام الذكي
    setTimeout(() => {
      const omegaResponse = { 
        role: 'omega', 
        content: `EXECUTION SUCCESSFUL. LOGIC ANALYZED. [COMMAND: ${input.toUpperCase()}] - STATUS: DOMINATION.` 
      };
      setMessages(prev => [...prev, omegaResponse]);
      setIsProcessing(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono p-4 flex flex-col">
      {/* HEADER */}
      <div className="border-b border-cyan-900/50 pb-4 mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_#ff0000]"></div>
          <h1 className="text-xl font-bold tracking-tighter uppercase">OMEGA-X GODMODE</h1>
        </div>
        <div className="flex gap-4 text-[10px] opacity-70">
          <span className="flex items-center gap-1"><Cpu size={12}/> CPU: 14%</span>
          <span className="flex items-center gap-1"><Shield size={12}/> SECURE</span>
        </div>
      </div>

      {/* CHAT VIEWPORT */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded border ${
              msg.role === 'user' 
              ? 'bg-cyan-950/20 border-cyan-500/50 text-white' 
              : 'bg-zinc-900/40 border-zinc-800 text-cyan-300'
            }`}>
              <div className="text-[9px] uppercase tracking-widest opacity-40 mb-1">
                {msg.role === 'user' ? 'STRATEGIST' : 'OMEGA CORE'}
              </div>
              <p className="text-sm leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {isProcessing && <div className="text-[10px] animate-pulse">ANALYZING...</div>}
        <div ref={chatEndRef} />
      </div>

      {/* CONTROL INPUT */}
      <form onSubmit={handleExecute} className="relative mt-auto">
        <div className="relative bg-zinc-950 rounded border border-white/10 flex items-center p-2">
          <Terminal className="ml-2 text-cyan-500" size={18} />
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER COMMAND..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-white px-3 py-2 text-xs"
          />
          <button type="submit" className="bg-cyan-600 text-black p-2 rounded">
            <Send size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Send, Cpu, Shield, Zap, Globe } from 'lucide-react';

// --- OMEGA SYSTEM INTERFACE ---
const OmegaSystem = () => {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'SYSTEM INITIALIZED: OMEGA-X CORE IS ONLINE.' }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const chatEndRef = useRef(null);

  // التمرير التلقائي لأسفل الشات
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

    // محاكاة معالجة النظام (Logic Engine)
    setTimeout(() => {
      const omegaResponse = { 
        role: 'omega', 
        content: `EXECUTION SUCCESSFUL. LOGIC ANALYZED. [COMMAND: ${input.toUpperCase()}]` 
      };
      setMessages(prev => [...prev, omegaResponse]);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono p-4 flex flex-col overflow-hidden">
      {/* --- HEADER: SYSTEM STATUS --- */}
      <div className="border-b border-cyan-900/50 pb-4 mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_#ff0000]"></div>
          <h1 className="text-xl font-bold tracking-tighter">OMEGA-X <span className="text-white">GODMODE</span></h1>
        </div>
        <div className="flex gap-4 text-xs opacity-70">
          <span className="flex items-center gap-1"><Cpu size={12}/> CPU: 14%</span>
          <span className="flex items-center gap-1"><Shield size={12}/> SECURE</span>
        </div>
      </div>

      {/* --- CHAT VIEWPORT --- */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-lg border ${
              msg.role === 'user' 
              ? 'bg-cyan-950/30 border-cyan-500/50 text-white shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
              : msg.role === 'system'
              ? 'bg-zinc-900/50 border-zinc-700 text-zinc-400 text-xs italic'
              : 'bg-black border-red-900/50 text-cyan-300 shadow-[inset_0_0_10px_rgba(255,0,0,0.05)]'
            }`}>
              <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px] uppercase tracking-widest">
                {msg.role === 'user' ? 'STRATEGIST' : 'OMEGA EXECUTOR'}
              </div>
              <p className="text-sm leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="text-xs animate-pulse text-cyan-700 flex items-center gap-2">
            <Zap size={14} className="animate-bounce" /> ANALYZING PARAMETERS...
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* --- CONTROL INPUT --- */}
      <form onSubmit={handleExecute} className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-focus-within:opacity-40 transition duration-1000"></div>
        <div className="relative bg-zinc-950 rounded-xl border border-white/10 flex items-center p-2 shadow-2xl">
          <Terminal className="ml-2 text-cyan-500" size={20} />
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER COMMAND..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-white px-3 py-2 text-sm placeholder:text-cyan-900"
          />
          <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-black p-2 rounded-lg transition-all active:scale-90">
            <Send size={18} />
          </button>
        </div>
      </form>

      {/* --- FOOTER: GLOBAL LAYER --- */}
      <div className="mt-4 flex justify-around text-[10px] uppercase tracking-tighter text-zinc-600">
        <span className="flex items-center gap-1"><Globe size={10}/> GLOBAL MESH ENABLED</span>
        <span>LATENCY: 12ms</span>
        <span>ID: OX_8829_X</span>
      </div>
    </div>
  );
};

export default OmegaSystem;


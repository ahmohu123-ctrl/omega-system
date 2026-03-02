"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, Plus, Menu, Volume2, Share2 } from 'lucide-react';

export default function AhmohuSystem() {
  const [isRotating, setIsRotating] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col p-6 relative overflow-hidden">
      
      {/* الشريط العلوي - Header */}
      <div className="flex justify-between items-center z-10">
        <div className="flex items-center gap-4">
          <Menu className="text-zinc-400" size={24} />
          <h2 className="text-sm font-bold tracking-widest text-zinc-300 uppercase">
            AHMOHU SYSTEM v2.5 INSTANT
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <Volume2 size={20} className="text-zinc-400" />
          <Share2 size={20} className="text-zinc-400" />
        </div>
      </div>

      {/* المحتوى الرئيسي - الـ Vinyl Record والاسم */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 space-y-8">
        
        <div className="relative flex items-center justify-center">
          {/* نص الاسم العريض خلف الأسطوانة */}
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white opacity-90 italic select-none">
            AHMOHU
          </h1>

          {/* الأسطوانة الدوارة - Vinyl Record */}
          <motion.div 
            className="absolute"
            animate={{ rotate: isRotating ? 360 : 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-black border-4 border-zinc-800 shadow-[0_0_50px_rgba(6,182,212,0.4)] flex items-center justify-center overflow-hidden">
              {/* تفاصيل الأسطوانة */}
              <div className="w-full h-full rounded-full border-[10px] border-zinc-900 flex items-center justify-center relative">
                <div className="w-12 h-12 bg-gradient-to-tr from-cyan-400 via-purple-500 to-red-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                {/* خطوط لمعان الأسطوانة */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-30"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* حالة التشغيل */}
        <div className="text-center space-y-2">
          <p className="text-cyan-400 font-bold tracking-widest text-xs md:text-sm uppercase">
            Now Playing: Tactical Deployment
          </p>
          <p className="text-zinc-500 text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">
            AHMOHU SYSTEM - AI CORE ONLINE
          </p>
        </div>

        {/* محلل الصوت - Audio Visualizer Bars */}
        <div className="flex items-end gap-1 h-12">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 md:w-2 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              animate={{ height: [10, 40, 20, 45, 15][i % 5] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
            />
          ))}
        </div>
      </div>

      {/* شريط الإدخال السفلي - Input Bar */}
      <div className="mt-auto z-10">
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/5 rounded-full p-2 flex items-center shadow-2xl">
          <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400">
            <Mic size={22} />
          </div>
          <input 
            type="text" 
            placeholder="Ask away. Usage Scenario..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-300 px-4 py-2 text-sm placeholder:text-zinc-600 outline-none"
          />
          <div className="p-2 text-zinc-500">
            <Plus size={24} />
          </div>
        </div>
      </div>

      {/* خلفية بصرية - تأثير إضاءة خافتة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full z-0"></div>
    </div>
  );
}

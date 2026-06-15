import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 text-center z-10 flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm md:text-base font-medium mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(20,184,166,0.2)]"
      >
        <Cpu className="w-5 h-5" /> Bitirme Projesi Portfolyo
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-slate-400 mb-8 leading-tight"
      >
        Yapay Zeka Destekli <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Staj ve İME Yönetim Sistemi</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-2xl mx-auto text-slate-300 text-lg md:text-2xl mb-12 leading-relaxed font-light"
      >
        Üniversite, öğrenci ve firma paydaşlarını tek bir ekosistemde birleştiren, RAG mimarili sanal asistan entegreli kurumsal süreç otomasyonu.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex gap-4 flex-col sm:flex-row"
      >
        <a href="#gallery" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(20,184,166,0.4)]">
          Görselleri İncele
          <ArrowRight className="w-5 h-5" />
        </a>
        <a href="#features" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700 text-white font-medium transition-all hover:scale-105 active:scale-95 backdrop-blur-md">
          Özellikleri Keşfet
        </a>
      </motion.div>
    </header>
  );
}

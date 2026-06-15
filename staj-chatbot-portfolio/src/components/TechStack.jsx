import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: ".NET Core", role: "Backend Mimari" },
  { name: "CQRS & MediatR", role: "Tasarım Kalıpları" },
  { name: "Llama 3.1 / Gemini LLM Model", role: "Yapay Zeka Modeli" },
  { name: "MinIO", role: "S3 Nesne Depolama" },
  { name: "JWT", role: "Authorization ve Authenticate Yönetimi" },
  { name: "React & Vite", role: "Frontend" },
  { name: "Tailwind CSS", role: "Stil & Tasarım" },
  { name: "Redis", role: "Cache(Önbellekleme)" },
  { name: "MSSQL", role: "Veritabanı" },
  { name: "Qdrant", role: "Vektör Veritabanı" },
  { name: "SMTP Server", role: "Mail İle Bildirim" },
];

export default function TechStack() {
  return (
    <section className="relative w-full border-y border-slate-800/50 bg-slate-900/30 py-16 backdrop-blur-sm z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-10">
          Kullanılan Temel Teknolojiler
        </h3>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-700/50 hover:border-teal-500/30 transition-colors"
            >
              <span className="text-lg md:text-xl font-bold text-slate-200 mb-1">{tech.name}</span>
              <span className="text-xs text-teal-400">{tech.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

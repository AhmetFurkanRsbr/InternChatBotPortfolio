import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import TechStack from './components/TechStack';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-950 overflow-x-hidden">

      {/* Arka Plan Efekti */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950 pointer-events-none" />

      {/* İsteğe bağlı: Sol alt köşede ekstra bir parıltı */}
      <div className="fixed -bottom-40 -left-40 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />

      <Hero />
      <TechStack />
      <Features />
      <Gallery />

      {/* Footer */}
      <footer className="border-t border-slate-900/80 bg-slate-950/80 py-10 text-center relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-slate-500 text-sm mb-2">
            © 2026 Tekirdağ Namık Kemal Üniversitesi - Bilgisayar Mühendisliği Bölümü - Hazırlayan: Ahmet Furkan REŞBER - Danışman: Prof. Dr. Erdinç UZUN
          </p>
          <p className="text-slate-600 text-xs">
            Bitirme Projesi kapsamında geliştirilmiştir. Bu site projenin görselleri ve teknik detaylarını açıklamayı amaçlamaktadır.
          </p>
        </div>
      </footer>
    </div>
  );
}
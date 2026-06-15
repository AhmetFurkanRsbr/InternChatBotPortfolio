import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Shield, Layers, Zap, Clock, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "RAG Destekli Chatbot",
    description: "Llama 3 tabanlı asistan, üniversite staj yönetmeliklerini anlık analiz ederek öğrencilere %100 kurumsal doğrulukla rehberlik sunar.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "hover:border-teal-500/50"
  },
  {
    icon: Layers,
    title: "Yüksek Performanslı Altyapı",
    description: ".NET Core backend üzerinde CQRS ve MediatR kalıplarıyla, staj dönemlerindeki yoğun trafik ve toplu onay süreçleri darboğazsız yönetilir.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "hover:border-indigo-500/50"
  },
  {
    icon: Shield,
    title: "Veri İzolasyonu & Güvenlik",
    description: "Hassas öğrenci ve firma evrakları MinIO nesne depolama altyapısında KVKK/GDPR standartlarına uygun olarak izole ve şifreli saklanır.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/50"
  },
  {
    icon: Zap,
    title: "Anlık Bildirimler",
    description: "Staj onayı, evrak reddi veya eksik belge durumlarında öğrencilere ve akademisyenlere anlık sistem ve e-posta bildirimleri iletilir.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "hover:border-amber-500/50"
  },
  {
    icon: Clock,
    title: "Zaman Tasarrufu",
    description: "Manuel evrak kontrol sürelerini %80 oranında azaltan OCR ve yapay zeka destekli ön kontrol mekanizmaları.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "hover:border-rose-500/50"
  },
  {
    icon: Smartphone,
    title: "Mobil Uyumluluk",
    description: "Tüm paydaşlar için optimize edilmiş, telefon ve tabletlerden kolayca erişilebilen tam responsive (duyarlı) web arayüzü.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "hover:border-sky-500/50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Features() {
  return (
    <section id="features" className="relative max-w-6xl mx-auto px-6 py-24 z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Sistemin Öne Çıkan Özellikleri
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Hem öğrencilerin hem de akademik personelin iş yükünü azaltarak süreç yönetimini iyileştirmek, hata oranlarını düşürmek için tasarlandı.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md transition-all duration-300 ${feature.border} group`}
          >
            <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.color} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
              <feature.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

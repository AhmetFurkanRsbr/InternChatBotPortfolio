import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

import ogrProfil from '../assets/Öğrenci Profil.png';
import stajDurumu from '../assets/Staj Durumu.png';
import firmaIlan from '../assets/Firma Staj İlanı Başvurusu.png';
import ilanDegerlendirme from '../assets/İlana Gelen Başvuruyu Değerlendirme.png';
import firmaDegerlendirmesi from '../assets/Firma Değerlendirmesi.png';
import stajyerDegerlendirmesi from '../assets/Stajyer Değerlendirmesi.png';
import sss from '../assets/Sıkça Sorulan Sorular.png';
import sifreUnuttum from '../assets/Şifremi Unutum.png';

// Yeni İsimlendirilmiş Görseller
import dashboardOgrenci from '../assets/dashboardOgrenci.png';
import evrakYukleme from '../assets/evrak yükleme.png';
import stajBasvuruTanimlama from '../assets/staj başvuru tanımlama.png';
import stajBasvuruTanimlama2 from '../assets/staj başvuru tanımlama (2).png';

import sssYeni from '../assets/SSS.png';
import yonetmelik from '../assets/yönetmelik.png';
import chatbotSoru from '../assets/chatbotSorusu.png';
import chatbotSoru2 from '../assets/chatbotSorusu2.png';
import chatbotSoru3 from '../assets/chatbotsorusu3.png';
import chatbotSoru4 from '../assets/chatbotSorusu4.png';
import chatbotSoru5 from '../assets/CHATBOTsORU5.png';
import chatbotSoru6 from '../assets/CHATBOTsORU6.png';
import chatbotSoruAkademik from '../assets/chatbotSorusu-AkademikOnay.png';

import girisYap from '../assets/Giriş Yap.png';
import kayitOl from '../assets/Kayıt Ol.png';
import kayitOl2 from '../assets/Kayıt Ol (2).png';
import kayitOl3 from '../assets/Kayıt Ol (3).png';

// Diğer tüm "Ekran görüntüsü..." dosyalarını Vite ile otomatik dahil etme
const ekranGoruntuleriObj = import.meta.glob('../assets/Ekran görüntüsü*.png', { eager: true, import: 'default' });
const ekranGoruntuleri = Object.values(ekranGoruntuleriObj);

const galleryFeatures = [
  {
    title: "Öğrenci Staj Paneli",
    description: "Öğrencilerin profillerini görüntülediği, staj başvuru süreçlerini anlık takip ettiği ve evrak yüklediği ekranlar.",
    images: [
      dashboardOgrenci,
      ogrProfil,
      stajDurumu,
      stajBasvuruTanimlama,
      stajBasvuruTanimlama2,
      evrakYukleme
    ]
  },
  {
    title: "Firma Yönetim Modülü",
    description: "Firmaların staj ilanları oluşturduğu ve gelen başvuruları kapsamlı şekilde değerlendirdiği arayüz.",
    images: [
      firmaIlan,
      ilanDegerlendirme,
      firmaDegerlendirmesi,
      stajyerDegerlendirmesi
    ]
  },
  {
    title: "RAG Destekli Chatbot ve SSS",
    description: "Staj süreçleri hakkında sıkça sorulan soruların ve RAG destekli yapay zeka asistanının verdiği detaylı, yönetmeliklere uygun cevapların sunulduğu bölüm.",
    images: [
      sss,
      sssYeni,
      yonetmelik,
      chatbotSoru,
      chatbotSoru2,
      chatbotSoru3,
      chatbotSoru4,
      chatbotSoru5,
      chatbotSoru6,
      chatbotSoruAkademik
    ]
  },
  {
    title: "Kimlik Doğrulama & Kurtarma",
    description: "Kullanıcıların sisteme güvenli giriş yaptığı, kayıt olduğu ve şifre kurtarma işlemlerini gerçekleştirdiği sayfalar.",
    images: [
      girisYap,
      kayitOl,
      kayitOl2,
      kayitOl3,
      sifreUnuttum
    ]
  },
  // Eğer klasörde "Ekran görüntüsü..." ile başlayan dosyalar varsa yeni bir özellik olarak ekle
  ...(ekranGoruntuleri.length > 0 ? [{
    title: "Sistemden Diğer Ekranlar",
    description: "Projenin çeşitli aşamalarından, öğrenci, firma ve staj komisyonu etkileşimlerinden alınmış genel ekran görüntüleri.",
    images: ekranGoruntuleri
  }] : [])
];

export default function Gallery() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (feature) => {
    setSelectedFeature(feature);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Arka plan kaymasını engelle
  };

  const closeModal = () => {
    setSelectedFeature(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedFeature) {
      setCurrentImageIndex((prev) => 
        prev === selectedFeature.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedFeature) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedFeature.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="gallery" className="relative max-w-7xl mx-auto px-6 py-24 z-10">
      <div className="border border-slate-800/50 rounded-[2.5rem] bg-slate-900/20 p-8 md:p-12 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Arayüz ve Demo Görselleri
            </h2>
            <p className="text-slate-400 mt-2">Özelliklere tıklayarak ilgili ekran görüntülerini inceleyebilirsiniz.</p>
          </div>
          <div className="px-4 py-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 text-sm font-medium">
            Demo Sürüm v1.0
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => openModal(feature)}
              className="group relative rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-800/50 cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={feature.images[0]} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Çoklu görsel ikonu */}
                {feature.images.length > 1 && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-700 flex items-center gap-1.5 text-xs font-medium text-white shadow-lg">
                    <ImageIcon className="w-4 h-4" />
                    <span>{feature.images.length} Görsel</span>
                  </div>
                )}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup (Lightbox) */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-xl"
          >
            {/* Kapat Butonu */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 md:top-8 md:right-8 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 text-white transition-colors z-50 border border-slate-700"
            >
              <X className="w-6 h-6" />
            </button>

            {/* İçerik Konteyneri */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Resim Alanı */}
              <div className="relative aspect-[16/10] md:aspect-video bg-black flex items-center justify-center group/modal">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    src={selectedFeature.images[currentImageIndex]}
                    alt={`${selectedFeature.title} - Görsel ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </AnimatePresence>

                {/* Yönlendirme Butonları (Eğer 1'den fazla resim varsa) */}
                {selectedFeature.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-teal-500 text-white backdrop-blur-md border border-white/20 transition-all opacity-100 md:opacity-0 md:group-hover/modal:opacity-100 hover:scale-110 shadow-lg active:scale-95"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-teal-500 text-white backdrop-blur-md border border-white/20 transition-all opacity-100 md:opacity-0 md:group-hover/modal:opacity-100 hover:scale-110 shadow-lg active:scale-95"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Resim Sayacı */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-white border border-white/10">
                      {currentImageIndex + 1} / {selectedFeature.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Alt Bilgi Alanı */}
              <div className="p-6 md:p-8 bg-slate-900 border-t border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedFeature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{selectedFeature.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

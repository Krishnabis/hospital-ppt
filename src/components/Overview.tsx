"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Building2, Bed, MapPin, Calendar, Activity, X } from "lucide-react";
import { useState } from "react";

export default function Overview() {
  const [isBedModalOpen, setIsBedModalOpen] = useState(false);

  const cards = [
    { title: "Location", value: "Srinagar, Pauri Garhwal", icon: MapPin },
    { title: "Type", value: "Govt. Medical College & Teaching Hospital", icon: Building2 },
    { title: "Capacity", value: "567 Operational (700 Reg.)", icon: Bed, interactive: true },
    { title: "Established", value: "June 25, 1984", icon: Calendar },
    { title: "Daily OPD", value: "600+", icon: Activity },
  ];

  const coreValues = [
    { en: "Equity and Inclusiveness", hi: "समानता और समावेशिता", descEn: "Healthcare for all, without discrimination.", descHi: "बिना किसी भेदभाव के सभी के लिए स्वास्थ्य सेवा।" },
    { en: "Compassion", hi: "सहानुभूति", descEn: "Treating patients with empathy, dignity, and care.", descHi: "रोगियों के साथ सहानुभूति, सम्मान और देखभाल के साथ व्यवहार।" },
    { en: "Quality and Excellence", hi: "गुणवत्ता और उत्कृष्टता", descEn: "Adhering to the highest medical and ethical standards.", descHi: "सर्वोच्च चिकित्सा और नैतिक मानकों का पालन।" },
    { en: "Affordability", hi: "सुलभता", descEn: "Providing world-class care at minimal or no cost.", descHi: "न्यूनतम या बिना लागत के विश्वस्तरीय देखभाल प्रदान करना।" },
    { en: "Innovation and Learning", hi: "नवाचार और शिक्षा", descEn: "Embracing new technology and continuous education.", descHi: "नई तकनीकों को अपनाना और सतत शिक्षा को बढ़ावा देना।" },
    { en: "Accountability", hi: "जवाबदेही", descEn: "Being responsible and transparent in service delivery.", descHi: "सेवा प्रदान करने में जिम्मेदारी और पारदर्शिता बनाए रखना।" },
  ];

  const bedDistribution = [
    { dept: "Emergency", beds: 22 },
    { dept: "Dialysis", beds: 11 },
    { dept: "Radiotherapy", beds: 6 },
    { dept: "NICU", beds: 20 },
    { dept: "MICU", beds: 20 },
    { dept: "AICU", beds: 12 },
    { dept: "RICU", beds: 5 },
    { dept: "PICU", beds: 8 },
    { dept: "Gynae Ward", beds: 67 },
    { dept: "Surgery Ward 1", beds: 30 },
    { dept: "Surgery Ward 2", beds: 34 },
    { dept: "Surgery Ward 3", beds: 19 },
    { dept: "Pediatrics Ward", beds: 52 },
    { dept: "Medicine Ward 1", beds: 34 },
    { dept: "Medicine Ward 2", beds: 32 },
    { dept: "ENT Ward", beds: 33 },
    { dept: "Opthalmology Ward", beds: 30 },
    { dept: "Orthopedics Ward", beds: 55 },
    { dept: "Neuro Ward", beds: 15 },
    { dept: "Derma Ward", beds: 12 },
    { dept: "Psychiatry Ward", beds: 12 },
    { dept: "Palliative Ward", beds: 6 },
    { dept: "TB Chest Ward", beds: 24 },
    { dept: "Private Ward", beds: 8 }
  ];

  return (
    <section id="overview" className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 bg-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Hospital Overview
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto shadow-[0_0_15px_rgba(56,189,248,0.5)] mb-6" />
          <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 tracking-tighter leading-tight max-w-4xl mx-auto">
            Hemwati Nandan Bahuguna <br className="hidden md:block" /> Base Hospital
          </h3>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-16">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(56,189,248,0.15)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
              onClick={() => card.interactive && setIsBedModalOpen(true)}
              className={`glass-neon p-6 rounded-3xl flex items-center gap-5 ${idx === 4 ? "lg:col-span-1" : ""} ${card.interactive ? "cursor-pointer ring-2 ring-sky-200/50 hover:ring-sky-400" : ""}`}
            >
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-sky-500 shadow-inner flex-shrink-0">
                <card.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400 tracking-wider uppercase mb-1">{card.title}</p>
                <h3 className={`text-xl font-bold text-slate-800 ${card.interactive ? 'text-sky-600' : ''}`}>{card.value}</h3>
                {card.interactive && <p className="text-xs text-sky-500 mt-1 font-semibold">Click to view distribution</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-white/10 pointer-events-none" />
            <div className="relative z-10">
              <h4 className="text-3xl font-bold text-indigo-600 mb-6 flex items-center gap-3 border-b border-indigo-100 pb-4">
                <div className="w-2 h-8 bg-indigo-500 rounded-full neon-glow" /> Mission | मिशन
              </h4>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                Our mission is to provide high-quality, affordable, and compassionate healthcare to all, especially underserved populations in hilly and remote areas. We strive to ensure patient safety, dignity, and satisfaction through continuous improvement, modern infrastructure, and trained personnel. We are committed to promoting community health awareness, preventive care, and outreach programs, while maintaining transparency, integrity, and accountability in all healthcare services.
              </p>
              <p className="text-slate-600 leading-relaxed text-[1.05rem] font-medium border-t border-indigo-100 pt-6">
                हमारा उद्देश्य उच्च गुणवत्ता, सस्ती और सहानुभूतिपूर्ण स्वास्थ्य सेवाएं सभी तक पहुंचाना है, विशेष रूप से दुर्गम और पहाड़ी क्षेत्रों की उपेक्षित जनसंख्या तक। हम निरंतर सुधार, आधुनिक ढांचा और प्रशिक्षित कर्मियों के माध्यम से रोगियों की सुरक्षा, गरिमा और संतुष्टि सुनिश्चित करने का प्रयास करते हैं। हम सामुदायिक स्वास्थ्य जागरूकता, निवारक देखभाल और जन-जागरूकता कार्यक्रमों को बढ़ावा देने के लिए प्रतिबद्ध हैं तथा सभी स्वास्थ्य सेवाओं में पारदर्शिता, ईमानदारी और जवाबदेही बनाए रखते हैं।
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-10 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-white/10 pointer-events-none" />
            <div className="relative z-10">
              <h4 className="text-3xl font-bold text-sky-600 mb-6 flex items-center gap-3 border-b border-sky-100 pb-4">
                <div className="w-2 h-8 bg-sky-500 rounded-full neon-glow" /> Vision | विजन
              </h4>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                To be a center of excellence in healthcare delivery, accessible to every individual — rich or poor, regardless of caste, creed, or religion — even in the most remote and challenging terrains, by offering world-class services at minimal cost.
              </p>
              <p className="text-slate-600 leading-relaxed text-[1.05rem] font-medium border-t border-sky-100 pt-6">
                हर व्यक्ति तक — चाहे वह अमीर हो या गरीब, किसी भी जाति, धर्म या पृष्ठभूमि से हो — विश्वस्तरीय स्वास्थ्य सेवाएं न्यूनतम लागत पर पहुंचाकर, दुर्गम पहाड़ी क्षेत्रों में भी उत्कृष्ट स्वास्थ्य सेवा केंद्र बनना।
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-6xl glass-neon p-12 rounded-[3rem] bg-white relative mt-6"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-3">Core Values | मूल मूल्य</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {coreValues.map((val, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  {i + 1}
                </div>
                <div>
                  <h5 className="font-bold text-lg text-slate-800 mb-1">{val.en}</h5>
                  <p className="text-slate-600 text-sm mb-2">{val.descEn}</p>
                  <div className="border-t border-slate-100 pt-2 mt-1">
                    <h5 className="font-bold text-[1rem] text-slate-700">{val.hi}</h5>
                    <p className="text-slate-500 text-sm">{val.descHi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bed Distribution Modal */}
      <AnimatePresence>
        {isBedModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsBedModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsBedModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center">
                  <Bed size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Bed Distribution</h3>
                  <p className="text-slate-500 font-medium">Total Operational: 567</p>
                </div>
              </div>

              <div className="space-y-4 max-h-[50vh] overflow-y-auto custom-scrollbar pr-2">
                {bedDistribution.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100/50">
                    <span className="font-semibold text-slate-700">{item.dept}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.beds / 70) * 100}%` }}
                          transition={{ duration: 1, delay: idx * 0.05 }}
                          className="h-full bg-gradient-to-r from-sky-400 to-indigo-500"
                        />
                      </div>
                      <span className="font-bold text-slate-800 w-8 text-right">{item.beds}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center px-2">
                <span className="text-sm font-semibold text-slate-500 uppercase">Registered Beds</span>
                <span className="text-lg font-bold text-slate-400 line-through decoration-2">700</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ClipboardList } from "lucide-react";

const rights = [
  { en: "Receive appropriate care based on needs and hospital capabilities.", hi: "जरूरतों और अस्पताल की सुविधाओं के अनुसार उचित इलाज पाने का अधिकार।" },
  { en: "Equal treatment with dignity — regardless of race, gender, religion, age, or background.", hi: "हर व्यक्ति को समान और सम्मानजनक इलाज मिलेगा — धर्म, लिंग, उम्र या जाति से परे।" },
  { en: "Know the name of the doctor responsible for coordinating your treatment.", hi: "इलाज के दौरान जिम्मेदार डॉक्टर का नाम जानने का अधिकार।" },
  { en: "Be informed about illness, treatment plan, and expected outcomes.", hi: "बीमारी, इलाज की योजना और संभावित परिणामों की जानकारी का अधिकार।" },
  { en: "Receive information about medications, side effects, vaccinations, nutrition, and prevention.", hi: "दवाओं, साइड इफेक्ट्स, टीकाकरण, पोषण और रोकथाम की जानकारी दी जाएगी।" },
  { en: "Give or withhold consent before blood transfusion, surgery, or medical research.", hi: "रक्त चढ़ाने, सर्जरी या शोध से पहले सहमति देने या मना करने का अधिकार।" },
  { en: "Be protected from physical or mental abuse, negligence, or mistreatment.", hi: "शारीरिक या मानसिक शोषण और लापरवाही से सुरक्षा का अधिकार।" },
  { en: "All medical and personal information kept strictly confidential.", hi: "मरीज की चिकित्सीय व व्यक्तिगत जानकारी पूरी तरह गोपनीय रखी जाएगी।" },
  { en: "Receive care with dignity and respect at all times.", hi: "हर समय सम्मान और गरिमा के साथ इलाज पाने का अधिकार।" },
  { en: "Request access to medical reports and health records.", hi: "मेडिकल रिपोर्ट और स्वास्थ्य संबंधी जानकारी मांगने का अधिकार।" },
  { en: "Receive regular updates on treatment progress.", hi: "इलाज के दौरान नियमित रूप से जानकारी दी जाएगी।" },
  { en: "Refuse a treatment or procedure and seek a second opinion.", hi: "इलाज से मना करने या दूसरी राय लेने का अधिकार।" },
  { en: "Be informed about reasons and options when referred or transferred.", hi: "दूसरे अस्पताल में भेजे जाने पर कारण और विकल्प बताए जाएंगे।" },
  { en: "Consent must be obtained before inclusion in any medical research.", hi: "किसी भी शोध में शामिल करने से पहले सहमति ली जाएगी।" },
  { en: "Cultural, spiritual, and personal beliefs must be respected.", hi: "धार्मिक, मानसिक और सांस्कृतिक मान्यताओं का सम्मान किया जाएगा।" },
  { en: "Be clearly informed in advance about the expected cost of treatment.", hi: "उपचार की अनुमानित लागत के बारे में पहले से जानकारी प्राप्त करने का अधिकार।" },
];

const responsibilities = [
  { en: "Provide accurate details — name, address, phone, date of birth, insurance, and other necessary information.", hi: "सही नाम, पता, फोन, जन्म-तिथि, बीमा और अन्य जरूरी जानकारी देना।" },
  { en: "Share complete and truthful medical history, medications, test reports, and allergies.", hi: "बीमारी का इतिहास, दवाइयाँ, टेस्ट रिपोर्ट और एलर्जी जैसी बातें नहीं छिपाना।" },
  { en: "Follow the treatment plan and instructions given by doctors and medical staff.", hi: "डॉक्टर और मेडिकल स्टाफ द्वारा बनाई गई इलाज योजना का पालन करना।" },
  { en: "Ask questions and seek clarification if anything is not understood.", hi: "किसी बात को समझ न आने पर खुलकर पूछना।" },
  { en: "Treat hospital staff and other patients with respect and courtesy.", hi: "अस्पताल स्टाफ और अन्य मरीजों के साथ सम्मानजनक व्यवहार करना।" },
  { en: "Respect the hospital's property and the belongings of others.", hi: "अस्पताल की संपत्ति और दूसरों के सामान का ध्यान रखना।" },
  { en: "Do not bring alcohol, drugs, or weapons into the hospital.", hi: "अस्पताल में शराब, नशा या हथियार लाना सख्त मना है।" },
  { en: "Follow the hospital's no-smoking policy strictly within the premises.", hi: "अस्पताल परिसर में धूम्रपान निषेध है — नियम का पालन करना।" },
  { en: "Bring only essential belongings; avoid unnecessary items during your stay.", hi: "केवल जरूरी चीजें ही रखें — बेवजह सामान न लाएं।" },
  { en: "Settle bills on time according to the hospital's billing and payment policy.", hi: "अस्पताल द्वारा बताई गई बिलिंग और भुगतान नीति का पालन करना।" },
  { en: "Patients who refuse treatment must accept the risks and consequences of that decision.", hi: "यदि कोई मरीज इलाज से मना करता है, तो उसके परिणामों की जिम्मेदारी उसी की होगी।" },
];

function PointCard({ en, hi, index, color }: { en: string; hi: string; index: number; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="flex gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-black text-white mt-0.5 ${color}`}>
        {index + 1}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-slate-800 font-semibold text-sm leading-snug">{en}</p>
        <p className="text-slate-400 text-xs leading-snug" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>{hi}</p>
      </div>
    </motion.div>
  );
}

export default function PatientRights() {
  return (
    <section id="patient" className="relative w-full py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-2">
            Patient Rights & Responsibilities
          </h2>
          <p className="text-slate-400 font-semibold text-base mb-4" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            रोगियों के अधिकार और जिम्मेदारियां
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto" />
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* RIGHTS */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-sky-600 text-white shadow-lg"
            >
              <ShieldCheck size={24} className="text-sky-200" />
              <div>
                <h3 className="font-black text-lg tracking-wide">Your Rights</h3>
                <p className="text-sky-200 text-xs font-semibold" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>रोगियों के अधिकार</p>
              </div>
              <span className="ml-auto text-xs bg-sky-500 px-3 py-1 rounded-full font-bold">{rights.length} rights</span>
            </motion.div>

            <div className="flex flex-col gap-3">
              {rights.map((r, i) => (
                <PointCard key={i} en={r.en} hi={r.hi} index={i} color="bg-sky-500" />
              ))}
            </div>
          </div>

          {/* RESPONSIBILITIES */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-indigo-600 text-white shadow-lg"
            >
              <ClipboardList size={24} className="text-indigo-200" />
              <div>
                <h3 className="font-black text-lg tracking-wide">Your Responsibilities</h3>
                <p className="text-indigo-200 text-xs font-semibold" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>रोगियों की जिम्मेदारियां</p>
              </div>
              <span className="ml-auto text-xs bg-indigo-500 px-3 py-1 rounded-full font-bold">{responsibilities.length} duties</span>
            </motion.div>

            <div className="flex flex-col gap-3">
              {responsibilities.map((r, i) => (
                <PointCard key={i} en={r.en} hi={r.hi} index={i} color="bg-indigo-500" />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

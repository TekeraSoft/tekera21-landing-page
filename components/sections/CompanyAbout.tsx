"use client";

import { motion } from "framer-motion";

export default function CompanyAboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-teal-900 text-white px-6 py-16 sm:py-24"
    >
      {/* Arka plan şekilleri */}
      <div className="absolute w-[600px] h-[600px] bg-teal-700 opacity-20 rounded-full top-[-150px] left-[-150px] blur-xl"></div>
      <div className="absolute w-[400px] h-[400px] bg-teal-400 opacity-10 rounded-full bottom-10 right-[-100px] blur-2xl"></div>

      {/* Başlangıç Bölümü */}
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
          Kimiz ve Neden Farklıyız?
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Antalya merkezli firmamız, dijital dünyada girişimcilere güçlü ve
          sürdürülebilir çözümler sunmayı hedefliyor. Geliştirdiğimiz projeler,
          kullanıcı dostu tasarım ve ileri teknoloji ile rakiplerinden
          ayrılıyor.
        </p>
      </motion.section>

      {/* Proje Bölümü */}
      <motion.section
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-5 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-teal-200 mt-5">
          Projemiz: Dijital Ticaretin Geleceği
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Yeni nesil e-ticaret platformumuz, satıcılar ve alıcılar arasında
          güçlü bir köprü kurarak, dijital ticaretin geleceğini şekillendiriyor.
          Her adımda verimlilik, güvenlik ve hız ön planda tutularak
          tasarlanmıştır. Yalnızca kullanıcılar için değil, sektördeki tüm
          paydaşlar için uzun vadeli bir çözüm sunmayı hedefliyoruz.
        </p>
      </motion.section>

      {/* Yenilikçi Teknolojiler Bölümü */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 max-w-4xl mx-auto bg-teal-800/60 p-8 rounded-xl shadow-lg mt-5"
      >
        <h3 className="text-xl md:text-3xl font-medium text-teal-100 mb-4">
          Yenilikçi Teknolojiler ve Özellikler
        </h3>
        <ul className="list-disc ml-6 space-y-4 text-base md:text-xl">
          <li>Mobil uyumluluk ve hızlı erişim</li>
          <li>Gelişmiş güvenlik önlemleri</li>
          <li>Kapsamlı yönetim paneli</li>
          <li>Modern ödeme sistemleri ve entegre altyapı</li>
        </ul>
      </motion.section>
    </motion.div>
  );
}

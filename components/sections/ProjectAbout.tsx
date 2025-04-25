"use client";

import { motion } from "framer-motion";

export default function ProjectAbout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-6 py-12 sm:py-16 text-gray-100"
    >
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6 sm:space-y-8"
      >
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-teal-400">
          Vizyoner Bir Dijital Dönüşüm
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300">
          Şirketimiz tarafından geliştirilen bu özel platform, sadece bir
          e-ticaret sitesi değil, aynı zamanda dijital ticaretin geleceğine yön
          verecek yeni bir ekosistemdir. Girişimciler, satıcılar ve kullanıcılar
          için uçtan uca çözümler sunmayı hedefleyen bu proje, pazaryeri
          alanında oyunun kurallarını yeniden yazmak üzere tasarlandı.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6 sm:space-y-8 mt-12 sm:mt-16"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-teal-300">
          Fark Yaratan Yaklaşım
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-gray-400">
          Bu platform, kullanıcı deneyimi, güvenlik ve esneklik açısından en üst
          seviyede hizmet verecek şekilde kurgulandı. Amacımız, dijital
          alışveriş deneyimini sadece kolaylaştırmak değil, aynı zamanda yeniden
          tanımlamak. Tüm paydaşların kazandığı, sürdürülebilir bir ticaret
          ortamı inşa ediyoruz.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-teal-900/10 p-6 sm:p-8 rounded-xl mt-16 sm:mt-20 border border-teal-800"
      >
        <h3 className="text-xl sm:text-2xl font-medium text-teal-400 mb-4">
          Neden Bu Proje?
        </h3>
        <p className="text-sm sm:text-base text-gray-300">
          Çünkü artık kullanıcılar sadece ürün değil, deneyim satın almak
          istiyor. Satıcılar ise dijitalleşmenin getirdiği tüm avantajlara tek
          noktadan ulaşmak istiyor. Bu proje; yenilik, güven, kolaylık ve hızın
          tek bir platformda buluştuğu yepyeni bir dünya sunuyor.
        </p>
      </motion.section>
    </motion.div>
  );
}

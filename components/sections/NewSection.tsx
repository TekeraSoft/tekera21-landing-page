"use client";

import { motion } from "framer-motion";

function NewSection() {
  return (
    <div className="w-full bg-black h-screen flex justify-center items-center relative overflow-hidden ">
      {/* Arka plan daireleri */}
      <motion.div
        className="absolute w-[350px] h-[350px] bg-teal-600 opacity-20 rounded-full top-10 left-[-50px] blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute w-50 h-50 bg-teal-400 opacity-10 rounded-full bottom-10 right-[-100px] blur-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8 }}
      />

      {/* İçerik */}
      <div className="mx-5 md:mx-auto container">
        <div className="w-full flex flex-col justify-center items-center text-center">
          <motion.h2
            className="text-3xl md:text-4xl text-teal-500 font-extrabold mb-6 section-title "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Dijital Dünyaya Hoş Geldiniz!
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 section-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            T21 ile alışverişin geleceğine adım atın. Yenilikçi çözümlerle
            dijital dünyada fark yaratmaya hazır olun.
          </motion.p>

          <motion.p
            className="text-xs md:text-base text-gray-200 mb-8 mt-4 section-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Alışverişi daha hızlı, güvenli ve kullanıcı dostu bir deneyimle
            şekillendiriyoruz. Satıcılar için gelişmiş yönetim araçları ve
            alıcılar için sorunsuz bir alışveriş süreci.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default NewSection;

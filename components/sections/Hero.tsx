"use client";

import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative  w-full overflow-hidden bg-black text-white ">
      {/* Arka plan şekilleri */}
      <div className="absolute w-[600px] h-[600px] bg-teal-600 opacity-20 rounded-full top-[-150px] left-[-150px] blur-3xl"></div>
      <div className="absolute w-[400px] h-[400px] bg-teal-400 opacity-10 rounded-full bottom-10 right-[-100px] blur-2xl"></div>

      <div className=" h-[90vh]  md:h-screen flex flex-col justify-center items-center text-center px-6 space-y-12 ">
        <motion.p
          className="text-sm md:text-base text-teal-500 tracking-widest uppercase font-semibold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Yenilik Başlıyor
        </motion.p>

        <motion.h1
          className="text-5xl md:text-6xl font-poppins mb-6 text-teal-400 drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          T21 Yakında Sizinle!
        </motion.h1>

        <motion.p
          className="text-base md:text-lg font-raleway max-w-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          Yepyeni bir dijital pazar yeri doğuyor. Alışverişin geleceği burada!
        </motion.p>
      </div>
    </div>
  );
}

export default Hero;

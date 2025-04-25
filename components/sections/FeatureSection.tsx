"use client";

import { motion } from "framer-motion";
import { FaGem, FaRocket, FaLightbulb } from "react-icons/fa";

function FeatureSection() {
  const features = [
    {
      icon: <FaGem className="text-3xl md:text-5xl text-teal-400" />,
      title: "Sınırları Aşan Bir Deneyim",
      text: "Satıcılar için geliştirilen yenilikçi çözümler ile ticaretin sınırlarını zorluyoruz.",
      delay: 0.2,
    },
    {
      icon: <FaRocket className="text-3xl md:text-5xl text-teal-400" />,
      title: "Hızla Gelişen Satıcı Çözümleri",
      text: "Satıcılar için hızla evrilen çözümler ile ticaretinizi kolaylaştırın.",
      delay: 0.4,
    },
    {
      icon: <FaLightbulb className="text-3xl md:text-5xl text-teal-400" />,
      title: "Yenilikçi Yaklaşım",
      text: "T21, satıcıları ön planda tutan yeni bir sistem sunuyor. Ticaretin geleceğini keşfedin.",
      delay: 0.6,
    },
  ];

  return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-500 tracking-wide drop-shadow-lg pb-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          T21 İle Değişen Satıcı Deneyimi
        </motion.h2>
        <div className="w-28 h-1 mx-auto bg-teal-400 rounded-full mb-16"></div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10 bg-white/10 p-4 md:p-6 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition duration-300"
              initial={{ opacity: 0, x: -20, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: feature.delay, duration: 1.2 }}
              viewport={{ once: true }}
            >
              <div>{feature.icon}</div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-teal-300 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm max-w-xl">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;

import { motion } from "framer-motion";
import { FaGem, FaLightbulb, FaRocket } from "react-icons/fa";

function NewFeaturesSection() {
  return (
    <section className="bg-teal-800 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-teal-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Yenilikçi Özelliklerle Alışverişin Geleceği
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white/5 p-6 rounded-xl backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2 }}
          >
            <FaGem className="text-teal-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Özelleştirilmiş Alışveriş
            </h3>
            <p className="text-sm text-gray-300">
              Kullanıcı dostu ara yüz ve kişiselleştirilmiş alışveriş deneyimi.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/5 p-6 rounded-xl backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
          >
            <FaRocket className="text-teal-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Hızlı ve Güvenli Alışveriş
            </h3>
            <p className="text-sm text-gray-300">
              Tüm alışverişlerinizi hızlı ve güvenli bir şekilde
              gerçekleştirebilirsiniz.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/5 p-6 rounded-xl backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            <FaLightbulb className="text-teal-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Her Zaman Yenilik</h3>
            <p className="text-sm text-gray-300">
              Sürekli güncellenen özellikler ile her zaman yeni ve heyecan
              verici bir deneyim.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default NewFeaturesSection;

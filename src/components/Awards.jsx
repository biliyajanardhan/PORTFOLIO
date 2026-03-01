    import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const Awards = () => {
  return (
    <section 
    id="awards"
    className="py-20 md:py-24 bg-gradient-to-b from-[#0f172a] to-[#050816] text-gray-200">
      <div className="w-full px-10 md:px-20 lg:px-32 xl:px-40">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-extrabold text-center mb-28"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
            Awards & Recognition
          </span>
        </motion.h2>

        {/* AWARD CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-16 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-500/30 shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/5 to-orange-500/5 blur-2xl -z-10"></div>

          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* ICON */}
            <div className="flex-shrink-0">
              <FaAward className="text-yellow-400 text-7xl drop-shadow-lg" />
            </div>

            {/* CONTENT */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                First Principle & AI Hybrid Applications
              </h3>

              <p className="text-2xl text-yellow-400 font-semibold mb-4">
                Ministry of Petroleum and Natural Gas, Government of India
              </p>

              <p className="text-xl text-gray-300 leading-relaxed">
                Recognized for applying hybrid AI and first-principle-based
                engineering approaches to enhance industrial process efficiency,
                reliability, and large-scale operational decision-making.
              </p>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Awards;
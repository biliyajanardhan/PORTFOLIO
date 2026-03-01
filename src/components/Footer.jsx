import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#030712] text-gray-300 pt-20 pb-10 overflow-hidden">

      {/* Animated Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>

      <div className="w-full px-12 md:px-24 lg:px-36">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              B. Janardhana Biliya
            </h3>

            <p className="text-lg text-gray-400 leading-relaxed">
              AI/ML & MLOps Engineer building scalable,
              enterprise-grade AI systems with cloud-native architecture.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-semibold text-white mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3 text-lg text-gray-400">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-purple-400 hover:translate-x-2 inline-block transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-semibold text-white mb-6">
              Connect
            </h4>

            <div className="flex gap-8 text-3xl">

              <motion.a
                whileHover={{ scale: 1.3 }}
                href="https://linkedin.com/in/b-janardhana-biliya-740507225"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.3 }}
                href="https://github.com/biliyajanardhan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.3 }}
                href="mailto:janardhanabiliya25@gmail.com"
                className="hover:text-purple-400 transition"
              >
                <FaEnvelope />
              </motion.a>

            </div>
          </motion.div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-base">

          <p>
            © {new Date().getFullYear()} B. Janardhana Biliya. All rights reserved.
          </p>

          <p className="mt-4 md:mt-0 text-gray-400">
            Built with <span className="text-pink-500 animate-pulse">❤</span> using React & Tailwind CSS
          </p>

        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="#"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
      >
        <FaArrowUp className="text-white text-lg" />
      </motion.a>

    </footer>
  );
};

export default Footer;
import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaMicrosoft } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const certs = [
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    icon: <VscAzure className="text-blue-500 text-4xl" />,
  },
  {
    title: "Azure AI Engineer Associate (AI-102)",
    issuer: "Microsoft",
    icon: <FaMicrosoft className="text-blue-500 text-4xl" />,
  },
  {
    title: "IBM Machine Learning with Python",
    issuer: "IBM",
    icon: <FaAward className="text-purple-400 text-4xl" />,
  },
  {
    title: "IBM Python for Data Science",
    issuer: "IBM",
    icon: <FaAward className="text-purple-400 text-4xl" />,
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-40 bg-gradient-to-b from-[#050816] to-[#0f172a] text-gray-200"
    >
      <div className="w-full px-10 md:px-20 lg:px-32 xl:px-40">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-extrabold text-center mb-28"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Certifications & Awards
          </span>
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 shadow-2xl hover:-translate-y-3 hover:shadow-purple-500/30 hover:border-purple-500/40 transition-all duration-500"
            >
              <div className="mb-6 flex items-center gap-4">
                <FaCertificate className="text-purple-400 text-3xl" />
                {cert.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-purple-400 transition">
                {cert.title}
              </h3>

              <p className="text-lg text-gray-400">
                Issued by {cert.issuer}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;
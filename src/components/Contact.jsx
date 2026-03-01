import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#050816] to-[#0f172a] text-gray-200">
      <div className="w-full px-10 md:px-20 lg:px-32 xl:px-40">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let’s Connect
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-xl text-gray-400 mb-20"
        >
          Open to AI/ML Engineering, MLOps, and Data roles.  
          Let’s build intelligent systems together.
        </motion.p>

        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {/* EMAIL */}
          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            value="janardhanabiliya25@gmail.com"
            link="mailto:janardhanabiliya25@gmail.com"
          />

          {/* LINKEDIN */}
          <ContactCard
            icon={<FaLinkedin />}
            title="LinkedIn"
            value="linkedin.com/in/b-janardhana-biliya-740507225"
            link="https://linkedin.com/in/b-janardhana-biliya-740507225"
          />

          {/* GITHUB */}
          <ContactCard
            icon={<FaGithub />}
            title="GitHub"
            value="github.com/biliyajanardhan"
            link="https://github.com/biliyajanardhan"
          />

          {/* PHONE */}
          <ContactCard
            icon={<FaPhoneAlt />}
            title="Mobile"
            value="+91 9035979207"
            link="tel:+919035979207"
          />

          {/* LOCATION */}
          <ContactCard
            icon={<FaMapMarkerAlt />}
            title="Location"
            value="Mangalore, Karnataka, India"
          />

        </div>
      </div>
    </section>
  );
};

/* CONTACT CARD COMPONENT */
const ContactCard = ({ icon, title, value, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-purple-500/40 transition-all duration-500"
    >
      <div className="flex items-center gap-5">

        <div className="text-3xl text-purple-400">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-400">{title}</h3>

          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold hover:text-purple-400 transition"
            >
              {value}
            </a>
          ) : (
            <p className="text-lg font-bold">{value}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
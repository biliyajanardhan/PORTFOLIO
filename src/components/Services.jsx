import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { 
  SiKubernetes, 
  SiDocker 
} from "react-icons/si";

import { FaAws, FaMicrosoft } from "react-icons/fa";

const features = [
  {
    title: "End-to-End ML Engineering",
    desc: "Designing, training, validating, and deploying production-grade machine learning systems that solve real-world business problems.",
  },
  {
    title: "MLOps & CI/CD Automation",
    desc: "Building scalable MLOps pipelines with experiment tracking, model versioning, containerization, and automated CI/CD workflows.",
  },
  {
    title: "Cloud & Kubernetes Deployment",
    desc: "Deploying secure, high-availability AI services across Kubernetes clusters and cloud platforms like Azure and AWS.",
  },
];

const Services = () => {
  return (
    <section
      id="whatido"
      className="relative py-32 bg-gradient-to-b from-[#0b1120] to-[#050816] text-gray-300 overflow-hidden"
    >
      {/* ===== FLOATING TECH ICONS ===== */}
      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-20 text-blue-500 opacity-20"
        >
          <SiKubernetes size={80} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 right-32 text-cyan-400 opacity-20"
        >
          <SiDocker size={80} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 right-10 text-purple-400 opacity-20"
        >
          <FaMicrosoft size={70} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute bottom-10 left-1/3 text-orange-400 opacity-20"
        >
          <FaAws size={70} />
        </motion.div>

      </div>

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-28 xl:px-36">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              What I Do
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Engineering scalable AI infrastructure with automation, reliability,
            and business impact.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-14">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.2}
                scale={1.05}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                className="p-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-500"
              >
                <h3 className="text-3xl font-bold mb-6 text-white">
                  {feature.title}
                </h3>

                <p className="text-lg text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </Tilt>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;
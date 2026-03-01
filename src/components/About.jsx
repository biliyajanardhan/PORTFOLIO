import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-b from-[#040612] via-[#0b1120] to-[#111827] text-gray-300 overflow-hidden"
    >
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-6 md:px-16 lg:px-28 xl:px-36">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-24"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-12 gap-16 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="md:col-span-8 space-y-10 text-2xl md:text-3xl leading-relaxed"
          >
            <p>
              I’m <span className="text-white font-semibold">B. Janardhana Biliya</span>,  
              an <span className="text-blue-400 font-semibold">AI/ML & MLOps Engineer</span>  
              with <span className="text-purple-400 font-semibold">2+ years of hands-on experience</span>  
              building production-grade machine learning systems.
            </p>

            <p>
              I architect 
              <span className="text-cyan-400 font-semibold"> scalable MLOps pipelines</span>,  
              automate <span className="text-blue-400 font-semibold">CI/CD workflows</span>,  
              and deploy cloud-native AI systems across  
              <span className="text-purple-400 font-semibold"> Kubernetes, Azure, and AWS</span>.
            </p>

            <p>
              My mission is to design 
              <span className="text-white font-semibold"> robust, observable, high-performance AI systems</span>  
              that drive measurable business impact in real-world production environments.
            </p>
          </motion.div>

          {/* RIGHT SIDE CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="md:col-span-4 flex flex-col gap-10"
          >

            {/* CARD 1 */}
            <div className="p-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:scale-105 transition duration-500">
              <h3 className="text-3xl font-bold text-blue-400 mb-4">
                Production AI Systems
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Designing and deploying reliable ML systems that perform confidently in live production environments.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:scale-105 transition duration-500">
              <h3 className="text-3xl font-bold text-purple-400 mb-4">
                Cloud & DevOps Engineering
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                CI/CD automation, containerization, Kubernetes orchestration, and scalable AI deployments.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="p-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:scale-105 transition duration-500">
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                Business-Driven AI
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Building AI systems aligned with measurable business outcomes and long-term scalability.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
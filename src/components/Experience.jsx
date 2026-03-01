import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI/ML Engineer – MLOps",
    company: "Mangalore Refinery and Petrochemicals Limited (MRPL)",
    timeline: "Sep 2023 – Jan 2026",
    tech: [
      "Python", "Kubernetes", "Docker", "GitHub Actions",
      "Jenkins", "Prometheus", "Grafana", "Azure", "AWS"
    ],
    points: [
      "Led the architecture and deployment of scalable MLOps pipelines supporting enterprise-grade AI applications in live production environments.",
      "Reduced model deployment cycle time by 40% through CI/CD automation using GitHub Actions and Jenkins.",
      "Containerized ML workloads using Docker and orchestrated deployments across Kubernetes clusters ensuring high availability.",
      "Implemented end-to-end observability using Prometheus and Grafana, improving system monitoring and reducing downtime.",
      "Designed secure cloud-native AI infrastructure across Azure and AWS aligned with enterprise compliance standards.",
      "Collaborated with cross-functional teams including data scientists, Operational team ",
      "Ensured reproducibility through model versioning, experiment tracking, and standardized deployment workflows.",
      "Supported production troubleshooting and root cause analysis for mission-critical AI services.",
      "Contributed to digital transformation initiatives by integrating AI-driven automation into operational workflows."
    ],
  },
  {
    role: "Machine Learning Engineer (Intern)",
    company: "Accolade Tech Solutions",
    timeline: "Apr 2023 – Jul 2023",
    tech: ["Python", "Scikit-learn", "TensorFlow", "Data Engineering"],
    points: [
      "Developed supervised and unsupervised machine learning models to solve business-driven analytical problems.",
      "Performed advanced data preprocessing, feature engineering, and model validation techniques.",
      "Improved model accuracy through hyperparameter tuning and cross-validation strategies.",
      "Collaborated in end-to-end ML lifecycle including experimentation, evaluation, and deployment preparation.",
      "Assisted in building automated pipelines for data ingestion and preprocessing.",
      "Documented technical workflows to support reproducibility and maintainability of ML systems."
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-44 bg-gradient-to-b from-[#050816] to-[#0f172a] text-gray-200"
    >
      <div className="w-full px-10 md:px-20 lg:px-32 xl:px-40">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-7xl font-extrabold mb-32 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </motion.h2>

        {/* TIMELINE CONTAINER */}
        <div className="relative">

          {/* Animated Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute left-4 top-0 w-[3px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-28 pl-20"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1 top-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/40" />

              {/* CARD */}
              <div className="p-14 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-purple-500/40 transition-all duration-500">

                {/* ROLE */}
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  {exp.role}
                </h3>

                {/* COMPANY */}
                <p className="text-blue-400 text-2xl font-semibold mb-2">
                  {exp.company}
                </p>

                {/* TIMELINE */}
                <p className="text-gray-400 text-xl mb-8">
                  {exp.timeline}
                </p>

                {/* TECH STACK TAGS */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {exp.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BULLET POINTS */}
                <ul className="space-y-5 text-xl leading-relaxed text-gray-300">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-4">
                      <span className="text-purple-400 text-2xl">•</span>
                      {pt}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
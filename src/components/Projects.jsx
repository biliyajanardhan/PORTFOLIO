import { motion } from "framer-motion";
import {
  SiPython,
  SiPostgresql,
  SiReact,
  SiPhp,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiJenkins,
  SiApacheairflow,
  SiGit,
  SiApachekafka,
  SiRabbitmq,
  SiAmazon,
  SiPrometheus,
  SiGrafana,
  SiMongodb,
  SiMysql
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "Research Copilot – Agentic AI System",
    desc: "Built an Agentic AI-powered research assistant using RAG architecture with Azure OpenAI. Designed Master-Agent orchestration and scalable cloud deployment.",
    tech: ["FastAPI", "Agentic AI", "RAG", "Azure OpenAI", "Azure Cognitive Search"],
    icon: <SiPython className="text-yellow-400 text-3xl" />,
    github: "https://github.com/biliyajanardhan",
  },
  {
    title: "Azure End-to-End MLOps Pipeline",
    desc: "Developed full ML lifecycle workflow using Azure ML including CI/CD, model registry, deployment, and monitoring for production environments.",
    tech: ["Azure ML", "Docker", "CI/CD", "Python"],
    icon: <VscAzure className="text-blue-500 text-3xl" />,
    github: "https://github.com/biliyajanardhan",
  },
  {
    title: "Kubernetes Production MLOps",
    desc: "Designed scalable MLOps system using Kubeflow & MLflow with Kubernetes-based deployment and Prometheus-Grafana monitoring.",
    tech: ["Kubeflow", "MLflow", "Kubernetes", "Prometheus"],
    icon: <SiKubernetes className="text-blue-400 text-3xl" />,
    github: "https://github.com/biliyajanardhan",
  },
  {
    title: "Kafka Real-Time ML Inference",
    desc: "Built streaming ML inference system using Kafka & Azure Event Hubs for real-time transaction prediction and analytics.",
    tech: ["Kafka", "Azure Event Hubs", "FastAPI", "Docker"],
    icon: <SiApachekafka className="text-purple-400 text-3xl" />,
    github: "https://github.com/biliyajanardhan",
  },
  {
    title: "AWS Serverless ETL Pipeline",
    desc: "Event-driven ETL architecture using S3, Lambda, Glue, and SNS for scalable and cost-efficient data processing.",
    tech: ["AWS", "Lambda", "Glue", "S3"],
    icon: <SiAmazon className="text-orange-400 text-3xl" />,
    github: "https://github.com/biliyajanardhan",
  },
  {
    title: "Airflow ETL + ML Training",
    desc: "Automated data ingestion, preprocessing, feature engineering, and ML model training workflows using Apache Airflow.",
    tech: ["Airflow", "Python", "SQL", "MLflow"],
    icon: <SiApacheairflow className="text-blue-500 text-3xl" />,
    github: "https://github.com/biliyajanardhan",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-40 bg-gradient-to-b from-[#0f172a] to-[#050816] text-gray-200"
    >
      <div className="w-full px-10 md:px-20 lg:px-32 xl:px-40">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl font-extrabold text-center mb-28"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Enterprise AI & MLOps Projects
          </span>
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">

          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-3 hover:border-purple-500/40 transition-all duration-500 cursor-pointer"
            >
              {/* ICON */}
              <div className="mb-6 group-hover:scale-110 transition duration-300">
                {project.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* TECH STACK BADGES */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GITHUB LINK INDICATOR */}
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition">
                <SiGit />
                View on GitHub →
              </div>

            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
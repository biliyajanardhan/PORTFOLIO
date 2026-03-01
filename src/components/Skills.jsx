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
import BackgroundParticles from "./BackgroundParticles";


/* ============================== */
/* Premium Skill Card */
/* ============================== */

const SkillCard = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl hover:border-purple-500/40 hover:shadow-purple-500/10 hover:scale-[1.02] transition-all duration-500"
  >
    <h3 className="text-3xl text-center md:text-4xl font-extrabold mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
      {title}
    </h3>

    <div className="grid grid-cols-2 gap-y-8 gap-x-12 text-xl md:text-2xl">
      {children}
    </div>
  </motion.div>
);

/* ============================== */
/* Individual Skill Item */
/* ============================== */

const Skill = ({ icon, name, color }) => (
  <div className="flex items-center gap-4 hover:translate-x-3 transition-all duration-300">
    <span className={`${color} text-3xl md:text-4xl`}>
      {icon}
    </span>
    <span className="font-semibold tracking-wide">{name}</span>
  </div>
);

/* ============================== */
/* Main Skills Section */
/* ============================== */

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-40 bg-gradient-to-b from-[#050816] via-[#0b1120] to-[#0f172a] text-gray-200"
    >
        <BackgroundParticles />
      <div className="w-full px-8 md:px-20 lg:px-28 xl:px-36">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-extrabold mb-28 text-center"
        >
          <span className="bg-gradient-to-r  from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">

          <SkillCard title="Programming">
            <Skill icon={<SiPython />} name="Python" color="text-yellow-400" />
            <Skill icon={<SiPostgresql />} name="SQL" color="text-blue-400" />
            <Skill icon={<SiReact />} name="React" color="text-cyan-400" />
            <Skill icon={<SiPhp />} name="PHP" color="text-purple-400" />
          </SkillCard>

          <SkillCard title="ML & AI">
            <Skill icon={<SiTensorflow />} name="TensorFlow" color="text-orange-500" />
            <Skill icon={<SiPytorch />} name="PyTorch" color="text-red-500" />
            <Skill icon={<SiOpencv />} name="OpenCV" color="text-blue-500" />
            <Skill icon={<SiPython />} name="NLP" color="text-yellow-400" />
          </SkillCard>

          <SkillCard title="MLOps & DevOps">
            <Skill icon={<SiDocker />} name="Docker" color="text-cyan-400" />
            <Skill icon={<SiKubernetes />} name="Kubernetes" color="text-blue-500" />
            <Skill icon={<SiGithubactions />} name="GitHub Actions" color="text-gray-300" />
            <Skill icon={<SiJenkins />} name="Jenkins" color="text-red-500" />
            <Skill icon={<SiApacheairflow />} name="Airflow" color="text-blue-400" />
            <Skill icon={<SiGit />} name="Git" color="text-orange-500" />
            <Skill icon={<SiApachekafka />} name="Kafka" color="text-gray-400" />
            <Skill icon={<SiRabbitmq />} name="RabbitMQ" color="text-orange-400" />
          </SkillCard>

          <SkillCard title="Cloud Platforms">
            <Skill icon={<VscAzure />} name="Azure" color="text-blue-500" />
            <Skill icon={<SiAmazon />} name="AWS" color="text-orange-400" />
          </SkillCard>

          <SkillCard title="Monitoring">
            <Skill icon={<SiPrometheus />} name="Prometheus" color="text-orange-500" />
            <Skill icon={<SiGrafana />} name="Grafana" color="text-yellow-400" />
          </SkillCard>

          <SkillCard title="Databases">
            <Skill icon={<SiPostgresql />} name="PostgreSQL" color="text-blue-400" />
            <Skill icon={<SiMysql />} name="MySQL" color="text-blue-500" />
            <Skill icon={<SiMongodb />} name="MongoDB" color="text-green-500" />
          </SkillCard>

        </div>
      </div>
    </section>
  );
};

export default Skills;
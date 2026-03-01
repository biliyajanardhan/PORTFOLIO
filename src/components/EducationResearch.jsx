import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen, FaAward } from "react-icons/fa";

const publications = [
 {
  title: "Brain Tumor Detection Using Deep Learning Technique (2023)",
  role: "Co-Author",
  journal: "Redshine Archive, Vol. 4, No. 1",
  link: "https://chapters.redshine.in/index.php/redshine/article/view/68",
  details:
    "Co-authored a peer-reviewed research paper proposing thresholding and deep learning-based MRI segmentation techniques for accurate brain tumour detection to support medical diagnostics.",
},
  {
    title: "Cardiology Machine Learning Platform (2023)",
    details:
      "Led development of a cardiology-focused ML platform during tenure at Accolade Tech Solutions. Academic certification by St. Aloysius College.",
  },
  
];

const EducationResearch = () => {
  return (
    <section 
    id="education"
     className="py-44 bg-gradient-to-b from-[#050816] to-[#0f172a] text-gray-200">
      <div className="w-full px-10 md:px-20 lg:px-32 xl:px-40">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-extrabold text-center mb-32"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Education & Research
          </span>
        </motion.h2>

        {/* EDUCATION CARD */}
        {/* EDUCATION SECTION */}
<div className="grid md:grid-cols-2 gap-12 mb-32">

  {/* M.Sc */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="p-14 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-purple-500/40 transition-all duration-500"
  >
    <div className="flex items-center gap-6 mb-6">
      <FaGraduationCap className="text-purple-400 text-4xl" />
      <h3 className="text-4xl font-bold">
        M.Sc. in Software Technology
      </h3>
    </div>

    <p className="text-2xl text-blue-400 font-semibold mb-3">
      St. Aloysius College of Management and IT (Autonomous), Mangalore
    </p>

    <p className="text-xl text-gray-300 mb-3">
      CGPA: <span className="text-purple-400 font-bold">7.48 / 10</span>
    </p>

    <p className="text-lg text-gray-400">
      Registration No: 211901
    </p>
  </motion.div>

  {/* BCA */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="p-14 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-purple-500/40 transition-all duration-500"
  >
    <div className="flex items-center gap-6 mb-6">
      <FaGraduationCap className="text-blue-400 text-4xl" />
      <h3 className="text-4xl font-bold">
        Bachelor of Computer Applications (BCA)
      </h3>
    </div>

    <p className="text-2xl text-blue-400 font-semibold mb-3">
      Government First Grade College, Carstreet
    </p>

    <p className="text-xl text-gray-300">
      CGPA: <span className="text-purple-400 font-bold">7.09 / 10</span>
    </p>
  </motion.div>

</div>

        {/* RESEARCH SECTION */}
        <div className="grid md:grid-cols-2 gap-12">

          {publications.map((pub, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="group p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 shadow-2xl hover:-translate-y-3 hover:shadow-purple-500/30 hover:border-purple-500/40 transition-all duration-500"
  >
    <div className="flex items-center gap-4 mb-6">
      <FaBookOpen className="text-blue-400 text-3xl" />
      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-purple-400 transition">
        {pub.title}
      </h3>
    </div>

    {pub.role && (
      <p className="text-purple-400 font-semibold mb-2">
        Role: {pub.role}
      </p>
    )}

    {pub.journal && (
      <p className="text-gray-400 mb-4">
        {pub.journal}
      </p>
    )}

    <p className="text-lg text-gray-400 leading-relaxed mb-6">
      {pub.details}
    </p>

    {pub.link && (
      <a
        href={pub.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
      >
        View Publication →
      </a>
    )}
  </motion.div>
))}

        </div>

        

      </div>
    </section>
  );
};

export default EducationResearch;
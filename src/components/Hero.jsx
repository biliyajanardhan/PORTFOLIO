import { motion } from "framer-motion";
import portfolioImage from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#050816]">

      {/* ================= AI BACKGROUND ================= */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* ===== MULTI-DIRECTIONAL DATA LINES ===== */}

  {/* Vertical Moving Lines */}
  <div className="absolute left-[10%] top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30 animate-dataDown"></div>
  <div className="absolute left-[30%] bottom-0 w-[2px] h-full bg-gradient-to-t from-transparent via-purple-500 to-transparent opacity-30 animate-dataUp"></div>
  <div className="absolute left-[55%] top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-25 animate-dataDownSlow"></div>
  <div className="absolute left-[75%] bottom-0 w-[2px] h-full bg-gradient-to-t from-transparent via-pink-500 to-transparent opacity-25 animate-dataUpSlow"></div>

  {/* Horizontal Moving Lines */}
  <div className="absolute top-[20%] left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 animate-dataRight"></div>
  <div className="absolute top-[60%] right-0 h-[2px] w-full bg-gradient-to-l from-transparent via-purple-500 to-transparent opacity-20 animate-dataLeft"></div>

  {/* ===== GLOW BLOBS ===== */}
  <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-float"></div>
  <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-3xl opacity-10 animate-floatSlow"></div>

  {/* ===== NEURAL NETWORK SVG ===== */}
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1440 800"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>

    {/* Thick Flowing Lines */}
    <path
      d="M0 200 C 400 50, 900 350, 1440 200"
      stroke="url(#aiGradient)"
      strokeWidth="4"
      fill="transparent"
      opacity="0.5"
    >
      <animate
        attributeName="d"
        dur="14s"
        repeatCount="indefinite"
        values="
          M0 200 C 400 50, 900 350, 1440 200;
          M0 230 C 400 120, 900 300, 1440 250;
          M0 200 C 400 50, 900 350, 1440 200
        "
      />
    </path>

    {/* DOTTED SLOW PULSE LINE */}
    <path
      d="M0 400 C 500 250, 1000 550, 1440 400"
      stroke="url(#aiGradient)"
      strokeWidth="3"
      strokeDasharray="8 16"
      fill="transparent"
      opacity="0.7"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="200"
        dur="10s"
        repeatCount="indefinite"
      />
    </path>

    {/* MORE DOTTED PULSE */}
    <path
      d="M0 600 C 600 450, 1100 700, 1440 600"
      stroke="url(#aiGradient)"
      strokeWidth="2.5"
      strokeDasharray="6 14"
      fill="transparent"
      opacity="0.6"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="150"
        dur="12s"
        repeatCount="indefinite"
      />
    </path>

    {/* GLOWING PULSE NODES */}
    <circle cx="400" cy="250" r="6" fill="#3b82f6">
      <animate attributeName="r" values="6;14;6" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite" />
    </circle>

    <circle cx="900" cy="500" r="6" fill="#8b5cf6">
      <animate attributeName="r" values="6;16;6" dur="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" />
    </circle>

    <circle cx="1200" cy="300" r="6" fill="#06b6d4">
      <animate attributeName="r" values="6;12;6" dur="5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.2;1" dur="5s" repeatCount="indefinite" />
    </circle>

  </svg>
</div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full px-10 md:px-20 lg:px-32">

        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 lg:gap-8">

      <motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="md:col-span-7 lg:col-span-8 space-y-8"
>

  {/* Small Intro Tag */}
  <p className="uppercase tracking-widest text-sm md:text-base text-cyan-400 font-semibold">
    AI / ML Engineer • MLOps Specialist
  </p>

  {/* Main Heading */}
  <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] text-white">
    B Janardhana
    <br />
    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
      Biliya
    </span>
  </h1>

  {/* Strong Subtitle */}
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
    Building Production-Grade AI Systems for Real-World Impact
  </h2>

  {/* Recruiter-Focused Paragraph */}
  <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-4xl">

    An AI/ML & MLOps Engineer with 
    <span className="text-white font-semibold"> 2+ years of hands-on experience </span>
    designing, deploying, and scaling intelligent systems in production environments.

    <br /><br />

    Specialized in 
    <span className="text-purple-400 font-semibold"> scalable MLOps pipelines</span>, 
    <span className="text-blue-400 font-semibold"> CI/CD automation</span>, 
    and cloud-native AI deployments across 
    <span className="text-cyan-400 font-semibold"> Kubernetes, Azure, and AWS</span>.

    <br /><br />

    Passionate about building reliable, observable, and high-performance AI systems 
    that drive measurable business outcomes.
  </p>

  {/* Buttons */}
  <div className="flex flex-wrap gap-6 pt-6">
    <a
      href="#projects"
      className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-2xl shadow-xl shadow-blue-500/40 transition"
    >
      View Projects
    </a>

    <a
      href="#contact"
      className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 text-lg font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition"
    >
      Let’s Connect ↗
    </a>
  </div>

</motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end"
          >
            <div className="relative">

              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-40 rounded-3xl"></div>

              <img
                src={portfolioImage}
                alt="AI Engineer"
                className="relative w-[380px] md:w-[500px] lg:w-[600px] rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
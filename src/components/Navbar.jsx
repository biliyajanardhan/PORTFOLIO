import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl shadow-lg shadow-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-9xl mx-auto px-10 py-6 flex justify-between items-center">

        {/* LOGO */}
        <motion.div
  whileHover={{ scale: 1.05 }}
  className="cursor-pointer flex items-center"
>
  <img
    src={logo}
    alt="B Janardhana Biliya Logo"
    className="h-14 md:h-16 object-contain drop-shadow-lg"
  />
</motion.div>

        {/* MENU */}
        <div className="hidden md:flex items-center space-x-12 text-2xl font-medium text-gray-300">

          {["About", "What I Do", "Skills","Experience", "Projects" ,"Education","Awards","Certifications"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              className="relative group hover:text-white transition duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* CONTACT BUTTON */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-500/30 overflow-hidden"
          >
            <span className="relative z-10">Contact</span>

            {/* Animated Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 hover:opacity-100 transition duration-500"></span>
          </motion.a>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
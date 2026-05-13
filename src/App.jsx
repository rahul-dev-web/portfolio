import { motion } from "framer-motion";
import { useState } from "react";
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
  <Navbar />
  <Hero />
  <Projects />
  <Skills />
  <Services />
  <Contact />
</div>
  );
}
/* ---------------- NAVBAR ---------------- */
function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-gray-800 bg-black/70 backdrop-blur-md z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          Rahul K. Jha
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">

          <a href="#projects" className="hover:text-white">
            Projects
          </a>

          <a href="#skills" className="hover:text-white">
            Skills
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-4 text-gray-300 bg-black">

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>
      )}

    </nav>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-3xl"
>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
         I Build Scalable Web Systems & Modern Digital Products
        </h1>

        <p className="text-gray-400 mt-6 text-base md:text-lg px-2">
          Full Stack Developer focused on dashboards,
          backend systems and scalable applications.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition duration-300">
            View Projects
          </button>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
            Hire Me
          </button>

        </div>

      </motion.div>

    </section>
  );
}

/* ---------------- PROJECTS ---------------- */

function Projects() {

  const projects = [
    {
      title: "IGL Esports System",
      problem: "Tournament coordination conflicts",
      solution: "Automated scheduling and voting system",
      impact: "Improved workflow efficiency"
    },

    {
      title: "FF India Platform",
      problem: "No centralized tournament handling",
      solution: "Built admin dashboard system",
      impact: "Enabled scalable operations"
    }
  ];

  return (
    <section
    id="projects"
     className="px-6 py-20 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {projects.map((project, index) => (
          <motion.div
  key={index}
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.2 }}
  className="border border-gray-800 bg-white/5 backdrop-blur-sm p-6 rounded-2xl hover:border-white transition shadow-lg"
>

            <h3 className="text-xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-red-400 text-sm mb-2">
              Problem: {project.problem}
            </p>

            <p className="text-blue-400 text-sm mb-2">
              Solution: {project.solution}
            </p>

            <p className="text-green-400 text-sm">
              Impact: {project.impact}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}
function Skills() {

  const skills = [
    "React & Frontend Systems",
    "Node.js Backend Development",
    "REST API Integration",
    "Dashboard Engineering",
    "Role-Based Access Systems",
    "Scalable Web Architecture"
  ];

  return (
    <section
    id="skills" className="px-6 py-20 max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-12">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-800 p-4 rounded-lg text-gray-300"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

/* ---------------- SERVICES ---------------- */

function Services() {

  const services = [
    {
      title: "Web Applications",
      desc: "Full stack scalable web apps for startups and businesses."
    },

    {
      title: "Admin Dashboards",
      desc: "Modern dashboards with APIs and structured systems."
    },

    {
      title: "Backend Systems",
      desc: "Node.js powered backend architecture and APIs."
    }
  ];

  return (
    <section
     className="px-6 py-20 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-12">
        What I Can Build
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-800 bg-white/5 backdrop-blur-sm p-6 rounded-2xl hover:border-white transition shadow-lg"
          >

            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {service.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  return (
    <section 
    id="contact"
     className="px-6 py-24 text-center">

      <h2 className="text-4xl font-bold mb-4">
        Let’s Build Something Powerful
      </h2>

      <p className="text-gray-400 mb-8">
        Open for internships, freelance projects and collaborations.
      </p>

      <button className="bg-white text-black px-8 py-3 rounded-full font-medium">
        Contact Me
      </button>

      <p className="text-gray-600 text-sm mt-6">
        jarahul989@gmail..com
      </p>
      <p className="text-gray-600 text-sm">
  GitHub: github.com/usercreator005
</p>

<p className="text-gray-600 text-sm">
  LinkedIn: linkedin.com/in/rahul-kumar-jha
</p>

    </section>
  );
}
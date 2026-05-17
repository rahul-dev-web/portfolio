import { motion } from "framer-motion";
import { image } from "framer-motion/client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
  <Navbar />
  <Hero />
  <Projects />
  <Skills />
  <Services />
  <Contact />
  <Footer />
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
        <div className="hidden md:flex gap-4 items-center text-gray-400 text-sm">

  <a
    href="https://github.com/rahul-dev-web"
    target="_blank"
    className="hover:text-white"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/rahul-kumar-jha-web-dev"
    target="_blank"
    className="hover:text-white"
  >
    LinkedIn
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
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-3xl relative z-10"
>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
         I Build Scalable Web Systems & Modern Digital Products
        </h1>

        <p className="text-gray-400 mt-6 text-base md:text-lg px-2 leading-relaxed">
  Full Stack Developer specializing in scalable web applications,
  backend architecture, admin dashboards, REST APIs, and MySQL-powered systems.
</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

  <a
    href="#projects"
    className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition duration-300"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
  >
    Hire Me
  </a>

  <a
    href="/resume.pdf"
    download
    className="border border-gray-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
  >
    Download Resume
  </a>

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
    image: "/projects/igl.png",
    problem: "Tournament coordination conflicts",
    solution: "Automated scheduling and voting system",
    impact: "Improved workflow efficiency",
    tech: ["androidStudio", "kotlin", "System Design"]
  },

  {
    title: "FF India Platform",
    image: "/projects/creatordashboard.png",
    image2: "/projects/admindashboard.png",
    problem: "No centralized tournament handling",
    solution: "Built admin dashboard system",
    impact: "Enabled scalable operations",
    tech: ["React", "REST APIs", "Dashboard UI"]
  },

  { title: "Full Stack Auth System", 
    image: "/projects/loginpage.png",
    image2: "/projects/registerpage.png",
    image3: "/projects/mysqldb.png",
    problem: "Need for secure authentication and protected user systems", 
    solution: "Built JWT authentication with protected routes and role-based access control",
    impact: "Implemented scalable authentication architecture for modern web applications", 
    tech: [ "React", "Node.js", "Express", "MySQL", "JWT", "REST APIs" ] 
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
              <img
                src={project.image}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
               <img
                src={project.image2}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
               <img
                src={project.image3}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

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
            <div className="flex flex-wrap gap-2 mt-4">

  {project.tech.map((tech, i) => (
    <span
      key={i}
      className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300"
    >
      {tech}
    </span>
  ))}

</div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}
function Skills() {

 const skills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MySQL",
  "REST APIs",
  "Tailwind CSS",
  "System Design",
  "Admin Dashboards",
  "Responsive UI Design"
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
      className="px-6 py-24 text-center"
    >

      <h2 className="text-4xl font-bold mb-4">
        Let’s Build Something Powerful
      </h2>

      <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
  Currently open for internships, freelance opportunities,
  backend development projects, dashboard systems,
  and scalable web application collaborations.
</p>

      <form
        action="https://formsubmit.co/jarahul989@gmail.com"
        method="POST"
        className="max-w-2xl mx-auto flex flex-col gap-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-white/5 border border-gray-800 rounded-xl p-4 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-white/5 border border-gray-800 rounded-xl p-4 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          className="bg-white/5 border border-gray-800 rounded-xl p-4 outline-none"
        ></textarea>

        <button
          type="submit"
          className="bg-white text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}
function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
      <p>© 2026 Rahul K. Jha — Full Stack Developer</p>
      
      {/* Footer Social Links with Logos */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://github.com/rahul-dev-web"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white flex items-center gap-1.5 transition"
        >
          <FaGithub className="text-base" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-kumar-jha-web-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white flex items-center gap-1.5 transition"
        >
          <FaLinkedin className="text-base" /> LinkedIn
        </a>
        <a
          href="mailto:jarahul989@gmail.com"
          className="hover:text-white flex items-center gap-1.5 transition"
        >
          <FaEnvelope className="text-base" /> Email
        </a>
      </div>
    </footer>
  );
}
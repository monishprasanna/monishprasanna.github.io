import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github, Twitter, Mail, ExternalLink, ChevronDown } from "lucide-react";
import { projects, Project } from "./data/projects";
import { useState } from "react";

const ProjectCard = ({ project, index }: { project: Project; index: number; key?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative flex flex-col gap-4"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
          <motion.a
            href={project.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="h-16 w-16 rounded-full glass flex items-center justify-center text-white"
          >
            <ArrowUpRight size={24} />
          </motion.a>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full glass text-[10px] uppercase tracking-widest font-medium">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-start pt-2">
        <div>
          <h3 className="text-xl font-serif italic text-white/90 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-500 line-clamp-2 mt-1 max-w-[280px]">
            {project.description}
          </p>
        </div>
        <span className="font-mono text-[10px] text-zinc-600 mt-2">
          {project.year}
        </span>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif italic tracking-tighter"
        >
          Portfolio.
        </motion.div>
        
        <div className="flex gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex gap-6 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60"
          >
            <a href="#" className="hover:text-white transition-colors">Work</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full glass text-[10px] uppercase tracking-widest font-semibold"
          >
            Let's Talk
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-orange-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-zinc-500">
              Creative Developer & Designer
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[12vw] md:text-[8vw] leading-[0.85] font-serif italic tracking-tighter mb-8"
          >
            Crafting <br />
            <span className="text-zinc-500 not-italic font-sans font-light">Digital</span> <br />
            Experiences.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest text-zinc-600">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={16} className="text-zinc-600" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 md:px-20 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif italic mb-6"
            >
              Selected Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-lg"
            >
              A collection of projects where design meets functionality. Each piece is a unique exploration of digital possibilities.
            </motion.p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? "bg-white text-black font-bold" 
                    : "glass text-white/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-20 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-10">
              Let's create <br /> something <span className="text-zinc-600">extraordinary.</span>
            </h2>
            <a 
              href="mailto:hello@example.com" 
              className="text-2xl md:text-3xl font-light hover:text-zinc-400 transition-colors border-b border-white/20 pb-2"
            >
              hello@example.com
            </a>
          </div>
          
          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="flex gap-6 mb-10">
              <a href="#" className="h-12 w-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="h-12 w-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="h-12 w-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Mail size={20} />
              </a>
            </div>
            
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 flex flex-col md:items-end gap-2">
              <span>© 2024 All Rights Reserved</span>
              <span>Built with Passion & Code</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

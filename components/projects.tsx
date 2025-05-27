"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  MessageCircle,
  Search,
  Users,
} from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const projects = [
    {
      title: "Pokedex Web App",
      description:
        "An interactive Pokédex built with React and Framer Motion featuring beautiful animations, stats visualization, and shiny Pokémon variants.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Framer Motion", "REST API", "CSS3"],
      liveUrl: "https://pokedex-react-app-one.vercel.app/",
      githubUrl: "#",
      icon: Search,
      gradient: "from-purple-400 to-pink-500",
      featured: false,
    },
    {
      title: "Real-time Chat App",
      description:
        "A modern chat application with user authentication, real-time messaging, image sharing, and responsive design using Firebase.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Firebase", "SASS", "WebSocket"],
      liveUrl: "https://chat-realtime-react.vercel.app/login",
      githubUrl: "#",
      icon: MessageCircle,
      gradient: "from-green-400 to-blue-500",
      featured: false,
    },
    {
      title: "User Management System",
      description:
        "A comprehensive user management dashboard with CRUD operations, data visualization, and role-based access control.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://user-management-faker.vercel.app/",
      githubUrl: "#",
      icon: Users,
      gradient: "from-cyan-400 to-blue-500",
      featured: false,
    },

    {
      title: "Movie Finder App",
      description:
        "Discover movies with this sleek search application powered by OMDB API, featuring detailed movie information and ratings.",
      image: "/api/placeholder/400/250",
      tech: ["React", "OMDB API", "CSS3", "JavaScript"],
      liveUrl: "https://react-movie-finder-app-eta.vercel.app/",
      githubUrl: "#",
      icon: Search,
      gradient: "from-purple-400 to-pink-500",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"
          />

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and
            passion for creating amazing digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid gap-8"
        >
          {/* Featured Projects - Large Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300">
                      {/* Project Image */}
                      <div className="relative h-64 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                        />
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                          <Icon size={64} className="text-slate-600" />
                        </div>

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                          >
                            <Github size={20} />
                          </motion.a>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradient} p-2 mr-3`}
                          >
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-slate-400 mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex space-x-4">
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </motion.a>
                          {/* <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center text-slate-400 hover:text-slate-300 transition-colors duration-300"
                          >
                            <Github size={16} className="mr-2" />
                            Code
                          </motion.a> */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>

          {/* Regular Projects - Smaller Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/30 group-hover:border-slate-600/50 transition-all duration-300 h-full">
                      {/* Project Header */}
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} p-2.5 mr-3`}
                          >
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-slate-700/30 text-slate-400 rounded border border-slate-600/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex space-x-4">
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
                          >
                            <ExternalLink size={14} className="mr-1" />
                            Demo
                          </motion.a>
                          {/* <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center text-slate-400 hover:text-slate-300 transition-colors duration-300 text-sm"
                          >
                            <Github size={14} className="mr-1" />
                            Code
                          </motion.a> */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-20"
        >
          <motion.a
            href="https://github.com/rahul-269"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-medium rounded-full hover:from-slate-700 hover:to-slate-600 transition-all duration-300 border border-slate-600 hover:border-slate-500"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -right-32 w-64 h-64 border border-cyan-400/5 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -left-32 w-64 h-64 border border-blue-400/5 rounded-full"
        />
      </div>
    </section>
  );
};

export default Projects;

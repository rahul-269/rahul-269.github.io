"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Code2, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      icon: Database,
      items: ["Express", "MongoDB", "SQL", "Node.js", "Supabase"],
      color: "from-green-500 to-emerald-500",
    },
    // {
    //   category: "Mobile",
    //   icon: Smartphone,
    //   items: ["React Native", "Expo", "Mobile UI/UX"],
    //   color: "from-purple-500 to-pink-500",
    // },
    // {
    //   category: "Tools",
    //   icon: Code2,
    //   items: ["Git", "Figma", "VS Code"],
    //   color: "from-orange-500 to-red-500",
    // },
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
    <section id="about" ref={ref} className="py-20 relative">
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
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Text content */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Hi, I'm{" "}
                  <span className="text-cyan-400 font-semibold">Rahul</span> , a
                  passionate Full Stack Developer with a love for creating
                  exceptional digital experiences. I specialize in building
                  modern, scalable web applications.
                </p>

                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  My journey as a developer started with curiosity and has
                  evolved into a passion for crafting intuitive user interfaces
                  and robust solutions. Recently I've been enjoying working with
                  Next, while also exploring new technologies.
                </p>

                <p className="text-lg text-slate-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest tech
                  trends, looking for interesting ideas or projects, or relaxing
                  with some reading to avoid burnout. Let's build something
                  amazing together!
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            {/* <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {[
                { number: "3+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "15+", label: "Technologies" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Right column - Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <motion.div
                  key={skillGroup.category}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300 h-full">
                    {/* Icon with gradient background */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skillGroup.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4">
                      {skillGroup.category}
                    </h3>

                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1 + skillIndex * 0.05,
                          }}
                          className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color} mr-3`}
                          />
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-cyan-400/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 border border-blue-400/10 rounded-full"
        />
      </div>
    </section>
  );
};

export default About;

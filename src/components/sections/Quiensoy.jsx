import React from "react";
import imgMoon from "../../assets/to_the_moon.svg";
import TitleSection from "../TitleSection";
import { motion } from "framer-motion";

function Quiensoy() {
  // Variantes para animaciones de texto
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Habilidades destacadas con emojis
  const skills = [
    { name: "HTML & CSS", emoji: "🎨", class: "skill-tag html-css" },
    { name: "JavaScript", emoji: "⚡", class: "skill-tag javascript" },
    { name: "React", emoji: "⚛️", class: "skill-tag react" },
    { name: "Responsive", emoji: "📱", class: "skill-tag responsive" },
    { name: "Git", emoji: "🔄", class: "skill-tag git" },
    { name: "Figma", emoji: "🎯", class: "skill-tag figma" }
  ];

  return (
    <section id="quiensoy" className="py-10">
      <div className="hero mb-16">
        <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
          <motion.div
            className="max-w-lg relative about-content"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px 0px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <TitleSection>¿Quién soy?</TitleSection>
            
            <motion.p 
              className="px-6 md:py-6 text-center about-text leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Desarrollador web apasionado con experiencia en HTML, CSS,
              JavaScript y React. Domino diseño responsivo con Bootstrap y
              Tailwind, y la gestión de bases de datos SQL. Experto en Git,
              trabajo en equipo y diseño en Figma. Estoy listo para afrontar
              nuevos retos y contribuir a proyectos emocionantes.
            </motion.p>
            
            <motion.p 
              className="px-6 text-center about-highlight font-semibold text-[var(--primary)]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              ¡Conoce mi mundo tecnológico!
            </motion.p>
            
            {/* Skills tags */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mt-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className={`${skill.class} inline-block px-3 py-1 rounded-full text-sm bg-opacity-20 bg-black border border-[var(--primary)] border-opacity-30 cursor-pointer`}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1, margin: "-30px 0px" }}
                  variants={textVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "var(--primary)", 
                    color: "black",
                    transition: { duration: 0.2 } 
                  }}
                >
                  {skill.emoji} {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="w-[80%] md:max-w-sm relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px 0px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img 
              src={imgMoon} 
              className="w-full about-image" 
              alt="To the moon illustration"
            />
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -z-10 w-32 h-32 rounded-full bg-[var(--primary)] bg-opacity-10 blur-xl"
              style={{ top: '10%', left: '10%' }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div 
              className="absolute -z-10 w-24 h-24 rounded-full bg-[var(--primary)] bg-opacity-10 blur-xl"
              style={{ bottom: '15%', right: '5%' }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Quiensoy;

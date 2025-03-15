import React from "react";
import TitleSection from "../TitleSection";
import { motion } from "framer-motion";

function Experiencia() {
  // Variantes para animaciones
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Datos de experiencia
  const experiencias = [
    {
      periodo: "2024 - Actualidad",
      empresa: "Dentsu Dominicana",
      puesto: "Desarrollador Web",
      descripcion: "Desarrollo landing pages, sitios web corporativos y aplicaciones internas con React.js, Tailwind CSS, MongoDB, WordPress y Elementor. Implementé formularios dinámicos que adaptan preguntas según los servicios seleccionados, almacenan datos en MongoDB y generan reportes en PDF. Trabajo en equipo usando Git/GitHub y metodologías ágiles."
    },
    {
      periodo: "2023-2024",
      empresa: "HSSE",
      puesto: "Gerente de producto, UX/UI",
      descripcion: "Lideré el desarrollo de una app móvil exitosa, desde la definición de la visión del producto hasta el lanzamiento. Realicé investigación de usuarios, diseñé la UX/UI, gestioné el equipo y el proyecto, y aseguré su éxito. Poseo visión estratégica, comprensión de las necesidades del usuario, habilidades de diseño y gestión, y capacidad para crear productos exitosos."
    },
    {
      periodo: "2023",
      empresa: "XpertCode",
      puesto: "Front-End Developer",
      descripcion: "Fortalecí mis habilidades en desarrollo web y gestión de proyectos con conocimientos en lenguaje digital, creación de sitios web, testing, SCRUM y WordPress. Implementé SCRUM en proyectos de software y creé un sitio web con WordPress y Elementor. Dominio de tecnologías web, comprensión de SCRUM para gestión de proyectos y creación de sitios web profesionales."
    }
  ];

  return (
    <motion.section
      id="experiencia"
      className="timeline-section relative mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Elementos decorativos animados */}
      <motion.div 
        className="absolute -z-10 w-32 h-32 rounded-full bg-[var(--primary-light)] opacity-20 blur-xl decorative-orb"
        style={{ top: '15%', left: '5%' }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      <motion.div 
        className="absolute -z-10 w-40 h-40 rounded-full bg-[var(--primary-light)] opacity-20 blur-xl decorative-orb"
        style={{ bottom: '10%', right: '5%' }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear",
          delay: 2
        }}
      />
      
      <motion.div variants={titleVariants}>
        <TitleSection>Experiencia</TitleSection>
      </motion.div>
      
      <div className="timeline-items">
        {experiencias.map((exp, index) => (
          <div key={index} className="timeline-item" style={{ '--item-index': index + 1 }}>
            <motion.div 
              className="timeline-dot"
              whileHover={{ 
                scale: 1.5,
                boxShadow: "0 0 15px var(--primary)"
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10
              }}
            />
            
            <motion.div 
              className="timeline-date"
              whileHover={{ 
                scale: 1.05,
                color: "#ffffff",
                textShadow: "0 0 5px var(--primary)"
              }}
            >
              {exp.periodo}
            </motion.div>
            
            <motion.div 
              className="timeline-content"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(13, 158, 216, 0.3)"
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
            >
              <motion.h3
                whileHover={{
                  color: "var(--primary)",
                  textShadow: "0 0 5px rgba(13, 158, 216, 0.5)"
                }}
              >
                {exp.empresa} | {exp.puesto}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0.8 }}
                whileHover={{ 
                  opacity: 1,
                  color: "#e0e0e0"
                }}
              >
                {exp.descripcion}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experiencia;

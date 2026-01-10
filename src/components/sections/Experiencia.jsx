import React, { memo } from "react";
import TitleSection from "../TitleSection";
import { motion } from "framer-motion";

// Variantes movidas fuera del componente para evitar recreación
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};

const titleVariants = {
  hidden: { y: -30, opacity: 0 },
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

const dotVariants = {
  hover: {
    scale: 1.3,
    boxShadow: "0 0 15px var(--primary)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const dateVariants = {
  hover: {
    scale: 1.05,
    color: "#ffffff",
    textShadow: "0 0 5px var(--primary)",
    transition: {
      duration: 0.2
    }
  }
};

const contentVariants = {
  hover: {
    y: -3,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3), 0 0 15px rgba(13, 158, 216, 0.3)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

const titleHoverVariants = {
  hover: {
    color: "var(--primary)",
    textShadow: "0 0 5px rgba(13, 158, 216, 0.5)",
    transition: {
      duration: 0.2
    }
  }
};

const descriptionVariants = {
  hover: {
    opacity: 1,
    color: "#e0e0e0",
    transition: {
      duration: 0.2
    }
  }
};

const orbVariants1 = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.1, 0.3, 0.1],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const orbVariants2 = {
  animate: {
    scale: [1, 1.5, 1],
    opacity: [0.1, 0.2, 0.1],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear",
      delay: 2
    }
  }
};

// Datos de experiencia movidos fuera del componente
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

const Experiencia = memo(function Experiencia() {
  return (
    <motion.section
      id="experiencia"
      className="timeline-section relative mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: "-100px 0px" }}
      variants={sectionVariants}
    >
      {/* Elementos decorativos animados optimizados */}
      <motion.div 
        className="absolute -z-10 w-32 h-32 rounded-full bg-[var(--primary-light)] opacity-20 blur-xl decorative-orb"
        style={{ top: '15%', left: '5%' }}
        variants={orbVariants1}
        animate="animate"
      />
      
      <motion.div 
        className="absolute -z-10 w-40 h-40 rounded-full bg-[var(--primary-light)] opacity-20 blur-xl decorative-orb"
        style={{ bottom: '10%', right: '5%' }}
        variants={orbVariants2}
        animate="animate"
      />
      
      <motion.div variants={titleVariants}>
        <TitleSection>Experiencia</TitleSection>
      </motion.div>
      
      <div className="timeline-items">
        {experiencias.map((exp, index) => (
          <div key={index} className="timeline-item" style={{ '--item-index': index + 1 }}>
            <motion.div 
              className="timeline-dot"
              variants={dotVariants}
              whileHover="hover"
            />
            
            <motion.div 
              className="timeline-date"
              variants={dateVariants}
              whileHover="hover"
            >
              {exp.periodo}
            </motion.div>
            
            <motion.div 
              className="timeline-content"
              variants={contentVariants}
              whileHover="hover"
            >
              <motion.h3
                variants={titleHoverVariants}
                whileHover="hover"
              >
                {exp.empresa} | {exp.puesto}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0.8 }}
                variants={descriptionVariants}
                whileHover="hover"
              >
                {exp.descripcion}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
});

export default Experiencia;

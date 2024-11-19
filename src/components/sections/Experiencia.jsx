import React from "react";
import TitleSection from "../TitleSection";
import { motion } from "framer-motion";

function Experiencia() {
  return (
    <>
      <motion.section
        className="timeline-section relative mb-10"
        initial={{ y: 400, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <TitleSection>Experiencia</TitleSection>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Dentsu Dominicana | Desarrollador Web</h3>
              <p>
                En mi rol actual, he trabajado en el desarrollo de
                aplicaciones web con React.js, WordPress y Tailwind CSS.
                Implementé soluciones dinámicas utilizando React Hooks y
                programación reactiva, además de integrar la API de Google Maps
                en proyectos de Single-page Applications (SPA). Desarrollé y
                personalicé sitios web con Elementor, optimizando la experiencia
                de usuario y el diseño responsivo. También realicé pruebas de
                API, contribuyendo al éxito de proyectos digitales innovadores.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023-2024</div>
            <div className="timeline-content">
              <h3>HSSE | Gerente de producto, UX/UI</h3>
              <p>
                Lideré el desarrollo de una app móvil exitosa, desde la
                definición de la visión del producto hasta el lanzamiento.
                Realicé investigación de usuarios, diseñé la UX/UI, gestioné el
                equipo y el proyecto, y aseguré su éxito. Poseo visión
                estratégica, comprensión de las necesidades del usuario,
                habilidades de diseño y gestión, y capacidad para crear
                productos exitosos.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h3>XpertCode | Front-End Developer</h3>
              <p>
                Fortalecí mis habilidades en desarrollo web y gestión de
                proyectos con conocimientos en lenguaje digital, creación de
                sitios web, testing, SCRUM y WordPress. Implementé SCRUM en
                proyectos de software y creé un sitio web con WordPress y
                Elementor. Dominio de tecnologías web, comprensión de SCRUM para
                gestión de proyectos y creación de sitios web profesionales.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Experiencia;

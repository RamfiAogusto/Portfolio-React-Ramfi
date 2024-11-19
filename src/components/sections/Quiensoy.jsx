import React from "react";
import imgMoon from "../../assets/to_the_moon.svg";
import TitleSection from "../TitleSection";
import { motion } from "framer-motion";

function Quiensoy() {
  return (
    <>
      <div className="hero mb-16">
        <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
          <motion.div
            className="max-w-lg relative"
            initial={{ y: 400, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <TitleSection>¿Quien soy?</TitleSection>
            <p className="px-6 md:py-6 text-center">
              Desarrollador web apasionado con experiencia en HTML, CSS,
              JavaScript y React. Domino diseño responsivo con Bootstrap y
              Tailwind, y la gestión de bases de datos SQL. Experto en Git,
              trabajo en equipo y diseño en Figma. Estoy listo para afrontar
              nuevos retos y contribuir a proyectos emocionantes. ¡Conoce mi
              mundo tecnológico!
            </p>
          </motion.div>
          <img src={imgMoon} className="w-[80%] md:max-w-sm" />
        </div>
      </div>
    </>
  );
}

export default Quiensoy;

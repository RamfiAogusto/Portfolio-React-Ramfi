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
                        transition={{ delay: 0.3 }}
                    >
                        <TitleSection>¿Quien soy?</TitleSection>
                        <p className="px-6 md:py-6 text-center">
                            Soy un fanático del desarrollo web con habilidades
                            desde la construcción de sólidas bases con HTML y
                            CSS hasta la creación dinámica con Javascript y
                            ReactJs. Manejo el diseño responsivo con Bootstrap y
                            Tailwind, y gestiono bases de datos SQL con
                            facilidad. Soy un amante del trabajo en equipo,
                            experto en Git y Github para un flujo de trabajo
                            suave. Además, sé de testing de software y utilizo
                            herramientas como Figma para el diseño. Con una
                            mentalidad práctica y curiosa, estoy listo para
                            enfrentar desafíos y sumarme a proyectos
                            emocionantes. ¡Échale un vistazo a mi mundo
                            tecnológico y veamos qué genialidad podemos hacer
                            juntos!
                        </p>
                    </motion.div>
                    <img src={imgMoon} className="w-[80%] md:max-w-sm" />
                </div>
            </div>
        </>
    );
}

export default Quiensoy;

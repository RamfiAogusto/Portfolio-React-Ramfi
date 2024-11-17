import React from "react";
import GroupButons from "../GroupButons";
import imgPerfil from "../../assets/recorted.png";
import { motion } from "framer-motion";

function Hero() {
    return (
        <header id="particles-Js">
            <div className="hero min-h-screen overflow-hidden mb-10 md:mb-0">
                <div className="hero-content flex-col gap-8 lg:flex-row-reverse relative">
                    
                    <motion.div
                        className="relative"
                        initial={{ x: 400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.img
                            src={imgPerfil}
                            className="max-w-sm rounded-full shadow-2xl blur2 imghero"
                            animate={{ y: [0, 10, 0, 10, 0] }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                    <div className="max-w-lg px-3">
                        <motion.h1
                            className="text-5xl font-bold relative"
                            initial={{ x: -400, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Hola, Soy Ramfi Aogusto <br></br>
                            <span className="text-[var(--primary)] text-4xl">
                                Desarrollador web
                            </span>
                        </motion.h1>
                        <motion.p
                            className="py-6 relative"
                            initial={{ x: -400, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            Mi viaje en el mundo de la programación ha sido una
                            emocionante travesía donde he adquirido habilidades
                            en diversas tecnologías. Mi enfoque no solo se
                            centra en el código, sino en la creación de
                            experiencias digitales memorables. ¡Bienvenido a mi
                            mundo de desarrollo web!
                        </motion.p>
                        <GroupButons />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;

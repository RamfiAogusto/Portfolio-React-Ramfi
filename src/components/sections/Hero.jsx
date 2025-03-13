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
                        className="relative w-[300px] h-[300px] [perspective:1000px] group"
                        animate={{ rotate: [0, 2, 0, -2, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <motion.div
                            className="relative flex items-center justify-center w-full h-full"
                            animate={{ 
                                y: [0, 10, 0, 10, 0],
                                rotate: [0, 1, 0, -1, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            {/* Efecto de resplandor detrás de la imagen */}
                            <motion.div 
                                className="absolute rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 opacity-70 blur-xl"
                                animate={{ 
                                    scale: [1, 1.05, 1, 1.05, 1],
                                    opacity: [0.5, 0.7, 0.5, 0.7, 0.5]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    zIndex: 1,
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                            
                            {/* Borde brillante animado */}
                            <motion.div 
                                className="absolute rounded-full border-2 border-opacity-50 border-white"
                                animate={{ 
                                    scale: [1, 1.1, 1],
                                    opacity: [0.2, 0.5, 0.2],
                                    borderWidth: ['2px', '4px', '2px']
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    zIndex: 2,
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                            
                            <motion.img
                                src={imgPerfil}
                                className="max-w-[250px] rounded-full shadow-[0_0_25px_rgba(0,0,0,0.3)] blur2 imghero relative border-4 border-white border-opacity-20"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 0 30px rgba(79, 70, 229, 0.6)"
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15
                                }}
                                style={{
                                    filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))',
                                    zIndex: 10
                                }}
                            />
                        </motion.div>
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

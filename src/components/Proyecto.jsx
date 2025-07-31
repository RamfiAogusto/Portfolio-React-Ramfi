import React from "react";
import { motion } from "framer-motion";
import imgGithub from "../assets/icons/github.svg";

function Proyecto(props) {
    // Variantes para animaciones optimizadas
    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                type: "spring",
                stiffness: 80,
                damping: 15,
                duration: 0.6
            }
        },
        hover: {
            y: -8,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(13, 158, 216, 0.2)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 20
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.03,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hover: {
            color: "var(--primary)",
            textShadow: "0 0 6px rgba(13, 158, 216, 0.4)",
            transition: {
                duration: 0.3
            }
        }
    };

    const skillsVariants = {
        hover: {
            scale: 1.02,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.12
            }
        }
    };

    const skillItemVariants = {
        hover: {
            y: -4,
            scale: 1.12,
            transition: {
                type: "spring",
                stiffness: 350,
                damping: 12
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.04,
            backgroundColor: "rgba(13, 158, 216, 0.12)",
            color: "var(--primary)",
            textShadow: "0 0 6px var(--primary)",
            transition: {
                duration: 0.25
            }
        }
    };

    const handleVerMasClick = (e) => {
        e.stopPropagation();
        if (props.onVerMasClick) {
            props.onVerMasClick();
        }
    };

    return (
        <motion.article
            className="proyecto-card group bg-[rgba(4,7,10,0.85)] backdrop-blur-sm border border-[rgba(13,158,216,0.15)] rounded-2xl p-5 shadow-lg hover:border-[rgba(13,158,216,0.3)] transition-all duration-500 hover:shadow-2xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-30px" }}
            role="article"
            aria-label={`Proyecto: ${props.titulo}`}
        >
            {/* Contenedor de imagen con mejor jerarquía visual */}
            <div className="proyecto-image-container overflow-hidden rounded-xl relative mb-5">
                {/* Overlay hover para detalles completos */}
                <motion.div 
                    className="proyecto-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center"
                    aria-hidden="true"
                >
                    <motion.button
                        onClick={handleVerMasClick}
                        className="bg-[rgba(13,158,216,0.95)] text-white border-2 border-[rgba(13,158,216,1)] rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:bg-[rgba(13,158,216,1)] hover:scale-105 hover:shadow-xl hover:shadow-[rgba(13,158,216,0.4)] backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[rgba(13,158,216,0.5)] focus:ring-offset-2 focus:ring-offset-transparent"
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 25px rgba(13, 158, 216, 0.5)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`Ver detalles completos de ${props.titulo}`}
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Ver detalles completos
                        </span>
                    </motion.button>
                </motion.div>
                
                {/* Overlay negro permanente en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/85 via-black/50 to-transparent pointer-events-none z-10" aria-hidden="true"></div>
                
                {/* Botón fijo en la parte inferior - mejorado para accesibilidad */}
                <motion.button
                    onClick={handleVerMasClick}
                    className="absolute bottom-3 left-3 text-white text-sm font-medium transition-all duration-300 hover:text-[var(--primary)] z-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 min-h-[44px] min-w-[44px] flex items-center"
                    whileHover={{ 
                        scale: 1.02,
                        x: 3
                    }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`Ver detalles de ${props.titulo}`}
                >
                    <span className="flex items-center gap-1.5">
                        Ver detalles
                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </motion.button>
                
                {/* Imagen con lazy loading y alt text */}
                <motion.img 
                    className="preview_container object-cover w-full h-48 sm:h-52 md:h-48" 
                    src={props.img}
                    alt={`Captura de pantalla del proyecto ${props.titulo}`}
                    loading="lazy"
                    variants={imageVariants}
                />
            </div>
            
            {/* Contenedor de información con mejor tipografía */}
            <div className="info_container mb-4">
                <motion.h3 
                    className="title_proyect text-lg sm:text-xl font-bold text-white mb-2 leading-tight"
                    variants={titleVariants}
                >
                    {props.titulo}
                </motion.h3>
                <motion.p 
                    className="descripcion text-sm text-gray-300 leading-relaxed line-clamp-3"
                >
                    {props.descripcion}
                </motion.p>
            </div>
            
            {/* Skills con mejor espaciado y accesibilidad */}
            <motion.div 
                className="skills flex mb-4 gap-2.5 flex-wrap"
                variants={skillsVariants}
                role="list"
                aria-label="Tecnologías utilizadas en este proyecto"
            >
                {props.skills.map((skill, index) => (
                    <motion.img
                        key={index}
                        src={skill}
                        alt={`Tecnología ${index + 1} utilizada en ${props.titulo}`}
                        className="max-h-6 sm:max-h-7 hover:max-h-8 transition-all duration-300"
                        variants={skillItemVariants}
                        role="listitem"
                        whileHover={{
                            y: -4,
                            scale: 1.12,
                            filter: "drop-shadow(0 0 6px rgba(13, 158, 216, 0.6))",
                            transition: {
                                type: "spring",
                                stiffness: 350,
                                damping: 12
                            }
                        }}
                    />
                ))}
            </motion.div>
            
            {/* Botones con mejor diseño y accesibilidad */}
            <div className="buttons_container flex gap-3">
                <motion.a
                    href={props.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    className="site-button flex-1 bg-[rgba(13,158,216,0.1)] text-white border border-[rgba(13,158,216,0.4)] rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-[rgba(13,158,216,0.2)] hover:border-[rgba(13,158,216,0.6)] text-center focus:outline-none focus:ring-2 focus:ring-[rgba(13,158,216,0.5)] focus:ring-offset-2 focus:ring-offset-transparent min-h-[44px] flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Ver demo en vivo de ${props.titulo}`}
                >
                    Ver demo
                </motion.a>
                
                {props.githubLink && (
                    <motion.a
                        href={props.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        whileHover={{
                            scale: 1.04,
                            rotate: 2,
                            transition: { duration: 0.25 }
                        }}
                        className="github-button bg-[rgba(13,158,216,0.1)] border border-[rgba(13,158,216,0.4)] rounded-lg px-4 py-3 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(13,158,216,0.2)] hover:border-[rgba(13,158,216,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(13,158,216,0.5)] focus:ring-offset-2 focus:ring-offset-transparent min-h-[44px] min-w-[44px]"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Ver código fuente de ${props.titulo} en GitHub`}
                    >
                        <motion.img 
                            src={imgGithub} 
                            alt="GitHub"
                            className="h-5 w-5"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.a>
                )}
            </div>
        </motion.article>
    );
}

export default Proyecto;

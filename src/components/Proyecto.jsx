import React from "react";
import { motion } from "framer-motion";
import imgGithub from "../assets/icons/github.svg";

function Proyecto(props) {
    // Variantes para animaciones
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.5
            }
        },
        hover: {
            y: -10,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(13, 158, 216, 0.4)",
            borderColor: "rgba(13, 158, 216, 0.8)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hover: {
            color: "var(--primary)",
            textShadow: "0 0 5px rgba(13, 158, 216, 0.3)",
            transition: {
                duration: 0.2
            }
        }
    };

    const skillsVariants = {
        hover: {
            scale: 1.05,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const skillItemVariants = {
        hover: {
            y: -3,
            scale: 1.1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            backgroundColor: "rgba(13, 158, 216, 0.1)",
            color: "var(--primary)",
            textShadow: "0 0 5px var(--primary)",
            transition: {
                duration: 0.2
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
            className="proyecto-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
        >
            <div className="proyecto-image-container overflow-hidden rounded-lg relative">
                <motion.div className="proyecto-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <motion.button
                        onClick={handleVerMasClick}
                        className="bg-[rgba(13,158,216,0.95)] text-white border-2 border-[rgba(13,158,216,1)] rounded-xl px-8 py-4 text-base font-semibold transition-all duration-300 hover:bg-[rgba(13,158,216,1)] hover:scale-110 hover:shadow-2xl hover:shadow-[rgba(13,158,216,0.4)] backdrop-blur-sm"
                        whileHover={{ 
                            scale: 1.1,
                            boxShadow: "0 0 30px rgba(13, 158, 216, 0.6)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Ver detalles completos
                        </span>
                    </motion.button>
                </motion.div>
                
                {/* Overlay negro permanente en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-20"></div>
                
                {/* Botón fijo en la parte inferior */}
                <motion.button
                    onClick={handleVerMasClick}
                    className="absolute bottom-3 left-3 text-white text-sm font-medium transition-all duration-300 hover:text-[var(--primary)] z-30"
                    whileHover={{ 
                        scale: 1.05,
                        x: 5
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="flex items-center gap-1">
                        Ver más
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </motion.button>
                
                <motion.img 
                    className="preview_container object-cover w-full" 
                    src={props.img}
                    variants={imageVariants}
                />
            </div>
            
            <div className="info_container">
                <motion.h5 
                    className="title_proyect"
                    variants={titleVariants}
                >
                    {props.titulo}
                </motion.h5>
                <motion.p 
                    className="descripcion text-sm text-gray-300 mt-2"
                >
                    {props.descripcion}
                </motion.p>
            </div>
            
            <motion.div 
                className="skills flex my-3 gap-3 flex-wrap"
                variants={skillsVariants}
            >
                {props.skills.map((skill, index) => (
                    <motion.img
                        key={index}
                        src={skill}
                        alt={`skill-${index}`}
                        className="max-h-7"
                        variants={skillItemVariants}
                        whileHover={{
                            y: -3,
                            scale: 1.2,
                            filter: "drop-shadow(0 0 3px rgba(13, 158, 216, 0.5))",
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 10
                            }
                        }}
                    />
                ))}
            </motion.div>
            
            <div className="buttons_container mt-4">
                <motion.a
                    href={props.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    className="site-button"
                    onClick={(e) => e.stopPropagation()}
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
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.2 }
                        }}
                        className="github-button"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.img 
                            src={imgGithub} 
                            alt="GitHub"
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

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
                <motion.div className="proyecto-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="text-white text-sm font-medium">Ver detalles</span>
                </motion.div>
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
                >
                    Ir al sitio
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

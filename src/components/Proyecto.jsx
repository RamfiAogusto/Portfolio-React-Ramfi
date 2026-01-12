import React, { memo } from "react";
import { motion } from "framer-motion";
import imgGithub from "../assets/icons/github.svg";

// Variantes movidas fuera del componente para evitar recreación
const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: { 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.4
        }
    },
    hover: {
        y: -5,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
        }
    }
};

const imageVariants = {
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const skillItemVariants = {
    hover: {
        y: -2,
        scale: 1.08,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
        }
    }
};

const buttonVariants = {
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.2
        }
    }
};

const Proyecto = memo(function Proyecto(props) {
    const handleVerMasClick = React.useCallback((e) => {
        e.stopPropagation();
        if (props.onVerMasClick) {
            props.onVerMasClick();
        }
    }, [props.onVerMasClick]);

    const handleStopPropagation = React.useCallback((e) => {
        e.stopPropagation();
    }, []);

    return (
        <motion.article
            className="proyecto-card group bg-[rgba(4,7,10,0.85)] border border-[rgba(13,158,216,0.15)] rounded-2xl p-5 shadow-lg hover:border-[rgba(13,158,216,0.3)] transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-20px" }}
            role="article"
            aria-label={`Proyecto: ${props.titulo}`}
        >
            {/* Contenedor de imagen optimizado */}
            <div className="proyecto-image-container overflow-hidden rounded-xl relative mb-4">
                {/* Overlay negro permanente - más oscuro */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/95 via-black/70 to-transparent pointer-events-none z-10" aria-hidden="true"></div>
                
                {/* Botón fijo optimizado */}
                <button
                    onClick={handleVerMasClick}
                    className="absolute bottom-3 left-3 text-white text-sm font-medium transition-all duration-200 hover:text-[var(--primary)] z-20 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1 min-h-[44px] min-w-[44px] flex items-center"
                    aria-label={`Ver detalles de ${props.titulo}`}
                >
                    <span className="flex items-center gap-1.5">
                        Ver detalles
                        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </button>
                
                {/* Imagen optimizada */}
                <motion.img 
                    className="preview_container object-cover w-full h-48 sm:h-52 md:h-48" 
                    src={props.img}
                    alt={`Captura de pantalla del proyecto ${props.titulo}`}
                    loading="lazy"
                    variants={imageVariants}
                />
            </div>
            
            {/* Contenedor de información */}
            <div className="info_container mb-4">
                <h3 className="title_proyect text-lg sm:text-xl font-bold text-white mb-2 leading-tight group-hover:text-[var(--primary)] transition-colors duration-200">
                    {props.titulo}
                </h3>
                <p className="descripcion text-sm text-gray-300 leading-relaxed line-clamp-3">
                    {props.descripcion}
                </p>
            </div>
            
            {/* Skills optimizados */}
            <div className="skills flex mb-4 gap-2.5 flex-wrap items-center min-h-[28px] sm:min-h-[32px]" role="list" aria-label="Tecnologías utilizadas en este proyecto">
                {props.skills.map((skill, index) => (
                    <motion.img
                        key={index}
                        src={skill}
                        alt={`Tecnología ${index + 1} utilizada en ${props.titulo}`}
                        className="max-h-6 sm:max-h-7"
                        variants={skillItemVariants}
                        whileHover="hover"
                        role="listitem"
                    />
                ))}
            </div>
            
            {/* Botones optimizados */}
            <div className="buttons_container flex gap-3">
                <motion.a
                    href={props.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    className="site-button flex-1 bg-[rgba(13,158,216,0.1)] text-white border border-[rgba(13,158,216,0.4)] rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-[rgba(13,158,216,0.2)] hover:border-[rgba(13,158,216,0.6)] text-center focus:outline-none focus:ring-2 focus:ring-[rgba(13,158,216,0.5)] min-h-[44px] flex items-center justify-center"
                    onClick={handleStopPropagation}
                    aria-label={`Visitar sitio de ${props.titulo}`}
                >
                    Visitar sitio
                </motion.a>
                
                {props.githubLink && (
                    <motion.a
                        href={props.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        whileHover="hover"
                        className="github-button bg-[rgba(13,158,216,0.1)] border border-[rgba(13,158,216,0.4)] rounded-lg px-4 py-3 flex items-center justify-center transition-all duration-200 hover:bg-[rgba(13,158,216,0.2)] hover:border-[rgba(13,158,216,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(13,158,216,0.5)] min-h-[44px] min-w-[44px]"
                        onClick={handleStopPropagation}
                        aria-label={`Ver código fuente de ${props.titulo} en GitHub`}
                    >
                        <img 
                            src={imgGithub} 
                            alt="GitHub"
                            className="h-5 w-5"
                        />
                    </motion.a>
                )}
            </div>
        </motion.article>
    );
});

export default Proyecto;

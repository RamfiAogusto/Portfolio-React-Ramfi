import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imgBack from "../../assets/descarga.png";
import TitleSection from "../TitleSection";

const ProyectosPrivados = () => {
    const backgroundStyle = {
        backgroundImage: `url(${imgBack})`,
    };

    return (
        <div style={backgroundStyle} className="relative w-full min-h-screen py-20 px-4">
            {/* Botón para volver al landing */}
            <div className="max-w-7xl mx-auto mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition-all duration-300 font-medium"
                        aria-label="Volver al inicio"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Volver al Inicio
                    </Link>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Título de la página */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <TitleSection>Proyectos en Desarrollo</TitleSection>
                    <p className="text-gray-300 text-lg mt-4">
                        Trabajos actuales y proyectos en curso
                    </p>
                </motion.div>

                {/* Contenido de proyectos - Aquí puedes agregar tus proyectos privados */}
                <motion.div
                    className="text-center py-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-gray-400 text-lg">
                        No hay proyectos privados disponibles en este momento.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Agrega tus proyectos en desarrollo en el componente ProyectosPrivados.jsx
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default ProyectosPrivados;

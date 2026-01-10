import React, { useState } from "react";
import iconInsta from "../../assets/icons/instagram_dark.svg";
import iconLink from "../../assets/icons/linkedin.svg";
import iconGit from "../../assets/icons/github.svg";
import iconCopy from "../../assets/icons/copy-svgrepo-com.svg";
import { motion } from "framer-motion";
import TitleSection from "../TitleSection";

function Contactos() {
    const correo = "ramfiaogusto@gmail.com";
    const [copiado, setCopiado] = useState(false);
    
    const copy = () => {
        navigator.clipboard
            .writeText(correo)
            .then(() => {
                setCopiado(true);
                setTimeout(() => setCopiado(false), 2000);
            })
            .catch(() => console.error("Error al copiar portapapeles"));
    };

    // Variantes para animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <motion.section
            id="contactos"
            className="contactos-section py-16 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "-100px 0px" }}
            variants={containerVariants}
        >
            {/* Elementos decorativos */}
            <motion.div 
                className="absolute -z-10 w-64 h-64 rounded-full bg-[var(--primary-light)] opacity-10 blur-3xl"
                style={{ top: '10%', right: '0' }}
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
            />
            
            <motion.div 
                className="absolute -z-10 w-72 h-72 rounded-full bg-[var(--primary-light)] opacity-10 blur-3xl"
                style={{ bottom: '15%', left: '0' }}
                animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.15, 0.05]
                }}
                transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <div className="container mx-auto px-4">
                <motion.div 
                    className="mb-12 text-center"
                    variants={itemVariants}
                >
                    <TitleSection>Contacto</TitleSection>
                </motion.div>

                <motion.div 
                    className="subtitulo title-decoration mb-10"
                    initial={{ opacity: 0, width: "0%" }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <ul className="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </motion.div>

                <div className="flex flex-col lg:flex-row justify-center items-start gap-12 max-w-6xl mx-auto">
                    <motion.div 
                        className="formulario-container w-full lg:w-3/5"
                        variants={itemVariants}
                    >
                        <motion.div 
                            className=" backdrop-blur-sm border border-[rgba(13,158,216,0.2)] rounded-xl p-8 shadow-lg"
                            whileHover={{ 
                                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(13, 158, 216, 0.4)",
                                borderColor: "rgba(13, 158, 216, 0.5)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-[var(--primary)]">Envíame un mensaje</h3>
                            
                            <form
                                action="https://formspree.io/f/mvoezknb"
                                method="POST"
                                id="miFormulario"
                                className="flex flex-col w-full"
                            >
                                <motion.div 
                                    className="mb-6"
                                    variants={itemVariants}
                                >
                                    <label className="block text-gray-300 mb-2 font-medium">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Ingrese su nombre"
                                        className="w-full bg-[rgba(13,158,216,0.05)] outline-none border border-[rgba(13,158,216,0.3)] rounded-lg h-12 text-white p-3 box-border text-base transition-all duration-300 focus:border-[var(--primary)] focus:shadow-[0_0_8px_rgba(13,158,216,0.5)]"
                                        required
                                    />
                                </motion.div>

                                <motion.div 
                                    className="mb-6"
                                    variants={itemVariants}
                                >
                                    <label className="block text-gray-300 mb-2 font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Ingrese su correo"
                                        className="w-full bg-[rgba(13,158,216,0.05)] outline-none border border-[rgba(13,158,216,0.3)] rounded-lg h-12 text-white p-3 box-border text-base transition-all duration-300 focus:border-[var(--primary)] focus:shadow-[0_0_8px_rgba(13,158,216,0.5)]"
                                        required
                                    />
                                </motion.div>

                                <motion.div 
                                    className="mb-6"
                                    variants={itemVariants}
                                >
                                    <label className="block text-gray-300 mb-2 font-medium">Mensaje</label>
                                    <textarea
                                        name="message"
                                        className="w-full bg-[rgba(13,158,216,0.05)] outline-none border border-[rgba(13,158,216,0.3)] rounded-lg h-40 text-white p-3 box-border text-base transition-all duration-300 focus:border-[var(--primary)] focus:shadow-[0_0_8px_rgba(13,158,216,0.5)] resize-none"
                                        placeholder="Ingrese su mensaje"
                                        required
                                    ></textarea>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    id="button-enviar"
                                    className="px-6 py-3 text-base font-semibold bg-[rgba(13,158,216,0.1)] rounded-lg border border-[rgba(13,158,216,0.5)] text-white transition-all duration-300 hover:bg-[rgba(13,158,216,0.2)] hover:shadow-[0_0_15px_rgba(13,158,216,0.4)] hover:border-[rgba(13,158,216,0.8)]"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    variants={itemVariants}
                                >
                                    Enviar mensaje
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="contactos-info w-full lg:w-2/5"
                        variants={itemVariants}
                    >
                        <motion.div 
                            className=" backdrop-blur-sm border border-[rgba(13,158,216,0.2)] rounded-xl p-8 shadow-lg"
                            whileHover={{ 
                                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(13, 158, 216, 0.4)",
                                borderColor: "rgba(13, 158, 216, 0.5)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <h3 className="text-2xl font-bold mb-8 text-[var(--primary)]">Conectemos</h3>
                            
                            <div className="mb-10">
                                <h4 className="text-lg font-medium mb-4 text-gray-300">Redes sociales</h4>
                                <div className="flex gap-4">
                                    <motion.a
                                        href="https://www.linkedin.com/in/ramfi-aogusto-de-la-cruz-geraldino-aa64b5272"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center bg-[rgba(13,158,216,0.1)] rounded-lg border border-[rgba(13,158,216,0.3)] transition-all duration-300 hover:bg-[rgba(13,158,216,0.2)] hover:border-[rgba(13,158,216,0.6)]"
                                        whileHover={{ 
                                            y: -5,
                                            boxShadow: "0 5px 15px rgba(13, 158, 216, 0.3)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <img
                                            src={iconLink}
                                            alt="LinkedIn"
                                            className="w-6 h-6"
                                        />
                                    </motion.a>
                                    
                                    <motion.a
                                        href="https://github.com/RamfiAogusto"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center bg-[rgba(13,158,216,0.1)] rounded-lg border border-[rgba(13,158,216,0.3)] transition-all duration-300 hover:bg-[rgba(13,158,216,0.2)] hover:border-[rgba(13,158,216,0.6)]"
                                        whileHover={{ 
                                            y: -5,
                                            boxShadow: "0 5px 15px rgba(13, 158, 216, 0.3)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <img
                                            src={iconGit}
                                            alt="GitHub"
                                            className="w-6 h-6"
                                        />
                                    </motion.a>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-medium mb-4 text-gray-300">Correo electrónico</h4>
                                <motion.div 
                                    className="flex items-center p-4 bg-[rgba(13,158,216,0.05)] rounded-lg border border-[rgba(13,158,216,0.2)]"
                                    whileHover={{ 
                                        backgroundColor: "rgba(13,158,216,0.1)",
                                        borderColor: "rgba(13,158,216,0.4)"
                                    }}
                                >
                                    <motion.button
                                        className="w-10 h-10 flex items-center justify-center bg-[rgba(13,158,216,0.1)] rounded-lg border border-[rgba(13,158,216,0.3)] mr-4 transition-all duration-300 hover:bg-[rgba(13,158,216,0.2)]"
                                        onClick={copy}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <img
                                            src={iconCopy}
                                            alt="Copiar"
                                            className="w-5 h-5"
                                        />
                                    </motion.button>
                                    
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-400 mb-1">
                                            {copiado ? "¡Copiado!" : "Copiar email"}
                                        </span>
                                        <span className="text-white font-medium">{correo}</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contactos;

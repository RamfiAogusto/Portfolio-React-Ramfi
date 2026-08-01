/* import iconInsta from "../assets/icons/instagram_dark.svg"; */
import iconLinkedin from "../assets/icons/linkedin.svg";
import iconGithub from "../assets/icons/github.svg";
import Cv from "../assets/archivos/CV Ramfi Aogusto Desarrollador Web React.pdf";
import { motion } from "framer-motion";

function GroupButons() {
    // Variantes para animaciones
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };
    
    const iconVariants = {
        hidden: { scale: 0, rotate: -20 },
        visible: { 
            scale: 1, 
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        },
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    // Glow de fondo: solo corre mientras el <motion.a> padre está en hover (hereda "hover" via whileHover del padre)
    const glowPulseVariants = {
        rest: { opacity: 0 },
        hover: {
            opacity: 1,
            background: [
                'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)'
            ],
            transition: { duration: 2, repeat: Infinity }
        }
    };

    return (
        <motion.div
            className="group-buttons flex flex-col sm:flex-row items-center gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.a
                variants={itemVariants}
                whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 10px 25px rgba(13, 158, 216, 0.3)"
                }}
                whileTap={{ scale: 0.98, y: -2 }}
                id="btn"
                download="CV Ramfi Aogusto Desarrollador Web React.pdf"
                href={Cv}
                className="relative overflow-hidden px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 min-w-[180px] bg-primary/10 border border-primary/40 hover:bg-primary/20 hover:border-primary/60 transition-colors duration-200"
                aria-label="Descargar CV"
                tabIndex="0"
            >
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[rgba(79,70,229,0.2)] z-[-1]"
                />
                
                <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Descargar CV
                </motion.span>
                
                <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="ml-1"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </motion.svg>
            </motion.a>
            
            <motion.div 
                className="social-icons flex gap-4"
                variants={containerVariants}
            >
                <motion.a
                    variants={itemVariants}
                    whileHover="hover"
                    href="https://www.linkedin.com/in/ramfi-aogusto-de-la-cruz-geraldino-aa64b5272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-container relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-[rgba(79,70,229,0.1)] border border-[rgba(255,255,255,0.15)] overflow-hidden group"
                    aria-label="LinkedIn"
                    tabIndex="0"
                >
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-[#0077B5] to-[#0e76a8] opacity-0 transition-opacity duration-300 z-[-1]"
                        whileHover={{ opacity: 0.2 }}
                    />
                    
                    <motion.div
                        className="absolute inset-0 bg-[rgba(255,255,255,0.1)] z-[-1]"
                        variants={glowPulseVariants}
                        initial="rest"
                    />
                    
                    <motion.div
                        variants={iconVariants}
                        className="w-6 h-6 flex items-center justify-center"
                    >
                        <img
                            src={iconLinkedin}
                            alt="LinkedIn"
                            className="w-full h-full object-contain"
                            loading="lazy"
                        />
                    </motion.div>
                </motion.a>
                
                <motion.a
                    variants={itemVariants}
                    whileHover="hover"
                    href="https://github.com/RamfiAogusto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-container relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-[rgba(79,70,229,0.1)] border border-[rgba(255,255,255,0.15)] overflow-hidden group"
                    aria-label="GitHub"
                    tabIndex="0"
                >
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-[#333] to-[#24292e] opacity-0 transition-opacity duration-300 z-[-1]"
                        whileHover={{ opacity: 0.2 }}
                    />
                    
                    <motion.div
                        className="absolute inset-0 bg-[rgba(255,255,255,0.1)] z-[-1]"
                        variants={glowPulseVariants}
                        initial="rest"
                    />
                    
                    <motion.div
                        variants={iconVariants}
                        className="w-6 h-6 flex items-center justify-center"
                    >
                        <img
                            src={iconGithub}
                            alt="GitHub"
                            className="w-full h-full object-contain"
                            loading="lazy"
                        />
                    </motion.div>
                </motion.a>
            </motion.div>
        </motion.div>
    );
}

export default GroupButons;

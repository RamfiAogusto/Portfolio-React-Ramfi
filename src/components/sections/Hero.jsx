import React, { memo } from "react";
import GroupButons from "../GroupButons";
import imgPerfil from "../../assets/recorted.png";
import { motion } from "framer-motion";

// Variantes movidas fuera del componente para evitar recreación
const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
        transition: {
            delay: i * 0.2,
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    })
};

const imageVariants = {
    hover: {
        scale: 1.03,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const glowVariants = {
    animate: {
        scale: [1, 1.05, 1, 1.05, 1],
        opacity: [0.5, 0.7, 0.5, 0.7, 0.5],
        rotate: [0, 90, 180, 270, 360],
        transition: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
        }
    }
};

const borderVariants = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.5, 0.2],
        borderWidth: ['2px', '4px', '2px'],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        }
    }
};

const orbitVariants = (index) => ({
    animate: {
        x: [0, Math.cos(index * Math.PI/1.5) * 150, 0],
        y: [0, Math.sin(index * Math.PI/1.5) * 150, 0],
        opacity: [0.7, 1, 0.7],
        transition: {
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
        }
    }
});

const lineVariants = {
    hidden: { width: 0 },
    visible: { 
        width: "100%",
        transition: { delay: 1.2, duration: 0.8 }
    }
};

const shineVariants = {
    animate: {
        x: ['-100%', '200%'],
        transition: { 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
        }
    }
};

const particleVariants2 = (i) => ({
    animate: {
        x: ['-10%', '110%'],
        opacity: [0, 0.9, 0],
        scale: [0.5, 1.5, 0.5],
        transition: { 
            duration: 2 + i * 0.3, 
            repeat: Infinity, 
            ease: "linear",
            delay: i * 0.4 + 1.5,
            repeatDelay: i * 0.2
        }
    }
});

const pulseVariants = {
    animate: {
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const dotVariants = (i) => ({
    animate: {
        opacity: [0, 0.8, 0],
        scale: [0, 1.2, 0],
        y: [-1, 0, 1],
        transition: { 
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            delay: i * 0.3 + 2
        }
    }
});

const colorVariants = {
    animate: {
        color: [
            "rgb(156, 163, 175)", 
            "rgb(13, 158, 216)", 
            "rgb(156, 163, 175)"
        ],
        transition: { duration: 3, repeat: Infinity }
    }
};

// Generar partículas decorativas fuera del componente
const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3
}));

const Hero = memo(function Hero() {
    return (
        <header id="particles-Js" className="relative overflow-hidden">
            {/* Partículas decorativas optimizadas */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-[var(--primary-light)] opacity-30 z-0"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    custom={particle.delay}
                    variants={particleVariants}
                    initial="hidden"
                    animate="visible"
                />
            ))}

            {/* Fondo animado optimizado */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[rgba(13,158,216,0.03)] to-transparent z-0"
                style={{
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)'
                }}
                animate={{ 
                    background: [
                        'radial-gradient(circle at 20% 30%, rgba(13,158,216,0.05) 0%, rgba(0,0,0,0) 70%)',
                        'radial-gradient(circle at 80% 70%, rgba(13,158,216,0.05) 0%, rgba(0,0,0,0) 70%)',
                        'radial-gradient(circle at 20% 30%, rgba(13,158,216,0.05) 0%, rgba(0,0,0,0) 70%)'
                    ]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="hero min-h-screen overflow-hidden mb-10 md:mb-0 relative z-10">
                <div className="hero-content flex-col gap-8 lg:flex-row-reverse relative">
                    
                    <motion.div
                        className="relative w-[300px] h-[300px] [perspective:1000px] group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1,
                            rotate: [0, 2, 0, -2, 0]
                        }}
                        transition={{
                            opacity: { duration: 0.5 },
                            scale: { duration: 0.8, ease: "easeOut" },
                            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <motion.div
                            className="relative flex items-center justify-center w-full h-full"
                            animate={{ 
                                y: [0, 10, 0, 10, 0],
                                rotate: [0, 1, 0, -1, 0]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            {/* Efecto de resplandor optimizado */}
                            <motion.div 
                                className="absolute rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 opacity-70 blur-xl"
                                variants={glowVariants}
                                animate="animate"
                                style={{
                                    zIndex: 1,
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                            
                            {/* Borde brillante optimizado */}
                            <motion.div 
                                className="absolute rounded-full border-2 border-opacity-50 border-white"
                                variants={borderVariants}
                                animate="animate"
                                style={{
                                    zIndex: 2,
                                    width: '100%',
                                    height: '100%'
                                }}
                            />

                            {/* Círculos orbitando optimizados */}
                            {[...Array(3)].map((_, index) => (
                                <motion.div
                                    key={index}
                                    className="absolute rounded-full bg-[var(--primary)] opacity-70"
                                    style={{
                                        width: 10 - index * 2,
                                        height: 10 - index * 2,
                                        zIndex: 3
                                    }}
                                    variants={orbitVariants(index)}
                                    animate="animate"
                                />
                            ))}
                            
                            <motion.img
                                src={imgPerfil}
                                className="max-w-[250px] rounded-full shadow-[0_0_25px_rgba(0,0,0,0.3)] blur2 imghero relative border-4 border-white border-opacity-20"
                                variants={imageVariants}
                                whileHover="hover"
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
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-4"
                        >
                            <motion.span 
                                className="inline-block px-4 py-1 rounded-full bg-[rgba(13,158,216,0.1)] text-[var(--primary)] text-sm font-medium border border-[rgba(13,158,216,0.3)] mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                Desarrollador Web Full Stack
                            </motion.span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl font-bold relative"
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.span 
                                className="block"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                            >
                                Hola, Soy
                            </motion.span>
                            <motion.span 
                                className="text-[var(--primary)] relative inline-block"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.7 }}
                            >
                                Ramfi Aogusto
                                
                                {/* Línea animada optimizada */}
                                <motion.div 
                                    className="absolute -bottom-3 left-0 h-1 w-full overflow-hidden rounded-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                >
                                    {/* Fondo base de la línea con gradiente */}
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-[#0d9ed8] via-[#4f46e5] to-[#0d9ed8]"
                                        variants={lineVariants}
                                        initial="hidden"
                                        animate="visible"
                                    />
                                    
                                    {/* Efecto de brillo optimizado */}
                                    <motion.div 
                                        className="absolute top-0 h-full bg-gradient-to-r from-transparent via-white to-transparent"
                                        style={{ width: '50%' }}
                                        variants={shineVariants}
                                        animate="animate"
                                    />
                                    
                                    {/* Partículas brillantes optimizadas */}
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute top-0 h-full w-1 rounded-full bg-white"
                                            variants={particleVariants2(i)}
                                            animate="animate"
                                        />
                                    ))}
                                    
                                    {/* Efecto de pulso optimizado */}
                                    <motion.div
                                        className="absolute inset-0 bg-[var(--primary)]"
                                        variants={pulseVariants}
                                        animate="animate"
                                    />
                                    
                                    {/* Puntos decorativos optimizados */}
                                    {[...Array(4)].map((_, i) => {
                                        const position = 10 + i * 25;
                                        return (
                                            <motion.div
                                                key={`dot-${i}`}
                                                className="absolute top-0 h-full w-1 rounded-full bg-white"
                                                style={{ left: `${position}%` }}
                                                variants={dotVariants(i)}
                                                animate="animate"
                                            />
                                        );
                                    })}
                                </motion.div>
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="mt-6 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.7 }}
                        >
                            <h2 className="text-2xl font-medium text-gray-300 flex items-center">
                                <motion.span
                                    variants={colorVariants}
                                    animate="animate"
                                    className="mr-2"
                                >
                                    &lt;
                                </motion.span>
                                Creando experiencias web
                                <motion.span
                                    variants={colorVariants}
                                    animate="animate"
                                    className="ml-2"
                                >
                                    /&gt;
                                </motion.span>
                            </h2>
                        </motion.div>

                        <motion.p
                            className="py-4 text-gray-300 leading-relaxed relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.7 }}
                        >
                            Mi viaje en el mundo de la programación ha sido una
                            emocionante travesía donde he adquirido habilidades
                            en diversas tecnologías. Mi enfoque no solo se
                            centra en el código, sino en la creación de
                            experiencias digitales memorables. ¡Bienvenido a mi
                            mundo de desarrollo web!
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3, duration: 0.7 }}
                            className="custom-buttons-container"
                        >
                            <GroupButons />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Líneas decorativas optimizadas */}
            <motion.div 
                className="absolute bottom-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(13,158,216,0.3)] to-transparent z-10"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            />
        </header>
    );
});

export default Hero;

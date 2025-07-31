import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Proyecto from "../Proyecto";
import TitleSection from "../TitleSection";
import drafa from "../../assets/proyectos/drafapeluqueria.png";
import Burger from "../../assets/proyectos/Burger.jpg";
import Shorten from "../../assets/proyectos/shorten.jpg";
import Hoster from "../../assets/proyectos/hosterStarter.jpg";
import Migracion from "../../assets/proyectos/Migracion.jpg";
import RestaurantVic from "../../assets/proyectos/restaurant-vic.png";
import Close from "../../assets/icons/close-circle-svgrepo-com.svg";
// Importar iconos
import iconCss from "../../assets/skills/CSS.png";
import iconGithub from "../../assets/skills/GitHub.png";
import iconHtml from "../../assets/skills/HTML.png";
import iconJavascript from "../../assets/skills/Javascript.png";
import iconNodejs from "../../assets/skills/NodeJS.png";
import iconReact from "../../assets/skills/ReactJS.png";
import iconReactRouter from "../../assets/skills/reactrouter.svg";
import iconTailwind from "../../assets/skills/TailwindCSS.png";
import iconBootstrap from "../../assets/skills/bootstrap (4).svg";
import iconApi from "../../assets/skills/api.png";
import iconGit from "../../assets/skills/Git.png";
import iconVite from "../../assets/skills/vite.svg";
import JsonVisualizer from "../../assets/proyectos/Json.png";
function Proyectos() {
    const [selectedId, setSelectedId] = useState(null);
    const containerRef = useRef(null);

    // Variantes para animaciones
    const sectionVariants = {
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

    const titleVariants = {
        hidden: { y: -30, opacity: 0 },
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const modalContentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const proyectos = [
        {
            id: 1,
            titulo: "D'Rafa Peluquería",
            descripcion:
                "Sitio web corporativo completo para una peluquería. Proyecto Full Stack con enfoque en SEO local y conversión de visitantes.",
            descripcion2: `## **Sitio Web para Peluquería - Proyecto Full Stack**

Desarrollé un sitio web corporativo completo para un cliente del sector servicios. El proyecto incluyó desde el diseño hasta el deployment, con enfoque en SEO local y conversión de visitantes.

**Stack técnico:**
Next.js 15, React, TypeScript, TailwindCSS, Framer Motion

**Funcionalidades implementadas:**
- Landing page con animaciones y secciones interactivas
- Sistema de formularios con validación (Formspree)
- Galería responsiva con modal de imágenes
- Integración WhatsApp para conversiones
- SEO optimizado con structured data
- Sistema de routing con múltiples páginas

**Desafíos técnicos resueltos:**
- Problemas de hidratación SSR/CSR
- Optimización de animaciones para rendimiento
- Configuración de build para deployment en Vercel
- Implementación de schema markup para SEO local

**Herramientas:**
Vercel para deployment, GitHub para versionado, Formspree para formularios

Un proyecto completo que me permitió trabajar con tecnologías modernas de React y resolver problemas reales de performance y SEO.`,
            img: drafa,
            skills: [
                iconReact,
                iconTailwind,
                iconJavascript,
                iconReactRouter,
            ],
            githubLink: null,
            siteLink: "https://drafapeluqueria.com",
        },
        {
            id: 2,
            titulo: "JSON Visualizador",
            descripcion:
                "Una herramienta moderna e interactiva para visualizar y editar estructuras JSON de manera intuitiva. Transforma datos JSON complejos en diagramas visuales.",
            descripcion2:
                `JSON Visualizador es una aplicación web que permite a los desarrolladores trabajar con estructuras JSON de manera visual e interactiva. El proyecto fue desarrollado con React y Vite, utilizando TailwindCSS para el diseño de la interfaz.

Entre sus características principales destacan:
- Editor de código avanzado con resaltado de sintaxis y autocompletado
- Visualización de diagramas que representan gráficamente la estructura JSON
- Validación en tiempo real del código JSON
- Funcionalidad de importación y exportación de archivos
- Diseño completamente responsive para todos los dispositivos

Este proyecto demuestra mis habilidades en el desarrollo de herramientas para desarrolladores, con un enfoque en la creación de interfaces intuitivas que mejoran el flujo de trabajo.`,
            img: JsonVisualizer,
            skills: [iconReact, iconTailwind, iconJavascript, iconNodejs, iconVite || iconReact],
            githubLink: "https://github.com/RamfiAogusto/JsonVisualizer",
            siteLink: "https://json-visualizer-three.vercel.app/",
        },
        {
            id: 3,
            titulo: "Restaurant Vic",
            descripcion:
                "Un sitio web de Un restaurante creado con react, incluye un menu y categorias de los platos",
            descripcion2:
                `"Restaurant Vic" es un proyecto web desarrollado individualmente en el transcurso de tres dias. El objetivo principal fue crear una plataforma en línea para presentar un restaurante y su menú, organizado por categorías, con el fin de atraer a los clientes y permitirles explorar los platos disponibles. \n\nComo desarrollador único del proyecto, fui responsable de todos los aspectos del desarrollo, desde la conceptualización hasta la implementación final. Utilicé React.js como framework principal, aprovechando sus capacidades para crear una interfaz de usuario dinámica y responsive. \n\nTailwind CSS se empleó para estilizar la aplicación de manera eficiente, mientras que React Router se utilizó para la navegación entre las diferentes secciones del sitio El proyecto demuestra habilidades en el desarrollo front-end, con un enfoque en la creación de interfaces de usuario atractivas y funcionales para el sector de la restauración.`,
            img: RestaurantVic,
            skills: [iconReact, iconTailwind, /* iconNodejs,  */iconReactRouter],
            githubLink: "https://github.com/RamfiAogusto/Restaurant-Vic",
            siteLink: "https://restaurant-vic.vercel.app/",
        },
        {
            id: 4,
            titulo: "Migración de tecnología",
            descripcion:
                "En este proyecto realizo la Migracion de mi portafolio de los lenguajes HTML, CSS y JavaScript a React.",
            descripcion2:
                "En este proyecto realizo la Migracion de mi portafolio de los lenguajes HTML, CSS y JavaScript a React, Con el objetivo de facilitar el mantenimiento del portafolio al dividirlo en componentes y utilizar multiples herramientas que proporciona React y la comunidad para hacer mi portafolio mas atractivo visualmente y que sea mas fácil de mantener.",
            img: Migracion,
            skills: [
                iconHtml,
                iconTailwind,
                iconJavascript,
                iconReact,
                /* iconNodejs, */
            ],
            githubLink: "https://github.com/RamfiAogusto/Portfolio-React-Ramfi",
            siteLink: "/",
        },
        {
            id: 5,
            titulo: "Shorten API",
            descripcion:
                "Shorten es un challenge de frontendmentor, Consiste en una pagina responsiva que permite cortar enlaces con el uso de una API y guardar el historial de los enlaces acortados.",
            descripcion2:
                "Shorten es un challenge de frontendmentor, Consiste en una pagina responsiva que permite cortar enlaces con el uso de una API y guardar el historial de los enlaces acortados.",
            img: Shorten,
            skills: [
                iconHtml,
                iconCss,
                iconJavascript,
                iconApi,
                iconGit,
                iconGithub,
            ],
            githubLink:
                "https://github.com/RamfiAogusto/url-shortening-api-master.github.io",
            siteLink:
                "https://ramfiaogusto.github.io/url-shortening-api-master.github.io/",
        },
        {
            id: 6,
            titulo: "Hoster Starter",
            descripcion:
                "Este proyecto es una landing page sencilla que ofrece el servicio de hosting.",
            descripcion2:
                "Este proyecto es una landing page sencilla que ofrece el servicio de hosting.",
            img: Hoster,
            skills: [iconHtml, iconCss, iconJavascript, iconGit, iconGithub],
            githubLink:
                "https://github.com/RamfiAogusto/url-shortening-api-master.github.io",
            siteLink:
                "https://ramfiaogusto.github.io/url-shortening-api-master.github.io/",
        },
    ];

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setSelectedId(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [containerRef]);

    return (
        <motion.section
            id="proyectos"
            className="proyectos-section py-16 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            {/* Elementos decorativos */}
            <motion.div 
                className="absolute -z-10 w-64 h-64 rounded-full bg-[var(--primary-light)] opacity-10 blur-3xl"
                style={{ top: '10%', right: '-5%' }}
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
            />
            
            <motion.div 
                className="absolute -z-10 w-72 h-72 rounded-full bg-[var(--primary-light)] opacity-10 blur-3xl"
                style={{ bottom: '15%', left: '-10%' }}
                animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.15, 0.05]
                }}
                transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                }}
            />
            
            <div className="container mx-auto px-4">
                <motion.div variants={titleVariants} className="mb-12">
                    <TitleSection>Últimos proyectos</TitleSection>
                </motion.div>
                
                <motion.div 
                    className="flex flex-wrap justify-center gap-8"
                    variants={containerVariants}
                >
                    {proyectos.map((proyecto, index) => (
                        <motion.div
                            key={proyecto.id}
                            className="proyecto-wrapper w-full sm:w-[450px] md:w-[400px] lg:w-[350px]"
                            variants={containerVariants}
                            custom={index}
                        >
                            <Proyecto
                                titulo={proyecto.titulo}
                                descripcion={proyecto.descripcion}
                                skills={proyecto.skills}
                                githubLink={proyecto.githubLink}
                                siteLink={proyecto.siteLink}
                                img={proyecto.img}
                                onVerMasClick={() => setSelectedId(proyecto.id)}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                        />
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <motion.div
                                className="w-11/12 md:w-4/5 lg:w-3/4 max-h-[85vh] p-6 rounded-xl bg-[rgba(4,7,10,0.95)] border border-[rgba(13,158,216,0.3)] shadow-2xl overflow-auto"
                                ref={containerRef}
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {proyectos.map((proyecto) => {
                                    if (proyecto.id === selectedId) {
                                        return (
                                            <div
                                                key={proyecto.id}
                                                className="flex relative flex-col md:flex-row gap-6 h-full"
                                            >
                                                <motion.div 
                                                    className="flex-none md:w-2/5 mx-auto md:mx-0 max-w-full"
                                                    variants={modalContentVariants}
                                                >
                                                    <motion.div className="relative rounded-lg overflow-hidden shadow-lg">
                                                        <motion.img
                                                            src={proyecto.img}
                                                            className="w-full h-auto rounded-lg"
                                                            initial={{ scale: 1 }}
                                                            whileHover={{ scale: 1.05 }}
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                        <motion.div 
                                                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"
                                                        />
                                                    </motion.div>
                                                    
                                                    <motion.div 
                                                        className="skills flex flex-wrap my-4 gap-3 justify-center md:justify-start"
                                                        variants={modalContentVariants}
                                                    >
                                                        {proyecto.skills.map(
                                                            (skill, index) => (
                                                                <motion.img
                                                                    key={index}
                                                                    src={skill}
                                                                    alt={`skill-${index}`}
                                                                    className="max-h-8"
                                                                    whileHover={{ 
                                                                        y: -3, 
                                                                        scale: 1.2,
                                                                        filter: "drop-shadow(0 0 3px rgba(13, 158, 216, 0.5))"
                                                                    }}
                                                                />
                                                            )
                                                        )}
                                                    </motion.div>
                                                    
                                                    <motion.div 
                                                        className="flex gap-4 mt-4"
                                                        variants={modalContentVariants}
                                                    >
                                                        <motion.a
                                                            href={proyecto.siteLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex-1 py-3 px-4 bg-[rgba(13,158,216,0.1)] text-white border border-[rgba(13,158,216,0.5)] rounded-lg text-center font-medium transition-all"
                                                            whileHover={{ 
                                                                backgroundColor: "rgba(13,158,216,0.2)",
                                                                boxShadow: "0 0 15px rgba(13,158,216,0.3)"
                                                            }}
                                                        >
                                                            Visitar sitio
                                                        </motion.a>
                                                        
                                                        {proyecto.githubLink && (
                                                            <motion.a
                                                                href={proyecto.githubLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="py-3 px-4 bg-[rgba(13,158,216,0.1)] text-white border border-[rgba(13,158,216,0.5)] rounded-lg flex items-center justify-center transition-all"
                                                                whileHover={{ 
                                                                    backgroundColor: "rgba(13,158,216,0.2)",
                                                                    boxShadow: "0 0 15px rgba(13,158,216,0.3)"
                                                                }}
                                                            >
                                                                <img src={iconGithub} alt="GitHub" className="h-6" />
                                                            </motion.a>
                                                        )}
                                                    </motion.div>
                                                </motion.div>
                                                
                                                <motion.div 
                                                    className="flex-1 pr-2"
                                                    variants={modalContentVariants}
                                                >
                                                    <motion.h2 
                                                        className="text-3xl font-bold text-[var(--primary)] mb-4 text-center md:text-left"
                                                        variants={modalContentVariants}
                                                    >
                                                        {proyecto.titulo}
                                                    </motion.h2>
                                                    
                                                    <motion.div 
                                                        className="whitespace-pre-wrap text-gray-300 leading-relaxed"
                                                        variants={modalContentVariants}
                                                    >
                                                        {proyecto.descripcion2.split('\n\n').map((paragraph, i) => (
                                                            <p key={i} className="mb-4">{paragraph}</p>
                                                        ))}
                                                    </motion.div>
                                                </motion.div>
                                                
                                                <motion.button
                                                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(13,158,216,0.1)] border border-[rgba(13,158,216,0.3)]"
                                                    onClick={() => setSelectedId(null)}
                                                    whileHover={{ 
                                                        scale: 1.1,
                                                        backgroundColor: "rgba(13,158,216,0.2)"
                                                    }}
                                                    variants={modalContentVariants}
                                                >
                                                    <img src={Close} className="w-5 h-5" />
                                                </motion.button>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </motion.section>
    );
}

export default Proyectos;

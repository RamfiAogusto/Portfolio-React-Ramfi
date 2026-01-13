import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import Proyecto from "../Proyecto";
import TitleSection from "../TitleSection";
import imgBack from "../../assets/descarga.png";
import Close from "../../assets/icons/close-circle-svgrepo-com.svg";
import iconGithub from "../../assets/icons/github.svg";
// Importar iconos de skills
import iconCss from "../../assets/skills/CSS.png";
import iconHtml from "../../assets/skills/HTML.png";
import iconJavascript from "../../assets/skills/Javascript.png";
import iconNodejs from "../../assets/skills/NodeJS.png";
import iconReact from "../../assets/skills/ReactJS.png";
import iconReactRouter from "../../assets/skills/reactrouter.svg";
import iconTailwind from "../../assets/skills/TailwindCSS.png";
import iconApi from "../../assets/skills/api.png";
import iconExpressjs from "../../assets/skills/expressjs_dark.svg";
import iconTypescript from "../../assets/skills/typescript.svg";
import iconPostgresql from "../../assets/skills/postgresql.svg";
import iconMongodb from "../../assets/skills/mongodb.svg";
import iconWordpress from "../../assets/skills/wordpress.svg";
import iconPhp from "../../assets/skills/PHP.png";
import iconElementor from "../../assets/skills/elementor.svg";
import iconStrapi from "../../assets/skills/strapi.svg";
// Importar imágenes de proyectos
import imgBancoVimenca from "../../assets/proyectos/privados/Bancovimenca.png";
import imgGrupoVimenca from "../../assets/proyectos/privados/grupovimenca.png";
import imgAdecc from "../../assets/proyectos/privados/adecc.jpg";

// Imagen placeholder para proyectos sin imagen específica
const placeholderImg = "https://via.placeholder.com/600x400/0d9ed8/ffffff?text=Proyecto+Web";
const placeholderBackend = "https://via.placeholder.com/600x400/1a1a2e/0d9ed8?text=Backend+API";

const ProyectosPrivados = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [currentCategory, setCurrentCategory] = useState("todos");
    const [currentPage, setCurrentPage] = useState(1);
    const containerRef = useRef(null);

    const ITEMS_PER_PAGE = 6;

    const backgroundStyle = {
        backgroundImage: `url(${imgBack})`,
    };

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

    const filterVariants = {
        hidden: { opacity: 0, y: -20 },
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

    // Proyectos privados
    const proyectos = [
        {
            id: 1,
            titulo: "Banco Vimenca",
            categoria: "fullstack",
            descripcion: "Sitio web corporativo para institución financiera desarrollado con React, TypeScript y TailwindCSS.",
            descripcion2: `Banco Vimenca - Proyecto Corporativo Full Stack

Desarrollo completo del sitio web corporativo para Banco Vimenca, una institución financiera líder en República Dominicana.

Stack Técnico:
Frontend: React, TypeScript, React Router, TailwindCSS
Backend: Node.js, Express, Strapi (Headless CMS)

Características Principales:
• Diseño responsivo y moderno optimizado para conversión
• Arquitectura escalable con TypeScript para mayor robustez
• Sistema de navegación fluido con React Router
• Integración con Strapi CMS para gestión de contenido dinámico
• API RESTful para comunicación frontend-backend
• Optimización SEO y rendimiento
• Formularios seguros y validados
• Panel de administración con Strapi para gestión de contenido

Este proyecto demuestra mi capacidad para desarrollar soluciones completas desde el frontend hasta el backend, manejando todos los aspectos técnicos para crear un sitio corporativo profesional y funcional.`,
            img: imgBancoVimenca,
            skills: [iconReact, iconTypescript, iconTailwind, iconReactRouter, iconNodejs, iconExpressjs, iconStrapi],
            githubLink: null,
            siteLink: "https://bancovimenca.com/",
        },
        {
            id: 2,
            titulo: "Grupo Vimenca",
            categoria: "fullstack",
            descripcion: "",
            descripcion2: "",
            img: imgGrupoVimenca,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://grupovimenca.com.do/",
        },
        {
            id: 3,
            titulo: "Adecc",
            categoria: "frontend",
            descripcion: "",
            descripcion2: "",
            img: imgAdecc,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://adecc.com.do/",
        },
        {
            id: 4,
            titulo: "All Media Briefs",
            categoria: "fullstack",
            descripcion: "Sistema interno de gestión de briefs con formularios dinámicos, backend robusto y automatización de procesos.",
            descripcion2: `All Media Briefs - Sistema de Gestión de Briefs

Aplicación web interna compleja desarrollada para centralizar y optimizar el proceso de recopilación de información de clientes en una agencia con múltiples servicios.

Stack Técnico:
Frontend: React, TypeScript, React Router, TailwindCSS
Backend: Node.js, Express
Base de datos: MongoDB
Otras herramientas: Nodemailer, PDFKit

El Problema:
La agencia ofrece diversos servicios (Estrategia para Medios, Creatividad, Producción, Eventos, etc.), cada uno requiriendo diferentes preguntas a los clientes. Se usaban múltiples formularios de Google Forms, lo que generaba ineficiencias y pérdida de información.

La Solución:
Desarrollé un sistema inteligente de formularios dinámicos que:

• Sistema de Selección de Servicios: El usuario primero selecciona el/los servicio(s) que requiere
• Formularios Dinámicos: Dependiendo de la selección, el sistema muestra automáticamente los formularios específicos de cada servicio
• Preguntas Comunes: Identifica y muestra preguntas compartidas entre servicios para evitar redundancia
• Backend Robusto: Almacena la información en MongoDB de forma estructurada
• Sistema de Notificaciones: Envía automáticamente correos electrónicos con PDFs personalizados a los departamentos correspondientes
• Dashboard Administrativo: Visualización centralizada de todos los briefs recibidos

Características Técnicas:
• Arquitectura modular con TypeScript para mantenibilidad
• Validación de formularios en tiempo real
• Generación dinámica de PDFs con la información recopilada
• Sistema de enrutamiento por departamentos
• Interfaz intuitiva y responsive

Este proyecto demuestra mi capacidad para analizar problemas complejos, diseñar soluciones escalables y desarrollar aplicaciones full-stack completas que resuelven necesidades reales de negocio.`,
            img: placeholderImg,
            skills: [iconReact, iconTypescript, iconTailwind, iconReactRouter, iconNodejs, iconExpressjs, iconApi],
            githubLink: null,
            siteLink: "https://allmedia.com.do/briefs/",
        },
        {
            id: 5,
            titulo: "Banesco Internacional",
            categoria: "fullstack",
            descripcion: "",
            descripcion2: "",
            img: placeholderImg,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://banescointernacional.com/",
        },
        {
            id: 6,
            titulo: "Banco Vimenca - Backend API",
            categoria: "fullstack",
            descripcion: "API REST robusta con Strapi CMS y Node.js para gestión de contenido corporativo.",
            descripcion2: `Banco Vimenca Backend - API REST con Strapi CMS

Backend completo desarrollado para el sitio web corporativo de Banco Vimenca, implementando una arquitectura moderna con Headless CMS.

Stack Técnico:
Backend: Node.js, Express, Strapi CMS
Autenticación: JWT

Arquitectura y Características:

Sistema de Gestión de Contenido (CMS):
• Implementación de Strapi como Headless CMS para gestión de contenido
• Modelos de contenido personalizados para diferentes secciones del sitio
• Sistema de roles y permisos para administradores
• API RESTful automática generada por Strapi
• Gestión eficiente de relaciones entre entidades

Seguridad:
• Autenticación JWT para endpoints protegidos
• Validación de datos en el servidor
• Sanitización de inputs
• CORS configurado para dominios específicos
• Rate limiting para prevenir abuso

API Features:
• Endpoints RESTful para todas las entidades del sitio
• Paginación y filtrado avanzado
• Upload y gestión de media files
• Versionado de contenido
• Búsqueda optimizada

Optimización:
• Caching de consultas frecuentes
• Lazy loading de relaciones
• Queries optimizadas
• Logs estructurados para debugging y monitoreo

Este proyecto demuestra mi capacidad para diseñar e implementar backends escalables usando tecnologías modernas, integrando CMS headless para crear APIs robustas y mantenibles.`,
            img: placeholderBackend,
            skills: [iconNodejs, iconExpressjs, iconStrapi, iconApi, iconJavascript],
            githubLink: null,
            siteLink: null,
        },
        {
            id: 7,
            titulo: "All Media Briefs - Backend System",
            categoria: "fullstack",
            descripcion: "Backend complejo con MongoDB, generación de PDFs, sistema de emails automáticos y enrutamiento por departamentos.",
            descripcion2: `All Media Briefs Backend - Sistema de Gestión Automática

Backend robusto desarrollado para gestionar un sistema complejo de briefs con automatización de procesos y notificaciones inteligentes.

Stack Técnico:
Backend: Node.js, Express
Base de datos: MongoDB
Herramientas: Nodemailer, PDFKit
Arquitectura: RESTful API, Microservicios

El Desafío:
Crear un sistema backend que no solo almacene información, sino que la procese inteligentemente y distribuya notificaciones personalizadas a múltiples departamentos según los servicios solicitados.

Arquitectura del Sistema:

1. API REST Principal:
• Endpoints para recepción de briefs desde el frontend
• Validación exhaustiva de datos
• Normalización de información
• Respuestas estructuradas con códigos HTTP apropiados

2. Base de Datos MongoDB:
• Esquema flexible para diferentes tipos de servicios
• Queries optimizadas con índices
• Almacenamiento de briefs completos
• Historial de cambios y versiones
• Búsqueda y filtrado avanzado

3. Sistema de Procesamiento:
• Parser inteligente que analiza servicios seleccionados
• Identificación automática de departamentos responsables
• Extracción de información relevante por servicio
• Validación de datos por tipo de servicio

4. Generación Dinámica de PDFs:
• PDFKit para creación de documentos profesionales
• Templates personalizados por tipo de servicio
• Formateo automático de respuestas
• Logos e identidad corporativa
• Documentos optimizados para impresión

5. Sistema de Notificaciones:
• Nodemailer para envío de correos
• Routing automático por departamentos
• Emails personalizados con información específica
• Adjuntos de PDFs generados
• Confirmación de envío al cliente
• Sistema de plantillas HTML responsivas

6. Enrutamiento Inteligente:
• Mapeo de servicios a departamentos
• Reglas de negocio para casos especiales
• Copia a múltiples departamentos cuando aplica
• Escalamiento automático a supervisores

7. Dashboard Backend:
• Endpoints para visualización de todos los briefs
• Filtros por fecha, servicio, departamento
• Estadísticas y métricas
• Exportación de datos

Seguridad y Confiabilidad:
• Validación de schemas con middleware
• Manejo robusto de errores
• Logs detallados de todas las operaciones
• Transacciones para operaciones críticas
• Retry logic para emails fallidos

Performance:
• Procesamiento asíncrono de PDFs y emails
• Queue system para cargas pesadas
• Caching de configuraciones
• Optimización de queries a MongoDB

Este proyecto representa uno de los backends más complejos que he desarrollado, demostrando mi capacidad para crear sistemas que no solo almacenan datos, sino que automatizan procesos de negocio complejos, reduciendo significativamente el tiempo de gestión manual y mejorando la eficiencia operativa.`,
            img: placeholderBackend,
            skills: [iconNodejs, iconExpressjs, iconMongodb, iconApi, iconJavascript],
            githubLink: null,
            siteLink: null,
        },
        {
            id: 8,
            titulo: "Lupard",
            categoria: "frontend",
            descripcion: "",
            descripcion2: "",
            img: placeholderImg,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://lupard.com/",
        },
        {
            id: 9,
            titulo: "Amadita Mujer",
            categoria: "frontend",
            descripcion: "",
            descripcion2: "",
            img: placeholderImg,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://amaditamujer.com/",
        },
        {
            id: 10,
            titulo: "Vimenca Remesas",
            categoria: "fullstack",
            descripcion: "",
            descripcion2: "",
            img: placeholderImg,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://www.vimenca.com.do/",
        },
        {
            id: 11,
            titulo: "Mujeres Solidarias",
            categoria: "frontend",
            descripcion: "",
            descripcion2: "",
            img: placeholderImg,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://mujeressolidarias.org.do/",
        },
        {
            id: 12,
            titulo: "Risk Managers",
            categoria: "frontend",
            descripcion: "",
            descripcion2: "",
            img: placeholderImg,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://riskmanagers.com.do/",
        },
        {
            id: 13,
            titulo: "A1 Clinic PR",
            categoria: "frontend",
            descripcion: "",
            descripcion2: "",
            img: placeholderImg,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://a1clinicpr.com/",
        },
        {
            id: 14,
            titulo: "Promedica",
            categoria: "frontend",
            descripcion: "",
            descripcion2: "",
            img: placeholderImg,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://promedica.com.do/",
        },
        {
            id: 15,
            titulo: "Dexlitos X",
            categoria: "frontend",
            descripcion: "",
            descripcion2: "",
            img: placeholderImg,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://dexlitosx.com/",
        },
        {
            id: 16,
            titulo: "Life Health MS",
            categoria: "frontend",
            descripcion: "",
            descripcion2: "",
            img: placeholderImg,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://lifehealthms.com/",
        },
        {
            id: 17,
            titulo: "Papel Domino",
            categoria: "frontend",
            descripcion: "",
            descripcion2: "",
            img: placeholderImg,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://papeldomino.do/",
        },
    ];

    // Categorías disponibles
    const categorias = [
        { id: "todos", nombre: "Todos", icon: "📁" },
        { id: "fullstack", nombre: "Full Stack", icon: "⚡" },
        { id: "frontend", nombre: "Frontend", icon: "🎨" },
    ];

    // Filtrar proyectos por categoría
    const proyectosFiltrados = useMemo(() => {
        if (currentCategory === "todos") {
            return proyectos;
        }
        return proyectos.filter(proyecto => proyecto.categoria === currentCategory);
    }, [currentCategory]);

    // Calcular paginación
    const totalPages = Math.ceil(proyectosFiltrados.length / ITEMS_PER_PAGE);
    const proyectosPaginados = proyectosFiltrados.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Resetear página cuando cambia la categoría
    useEffect(() => {
        setCurrentPage(1);
    }, [currentCategory]);

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

    const handleCategoryChange = (categoria) => {
        setCurrentCategory(categoria);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Estilos para las animaciones del cursor
    const cursorAnimations = `
        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 0.7; }
        }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        @keyframes morph {
            0% { border-radius: 50%; }
            25% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            50% { border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%; }
            75% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
            100% { border-radius: 50%; }
        }
        
        @keyframes colorShift {
            0% { border-color: rgba(13, 158, 216, 0.7); }
            33% { border-color: rgba(138, 43, 226, 0.7); }
            66% { border-color: rgba(255, 105, 180, 0.7); }
            100% { border-color: rgba(13, 158, 216, 0.7); }
        }
        
        @keyframes dash {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 100; }
        }
    `;

    return (
        <div style={backgroundStyle} className="relative w-full min-h-screen py-16 px-4">
            <style>{cursorAnimations}</style>
            <div id="sombra">
                <AnimatedCursor
                    innerSize={8}
                    outerSize={35}
                    color="13, 158, 216"
                    outerAlpha={0.3}
                    innerScale={0.7}
                    outerScale={1.5}
                    trailingSpeed={8}
                    outerStyle={{
                        border: "2px solid var(--primary)",
                        mixBlendMode: "exclusion",
                        boxShadow: "0 0 15px 2px rgba(13, 158, 216, 0.4)",
                        zIndex: "999999",
                    }}
                    innerStyle={{
                        backgroundColor: "var(--primary)",
                        mixBlendMode: "exclusion",
                    }}
                    clickables={[
                        "a",
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        "label[for]",
                        "select",
                        "article",
                        "textarea",
                        "button",
                        ".link",
                        ".proyecto-card",
                        ".proyecto-wrapper",
                    ]}
                />
            </div>
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

            <motion.section
                className="max-w-7xl mx-auto"
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                {/* Título de la página */}
                <motion.div 
                    variants={titleVariants} 
                    className="mb-12 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1, margin: "-150px 0px" }}
                >
                    <TitleSection>Proyectos en Desarrollo</TitleSection>
                    <p className="text-gray-300 text-lg mt-4">
                        Trabajos actuales y proyectos en curso
                    </p>
                </motion.div>

                {/* Filtros de categorías */}
                {proyectos.length > 0 && (
                    <motion.div 
                        className="mb-8"
                        variants={filterVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1, margin: "-100px 0px" }}
                    >
                        <div className="flex flex-wrap justify-center gap-3">
                            {categorias.map((categoria) => (
                                <motion.button
                                    key={categoria.id}
                                    onClick={() => handleCategoryChange(categoria.id)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                                        currentCategory === categoria.id
                                            ? "bg-[var(--primary)] text-black shadow-lg shadow-[var(--primary)]/30"
                                            : "bg-[rgba(13,158,216,0.1)] text-white border border-[rgba(13,158,216,0.3)] hover:bg-[rgba(13,158,216,0.2)] hover:border-[rgba(13,158,216,0.5)]"
                                    }`}
                                    whileHover={{ 
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-lg">{categoria.icon}</span>
                                    <span>{categoria.nombre}</span>
                                    <span className="text-xs opacity-70">
                                        ({proyectos.filter(p => categoria.id === "todos" ? true : p.categoria === categoria.id).length})
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Grid de proyectos */}
                {proyectos.length > 0 ? (
                    <>
                        <motion.div 
                            className="flex flex-wrap justify-center gap-8"
                            key={`${currentCategory}-${currentPage}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.05, margin: "-50px 0px" }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {proyectosPaginados.map((proyecto, index) => (
                                <motion.div
                                    key={proyecto.id}
                                    className="proyecto-wrapper w-full sm:w-[450px] md:w-[400px] lg:w-[350px]"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
                                    transition={{ 
                                        duration: 0.4, 
                                        delay: index * 0.05,
                                        ease: "easeOut"
                                    }}
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

                        {/* Paginación */}
                        {totalPages > 1 && (
                            <motion.div 
                                className="mt-12 flex justify-center"
                                key={`pagination-${currentCategory}-${currentPage}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <div className="flex items-center gap-2 bg-[rgba(4,7,10,0.8)] border border-[rgba(13,158,216,0.2)] rounded-full p-2">
                                    {/* Botón Anterior */}
                                    <motion.button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                                            currentPage === 1
                                                ? "opacity-50 cursor-not-allowed"
                                                : "hover:bg-[rgba(13,158,216,0.1)] hover:text-[var(--primary)]"
                                        }`}
                                        whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
                                        whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Anterior
                                    </motion.button>

                                    {/* Números de página */}
                                    <div className="flex gap-1">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <motion.button
                                                key={page}
                                                onClick={() => handlePageChange(page)}
                                                className={`w-10 h-10 rounded-full font-medium transition-all duration-200 ${
                                                    currentPage === page
                                                        ? "bg-[var(--primary)] text-black"
                                                        : "hover:bg-[rgba(13,158,216,0.1)] hover:text-[var(--primary)]"
                                                }`}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                {page}
                                            </motion.button>
                                        ))}
                                    </div>

                                    {/* Botón Siguiente */}
                                    <motion.button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                                            currentPage === totalPages
                                                ? "opacity-50 cursor-not-allowed"
                                                : "hover:bg-[rgba(13,158,216,0.1)] hover:text-[var(--primary)]"
                                        }`}
                                        whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
                                        whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
                                    >
                                        Siguiente
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </motion.div>
                        )}
                    </>
                ) : (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-gray-400 text-lg">
                            No hay proyectos privados disponibles en este momento.
                        </p>
                    </motion.div>
                )}

                {/* Modal de detalles */}
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
                                                                alt={proyecto.titulo}
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
                                                            {proyecto.siteLink && (
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
                                                            )}
                                                            
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
                                                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(13,158,216,0.2)] border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white shadow-lg shadow-[var(--primary)]/30 transition-all duration-300 z-50"
                                                        onClick={() => setSelectedId(null)}
                                                        whileHover={{ 
                                                            scale: 1.15,
                                                            rotate: 90,
                                                            boxShadow: "0 0 20px rgba(13, 158, 216, 0.5)"
                                                        }}
                                                        whileTap={{ scale: 0.9 }}
                                                        variants={modalContentVariants}
                                                        aria-label="Cerrar modal"
                                                    >
                                                        <svg 
                                                            xmlns="http://www.w3.org/2000/svg" 
                                                            className="w-6 h-6" 
                                                            fill="none" 
                                                            viewBox="0 0 24 24" 
                                                            stroke="currentColor" 
                                                            strokeWidth={2.5}
                                                        >
                                                            <path 
                                                                strokeLinecap="round" 
                                                                strokeLinejoin="round" 
                                                                d="M6 18L18 6M6 6l12 12" 
                                                            />
                                                        </svg>
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
        </div>
    );
};

export default ProyectosPrivados;

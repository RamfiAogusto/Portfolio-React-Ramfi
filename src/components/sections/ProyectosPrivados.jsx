import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
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
import imgAllMediaBriefs from "../../assets/proyectos/privados/allmediabriefs.jpg";
import imgBanescoInternacional from "../../assets/proyectos/privados/banescointernacional.jpg";
import imgLupard from "../../assets/proyectos/privados/lupard.jpg";
import imgAmaditaMujer from "../../assets/proyectos/privados/amaditamujer.jpg";
import imgMujeresSolidarias from "../../assets/proyectos/privados/mujeres solidarias.png";
import imgRiskManagers from "../../assets/proyectos/privados/risk managers.jpg";
import imgA1Clinic from "../../assets/proyectos/privados/a1clinic.jpg";
import imgPromedica from "../../assets/proyectos/privados/promedica.jpg";
import imgDexlitosX from "../../assets/proyectos/privados/dexlitosx.jpg";
import imgLifeHealthMS from "../../assets/proyectos/privados/lifehealth.jpg";
import imgPapelDomino from "../../assets/proyectos/privados/papeldomino.jpg";
import imgBackend from "../../assets/proyectos/privados/backend.jpg";

// Imagen placeholder para proyectos sin imagen específica
const placeholderImg = "https://via.placeholder.com/600x400/0d9ed8/ffffff?text=Proyecto+Web";
const placeholderBackend = imgBackend;

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
            descripcion: "Sitio web corporativo con WordPress, integrando mapas interactivos con API personalizada para mostrar ubicaciones de oficinas.",
            descripcion2: `Grupo Vimenca - Sitio Corporativo con Integración de Mapas

Desarrollo de sitio web corporativo para Grupo Vimenca utilizando WordPress y Elementor Pro, con implementación avanzada de funcionalidades personalizadas.

Stack Técnico:
WordPress, Elementor Pro, PHP, JavaScript, CSS
Integración de APIs y Mapas Interactivos

Características Destacadas:
• Sistema de Mapas Interactivo: Integración de mapas que consumen datos desde una API personalizada
• Visualización Dinámica: Muestra ubicaciones e información detallada de todas las oficinas del grupo
• Custom Post Types: Estructura de contenido personalizada para gestionar oficinas y servicios
• Formularios PHP: Implementación de formularios de contacto personalizados con PHP
• Diseño Responsive: Optimizado para todos los dispositivos
• Optimización SEO: Configuración avanzada para motores de búsqueda

Implementación Técnica:
• Desarrollo de función PHP personalizada para consumir API de ubicaciones
• JavaScript para renderizado dinámico de marcadores en mapa
• Custom Fields para gestión de información de oficinas
• Sistema de caché para optimizar llamadas a la API

Este proyecto demuestra mi capacidad para extender WordPress más allá de sus funcionalidades básicas, integrando APIs externas y creando experiencias interactivas para los usuarios.`,
            img: imgGrupoVimenca,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://grupovimenca.com.do/",
        },
        {
            id: 3,
            titulo: "Adecc",
            categoria: "frontend",
            descripcion: "Sitio web corporativo desarrollado con WordPress y Elementor Pro, con diseño moderno y optimizado para conversión.",
            descripcion2: `Adecc - Sitio Web Corporativo

Desarrollo de sitio web corporativo para Adecc utilizando WordPress y Elementor Pro, enfocado en presentar servicios profesionales de manera efectiva.

Stack Técnico:
WordPress, Elementor Pro, PHP, JavaScript, CSS

Características Principales:
• Diseño Profesional: Interfaz moderna y limpia que refleja la identidad corporativa
• Responsive Design: Adaptación perfecta a todos los dispositivos
• Formularios de Contacto: Sistema de contacto integrado con validación
• Optimización SEO: Configuración completa para mejor posicionamiento
• Performance: Optimización de velocidad de carga y recursos

Implementación:
• Custom Post Types para gestión de servicios
• Widgets personalizados con Elementor Pro
• Integración de formularios con procesamiento PHP
• Optimización de imágenes y recursos

Este proyecto muestra mi capacidad para crear sitios corporativos profesionales que comunican efectivamente la propuesta de valor de la empresa.`,
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
            img: imgAllMediaBriefs,
            skills: [iconReact, iconTypescript, iconTailwind, iconReactRouter, iconNodejs, iconExpressjs, iconApi],
            githubLink: null,
            siteLink: "https://allmedia.com.do/briefs/",
        },
        {
            id: 5,
            titulo: "Banesco Internacional",
            categoria: "fullstack",
            descripcion: "Sitio web bancario internacional desarrollado con WordPress, cumpliendo altos estándares de seguridad y profesionalismo.",
            descripcion2: `Banesco Internacional - Sitio Web Bancario

Desarrollo de sitio web para institución bancaria internacional, con enfoque en seguridad, profesionalismo y experiencia de usuario.

Stack Técnico:
WordPress, Elementor Pro, PHP, JavaScript, CSS

Características Principales:
• Diseño Bancario Profesional: Interfaz que transmite confianza y seguridad
• Formularios Seguros: Implementación de formularios con validación y seguridad PHP
• Responsive Design: Experiencia óptima en todos los dispositivos
• Performance: Carga rápida y optimizada
• SEO Optimizado: Configuración avanzada para visibilidad

Funcionalidades Implementadas:
• Secciones informativas de productos y servicios bancarios
• Formularios de contacto con procesamiento seguro en PHP
• Sistema de navegación intuitivo
• Integración de elementos de confianza y certificaciones

Este proyecto demuestra mi experiencia trabajando con sitios de alto nivel profesional en el sector financiero, donde la presentación y la confianza son fundamentales.`,
            img: imgBanescoInternacional,
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
            descripcion: "Sitio web comercial desarrollado con WordPress y Elementor Pro, con diseño moderno enfocado en la experiencia del usuario.",
            descripcion2: `Lupard - Sitio Web Comercial

Desarrollo de sitio web comercial para Lupard utilizando WordPress y Elementor Pro, con enfoque en presentación de productos y conversión.

Stack Técnico:
WordPress, Elementor Pro, PHP, JavaScript, CSS

Características Principales:
• Diseño Atractivo: Interfaz visual moderna que destaca productos/servicios
• Responsive Design: Adaptación perfecta a móviles y tablets
• Formularios de Contacto: Sistema de contacto con procesamiento PHP
• Optimización SEO: Configuración para mejor posicionamiento
• Performance Optimizada: Carga rápida de contenido

Implementación:
• Widgets personalizados con Elementor Pro
• Secciones dinámicas para productos/servicios
• Integración de formularios con validación
• Optimización de imágenes y recursos multimedia

Este proyecto refleja mi capacidad para crear sitios comerciales atractivos que generan engagement con los visitantes.`,
            img: imgLupard,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://lupard.com/",
        },
        {
            id: 9,
            titulo: "Amadita Mujer",
            categoria: "frontend",
            descripcion: "Sitio web especializado desarrollado con WordPress y Elementor Pro, con diseño enfocado en audiencia femenina.",
            descripcion2: `Amadita Mujer - Sitio Web Especializado

Desarrollo de sitio web para Amadita Mujer utilizando WordPress y Elementor Pro, con diseño personalizado para conectar con la audiencia objetivo.

Stack Técnico:
WordPress, Elementor Pro, PHP, JavaScript, CSS

Características Principales:
• Diseño Personalizado: Estética adaptada al público objetivo
• Responsive Design: Experiencia optimizada en todos los dispositivos
• Formularios de Contacto: Sistema de contacto con procesamiento PHP
• Navegación Intuitiva: Estructura clara y fácil de usar
• Optimización SEO: Configuración para visibilidad en buscadores

Implementación:
• Layouts personalizados con Elementor Pro
• Secciones de contenido dinámico
• Formularios con validación PHP
• Optimización de velocidad y rendimiento

Este proyecto muestra mi capacidad para adaptar el diseño y funcionalidad a audiencias específicas, creando experiencias relevantes y atractivas.`,
            img: imgAmaditaMujer,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://amaditamujer.com/",
        },
        {
            id: 10,
            titulo: "Mujeres Solidarias",
            categoria: "frontend",
            descripcion: "Sitio web para organización sin fines de lucro, desarrollado con WordPress y Elementor Pro, enfocado en impacto social.",
            descripcion2: `Mujeres Solidarias - Sitio Web de Organización Social

Desarrollo de sitio web para organización sin fines de lucro Mujeres Solidarias, con WordPress y Elementor Pro, enfocado en comunicar su misión e impacto.

Stack Técnico:
WordPress, Elementor Pro, PHP, JavaScript, CSS

Características Principales:
• Diseño Empático: Interfaz que comunica la misión y valores de la organización
• Secciones Informativas: Presentación clara de programas e iniciativas
• Formularios de Contacto y Donación: Procesamiento PHP para múltiples formularios
• Responsive Design: Accesibilidad desde cualquier dispositivo
• Optimización SEO: Visibilidad para alcanzar más personas

Implementación:
• Custom Post Types para proyectos e iniciativas
• Secciones de testimonios e historias de impacto
• Formularios personalizados con PHP
• Galería de imágenes optimizada

Este proyecto refleja mi compromiso con causas sociales y mi capacidad para crear sitios que inspiran acción y participación comunitaria.`,
            img: imgMujeresSolidarias,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://mujeressolidarias.org.do/",
        },
        {
            id: 11,
            titulo: "Risk Managers",
            categoria: "frontend",
            descripcion: "Sitio web corporativo para consultoría en gestión de riesgos, desarrollado con WordPress y Elementor Pro.",
            descripcion2: `Risk Managers - Sitio Web de Consultoría

Desarrollo de sitio web corporativo para Risk Managers, consultora especializada en gestión de riesgos, utilizando WordPress y Elementor Pro.

Stack Técnico:
WordPress, Elementor Pro, PHP, JavaScript, CSS

Características Principales:
• Diseño Profesional: Interfaz que transmite confianza y experiencia
• Presentación de Servicios: Estructura clara de servicios de consultoría
• Formularios de Consulta: Sistema PHP para solicitudes de información
• Responsive Design: Adaptación a todos los dispositivos
• SEO Optimizado: Configuración para posicionamiento profesional

Implementación:
• Secciones de servicios y casos de éxito
• Formularios de contacto con validación PHP
• Elementos visuales para datos y estadísticas
• Optimización de performance

Este proyecto demuestra mi experiencia creando sitios para empresas de consultoría, donde la credibilidad y profesionalismo son esenciales.`,
            img: imgRiskManagers,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://riskmanagers.com.do/",
        },
        {
            id: 12,
            titulo: "A1 Clinic PR",
            categoria: "frontend",
            descripcion: "Sitio web para clínica médica en Puerto Rico, desarrollado con WordPress y Elementor Pro, enfocado en servicios de salud.",
            descripcion2: `A1 Clinic PR - Sitio Web de Clínica Médica

Desarrollo de sitio web para A1 Clinic en Puerto Rico, utilizando WordPress y Elementor Pro, con enfoque en servicios médicos y atención al paciente.

Stack Técnico:
WordPress, Elementor Pro, PHP, JavaScript, CSS

Características Principales:
• Diseño Médico Profesional: Interfaz limpia que transmite confianza
• Información de Servicios: Presentación clara de servicios médicos
• Sistema de Citas: Formularios PHP para solicitudes de citas
• Responsive Design: Accesibilidad desde cualquier dispositivo
• Optimización SEO: Visibilidad para pacientes locales

Implementación:
• Secciones de servicios médicos y especialidades
• Formularios de contacto y citas con PHP
• Integración de información de contacto y ubicación
• Optimización de velocidad y accesibilidad

Este proyecto muestra mi experiencia en el sector salud, donde la claridad de información y la facilidad de contacto son prioritarias.`,
            img: imgA1Clinic,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://a1clinicpr.com/",
        },
        {
            id: 13,
            titulo: "Promedica",
            categoria: "frontend",
            descripcion: "Sitio web para institución médica, desarrollado con WordPress y Elementor Pro, enfocado en servicios de salud integral.",
            descripcion2: `Promedica - Sitio Web de Institución Médica

Desarrollo de sitio web para Promedica, institución de servicios médicos, utilizando WordPress y Elementor Pro con enfoque en experiencia del paciente.

Stack Técnico:
WordPress, Elementor Pro, PHP, JavaScript, CSS

Características Principales:
• Diseño Médico Profesional: Interfaz confiable y accesible
• Catálogo de Servicios: Presentación completa de servicios médicos
• Formularios de Contacto: Sistema PHP para consultas y citas
• Responsive Design: Navegación óptima en todos los dispositivos
• SEO para Salud: Optimización para búsquedas médicas locales

Implementación:
• Custom Post Types para servicios y especialidades
• Formularios especializados con validación PHP
• Secciones de información médica y prevención
• Optimización de accesibilidad web

Este proyecto refleja mi capacidad para crear sitios del sector salud que priorizan la información clara y el acceso fácil a servicios médicos.`,
            img: imgPromedica,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://promedica.com.do/",
        },
        {
            id: 14,
            titulo: "Dexlitos X",
            categoria: "frontend",
            descripcion: "Sitio web comercial desarrollado con WordPress y Elementor Pro, con diseño moderno enfocado en productos.",
            descripcion2: `Dexlitos X - Sitio Web Comercial

Desarrollo de sitio web comercial para Dexlitos X utilizando WordPress y Elementor Pro, con enfoque en presentación de productos y conversión.

Stack Técnico:
WordPress, Elementor Pro, PHP, JavaScript, CSS

Características Principales:
• Diseño Comercial Atractivo: Interfaz visual moderna para destacar productos
• Catálogo de Productos: Presentación organizada y atractiva
• Formularios de Contacto: Sistema PHP para consultas de ventas
• Responsive Design: Experiencia óptima en móviles y tablets
• Optimización SEO: Configuración para ventas online

Implementación:
• Layouts personalizados con Elementor Pro
• Secciones de productos con información detallada
• Formularios de consulta con procesamiento PHP
• Optimización de imágenes de productos
• Integración de elementos de confianza

Este proyecto demuestra mi capacidad para crear sitios comerciales que facilitan la decisión de compra del usuario.`,
            img: imgDexlitosX,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://dexlitosx.com/",
        },
        {
            id: 15,
            titulo: "Life Health MS",
            categoria: "frontend",
            descripcion: "Sitio web para servicios de salud y bienestar, desarrollado con WordPress y Elementor Pro.",
            descripcion2: `Life Health MS - Sitio Web de Salud y Bienestar

Desarrollo de sitio web para Life Health MS, enfocado en servicios de salud y bienestar, utilizando WordPress y Elementor Pro.

Stack Técnico:
WordPress, Elementor Pro, PHP, JavaScript, CSS

Características Principales:
• Diseño de Salud y Bienestar: Interfaz que transmite confianza y profesionalismo
• Servicios de Salud: Presentación clara de servicios médicos y de bienestar
• Sistema de Contacto: Formularios PHP para consultas y citas
• Responsive Design: Accesibilidad completa en todos los dispositivos
• SEO Optimizado: Visibilidad en búsquedas de salud

Implementación:
• Secciones informativas de servicios médicos
• Formularios de contacto con validación PHP
• Integración de contenido educativo sobre salud
• Optimización de velocidad y accesibilidad
• Elementos visuales profesionales

Este proyecto muestra mi experiencia creando sitios del sector salud que educan e informan mientras facilitan el contacto con profesionales.`,
            img: imgLifeHealthMS,
            skills: [iconWordpress, iconElementor, iconPhp, iconJavascript, iconCss],
            githubLink: null,
            siteLink: "https://lifehealthms.com/",
        },
        {
            id: 16,
            titulo: "Papel Domino",
            categoria: "frontend",
            descripcion: "Sitio web para empresa de suministros de oficina, desarrollado con WordPress y Elementor Pro.",
            descripcion2: `Papel Domino - Sitio Web de Suministros

Desarrollo de sitio web para Papel Domino, empresa de suministros de oficina, utilizando WordPress y Elementor Pro con enfoque comercial.

Stack Técnico:
WordPress, Elementor Pro, PHP, JavaScript, CSS

Características Principales:
• Diseño Comercial: Interfaz profesional para empresa B2B
• Catálogo de Productos: Presentación de productos y servicios
• Sistema de Consultas: Formularios PHP para solicitudes de cotización
• Responsive Design: Experiencia completa en todos los dispositivos
• SEO Empresarial: Optimización para clientes corporativos

Implementación:
• Secciones de productos y categorías
• Formularios de cotización con procesamiento PHP
• Información de contacto y atención al cliente
• Optimización de carga y rendimiento
• Elementos de confianza empresarial

Este proyecto refleja mi capacidad para crear sitios B2B que facilitan las relaciones comerciales y las solicitudes de cotización.`,
            img: imgPapelDomino,
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

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="googlebot" content="noindex, nofollow" />
            </Helmet>
            <div style={backgroundStyle} className="relative w-full min-h-screen py-16 px-4">
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
                    <TitleSection>Proyectos</TitleSection>
                    <p className="text-gray-300 text-lg mt-4">
                        Portafolio de trabajos realizados
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
                                            : "bg-primary/10 text-white border border-primary/30 hover:bg-primary/20 hover:border-primary/50"
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
                                <div className="flex items-center gap-2 bg-[rgba(4,7,10,0.8)] border border-primary/20 rounded-full p-2">
                                    {/* Botón Anterior */}
                                    <motion.button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`px-2 sm:px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-1 sm:gap-2 ${
                                            currentPage === 1
                                                ? "opacity-50 cursor-not-allowed"
                                                : "hover:bg-primary/10 hover:text-[var(--primary)]"
                                        }`}
                                        whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
                                        whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        <span className="hidden sm:inline">Anterior</span>
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
                                                        : "hover:bg-primary/10 hover:text-[var(--primary)]"
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
                                        className={`px-2 sm:px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-1 sm:gap-2 ${
                                            currentPage === totalPages
                                                ? "opacity-50 cursor-not-allowed"
                                                : "hover:bg-primary/10 hover:text-[var(--primary)]"
                                        }`}
                                        whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
                                        whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
                                    >
                                        <span className="hidden sm:inline">Siguiente</span>
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
                                    className="w-11/12 md:w-4/5 lg:w-3/4 max-h-[85vh] p-6 rounded-xl bg-[rgba(4,7,10,0.95)] border border-primary/30 shadow-2xl overflow-auto"
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
                                                                    className="flex-1 py-3 px-4 bg-primary/10 text-white border border-primary/50 rounded-lg text-center font-medium transition-all"
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
                                                                    className="py-3 px-4 bg-primary/10 text-white border border-primary/50 rounded-lg flex items-center justify-center transition-all"
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
                                                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white shadow-lg shadow-[var(--primary)]/30 transition-all duration-300 z-50"
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
        </>
    );
};

export default ProyectosPrivados;

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Proyecto from "../Proyecto";
import TitleSection from "../TitleSection";
import drafa from "../../assets/proyectos/drafapeluqueria.jpg";
import Burger from "../../assets/proyectos/Burger.png";
import Shorten from "../../assets/proyectos/shorten.jpg";
import Hoster from "../../assets/proyectos/hosterStarter.jpg";
import Migracion from "../../assets/proyectos/Migracion.png"
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

function Proyectos() {
    const [selectedId, setSelectedId] = useState(null);
    const containerRef = useRef(null);

    const proyectos = [
        {
            id: 1,
            titulo: "D'Rafa Peluquería",
            descripcion:
                "Un sitio web de una peluquería en Santo Domingo creado con ReactJS, hace uso de react router para manejar las rutas",
            descripcion2: `Este proyecto es un sitio web de multiples paginas con el propósito de promocionar los servicios de la peluquería "D'Rafa peluquería". En este proyecto utilice ReactJs para crear las interfaces de la pagina y React Router para obtener un enrutado dinámico en la pagina y un buen tiempo de respuesta al cambiar de pagina `,
            img: drafa,
            skills: [
                iconHtml,
                iconTailwind,
                iconJavascript,
                iconReact,
                iconNodejs,
                iconReactRouter,
            ],
            githubLink: null,
            siteLink: "https://dr-afa-peluqueria.vercel.app/",
        },
        {
            id: 2,
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
                iconNodejs,
            ],
            githubLink:
                "",
            siteLink:
                "",
        },
        {
            id: 3,
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
            id: 4,
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
        
        {
            id: 5,
            titulo: "Burger",
            descripcion: "Un sitio web de Burgers creado con Bootstrap.",
            descripcion2: "Un sitio web de Burgers creado con Bootstrap.",
            img: Burger,
            skills: [iconHtml, iconCss, iconJavascript, iconBootstrap],
            githubLink: null,
            siteLink: "https://bulguer.netlify.app/",
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
        <>
            <TitleSection>Últimos proyectos</TitleSection>
            <div className="flex justify-center gap-3 relative transition mt-10 mb-40 flex-wrap">
                {proyectos.map((proyecto) => (
                    <motion.div
                        key={proyecto.id}
                        layoutId={proyecto.id}
                        onClick={() => setSelectedId(proyecto.id)}
                    >
                        <Proyecto
                            titulo={proyecto.titulo}
                            descripcion={proyecto.descripcion}
                            skills={proyecto.skills}
                            githubLink={proyecto.githubLink}
                            siteLink={proyecto.siteLink}
                            img={proyecto.img}
                        />
                    </motion.div>
                ))}

                <AnimatePresence>
                    {selectedId && (
                        <>
                            <motion.div
                                className="fixed inset-0 bg-black bg-opacity-50 z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                            />
                            <motion.div
                                layoutId={selectedId}
                                className="fixed top-[15%] transform -translate-x-1/2 w-11/12 md:w-2/3 h-4/5 p-4 rounded-md bg-slate-950 z-20 overflow-hidden"
                                ref={containerRef}
                            >
                                {proyectos.map((proyecto) => {
                                    if (proyecto.id === selectedId) {
                                        return (
                                            <div
                                                key={proyecto.id}
                                                className="flex relative flex-col md:flex-row gap-6 h-full overflow-hidden"
                                            >
                                                <motion.div className="flex-none">
                                                    <motion.img
                                                        src={proyecto.img}
                                                        className="max-h-52 rounded"
                                                    />
                                                    <motion.div className="skills flex my-3 gap-2">
                                                        {proyecto.skills.map(
                                                            (skill, index) => (
                                                                <motion.img
                                                                    src={skill}
                                                                    key={index}
                                                                    alt={`skill-${index}`}
                                                                    layout
                                                                    className="max-w-8"
                                                                />
                                                            )
                                                        )}
                                                    </motion.div>
                                                </motion.div>
                                                <motion.div className="flex-1 overflow-y-auto">
                                                    <motion.h2 className="text-2xl">
                                                        {proyecto.titulo}
                                                    </motion.h2>
                                                    <motion.p>
                                                        {proyecto.descripcion2}
                                                    </motion.p>
                                                </motion.div>
                                                <a
                                                    className="w-6 h-6 absolute right-2 top-1"
                                                    onClick={() => {
                                                        setSelectedId(null);
                                                    }}
                                                >
                                                    <img src={Close} />
                                                </a>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Proyectos;

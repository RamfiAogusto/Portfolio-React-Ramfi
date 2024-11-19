import React from "react";
import GroupButons from "../GroupButons";
import imgPerfil from "../../assets/recorted.png";
import { motion } from "framer-motion";
import iconBootstrap from "../../assets/skills/bootstrap (4).svg";
import iconCss from "../../assets/skills/CSS.png";
import iconExpress from "../../assets/skills/expressjs_dark.svg";
import iconFigma from "../../assets/skills/figma.png";
import iconGit from "../../assets/skills/Git.png";
import iconGithub from "../../assets/skills/GitHub.png";
import iconHtml from "../../assets/skills/HTML.png";
import iconJavascript from "../../assets/skills/Javascript.png";
import iconMysql from "../../assets/skills/MySQL.png";
import iconNodejs from "../../assets/skills/NodeJS.png";
import iconPhp from "../../assets/skills/PHP.png";
import iconPython from "../../assets/skills/Python.png";
import iconReact from "../../assets/skills/ReactJS.png";
import iconReactRouter from "../../assets/skills/reactrouter.svg";
import iconSql from "../../assets/skills/sql.png";
import iconTailwind from "../../assets/skills/TailwindCSS.png";
import iconTerminal from "../../assets/skills/terminal.png";
import iconVercel from "../../assets/skills/vercel_dark.svg";
import iconWordpress from "../../assets/skills/wordpress.svg";
import iconVscode from "../../assets/skills/vscode.png";
import iconElementor from "../../assets/skills/elementor.svg";
import iconSupabase from "../../assets/skills/supabase.svg";


function Hero() {
    return (
        <header id="particles-Js">
            <div className="hero min-h-screen overflow-hidden mb-10 md:mb-0">
                <div className="hero-content flex-col gap-8 lg:flex-row-reverse relative">
                    
                    <motion.div
                        className="relative w-[300px] h-[300px] [perspective:1000px]"
                    >
                        <div className="absolute inset-0 w-full h-full">
                            {[iconReact, iconNodejs, iconJavascript, iconPython, iconTailwind].map((icon, index) => (
                                <motion.img
                                    key={index}
                                    src={icon}
                                    className="w-10 h-10 md:w-14 md:h-14 absolute"
                                    animate={{
                                        rotateY: [0, 360],
                                        rotateX: [0, 360],
                                        z: ['200px', '-200px']
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: index * (8 / 5)
                                    }}
                                    style={{
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: `rotate(${index * (360 / 5)}deg) translateX(180px)`,
                                        transformOrigin: 'center',
                                    }}
                                />
                            ))}
                        </div>
                        
                        <motion.img
                            src={imgPerfil}
                            className="max-w-sm rounded-full shadow-2xl blur2 imghero relative"
                            animate={{ y: [0, 10, 0, 10, 0] }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{
                                position: 'relative',
                                zIndex: 0
                            }}
                        />
                    </motion.div>
                    <div className="max-w-lg px-3">
                        <motion.h1
                            className="text-5xl font-bold relative"
                            initial={{ x: -400, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Hola, Soy Ramfi Aogusto <br></br>
                            <span className="text-[var(--primary)] text-4xl">
                                Desarrollador web
                            </span>
                        </motion.h1>
                        <motion.p
                            className="py-6 relative"
                            initial={{ x: -400, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            Mi viaje en el mundo de la programación ha sido una
                            emocionante travesía donde he adquirido habilidades
                            en diversas tecnologías. Mi enfoque no solo se
                            centra en el código, sino en la creación de
                            experiencias digitales memorables. ¡Bienvenido a mi
                            mundo de desarrollo web!
                        </motion.p>
                        <GroupButons />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;

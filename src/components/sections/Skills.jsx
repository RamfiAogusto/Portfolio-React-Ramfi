import React from "react";
import iconApi from "../../assets/skills/api.png";
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
import TitleSection from "../TitleSection";
import iconElementor from "../../assets/skills/elementor.svg";
import iconSupabase from "../../assets/skills/supabase.svg";
import iconMongo from "../../assets/skills/mongodb.svg";

import { motion } from "framer-motion";

function Skills() {
    return (
        <div className="mt-10">
            <TitleSection>Mis habilidades</TitleSection>
            <motion.section
                id="skills"
                className="relative text-center mt-10"
                initial={{ y: 400, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                <div className="subtitulo">
                    <ul className="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="container_cards_skills flex gap-5 justify-center mb-28 flex-wrap">
                    <div className="card_skill skills_front">
                        <h3 className="text-lg font-bold mt-2">FRONT-END</h3>
                        <ul>
                            <li>
                                <img src={iconHtml} className="skill_img" />
                                <p className="skill_name">HTML</p>
                            </li>
                            <li>
                                <img
                                    src={iconJavascript}
                                    className="skill_img"
                                />
                                <p className="skill_name">JavaScript</p>
                            </li>
                            <li>
                                <img src={iconCss} className="skill_img" />
                                <p className="skill_name">CSS</p>
                            </li>
                            <li>
                                <img src={iconReact} className="skill_img" />
                                <p className="skill_name">ReactJS</p>
                            </li>
                            <li>
                                <img src={iconTailwind} className="skill_img" />
                                <p className="skill_name">TailwindCSS</p>
                            </li>
                            <li>
                                <img
                                    src={iconBootstrap}
                                    className="skill_img"
                                />
                                <p className="skill_name">Bootstrap</p>
                            </li>
                            <li>
                                <img src={iconFigma} className="skill_img" />
                                <p className="skill_name">Figma</p>
                            </li>
                            <li>
                                <img
                                    src={iconWordpress}
                                    className="skill_img"
                                />
                                <p className="skill_name">WordPress</p>
                            </li>
                            <li>
                                <img src={iconElementor} className="skill_img" />
                                <p className="skill_name">Elementor</p>
                            </li>
                        </ul>
                    </div>
                    <div className="card_skill skills_back">
                        <h3 className="text-lg font-bold mt-2">BACK-END</h3>
                        <ul>
                            <li>
                                <img src={iconNodejs} className="skill_img" />
                                <p className="skill_name">NodeJs</p>
                            </li>
                            <li>
                                <img src={iconExpress} className="skill_img" />
                                <p className="skill_name">ExpressJs</p>
                            </li>
                            <li>
                                <img src={iconMysql} className="skill_img" />
                                <p className="skill_name">MySQL</p>
                            </li>
                            <li>
                                <img src={iconMongo} className="skill_img" />
                                <p className="skill_name">MongoDB</p>
                            </li>
                            
                            <li>
                                <img src={iconSupabase} className="skill_img" />
                                <p className="skill_name">Supabase</p>
                            </li>
                            <li>
                                <img src={iconPhp} className="skill_img" />
                                <p className="skill_name">PHP</p>
                            </li>
                            <li>
                                <img src={iconPython} className="skill_img" />
                                <p className="skill_name">Python</p>
                            </li>

                        </ul>
                    </div>
                    <div className="card_skill skills_otros">
                        <h3 className="text-lg font-bold mt-2">OTROS</h3>
                        <ul>
                            <li>
                                <img src={iconGit} className="skill_img" />
                                <p className="skill_name">Git</p>
                            </li>
                            <li>
                                <img src={iconGithub} className="skill_img" />
                                <p className="skill_name">GitHub</p>
                            </li>
                            <li>
                                <img src={iconVscode} className="skill_img" />
                                <p className="skill_name">VScode</p>
                            </li>
                            <li>
                                <img src={iconTerminal} className="skill_img" />
                                <p className="skill_name">Terminal</p>
                            </li>
                            <li>
                                <img src={iconSql} className="skill_img" />
                                <p className="skill_name">SQL</p>
                            </li>
                            <li>
                                <img src={iconSql} className="skill_img" />
                                <p className="skill_name">API</p>
                            </li>
                            <li>
                                <img src={iconVercel} className="skill_img" />
                                <p className="skill_name">Vercel</p>
                            </li>
                            <li>
                                <img
                                    src={iconReactRouter}
                                    className="skill_img"
                                />
                                <p className="skill_name">React Router</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

export default Skills;

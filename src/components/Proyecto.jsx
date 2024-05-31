import React from "react";
import { motion } from "framer-motion";
import imgGithub from "../assets/icons/github.svg";

function Proyecto(props) {
    return (
        <motion.article
            layout
            initial={{ y: 400, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
        >
            <img className="preview_container" src={props.img} />
            <div className="info_container">
                <motion.h5 layout className="title_proyect">
                    {props.titulo}
                </motion.h5>
                <motion.p layout className="descripcion">
                    {props.descripcion}
                </motion.p>
            </div>
            <div className="skills flex my-3 gap-2">
                {props.skills.map((skill, index) => (
                    <motion.img
                        src={skill}
                        key={index}
                        alt={`skill-${index}`}
                        layout
                        className="max-w-8"
                    />
                ))}
            </div>
            <div className="buttons_container">
                <a
                    href={props.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ir al sitio
                </a>
                <a
                    href={props.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={imgGithub} alt="GitHub" />
                </a>
            </div>
        </motion.article>
    );
}

export default Proyecto;

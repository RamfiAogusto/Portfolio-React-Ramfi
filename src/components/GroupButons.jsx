import React from "react";
import iconInsta from "../assets/icons/instagram_dark.svg";
import iconLinkedin from "../assets/icons/linkedin.svg";
import iconGithub from "../assets/icons/github.svg";
import Cv from "../assets/archivos/cv.pdf";
import { motion } from "framer-motion";

function GroupButons() {
    return (
        <>
            <motion.div
                className="flex flex-col items-center gap-4 relative md:flex-row md:items-start"
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <a
                    id="btn"
                    download="cv.pdf"
                    href={Cv}
                    className=" min-w-fit  bg-transparent border-solid border-[2px] filter-[var(--sombra)] ||||||border-2 border-[var(--primary)] rounded-md shadow-[5px_5px_0_var(--primary)] transition-transform duration-200 ease-linear hover:bg-[var(--primary)] hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none p-2"
                >
                    Descargar CV
                </a>
                <div className="flex gap-2">
                    <a
                        href="https://www.instagram.com/ramfi_aog/"
                        target="_blank"
                        className="p-2 inline-block rounded-[10px] bg-transparent border-solid border-[2px] border-[var(--primary)] w-11 h-11 filter-[var(--sombra)]"
                    >
                        <img
                            src={iconInsta}
                            alt="icono instagram"
                            className="w-full"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ramfi-aogusto-de-la-cruz-geraldino-aa64b5272"
                        target="_blank"
                        className="p-2 inline-block rounded-[10px] bg-transparent border-solid border-[2px] border-[var(--primary)] w-11 h-11 filter-[var(--sombra)]"
                    >
                        <img
                            src={iconLinkedin}
                            alt="icono LinkedIn"
                            className="w-full"
                        />
                    </a>
                    <a
                        href="https://github.com/RamfiAogusto"
                        target="_blank"
                        className="p-2 inline-block rounded-[10px] bg-transparent border-solid border-[2px] border-[var(--primary)] w-11 h-11 filter-[var(--sombra)]"
                    >
                        <img
                            src={iconGithub}
                            alt="icono github"
                            className="w-full"
                        />
                    </a>
                </div>
            </motion.div>
        </>
    );
}

export default GroupButons;

import React from "react";
import iconInsta from "../../assets/icons/instagram_dark.svg";
import iconLink from "../../assets/icons/linkedin.svg";
import iconGit from "../../assets/icons/github.svg";
import iconCopy from "../../assets/icons/copy-svgrepo-com.svg";
import { motion } from "framer-motion";
import TitleSection from "../TitleSection";

function Contactos() {
    return (
        <>
            <motion.section id="contactos" className="flex flex-col items-center pb-16">
                <TitleSection >Contacto</TitleSection>

                <div className="container_contactos flex flex-wrap justify-center gap-[100px]  max-w-full">
                    <div className="formulario max-w-full">
                        <form
                            action="https://formspree.io/f/mvoezknb"
                            method="POST"
                            id="miFormulario"
                            className="flex flex-col lg:w-[500px] m-10"
                        >
                            <label className="mt-[22px] mb-2">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Ingrese su nombre"
                                className="bg-transparent outline-none border border-[var(--primary)] rounded-md h-10 text-[var(--text)] p-1.5 box-border text-lg focus-visible:border-2 focus-visible:border-[var(--primary)]"
                                required
                            />

                            <label className="mt-[22px] mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Ingrese su correo"
                                className="bg-transparent outline-none border border-[var(--primary)] rounded-md h-10 text-[var(--text)] p-1.5 box-border text-lg focus-visible:border-2 focus-visible:border-[var(--primary)]"
                                required
                            />

                            <label className="mt-[22px] mb-2">Mensaje</label>
                            <textarea
                                name="message"
                                className="msj box-border h-[200px] bg-transparent rounded-md border border-[var(--primary)] mb-5 outline-none text-[var(--text)] resize-none text-lg focus-visible:border-2 focus-visible:border-[var(--primary)]"
                                cols="30"
                                rows="10"
                                placeholder="Ingrese su mensaje"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                id="button-enviar"
                                className="px-2 py-1.5 text-lg font-semibold inline-block bg-transparent rounded-md border-2 border-[var(--primary)] text-[var(--text)] transition-transform duration-200 ease-linear hover:cursor-pointer hover:bg-[var(--primary)] hover:translate-x-1.5 hover:translate-y-1.5 shadow-[5px_5px_0_var(--primary)] hover:shadow-none"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>

                    <div className="contactos">
                        <h2 className="text-3xl">Redes</h2>
                        <div className="redes al-frente flex gap-4 ">
                            <a
                                href="https://www.instagram.com/ramfi_aog/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border-2 border-[var(--primary)] rounded-md shadow-[5px_5px_0_var(--primary)] transition-transform duration-200 ease-linear hover:bg-[var(--primary)] hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none p-2"
                            >
                                <img
                                    src={iconInsta}
                                    alt="icono instagram"
                                    className="w-8 h-8 hover:filter hover:invert-[76%]"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ramfi-aogusto-de-la-cruz-geraldino-aa64b5272"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border-2 border-[var(--primary)] rounded-md shadow-[5px_5px_0_var(--primary)] transition-transform duration-200 ease-linear hover:bg-[var(--primary)] hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none p-2"
                            >
                                <img
                                    src={iconLink}
                                    alt="icono LinkedIn"
                                    className="w-8 h-8 hover:filter hover:invert-[76%]"
                                />
                            </a>
                            <a
                                href="https://github.com/RamfiAogusto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border-2 border-[var(--primary)] rounded-md shadow-[5px_5px_0_var(--primary)] transition-transform duration-200 ease-linear hover:bg-[var(--primary)] hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none p-2"
                            >
                                <img
                                    src={iconGit}
                                    alt="icono github"
                                    className="w-8 h-8  hover:filter hover:invert-[76%]"
                                />
                            </a>
                        </div>

                        <div className="correo mt-7 flex flex-col items-center border border-[var(--primary)] rounded-md p-4 pb-5">
                            <div className="correo-copy flex items-center">
                                <button
                                    className="copiar-el-correo w-10 h-10 bg-transparent border-2 border-[var(--primary)] rounded-md shadow-[5px_5px_0_var(--primary)] transition-transform duration-200 ease-linear hover:bg-[var(--primary)] hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none"
                                    id="copiar-el-correo"
                                >
                                    <img
                                        src={iconCopy}
                                        alt="icono copiar"
                                        className="h-full filter hover:filter hover:invert-[76%] p-1"
                                    />
                                </button>
                                <div className="spans flex flex-col gap-0.5 ml-4">
                                    <span className="texto-hover text-gray-500">
                                        Copiar email
                                    </span>
                                    <span>ramfiaogusto@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}

export default Contactos;

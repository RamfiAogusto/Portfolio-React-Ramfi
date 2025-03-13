import React, { useState } from "react";
import Experiencia from "./components/sections/Experiencia";
import Hero from "./components/sections/Hero";
import Proyectos from "./components/sections/Proyectos";
import Quiensoy from "./components/sections/Quiensoy";
import Skills from "./components/sections/Skills";
import Contactos from "./components/sections/Contactos";
import imgBack from "./assets/descarga.png";
import AnimatedCursor from "react-animated-cursor";


function App() {
    const backgroundStyle = {
        backgroundImage: `url(${imgBack})`,
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
        <div style={backgroundStyle} className="relative w-full min-h-screen">
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
                        // Selectores básicos
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
                        
                        // Efecto para la foto de perfil en Hero
                        {
                            target: ".imghero, .hero img",
                            options: {
                                innerSize: 12,
                                outerSize: 60,
                                color: "255, 255, 255",
                                outerAlpha: 0.3,
                                innerScale: 0.6,
                                outerScale: 1.8,
                                outerStyle: {
                                    border: "2px dashed rgba(255, 255, 255, 0.8)",
                                    boxShadow: "0 0 15px 2px rgba(255, 255, 255, 0.3)",
                                    mixBlendMode: "difference",
                                    animation: "morph 3s infinite alternate"
                                },
                                innerStyle: {
                                    backgroundColor: "rgba(255, 255, 255, 0.8)"
                                }
                            },
                        },
                        
                        // Efecto para botones específicos del portfolio
                        {
                            target: ".btn, button, .hero-content a, .GroupButons a",
                            options: {
                                innerSize: 8,
                                outerSize: 40,
                                color: "13, 158, 216",
                                outerAlpha: 0.5,
                                innerScale: 1.5,
                                outerScale: 2.5,
                                outerStyle: {
                                    border: "2px solid var(--primary)",
                                    boxShadow: "0 0 20px 3px rgba(13, 158, 216, 0.6)",
                                    mixBlendMode: "screen",
                                    animation: "pulse 1.2s infinite ease-in-out"
                                },
                                innerStyle: {
                                    backgroundColor: "rgba(13, 158, 216, 0.8)"
                                }
                            },
                        },
                        
                        // Efecto para títulos principales
                        {
                            target: "h1, h2, h3, .hero-content h1, .section-title, .title-text, .subtitulo",
                            options: {
                                innerSize: 10,
                                outerSize: 45,
                                color: "255, 215, 0",
                                outerAlpha: 0.2,
                                innerScale: 0.8,
                                outerScale: 1.4,
                                outerStyle: {
                                    border: "1px solid rgba(255, 215, 0, 0.6)",
                                    boxShadow: "0 0 10px 1px rgba(255, 215, 0, 0.3)",
                                    mixBlendMode: "overlay",
                                    animation: "colorShift 3s infinite"
                                },
                                innerStyle: {
                                    backgroundColor: "rgba(255, 215, 0, 0.8)"
                                }
                            },
                        },
                        
                        // Efecto especial para la decoración de títulos
                        {
                            target: ".title-decoration, .line li",
                            options: {
                                innerSize: 6,
                                outerSize: 30,
                                color: "255, 215, 0",
                                outerAlpha: 0.3,
                                innerScale: 0.6,
                                outerScale: 1.2,
                                outerStyle: {
                                    border: "1px solid rgba(255, 215, 0, 0.7)",
                                    boxShadow: "0 0 8px 1px rgba(255, 215, 0, 0.4)",
                                    borderRadius: "3px",
                                    mixBlendMode: "overlay",
                                    animation: "pulse 1.5s infinite"
                                },
                                innerStyle: {
                                    backgroundColor: "rgba(255, 215, 0, 0.9)",
                                    borderRadius: "2px"
                                }
                            },
                        },
                        
                        // Efecto para iconos de tecnologías
                        {
                            target: "#skills img, .skill-icon, [src*='skills']",
                            options: {
                                innerSize: 15,
                                outerSize: 40,
                                color: "120, 220, 120",
                                outerAlpha: 0.4,
                                innerScale: 0.6,
                                outerScale: 2,
                                outerStyle: {
                                    border: "2px solid rgba(120, 220, 120, 0.7)",
                                    boxShadow: "0 0 15px 2px rgba(120, 220, 120, 0.4)",
                                    borderRadius: "5px",
                                    animation: "pulse 1.5s infinite",
                                    transition: "all 0.3s ease"
                                },
                                innerStyle: {
                                    backgroundColor: "rgba(120, 220, 120, 0.8)",
                                    animation: "spin 2s infinite linear"
                                }
                            },
                        },
                        
                        // Efecto para las etiquetas de habilidades en Quiensoy
                        {
                            target: ".skill-tag, #quiensoy span",
                            options: {
                                innerSize: 8,
                                outerSize: 35,
                                color: "255, 165, 0",
                                outerAlpha: 0.4,
                                innerScale: 0.7,
                                outerScale: 1.8,
                                outerStyle: {
                                    border: "2px solid rgba(255, 165, 0, 0.6)",
                                    boxShadow: "0 0 12px 2px rgba(255, 165, 0, 0.3)",
                                    borderRadius: "15px",
                                    animation: "morph 2s infinite alternate"
                                },
                                innerStyle: {
                                    backgroundColor: "rgba(255, 165, 0, 0.8)",
                                    borderRadius: "50%"
                                }
                            },
                        },
                        
                        // Efecto para la imagen "to the moon" en Quiensoy
                        {
                            target: ".about-image, #quiensoy img",
                            options: {
                                innerSize: 10,
                                outerSize: 50,
                                color: "70, 130, 255",
                                outerAlpha: 0.3,
                                innerScale: 0.6,
                                outerScale: 1.5,
                                outerStyle: {
                                    border: "2px dashed rgba(70, 130, 255, 0.7)",
                                    boxShadow: "0 0 15px 2px rgba(70, 130, 255, 0.4)",
                                    borderRadius: "50%",
                                    animation: "spin 8s infinite linear"
                                },
                                innerStyle: {
                                    backgroundColor: "rgba(70, 130, 255, 0.8)"
                                }
                            },
                        },
                        
                        // Efecto para el texto en Quiensoy
                        {
                            target: ".about-text, .about-highlight",
                            options: {
                                innerSize: 6,
                                outerSize: 30,
                                color: "100, 200, 255",
                                outerAlpha: 0.2,
                                innerScale: 0.8,
                                outerScale: 1.3,
                                outerStyle: {
                                    border: "1px solid rgba(100, 200, 255, 0.5)",
                                    boxShadow: "0 0 8px 1px rgba(100, 200, 255, 0.3)",
                                    mixBlendMode: "lighten",
                                    animation: "pulse 2s infinite ease-in-out"
                                },
                                innerStyle: {
                                    backgroundColor: "rgba(100, 200, 255, 0.7)"
                                }
                            },
                        },
                        
                        // Efecto para proyectos
                        {
                            target: "#proyectos img, .proyecto, .card",
                            options: {
                                innerSize: 10,
                                outerSize: 50,
                                color: "255, 105, 180",
                                outerAlpha: 0.3,
                                innerScale: 0.7,
                                outerScale: 1.6,
                                outerStyle: {
                                    border: "2px solid rgba(255, 105, 180, 0.6)",
                                    boxShadow: "0 0 15px 2px rgba(255, 105, 180, 0.3)",
                                    borderRadius: "10px",
                                    animation: "morph 2s infinite alternate"
                                },
                                innerStyle: {
                                    backgroundColor: "rgba(255, 105, 180, 0.8)",
                                    animation: "pulse 1s infinite"
                                }
                            },
                        },
                        
                        // Efecto para sección de contacto
                        {
                            target: "#contactos a, .contactos a, [href*='mailto'], [href*='github'], [href*='linkedin']",
                            options: {
                                innerSize: 8,
                                outerSize: 35,
                                color: "138, 43, 226",
                                outerAlpha: 0.4,
                                innerScale: 1,
                                outerScale: 2.2,
                                outerStyle: {
                                    border: "2px solid rgba(138, 43, 226, 0.7)",
                                    boxShadow: "0 0 15px 2px rgba(138, 43, 226, 0.5)",
                                    transform: "rotate(45deg)",
                                    animation: "spin 3s infinite alternate"
                                },
                                innerStyle: {
                                    transform: "rotate(45deg)",
                                    animation: "pulse 1.5s infinite"
                                }
                            },
                        },
                        
                        // Mantener el efecto custom
                        {
                            target: ".custom",
                            options: {
                                innerSize: 12,
                                outerSize: 45,
                                color: "255, 255, 255",
                                outerAlpha: 0.4,
                                innerScale: 0.7,
                                outerScale: 2,
                                outerStyle: {
                                    border: "2px solid rgba(255, 255, 255, 0.8)",
                                    boxShadow: "0 0 20px 2px rgba(255, 255, 255, 0.3)"
                                }
                            },
                        },
                    ]}
                />
            </div>
            <Hero />
            <div style={{}}></div>
            <Quiensoy />
            <Experiencia />
            <Proyectos />
            <Skills />
            <Contactos />
        </div>
    );
}

export default App;

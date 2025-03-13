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

    return (
        <div style={backgroundStyle} className="relative w-full min-h-screen">
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
                                    boxShadow: "0 0 20px 2px rgba(255, 255, 255, 0.3)",
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

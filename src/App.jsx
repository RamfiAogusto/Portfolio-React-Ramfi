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
                    outerSize={20}
                    color="13, 158, 216"
                    outerAlpha={0.2}
                    innerScale={0.7}
                    outerScale={2.2}
                    outerStyle={{
                        width: "0",
                        height: "0",
                        border: "1px solid var(--primary)",
                        boxShadow:
                            "1px 1px 100px 80px rgba(13, 158, 216, 0.767)",
                        zIndex: "0",
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
                                outerSize: 12,
                                color: "255, 255, 255",
                                outerAlpha: 0.3,
                                innerScale: 0.7,
                                outerScale: 5,
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

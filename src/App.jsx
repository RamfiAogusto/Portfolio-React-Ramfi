import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experiencia from "./components/sections/Experiencia";
import Hero from "./components/sections/Hero";
import Proyectos from "./components/sections/Proyectos";
import Quiensoy from "./components/sections/Quiensoy";
import Skills from "./components/sections/Skills";
import Contactos from "./components/sections/Contactos";
import imgBack from "./assets/descarga.png";
import CustomCursor from "./components/CustomCursor";

const ProyectosPrivados = lazy(() => import("./components/sections/ProyectosPrivados"));

// Componente Landing (página principal)
const Landing = () => {
    const backgroundStyle = {
        backgroundImage: `url(${imgBack})`,
    };

    return (
        <div style={backgroundStyle} className="relative w-full min-h-screen">
            <Hero />
            <div style={{}}></div>
            <Quiensoy />
            <Experiencia />
            <Proyectos />
            <Skills />
            <Contactos />
        </div>
    );
};

// Componente principal con routing
function App() {
    return (
        <Router>
            <CustomCursor />
            <Suspense fallback={<div className="min-h-screen" />}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/proyectos" element={<ProyectosPrivados />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;

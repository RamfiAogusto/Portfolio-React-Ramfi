import { useEffect, useRef, useState } from "react";

// Estado de reposo del cursor (sin hover sobre ningún "clickable")
const BASE_CURSOR = {
    innerSize: 8,
    outerSize: 35,
    color: "13, 158, 216",
    outerAlpha: 0.3,
    innerScale: 0.7,
    outerScale: 1.5,
    outerStyle: {
        border: "2px solid var(--primary)",
        mixBlendMode: "exclusion",
        boxShadow: "0 0 15px 2px rgba(13, 158, 216, 0.4)",
    },
    innerStyle: {
        backgroundColor: "var(--primary)",
        mixBlendMode: "exclusion",
    },
};

// Categorías migradas de la config previa de react-animated-cursor (antes en App.jsx).
// Sin "options" = el elemento solo usa BASE_CURSOR (se escala pero no cambia de estilo).
const clickableCategories = [
    {
        target: [
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
        ].join(","),
    },
    {
        // Efecto para la foto de perfil en Hero
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
                animation: "morph 3s infinite alternate",
            },
            innerStyle: {
                backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
        },
    },
    {
        // Efecto para botones específicos del portfolio
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
                animation: "pulse 1.2s infinite ease-in-out",
            },
            innerStyle: {
                backgroundColor: "rgba(13, 158, 216, 0.8)",
            },
        },
    },
    {
        // Efecto para títulos principales
        target:
            "h1, h2, h3, .hero-content h1, .section-title, .title-text, .subtitulo",
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
                animation: "colorShift 3s infinite",
            },
            innerStyle: {
                backgroundColor: "rgba(255, 215, 0, 0.8)",
            },
        },
    },
    {
        // Efecto especial para la decoración de títulos
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
                animation: "pulse 1.5s infinite",
            },
            innerStyle: {
                backgroundColor: "rgba(255, 215, 0, 0.9)",
                borderRadius: "2px",
            },
        },
    },
    {
        // Efecto para iconos de tecnologías
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
                transition: "all 0.3s ease",
            },
            innerStyle: {
                backgroundColor: "rgba(120, 220, 120, 0.8)",
                animation: "spin 2s infinite linear",
            },
        },
    },
    {
        // Efecto para las etiquetas de habilidades en Quiensoy
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
                animation: "morph 2s infinite alternate",
            },
            innerStyle: {
                backgroundColor: "rgba(255, 165, 0, 0.8)",
                borderRadius: "50%",
            },
        },
    },
    {
        // Efecto para la imagen "to the moon" en Quiensoy
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
                animation: "spin 8s infinite linear",
            },
            innerStyle: {
                backgroundColor: "rgba(70, 130, 255, 0.8)",
            },
        },
    },
    {
        // Efecto para el texto en Quiensoy
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
                animation: "pulse 2s infinite ease-in-out",
            },
            innerStyle: {
                backgroundColor: "rgba(100, 200, 255, 0.7)",
            },
        },
    },
    {
        // Efecto para proyectos
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
                animation: "morph 2s infinite alternate",
            },
            innerStyle: {
                backgroundColor: "rgba(255, 105, 180, 0.8)",
                animation: "pulse 1s infinite",
            },
        },
    },
    {
        // Efecto para sección de contacto
        target:
            "#contactos a, .contactos a, [href*='mailto'], [href*='github'], [href*='linkedin']",
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
                animation: "spin 3s infinite alternate",
            },
            innerStyle: {
                transform: "rotate(45deg)",
                animation: "pulse 1.5s infinite",
            },
        },
    },
    {
        // Mantener el efecto custom
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
            },
        },
    },
];

const COMBINED_SELECTOR = clickableCategories
    .map((category) => category.target)
    .join(",");

// La categoría base (sin "options") solo debe activar el look genérico — nunca debe
// "ganarle" el match a una categoría específica (ej: un <a> dentro de #contactos también
// matchea el selector base "a", pero debe recibir el estilo de la categoría de contacto).
const SPECIFIC_CATEGORIES = clickableCategories.filter((category) => category.options);

const TRAILING_SPEED = 8;

function CustomCursor() {
    const [isTouchDevice] = useState(
        () => window.matchMedia("(pointer: coarse)").matches
    );

    // outer/inner: SOLO posición (transform: translate3d) y tamaño.
    // outerDecor/innerDecor: SOLO decoración (color, border, animation) en un hijo absoluto
    // separado. Varias categorías usan animaciones CSS (`pulse`, `spin`) que animan la propia
    // propiedad `transform` — una animación CSS siempre gana sobre un `transform` inline en el
    // mismo elemento, sin importar el orden en que se escriban. Si posición y decoración
    // compartieran nodo, activar esas categorías (ej: hover en el botón de descargar CV)
    // pisaba el translate3d de posicionamiento y el cursor saltaba a (0,0).
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const outerDecorRef = useRef(null);
    const innerDecorRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const eased = useRef({ x: 0, y: 0 });
    const pressed = useRef(false);
    const hasMoved = useRef(false);
    const rafId = useRef(null);

    useEffect(() => {
        if (isTouchDevice) return;

        const outerEl = outerRef.current;
        const innerEl = innerRef.current;
        const outerDecorEl = outerDecorRef.current;
        const innerDecorEl = innerDecorRef.current;

        const applyStyle = (decorEl, positionEl, config, active, isOuter) => {
            const scale = active
                ? isOuter
                    ? config.outerScale
                    : config.innerScale
                : 1;
            const size = Math.round(
                (isOuter ? config.outerSize : config.innerSize) * scale
            );
            positionEl.style.width = `${size}px`;
            positionEl.style.height = `${size}px`;

            const styleConfig = (isOuter ? config.outerStyle : config.innerStyle) || {};
            Object.assign(decorEl.style, {
                backgroundColor: `rgba(${config.color}, ${isOuter ? config.outerAlpha : 1})`,
                border: "none",
                boxShadow: "none",
                mixBlendMode: "normal",
                animation: "none",
                borderRadius: "50%",
                transform: "none",
                transition: "",
                ...styleConfig,
            });
        };

        const setCursorState = (config, active) => {
            applyStyle(outerDecorEl, outerEl, config, active, true);
            applyStyle(innerDecorEl, innerEl, config, active, false);
        };

        const writeDotTransform = () => {
            const pressScale = pressed.current ? 0.85 : 1;
            innerEl.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%) scale(${pressScale})`;
        };

        const writeRingTransform = () => {
            const pressScale = pressed.current ? 0.85 : 1;
            outerEl.style.transform = `translate3d(${eased.current.x}px, ${eased.current.y}px, 0) translate(-50%, -50%) scale(${pressScale})`;
        };

        const animateRing = () => {
            eased.current.x += (mouse.current.x - eased.current.x) / TRAILING_SPEED;
            eased.current.y += (mouse.current.y - eased.current.y) / TRAILING_SPEED;
            writeRingTransform();
            rafId.current = requestAnimationFrame(animateRing);
        };

        const handleMouseMove = (event) => {
            mouse.current.x = event.clientX;
            mouse.current.y = event.clientY;
            if (!hasMoved.current) {
                hasMoved.current = true;
                eased.current.x = event.clientX;
                eased.current.y = event.clientY;
                outerEl.style.opacity = "1";
                innerEl.style.opacity = "1";
            }
            writeDotTransform();
        };

        const matchCategory = (target) =>
            SPECIFIC_CATEGORIES.find((category) => target.matches(category.target));

        // mouseover/mouseout burbujean en cada cambio de hijo interno; el chequeo con
        // relatedTarget + contains() simula mouseenter/mouseleave y evita parpadeo
        // al moverse entre hijos de un mismo elemento "clickable".
        const handleMouseOver = (event) => {
            if (!(event.target instanceof Element)) return;
            const target = event.target.closest(COMBINED_SELECTOR);
            if (!target) return;
            const related = event.relatedTarget;
            if (related instanceof Element && target.contains(related)) return;

            // Algunos elementos tienen su propia regla CSS de `cursor` (Tailwind
            // `cursor-pointer`/`cursor-not-allowed`, o `article:hover` en index.css) que
            // gana por especificidad al `cursor:none` heredado del body — sin este inline
            // override el puntero nativo se ve encima del cursor personalizado.
            target.style.cursor = "none";

            const category = matchCategory(target);
            const config = category?.options
                ? { ...BASE_CURSOR, ...category.options }
                : BASE_CURSOR;
            setCursorState(config, true);
        };

        const handleMouseOut = (event) => {
            if (!(event.target instanceof Element)) return;
            const target = event.target.closest(COMBINED_SELECTOR);
            if (!target) return;
            const related = event.relatedTarget;
            if (related instanceof Element && target.contains(related)) return;

            target.style.cursor = "";
            setCursorState(BASE_CURSOR, false);
        };

        const handleMouseDown = () => {
            pressed.current = true;
            writeDotTransform();
            writeRingTransform();
        };

        const handleMouseUp = () => {
            pressed.current = false;
            writeDotTransform();
            writeRingTransform();
        };

        setCursorState(BASE_CURSOR, false);
        outerEl.style.opacity = "0";
        innerEl.style.opacity = "0";

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);
        document.body.style.cursor = "none";
        rafId.current = requestAnimationFrame(animateRing);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
            document.body.style.cursor = "";
            if (rafId.current !== null) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [isTouchDevice]);

    if (isTouchDevice) {
        return null;
    }

    return (
        <>
            <div ref={outerRef} className="custom-cursor-outer">
                <div ref={outerDecorRef} className="custom-cursor-decor" />
            </div>
            <div ref={innerRef} className="custom-cursor-inner">
                <div ref={innerDecorRef} className="custom-cursor-decor" />
            </div>
        </>
    );
}

export default CustomCursor;

import React from "react";

function TitleSection(props) {
    return (
        <div className="subtitulo relative text-center section-title">
            <h2 className="text-4xl text-[var(--primary)] font-bold p-0 m-0 title-text">{props.children}</h2>
            <ul className="line list-none p-0 m-auto title-decoration">
                <li className="inline-block bg-[var(--backgroundsec)] rounded-full h-[3px] w-[70px] mr-1"></li>
                <li className="inline-block bg-[var(--backgroundsec)] rounded-full h-[3px] w-[20px] mr-1"></li>
                <li className="inline-block bg-[var(--backgroundsec)] rounded-full h-[3px] w-[7px] mr-1"></li>
            </ul>
        </div>
    );
}

export default TitleSection;

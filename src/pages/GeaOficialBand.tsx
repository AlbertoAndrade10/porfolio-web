import React from "react";
import AboutProjectsTemplate from "../components/AboutProjectTemplate";

const GeaOficialBand: React.FC = () => {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3z" />
                </svg>
            ),
            title: "Trayectoria de la banda",
            description:
                "Descubre la historia de GEA, desde sus inicios hasta su evolución como grupo musical.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10a3 3 0 11-6 0 3 3 0 016 0zm6-3a6 6 0 01-6 6H6a6 6 0 01-6-6v-2c0-1.1.9-2 2-2h12a2 2 0 012 2v2z" />
                </svg>
            ),
            title: "Últimos lanzamientos",
            description:
                "Escucha los últimos temas y álbumes lanzados por GEA en plataformas digitales.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: "Próximos eventos",
            description:
                "Consulta las fechas y lugares de los próximos conciertos y presentaciones de GEA.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            ),
            title: "Contenido exclusivo",
            description:
                "Accede a contenido exclusivo, como entrevistas, detrás de cámaras y material inédito.",
        },
    ];

    return (
        <AboutProjectsTemplate
            headerTitle="GEA Official Band"
            headerDescription="Un proyecto en desarrollo de un grupo musical real, diseñado para ofrecer una experiencia inmersiva."
            features={features}
            summary="Conoce la trayectoria de GEA, disfruta de sus últimos lanzamientos y mantente al tanto de sus próximos eventos."
            buttonText="Ver el código del proyecto"
            onButtonClick={() => {
                window.open("https://github.com/AbertoAndrade10/GeaOfficialBand", "_blank");
            }}
        />
    );
};

export default GeaOficialBand;
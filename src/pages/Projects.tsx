// src/pages/Projects.tsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import "animate.css";

const technologiesLibreriaOnline = [
    {
        name: "Spring Boot",
        iconSrc: "./icons/springboot.jpg",
    },

    {
        name: "Angular",
        iconSrc: "./icons/angular.jpg",
    },
    {
        name: "TailWind",
        iconSrc: "./icons/tailwindImage.png",
    },
    {
        name: "MySQL",
        iconSrc: "./icons/mysql.jpg",
    },
    {
        name: "Docker",
        iconSrc: "./icons/docker.jpg",
    },
    {
        name: "GitHub",
        iconSrc: "./icons/github.png",
    },
];

const technologiesGeaPostBand = [
    {
        name: "Angular",
        iconSrc: "./icons/angular.jpg",
    },
    {
        name: "TailWind",
        iconSrc: "./icons/tailwindImage.png",
    },
];

const Projects: React.FC = () => {
    console.log("Rendering Projects page");

    return (
        <div className="py-12 animate__animated animate__fadeIn">
            <div className="flex items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Proyectos Personales</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Proyecto 1 */}
                <ProjectCard
                    key="libreria-online"
                    imgSrc={"./images/LibreriaOnline.webp"}
                    title={"Libreria Online"}
                    description={
                        "Librería Online es una plataforma web diseñada para facilitar la gestión y venta de libros en línea. Los usuarios pueden explorar un catálogo de libros, filtrar por categorías, ver detalles de cada título y realizar compras de manera segura. La aplicación cuenta con un panel de administración que permite gestionar el inventario, agregar nuevos libros, actualizar información y supervisar las ventas. Desarrollada con Spring Boot y SupaBase para el backend, Angular para el frontend y MySQL como base de datos, esta solución ofrece un rendimiento eficiente y una interfaz intuitiva para brindar una experiencia óptima tanto a los administradores como a los clientes."
                    }
                    buttonLink={{
                        to: "#/libreria-online",
                        label: "LibreriaOnline",
                    }}
                    status={"en-desarrollo"}
                    technologies={technologiesLibreriaOnline}
                    aosEffect="fade-left"
                />

                {/* Proyecto 2 */}
                <ProjectCard
                    key="gea"
                    imgSrc={"./images/gea-post.jpg"}
                    title={"GEA Oficial Band"}
                    description={
                        "GEA es un proyecto en desarrollo de un grupo musical real, diseñado para ofrecer a los usuarios una experiencia inmersiva donde podrán conocer la trayectoria de la banda, disfrutar de sus últimos lanzamientos y estar al tanto de sus próximos eventos."
                    }
                    buttonLink={{
                        to: "#/gea-oficial-band",
                        label: "GeaOficialBand",
                    }}
                    status={"en-desarrollo"}
                    technologies={technologiesGeaPostBand}
                    aosEffect="fade-right"
                />
            </div>
        </div>
    );
};

export default Projects;
// src/pages/Projects.tsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import "animate.css";



const technologiesGeaPostBand = [
    {
        name: "NextJS",
        iconSrc: "./icons/nextjs.png",
    },
    {
        name: "React",
        iconSrc: "./icons/react.png",
    },
    {
        name: "TailWind",
        iconSrc: "./icons/tailwindImage.png",
    },
];

const technologiesAuthService = [
    {
        name: "Spring Boot",
        iconSrc: "./icons/springboot.jpg",
    },
    {
        name: "Docker",
        iconSrc: "./icons/docker.jpg",
    },
    {
        name: "MySQL",
        iconSrc: "./icons/mysql.jpg",
    },
]

const technologiesBookingHotels = [
    {
        name: "Spring Boot",
        iconSrc: "./icons/springboot.jpg",
    },

    {
        name: "NestJS",
        iconSrc: "./icons/nestjs.png",
    },


    {
        name: "PostgreSQL",
        iconSrc: "./icons/postgresql.png",
    },
    {
        name: "Docker",
        iconSrc: "./icons/docker.jpg",
    },

]

const Projects: React.FC = () => {
    console.log("Rendering Projects page");

    return (
        <div className="py-12 animate__animated animate__fadeIn">
            <div className="flex items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Proyectos Personales</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

                {/* GEA OFFICIAL BAND */}
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
                    status={"finalizado"}
                    technologies={technologiesGeaPostBand}
                    aosEffect="fade-right"
                />
                {/* Booking Hotels */}
                <ProjectCard key="booking-hotel" imgSrc={"./images/hotel.webp"} title={"Booking Hotels"} description={"Plataforma Web diseñada para la gestión de reservas online de habitaciones de hoteles. Los usuarios pueden explorar las habitaciones disponibles y hacer una reserva de una habitación el tiempo deseado."} buttonLink={{
                    to: "#/booking-hotels",
                    label: "BookingHotels"
                }} status={"en-desarrollo"}
                    technologies={technologiesBookingHotels}
                    aosEffect="fade-right" />

                {/* Auth microservice */}
                <ProjectCard
                    key="authservice"
                    imgSrc={"./images/SpringBootLogo.webp"}
                    title={"Auth Service"}
                    description={
                        "Plantilla para un microservicio en Spring Boot de gestión de usuarios con roles y tokens JWT."
                    }
                    buttonLink={{
                        to: "#/auth-service",
                        label: "AuthService",
                    }}
                    status={"finalizado"}
                    technologies={technologiesAuthService}
                    aosEffect="fade-left"
                />



            </div>
        </div>
    );
};

export default Projects;
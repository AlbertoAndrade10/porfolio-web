import React from "react";
import AboutProjectsTemplate from "../components/AboutProjectTemplate";

const AuthServicePage: React.FC = () => {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3z" />
                </svg>
            ),
            title: "Registro de usuario",
            description:
                "Registro de nuevos usuarios con un rol de USER por defecto.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10a3 3 0 11-6 0 3 3 0 016 0zm6-3a6 6 0 01-6 6H6a6 6 0 01-6-6v-2c0-1.1.9-2 2-2h12a2 2 0 012 2v2z" />
                </svg>
            ),
            title: "Login de usuario",
            description:
                "El usuario puede logearse y generar un token JWT con expiración.",
        },



    ];

    return (
        <AboutProjectsTemplate
            headerTitle="Auth Service"
            headerDescription="Una plantilla para un microservicio en Spring Boot de gestión de usuarios lista para configurar en base a tus necesidades e implementarla para tu API Gateway."
            features={features}
            buttonText="Ver el código del proyecto"
            onButtonClick={() => {
                window.open("https://github.com/AlbertoAndrade10/AuthService", "_blank");
            }}
        />
    );
};

export default AuthServicePage;
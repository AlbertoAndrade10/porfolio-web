// src/pages/About.tsx
import React from "react";
import InterestCard from "../components/InterestCard";
import "animate.css";
import TechnologyCard from "../components/TechnologyCard";

const About: React.FC = () => {
    return (
        <div className="py-12 animate__animated animate__fadeIn">
            {/* Sección de Experiencia Personal */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">
                    Mi experiencia personal
                </h2>
                <p data-aos="fade-up" className="text-xl text-gray-700 leading-relaxed">
                    Soy un Desarrollador con un enfoque orientado al backend, con
                    experiencia en el desarrollo de aplicaciones utilizando
                    <strong> Spring Boot</strong> y <strong>Angular</strong>. He trabajado
                    en proyectos basados en
                    <strong> arquitectura de microservicios</strong>, implementando
                    seguridad basada en roles con
                    <strong> JWT</strong>, persistencia de datos con <strong>MySQL</strong>
                    , <strong>MongoDB </strong>y contenedores mediante
                    <strong> Docker</strong>. También he utilizado{" "}
                    <strong> API Gateway</strong> y desarrollado
                    <strong> REST APIs</strong> siguiendo buenas prácticas.
                </p>
                <p data-aos="fade-up" className="text-xl text-gray-700 leading-relaxed mt-4">
                    En la parte frontend, me he encargado de construir interfaces visuales
                    con
                    <strong> Angular</strong> y <strong>TailwindCSS</strong>, creando
                    servicios, rutas, guards e interceptores para asegurar un flujo de
                    navegación y autenticación sólido dentro de la aplicación.
                </p>
            </section>

            {/* Sección de Intereses */}
            <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-gray-200">
                    Intereses
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <InterestCard
                        title={"Especialización"}
                        description={
                            "Profundizar y especializarme en tecnologías como Spring Boot y Angular."
                        }
                        aosEffect="fade-left"
                    />
                    <InterestCard
                        title={"Aprendizaje"}
                        description={
                            "Aprender nuevas herramientas y frameworks del ecosistema Backend y Frontend."
                        }
                        aosEffect="fade-right"
                    />
                    <InterestCard
                        title={"Proyectos reales"}
                        description={
                            "Trabajar en proyectos reales del sector con desafíos técnicos."
                        }
                        aosEffect="fade-left"
                    />
                    <InterestCard
                        title={"Diseño de software"}
                        description={
                            "Mejorar continuamente mis habilidades de diseño de software y arquitectura."
                        }
                        aosEffect="fade-right"
                    />
                    <InterestCard
                        title={"Metodologías ágiles"}
                        description={
                            "Adoptar buenas prácticas de desarrollo y metodologías ágiles."
                        }
                        aosEffect="fade-left"
                    />
                </div>
            </section>

            {/* Sección de Tecnologías */}
            <section className="mt-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-gray-200">
                    Tecnologías
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {/* Asignamos efectos alternados manualmente */}
                    <div className="w-full">
                        <TechnologyCard name={"Spring Boot"} iconSrc={"./icons/springboot.jpg"} aosEffect="fade-left" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"Java"} iconSrc={"./icons/java.png"} aosEffect="fade-right" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"Angular"} iconSrc={"./icons/angular.jpg"} aosEffect="fade-left" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"JavaScript"} iconSrc={"./icons/javascript.png"} aosEffect="fade-right" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"TypeScript"} iconSrc={"./icons/typescript.png"} aosEffect="fade-left" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"Tailwind"} iconSrc={"./icons/tailwindImage.png"} aosEffect="fade-right" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"Docker"} iconSrc={"./icons/docker.jpg"} aosEffect="fade-left" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"MySQL"} iconSrc={"./icons/mysql.jpg"} aosEffect="fade-right" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"PostgreSQL"} iconSrc={"./icons/postgresql.png"} aosEffect="fade-left" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"MongoDB"} iconSrc={"./icons/mongo-icon.png"} aosEffect="fade-right" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"Git"} iconSrc={"./icons/git.png"} aosEffect="fade-left" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"GitHub"} iconSrc={"./icons/github.png"} aosEffect="fade-right" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"GitLab"} iconSrc={"./icons/gitlab.png"} aosEffect="fade-left" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
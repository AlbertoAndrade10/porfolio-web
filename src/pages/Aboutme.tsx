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
                    Soy un desarrollador de software con un enfoque principalmente orientado al backend. Mi stack tecnológico principal
                    incluye <strong>Spring Boot</strong> y <strong>Angular</strong>, con los que he desarrollado aplicaciones siguiendo buenas prácticas de diseño y arquitectura.
                </p>
                <p data-aos="fade-up" className="text-xl text-gray-700 leading-relaxed mt-4">
                    He trabajado en arquitectura de <strong>microservicios</strong> y <strong>arquitectura hexagonal</strong>, implementando
                    seguridad basada en roles mediante <strong>JWT</strong>, así como desarrollado <strong>APIs REST</strong> bien estructuradas. Tengo experiencia
                    en la gestión de bases de datos relacionaes y no relacionales como <strong>PostgreSQL, MySQL</strong> y <strong>MongoDB</strong>, además del uso de <strong>Docker</strong> para la contenerización de aplicaciones.
                    Así mismo, he aplicado <strong>Kafka</strong> para la programación orientada a eventos y <strong>Redis</strong> para la gestión de caché.
                </p>

                <p data-aos="fade-up" className="text-xl text-gray-700 leading-relaxed mt-4">
                    En el area de frontend, he desarrollado interfaces de usuario utilizando <strong>Angular</strong> y <strong>TailwindCSS</strong>, creando servicios,
                    guards e interceptores para garantizar un flujo de navegación coherente y una autenticación segura.
                </p>


                <p data-aos="fade-up" className="text-xl text-gray-700 leading-relaxed mt-4">
                    Adicionalmente, cuento con experiencia en desarrollo backend utilizando <strong>NestJS</strong>, tanto en <strong>aplicaciones modulares</strong> como de <strong>microservicios</strong>
                    , así como conocimientos en <strong>Laravel</strong>. <br />
                    En frontend, también he trabajado con <strong>NextJS</strong>, <strong>React</strong> y <strong>TypeScript</strong>, desarrollando interfaces modernas y orientadas a la escalabilidad.
                </p>
                <p data-aos="fade-up" className="text-xl text-gray-700 leading-relaxed mt-4">
                    Me caracterizo por una alta capacidad de aprendizaje, compromiso con las buenas prácticas y motivación por seguir creciendo profesionalmente en entornos técnicos exigentes.
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
                            "Profundizar y especializarme en tecnologías como Spring Boot, NestJS entre otros."
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
                        <TechnologyCard name={"NestJS"} iconSrc={"./icons/nestjs.png"} aosEffect="fade-left" />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"Angular"} iconSrc={"./icons/angular.jpg"} aosEffect="fade-left" />
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
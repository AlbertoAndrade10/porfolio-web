// src/pages/About.tsx
import React from "react";
import InterestCard from "../components/InterestCard";
import "animate.css";
import TechnologyCard from "../components/TechnologyCard";
const About: React.FC = () => {
    return (
        <div className="py-12 animate__animated animate__fadeIn">
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">
                    Mi experiencia personal
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
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
                <p className="text-xl text-gray-700 leading-relaxed mt-4">
                    En la parte frontend, me he encargado de construir interfaces visuales
                    con
                    <strong> Angular</strong> y <strong>TailwindCSS</strong>, creando
                    servicios, rutas, guards e interceptores para asegurar un flujo de
                    navegación y autenticación sólido dentro de la aplicación.
                </p>

                {/*  <p className="text-xl text-gray-700 leading-relaxed mt-4">
          Además, cuento con formación en{" "}
          <strong>Administración de Sistemas Informáticos en Red (ASIR)</strong>
          , donde he adquirido habilidades en la gestión de sistemas operativos
          como <strong>Windows Server</strong>, así como en la configuración y
          mantenimiento de redes empresariales. He trabajado en la
          implementación de soluciones de <strong>ciberseguridad</strong>,
          incluyendo firewalls y sistemas de detección de intrusiones, y he
          automatizado tareas administrativas mediante scripts en{" "}
          <strong>Bash</strong> y <strong>PowerShell</strong>. Esta experiencia
          me permite abordar proyectos desde una perspectiva integral,
          asegurando tanto el desarrollo como la infraestructura necesaria para
          su correcto funcionamiento.
        </p> */}
            </section>

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
                    />
                    <InterestCard
                        title={"Aprendizaje"}
                        description={
                            "Aprender nuevas herramientas y frameworks del ecosistema Backend y Frontend."
                        }
                    />
                    <InterestCard
                        title={"Proyectos reales"}
                        description={
                            "Trabajar en proyectos reales del sector con desafíos técnicos."
                        }
                    />
                    <InterestCard
                        title={"Diseño de software"}
                        description={
                            "Mejorar continuamente mis habilidades de diseño de software y arquitectura."
                        }
                    />
                    <InterestCard
                        title={"Metodologías ágiles"}
                        description={
                            "Adoptar buenas prácticas de desarrollo y metodologías ágiles."
                        }
                    />
                </div>
            </section>

            <section className="mt-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-gray-200">
                    Tecnologías
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <div className="w-full">
                        <TechnologyCard name={"Spring Boot"} iconSrc={"./icons/springboot.jpg"} />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"Java"} iconSrc={"./icons/java.png"} />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"Angular"} iconSrc={"./icons/angular.jpg"} />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"JavaScript"} iconSrc={"./icons/javascript.png"} />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"TypeScript"} iconSrc={"./icons/typescript.png"} />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"Tailwind"} iconSrc={"./icons/tailwindImage.png"} />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"Docker"} iconSrc={"./icons/docker.jpg"} />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"MySQL"} iconSrc={"./icons/mysql.jpg"} />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"PostgreSQL"} iconSrc={"./icons/postgresql.png"} />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"MongoDB"} iconSrc={"./icons/mongo-icon.png"} />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"Git"} iconSrc={"./icons/git.png"} />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"GitHub"} iconSrc={"./icons/github.png"} />
                    </div>
                    <div className="w-full">
                        <TechnologyCard name={"GitLab"} iconSrc={"./icons/gitlab.png"} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

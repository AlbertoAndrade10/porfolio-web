// src/pages/Home.tsx
import React, { useEffect } from "react";
import Card from "../components/Card";
import TitleExperienciaLaboral from "../components/TitleExperience";
import TitleFormacionAcademica from "../components/TitleFormacionAcademica";
import TitleIdiomas from "../components/TitleIdiomas";
import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);
    return (

        <div className="py-12 animate__animated animate__fadeIn">
            {/* PORTADA */}
            <div data-aos="fade-down" className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                <div className="flex-shrink-0">
                    <picture>
                        <source srcSet="./images/FotoCurriculum.png" type="image/webp" />
                        <img
                            src="./images/FotoCurriculum.png"
                            alt="Alberto Andrade Ortiz"
                            className="w-70 h-70 rounded-full object-cover border-4 border-gray-200 shadow-lg ml[-5]"
                        />
                    </picture>
                </div>

                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-black">Alberto Andrade Ortiz</span>
                    </h1>
                    <p className="text-xl text-gray-600">Desarrollador Web</p>
                </div>
            </div>

            {/* EXPERIENCIA LABORAL */}
            <TitleExperienciaLaboral title={"Experiencia laboral"} />
            <div data-aos="fade-left" className="space-y-8 mt-5 w-full ">
                <Card title="Desarrollador en Insinno SL">
                    <div className="space-y-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    Microservicios con Spring Boot
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">Servicios en Angular</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    Automatización de servicios con Python nativo
                                </span>
                            </li>
                        </ul>
                    </div>
                </Card>

                <Card title="Asesor en App Informática">
                    <div className="space-y-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    Montaje y mantenimiento de equipos informáticos
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">Asesoramiento a clientes</span>
                            </li>
                        </ul>
                    </div>
                </Card>

                {/* FORMACION ACADEMICA */}
                <TitleFormacionAcademica title={"Formación Académica"} />

                <Card title="Desarrollo de Aplicaciones Web">
                    <div className="space-y-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">Programación Java</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">Spring Boot Framework</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">Programación JavaScript</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">Programación TypeScript</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">Angular Framework</span>
                            </li>
                        </ul>
                    </div>
                </Card>

                <Card title="Administración de Sistemas Informáticos en Red">
                    <div className="space-y-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    Gestión y administración de Sistemas Operativos
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">Seguridad Informática</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">Redes y Comunicaciones</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    Automatización y Scripts de Administración
                                </span>
                            </li>
                        </ul>
                    </div>
                </Card>

                <Card title="Sistemas Informaticos y Redes">
                    <div className="space-y-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    Montaje y desmontaje de equipos informáticos
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">Redes básicas</span>
                            </li>
                        </ul>
                    </div>
                </Card>

                <Card title="IES Murillo">
                    <div className="space-y-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    Educación secundaria Obligatoria
                                </span>
                            </li>
                        </ul>
                    </div>
                </Card>

                <TitleIdiomas title={"Idiomas"} />
                <Card title="Castellano">
                    <div className="space-y-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">Nativo</span>
                            </li>
                        </ul>
                    </div>
                </Card>
                <Card title="Inglés">
                    <div className="space-y-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">B1</span>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Home;

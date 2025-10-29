import React from "react";
import "animate.css";
interface Feature {
    title: string;
    description: string;
}

interface AboutProjectProps {
    headerTitle: string;
    headerDescription: string;
    features: Feature[];
    summary?: string;
    buttonText: string;
    onButtonClick?: () => void;
}

const AboutProjectsTemplate: React.FC<AboutProjectProps> = ({
    headerTitle,
    headerDescription,
    features,
    summary,
    buttonText,
    onButtonClick,
}) => {
    return (
        <div className="mt-6 animate__animated animate__fadeIn">
            {/* Encabezado */}
            <div className="bg-gray-200 text-black py-8 ">
                <div data-aos="fade-up" className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold tracking-wide text-black">{headerTitle}</h1>
                    <p className="mt-2 text-lg text-black">{headerDescription}</p>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    {/* Lista de características */}
                    <ul data-aos="fade-right" className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div>
                                    <strong className="text-gray-800 block">{feature.title}</strong>
                                    <span className="text-gray-600">{feature.description}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Resumen */}
                    <p data-aos="fade-left" className="mt-8 text-lg text-gray-700 text-center">{summary}</p>

                    {/* Botón */}
                    <div data-aos="fade-down" className="flex justify-center mt-6">
                        <button
                            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer"
                            onClick={onButtonClick}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutProjectsTemplate;
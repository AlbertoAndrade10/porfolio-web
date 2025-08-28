// src/components/ProjectCard.tsx
import TechnologyCard from "./TechnologyCard";

interface Technology {
    name: string;
    iconSrc: string;
}

interface ProjectCardProps {
    imgSrc: string;
    title: string;
    description: string;
    buttonLink: { to: string; label: string };
    status: "finalizado" | "en-desarrollo";
    technologies: Technology[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    imgSrc,
    title,
    description,
    buttonLink,
    status,
    technologies,
}) => {
    return (
        <div className="project-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-left overflow-hidden h-full flex flex-col border border-gray-100 hover:border-indigo-200">
            {/* Imagen sin efecto flip */}
            <div className="relative h-48">
                <div className="relative w-full h-full">
                    {/* Solo la imagen - Sin flip */}
                    <div className="absolute inset-0">
                        <img
                            src={imgSrc}
                            alt={title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src =
                                    "https://via.placeholder.com/400x200/CCCCCC/969696?text=Imagen+no+disponible";
                            }}
                        />
                        <span
                            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${status === "finalizado"
                                ? "bg-green-100 text-green-800 border border-green-200"
                                : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                                }`}
                        >
                            {status === "finalizado" ? "FINALIZADO" : "EN DESARROLLO"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Contenido Principal */}
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">{title}</h3>

                {/* Descripción */}
                <p className="text-base text-gray-600 leading-relaxed mb-5 flex-grow">
                    {description.length > 1000
                        ? description.substring(0, 1000) + "..."
                        : description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech: Technology, index: number) => (
                        <div key={index} className="flex-shrink-0">
                            <TechnologyCard
                                name={tech.name}
                                iconSrc={tech.iconSrc}
                            />
                        </div>
                    ))}
                </div>

                {/* Botón */}
                <a
                    href={buttonLink.to}
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-md hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide uppercase letter-spacing-1"
                >
                    Ver Proyecto
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
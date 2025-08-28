import React from "react";
import TechnologyCard from "./TechnologyCard";
import TechnologyCardFooter from "./FooterCard";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black py-8 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    {/* Texto principal */}
                    <p className="mb-4 text-center">
                        Este proyecto está desarrollado con
                    </p>

                    {/* Tarjetas de tecnología */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="w-auto">
                            <TechnologyCard
                                name={"React"}
                                iconSrc={"./icons/react.png"}
                            />
                        </div>
                        <div className="w-auto">
                            <TechnologyCardFooter
                                name={"Tailwind"}
                                iconSrc={"./icons/tailwindImage.png"}
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-6 pt-6 text-center text-black">
                    <p>© {new Date().getFullYear()} Alberto Andrade Ortiz.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
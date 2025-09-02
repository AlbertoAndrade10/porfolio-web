import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black py-8">
            <div className="container mx-auto px-4">
                <div className="border-t border-gray-700 mt-6 pt-6">
                    <div className="flex items-center justify-center gap-4">
                        <Logo
                            className="w-auto h-10"
                            href="#/"
                        />
                        <p>© {new Date().getFullYear()} Alberto Andrade Ortiz.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
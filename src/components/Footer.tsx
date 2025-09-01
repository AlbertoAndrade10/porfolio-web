import React from "react";


const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black py-8 ">
            <div className="container mx-auto px-4">
                <div className="border-t border-gray-700 mt-6 pt-6 text-center text-black">
                    <p>© {new Date().getFullYear()} Alberto Andrade Ortiz.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
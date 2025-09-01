import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Header: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Header fijo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // Cierre de menú al cambiar de ruta
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Bloquear/desbloquear scroll del body
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"; // Bloquea el scroll
        } else {
            document.body.style.overflow = ""; // Restaura el scroll
        }

        return () => {
            document.body.style.overflow = ""; // Asegura que el scroll se restaure al desmontar el componente
        };
    }, [isMenuOpen]);

    // Cierre de menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const menu = document.getElementById('mobile-menu');
            const button = document.getElementById('menu-button');

            if (isMenuOpen && menu && button &&
                !menu.contains(event.target as Node) &&
                !button.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Cierre de menú con la tecla ESC (escape)
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen]);

    // Rutas para el nav
    const navItems = [
        { to: "/", label: "Inicio" },
        { to: "/sobre-mi", label: "Sobre mí" },
        { to: "/proyectos", label: "Proyectos" },
        { to: "/contacto", label: "Contacto" }
    ];

    return (
        <header className="bg-white text-black shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                {/* Contenedor */}
                <div className="hidden md:flex justify-center items-center relative">
                    <div className="absolute left-0 text-xl font-bold">
                        <Logo
                            className="w-auto h-10"
                            href="#/"
                        />
                    </div>

                    {/* Menú de escritorio - centrado */}
                    <nav className="flex">
                        <ul className="flex gap-6 font-medium">
                            {navItems.map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className={`hover:text-blue-400 transition-colors  ${location.pathname === item.to ? 'text-blue-400' : ''
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="absolute right-0 w-24">
                    </div>
                </div>

                {/* Layout móviles */}
                <div className="flex md:hidden justify-between items-center">
                    {/* Logo o marca (opcional) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold">
                        <Logo className="h-8 w-auto" />
                    </div>

                    {/* Sección izquierda en móviles - texto + botón menú */}
                    <div className="flex items-center gap-4">
                        {/* Botón de menú hamburguesa */}
                        <button
                            id="menu-button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-700 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                // Icono X
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Icono hamburguesa
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menú móvil */}
                <div
                    id="mobile-menu"
                    className={`md:hidden fixed top-0 left-0 h-full w-1/2 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Header del menú móvil con botón de cierre */}
                        <div className="flex justify-end items-center p-4 border-b">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-md text-gray-700 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                aria-label="Close menu"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Items del menú */}
                        <nav className="flex-1 flex flex-col justify-center px-6">
                            <ul className="space-y-8">
                                {navItems.map((item) => (
                                    <li key={item.to}>
                                        <Link
                                            to={item.to}
                                            className={`text-xl font-medium hover:text-blue-400 transition-colors block py-2 ${location.pathname === item.to ? 'text-blue-400' : ''
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
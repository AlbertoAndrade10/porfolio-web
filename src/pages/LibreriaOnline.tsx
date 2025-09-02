import React from "react";
import AboutProjectsTemplate from "../components/AboutProjectTemplate";

const LibreriaOnline: React.FC = () => {
    const features = [
        {
            title: "Registro y autenticación",
            description: "Los usuarios pueden crear una cuenta y acceder de forma segura a la plataforma.",
        },
        {
            title: "Catálogo de libros",
            description: "Explora un catálogo completo de libros con información detallada sobre cada título.",
        },
        {
            title: "Gestión de inventario",
            description: "Verifica la disponibilidad de libros en tiempo real antes de realizar una compra.",
        },
        {

            title: "Carrito de compras",
            description: "Agrega libros al carrito mientras navegas y procede al pago cuando estés listo.",
        },
        {

            title: "Pagos seguros",
            description: "Procesa pagos de manera segura y confiable.",
        },
    ];

    return (
        <AboutProjectsTemplate
            headerTitle="Librería Online"
            headerDescription="Una plataforma moderna para explorar y comprar libros."
            features={features}
            summary="En resumen, 'Librería Online' es una solución integral para gestionar una tienda de libros digital, asegurando una experiencia fluida y segura tanto para los usuarios como para los administradores."
            buttonText="Ver el código del proyecto"
            onButtonClick={() => {
                window.open("https://github.com/AbertoAndrade10/LibreriaOnlineFullStack", "_blank");
            }}
        />
    );
};

export default LibreriaOnline;
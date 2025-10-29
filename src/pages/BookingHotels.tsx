import React from "react";
import AboutProjectsTemplate from "../components/AboutProjectTemplate";

const BookingHotels: React.FC = () => {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3z" />
                </svg>
            ),
            title: "Autenticación",
            description:
                "Registro y login de usuarios",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10a3 3 0 11-6 0 3 3 0 016 0zm6-3a6 6 0 01-6 6H6a6 6 0 01-6-6v-2c0-1.1.9-2 2-2h12a2 2 0 012 2v2z" />
                </svg>
            ),
            title: "Catálogo",
            description:
                "Elije la habitación que más te guste en nuestro sistema, realiza la reserva para el tiempo que desees y recibe toda la información por correo electrónico.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: "Valoraciones",
            description:
                "Deja un comentario y valora tu experiencia.",
        },
    ];

    return (
        <AboutProjectsTemplate
            headerTitle="Booking Hotels"
            headerDescription="Un proyecto de para reservar habitaciones de hoteles a placer"
            features={features}
            summary="Reserva tu habitación de hotel y organiza tus vacaciones."
            buttonText="Ver el código del proyecto"
            onButtonClick={() => {
                window.open("https://github.com/AlbertoAndrade10/HotelBookingSpringBoot", "_blank");
            }}
        />
    );
};

export default BookingHotels;
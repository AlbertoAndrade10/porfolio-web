import React from "react";

interface ContactInfo {
    id: string;
    label: string;
    value: string;
    icon: React.ReactNode;
    action: string;
}

interface ContactCardProps {
    contact: ContactInfo;
    onCopy: (text: string, field: string) => void;
    copiedField: string | null;
    aosEffect?: string; // Nuevo prop opcional para AOS
}

const ContactCard: React.FC<ContactCardProps> = ({
    contact,
    onCopy,
    copiedField,
    aosEffect = "fade-up", // Valor predeterminado
}) => {
    const handleClick = () => {
        if (contact.id === "email") {
            window.location.href = contact.action;
        } else {
            window.open(contact.action, "_blank");
        }
    };

    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        onCopy(contact.value, contact.id);
    };

    const isCopied = copiedField === contact.id;

    return (
        <div
            data-aos={aosEffect} // Aplicamos el efecto AOS aquí
            className="flex items-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
            onClick={handleClick}
        >
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
                {contact.icon}
            </div>
            <div className="ml-3 sm:ml-4 flex-grow min-w-0">
                <div className="text-xs sm:text-sm font-medium text-gray-500 truncate">
                    {contact.label}
                </div>
                <div className="text-sm sm:text-base text-gray-900 font-medium truncate">
                    {contact.value}
                </div>
            </div>
            <button
                onClick={handleCopy}
                className="ml-2 sm:ml-3 p-1.5 sm:p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200 flex-shrink-0"
                title={`Copiar ${contact.label}`}
            >
                {isCopied ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default ContactCard;
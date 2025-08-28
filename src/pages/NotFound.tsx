// src/components/NotFound.tsx
import React from "react";

interface NotFoundProps {
    imageUrl?: string;
    altText?: string;
    className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({
    imageUrl = "./images/404-notfound.png",
    altText = "Página no encontrada",
    className = ""
}) => {
    return (
        <div className="flex items-center justify-center py-9">
            <img
                src={imageUrl}
                alt={altText}
                className={`max-w-full h-auto ${className}`}
            />
        </div>
    );
};

export default NotFound;
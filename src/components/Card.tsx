import React from "react";

interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = "" }) => {
    return (
        <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="text-gray-700">{children}</div>
        </div>
    );
};

export default Card;

import React from "react";

interface InterestProps {
    title: string;
    description: string;
}

const InterestCard: React.FC<InterestProps> = ({ title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default InterestCard;

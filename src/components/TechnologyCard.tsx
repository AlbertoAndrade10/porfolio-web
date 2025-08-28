// src/components/TechnologyCard.tsx
import React from 'react';

interface TechnologyCardProps {
    name: string;
    iconSrc: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, iconSrc }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow min-h-[80px]">
            <img
                src={iconSrc}
                alt={name}
                className="w-6 h-6 object-contain mb-1"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/24/CCCCCC/969696?text=?';
                }}
            />
            <span className="text-gray-700 text-xs font-medium text-center truncate px-1">
                {name}
            </span>
        </div>
    );
};

export default TechnologyCard;
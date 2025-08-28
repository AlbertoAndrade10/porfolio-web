
import React from "react";

interface TitleIdiomas {
    title: string;
}

const TitleIdiomas: React.FC<TitleIdiomas> = ({ title }) => {
    return (
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 pb-2 border-b-2 border-gray-200">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                ></path>
            </svg>
            {title}
        </h2>
    );
};

export default TitleIdiomas;

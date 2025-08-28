import React from "react";

interface LogoProps {
    className?: string;
    href?: string;
}

const Logo: React.FC<LogoProps> = ({
    className = "",
    href = "/"
}) => {
    return (
        <a href={href}>
            <img
                src="/images/logo-a.png"
                alt="Logo Alberto Andrade Ortiz"
                className={className}
            />
        </a>
    );
};

export default Logo;
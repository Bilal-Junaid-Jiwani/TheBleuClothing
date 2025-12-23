import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300 border-2";

    const variants = {
        primary: "bg-white text-black border-white hover:bg-black hover:text-white",
        outline: "bg-transparent text-white border-white hover:bg-white hover:text-black",
        accent: "bg-blue-600 text-white border-blue-600 hover:bg-transparent hover:text-blue-600"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

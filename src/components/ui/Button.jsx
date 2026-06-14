import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, variant = "primary", to, className = "", disabled, ...props }) => {
  const baseStyles = "p-3 md:p-4 text-center font-bold transition-all cursor-pointer rounded-lg text-sm md:text-base active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 border-none",
    secondary: "bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-700",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;


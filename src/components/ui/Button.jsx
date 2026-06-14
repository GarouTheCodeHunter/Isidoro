import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, variant = "primary", to, className = "", disabled, ...props }) => {
  const baseStyles = "px-5 py-2.5 md:px-6 md:py-3 text-center font-semibold transition-all cursor-pointer rounded-lg text-sm md:text-base active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 border-none",
    secondary: "bg-white border border-slate-200 hover:bg-slate-50 text-slate-700",
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




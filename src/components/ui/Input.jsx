import React from "react";

const Input = React.forwardRef(({ label, error, className = "", ...props }, ref) => {
  return (
    <div className={`flex flex-col w-full gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={props.id || props.name} className="text-sm font-semibold text-slate-700 ml-0.5">
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...props}
        className={`w-full p-2.5 md:p-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all text-sm md:text-base text-slate-800 placeholder:text-slate-300 ${
          error ? "border-red-300 ring-4 ring-red-500/5" : ""
        }`}
      />
      {error && <p className="text-red-500 text-[10px] md:text-xs mt-0.5 font-semibold ml-0.5">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;




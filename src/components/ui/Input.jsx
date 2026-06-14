import React from "react";

const Input = React.forwardRef(({ label, error, className = "", ...props }, ref) => {
  return (
    <div className={`flex flex-col w-full gap-2 ${className}`}>
      {label && (
        <label htmlFor={props.id || props.name} className="text-sm md:text-lg font-bold text-zinc-700 ml-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...props}
        className={`w-full p-4 md:p-5 rounded-2xl border-2 border-zinc-100 bg-zinc-50/50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-base md:text-lg font-medium text-zinc-800 placeholder:text-zinc-300 ${
          error ? "border-red-400 ring-4 ring-red-500/10 bg-white" : ""
        }`}
      />
      {error && <p className="text-red-500 text-xs md:text-base mt-1 font-bold ml-1">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;



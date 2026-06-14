import React from "react";

const Select = React.forwardRef(({ label, error, options = [], className = "", ...props }, ref) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label htmlFor={props.id || props.name} className="text-sm md:text-base font-bold mb-1 text-zinc-700">
          {label}
        </label>
      )}
      <select
        ref={ref}
        {...props}
        className={`w-full p-3 md:p-4 rounded-lg border border-zinc-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm md:text-base appearance-none cursor-pointer ${
          error ? "border-red-500 ring-1 ring-red-500" : ""
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs md:text-sm mt-1 font-medium">{error}</p>}
    </div>
  );
});

Select.displayName = "Select";

export default Select;


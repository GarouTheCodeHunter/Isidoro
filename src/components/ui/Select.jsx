import React from "react";

const Select = React.forwardRef(({ label, error, options = [], className = "", ...props }, ref) => {
  return (
    <div className={`flex flex-col w-full gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={props.id || props.name} className="text-sm font-semibold text-slate-700 ml-0.5">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          {...props}
          className={`w-full p-2.5 md:p-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all text-sm md:text-base text-slate-800 appearance-none cursor-pointer ${
            error ? "border-red-300 ring-4 ring-red-500/5" : ""
          }`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && <p className="text-red-500 text-[10px] md:text-xs mt-0.5 font-semibold ml-0.5">{error}</p>}
    </div>
  );
});

Select.displayName = "Select";

export default Select;




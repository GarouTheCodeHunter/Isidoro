import React from "react";

const FormSection = ({ icon: Icon, title, description, children }) => {
  return (
    <div className="w-full bg-white flex flex-col p-6 md:p-10 rounded-3xl shadow-xl shadow-zinc-200/50 border border-zinc-100">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
          {Icon && (
            <div className="p-4 md:p-5 bg-blue-50 rounded-2xl shrink-0 w-fit">
              <Icon className="w-10 h-10 md:w-14 md:h-14 text-blue-700" />
            </div>
          )}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-zinc-800 tracking-tight">{title}</h2>
            {description && (
              <p className="text-sm md:text-lg text-zinc-400 font-medium mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
        <hr className="border-zinc-50 w-full mb-10" />
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormSection;



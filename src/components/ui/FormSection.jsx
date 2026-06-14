import React from "react";

const FormSection = ({ icon: Icon, title, description, children }) => {
  return (
    <div className="w-full bg-white flex flex-col p-5 md:p-8 rounded-xl shadow-sm border border-slate-200">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          {Icon && (
            <div className="p-3 bg-blue-50 rounded-lg shrink-0 w-fit">
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
            </div>
          )}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">{title}</h2>
            {description && (
              <p className="text-xs md:text-sm text-slate-400 font-medium mt-0.5">
                {description}
              </p>
            )}
          </div>
        </div>
        <hr className="border-slate-50 w-full mb-8" />
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormSection;




import React from "react";

const PageHeader = ({ title, description }) => {
  return (
    <div className="w-full flex flex-col gap-1 mb-2">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;




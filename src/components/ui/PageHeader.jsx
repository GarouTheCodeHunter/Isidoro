import React from "react";

const PageHeader = ({ title, description }) => {
  return (
    <div className="w-full flex flex-col gap-2 mb-4">
      <h1 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
        {title}
      </h1>
      {description && (
        <p className="text-base md:text-xl text-zinc-500 font-medium max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;



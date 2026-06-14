import React from "react";

const FormLayout = ({ children }) => {
  return (
    <section className="flex-1 w-full min-h-screen bg-slate-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto py-6 md:py-10 px-4 md:px-8 lg:px-10 flex flex-col gap-6 md:gap-8">
        {children}
      </div>
    </section>
  );
};

export default FormLayout;




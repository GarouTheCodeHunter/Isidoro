import React from "react";

const FormLayout = ({ children }) => {
  return (
    <section className="flex-1 w-full min-h-screen bg-zinc-50 overflow-y-auto">
      <div className="max-w-[1400px] mx-auto py-8 md:py-12 px-4 md:px-10 flex flex-col gap-8 md:gap-12">
        {children}
      </div>
    </section>
  );
};

export default FormLayout;



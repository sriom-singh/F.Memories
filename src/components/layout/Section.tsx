import React from "react";
import clsx from "clsx"; // Optional: for merging classNames safely

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section
      className={clsx(
        "max-w-7xl px-8 md:px-4 xl:px-0 font-openSans py-16 lg:py-20 mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
};

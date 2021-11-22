import clsx from "clsx";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

export const H1 = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={clsx(
        "text-5xl md:text-7xl lg:text-9xl font-black text-center",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children }: TypographyProps) => {
  return (
    <h1 className="text-gray-400 text-3xl md:text-5xl lg:text-6xl font-black mt-14">
      {children}
    </h1>
  );
};

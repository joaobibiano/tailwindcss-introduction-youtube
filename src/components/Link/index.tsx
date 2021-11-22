type LinkProps = {
  children: string;
  href: string;
};
export const Link = ({ children, href }: LinkProps) => {
  return (
    <a
      href={href}
      className="
      mt-14
      bg-purple-700
      text-white
      py-2
      px-5
      rounded-full
      text-3xl
      hover:bg-purple-200
      animate-bounce
      md:py-6
      md:px-10
      "
    >
      {children}
    </a>
  );
};

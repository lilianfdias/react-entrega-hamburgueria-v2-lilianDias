import React from "react";

interface iTextProps {
  children: string | number;
  className?: string;
  tag: string;
  href?: string;
}

export const Text = ({ children, className, tag, href }: iTextProps) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "h4" && <h4 className={className}>{children}</h4>}
      {tag === "span" && <span className={className}>{children}</span>}
      {tag === "caption" && <caption className={className}>{children}</caption>}
      {tag === "a" && (
        <a href={href} className={className}>
          {children}
        </a>
      )}
    </>
  );
};

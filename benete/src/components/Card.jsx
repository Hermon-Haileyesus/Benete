import React from "react";

function Card  ({ children, className = "", variant = "default", ...props })  {
  const baseStyles = "rounded-xl p-6 transition-all duration-300";

  const variantStyles = {
    default: "bg-white border border-gray-200 shadow-sm",
    outlined: "bg-white border border-gray-400",
    elevated: "bg-white border border-transparent shadow-lg",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};
export default Card
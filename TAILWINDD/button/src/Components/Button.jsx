import React from 'react';

function Button({ children, variant = 'primary', size = 'md', ...props }) {
  const baseStyle = "font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    secondary: "bg-white text-green-600 border border-green-600 hover:bg-green-50 focus:ring-green-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    success: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const className = `
    ${baseStyle}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
  `;

  return (
    <button className={className.trim()} {...props}>
      {children}
    </button>
  );
}

export default Button;
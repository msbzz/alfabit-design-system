import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  /**
   * Classe CSS adicional para estilização personalizada
   */
  className?: string;
  /**
   * Callback acionado ao clicar no botão
   */
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, className, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md 
        px-[32px] 
        py-[12px] 
        text-white 
        bg-primary
        hover:bg-primary/80
        active:shadow-lg
        transition-all duration-200 
        border-spacing-0 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

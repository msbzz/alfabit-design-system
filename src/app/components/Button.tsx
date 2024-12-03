import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  /**
   * Classe CSS adicional para estilização personalizada
   */
  className?: string;
  disabled?:boolean;
  /**
   * Callback acionado ao clicar no botão
   */
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, className,disabled, onClick, ...props }) => {
  
  const genetateStyles='rounded-md px-[32px] py-[12px] ';
  const usingStyles ='text-white bg-primary hover:bg-primary/80 active:shadow-lg transition-all duration-200'
  
  const Btn = (classes:string)=>{
     return (
      <button
      onClick={onClick}
      disabled={disabled}
      className={`order-spacing-0 ${className} ${classes} ${genetateStyles}`}      
      {...props}
    >
      {children}
    </button>

     )
  }
  
  return (
        Btn(disabled?'bg-disabled text-disabled': `${usingStyles}`)
      );
};

export default Button;

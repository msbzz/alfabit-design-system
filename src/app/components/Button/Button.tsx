import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?:'primary'|'secondary'|'tertiary';
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(variant:ButtonProps['variant'],disabled:ButtonProps['disabled']){
   
  const usingStyles ='text-white bg-primary hover:bg-primary/80 active:shadow-lg transition-all duration-200'

  switch(variant){
    case 'primary':
      return disabled ?'bg-disabled text-disabled':`bg-primary text-white  ${usingStyles}` 
    case 'secondary':
      return disabled ?'bg-disabled text-disabled':`bg-secondary text-primary   ${usingStyles}` 
    case 'tertiary':
      return disabled ?'bg-disabled text-disabled':'' 
    default:
        return disabled ?'':''  
  }


}

const Button: React.FC<ButtonProps> = ({variant='primary' ,children, className,disabled, onClick, ...props }) => {
  
   
  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className={`rounded-md px-[32px] py-[12px]  order-spacing-0 ${getVariant(variant,disabled)} ${className} `}      
    {...props}
  >
    {children}
  </button>
      );
};

export default Button;

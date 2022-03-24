import * as React from 'react';

import './Button.css';

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    variant?: 'primary' | 'secondary';
    outline?: boolean;
  }
> = ({
  children,
  type = 'button',
  variant = 'primary',
  outline = false,
  ...restProps
}) => {
  const outlineClass = outline ? 'Button--outline' : '';
  return (
    <button
      className={`Button Button--${variant} ${outlineClass}`}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;

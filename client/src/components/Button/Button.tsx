import * as React from 'react';

import './Button.css';

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    variant?: 'primary' | 'secondary';
  }
> = ({ children, variant, ...restProps }) => {
  const btnVariant = variant ?? 'primary';

  return (
    <button
      className={`Button Button--${btnVariant}`}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;

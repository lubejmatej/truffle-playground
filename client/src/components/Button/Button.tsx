import * as React from 'react';

import './Button.css';

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, ...restProps }) => {
  return (
    <button className="Button" type="button" {...restProps}>
      {children}
    </button>
  );
};

export default Button;

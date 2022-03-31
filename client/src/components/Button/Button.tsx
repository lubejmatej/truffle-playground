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
  const classNames = [
    'Button',
    `Button--${variant}`,
    ...(outline ? ['Button--outline'] : []),
  ];

  return (
    <button className={classNames.join(' ')} type={type} {...restProps}>
      {children}
    </button>
  );
};

export default Button;

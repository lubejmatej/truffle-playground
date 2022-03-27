import * as React from 'react';
import {
  create,
  act,
  ReactTestInstance,
  ReactTestRenderer,
} from 'react-test-renderer';

import Button from '../src/components/Button/Button';

const ensureButtonProps = (
  cmpInstance: ReactTestInstance,
  { variant, outline }: { variant?: 'primary' | 'secondary'; outline?: boolean }
) => {
  const buttonProps = cmpInstance.findByType('button').props;
  const buttonClasses = buttonProps.className;

  expect(buttonClasses).toContain('Button');

  if (variant === 'primary') {
    expect(buttonClasses).toContain('Button--primary');
  } else {
    expect(buttonClasses).not.toContain('Button--primary');
  }

  if (variant === 'secondary') {
    expect(buttonClasses).toContain('Button--secondary');
  } else {
    expect(buttonClasses).not.toContain('Button--secondary');
  }

  if (outline) {
    expect(buttonClasses).toContain('Button--outline');
  } else {
    expect(buttonClasses).not.toContain('Button--outline');
  }

  expect(buttonProps.children).toBeUndefined();
};

it('renders button variants', () => {
  let cmpRenderer!: ReactTestRenderer;

  act(() => {
    cmpRenderer = create(<Button />);
  });
  expect(cmpRenderer.toJSON()).toMatchSnapshot();
  ensureButtonProps(cmpRenderer.root, { variant: 'primary', outline: false });

  act(() => {
    cmpRenderer.update(<Button variant="secondary" outline />);
  });
  expect(cmpRenderer.toJSON()).toMatchSnapshot();
  ensureButtonProps(cmpRenderer.root, { variant: 'secondary', outline: true });

  act(() => {
    cmpRenderer.update(<Button outline />);
  });
  expect(cmpRenderer.toJSON()).toMatchSnapshot();
  ensureButtonProps(cmpRenderer.root, { variant: 'primary', outline: true });
});

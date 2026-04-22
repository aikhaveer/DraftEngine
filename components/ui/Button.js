'use client';

import { cloneElement, forwardRef, isValidElement } from 'react';
import { cn } from '@/lib/utils';

const variants = {
  default: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
  outline:
    'border border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800 focus-visible:ring-gray-500',
  ghost: 'text-gray-300 hover:bg-gray-800 focus-visible:ring-gray-500',
  destructive: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
};

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-10 w-10',
};

const Button = forwardRef(function Button(
  { className, variant = 'default', size = 'md', disabled, asChild = false, children, ...props },
  ref
) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-medium',
    'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant] ?? variants.default,
    sizes[size] ?? sizes.md,
    className
  );

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      ref,
      className: cn(classes, children.props.className),
    });
  }

  return (
    <button ref={ref} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
});

export default Button;

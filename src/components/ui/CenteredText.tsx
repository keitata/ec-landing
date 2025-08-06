import React from 'react';
import { cn } from '@/lib/utils';
import { CenteredTextProps } from '@/types/ui';

export default function CenteredText({ 
  children, 
  className,
  size = 'sm',
  color = 'gray'
}: CenteredTextProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg'
  };

  const colorClasses = {
    gray: 'text-gray-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600'
  };

  return (
    <p className={cn(
      'text-center',
      sizeClasses[size],
      colorClasses[color],
      className
    )}>
      {children}
    </p>
  );
} 
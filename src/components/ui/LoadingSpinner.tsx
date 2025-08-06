import React from 'react';
import { cn } from '@/lib/utils';
import { LoadingSpinnerProps } from '@/types/ui';

export default function LoadingSpinner({ 
  size = 'md', 
  className, 
  text = '読み込み中...',
  showText = true 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  return (
    <div className={cn('text-center', className)}>
      <div className={cn(
        'animate-spin rounded-full border-b-2 border-blue-600 mx-auto',
        sizeClasses[size]
      )} />
      {showText && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
    </div>
  );
} 
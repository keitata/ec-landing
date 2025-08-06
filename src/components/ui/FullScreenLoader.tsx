import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import { FullScreenLoaderProps } from '@/types/ui';

export default function FullScreenLoader({ 
  text = '読み込み中...',
  spinnerSize = 'lg',
  className 
}: FullScreenLoaderProps) {
  return (
    <div className={`min-h-screen bg-gray-50 flex items-center justify-center ${className || ''}`}>
      <LoadingSpinner 
        size={spinnerSize} 
        text={text}
        showText={true}
      />
    </div>
  );
} 
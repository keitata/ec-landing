import React from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import { AlertMessageProps } from '@/types/ui';

export default function AlertMessage({ 
  type, 
  title, 
  message, 
  className,
  onClose 
}: AlertMessageProps) {
  const alertStyles = {
    error: {
      container: 'bg-red-50 border border-red-200 text-red-700',
      icon: XCircle,
      iconColor: 'text-red-600'
    },
    success: {
      container: 'bg-green-50 border border-green-200 text-green-700',
      icon: CheckCircle,
      iconColor: 'text-green-600'
    },
    warning: {
      container: 'bg-yellow-50 border border-yellow-200 text-yellow-700',
      icon: AlertCircle,
      iconColor: 'text-yellow-600'
    },
    info: {
      container: 'bg-blue-50 border border-blue-200 text-blue-700',
      icon: Info,
      iconColor: 'text-blue-600'
    }
  };

  const style = alertStyles[type];
  const Icon = style.icon;

  return (
    <div className={cn(
      'rounded-lg p-4',
      style.container,
      className
    )}>
      <div className="flex items-start">
        <Icon className={cn('h-5 w-5 mt-0.5 mr-3 flex-shrink-0', style.iconColor)} />
        <div className="flex-1">
          {title && (
            <h3 className="text-sm font-medium mb-1">{title}</h3>
          )}
          <p className="text-sm">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-3 flex-shrink-0 text-gray-400 hover:text-gray-600"
          >
            <XCircle className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
} 
export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
  showText?: boolean;
}

export interface AlertMessageProps {
  type: 'error' | 'success' | 'warning' | 'info';
  title?: string;
  message: string;
  className?: string;
  onClose?: () => void;
}

export interface FullScreenLoaderProps {
  text?: string;
  spinnerSize?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export interface CenteredTextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg';
  color?: 'gray' | 'blue' | 'green' | 'red' | 'yellow';
} 
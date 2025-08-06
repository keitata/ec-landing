import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (amount: number, currency: string = 'JPY'): string => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(dateObj);
};

export const formatDateTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(dateObj);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\-\+\(\)\s]+$/;
  return phoneRegex.test(phone);
};

export const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, '');
};

export const parseJsonSafely = (jsonString: string): unknown => {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
};

// 配列の重複削除
export function removeDuplicates<T>(array: T[]): T[] {
  return [...new Set(array)]
}

// オブジェクトの深いコピー
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

// バリデーション関数
export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },
  
  phone: (phone: string): boolean => {
    const phoneRegex = /^[\d\-\+\(\)\s]+$/
    return phoneRegex.test(phone)
  },
  
  required: (value: string): boolean => {
    return value.trim().length > 0
  },
  
  minLength: (value: string, min: number): boolean => {
    return value.length >= min
  },
  
  maxLength: (value: string, max: number): boolean => {
    return value.length <= max
  }
}

// エラーメッセージの生成
export function generateErrorMessage(field: string, type: string): string {
  const messages: Record<string, string> = {
    email: '有効なメールアドレスを入力してください',
    phone: '有効な電話番号を入力してください',
    required: `${field}は必須項目です`,
    minLength: `${field}は最低限の文字数を満たしていません`,
    maxLength: `${field}の文字数が上限を超えています`
  }
  return messages[type] || '入力内容に誤りがあります'
}

// ローディング状態の管理
export function createLoadingState() {
  return {
    loading: false,
    error: null as string | null,
    setLoading: (loading: boolean) => ({ loading }),
    setError: (error: string | null) => ({ error }),
    reset: () => ({ loading: false, error: null })
  }
}

// API レスポンスの型定義
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// API エラーハンドリング
export async function handleApiResponse<T>(response: Response): Promise<ApiResponse<T>> {
  try {
    const data = await response.json()
    
    if (response.ok) {
      return {
        success: true,
        data: data.data || data,
        message: data.message
      }
    } else {
      return {
        success: false,
        error: data.error || data.message || 'リクエストに失敗しました'
      }
    }
  } catch (error) {
    return {
      success: false,
      error: 'ネットワークエラーが発生しました'
    }
  }
} 
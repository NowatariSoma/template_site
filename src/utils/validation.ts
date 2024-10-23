// src/utils/validation.ts

// メールアドレスのバリデーション
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // 必須フィールドのバリデーション
  export const validateRequired = (value: string): boolean => {
    return value.trim().length > 0;
  };
  
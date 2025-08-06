// ブランド・商品名の定数管理
export const BRAND_CONFIG = {
  // メイン商品名
  PRODUCT_NAME: 'ChatShop',
  
  // 短縮名（UIで使用）
  SHORT_NAME: 'ChatShop',
  
  // 英語名
  ENGLISH_NAME: 'ChatShop',
  
  // 説明文
  DESCRIPTION: 'ECサイトのカスタマーサポートを自動化するAIチャットサービス',
  
  // タグライン
  TAGLINE: '24時間365日対応、平均応答時間2秒以内',
  
  // アイコン・絵文字
  ICON: '💬',
  
  // メール送信者名
  EMAIL_FROM_NAME: 'ChatShop',
  
  // サポートメール
  SUPPORT_EMAIL: 'support@example.com',
  
  // ウェブサイト
  WEBSITE: 'https://apparel-ai-support.com',
  
  // 会社名
  COMPANY_NAME: 'ChatShop',
  
  // バージョン
  VERSION: '1.0.0',
  
  // プロジェクトID
  PROJECT_ID: 'chatshop'
} as const;

// 商品名を取得する関数
export const getProductName = (): string => BRAND_CONFIG.PRODUCT_NAME;

// 短縮名を取得する関数
export const getShortName = (): string => BRAND_CONFIG.SHORT_NAME;

// メール件名用の商品名を取得する関数
export const getEmailSubject = (action: string): string => {
  return `【${BRAND_CONFIG.PRODUCT_NAME}】${action}`;
};

// メール送信者名を取得する関数
export const getEmailFromName = (): string => BRAND_CONFIG.EMAIL_FROM_NAME;

// サポート情報を取得する関数
export const getSupportInfo = () => ({
  email: BRAND_CONFIG.SUPPORT_EMAIL,
  website: BRAND_CONFIG.WEBSITE,
  company: BRAND_CONFIG.COMPANY_NAME
}); 
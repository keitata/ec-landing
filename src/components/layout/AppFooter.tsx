'use client';

import Link from 'next/link';
import { BRAND_CONFIG } from '@/constants/brand';


export default function AppFooter() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EC</span>
              </div>
              <span className="text-lg font-bold text-gray-900">
                {BRAND_CONFIG.PRODUCT_NAME}
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              AIチャットボットでECサイトの顧客サポートを自動化
            </p>
          </div>

          {/* アプリケーション */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              アプリケーション
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 text-sm">
                  ダッシュボード
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-gray-600 hover:text-gray-900 text-sm">
                  チャット
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-gray-600 hover:text-gray-900 text-sm">
                  設定
                </Link>
              </li>
            </ul>
          </div>

          {/* サポート */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              サポート
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-gray-900 text-sm">
                  ヘルプ
                </Link>
              </li>
              <li>
                <a href="https://ssl.form-mailer.jp/fms/1939e600862006" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm">
                  お問い合わせ
                </a>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © 2024 {BRAND_CONFIG.PRODUCT_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BRAND_CONFIG } from '@/constants/brand';
import { Menu, X } from 'lucide-react';

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                {BRAND_CONFIG.PRODUCT_NAME}
              </span>
            </Link>
          </div>

          {/* ナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              機能
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              料金
            </a>
            <a href="https://ssl.form-mailer.jp/fms/1939e600862006" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              デモ
            </a>
            <a href="https://ssl.form-mailer.jp/fms/1939e600862006" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              お問い合わせ
            </a>
          </nav>

          {/* デスクトップ アクションボタン */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://ec-9rv4.onrender.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm">
                ログイン
              </Button>
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                機能
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                料金
              </a>
              <a
                href="https://ssl.form-mailer.jp/fms/1939e600862006"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                デモ
              </a>
              <a
                href="https://ssl.form-mailer.jp/fms/1939e600862006"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-2">
                  <a href="https://ec-9rv4.onrender.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-center">
                      ログイン
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 
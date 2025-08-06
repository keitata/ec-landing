'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: 'ChatShopとは何ですか？',
      answer: 'ChatShopは、ECサイトのカスタマーサポートを自動化するAIチャットサービスです。24時間365日対応で、お客様の質問に即座に回答します。'
    },
    {
      question: 'どのような質問に対応できますか？',
      answer: '注文状況確認、商品検索、配送状況追跡、カート操作、返品・交換など、ECサイトでよくある質問に対応しています。'
    },
    {
      question: '導入は簡単ですか？',
      answer: 'はい、数クリックで導入できます。アカウント作成後、Shopifyストアとの連携を行い、ウィジェットを設置するだけで利用開始できます。'
    },
    {
      question: '料金はどのようになっていますか？',
      answer: 'ベーシックプラン（¥580/月）、プレミアムプラン（¥1,480/月）、エンタープライズプラン（¥2,980/月）があります。14日間の無料トライアルもご利用いただけます。'
    },
    {
      question: 'カスタマイズは可能ですか？',
      answer: 'はい、色やデザイン、メッセージ内容など、お客様のブランドに合わせたカスタマイズが可能です。'
    },
    {
      question: 'サポートはありますか？',
      answer: 'メールサポートとチャットサポートを提供しています。プレミアムプラン以上では優先サポートもご利用いただけます。'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="h-5 w-5" />
            <span className="font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お客様からよくいただく質問と回答をご紹介します
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
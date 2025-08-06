'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function FeaturesSection() {
  const features = [
    {
      title: '注文状況確認',
      description: '注文番号から配送状況や商品情報を即座に確認できます。',
      icon: '📦',
      disabled: false
    },
    {
      title: '商品検索・案内',
      description: '商品名やカテゴリから最適な商品をお客様にご提案します。',
      icon: '🔍',
      disabled: false
    },
    {
      title: '配送状況追跡',
      description: '配送・発送に関する質問に自動で回答し、追跡情報を提供します。',
      icon: '🚚',
      disabled: false
    },
    {
      title: 'カート操作',
      description: '商品の追加・削除・更新・確認など、カート操作をサポートします。',
      icon: '🛒',
      disabled: false
    },
    {
      title: 'AI自動回答',
      description: 'Google Geminiを使用した高度なAI技術で自然な会話を実現します。',
      icon: '🤖',
      disabled: false
    },
    {
      title: '24時間対応',
      description: '営業時間外でもお客様の質問に即座に回答。売上機会の損失を防ぎます。',
      icon: '🕐',
      disabled: false
    },
    {
      title: 'カスタマイズ可能',
      description: '色やデザイン、メッセージ内容など、お客様のブランドに合わせたカスタマイズが可能です。',
      icon: '🎨',
      disabled: false
    },
    {
      title: '返品・交換対応',
      description: '返品・交換の手続きと条件を詳しく説明し、スムーズな対応をサポートします。',
      icon: '🔄',
      disabled: true
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            主な機能
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIチャットが提供する主要な機能をご紹介します
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 ${
                feature.disabled 
                  ? 'opacity-60 cursor-not-allowed' 
                  : 'hover:shadow-xl'
              }`}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className={`text-lg font-semibold ${
                  feature.disabled ? 'text-gray-400' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                {feature.disabled && (
                  <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                    準備中
                  </Badge>
                )}
              </div>
              <p className={`text-sm leading-relaxed ${
                feature.disabled ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
} 
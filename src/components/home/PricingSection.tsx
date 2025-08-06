'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  Star,
  CreditCard,
  Zap,
  Shield,
  Headphones,
  Settings,
  Users
} from 'lucide-react';

export default function PricingSection() {
  const plan = {
    id: 'standard',
    name: 'スタンダードプラン',
    price: 1200,
    icon: Star,
    description: 'すべての機能が利用可能な統一プラン',
    features: [
      'AIチャット機能（無制限）',
      'リアルタイム応答',
      '商品検索・レコメンド機能',
      '在庫確認機能',
      'FAQ自動応答',
      'メールサポート',
      '分析レポート',
      'カスタマイズ可能なデザイン'
    ]
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            シンプルな料金体系で、すべての機能をご利用いただけます。
          </p>
        </motion.div>

        {/* プラン表示 */}
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border-blue-500 shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-600 text-white px-4 py-1">
                おすすめ
              </Badge>
            </div>
            
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-12 w-12 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900">
                  ¥{plan.price.toLocaleString()}
                </div>
                <div className="text-gray-600">/月</div>
              </div>



            </CardContent>
          </Card>
        </motion.div>

        {/* 特徴 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">セキュア</h3>
            <p className="text-gray-600">銀行レベルのセキュリティで保護</p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <Headphones className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7サポート</h3>
            <p className="text-gray-600">いつでもサポートが利用可能</p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">カスタマイズ</h3>
            <p className="text-gray-600">お客様のニーズに合わせて調整</p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">チーム対応</h3>
            <p className="text-gray-600">複数ユーザーでの利用が可能</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
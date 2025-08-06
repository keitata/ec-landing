import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">404 - ページが見つかりません</h2>
        <p className="text-gray-600 mb-8">お探しのページは存在しないか、移動した可能性があります。</p>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            ホームに戻る
          </Button>
        </Link>
      </div>
    </div>
  );
}
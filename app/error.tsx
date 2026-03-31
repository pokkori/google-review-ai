"use client";
import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-center px-4">
      <div className="mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">エラーが発生しました</h1>
      <p className="text-gray-400 mb-8">しばらく時間をおいてから再度お試しください。</p>
      <div className="flex gap-4">
        <button onClick={reset} className="bg-blue-600 px-6 py-3 rounded-full font-bold text-white hover:bg-blue-700">
          再試行
        </button>
        <Link href="/" className="bg-gray-600 px-6 py-3 rounded-full font-bold text-white hover:bg-gray-700">
          トップに戻る
        </Link>
      </div>
    </main>
  );
}

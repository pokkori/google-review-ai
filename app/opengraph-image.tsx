import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Google口コミ返信AI - AIがプロ品質の口コミ返信文を自動生成';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        fontFamily: 'sans-serif',
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '24px',
          padding: '48px 64px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '24px',
        }}>
          <div style={{
            width: '72px', height: '72px',
            background: 'linear-gradient(135deg, #4285f4, #34a853)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
          <div style={{ fontSize: '52px', fontWeight: 900, color: '#ffffff', textAlign: 'center' }}>
            Google口コミ返信AI
          </div>
          <div style={{ fontSize: '26px', color: 'rgba(255,255,255,0.75)', textAlign: 'center' }}>
            AIがプロ品質の口コミ返信文を自動生成
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #4285f4CC, #34a85399)',
            borderRadius: '12px', padding: '12px 32px',
            fontSize: '22px', fontWeight: 700, color: '#ffffff',
          }}>
            無料でお試し
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

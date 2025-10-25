'use client'

import { useState } from 'react'

export default function Home() {
  const [bgColor, setBgColor] = useState('#ffffff')

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: bgColor,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      transition: 'background-color 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: bgColor === '#ffffff' ? '#1a1a1a' : '#ffffff'
        }}>
          ARAN Logo Design
        </h1>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '3rem',
          color: bgColor === '#ffffff' ? '#666' : '#ddd'
        }}>
          Professional Business & Trade Identity
        </p>

        {/* Primary Logo */}
        <div style={{
          backgroundColor: bgColor === '#ffffff' ? '#f8f9fa' : 'rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '4rem 2rem',
          marginBottom: '3rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <svg width="400" height="160" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', height: 'auto' }}>
            {/* Background geometric element - hexagon representing trade/network */}
            <g opacity="0.15">
              <path d="M200 20 L240 40 L240 80 L200 100 L160 80 L160 40 Z" fill="#0066cc" />
            </g>

            {/* Main logo container with gradient */}
            <defs>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#0066cc', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#004999', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ff6b35', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#f7931e', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {/* Trade icon - arrow/growth symbol */}
            <g transform="translate(50, 50)">
              <path d="M0 30 L20 10 L20 20 L40 20 L40 0 L50 0 L50 30 L30 30 L30 40 L20 40 L20 30 Z"
                    fill="url(#accentGradient)" />
            </g>

            {/* Letter A with geometric precision */}
            <g transform="translate(110, 40)">
              <path d="M25 80 L15 80 L20 60 L10 60 L0 100 L18 100 L22 85 L33 85 L37 100 L55 100 L45 60 L35 60 Z M25.5 70 L29.5 70 L32 75 L23 75 Z"
                    fill="url(#textGradient)"
                    strokeWidth="2" />
              <text x="18" y="95" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="url(#textGradient)">A</text>
            </g>

            {/* Letter R */}
            <g transform="translate(175, 40)">
              <text x="0" y="95" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="url(#textGradient)">R</text>
            </g>

            {/* Letter A */}
            <g transform="translate(235, 40)">
              <text x="0" y="95" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="url(#textGradient)">A</text>
            </g>

            {/* Letter N */}
            <g transform="translate(295, 40)">
              <text x="0" y="95" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="url(#textGradient)">N</text>
            </g>

            {/* Underline accent - representing growth/foundation */}
            <rect x="110" y="145" width="240" height="4" fill="url(#accentGradient)" rx="2" />

            {/* Tagline */}
            <text x="200" y="158" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle" letterSpacing="2">
              BUSINESS & TRADE
            </text>
          </svg>
        </div>

        {/* Logo Variations Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Monochrome Version */}
          <div style={{
            backgroundColor: bgColor === '#ffffff' ? '#f8f9fa' : 'rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              marginBottom: '1rem',
              fontSize: '1.1rem',
              color: bgColor === '#ffffff' ? '#1a1a1a' : '#ffffff'
            }}>Monochrome</h3>
            <svg width="280" height="100" viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
              <text x="20" y="70" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="#1a1a1a">ARAN</text>
              <rect x="20" y="85" width="180" height="3" fill="#1a1a1a" rx="1.5" />
              <text x="140" y="98" fontFamily="Arial, sans-serif" fontSize="8" fill="#666" textAnchor="middle" letterSpacing="1.5">
                BUSINESS & TRADE
              </text>
            </svg>
          </div>

          {/* Icon Mark Only */}
          <div style={{
            backgroundColor: bgColor === '#ffffff' ? '#f8f9fa' : 'rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              marginBottom: '1rem',
              fontSize: '1.1rem',
              color: bgColor === '#ffffff' ? '#1a1a1a' : '#ffffff'
            }}>Icon Mark</h3>
            <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
              <defs>
                <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#0066cc', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#ff6b35', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="url(#iconGrad)" />
              <text x="50" y="70" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="white" textAnchor="middle">A</text>
            </svg>
          </div>

          {/* Reversed Version */}
          <div style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#ffffff' }}>Reversed</h3>
            <svg width="280" height="100" viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
              <defs>
                <linearGradient id="whiteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#f0f0f0', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <text x="20" y="70" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="url(#whiteGrad)">ARAN</text>
              <rect x="20" y="85" width="180" height="3" fill="#ff6b35" rx="1.5" />
              <text x="140" y="98" fontFamily="Arial, sans-serif" fontSize="8" fill="#aaa" textAnchor="middle" letterSpacing="1.5">
                BUSINESS & TRADE
              </text>
            </svg>
          </div>
        </div>

        {/* Background Color Selector */}
        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          backgroundColor: bgColor === '#ffffff' ? '#f8f9fa' : 'rgba(255,255,255,0.1)',
          borderRadius: '12px'
        }}>
          <p style={{
            marginBottom: '1rem',
            fontWeight: '600',
            color: bgColor === '#ffffff' ? '#1a1a1a' : '#ffffff'
          }}>
            Test Background Colors:
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['#ffffff', '#f8f9fa', '#e9ecef', '#1a1a1a', '#2d3748', '#0066cc'].map(color => (
              <button
                key={color}
                onClick={() => setBgColor(color)}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '8px',
                  border: bgColor === color ? '3px solid #0066cc' : '2px solid #ddd',
                  backgroundColor: color,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: bgColor === color ? '0 4px 8px rgba(0,102,204,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
                }}
                aria-label={`Background color ${color}`}
              />
            ))}
          </div>
        </div>

        {/* Design Rationale */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'left',
          backgroundColor: bgColor === '#ffffff' ? '#f8f9fa' : 'rgba(255,255,255,0.1)',
          borderRadius: '12px',
          padding: '2rem',
          color: bgColor === '#ffffff' ? '#1a1a1a' : '#ffffff'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Design Elements</h2>
          <ul style={{ lineHeight: '1.8', color: bgColor === '#ffffff' ? '#666' : '#ddd' }}>
            <li><strong>Blue Gradient:</strong> Trust, professionalism, corporate stability</li>
            <li><strong>Orange Accent:</strong> Energy, ambition, trade dynamics</li>
            <li><strong>Bold Typography:</strong> Confidence and market authority</li>
            <li><strong>Geometric Elements:</strong> Structure, precision, global connectivity</li>
            <li><strong>Underline Bar:</strong> Foundation, growth trajectory, forward momentum</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

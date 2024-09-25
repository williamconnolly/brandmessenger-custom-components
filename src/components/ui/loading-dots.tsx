import React from 'react'

interface LoadingDotsProps {
    color?: string
    size?: number
}

export default function LoadingDots({ color = 'currentColor', size = 4 }: LoadingDotsProps = {}) {
    return (
        <span className="inline-flex items-center" role="status" aria-label="Loading">
        <style>{`
          @keyframes blink {
            0% { opacity: 0.2; }
            20% { opacity: 1; }
            100% { opacity: 0.2; }
          }
        `}</style>
            {[0, 1, 2].map((index) => (
                <span
                    key={index}
                    className={`
            rounded-full
            ${index === 1 ? 'mx-1' : ''}
          `}
                    style={{
                        backgroundColor: color,
                        width: `${size}px`,
                        height: `${size}px`,
                        animation: `blink 1.4s infinite both`,
                        animationDelay: `${index * 0.2}s`,
                    }}
                />
            ))}
    </span>
    )
}

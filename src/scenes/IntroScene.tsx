import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { Logo } from '../components/Logo';
import { theme } from '../styles/theme';

// IntroScene - Logo açılış sahnesi (4 saniye)
export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Logo büyüme animasyonu
  const logoScale = interpolate(frame, [0, 30], [0.5, 1], {
    extrapolateRight: 'clamp',
  });
  
  // Logo fade-in
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  // Slogan fade-in
  const taglineOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill>
      <GradientBackground animated />
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
        }}
      >
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
          }}
        >
          <Logo size={80} />
        </div>
        <div
          style={{
            opacity: taglineOpacity,
            fontSize: 32,
            color: theme.colors.textMuted,
            fontFamily: theme.fonts.body,
            textAlign: 'center',
            maxWidth: 600,
          }}
        >
          Developer Productivity Copilot
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

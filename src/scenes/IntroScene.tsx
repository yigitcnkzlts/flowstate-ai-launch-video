import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { Logo } from '../components/Logo';
import { theme } from '../styles/theme';

// IntroScene - Logo açılış sahnesi (8 saniye) - Profesyonel tempo
export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Logo yumuşak büyüme
  const logoScale = interpolate(frame, [0, 40], [0.5, 1], {
    extrapolateRight: 'clamp',
  });
  
  // Logo fade-in
  const logoOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  // Slogan fade-in
  const taglineOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  // Fade-out geçişi
  const fadeOut = interpolate(frame, [220, 240], [1, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
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
          DevOps Performance & DORA Metrics Platform
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

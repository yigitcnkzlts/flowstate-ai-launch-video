import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { Logo } from '../components/Logo';
import { theme } from '../styles/theme';

// IntroScene - Logo açılış sahnesi (6 saniye) - Hızlı tempo
export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Logo hızlı büyüme
  const logoScale = interpolate(frame, [0, 20], [0.5, 1], {
    extrapolateRight: 'clamp',
  });
  
  // Logo hızlı fade-in
  const logoOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  // Slogan hızlı fade-in
  const taglineOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  // Fade-out geçişi
  const fadeOut = interpolate(frame, [160, 180], [1, 0], {
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
          Workflow Automation & Productivity Analytics
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

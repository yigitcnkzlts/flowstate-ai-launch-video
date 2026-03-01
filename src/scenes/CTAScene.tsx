import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { Logo } from '../components/Logo';
import { theme } from '../styles/theme';

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const logoScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12 },
  });
  
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const ctaOpacity = interpolate(frame, [25, 45], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const urlOpacity = interpolate(frame, [40, 60], [0, 1], {
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
          gap: 50,
        }}
      >
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
          }}
        >
          <Logo size={100} />
        </div>
        
        <div
          style={{
            opacity: ctaOpacity,
            fontSize: 48,
            fontWeight: 'bold',
            color: theme.colors.text,
            fontFamily: theme.fonts.heading,
            textAlign: 'center',
          }}
        >
          Start your free trial today
        </div>
        
        <div
          style={{
            opacity: urlOpacity,
            fontSize: 32,
            color: theme.colors.primary,
            fontFamily: theme.fonts.mono,
            padding: '20px 40px',
            background: theme.colors.backgroundLight,
            borderRadius: 12,
            border: `2px solid ${theme.colors.primary}`,
          }}
        >
          flowstate.ai
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { Logo } from '../components/Logo';
import { theme } from '../styles/theme';

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const logoScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12 },
  });
  
  const logoOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const socialProofOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const ctaOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const urlOpacity = interpolate(frame, [90, 110], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const pulseScale = 1 + Math.sin(frame * 0.1) * 0.02;

  return (
    <AbsoluteFill style={{ opacity: fadeIn }}>
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
        
        {/* Sosyal kanıt */}
        <div
          style={{
            opacity: socialProofOpacity,
            fontSize: 20,
            color: theme.colors.textMuted,
            fontFamily: theme.fonts.body,
            textAlign: 'center',
            marginTop: -20,
          }}
        >
          Join 10,000+ developers worldwide
        </div>
        
        <div
          style={{
            opacity: ctaOpacity,
            fontSize: 48,
            fontWeight: 'bold',
            color: theme.colors.text,
            fontFamily: theme.fonts.heading,
            textAlign: 'center',
            textShadow: `0 0 30px ${theme.colors.primary}50`,
          }}
        >
          Start optimizing today
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
            boxShadow: `0 0 40px ${theme.colors.primary}40, 0 0 80px ${theme.colors.primary}20`,
            transform: `scale(${pulseScale})`,
          }}
        >
          flowstate.ai
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

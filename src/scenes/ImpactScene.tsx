import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

// AI-generated marketing copy: İş etkisi - Gerçek SaaS değer önerisi
export const ImpactScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const fadeOut = interpolate(frame, [170, 190], [1, 0], {
    extrapolateRight: 'clamp',
  });
  
  const glowIntensity = interpolate(
    frame,
    [0, 25, 50],
    [0, 1, 0.7],
    { extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill style={{ opacity: fadeIn * fadeOut }}>
      <GradientBackground animated />
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
        }}
      >
        <div
          style={{
            textAlign: 'center',
            filter: `drop-shadow(0 0 ${glowIntensity * 40}px rgba(99, 102, 241, 0.6))`,
          }}
        >
          <AnimatedText
            text="Optimize workflow."
            delay={0}
            duration={20}
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
              marginBottom: 30,
            }}
          />
          <AnimatedText
            text="Accelerate delivery."
            delay={15}
            duration={20}
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              background: theme.gradients.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: theme.fonts.heading,
            }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

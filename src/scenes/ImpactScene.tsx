import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

// AI-generated marketing copy: Impact statements
export const ImpactScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  const glowIntensity = interpolate(
    frame,
    [0, 30, 60],
    [0, 1, 0.7],
    { extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill>
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
            text="Code without chaos."
            delay={0}
            duration={25}
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
              marginBottom: 30,
            }}
          />
          <AnimatedText
            text="Ship with confidence."
            delay={20}
            duration={25}
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

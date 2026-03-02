import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

// AI-generated marketing copy: İş problemleri - Gerçek SaaS terminolojisi
export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const fadeOut = interpolate(frame, [220, 240], [1, 0], {
    extrapolateRight: 'clamp',
  });
  
  return (
    <AbsoluteFill style={{ opacity: fadeIn * fadeOut }}>
      <GradientBackground />
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
        }}
      >
        <AnimatedText
          text="Long cycle times."
          delay={0}
          duration={20}
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: theme.colors.text,
            fontFamily: theme.fonts.heading,
            marginBottom: 20,
          }}
        />
        <AnimatedText
          text="Context switching overhead."
          delay={15}
          duration={20}
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: theme.colors.text,
            fontFamily: theme.fonts.heading,
            marginBottom: 20,
          }}
        />
        <AnimatedText
          text="Declining KPIs."
          delay={30}
          duration={20}
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: theme.colors.text,
            fontFamily: theme.fonts.heading,
            marginBottom: 60,
          }}
        />
        <AnimatedText
          text="Your team deserves better."
          delay={50}
          duration={20}
          style={{
            fontSize: 36,
            color: theme.colors.textMuted,
            fontFamily: theme.fonts.body,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

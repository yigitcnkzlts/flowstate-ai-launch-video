import React from 'react';
import { AbsoluteFill } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

// AI-generated marketing copy: Problem statement crafted to resonate with developers
export const ProblemScene: React.FC = () => {
  return (
    <AbsoluteFill>
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
          text="Context switching."
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
          text="Endless distractions."
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
          text="Lost productivity."
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
          text="Sound familiar?"
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

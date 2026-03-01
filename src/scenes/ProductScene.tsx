import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

// AI-generated placeholder: Dashboard mockup would use AI-generated UI screenshot
export const ProductScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  const dashboardOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const dashboardScale = interpolate(frame, [20, 50], [0.9, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill>
      <GradientBackground />
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 60,
        }}
      >
        <AnimatedText
          text="Meet FlowState AI"
          delay={0}
          duration={25}
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: theme.colors.text,
            fontFamily: theme.fonts.heading,
            marginBottom: 40,
          }}
        />
        
        {/* AI-generated dashboard mockup placeholder */}
        <div
          style={{
            opacity: dashboardOpacity,
            transform: `scale(${dashboardScale})`,
            width: 900,
            height: 500,
            background: theme.colors.backgroundLight,
            borderRadius: 24,
            border: `2px solid ${theme.colors.primary}`,
            boxShadow: theme.shadows.glow,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 60,
              background: theme.gradients.primary,
              display: 'flex',
              alignItems: 'center',
              padding: '0 30px',
              gap: 12,
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
          </div>
          
          <div
            style={{
              fontSize: 120,
              opacity: 0.3,
            }}
          >
            ⚡
          </div>
          
          <div
            style={{
              position: 'absolute',
              bottom: 30,
              fontSize: 24,
              color: theme.colors.textMuted,
              fontFamily: theme.fonts.mono,
            }}
          >
            // AI-powered context awareness
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

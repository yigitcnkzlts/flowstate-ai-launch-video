import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { MetricCard } from '../components/MetricCard';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';
import productivityData from '../data/productivity.json';

export const DataScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const fadeOut = interpolate(frame, [280, 300], [1, 0], {
    extrapolateRight: 'clamp',
  });
  
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
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
          padding: 60,
        }}
      >
        <div
          style={{
            opacity: titleOpacity,
            fontSize: 56,
            fontWeight: 'bold',
            color: theme.colors.text,
            fontFamily: theme.fonts.heading,
            marginBottom: 80,
          }}
        >
          DORA Metrics Dashboard
        </div>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 40,
            maxWidth: 1000,
          }}
        >
          {productivityData.metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.after}
              unit={metric.unit}
              icon={metric.icon}
              delay={25 + index * 12}
            />
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

import React from 'react';
import { interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { theme } from '../styles/theme';

interface MetricCardProps {
  label: string;
  value: number;
  unit: string;
  icon: string;
  delay?: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  icon,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12 },
  });
  
  const opacity = interpolate(
    frame,
    [delay, delay + 15],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        background: theme.colors.backgroundLight,
        borderRadius: 16,
        padding: '32px',
        boxShadow: theme.shadows.card,
        border: `1px solid rgba(99, 102, 241, 0.2)`,
        minWidth: 200,
      }}
    >
      <div style={{ fontSize: 48, marginBottom: 16 }}>{icon}</div>
      <div
        style={{
          fontSize: 48,
          fontWeight: 'bold',
          color: theme.colors.primary,
          fontFamily: theme.fonts.heading,
          marginBottom: 8,
        }}
      >
        {value}{unit}
      </div>
      <div
        style={{
          fontSize: 18,
          color: theme.colors.textMuted,
          fontFamily: theme.fonts.body,
        }}
      >
        {label}
      </div>
    </div>
  );
};

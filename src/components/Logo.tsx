import React from 'react';
import { theme } from '../styles/theme';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 60 }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          background: theme.gradients.primary,
          borderRadius: size / 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: size * 0.5,
          boxShadow: `0 0 40px ${theme.colors.primary}80, 0 0 80px ${theme.colors.primary}40, ${theme.shadows.glow}`,
          filter: 'brightness(1.1)',
        }}
      >
        ⚡
      </div>
      <div
        style={{
          fontFamily: theme.fonts.heading,
          fontSize: size * 0.6,
          fontWeight: 'bold',
          color: theme.colors.text,
          textShadow: `0 0 20px ${theme.colors.primary}60`,
        }}
      >
        FlowState AI
      </div>
    </div>
  );
};

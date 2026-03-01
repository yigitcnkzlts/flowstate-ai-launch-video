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
          boxShadow: theme.shadows.glow,
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
        }}
      >
        FlowState AI
      </div>
    </div>
  );
};

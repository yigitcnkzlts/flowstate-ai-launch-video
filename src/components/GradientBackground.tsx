import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { theme } from '../styles/theme';

interface GradientBackgroundProps {
  animated?: boolean;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  animated = false,
}) => {
  const frame = useCurrentFrame();
  
  const rotation = animated ? interpolate(frame, [0, 300], [0, 360]) : 0;

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: theme.colors.background,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '150%',
          height: '150%',
          top: '-25%',
          left: '-25%',
          background: theme.gradients.primary,
          opacity: 0.1,
          transform: `rotate(${rotation}deg)`,
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
};

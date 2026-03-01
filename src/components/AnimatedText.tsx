import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  duration = 30,
  style,
}) => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(
    frame,
    [delay, delay + duration],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );
  
  const translateY = interpolate(
    frame,
    [delay, delay + duration],
    [30, 0],
    { extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        ...style,
      }}
    >
      {text}
    </div>
  );
};

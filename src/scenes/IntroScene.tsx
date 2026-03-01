import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { Logo } from '../components/Logo';
import { theme } from '../styles/theme';

/**
 * IntroScene - Opening scene with animated logo reveal
 * Duration: 4 seconds (120 frames @ 30fps)
 * 
 * Features:
 * - Animated gradient background
 * - Logo scale animation (0.5 to 1.0)
 * - Smooth fade-in effects
 * - Brand tagline reveal
 */
export const IntroScene: React.FC = () => {
  // Get current frame number for animations
  const frame = useCurrentFrame();
  
  // Logo scale animation: grows from 50% to 100% over 30 frames (1 second)
  const logoScale = interpolate(frame, [0, 30], [0.5, 1], {
    extrapolateRight: 'clamp', // Hold at final value after animation
  });
  
  // Logo opacity: fades in over 20 frames (~0.67 seconds)
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  // Tagline opacity: fades in after logo, from frame 20 to 40
  const taglineOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill>
      {/* Animated gradient background */}
      <GradientBackground animated />
      
      {/* Center content container */}
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
        }}
      >
        {/* Animated logo */}
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
          }}
        >
          <Logo size={80} />
        </div>
        
        {/* Brand tagline */}
        <div
          style={{
            opacity: taglineOpacity,
            fontSize: 32,
            color: theme.colors.textMuted,
            fontFamily: theme.fonts.body,
            textAlign: 'center',
            maxWidth: 600,
          }}
        >
          Developer Productivity Copilot
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

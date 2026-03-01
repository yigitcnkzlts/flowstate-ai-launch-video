/**
 * Design System Theme
 * 
 * Centralized theme configuration for consistent styling across all components.
 * Includes colors, typography, gradients, and shadows.
 * 
 * Usage:
 * import { theme } from './styles/theme';
 * style={{ color: theme.colors.primary }}
 */

export const theme = {
  // Color palette - Modern SaaS aesthetic with dark theme
  colors: {
    background: '#0a0a0f',        // Deep black - main background
    backgroundLight: '#1a1a2e',   // Dark blue - card backgrounds
    primary: '#6366f1',           // Indigo - primary brand color
    secondary: '#8b5cf6',         // Purple - secondary accents
    accent: '#06b6d4',            // Cyan - highlights and CTAs
    text: '#ffffff',              // White - primary text
    textMuted: '#94a3b8',         // Gray - secondary text
    success: '#10b981',           // Green - success states
  },
  
  // Typography - System fonts for best performance and readability
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", monospace',
  },
  
  // Gradients - Used for backgrounds and accents
  gradients: {
    primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',  // Indigo to purple
    accent: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',   // Cyan to blue
    dark: 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%)',     // Black to dark blue
  },
  
  // Shadows - Depth and elevation effects
  shadows: {
    glow: '0 0 40px rgba(99, 102, 241, 0.3)',      // Soft glow effect
    card: '0 8px 32px rgba(0, 0, 0, 0.4)',         // Card elevation
  },
};

// Export type for TypeScript autocomplete
export type Theme = typeof theme;

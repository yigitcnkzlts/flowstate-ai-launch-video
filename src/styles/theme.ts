export const theme = {
  colors: {
    background: '#0a0a0f',
    backgroundLight: '#1a1a2e',
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    text: '#ffffff',
    textMuted: '#94a3b8',
    success: '#10b981',
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", monospace',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    accent: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    dark: 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%)',
  },
  shadows: {
    glow: '0 0 40px rgba(99, 102, 241, 0.3)',
    card: '0 8px 32px rgba(0, 0, 0, 0.4)',
  },
};

export type Theme = typeof theme;

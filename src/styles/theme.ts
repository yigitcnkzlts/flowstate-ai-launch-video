// Tasarım Sistemi - Renkler, fontlar ve stiller
export const theme = {
  // Renkler - Modern SaaS koyu tema
  colors: {
    background: '#0a0a0f',        // Ana arkaplan
    backgroundLight: '#1a1a2e',   // Kart arkaplanları
    primary: '#6366f1',           // Ana marka rengi
    secondary: '#8b5cf6',         // İkincil vurgu
    accent: '#06b6d4',            // Vurgu rengi
    text: '#ffffff',              // Ana metin
    textMuted: '#94a3b8',         // İkincil metin
    success: '#10b981',           // Başarı durumu
  },
  
  // Fontlar - Sistem fontları
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", monospace',
  },
  
  // Gradyanlar
  gradients: {
    primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    accent: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    dark: 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%)',
  },
  
  // Gölgeler
  shadows: {
    glow: '0 0 40px rgba(99, 102, 241, 0.3)',
    card: '0 8px 32px rgba(0, 0, 0, 0.4)',
  },
};

export type Theme = typeof theme;

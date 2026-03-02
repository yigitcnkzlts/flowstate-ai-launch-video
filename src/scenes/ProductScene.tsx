import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

// AI-generated placeholder: Dashboard mockup - Gerçek SaaS platformu görünümü
export const ProductScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const fadeOut = interpolate(frame, [340, 360], [1, 0], {
    extrapolateRight: 'clamp',
  });
  
  const dashboardOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const dashboardScale = interpolate(frame, [20, 50], [0.95, 1], {
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
        <AnimatedText
          text="FlowState AI Platform"
          delay={0}
          duration={30}
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: theme.colors.text,
            fontFamily: theme.fonts.heading,
            marginBottom: 40,
          }}
        />
        
        {/* AI-generated dashboard mockup */}
        <div
          style={{
            opacity: dashboardOpacity,
            transform: `scale(${dashboardScale})`,
            width: 900,
            height: 500,
            background: theme.colors.backgroundLight,
            borderRadius: 24,
            border: `2px solid ${theme.colors.primary}`,
            boxShadow: `0 0 60px ${theme.colors.primary}40, ${theme.shadows.glow}`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Üst bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 60,
              background: theme.gradients.primary,
              display: 'flex',
              alignItems: 'center',
              padding: '0 30px',
              gap: 12,
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
            <div style={{ marginLeft: 20, fontSize: 18, fontWeight: 600 }}>FlowState Dashboard</div>
          </div>
          
          {/* Dashboard içeriği */}
          <div style={{ padding: 40, paddingTop: 80, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Üst metrik kartları */}
            <div style={{ display: 'flex', gap: 20 }}>
              {[
                { icon: '🎯', label: 'Focus Time', value: '94%' },
                { icon: '⚡', label: 'Cycle Time', value: '-47%' },
                { icon: '📊', label: 'KPI Improvement', value: '+68%' },
              ].map((metric, i) => {
                const cardOpacity = interpolate(frame, [40 + i * 8, 60 + i * 8], [0, 1], { extrapolateRight: 'clamp' });
                const progressWidth = interpolate(frame, [60 + i * 8, 100 + i * 8], [0, 100], { extrapolateRight: 'clamp' });
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      background: 'rgba(99, 102, 241, 0.1)',
                      borderRadius: 16,
                      padding: 20,
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      opacity: cardOpacity,
                    }}
                  >
                    <div style={{ fontSize: 32, marginBottom: 8 }}>{metric.icon}</div>
                    <div style={{ fontSize: 14, color: theme.colors.textMuted, marginBottom: 4 }}>{metric.label}</div>
                    <div style={{ fontSize: 28, fontWeight: 'bold', color: theme.colors.primary, marginBottom: 8 }}>{metric.value}</div>
                    {/* Progress bar */}
                    <div style={{ width: '100%', height: 4, background: 'rgba(99, 102, 241, 0.2)', borderRadius: 2, overflow: 'hidden' }}>
                      <div style={{ width: `${progressWidth}%`, height: '100%', background: theme.colors.primary, transition: 'width 0.3s' }} />
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Kod editörü mockup */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                borderRadius: 12,
                padding: 24,
                border: '1px solid rgba(99, 102, 241, 0.2)',
                fontFamily: theme.fonts.mono,
                fontSize: 14,
                opacity: interpolate(frame, [120, 140], [0, 1], { extrapolateRight: 'clamp' }),
              }}
            >
              {/* Typing animation */}
              {frame > 120 && (
                <>
                  <div style={{ color: '#7dd3fc', marginBottom: 8 }}>
                    <span style={{ color: '#c084fc' }}>const</span> insights = <span style={{ color: '#34d399' }}>await</span> flowstate.<span style={{ color: '#fbbf24' }}>getAnalytics</span>();
                  </div>
                  {frame > 160 && (
                    <div style={{ color: '#7dd3fc' }}>
                      <span style={{ color: '#fb923c' }}>// Workflow automation active</span>
                    </div>
                  )}
                </>
              )}
            </div>
            
            {/* Alt bilgi */}
            <div
              style={{
                fontSize: 16,
                color: theme.colors.textMuted,
                textAlign: 'center',
                opacity: interpolate(frame, [180, 200], [0, 1], { extrapolateRight: 'clamp' }),
              }}
            >
              Real-time performance insights & integrations
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

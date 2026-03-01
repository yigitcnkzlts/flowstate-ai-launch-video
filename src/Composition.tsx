import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { IntroScene } from './scenes/IntroScene';
import { ProblemScene } from './scenes/ProblemScene';
import { ProductScene } from './scenes/ProductScene';
import { DataScene } from './scenes/DataScene';
import { ImpactScene } from './scenes/ImpactScene';
import { CTAScene } from './scenes/CTAScene';

/**
 * FlowStateVideo - Main video composition
 * 
 * Total Duration: 60 seconds (1800 frames @ 30fps)
 * 
 * Scene Timeline:
 * 1. Intro (0-4s): Logo reveal and brand introduction
 * 2. Problem (4-12s): Developer pain points
 * 3. Product (12-22s): FlowState AI dashboard showcase
 * 4. Data (22-34s): Animated productivity metrics
 * 5. Impact (34-44s): Transformation messaging
 * 6. CTA (44-60s): Call-to-action with URL
 */
export const FlowStateVideo: React.FC = () => {
  // Scene durations (in frames at 30fps)
  // Note: 30 frames = 1 second
  const INTRO_DURATION = 120;     // 4 seconds - Logo reveal
  const PROBLEM_DURATION = 240;   // 8 seconds - Pain points
  const PRODUCT_DURATION = 300;   // 10 seconds - Dashboard showcase
  const DATA_DURATION = 360;      // 12 seconds - Metrics animation
  const IMPACT_DURATION = 300;    // 10 seconds - Impact messaging
  const CTA_DURATION = 480;       // 16 seconds - Call-to-action
  // Total: 1800 frames = 60 seconds (1 minute)

  return (
    <AbsoluteFill>
      {/* Scene 1: Intro - Brand introduction with animated logo */}
      <Sequence durationInFrames={INTRO_DURATION}>
        <IntroScene />
      </Sequence>
      
      {/* Scene 2: Problem - Developer pain points with staggered text */}
      <Sequence from={INTRO_DURATION} durationInFrames={PROBLEM_DURATION}>
        <ProblemScene />
      </Sequence>
      
      {/* Scene 3: Product - Dashboard mockup and feature showcase */}
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION} durationInFrames={PRODUCT_DURATION}>
        <ProductScene />
      </Sequence>
      
      {/* Scene 4: Data - Animated productivity metrics from JSON */}
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION + PRODUCT_DURATION} durationInFrames={DATA_DURATION}>
        <DataScene />
      </Sequence>
      
      {/* Scene 5: Impact - Transformation messaging with glow effects */}
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION + PRODUCT_DURATION + DATA_DURATION} durationInFrames={IMPACT_DURATION}>
        <ImpactScene />
      </Sequence>
      
      {/* Scene 6: CTA - Final call-to-action with logo and URL */}
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION + PRODUCT_DURATION + DATA_DURATION + IMPACT_DURATION} durationInFrames={CTA_DURATION}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};

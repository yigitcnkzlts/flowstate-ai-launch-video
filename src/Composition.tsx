import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { IntroScene } from './scenes/IntroScene';
import { ProblemScene } from './scenes/ProblemScene';
import { ProductScene } from './scenes/ProductScene';
import { DataScene } from './scenes/DataScene';
import { ImpactScene } from './scenes/ImpactScene';
import { CTAScene } from './scenes/CTAScene';

export const FlowStateVideo: React.FC = () => {
  // Scene durations (in frames at 30fps)
  const INTRO_DURATION = 90;      // 3 seconds
  const PROBLEM_DURATION = 150;   // 5 seconds
  const PRODUCT_DURATION = 180;   // 6 seconds
  const DATA_DURATION = 210;      // 7 seconds
  const IMPACT_DURATION = 150;    // 5 seconds
  const CTA_DURATION = 180;       // 6 seconds

  return (
    <AbsoluteFill>
      <Sequence durationInFrames={INTRO_DURATION}>
        <IntroScene />
      </Sequence>
      
      <Sequence from={INTRO_DURATION} durationInFrames={PROBLEM_DURATION}>
        <ProblemScene />
      </Sequence>
      
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION} durationInFrames={PRODUCT_DURATION}>
        <ProductScene />
      </Sequence>
      
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION + PRODUCT_DURATION} durationInFrames={DATA_DURATION}>
        <DataScene />
      </Sequence>
      
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION + PRODUCT_DURATION + DATA_DURATION} durationInFrames={IMPACT_DURATION}>
        <ImpactScene />
      </Sequence>
      
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION + PRODUCT_DURATION + DATA_DURATION + IMPACT_DURATION} durationInFrames={CTA_DURATION}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};

import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { IntroScene } from './scenes/IntroScene';
import { ProblemScene } from './scenes/ProblemScene';
import { ProductScene } from './scenes/ProductScene';
import { DataScene } from './scenes/DataScene';
import { ImpactScene } from './scenes/ImpactScene';
import { CTAScene } from './scenes/CTAScene';

// Ana video kompozisyonu - Toplam 60 saniye (1800 frame @ 30fps)
export const FlowStateVideo: React.FC = () => {
  // Sahne süreleri (frame cinsinden, 30fps)
  const INTRO_DURATION = 120;     // 4 saniye
  const PROBLEM_DURATION = 240;   // 8 saniye
  const PRODUCT_DURATION = 300;   // 10 saniye
  const DATA_DURATION = 360;      // 12 saniye
  const IMPACT_DURATION = 300;    // 10 saniye
  const CTA_DURATION = 480;       // 16 saniye

  return (
    <AbsoluteFill>
      {/* Sahne 1: Logo açılışı */}
      <Sequence durationInFrames={INTRO_DURATION}>
        <IntroScene />
      </Sequence>
      
      {/* Sahne 2: Geliştirici sorunları */}
      <Sequence from={INTRO_DURATION} durationInFrames={PROBLEM_DURATION}>
        <ProblemScene />
      </Sequence>
      
      {/* Sahne 3: Ürün gösterimi */}
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION} durationInFrames={PRODUCT_DURATION}>
        <ProductScene />
      </Sequence>
      
      {/* Sahne 4: Metrikler */}
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION + PRODUCT_DURATION} durationInFrames={DATA_DURATION}>
        <DataScene />
      </Sequence>
      
      {/* Sahne 5: Etki mesajları */}
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION + PRODUCT_DURATION + DATA_DURATION} durationInFrames={IMPACT_DURATION}>
        <ImpactScene />
      </Sequence>
      
      {/* Sahne 6: Harekete geçirici mesaj */}
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION + PRODUCT_DURATION + DATA_DURATION + IMPACT_DURATION} durationInFrames={CTA_DURATION}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};

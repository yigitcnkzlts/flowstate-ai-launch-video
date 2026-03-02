import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { IntroScene } from './scenes/IntroScene';
import { ProblemScene } from './scenes/ProblemScene';
import { ProductScene } from './scenes/ProductScene';
import { DataScene } from './scenes/DataScene';
import { ImpactScene } from './scenes/ImpactScene';
import { CTAScene } from './scenes/CTAScene';

// Ana video kompozisyonu - Toplam 45 saniye (1350 frame @ 30fps) - Hızlı tempo
export const FlowStateVideo: React.FC = () => {
  // Sahne süreleri (frame cinsinden, 30fps) - Ticari video hızında
  const INTRO_DURATION = 180;     // 6 saniye
  const PROBLEM_DURATION = 180;   // 6 saniye
  const PRODUCT_DURATION = 240;   // 8 saniye
  const DATA_DURATION = 210;      // 7 saniye
  const IMPACT_DURATION = 180;    // 6 saniye
  const CTA_DURATION = 210;       // 7 saniye
  const TRANSITION_FRAMES = 10;   // 0.33 saniye geçiş

  return (
    <AbsoluteFill>
      {/* Arka plan müziği - Tüm video boyunca */}
      {/* TODO: public/music.mp3 dosyasını ekle */}
      {/* <Audio src={staticFile('music.mp3')} volume={0.3} /> */}
      
      {/* Sahne 1: Logo açılışı */}
      <Sequence durationInFrames={INTRO_DURATION}>
        <IntroScene />
      </Sequence>
      
      {/* Sahne 2: İş problemi */}
      <Sequence from={INTRO_DURATION - TRANSITION_FRAMES} durationInFrames={PROBLEM_DURATION + TRANSITION_FRAMES}>
        <ProblemScene />
      </Sequence>
      
      {/* Sahne 3: Ürün gösterimi */}
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION - TRANSITION_FRAMES} durationInFrames={PRODUCT_DURATION + TRANSITION_FRAMES}>
        <ProductScene />
      </Sequence>
      
      {/* Sahne 4: Performans metrikleri */}
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION + PRODUCT_DURATION - TRANSITION_FRAMES} durationInFrames={DATA_DURATION + TRANSITION_FRAMES}>
        <DataScene />
      </Sequence>
      
      {/* Sahne 5: İş etkisi */}
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION + PRODUCT_DURATION + DATA_DURATION - TRANSITION_FRAMES} durationInFrames={IMPACT_DURATION + TRANSITION_FRAMES}>
        <ImpactScene />
      </Sequence>
      
      {/* Sahne 6: Harekete geçirici mesaj */}
      <Sequence from={INTRO_DURATION + PROBLEM_DURATION + PRODUCT_DURATION + DATA_DURATION + IMPACT_DURATION - TRANSITION_FRAMES} durationInFrames={CTA_DURATION + TRANSITION_FRAMES}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};

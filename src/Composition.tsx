import React from 'react';
import { AbsoluteFill, Sequence, Audio, staticFile, interpolate, useCurrentFrame } from 'remotion';
import { IntroScene } from './scenes/IntroScene';
import { ProblemScene } from './scenes/ProblemScene';
import { ProductScene } from './scenes/ProductScene';
import { DataScene } from './scenes/DataScene';
import { ImpactScene } from './scenes/ImpactScene';
import { CTAScene } from './scenes/CTAScene';

// Ana video kompozisyonu - Toplam 40 saniye (1200 frame @ 30fps) - Hızlı tempo
export const FlowStateVideo: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Sahne süreleri (frame cinsinden, 30fps) - Ticari video hızında
  const INTRO_DURATION = 180;     // 6 saniye
  const PROBLEM_DURATION = 180;   // 6 saniye
  const PRODUCT_DURATION = 240;   // 8 saniye
  const DATA_DURATION = 210;      // 7 saniye
  const IMPACT_DURATION = 180;    // 6 saniye
  const CTA_DURATION = 210;       // 7 saniye
  const TRANSITION_FRAMES = 10;   // 0.33 saniye geçiş
  const TOTAL_FRAMES = 1200;      // 40 saniye
  
  // Müzik volume kontrolü - fade in/out
  const musicVolume = interpolate(
    frame,
    [0, 30, TOTAL_FRAMES - 60, TOTAL_FRAMES - 30],
    [0, 0.3, 0.3, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill>
      {/* Arka plan müziği - Fade in/out ile */}
      <Audio 
        src={staticFile('music.mp3')} 
        volume={musicVolume}
        startFrom={0}
      />
      
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

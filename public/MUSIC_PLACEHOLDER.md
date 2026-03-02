# Background Music Placeholder

## Müzik Gereksinimleri

Video için arka plan müziği eklenmesi gerekiyor.

### Özellikler:
- **Stil**: Minimal electronic / corporate tech
- **Tempo**: Orta-hızlı (120-140 BPM)
- **Süre**: 45 saniye minimum
- **Format**: MP3 veya WAV
- **Ses Seviyesi**: Orta (volume: 0.3)

### Önerilen Kaynaklar:
- Epidemic Sound
- Artlist
- AudioJungle
- Uppbeat
- Free Music Archive (ticari kullanım lisanslı)

### Entegrasyon:

Müzik dosyasını `public/music.mp3` olarak kaydedin, sonra `src/Composition.tsx` dosyasındaki yorum satırını kaldırın:

```typescript
// Şu anki kod (yorum satırı):
{/* <Audio src={staticFile('music.mp3')} volume={0.3} /> */}

// Müzik ekledikten sonra:
<Audio src={staticFile('music.mp3')} volume={0.3} />
```

### Fade Efektleri:

Daha profesyonel ses için fade-in/fade-out ekleyin:

```typescript
<Audio 
  src={staticFile('music.mp3')} 
  volume={(f) => {
    // Fade in (ilk 1 saniye)
    if (f < 30) return interpolate(f, [0, 30], [0, 0.3]);
    // Fade out (son 2 saniye)
    if (f > 1290) return interpolate(f, [1290, 1350], [0.3, 0]);
    return 0.3;
  }}
/>
```

## Lisans Notu

Ticari kullanım için lisanslı müzik kullanmayı unutmayın!

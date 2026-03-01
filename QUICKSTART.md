# Quick Start Guide

Get your FlowState AI video running in 3 steps.

## ⚡ Fast Track (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Preview in browser
npm start

# 3. Render final video
npm run render
```

That's it! Your video will be at `out/flowstate-ai.mp4`

## 🎬 What You'll See

6 cinematic scenes (60 seconds total):

1. **Intro** (4s) - FlowState AI logo reveal
2. **Problem** (8s) - Developer pain points
3. **Product** (10s) - Dashboard showcase
4. **Data** (12s) - Productivity metrics animation
5. **Impact** (10s) - Transformation messaging
6. **CTA** (16s) - Call-to-action with URL

## 🎨 Quick Customization

### Change Colors
Edit `src/styles/theme.ts`:
```typescript
colors: {
  primary: '#6366f1',  // Change to your brand color
}
```

### Update Metrics
Edit `src/data/productivity.json`:
```json
{
  "label": "Focus Time",
  "after": 95  // Change the value
}
```

### Adjust Timing
Edit `src/Composition.tsx`:
```typescript
const INTRO_DURATION = 90;  // Change to 120 for 4 seconds
```

## 🐛 Troubleshooting

**Issue**: `npm install` fails  
**Solution**: Make sure you have Node.js 18+ installed

**Issue**: Port 3000 already in use  
**Solution**: Remotion will automatically use next available port

**Issue**: Video won't render  
**Solution**: Check that all dependencies installed correctly

## 📦 Output

After rendering:
- Location: `out/flowstate-ai.mp4`
- Resolution: 1920x1080 Full HD
- Duration: 32 seconds
- Format: H.264 MP4

## 💡 Pro Tips

- Use Remotion Studio's timeline scrubber to preview scenes
- Press `Space` to play/pause
- Use arrow keys to step through frames
- Check console for any warnings

## 📚 Learn More

- Full docs: [README.md](README.md)
- AI integration: [AI_INTEGRATION.md](AI_INTEGRATION.md)
- Case study: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

**Ready?** Run `npm install` and `npm start` now!

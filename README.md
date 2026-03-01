# FlowState AI - Product Launch Video

A professional 32-second product launch video created with Remotion for FlowState AI, a fictional developer productivity copilot.

## 🎬 Video Overview

**Duration**: 32 seconds (960 frames @ 30fps)  
**Resolution**: 1920x1080 Full HD  
**Scenes**: 6 cinematic compositions

1. **Intro** (3s) - Logo reveal with animations
2. **Problem** (5s) - Developer pain points
3. **Product** (6s) - Dashboard showcase
4. **Data** (7s) - Animated productivity metrics
5. **Impact** (5s) - Transformation messaging
6. **CTA** (6s) - Call-to-action

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start Remotion Studio (live preview)
npm start

# Render final MP4
npm run render
```

Output: `out/flowstate-ai.mp4`

## 🛠 Tech Stack

- **TypeScript** - Type-safe code
- **React** - Component architecture
- **Remotion 4.0** - Programmatic video

## 📁 Project Structure

```
src/
├── components/          # 4 reusable components
│   ├── GradientBackground.tsx
│   ├── MetricCard.tsx
│   ├── AnimatedText.tsx
│   └── Logo.tsx
├── scenes/              # 6 video scenes
│   ├── IntroScene.tsx
│   ├── ProblemScene.tsx
│   ├── ProductScene.tsx
│   ├── DataScene.tsx
│   ├── ImpactScene.tsx
│   └── CTAScene.tsx
├── data/
│   └── productivity.json    # Data-driven metrics
├── styles/
│   └── theme.ts            # Design system
└── Composition.tsx         # Main timeline
```

## 🎨 Design System

**Colors**: Dark theme (#0a0a0f) with indigo/purple gradients  
**Typography**: System fonts (SF Pro, Segoe UI, Roboto)  
**Animations**: Spring physics, smooth easing

## 🤖 AI Integration

- AI-generated marketing copy (marked in code comments)
- Placeholder for AI-generated dashboard mockups
- See [AI_INTEGRATION.md](AI_INTEGRATION.md) for details

## 📊 Data-Driven Content

Metrics are pulled from `src/data/productivity.json`:

```json
{
  "metrics": [
    { "label": "Focus Time", "after": 87, "unit": "%" },
    { "label": "Code Quality", "after": 94, "unit": "%" },
    { "label": "Daily Commits", "after": 23, "unit": "" },
    { "label": "Bug Resolution", "after": 1.1, "unit": "days" }
  ]
}
```

## 🔧 Customization

**Change colors**: Edit `src/styles/theme.ts`  
**Update metrics**: Modify `src/data/productivity.json`  
**Adjust timing**: Edit durations in `src/Composition.tsx`  
**Add scenes**: Create new scene in `src/scenes/` and add to Composition

## 📦 Key Features

✅ Modular component architecture  
✅ Type-safe TypeScript  
✅ Data-driven content  
✅ Professional animations  
✅ AI-integrated copy  
✅ Production-ready

## 🎯 Case Study Requirements

This project demonstrates:
- ✅ Remotion with TypeScript
- ✅ Professional motion design
- ✅ Modular & scalable code
- ✅ AI integration
- ✅ Data-driven content

## 📄 Documentation

- [README.md](README.md) - This file
- [QUICKSTART.md](QUICKSTART.md) - Fast setup guide
- [AI_INTEGRATION.md](AI_INTEGRATION.md) - AI usage details
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Case study overview

## 📝 License

Created for educational purposes as a case study project.

---

**Technology**: Remotion + TypeScript + React  
**Concept**: FlowState AI - Developer Productivity Copilot

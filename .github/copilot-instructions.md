# Digital Habit Tracker with Gamification - Global Instructions

## Project Overview
This is a Digital Habit Tracker with Gamification app that helps users track daily habits with streak counters, motivational quotes, heatmap visualizations, and system notifications.

## Architecture
- **Frontend**: Next.js
- **Backend**: Node.js with Express.js
- **Database**: SQLite for local storage
- **Styling**: Tailwind CSS or CSS Modules
- **State Management**: React Context API or Zustand
- **Visualizations**: React-heatmap-grid, Chart.js, Material Design
- **Gamification**: Custom logic with points, badges, streaks

## Core Features
1. **Habit Management**: Create, edit, delete daily habits
2. **Streak Tracking**: Track consecutive days of habit completion
3. **Gamification**: Points, levels, badges, achievements
4. **Heatmap Visualization**: Calendar-style progress visualization
5. **Motivational Quotes**: Daily inspirational quotes from API
6. **Notifications**: System reminders and celebrations
7. **Progress Analytics**: Charts and statistics
8. **User Profile**: Avatar, stats, achievements display

## Tech Stack Guidelines
- Use TypeScript for type safety
- Implement responsive design (mobile-first)
- Follow React best practices (hooks, functional components)
- Use semantic HTML and accessibility features
- Implement proper error handling and loading states
- Follow REST API conventions
- Use environment variables for configuration
- Implement proper validation on both frontend and backend

## Development Rules
- Write clean, readable, and well-documented code
- Use consistent naming conventions (camelCase for JS, kebab-case for CSS)
- Implement proper error boundaries and fallbacks
- Test core functionality
- Follow security best practices
- Optimize for performance
- Make components reusable and modular

## File Structure
```
/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── types/
│   │   └── styles/
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── utils/
│   ├── tests/
│   └── package.json
├── shared/
│   └── types/
└── docs/
```

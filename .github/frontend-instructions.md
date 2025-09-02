# Frontend Instructions - Digital Habit Tracker

## Technology Stack
- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand or React Context
- **HTTP Client**: Axios
- **Icons**: Lucide React or React Icons
- **Notifications**: React-toastify
- **Routing**: React Router DOM
- **Date Handling**: date-fns
- **Animations**: Framer Motion (optional)

## Component Structure

### Core Components
1. **HabitCard**: Individual habit display with completion toggle
2. **HabitList**: Container for all habits
3. **StreakCounter**: Shows current streak with fire emoji
4. **HeatmapCalendar**: Calendar view of habit completion
5. **ProgressChart**: Charts showing weekly/monthly progress
6. **MotivationalQuote**: Daily quote display
7. **GameficationPanel**: Points, level, badges display
8. **NotificationCenter**: Toast notifications and reminders

### Page Components
1. **Dashboard**: Main view with all habits and stats
2. **HabitDetail**: Individual habit analytics
3. **Profile**: User stats, achievements, settings
4. **Settings**: App preferences, notification settings

## State Management
```typescript
interface AppState {
  habits: Habit[];
  user: User;
  streaks: Record<string, number>;
  points: number;
  level: number;
  badges: Badge[];
  completions: HabitCompletion[];
  quotes: Quote[];
  notifications: Notification[];
}
```

## Key Features Implementation

### Habit Tracking
- Create habits with name, description, frequency
- Mark habits as complete/incomplete
- Track completion timestamps
- Calculate streaks automatically

### Gamification
- Award points for habit completions (base: 10 points)
- Bonus points for streaks (streak × 5)
- Level up system (100 points per level)
- Achievement badges for milestones

### Heatmap Visualization
```typescript
// Use react-heatmap-grid
const heatmapData = habits.map(habit => 
  generateHeatmapData(habit.completions)
);
```

### Notifications
- Daily reminders at user-set times
- Celebration notifications for streaks
- Achievement unlock notifications
- Web Push API for browser notifications

## Styling Guidelines
- Use Tailwind utility classes
- Implement dark/light theme toggle
- Mobile-first responsive design
- Consistent spacing (4px, 8px, 16px, 24px, 32px)
- Use semantic colors (success, warning, error)
- Smooth transitions and hover effects

## API Integration
- Use Axios interceptors for authentication
- Implement loading states for all API calls
- Handle errors gracefully with toast notifications
- Cache frequently accessed data
- Implement optimistic updates for better UX

## Performance Optimization
- Lazy load non-critical components
- Memoize expensive calculations
- Virtualize long lists if needed
- Optimize images and assets
- Use React.memo for pure components

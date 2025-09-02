# API Layer Instructions - Digital Habit Tracker

## Technology Stack
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens
- **Validation**: Joi or Zod
- **Environment**: dotenv
- **Testing**: Jest + Supertest
- **Documentation**: Swagger/OpenAPI

## Database Schema

### User Model
```typescript
interface User {
  _id: ObjectId;
  email: string;
  username: string;
  password: string; // hashed
  profile: {
    avatar?: string;
    timezone: string;
    notificationSettings: {
      dailyReminders: boolean;
      reminderTime: string;
      achievements: boolean;
    };
  };
  gamification: {
    points: number;
    level: number;
    badges: string[];
    totalHabitsCompleted: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### Habit Model
```typescript
interface Habit {
  _id: ObjectId;
  userId: ObjectId;
  name: string;
  description?: string;
  category: string;
  frequency: 'daily' | 'weekly' | 'custom';
  target: number; // for weekly habits
  color: string;
  icon: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### HabitCompletion Model
```typescript
interface HabitCompletion {
  _id: ObjectId;
  habitId: ObjectId;
  userId: ObjectId;
  completedAt: Date;
  notes?: string;
  pointsEarned: number;
}
```

## API Endpoints

### Authentication Routes
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

### Habit Routes
```
GET    /api/habits           # Get user's habits
POST   /api/habits           # Create new habit
GET    /api/habits/:id       # Get specific habit
PUT    /api/habits/:id       # Update habit
DELETE /api/habits/:id       # Delete habit
POST   /api/habits/:id/complete    # Mark habit as complete
DELETE /api/habits/:id/complete    # Unmark habit completion
```

### Analytics Routes
```
GET /api/analytics/streaks          # Get current streaks
GET /api/analytics/heatmap/:habitId # Get heatmap data
GET /api/analytics/progress         # Get progress statistics
GET /api/analytics/achievements     # Get user achievements
```

### External API Routes
```
GET /api/quotes/daily              # Get daily motivational quote
```

## Business Logic

### Streak Calculation
```typescript
function calculateStreak(completions: HabitCompletion[]): number {
  // Sort completions by date
  // Count consecutive days from today backwards
  // Return streak count
}
```

### Points System
```typescript
const POINTS = {
  HABIT_COMPLETION: 10,
  STREAK_BONUS: 5, // per day in streak
  WEEKLY_GOAL: 50,
  MONTHLY_GOAL: 200
};
```

### Level System
```typescript
function calculateLevel(totalPoints: number): number {
  return Math.floor(totalPoints / 100) + 1;
}
```

### Achievement System
```typescript
const ACHIEVEMENTS = {
  FIRST_HABIT: { id: 'first-habit', name: 'Getting Started', points: 50 },
  WEEK_STREAK: { id: 'week-streak', name: 'Week Warrior', points: 100 },
  MONTH_STREAK: { id: 'month-streak', name: 'Monthly Master', points: 500 },
  HUNDRED_HABITS: { id: 'hundred-habits', name: 'Century Club', points: 1000 }
};
```

## Middleware
- **Authentication**: Verify JWT tokens
- **Validation**: Validate request bodies
- **Error Handling**: Centralized error handling
- **Rate Limiting**: Prevent API abuse
- **CORS**: Configure cross-origin requests
- **Logging**: Request/response logging

## External API Integration

### Motivational Quotes API
```typescript
// Use ZenQuotes API or similar
const QUOTES_API = 'https://zenquotes.io/api/today';

async function getDailyQuote(): Promise<Quote> {
  // Fetch and cache daily quote
  // Fallback to local quotes if API fails
}
```

## Security Best Practices
- Hash passwords with bcrypt
- Use JWT with short expiration times
- Implement refresh token rotation
- Validate all input data
- Use HTTPS in production
- Implement rate limiting
- Log security events

## Error Handling
```typescript
interface ApiError {
  status: number;
  message: string;
  code: string;
  details?: any;
}

// Standardized error responses
const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  INTERNAL_ERROR: 'INTERNAL_ERROR'
};
```

## Performance Optimization
- Use database indexes for frequent queries
- Implement caching for static data
- Paginate large result sets
- Use aggregation pipelines for analytics
- Optimize database queries
- Implement connection pooling

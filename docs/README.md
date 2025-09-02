# Digital Habit Tracker - Documentation

## Overview
This is a comprehensive digital habit tracker application with gamification elements including streak counters, motivational quotes, heatmap visualizations, and system notifications.

## Architecture

### Monorepo Structure
```
digital-habit-tracker/
├── frontend/          # Next.js (React) application
├── backend/           # Node.js Express API
├── shared/            # Shared types and utilities
├── docs/              # Documentation
└── README.md          # Main project README
```

### Technology Stack

#### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context/Hooks (can be extended with Zustand/Redux)

#### Backend
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: SQLite (for simplicity, can be migrated to PostgreSQL)
- **Authentication**: JWT (to be implemented)

#### Shared
- **Types**: Shared TypeScript types and interfaces
- **Utils**: Common utility functions

## Features

### Core Habit Tracking
- Create, read, update, delete habits
- Mark habits as complete/incomplete
- Track habit completion over time
- Multiple habit categories (health, fitness, productivity, etc.)
- Different frequencies (daily, weekly, monthly)

### Gamification
- Points system for completing habits
- Streak tracking (current and longest)
- User levels and experience points
- Badge system with different rarities
- Leaderboards (future enhancement)

### Visualizations
- Heatmap showing habit completion over time
- Progress charts and statistics
- Streak visualizations

### Additional Features
- Motivational quotes
- System notifications
- Progress export
- Mobile-responsive design

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
See the main README.md for setup instructions.

## API Documentation

### Base URL
- Development: `http://localhost:3001`

### Endpoints

#### Health Check
- **GET** `/health` - Check if API is running

#### Future Endpoints (to be implemented)
- **POST** `/api/auth/register` - User registration
- **POST** `/api/auth/login` - User login
- **GET** `/api/habits` - Get user habits
- **POST** `/api/habits` - Create new habit
- **PUT** `/api/habits/:id` - Update habit
- **DELETE** `/api/habits/:id` - Delete habit
- **POST** `/api/habits/:id/complete` - Mark habit as complete
- **GET** `/api/stats` - Get user statistics
- **GET** `/api/badges` - Get available badges

## Database Schema

### Tables (to be created)

#### users
- id (PRIMARY KEY)
- username (UNIQUE)
- email (UNIQUE)
- password_hash
- created_at
- updated_at

#### habits
- id (PRIMARY KEY)
- user_id (FOREIGN KEY)
- title
- description
- frequency
- category
- target_count
- created_at
- updated_at

#### habit_entries
- id (PRIMARY KEY)
- habit_id (FOREIGN KEY)
- date
- completed
- count
- notes
- created_at

#### user_stats
- id (PRIMARY KEY)
- user_id (FOREIGN KEY)
- total_points
- current_streak
- longest_streak
- level
- experience_points
- updated_at

#### badges
- id (PRIMARY KEY)
- name
- description
- icon
- condition
- rarity

#### user_badges
- id (PRIMARY KEY)
- user_id (FOREIGN KEY)
- badge_id (FOREIGN KEY)
- earned_at

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run linting and tests
6. Submit a pull request

## License
ISC License
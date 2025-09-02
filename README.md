# Digital Habit Tracker

A Digital Habit Tracker with Gamification features including streak counters, motivational quotes, heatmap visualizations, and system notifications.

## 🏗️ Project Structure

This is a monorepo containing:

```
digital-habit-tracker/
├── frontend/          # Next.js (React) application with Tailwind CSS
├── backend/           # Node.js Express API with TypeScript
├── shared/            # Shared TypeScript types and utilities
├── docs/              # Project documentation
└── README.md          # This file
```

## 🚀 Technology Stack

### Frontend
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ESLint** for code quality

### Backend
- **Express.js** with TypeScript
- **SQLite** database for data persistence
- **JWT** for authentication (to be implemented)
- **ESLint** for code quality

### Shared
- **TypeScript** shared types and utilities
- Common functions used across frontend and backend

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/ravi-cheetiralaav/digital-habit-tracker.git
cd digital-habit-tracker
```

### 2. Install all dependencies
```bash
npm run install:all
```

### 3. Set up environment variables

#### Backend Environment
```bash
cd backend
cp .env.example .env
```

Edit the `.env` file with your preferred settings:
```env
PORT=3001
NODE_ENV=development
DATABASE_PATH=./data/habits.db
JWT_SECRET=your-super-secret-jwt-key
CORS_ORIGINS=http://localhost:3000
```

### 4. Build shared package
```bash
npm run build:shared
```

## 🏃‍♂️ Running the Application

### Development Mode (Both Frontend & Backend)
```bash
npm run dev
```

This will start:
- Frontend at: http://localhost:3000
- Backend API at: http://localhost:3001

### Run Individual Services

#### Frontend Only
```bash
npm run dev:frontend
```

#### Backend Only
```bash
npm run dev:backend
```

## 🔧 Available Scripts

### Root Level Scripts
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build all packages (shared, backend, frontend)
- `npm run lint` - Lint all packages
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code using Prettier
- `npm run clean` - Clean all build artifacts and node_modules

### Frontend Scripts (in `/frontend`)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend Scripts (in `/backend`)
- `npm run dev` - Start development server with nodemon
- `npm run build` - Compile TypeScript
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Shared Scripts (in `/shared`)
- `npm run build` - Compile TypeScript
- `npm run dev` - Watch mode compilation

## 🗄️ Database

The application uses SQLite for data persistence. The database file will be created automatically at `backend/data/habits.db` when you first run the backend.

### Database Schema
- **users** - User accounts and authentication
- **habits** - Habit definitions and settings
- **habit_entries** - Daily habit completion records
- **user_stats** - Gamification statistics (points, streaks, levels)
- **badges** - Available achievement badges
- **user_badges** - User-earned badges

## 🎮 Features

### Core Features
- ✅ Create and manage daily habits
- ✅ Track habit completion
- ✅ View progress and statistics
- ✅ Multiple habit categories
- ✅ Flexible frequency settings

### Gamification (Planned)
- 🎯 Points system for completing habits
- 🔥 Streak tracking (current and longest)
- 📈 User levels and experience points
- 🏆 Achievement badges
- 📊 Progress visualizations

### Additional Features (Planned)
- 📱 System notifications
- 💬 Motivational quotes
- 🗓️ Heatmap visualizations
- 📤 Progress export
- 📱 Mobile-responsive design

## 🧪 Testing

Currently, basic testing infrastructure is set up. To add tests:
```bash
# Frontend tests (to be added)
cd frontend && npm test

# Backend tests (to be added)
cd backend && npm test
```

## 📝 Code Style

The project uses ESLint and Prettier for consistent code formatting:
```bash
# Check formatting
npm run format:check

# Auto-format code
npm run format

# Fix linting issues
npm run lint:fix
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`npm run lint && npm run build`)
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📚 Documentation

Detailed documentation is available in the `/docs` folder:
- [API Documentation](./docs/README.md)
- [Database Schema](./docs/README.md#database-schema)
- [Architecture Overview](./docs/README.md#architecture)

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the PORT in backend/.env
2. **Database connection issues**: Ensure the data directory exists and has write permissions
3. **Build failures**: Run `npm run clean` and then `npm run install:all`

### Getting Help
- Check the [Issues](https://github.com/ravi-cheetiralaav/digital-habit-tracker/issues) page
- Review the documentation in `/docs`

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Ravi Cheetirala**
- GitHub: [@ravi-cheetiralaav](https://github.com/ravi-cheetiralaav)

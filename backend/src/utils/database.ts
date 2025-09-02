import sqlite3 from 'sqlite3';
import path from 'path';

const DB_PATH = process.env.DATABASE_PATH || path.join(__dirname, '../data/habits.db');

export class Database {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3.Database(DB_PATH, (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
      } else {
        console.log('📦 Connected to SQLite database');
        this.initializeTables();
      }
    });
  }

  private initializeTables() {
    const queries = [
      `CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      )`,
      
      `CREATE TABLE IF NOT EXISTS habits (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        frequency TEXT NOT NULL CHECK (frequency IN ('daily', 'weekly', 'monthly')),
        category TEXT NOT NULL CHECK (category IN ('health', 'fitness', 'productivity', 'learning', 'social', 'mindfulness', 'creative', 'other')),
        target_count INTEGER DEFAULT 1,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      )`,
      
      `CREATE TABLE IF NOT EXISTS habit_entries (
        id TEXT PRIMARY KEY,
        habit_id TEXT NOT NULL,
        date TEXT NOT NULL,
        completed BOOLEAN DEFAULT FALSE,
        count INTEGER DEFAULT 0,
        notes TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (habit_id) REFERENCES habits (id) ON DELETE CASCADE,
        UNIQUE(habit_id, date)
      )`,
      
      `CREATE TABLE IF NOT EXISTS user_stats (
        id TEXT PRIMARY KEY,
        user_id TEXT UNIQUE NOT NULL,
        total_points INTEGER DEFAULT 0,
        current_streak INTEGER DEFAULT 0,
        longest_streak INTEGER DEFAULT 0,
        level INTEGER DEFAULT 1,
        experience_points INTEGER DEFAULT 0,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      )`,
      
      `CREATE TABLE IF NOT EXISTS badges (
        id TEXT PRIMARY KEY,
        name TEXT UNIQUE NOT NULL,
        description TEXT NOT NULL,
        icon TEXT NOT NULL,
        condition_text TEXT NOT NULL,
        rarity TEXT NOT NULL CHECK (rarity IN ('common', 'rare', 'epic', 'legendary'))
      )`,
      
      `CREATE TABLE IF NOT EXISTS user_badges (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        badge_id TEXT NOT NULL,
        earned_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (badge_id) REFERENCES badges (id) ON DELETE CASCADE,
        UNIQUE(user_id, badge_id)
      )`
    ];

    queries.forEach((query) => {
      this.db.run(query, (err) => {
        if (err) {
          console.error('Error creating table:', err.message);
        }
      });
    });

    // Insert default badges
    this.insertDefaultBadges();
  }

  private insertDefaultBadges() {
    const defaultBadges = [
      {
        id: 'first-habit',
        name: 'First Habit',
        description: 'Created your first habit',
        icon: '🎯',
        condition: 'Create first habit',
        rarity: 'common'
      },
      {
        id: 'streak-7',
        name: 'Week Warrior',
        description: 'Maintained a 7-day streak',
        icon: '🔥',
        condition: 'Achieve 7-day streak',
        rarity: 'common'
      },
      {
        id: 'streak-30',
        name: 'Month Master',
        description: 'Maintained a 30-day streak',
        icon: '💪',
        condition: 'Achieve 30-day streak',
        rarity: 'rare'
      },
      {
        id: 'streak-100',
        name: 'Century Champion',
        description: 'Maintained a 100-day streak',
        icon: '👑',
        condition: 'Achieve 100-day streak',
        rarity: 'epic'
      }
    ];

    defaultBadges.forEach((badge) => {
      this.db.run(
        `INSERT OR IGNORE INTO badges (id, name, description, icon, condition_text, rarity) VALUES (?, ?, ?, ?, ?, ?)`,
        [badge.id, badge.name, badge.description, badge.icon, badge.condition, badge.rarity]
      );
    });
  }

  getDatabase(): sqlite3.Database {
    return this.db;
  }

  close(): void {
    this.db.close((err) => {
      if (err) {
        console.error('Error closing database:', err.message);
      } else {
        console.log('Database connection closed');
      }
    });
  }
}

export const database = new Database();
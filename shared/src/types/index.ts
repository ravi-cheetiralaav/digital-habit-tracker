// User related types
export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

// Habit related types
export interface Habit {
  id: string;
  userId: string;
  title: string;
  description?: string;
  frequency: HabitFrequency;
  category: HabitCategory;
  targetCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface HabitEntry {
  id: string;
  habitId: string;
  date: string;
  completed: boolean;
  count: number;
  notes?: string;
  createdAt: string;
}

// Gamification types
export interface UserStats {
  id: string;
  userId: string;
  totalPoints: number;
  currentStreak: number;
  longestStreak: number;
  level: number;
  experiencePoints: number;
  badges: Badge[];
  updatedAt: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: string;
  rarity: BadgeRarity;
  earnedAt?: string;
}

// Enums
export enum HabitFrequency {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly'
}

export enum HabitCategory {
  HEALTH = 'health',
  FITNESS = 'fitness',
  PRODUCTIVITY = 'productivity',
  LEARNING = 'learning',
  SOCIAL = 'social',
  MINDFULNESS = 'mindfulness',
  CREATIVE = 'creative',
  OTHER = 'other'
}

export enum BadgeRarity {
  COMMON = 'common',
  RARE = 'rare',
  EPIC = 'epic',
  LEGENDARY = 'legendary'
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
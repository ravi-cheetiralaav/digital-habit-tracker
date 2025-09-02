/**
 * Utility functions shared between frontend and backend
 */

/**
 * Format date to YYYY-MM-DD format
 */
export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

/**
 * Get current date in YYYY-MM-DD format
 */
export const getCurrentDate = (): string => {
  return formatDate(new Date());
};

/**
 * Calculate streak based on habit entries
 */
export const calculateStreak = (dates: string[]): number => {
  if (!dates.length) return 0;
  
  const sortedDates = dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
  let streak = 0;
  const today = getCurrentDate();
  
  for (let i = 0; i < sortedDates.length; i++) {
    const expectedDate = new Date();
    expectedDate.setDate(expectedDate.getDate() - i);
    const expectedDateString = formatDate(expectedDate);
    
    if (sortedDates[i] === expectedDateString) {
      streak++;
    } else {
      break;
    }
  }
  
  return streak;
};

/**
 * Generate a UUID v4
 */
export const generateId = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};
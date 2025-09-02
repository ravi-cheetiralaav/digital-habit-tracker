export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🎯 Digital Habit Tracker
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Build better habits with gamification features including streak counters, 
            motivational quotes, heatmap visualizations, and system notifications.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-4">🔥</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Streak Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track your daily progress and maintain winning streaks to build lasting habits.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Gamification
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Earn points, unlock badges, and level up as you complete your daily habits.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Visual Progress
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              See your progress with beautiful heatmaps and charts that motivate you to continue.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Start?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The application is currently in development. Backend API is running and ready for integration.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Backend API: Running
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Frontend: Active
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Database: SQLite Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

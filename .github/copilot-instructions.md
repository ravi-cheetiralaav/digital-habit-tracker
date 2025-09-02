# Digital Habit Tracker - Copilot Instructions

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Current Repository State

**IMPORTANT**: This repository is currently minimal and contains only a README.md file. The actual application code has not been developed yet. The project is described as "A Digital Habit Tracker with Gamification features including streak counters, motivational quotes, heatmap visualizations, and system notifications."

## Working Effectively

### Initial Repository Setup
- Always check the current state before assuming technology stack:
  - `ls -la` to see what files exist
  - `find . -name "package.json" -o -name "requirements.txt" -o -name "Gemfile" -o -name "pom.xml" -o -name "Cargo.toml"` to identify technology stack
  
### When Code is Added - General Guidelines

#### For Node.js/JavaScript Projects
If `package.json` is present:
- Install dependencies: `npm install` -- typically takes 1-5 minutes. NEVER CANCEL. Set timeout to 10+ minutes.
- Build the project: `npm run build` -- can take 5-15 minutes. NEVER CANCEL. Set timeout to 30+ minutes.
- Run tests: `npm test` or `npm run test` -- typically takes 2-10 minutes. NEVER CANCEL. Set timeout to 20+ minutes.
- Start development server: `npm run dev` or `npm start`
- Lint code: `npm run lint` or `npx eslint .`
- Format code: `npm run format` or `npx prettier --write .`

#### For Python Projects
If `requirements.txt` or `pyproject.toml` is present:
- Create virtual environment: `python -m venv venv`
- Activate virtual environment: `source venv/bin/activate` (Linux/Mac) or `venv\Scripts\activate` (Windows)
- Install dependencies: `pip install -r requirements.txt` -- typically takes 2-8 minutes. NEVER CANCEL. Set timeout to 15+ minutes.
- Run tests: `python -m pytest` or `python -m unittest discover` -- can take 5-20 minutes. NEVER CANCEL. Set timeout to 30+ minutes.
- Run the application: `python app.py` or `python main.py`
- Lint code: `flake8 .` or `pylint .`
- Format code: `black .`

#### For React/Frontend Projects
If `package.json` contains React dependencies:
- Install dependencies: `npm install` -- typically takes 2-8 minutes. NEVER CANCEL. Set timeout to 15+ minutes.
- Start development server: `npm start` -- usually starts in 1-3 minutes
- Build for production: `npm run build` -- can take 5-30 minutes. NEVER CANCEL. Set timeout to 45+ minutes.
- Run tests: `npm test` -- typically takes 2-15 minutes. NEVER CANCEL. Set timeout to 25+ minutes.

### Build and Test Guidelines

**CRITICAL TIMING EXPECTATIONS:**
- Initial dependency installation: 2-15 minutes depending on technology
- Full builds: 5-45 minutes depending on complexity
- Test suites: 2-30 minutes depending on coverage
- NEVER CANCEL any build or test command before these timeouts

**Always set explicit timeouts:**
- Dependency installation: 15+ minutes
- Build commands: 45+ minutes  
- Test commands: 30+ minutes

## Validation Scenarios

### For Habit Tracker Functionality
When the application is developed, always test these core scenarios after making changes:

#### Basic Habit Management
1. **Create a new habit**:
   - Navigate to habit creation page/modal
   - Enter habit name, description, frequency
   - Save and verify habit appears in list
   
2. **Mark habit as complete**:
   - Find the habit in the dashboard
   - Mark it as completed for today
   - Verify streak counter updates
   - Check that completion is visually indicated

3. **View habit statistics**:
   - Navigate to habits overview/dashboard
   - Verify heatmap visualization displays correctly
   - Check that streak counters are accurate
   - Confirm motivational quotes are displayed

#### Gamification Features
1. **Streak tracking**:
   - Complete habits for multiple consecutive days
   - Verify streak counter increments correctly
   - Test streak reset when habits are missed
   
2. **Notifications**:
   - Verify reminder notifications are triggered
   - Test notification permissions (if web app)
   - Check notification content and timing

3. **Visual feedback**:
   - Verify heatmap colors represent activity levels
   - Check that progress indicators work correctly
   - Test responsive design on different screen sizes

### Technology-Specific Validation

#### Web Application Validation
- Always test in multiple browsers (Chrome, Firefox, Safari if available)
- Verify responsive design: `F12 -> Device toolbar -> test mobile and tablet views`
- Test PWA functionality if implemented
- Validate accessibility with screen reader simulation

#### API/Backend Validation
- Test all CRUD operations for habits
- Verify data persistence after server restart
- Test error handling for invalid inputs
- Check API documentation is up to date

## Pre-Commit Validation

Always run these commands before committing changes:

### For Node.js Projects
1. `npm run lint` -- fix linting errors or CI will fail
2. `npm run test` -- ensure all tests pass
3. `npm run build` -- verify build succeeds
4. `npm run format` (if available) -- format code consistently

### For Python Projects  
1. `flake8 .` or equivalent linter
2. `python -m pytest` -- ensure all tests pass
3. `black .` (if available) -- format code consistently

### Universal Checks
1. `git status` -- verify only intended files are staged
2. `git diff --cached` -- review changes before commit
3. Test the application manually with at least one complete user scenario

## Common File Locations

Once the codebase is developed, these are typical locations for a habit tracker:

### Frontend (React/Vue/Angular)
- Main component: `src/App.js` or `src/components/App.tsx`
- Habit components: `src/components/Habit/` or `src/features/habits/`
- API calls: `src/services/` or `src/api/`
- State management: `src/store/` or `src/context/`

### Backend (Node.js/Express)
- Main server: `server.js`, `app.js`, or `src/index.js`
- Routes: `routes/` or `src/routes/`
- Models: `models/` or `src/models/`
- Controllers: `controllers/` or `src/controllers/`

### Database
- Schema/migrations: `db/`, `migrations/`, or `prisma/`
- Seeds: `db/seeds/` or `seeders/`

### Configuration
- Environment variables: `.env`, `.env.example`
- Database config: `config/database.js` or similar
- Build config: `webpack.config.js`, `vite.config.js`, etc.

## Troubleshooting

### Common Issues
1. **Port already in use**: Use `lsof -i :3000` (replace 3000 with actual port) to find and kill conflicting processes
2. **Permission errors**: Ensure proper file permissions with `chmod +x` for scripts
3. **Database connection issues**: Verify database is running and connection strings are correct
4. **Build failures**: Clear cache with `npm clean-install` or equivalent

### Technology Detection Commands
Run these to identify the project structure:
```bash
# Check for Node.js
ls package.json 2>/dev/null && echo "Node.js project detected"

# Check for Python
ls requirements.txt setup.py pyproject.toml 2>/dev/null && echo "Python project detected"

# Check for database files
ls *.db *.sqlite* 2>/dev/null && echo "SQLite database found"

# Check for Docker
ls Dockerfile docker-compose.yml 2>/dev/null && echo "Docker configuration found"
```

## Important Notes

- **Repository Evolution**: As this repository develops, update these instructions with actual commands and timings
- **Technology Stack**: Once the technology stack is chosen, remove irrelevant sections and expand relevant ones
- **Build Times**: Measure actual build times and update timeout recommendations accordingly
- **User Scenarios**: Expand validation scenarios based on actual features implemented

Remember: These instructions should be updated as the codebase evolves. The current minimal state means most commands listed here are templates for future development.
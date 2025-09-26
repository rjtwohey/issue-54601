# Ionic React App

A simple React application built with Ionic and React Router for navigation between two pages.

## Features

- **Home Page**: Welcome page with navigation to About page
- **About Page**: Information page with back navigation to Home
- **Ionic Components**: Uses Ionic React components for a native mobile feel
- **React Router**: Client-side routing for seamless navigation

## Dependencies (Updated)

- React 17.0.2
- Ionic React 8.7.5
- Ionic React Router 8.7.5
- React Router 5.2.0
- Ionicons 5.4.0

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── pages/
│   ├── Home.tsx      # Home page component
│   └── About.tsx     # About page component
├── theme/
│   └── variables.css # Ionic theme variables
├── App.tsx           # Main app component with routing
└── index.tsx         # App entry point
```

## Navigation

The app uses Ionic React Router for navigation:
- Home page (`/`) - Main landing page
- About page (`/about`) - Information page with back button

Both pages include navigation buttons to switch between them.

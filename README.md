# HRM App - Human Resource Management Application

A comprehensive Human Resource Management (HRM) application designed to streamline HR operations and workforce management within the organization. This application provides tools for managing employees, events, feedback, notices, and other HR-related tasks.

## Overview

The HRM App Frontend is a modern React-based application built with Redux for state management, designed to handle various HR functions including employee management, event tracking, feedback collection, FAQs, and more.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Features

- **Employee Management**: Add and manage new employees
- **Event Tracking**: Create and manage organizational events
- **Feedback System**: Collect employee feedback
- **Notice Board**: Display important announcements and notices
- **FAQ Section**: Frequently asked questions for HR guidance
- **Authentication**: Secure login for authorized HR personnel
- **Settings**: Configure application preferences

## Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── EventCard.jsx
│   ├── PopupModal.jsx
│   ├── SideNavbar.jsx
│   └── TopNav.jsx
├── Pages/               # Page components
│   ├── Home.jsx
│   ├── Event.jsx
│   ├── Feedback.jsx
│   ├── FAQ.jsx
│   ├── Login.jsx
│   ├── NewEmply.jsx      # New Employee page
│   ├── NoticeBoard.jsx
│   └── Setting.jsx
├── Context Store/       # Global state management
│   ├── AuthStore.js
│   └── store.js
├── Utils/               # Utility functions
│   └── EmployeeRoutes.js
└── Static Data/         # Static data files
```

## Technology Stack

- **Frontend Framework**: React
- **State Management**: Redux & Redux Toolkit
- **Styling**: CSS
- **Build Tool**: Create React App

## Getting Started
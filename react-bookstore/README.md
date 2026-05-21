# React Bookstore

A React-based login and dashboard system with protected routes and user authentication.

## Features

- **User Authentication** - Login with email and password
- **Protected Routes** - Dashboard, Feed, Profile, and Settings pages are protected
- **User Profile** - View user profile information
- **Activity Feed** - Display user activity feed
- **Settings** - Application settings page
- **Logout** - Clear authentication and return to login

## Pages

| Page      | Route        | Description                |
| --------- | ------------ | -------------------------- |
| Login     | `/login`     | User login page            |
| Dashboard | `/dashboard` | Main dashboard (protected) |
| Feed      | `/feed`      | Activity feed (protected)  |
| Profile   | `/profile`   | User profile (protected)   |
| Settings  | `/settings`  | App settings (protected)   |

## Components

- **Login.jsx** - Email/password login form
- **Dashboard.jsx** - Main dashboard with welcome message and button
- **Feed.jsx** - Activity feed component
- **Profile.jsx** - User profile component
- **Settings.jsx** - Settings component
- **Navbar.jsx** - Navigation bar
- **Protected.jsx** - Route guard for protected pages

## Authentication

Authentication uses `localStorage` to store user credentials:

- **Email**: Stored as `userEmail`
- **Token**: Stored as `authToken`

The `Protected` component checks for authentication and redirects to `/login` if not authenticated.

## Test Images

Screenshots of test results are available in the `/public` folder:

- `task1Passed.png` - Task 1 test passed
- `task1Result.png` - Task 1 test results
- `task2CleanUp.png` - Task 2 cleanup results
- `task2Login.png` - Task 2 login setup
- `task2ParallelTest.png` - Task 2 parallel test execution
- `task2Passed.png` - Task 2 all tests passed

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS

## Default Login Credentials

- **Email**: `test@test.com`
- **Password**: `password`

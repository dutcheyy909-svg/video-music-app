# Video Music App

A cross-platform application for playing video content with background music. Built with React, React Native, and Node.js.

## 🎯 Features

- **Web Application**: Play videos with background music on desktop/mobile browsers
- **Mobile Apps**: Native iOS and Android support via React Native
- **Video Support**: HLS streams, MP4, WebM formats
- **Audio Control**: Independent volume controls for video and music
- **Responsive Design**: Works on all screen sizes
- **Content Management**: Backend API for managing videos and music

## 📁 Project Structure

```
video-music-app/
├── web/                    # React web application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── utils/         # Utility functions
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
├── mobile/                 # React Native app
│   ├── src/
│   │   ├── screens/       # Mobile screens
│   │   ├── components/    # Reusable components
│   │   ├── hooks/         # Custom hooks
│   │   └── App.tsx
│   ├── package.json
│   └── app.json
├── server/                 # Node.js/Express backend
│   ├── routes/            # API routes
│   ├── controllers/        # Business logic
│   ├── models/            # Data models
│   ├── middleware/        # Custom middleware
│   ├── server.js
│   └── package.json
├── shared/                 # Shared utilities
│   ├── types/             # TypeScript types
│   ├── constants/         # App constants
│   └── utils/             # Shared utilities
└── package.json           # Root monorepo config
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- React Native CLI (for mobile)

### Setup

```bash
# Install dependencies
npm install

# Install workspace dependencies
npm run install:all

# Start web app (dev mode)
npm run web:dev

# Start mobile app
npm run mobile:start

# Start server
npm run server:dev
```

## 🛠️ Tech Stack

### Frontend (Web)
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Web Audio API** - Audio manipulation

### Mobile
- **React Native** - Cross-platform framework
- **Expo** (optional) - Development framework
- **React Navigation** - Navigation
- **Native video players** - AVFoundation (iOS), ExoPlayer (Android)

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Multer** - File uploads
- **CORS** - Cross-origin handling

## 📦 API Endpoints

- `GET /api/videos` - List all videos
- `GET /api/videos/:id` - Get specific video
- `POST /api/videos` - Upload video
- `GET /api/music` - List background music
- `GET /api/music/:id` - Get specific music track
- `POST /api/music` - Upload music

## 🎨 Features to Implement

- [ ] Video player with controls
- [ ] Background music player
- [ ] Volume mixing
- [ ] Video upload form
- [ ] Music upload form
- [ ] User authentication
- [ ] Playlist management
- [ ] Responsive video grid
- [ ] Mobile navigation
- [ ] Database integration

## 📝 Environment Variables

Create `.env` files in relevant directories:

### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/video-music-app
NODE_ENV=development
```

### Web (.env)
```
VITE_API_URL=http://localhost:5000
```

## 🤝 Contributing

1. Create a branch: `git checkout -b feature/your-feature`
2. Commit: `git commit -am 'Add feature'`
3. Push: `git push origin feature/your-feature`
4. Submit a pull request

## 📄 License

MIT

## 📧 Support

For issues and questions, open a GitHub issue.

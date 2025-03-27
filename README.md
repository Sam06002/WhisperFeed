# WhisperFeed

A modern social media platform built with Next.js, Express, and MongoDB, focusing on anonymous expression and interaction. WhisperFeed allows users to share thoughts and connect without revealing their identity.

## Features

- 🎨 Modern and intuitive user interface
- 🔐 Anonymous user authentication (username/password only)
- 🌐 Anonymous post sharing and interaction
- 🔒 Privacy-focused design
- 📱 Responsive design for all devices
- 🔄 Real-time updates
- 🐳 Docker containerization

## Key Features

### Anonymous Posting
- Share thoughts and ideas without revealing your identity
- Create posts with optional anonymity settings
- Express freely without social pressure

### Anonymous Interaction
- Interact with posts through likes and comments
- Connect with other users while maintaining privacy
- Build meaningful connections without personal exposure

### Privacy First
- No email required for registration
- Minimal personal information collection
- User control over content visibility

## Tech Stack

- **Frontend**: Next.js, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Containerization**: Docker
- **Authentication**: JWT

## Prerequisites

- Docker and Docker Compose
- Node.js (for local development)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Sam06002/WhisperFeed.git
   cd WhisperFeed
   ```

2. Start the application using Docker Compose:
   ```bash
   docker-compose up
   ```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## Project Structure

```
WhisperFeed/
├── frontend/           # Next.js frontend application
│   ├── src/
│   │   ├── pages/     # Next.js pages
│   │   ├── components/# React components
│   │   └── styles/    # CSS and styling files
│   └── public/        # Static assets
├── backend/           # Express backend application
│   ├── src/
│   │   ├── routes/    # API routes
│   │   ├── models/    # MongoDB models
│   │   └── config/    # Configuration files
│   └── tests/         # Backend tests
└── docker-compose.yml # Docker configuration
```

## Development

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Backend Development
```bash
cd backend
npm install
npm run dev
```

## API Endpoints

- `POST /api/auth/register` - Register a new user (username/password only)
- `POST /api/auth/login` - Login user
- `GET /api/posts` - Get all posts (with optional anonymity filters)
- `POST /api/posts` - Create a new post (with anonymity options)
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post
- `POST /api/posts/:id/like` - Like a post anonymously
- `POST /api/posts/:id/comment` - Comment on a post anonymously

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- MongoDB team for the database
- Docker team for containerization 
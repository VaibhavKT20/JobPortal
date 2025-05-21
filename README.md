# Job Portal Application

A modern full-stack job portal application that connects employers and job seekers. This platform allows companies to post job opportunities and candidates to discover and apply for positions that match their skills and interests.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces
- **Vite**: Next-generation frontend tooling for faster development
- **React Router DOM**: For client-side routing
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Clerk**: User authentication and management
- **Axios**: Promise-based HTTP client for API requests
- **Quill**: Rich text editor for job descriptions
- **React Toastify**: Toast notifications
- **Moment.js**: Date formatting and manipulation

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling for Node.js
- **Clerk Express**: Authentication middleware for Express
- **Cloudinary**: Cloud-based image and video management
- **Multer**: Middleware for handling multipart/form-data
- **JWT**: JSON Web Tokens for secure transmission of information
- **Bcrypt**: Password hashing
- **Sentry**: Error monitoring and performance tracking

## Features

- **User Authentication**: Secure login and registration with Clerk
- **Job Listings**: Browse and search for job opportunities
- **Job Posting**: Employers can create and manage job listings
- **Rich Text Editing**: Format job descriptions with Quill editor
- **File Uploads**: Upload resumes and company logos with Cloudinary
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Toast Notifications**: Real-time feedback with React Toastify
- **Error Monitoring**: Track and resolve issues with Sentry

## Project Structure

```
job-portal/
├── client/                  # Frontend React application
│   ├── public/              # Static files
│   ├── src/                 # Source files
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Application pages
│   │   ├── context/         # React context providers
│   │   ├── utils/           # Utility functions
│   │   ├── main.jsx         # Entry point
│   │   └── ...
│   ├── package.json         # Frontend dependencies
│   └── ...
│
├── server/                  # Backend Express application
│   ├── controllers/         # Request handlers
│   ├── models/              # Mongoose data models
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware
│   ├── config/              # Configuration files
│   ├── server.js            # Entry point
│   ├── package.json         # Backend dependencies
│   └── ...
│
└── README.md                # Project documentation
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Client Setup
1. Navigate to the client directory:
   ```
   cd job-portal/client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the client directory with the following variables:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```
   npm run dev
   ```

### Server Setup
1. Navigate to the server directory:
   ```
   cd job-portal/server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the server:
   ```
   npm run server
   ```

## Available Scripts

### Client
- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run lint`: Runs the linter to check for errors
- `npm run preview`: Previews the production build locally

### Server
- `npm run server`: Starts the server with nodemon for development (auto-restart)
- `npm start`: Starts the server in production mode

## Contribution

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.


# MERN Todo App

A full-stack Todo application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring a modern, responsive UI.

## 🚀 Features

- **User Authentication**: Register and login with JWT tokens
- **Todo Management**: Create, read, update, and delete todos
- **Toggle Completion**: Click on todos to mark as complete/incomplete
- **Modern UI**: Clean, responsive design with smooth animations
- **Security**: User-specific todos with proper authentication

## 🛠 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Modern styling with gradients and animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
mern-todo-app/
├── backend/
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── models/
│   │   ├── User.js          # User schema
│   │   └── todo.js          # Todo schema
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── todos.js         # Todo CRUD routes
│   ├── package.json
│   └── server.js            # Main server file
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Todos.jsx
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # App entry point
│   │   └── styles.css       # Global styles
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JamesSuenio/Men-todo-app.git
   cd Men-todo-app
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Start the backend:
   ```bash
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Access the App**
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:5000`

## 🔧 API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user

### Todos (Protected Routes)
- `GET /todos` - Get user's todos
- `POST /todos` - Create new todo
- `PUT /todos/:id` - Toggle todo completion
- `DELETE /todos/:id` - Delete todo

## 🎨 Design Features

- **Gradient Background**: Subtle light gradient for visual appeal
- **Modern Cards**: Rounded corners with soft shadows
- **Teal Theme**: Contemporary color scheme
- **Smooth Animations**: Hover effects and transitions
- **Responsive**: Mobile-friendly design
- **Accessibility**: Focus states and proper contrast

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the dist/ folder
```

### Backend (Heroku/Render)
```bash
# Set environment variables
# Deploy the backend folder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**James Suenio** - [GitHub](https://github.com/JamesSuenio)

---

⭐ If you found this project helpful, please give it a star!
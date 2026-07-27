# 📋 Task Manager App

A full-stack Task Management web application that helps users organize, track, and manage their daily tasks efficiently. The application features secure user authentication using JWT, allowing each user to manage their own tasks in a personalized dashboard.

---

## 🚀 Live Demo

🔗 **Live Demo:** https://your-live-demo-link.com

---

## 📂 GitHub Repository

🔗 https://github.com/ruchi20788/task-manager-app

---

## 📖 Overview

The Task Manager App is a secure and responsive full-stack web application designed to simplify task management. Users can register, log in, and manage their tasks with complete CRUD (Create, Read, Update, Delete) functionality. The application uses JWT authentication for secure access and MySQL for reliable data storage.

---

## ✨ Features

- 🔐 Secure User Authentication (JWT)
- 👤 User Registration & Login
- ➕ Create New Tasks
- 📝 Edit Existing Tasks
- ✅ Mark Tasks as Completed
- 🗑️ Delete Tasks
- 📋 View All Tasks
- 📱 Responsive User Interface
- 💾 MySQL Database Integration
- ⚡ RESTful API Communication

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Authentication
- JSON Web Token (JWT)

### Tools
- Git
- GitHub
- VS Code
- Postman

---

## 📸 Screenshots

### Login Page

> <img src="https://github.com/user-attachments/assets/e922ec7d-934e-4424-9b0b-193b4cef2874" alt="Login Page" width="800">

---

### Task Management

> <img src="https://github.com/user-attachments/assets/95fa4bdf-2801-482b-a227-f7615b11546e" alt="Task Management Dashboard" width="800">

---

## 📁 Project Structure

```
task-manager-app/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   ├── package.json
│   └── server.js
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/ruchi20788/task-manager-app.git
```

### Navigate to the Project

```bash
cd task-manager-app
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

### Configure Environment Variables

Create a `.env` file inside the `server` folder and add:

```env
PORT=5000

DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=task_manager

JWT_SECRET=your_secret_key
```

### Start the Backend

```bash
npm start
```

### Start the Frontend

```bash
cd ../client
npm start
```

The application will be available at:

```
Frontend: http://localhost:3000

Backend: http://localhost:5000
```

---

## 🗄️ Database

The application uses **MySQL** to store:

- User Information
- Authentication Data
- Task Details
- Task Status

---

## 🔒 Authentication

JWT (JSON Web Token) is used to:

- Authenticate users
- Protect private routes
- Secure API requests
- Maintain user sessions

---

## 🚀 Future Enhancements

- 📅 Due Dates & Reminders
- ⭐ Task Priority Levels
- 🔍 Search & Filter Tasks
- 🌙 Dark Mode
- 📊 Task Analytics Dashboard
- 📂 Task Categories
- 🔔 Email Notifications

---

## 👩‍💻 Author

**Ruchita Pethe**

GitHub: https://github.com/ruchi20788

LinkedIn: www.linkedin.com/in/ruchitapethe-6a8839272

---

## ⭐ Show Your Support

If you found this project useful, please consider giving it a ⭐ on GitHub!

---

## 📜 License

This project is licensed under the MIT License.

# Social-Media-Plateform
This is a full-stack social media application where users can create profiles, post status updates, send friend requests, and comment/like posts. 
The project is built using **MongoDB**, **Node.js**, **Express.js**, and **React.js**.

## Features
- User authentication (register/login) using **JWT**.
- Create and manage user profiles.
- Post creation, liking, and commenting.
- Manage friend connections.

  ## Technologies Used

### Backend
- **Node.js** (runtime environment)
- **Express.js** (web framework)
- **MongoDB** (database)
- **Mongoose** (MongoDB ODM)
- **JSON Web Tokens (JWT)** (authentication)
- **bcrypt.js** (password hashing)

  ### Frontend
- **React.js** (UI framework)
- **Axios** (API calls)
- **React Router** (routing)


  ## Project Structure

### Backend
```
/backend
├── /models
│   ├── Post.js              // Post schema
│   └── User.js              // User schema
├── /routes
│   ├── auth.js              // Authentication routes
│   ├── posts.js             // Post-related routes
│   └── users.js             // User-related routes
├── /middleware
│   └── authMiddleware.js    // JWT middleware
├── server.js                // Main server file
└── package.json             // Dependencies and scripts

### Frontend

/frontend
├── /public
│   └── index.html           // HTML entry point
├── /src
│   ├── /components
│   │   ├── AuthForm.js       // Login/Register form
│   │   ├── PostForm.js       // Post creation form
│   │   └── PostList.js       // Display posts
│   ├── /context
│   │   └── AuthContext.js    // Authentication context
│   ├── App.js                // Main React component
│   └── index.js              // React entry point
└── package.json             // Dependencies and scripts

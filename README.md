# To-Do List Application (MERN Stack)

## Project Overview

This project is a simple To-Do List application built using **Node.js, Express, MongoDB, and React**. The goal of the project is to understand how frontend and backend communicate using APIs and how data is stored and managed in a database.

The application allows users to:

* Add new tasks
* View all tasks
* Update task status (mark as completed)
* Delete tasks

## Technologies Used

### Backend:

* Node.js
* Express.js
* MongoDB (Mongoose)

### Frontend:

* React.js
* Axios (for API calls)

## Project Structure

### Backend:

* `models/` → Contains database schema
* `controllers/` → Contains logic for APIs
* `routes/` → Defines API routes
* `config/` → Database connection
* `server.js` → Entry point

### Frontend:

* `src/App.js` → Main UI
* `src/api.js` → Axios configuration

## How to Run the Project

### 1. Clone the repository

```bash
git clone <your-repo-link>
```

### 2. Backend Setup

```bash
cd todo-backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

Run the backend:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd todo-frontend
npm install
npm start
```

## API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/tasks     | Get all tasks   |
| POST   | /api/tasks     | Create new task |
| PUT    | /api/tasks/:id | Update task     |
| DELETE | /api/tasks/:id | Delete task     |

## Application Flow

1. User enters a task in the frontend
2. React sends request to backend using Axios
3. Backend processes request using Express
4. Data is stored/retrieved from MongoDB
5. Response is sent back and UI updates

## Challenges that i Faced

* Connecting frontend and backend correctly (CORS issues)
* Handling asynchronous operations
* Managing state updates in React
* Debugging API errors during testing


## How Challenges Were Solved

* Used `cors` middleware to allow requests
* Implemented async/await for clean code
* Used React hooks (`useState`, `useEffect`)
* Tested APIs using Postman before integration

## Testing

* Backend APIs were tested using Postman
* Verified CRUD operations
* Checked data synchronization between frontend and backend

## Conclusion

This project helped me in understanding:

* REST API development
* Full-stack integration
* Database operations using MongoDB
* React state management


# TickIt: A Simple and Efficient To-Do App

TickIt is a feature-rich and user-friendly to-do app designed to help you organize your tasks effortlessly. Built with the MERN stack, TickIt leverages modern web technologies for a seamless experience. It features a robust backend using Express and MongoDB, along with a responsive and interactive frontend built with React and Vite.

## Features

- **Task Management**: Add, update, and delete tasks easily.
- **Real-Time Updates**: Changes are reflected instantly on the interface.
- **Responsive Design**: Optimized for all devices, ensuring a consistent experience.
- **Modern Tech Stack**: Built using the latest tools and frameworks for reliability and performance.

## Tech Stack

### Frontend
- **React**: For building an interactive and dynamic user interface.
- **Vite**: For faster builds and optimized development.

### Backend
- **Express.js**: For building the RESTful API.
- **MongoDB**: For efficient and scalable data storage.

### Languages and Tools
- **JavaScript**: The core programming language.
- **Node.js**: For backend runtime.
- **Mongoose**: For MongoDB object modeling.

## Folder Structure

```plaintext
TickIt/
├── backend/         # Backend code with Express.js
│   └── index.js     # Main server file
└── frontend/        # Frontend code with React and Vite
    └── src/
        ├── components/ # React components
        ├── App.js      # Main React app
        └── index.js    # Entry point
```

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- npm or yarn

### Steps to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/TanmmayRJoseph/tickit.git
   cd tickit
   ```

2. **Setup Backend**
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the server:
     ```bash
     npm start
     ```

3. **Setup Frontend**
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

4. **Access the Application**
   - Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## API Endpoints

| Method | Endpoint        | Description         |
|--------|-----------------|---------------------|
| GET    | /tasks          | Fetch all tasks    |
| POST   | /tasks          | Add a new task     |
| PUT    | /tasks/:id      | Update a task      |
| DELETE | /tasks/:id      | Delete a task      |

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or feedback, feel free to reach out:
- **Email**: tanmmayrj@gmail.com
- **GitHub**: [TanmmayRJoseph](https://github.com/TanmmayRJoseph)

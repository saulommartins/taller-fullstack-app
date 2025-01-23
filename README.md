# Full-Stack Item Manager Application

This is a simple full-stack application built with **Node.js**, **Express**, and **React**. The application allows users to manage a list of items, supporting the following operations:

- Retrieve all items (GET)
- Add a new item (POST)
- Delete an item by ID (DELETE)

---

## **Project Structure**

\`\`\`
root/
├── backend/    # Backend files (Node.js + Express API)
├── frontend/   # Frontend files (React application)
└── README.md   # Documentation
\`\`\`

---

## **Getting Started**

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (Node Package Manager)
- **Git** (optional for cloning the repository)

---

## **Steps to Run the Application**

### 1. Clone the Repository
\`\`\`bash
git clone <repository-url>
cd fullstack-app
\`\`\`

### 2. Run the Backend

#### Navigate to the backend directory:
\`\`\`bash
cd backend
\`\`\`

#### Install dependencies:
\`\`\`bash
npm install
\`\`\`

#### Start the backend server:
\`\`\`bash
node index.js
\`\`\`

- The server will start at **\`http://localhost:5001\`**.

---

### 3. Run the Frontend

#### Navigate to the frontend directory:
\`\`\`bash
cd ../frontend
\`\`\`

#### Install dependencies:
\`\`\`bash
npm install
\`\`\`

#### Start the React development server:
\`\`\`bash
npm start
\`\`\`

- The application will open in your browser at **\`http://localhost:3000\`**.

---

## **Testing the Application**

1. **Add an Item**:
   - Use the form on the frontend to add a new item (name and description).

2. **View Items**:
   - The list of items is displayed below the form.

3. **Delete an Item**:
   - Click the \"Delete\" button next to an item to remove it.

---

## **Project Details**

### Backend (Node.js + Express)

- **Route Endpoints**:
  - \`GET /api/items\`: Retrieve all items.
  - \`POST /api/items\`: Add a new item (requires a \`name\` in the request body).
  - \`DELETE /api/items/:id\`: Delete an item by ID.

- **Data Storage**:
  - Items are stored in-memory for simplicity (not persisted in a database).

---

### Frontend (React)

- **Key Features**:
  - Form for adding items with validation.
  - List displaying all items retrieved from the backend.
  - Delete functionality to remove items.

- **API Integration**:
  - Uses \`axios\` to interact with the backend API.

---

## **Dependencies**

### Backend
- \`express\`: Web framework for building the API.
- \`cors\`: Middleware to allow cross-origin requests.
- \`body-parser\`: Parses JSON in the request body.

### Frontend
- \`axios\`: For making HTTP requests.
- \`react\`, \`react-dom\`: React core libraries.
- \`react-scripts\`: Tools for building and running the React app.

---

## **Future Enhancements**

- Replace in-memory storage with a database (e.g., MongoDB or PostgreSQL).
- Add user authentication for secure API access.
- Implement additional features, such as editing items.

---

## **Contributors**

- **Saulo Mendes Martins**
  - Email: saulommartins@gmail.com
  - GitHub: saulommartins

---

## **License**

This project is licensed under the MIT License. See the \`LICENSE\` file for details.
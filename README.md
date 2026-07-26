# GramConnect


*A Web-Based Grievance Management System for Village Panchayats*

---

# Problem Statement

Many village panchayats still rely on manual methods to record and manage citizen grievances, making complaint tracking slow, inefficient, and difficult to monitor.

GramConnect provides a centralized digital solution that enables efficient grievance registration, secure status management, and transparent grievance tracking.

---

# Project Description

GramConnect is a web-based grievance management system developed to simplify and digitize the process of registering, tracking, and managing citizen grievances within village panchayats.

The application allows citizens to register grievances, view grievance details, and administrators to securely update grievance statuses using JWT-based authentication. The system improves transparency, accountability, and efficiency by replacing manual grievance management with a centralized digital platform.

---


# Objectives

- Digitize grievance registration and management.
- Improve transparency throughout the grievance resolution process.
- Provide secure administrator authentication.
- Maintain accurate and centralized grievance records.
- Offer a user-friendly interface.

---

# Technology Stack

## Frontend

- React.js
- React Router DOM
- Axios
- CSS3

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Authentication

- JSON Web Token (JWT)
- bcrypt.js

---

# Key Features

## Citizen 

- Register a new grievance
- View all registered grievances
- View detailed grievance information

## Administrator

- Secure Admin Sign Up
- Secure Admin Login
- JWT Authentication
- Update grievance status
- Logout

## Additional Features

- Responsive User Interface
- Loading State Handling
- Empty State Handling
- Error Handling
- Access Denied Page

---

# Project Structure

```
GramConnect/
│
├── client(frontend)/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
|   |__ .gitignore
│   └── package.json
│
├── server(backend)/
|   |
|   |__config
|   |  |__db.js
│   ├
│   ├── db.js
│   ├── .env
|   |__.gitignore
|   |── index.js
│   └── package.json
│
├
│
├── README.md
```

---

# Prerequisites

Before running this project, ensure the following software is installed on your system:

- Node.js
- npm
- MySQL Server
- Git

---

# Installation & Execution

## Step 1 — Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_LINK>
```

---

## Step 2 — Navigate into the Project

```bash
cd GramConnect
```

---

## Step 3 — Install Frontend Dependencies

```bash
cd frontend

npm install
```

---

## Step 4 — Start the Frontend(client)

```bash
npm run dev
```

The frontend will start at:

```
http://localhost:5173
```

---

## Step 5 — Install Backend Dependencies

Open another terminal.

```bash
cd backend

npm install
```

---


## Step 6 — Configure MySQL Database

Create a MySQL database named:

```
gramconnect_db
```

Create the required tables using the SQL schema provided below:

## 1. users

Stores user (administrator) account information used for authentication.

| Column | Type | Description |
|--------|------|-------------|
| user_id | INT (Primary Key, AUTO_INCREMENT) | Unique user identifier |
| name | VARCHAR | Administrator name |
| email | VARCHAR | Unique email address used for login |
| password | VARCHAR | Encrypted password (bcrypt hash) |
| phone | VARCHAR | Contact number |

---

## 2. grievances

Stores all grievance information submitted through the application.

| Column | Type | Description |
|--------|------|-------------|
| grievance_id | INT (Primary Key, AUTO_INCREMENT) | Unique grievance identifier |
| complainant | VARCHAR | Name of the complainant |
| ward | VARCHAR | Ward number or name |
| category | VARCHAR | Type of grievance |
| department | VARCHAR | Department responsible for resolving the grievance |
| description | TEXT | Detailed grievance description |
| location | VARCHAR | Grievance location |
| status | ENUM | Pending / In Progress / Resolved |
| date_raised | TIMESTAMP | Date and time when the grievance was registered |
|user_id |INT | FOREIGN KEY (user_id) REFERENCES users(user_id)
---

## 3. admin

Stores administrator account information.

| Column | Type | Description |
|--------|------|-------------|
| admin_id | INT (Primary Key, AUTO_INCREMENT) | Unique administrator ID |
| name | VARCHAR | Administrator name |
| email | VARCHAR | Administrator email |
| password | VARCHAR | Encrypted administrator password (bcrypt hash) |

---

---

## Step 7 — Configure Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5000

JWT_SECRET=your_secret_key

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_password

DB_NAME=gramconnect_db
```

---

## Step 8 — Start the Backend

```bash
node index.js
```

or

```bash
nodemon index.js
```

The backend server will start at:

```
http://localhost:5000
```

---

## Step 9 — Access the Application

Open your browser and navigate to:

```
http://localhost:5173
```

The application is now ready to use.

---

# Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Backend server port |
| JWT_SECRET | Secret key used to generate JWT tokens |
| DB_HOST | MySQL server host |
| DB_USER | MySQL username |
| DB_PASSWORD | MySQL password |
| DB_NAME | MySQL database name |

---

# Application Modules

The application consists of the following modules:

- Home Page
- Register Grievance
- View Grievances
- Grievance Details
- Admin Sign Up
- Admin Login
- Update Status
- Access Denied
- Logout

---

# API Overview

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/grievances` | Register a new grievance |
| GET | `/grievances` | Retrieve all grievances |
| GET | `/grievances/:id` | Retrieve grievance details |
| PUT | `/grievances/:id` | Update grievance status |
| POST | `/admin/signup` | Register a new administrator |
| POST | `/admin/login` | Authenticate administrator |

---

# Application Workflow

The following workflow demonstrates how the application is used from start to finish.

## 1. Register a Grievance

- Open the Home page.
- Click **Register Grievance**.
- Fill in the following details:
  - Complainant Name
  - Ward
  - Category
  - Department
  - Description
  - Location
- Click **Submit**.
- The grievance is stored in the MySQL database.
- After successful submission, the application redirects to the **View Grievances** page.

---

## 2. View Grievances

- Open the **View Grievances** page.
- All registered grievances are displayed.
- Click on any grievance to view its complete information.

---

## 3. View Grievance Details

The grievance details page displays:

- Complainant
- Ward
- Category
- Department
- Description
- Location
- Date Raised
- Current Status

---

## 4. Update Grievance Status

- Click **Update Status**.
- If the administrator is logged in, the Update Status page opens.
- Select one of the following:
  - Pending
  - In Progress
  - Resolved
- Click **Update Status**.
- The updated status is saved in the database and reflected on the Grievance Details page.
- This allows the administrators to update the status of work and provides transparency to the citizens.

---

## 5. Unauthorized Access

If an unauthenticated user attempts to access the Update Status page:

- The application redirects the user to the **Access Denied** page.
- A message informs the user that administrator login is required.
- The user can proceed to the Admin Login page.

---

## 6. Administrator Authentication

- Administrator Sign Up
- Administrator Login
- JWT Token Generation
- Token stored in Local Storage
- Protected Update Status page
- Logout

---

# Field Description

| Field | Description |
|--------|-------------|
| Grievance ID | Unique identifier automatically generated for each grievance |
| Complainant | Name of the citizen submitting the grievance |
| Ward | Ward number or ward name |
| Category | Type of grievance |
| Department | Department responsible for resolving the grievance |
| Description | Detailed explanation of the grievance |
| Location | Location where the grievance occurred |
| Date Raised | Date and time when the grievance was registered |
| Status | Current grievance status (Pending, In Progress or Resolved) |

---

# Authentication Workflow

The application secures administrative functionality using JSON Web Tokens (JWT).

Workflow:

1. Administrator signs up.
2. Administrator logs in using email and password.
3. Backend validates credentials.
4. JWT token is generated.
5. Token is stored in Local Storage.
6. Protected pages verify the token before allowing access.
7. Only authenticated users can update grievance status.
8. Logout removes the token and ends the session.

---

# Error Handling

The application handles the following situations gracefully.

### Loading State

Displays a loading message while data is being fetched from the server.

---

### Empty State

Displays a user-friendly message when no grievances are available.

---

### Network Errors

Displays an appropriate error message when the backend server cannot be reached.

---

### Invalid Grievance

Displays **Grievance Not Found** if an invalid grievance ID is entered.

---

### Authentication Failure

Displays an **Access Denied** page if an unauthenticated user attempts to update grievance status.

---

### Failed Updates

Displays an appropriate message if updating the grievance status fails.

---

# Database Schema

The application uses a MySQL database named:

```
gramconnect_db
```

The database contains the following tables.

## users

Stores administrator authentication details.

- user_id
- name
- email
- password
- phone

---

## grievances

Stores grievance information.

- grievance_id
- complainant
- ward
- category
- department
- description
- location
- status
- date_raised
-user_id

---

## admins

Stores administrator authentication details.

- admin_id
- name
- email
- password


---

# Screenshots

Project screenshots are available inside the **screenshots/** folder.

Suggested screenshots:

- Home Page
- Register Grievance
- View Grievances
- Grievance Details
- Admin Login
- Update Status
- Access Denied
- Error Handling

---

# Demonstration Video

A complete demonstration of the project is available at:

```
**DemoVideo/**
``` 

The demonstration includes:

- Home Page
- Register Grievance
- View Grievances
- Grievance Details
- Administrator Login
- Update Status
- Logout
- Error Handling
- Access Denied Workflow

---


# Future Scope

The current version of GramConnect successfully implements the core grievance management workflow.

Future enhancements that can further improve the application include:

- Citizen login and authentication
- Search and filtering of grievances
- Email and SMS notifications
- File attachment support
- Dashboard analytics and reporting
- Complaint priority management
- Mobile application support

---


# Repository

GitHub Repository:

```
<Paste your GitHub Repository URL here>
```

---

# Author

**Anusha Nandika**

Bachelor of Engineering (Electronics and Communication Engineering)

Prince Shri Venkateshwara Padmavathy Engineering College

---

# License

This project was developed as part of an academic project for educational purposes.
=======
A full-stack Grievance Management System for Panchayat administration built with React, Express, Node.js, and MySQL to register, track, search, and manage citizen grievances.


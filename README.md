# Smart Clinic Management System

A simple clinic-management web application for recording patients and booking appointments. It has a static HTML/CSS/JavaScript frontend and an Express API.

> This is an early prototype. Patient and appointment data is kept in memory, so it is cleared whenever the API restarts. It is not suitable for real patient data or production use.

## Features

- Add, search, list, and delete patients
- Book, search, list, and delete appointments
- Dashboard counters for patients and appointments
- Landing page, login, and registration screens

## Tech stack

- Frontend: HTML, CSS, vanilla JavaScript
- Backend: Node.js, Express 5, CORS
- Database: not currently connected

## Project structure

```text
clinic-management-system/
+-- backend/
|   +-- server.js                 # Express application and API routes
|   +-- routes/                   # Patient, appointment, and auth handlers
|   +-- config/                   # Reserved for database configuration
|   `-- package.json
+-- frontend/
|   +-- index.html                # Landing page
|   +-- dashboard.html
|   +-- patients.html
|   +-- appointments.html
|   +-- css/style.css
|   +-- js/script.js
|   `-- assets/images/
`-- database/                     # Reserved for SQL schema and migrations
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- A modern web browser

## Run locally

1. Install backend dependencies:

   ```powershell
   cd backend
   npm install
   ```

2. Start the API:

   ```powershell
   npm start
   ```

   The API listens at `http://localhost:5000`.

3. Serve the `frontend` folder with a static web server, such as the **Live Server** extension in VS Code, then open `index.html` in the browser.

The frontend is configured to call `http://localhost:5000/api`. Keep the backend running while using it.

## API reference

### Patients

| Method | Endpoint | Request body | Description |
| --- | --- | --- | --- |
| `POST` | `/api/patients/add` | `{ "name": "Ada", "age": 35, "disease": "Flu" }` | Add a patient |
| `GET` | `/api/patients` | - | List all patients |
| `DELETE` | `/api/patients/:id` | - | Delete a patient |

### Appointments

| Method | Endpoint | Request body | Description |
| --- | --- | --- | --- |
| `POST` | `/api/appointments/add` | `{ "name": "Ada", "date": "2026-09-20", "time": "10:30", "ampm": "AM" }` | Book an appointment |
| `GET` | `/api/appointments` | - | List all appointments |
| `DELETE` | `/api/appointments/:id` | - | Delete an appointment |

## Current limitations

- Records are stored in arrays in server memory and disappear after a restart.
- Database, model, and SQL files are placeholders and are not used by the API.
- The login and registration pages are visual-only; authentication is not connected to the server.
- There is no validation, authorization, password security, or automated test suite.
- Do not enter real patient or health information.

## Suggested next steps

1. Add a database and implement the schema in `database/clinic_db.sql`.
2. Validate and sanitize all request data.
3. Implement authentication with hashed passwords and protected routes.
4. Add centralized error handling, meaningful HTTP status codes, and tests.
5. Move configuration such as the API URL and port into environment variables.

## License

No license has been specified for this project.

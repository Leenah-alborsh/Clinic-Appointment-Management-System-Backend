# Clinic Appointment API

A professional Backend REST API for managing clinic patients, doctors, and appointments.
Built with Node.js, Express, clean architecture, and Docker support.

--------------------------------------------------

FEATURES

- Manage Patients
- Manage Doctors
- Book & cancel Appointments
- Prevent double booking for doctors
- Strong input validation (date, time, IDs)
- Clean architecture (Routes → Controllers → Services)
- JSON file persistence (no database required)
- Dockerized for easy deployment

--------------------------------------------------

 Project Architecture

```text
src/
├── controllers/
│   ├── patients.controller.js
│   ├── doctors.controller.js
│   └── appointments.controller.js
│
├── services/
│   ├── patients.service.js
│   ├── doctors.service.js
│   └── appointments.service.js
│
├── routes/
│   ├── patients.routes.js
│   ├── doctors.routes.js
│   └── appointments.routes.js
│
├── validators/
│   └── appointment.validator.js
│
├── data/
│   ├── patients.json
│   ├── doctors.json
│   └── appointments.json
│
├── utils/
│   └── fileHandler.js
│
└── app.js


--------------------------------------------------

TECHNOLOGIES USED

- Node.js
- Express.js
- REST API
- Docker
- File-based storage (JSON)

--------------------------------------------------

API ENDPOINTS

PATIENTS
- GET /patients        → Get all patients
- POST /patients       → Add a new patient

Example:
{
  "name": "Leenah",
  "age": 22,
  "phone": "0591234567"
}

DOCTORS
- GET /doctors         → Get all doctors
- POST /doctors        → Add a new doctor

Example:
{
  "name": "Dr. Ahmad",
  "specialty": "Dentist",
  "phone": "0599876543"
}

APPOINTMENTS
- GET /appointments            → Get all appointments
- POST /appointments           → Book an appointment
- DELETE /appointments/:id     → Cancel appointment

Example:
{
  "patientId": 1,
  "doctorId": 1,
  "date": "2026-01-20",
  "time": "12:00"
}

--------------------------------------------------

BUSINESS RULES

- Appointment date cannot be in the past
- Time must be in HH:mm format
- Patient and Doctor must exist
- A doctor cannot have two appointments at the same time

--------------------------------------------------

RUN WITH DOCKER

Make sure Docker is installed and running.

1) Build the image
docker build -t clinic-api .

2) Run the container
docker run -p 3000:3000 clinic-api

Server will run on:
http://localhost:3000

--------------------------------------------------

RUN WITH DOCKER COMPOSE

docker compose up -d

--------------------------------------------------

STOPPING THE CONTAINER AND CLEANUP

docker ps
docker stop <container_id>
docker rm <container_id>

--------------------------------------------------

CONFIGURATION

- Default Port: 3000
- No environment variables are required.

--------------------------------------------------

HOW TO TEST THE API

You can test the API using a browser or Postman:

- GET http://localhost:3000/patients
- GET http://localhost:3000/doctors
- GET http://localhost:3000/appointments
- GET http://localhost:3000/health

Successful response:
{
  "status": "OK"
}

--------------------------------------------------

MAKEFILE

This project includes a Makefile to simplify Docker commands.

Available commands:
- make build
- make up
- make down
- make logs

Note: On Windows, make may require additional installation (e.g. WSL or Git Bash).

--------------------------------------------------

WHY THIS PROJECT IS PROFESSIONAL

- Clean separation of concerns
- Business logic isolated in services
- Validation layer for data integrity
- Production-ready structure
- Docker and Docker Compose support
- CI workflow with GitHub Actions
- Easy to extend in the future

--------------------------------------------------

FUTURE IMPROVEMENTS

- Authentication (JWT)
- Database integration (MongoDB / PostgreSQL)
- Unit testing
- Role-based access

--------------------------------------------------

ATTRIBUTION

This project was built from scratch for educational purposes as part of the Operating Systems Lab.

--------------------------------------------------

AUTHOR

Leenah Alborsh  
Full-stack Developer | Software Development Student

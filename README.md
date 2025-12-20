Clinic Appointment API

A professional Backend REST API for managing clinic patients, doctors, and appointments.
Built with Node.js, Express, clean architecture, and Docker support.

Features:
- Manage Patients
- Manage Doctors
- Book & cancel Appointments
- Prevent double booking for doctors
- Strong input validation (date, time, IDs)
- Clean architecture (Routes → Controllers → Services)
- JSON file persistence (no database required)
- Dockerized for easy deployment

Project Architecture:
src
├── controllers
│   ├── patients.controller.js
│   ├── doctors.controller.js
│   └── appointments.controller.js
│
├── services
│   ├── patients.service.js
│   ├── doctors.service.js
│   └── appointments.service.js
│
├── routes
│   ├── patients.routes.js
│   ├── doctors.routes.js
│   └── appointments.routes.js
│
├── validators
│   └── appointment.validator.js
│
├── data
│   ├── patients.json
│   ├── doctors.json
│   └── appointments.json
│
├── utils
│   └── fileHandler.js
│
└── app.js

Technologies Used:
- Node.js
- Express.js
- REST API
- Docker
- File-based storage (JSON)

API Endpoints:

- Patients
Method	Endpoint	Description
GET	/patients	Get all patients
POST	/patients	Add a new patient

POST /patients
{
  "name": "Leenah",
  "age": 22,
  "phone": "0591234567"
}

- Doctors
Method	Endpoint	Description
GET	/doctors	Get all doctors
POST	/doctors	Add a new doctor

POST /doctors
{
  "name": "Dr. Ahmad",
  "specialty": "Dentist",
  "phone": "0599876543"
}

- Appointments
Method	Endpoint	Description
GET	/appointments	Get all appointments
POST	/appointments	Book an appointment
DELETE	/appointments/:id	Cancel appointment

POST /appointments
{
  "patientId": 1,
  "doctorId": 1,
  "date": "2026-01-20",
  "time": "12:00"
}

Business Rules:

- Appointment date cannot be in the past
- Time must be in HH:mm format
- Patient & Doctor must exist
- A doctor cannot have two appointments at the same time

Run with Docker
1️- Build Image
docker build -t clinic-api .

2️- Run Container
docker run -p 3000:3000 clinic-api


Server will run on:

http://localhost:3000

Run Locally (Without Docker):
npm install
node src/app.js

Why This Project Is Professional?
- Clean separation of concerns
- Business logic isolated in services
- Validation layer for data integrity
- Production-ready structure
- Docker support
- Easy to extend (DB, Auth, JWT, etc.)

Author:
Leenah Alborsh
Full-stack Developer | Software Development Student

Future Improvements: 
- Authentication (JWT)
- Database integration (MongoDB / PostgreSQL)
- Unit testing
- Role-based access
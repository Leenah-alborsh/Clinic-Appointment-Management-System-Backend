# Assignment 2

## Biggest Docker Problem
The main challenge was handling file paths and module imports correctly inside the Docker container.
This was solved by using a proper WORKDIR and ensuring all required files were copied correctly using Dockerfile and .dockerignore.

## Most Important Git/GitHub Lesson
Writing clear and meaningful commit messages is essential for professional development.
Each commit should represent a logical step (structure, docker setup, documentation, fixes),
which makes the project easier to review and maintain.

- Learned how port conflicts can prevent Docker containers from starting.

## Docker Container Naming Issue

While running the Docker container, an error occurred stating that the container name was already in use.

**Cause:**  
Docker does not allow multiple containers to share the same name.

**Solution:**  
The existing container was stopped and removed before running a new one using the same name.

```bash
docker stop clinic-api
docker rm clinic-api
docker run -d -p 3000:3000 --name clinic-api clinic-api

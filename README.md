### :fire: ft_transcendence :fire:

---

This project is about creating a website for the mighty [Pong](https://en.wikipedia.org/wiki/Pong) contest!

---

### What is ft_transcendence :question:

---

ft_transcendence is an individual project at 1337 which requires that we build an online platform to play [Pong.](https://en.wikipedia.org/wiki/Pong)

The backend must be built using [NestJS](https://nestjs.com/), the [frontend](https://en.wikipedia.org/wiki/Frontend_and_backend) in any [TypeScript](https://www.typescriptlang.org/) framework of your choice and the database must be [PostgreSQL.](https://www.postgresql.org/) For the [frontend](https://en.wikipedia.org/wiki/Frontend_and_backend).

There are no restraints in regards to external libraries and the website but it needs to be a [single-page application.](https://en.wikipedia.org/wiki/Single-page_application) It should be compatible with [Google Chrome](https://www.google.com/intl/en-US/chrome/) and the other optional browser.

The user must log in using the OAuth system of [42 intranet](https://intra.42.fr/) and be able to enable a [two-factor authentication](https://authy.com/what-is-2fa/) method, for which we chose the [Google Authenticator App.](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&gl=US)

Overall, the platform should have a ranking system, chat channels, private messages, profile editing, view users status and add other members as friends.

The platform should have a ranking system, chat channels, direct messaging and allow, user status changes, friend features and some profile customization options.

The main purpose is to play an implementation of [Pong](https://en.wikipedia.org/wiki/Pong), as if it was [1972.](https://www.youtube.com/watch?v=fiShX2pTz9A) all over again There should be a few customization options such as custom maps or power-ups but the user should still be able to play the original version.
A spectator system must be implemented, spectators are able to watch the match without interfering with it.

Finally, the server structure must be containerized using [docker](https://www.docker.com/) and available with a single call of :
> docker-compose up --build

---

#### Badge :
<img src="./ft_transcendencee.png" width="150" height="150"/>

---

#### Skills :
- Rigor
- Group & interpersonal
- Web

---

#### RESSOURCES :

[Frontend Masters](https://frontendmasters.com/learn/)


---

#### criterias :

Backend: Use NestJS as the backend framework. NestJS is a popular framework for building scalable and efficient server-side applications with Node.js. It provides a modular architecture and supports TypeScript.

Frontend: Choose a TypeScript framework for the frontend. There are several options available, such as Angular, React with TypeScript, or Vue.js with TypeScript. You can choose the one that you are most comfortable with or based on your project's requirements.

Libraries and frameworks: You are free to choose any libraries or frameworks for your project. Ensure that you use the latest stable versions of all the libraries and frameworks you decide to include.

Database: Use PostgreSQL as the database for your project. PostgreSQL is a robust and feature-rich open-source relational database management system that integrates well with NestJS.

Single-page application: Design your website as a single-page application (SPA). SPAs provide a smooth and responsive user experience, allowing users to navigate within the application without page reloads. You can use frameworks like Angular, React, or Vue.js to build the SPA.

Browser compatibility: Make sure your website is compatible with the latest stable version of Google Chrome, as well as one additional web browser of your choice. Test and optimize your application for these browsers to ensure a consistent experience across platforms.

Error handling: Implement proper error handling to ensure that users encounter no unhandled errors or warnings while browsing the website. Handle exceptions gracefully and provide informative error messages to users when necessary.

Docker: Use Docker for containerization and deployment of your application. If you're running Linux, use Docker in rootless mode for security reasons. Place your Docker runtime files in the designated directories (/goinfre or /sgoinfre). Avoid using "bind-mount volumes" if you're using non-root UIDs in the container.

Launch command: Set up a Docker Compose file that allows you to launch your entire application with a single command: docker-compose up --build. This command will build the necessary images and start the containers for your backend, frontend, and database.

---

### Infrastructure :construction: :construction:

---

#### Docker && Docker-compose :

---

> Docker Compose is a tool that allows you to define and manage multi-container Docker applications. It simplifies the process of orchestrating multiple containers and their dependencies.

> To organize your infrastructure using Docker Compose for our ft_transcendance project, we create a docker-compose.yml file. 

> This docker file describes the services (containers) that make up our application, their configuration, and how they interact with each other.

---

#### Docker-compose :

---

#### First microservice -> Dockerize nestjs :

---


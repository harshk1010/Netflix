# Netflix Clone Streaming Platform

A responsive streaming platform that allows users to browse, search, and stream movies and TV shows with dynamic content fetched directly from the TMDb API. The system features secure user authentication, subscription management, personalized watch history, and favorites, all supported by a scalable backend showcasing RESTful APIs for user and subscription management.



---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Architecture](#architecture)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Database Design](#database-design)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- **Responsive UI**: Developed a fully responsive Netflix clone using React.js to ensure a smooth, engaging experience across all devices.

- **Dynamic Content Integration**: Fetches and displays real-time movie and TV show data from the TMDb API.

- **Seamless Navigation**: Implemented smooth client-side routing with React Router for intuitive user navigation.

- **Scalable Backend**: Built a modular Spring Boot backend with RESTful APIs to efficiently manage movies, genres, users, and subscriptions.

- **Secure Authentication & Authorization**: Enforced JWT-based authentication and role-based access control using Spring Security.

- **Robust Input Validation & Error Handling**: Ensured data integrity and improved reliability through comprehensive validation and centralized error management.

- **Optimized API Performance**: Designed APIs for efficient data retrieval and minimal latency, enhancing overall system responsiveness.
  

---

## Tech Stack

- **Frontend**: React.js, Redux, React Router, TMDb API

- **Backend**: Spring Boot (RESTful APIs)

- **Database**: MySQL

- **Authentication**: JWT (Role-based)

- **State Management**: Redux

- **UI Library**: Material UI

---

## Architecture

The system follows a layered architecture to ensure scalability, maintainability, and security:

- **Frontend**: Developed with React.js, the frontend directly consumes the TMDb API to fetch and display dynamic movie and TV show content. It leverages React Router for seamless navigation and Redux for efficient state management, delivering a responsive and engaging user experience across all devices.

- **Backend**: Built with Spring Boot, the backend serves as a standalone RESTful API showcase. It provides endpoints for user management, subscriptions, watch history, and favorites. This backend is designed purely for demonstration purposes and does not interact with the frontend or the TMDb API.

- **Authentication & Authorization**: The backend implements JWT-based authentication along with role-based access control to demonstrate secure user management and access policies.

- **Database**: A MySQL database is employed in the backend to persist user information, subscription details, watch history, and other related data entities.

- **Deployment**: Both frontend and backend are deployed independently, enabling flexible access and showcasing of individual components.

---

## Installation

### Prerequisites

- Java Development Kit (JDK 11 or later)  
- MySQL Server (version 8 recommended)  
- Node.js and npm (for frontend)  

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/your_username/food-website.git
cd food-website
```
  
  2. Navigate to the backend directory and build the Spring Boot application:
```bash
  cd backend
  ./mvnw clean install
```
  
  3. Start the backend server:
  ```bash   
  ./mvnw spring-boot:run
  ```

## Database Configuration

Update the `application.properties` file in the backend:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/food_app
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
```


## Usage
- Use an API testing tool like Postman to interact with the backend services.
- Register a new user account or log in with existing credentials via the API.
- Use API endpoints to manage accounts, perform transactions, and view transaction history.

<!--
![DB Image](https://res.cloudinary.com/dxfn9epwh/image/upload/v1725342370/v/cip7wwfsdvati6gvdgrz.png)
-->

## Database Design
## The MySQL database consists of the following tables:
- users: Stores user information like login credentials and subscription status.

- subscription: Tracks the active subscription of each user with start and end dates.

- subscription_plan: Defines available subscription plans (e.g., Basic, Premium).

- subscription_status: Represents the current state of a user's subscription (Active, Expired).

- genre: Lists all genres like Action, Drama, Horror, etc.

- cast: Stores actor details associated with movies or series.

- video: Represents individual movies or episodes with metadata and streaming links.

- webseries: Groups episodes under a single web series title.

- favorites: Keeps track of videos users have marked as favorites.

- review: Contains user reviews and ratings for videos.

- watch_history: Logs which videos a user has watched and when.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: git checkout -b feature-name.
3. Make your changes and commit them: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature-name.
5. Submit a pull request.

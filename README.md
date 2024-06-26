# Study Socially

A web-based application where teachers can post notes and students can read and discuss their doubts. It helps students to read notes subject-wise and clear their own and their classmates' doubts. One needs to first signup. To upload notes, one needs to log in.

## Features

- **User Authentication:** Users can log in, sign up, and log out securely. These processes are handled by Spring Security.
- **Notes Upload:** Users can upload, edit, and delete notes.
- **Discussion:** Users can clear their doubts by commenting under the post. Users can also clear other people's doubts by commenting the correct answer.
- **Categories:** Allows viewing notes subject-wise.
- **Profile Info:** Users can view their profile details.
- **About:** Contains information about the web application.
- **Services:** Shows how one needs to upload a note.
- **Contact Us:** Provides a helpline for contacting. Includes LinkedIn for contacting.

## Technology Used

- **FrontEnd:**
  - HTML
  - CSS
  - JavaScript
  - ReactJs
- **BackEnd:**
  - SpringBoot
- **Database:**
  - MySQL
- **Other:**
  - PostMan
  - Swagger
  - AWS (EC2, ElasticBeanStalk, RDS for Backend Deployment)

## FrontEnd

- Reusable components are created using React.
- Two-way data binding is done for handling client-server interactions.

## BackEnd

- Building real-time REST APIs using:
  - SpringBoot
  - Spring Security
  - JWT
  - Spring Data JPA (Hibernate)
  - MySQL
- Role-based authentication is done where the admin is allowed to create categories using PostMan or Swagger.
- Post API includes pagination and sorting.
- Search API to search posts with a particular keyword.
- Deployed the backend on AWS.
## Project Demo
https://github.com/VibhaYadav04/Study-Socially/assets/110171547/bc1110be-9359-482a-b700-64a4529d344b



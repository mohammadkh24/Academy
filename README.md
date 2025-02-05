# Academy System (Backend)

This project is a **Academy System** built using **Express** and **MongoDB**. The system allows users to view, add, and delete books. It also provides functionality for user registration and login.

## Prerequisites

To run this project, you need the following:

- **Node.js**: Version 14 or higher
- **MongoDB**: For storing data (You can use a local database or cloud services like MongoDB Atlas)
- **npm**: To install dependencies

## Installation and Setup

1. **Clone the project**

   First, clone the project from GitHub:

   ```bash
   https://github.com/mohammadkh24/Academy.git

2. **Install dependencies**

Navigate to the project directory and install the dependencies using npm:

    npm install

3. **Configure environment variables**

Create a .env file in the root of the project and add the following values:

     ```bash
    PORT=4000
    MONGO_URI=mongodb://localhost:27017/Academy
    JWT_SECRET="97c995171c4c65cb2fb26469ed77ebee71bafc8e5cb61865cb8f6a7155d7b0fedab8436639ba9b0505cd2ddd5121da1b9c038cb9c61d73e2808068084ef9415b"

4. **Start the server**

     Now, you can start the server:
   
        ```bash
          npm start
     Or for development mode:

        npm run dev

**Document** :
https://www.postman.com/teamwork-4920/workspace/my-workspace/collection/38477852-91a670d5-78fe-4689-8a5a-929679a5a066?action=share&creator=38477852

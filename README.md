#  Task Manager API (Unix-Inspired)
This project is a simple RESTful API for managing "tasks" in a Unix-like fashion. It allows clients to create, list, retrieve, update, and delete tasks, mimicking the idea of `fork` and `ls` from Unix.

##  Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv
- Postman (for testing)



### 2. Install dependencies
npm init -Y
npm i nodemon
npm i express
npm i dotenv
npm i moongose


### 3. Create `.env` file

PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/taskManager

### 4. Run the server
npm run dev

##  API Endpoints

### Create Tasks
http://localhost:4000/api/v1/createTask

### Get ALL Tasks
http://localhost:4000/api/v1/getTasks

### Get Tasks By Particular id
http://localhost:4000/api/v1/getTaskById

### Delete Tasks
http://localhost:4000/api/v1/deleteTask 

### Update Tasks
http://localhost:4000/api/v1/updateTask









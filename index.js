const express = require('express');

const dotenv = require('dotenv');

const connectDB = require("./config/database")

const taskRoutes = require('./router/route');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
// debugger;
app.use('/api/v1', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

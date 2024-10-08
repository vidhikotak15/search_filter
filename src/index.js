const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/db_connect');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

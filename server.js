const express = require('express');
const connectDB = require('./config/db');

connectDB();
const app = express()

//Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contact', require('./routes/contact'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started'))
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//API Routes
const users = require('./routes/api/users');

//Connect to Mongoose MLab 
const db = require('./config/keys.js').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Mlab Connected'))
  .catch(err => console.log(err));

//Test Connections
app.get('/', (req, res) => res.send('Ready!!'));

//User routers
app.use('/api/users', users);

const port = process.env.PORT || 7100;
app.listen(port, () => console.log(`Server Running at ${port}`));